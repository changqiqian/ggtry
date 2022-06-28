
import { AssetManager, assetManager, Component, find, instantiate } from "cc";
import { ResMgr } from "./ResMgr";

class LayerKeyPair
{
    constructor(_key :string  , _value : cc.Node , _belong :SceneType) 
    {
        this.key = _key;
        this.value = _value;
        this.belong = _belong;
    }
    key : string ;
    value : cc.Node;
    belong : SceneType;
}

class SceneConfig
{
    constructor(_type :SceneType ,_prefabPath : string , _bundles : Array<string> , _folders : Array<string>) 
    {
        this.type = _type;
        this.bundleNames = _bundles;
        this.resFolders = _folders;
        this.prefabPath = _prefabPath;
    }
    type : SceneType;
    bundleNames : Array<string>;
    resFolders : Array<string>;
    
    prefabPath : string;
}

export enum LayerType
{
    Layer,
    Window,
}

export enum SceneType
{
    None,
    Loading,
    Login,
    Hall,
}

export class UIMgr 
{
    private static instance : UIMgr = null;
    public static GetInstance() :UIMgr
    {
        if(UIMgr.instance == null)
        {
            UIMgr.instance = new UIMgr();
        }
        return UIMgr.instance;
    }

    mLayerRoot : cc.Node = null;
    mWindowRoot : cc.Node = null;
    mLayerList : Array<LayerKeyPair>;
    mWindowList  : Array<LayerKeyPair>;
    mCurrentScene : SceneType;
    mSceneConfig : Array<SceneConfig>;
    public Init()
    {
        this.mLayerRoot = cc.find("Canvas/LayerRoot");
        this.mWindowRoot = cc.find("Canvas/WindowRoot");
        this.mLayerList = new Array<LayerKeyPair>();
        this.mWindowList = new Array<LayerKeyPair>();
        this.mCurrentScene = SceneType.None;
        this.mSceneConfig = new Array<SceneConfig>();

        //场景配置
        let resFolder:Array<string> = ["anm","font","music","prefab","texture"];
        let loadingConfig = new SceneConfig(SceneType.Loading , "prefab/LoadingUI" ,["loading"],resFolder);
        let loginConfig = new SceneConfig(SceneType.Login, "prefab/LoginUI" ,["login"],resFolder);
        let hallConfig = new SceneConfig(SceneType.Hall, "prefab/HallUI",["hall","cowboy"],resFolder);
        this.mSceneConfig.push(loadingConfig);
        this.mSceneConfig.push(loginConfig);
        this.mSceneConfig.push(hallConfig);
        
        //公用资源加载
    }

    public ShowLayer(_bundleName :string , _prefabPath:string , _type : LayerType) : cc.Node
    {
        let key = _bundleName + "/"  + _prefabPath;
        let targetNode = this.FindLayer(key,_type);
        
        if(targetNode != null)
        {
            let nodeCount = this.GetRootNode(_type).childrenCount;
            targetNode.setSiblingIndex(nodeCount);
            targetNode.active = true;
            return targetNode;
        }

        this.CreatePrefab(_bundleName,_prefabPath , (_tempNode)=>
        {
            this.GetRootNode(_type).addChild(_tempNode);
            this.RecordLayer(key , _tempNode , _type);
            return _tempNode;
        });
    }


    public CreatePrefab(_bundleName :string , _prefabPath:string, _loadFinish:Function)
    {
        ResMgr.GetAssetInBundle(_bundleName , _prefabPath , cc.Prefab , (_prefab)=>
        {
            if(_loadFinish)
            {
                let tempNode =  instantiate(_prefab);
                _loadFinish(tempNode);
            }
        });
    }


    public ChangeScene(_sceneType :SceneType)
    {
        if(_sceneType == SceneType.None)
        {
            console.log("不能跳转目标场景====SceneType.None");
            return;
        }

        if(this.mCurrentScene != SceneType.None)
        {
            let configDeleteScene = this.GetSceneConfig(this.mCurrentScene);
            this.DeleteScene( this.mCurrentScene);
            for(let i = 0 ; i < configDeleteScene.bundleNames.length ; i++)
            {
                ResMgr.ReleaseBundle(configDeleteScene.bundleNames[i]);
            }
        }

        this.mCurrentScene = _sceneType;
        let configNewScene = this.GetSceneConfig(_sceneType);
        this.PreloadSceneRes(configNewScene , ()=>
        {
            this.ShowLayer(configNewScene.bundleNames[0],configNewScene.prefabPath, LayerType.Layer);
        });
    }

    public PreloadSceneRes(_config : SceneConfig , _loadFinish : Function)
    {
        let loadCount = _config.bundleNames.length * _config.resFolders.length;
        console.log("total loadCount === " +loadCount);
        for(let i = 0 ; i < _config.bundleNames.length ; i++)
        {
            ResMgr.PreloadBundle(_config.bundleNames[i] , (_bundle)=>
            {
                ResMgr.PreloadAssetsInBundle(_bundle , _config.resFolders , ()=>
                {
                    loadCount--;
                    console.log("rest loadCount === " +loadCount);
                    if(loadCount == 0)
                    {
                        if(_loadFinish)
                        {
                            _loadFinish();
                        }
                    }
                });
            });
        }
    }

    private GetSceneConfig(_sceneType :SceneType) : SceneConfig
    {
        let index = this.mSceneConfig.findIndex((_item) => _item.type === _sceneType);
        if(index < 0)
        {
            console.log("GetSceneConfig 没有找到该场景 _sceneType ===" +_sceneType);
            return null;
        }

        return this.mSceneConfig[index];
    }

    private DeleteScene(_SceneType : SceneType)
    {
        this.DeleteLayer(LayerType.Layer,_SceneType);
        this.DeleteLayer(LayerType.Window,_SceneType);
    }


    private DeleteLayer(_type :LayerType , _belong : SceneType)
    {
        let targetList = this.GetList(_type);
        let step = 0;
        while(step < targetList.length)
        {
            if(targetList[step].belong == _belong)
            {
                console.log("删除targetList[step]===" + targetList[step].key)
                targetList[step].value.destroy();
                targetList.splice(step , 1);
            }
            else
            {
                step++;
            }
        }
    }

    private DeleteAllLayer(_type :LayerType)
    {
        let targetList = this.GetList(_type);
        for(let i = 0 ; i < targetList.length ; i++)
        {
            targetList[i].value.destroy();
        }
        targetList.splice(0 , targetList.length - 1);
    }


    private GetList(_type :LayerType) : Array<LayerKeyPair>
    {
        switch(_type)
        {
            case LayerType.Layer:
                return this.mLayerList;
            case LayerType.Window:
                return this.mWindowList;
        }
    }

    private FindLayer(_key : string , _type :LayerType) : cc.Node
    {
        let targetList = this.GetList(_type);
        let index = targetList.findIndex((_item) => _item.key === _key);
        if(index >= 0)
        {
            return targetList[index].value;
        }
        return null;
    }

    private GetRootNode( _type :LayerType) : cc.Node
    {
        let target;
        switch(_type)
        {
            case LayerType.Layer:
                target = this.mLayerRoot;
            break;
            case LayerType.Window:
                target = this.mWindowRoot;
            break;
        }
        return target;
    }

    private RecordLayer(_key : string , _node : cc.Node , _type : LayerType)
    {
        let keyPair = new LayerKeyPair(_key , _node , this.mCurrentScene);
        this.GetList(_type).push(keyPair);
    }

}

