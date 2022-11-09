
import { AssetManager, assetManager, Component, find, instantiate } from "cc";
import { LoadingMask } from "../ui/common/LoadingMask";
import { Toast } from "../ui/common/Toast";
import { GameUI } from "../ui/gamePage/GameUI";
import { HallUI } from "../ui/hall/HallUI";
import { LoadingUI } from "../ui/loading/LoadingUI";
import { LoginUI } from "../ui/login/LoginUI";
import { BaseUI } from "./BaseUI";
import { BaseWindow } from "./BaseWindow";
import { Localization } from "./Localization";
import { ResMgr } from "./ResMgr";
import { Singleton } from "./Singleton";

class LayerKeyPair
{
    constructor(_key :string  , _value : cc.Node , _belong :SceneType , _tag : string) 
    {
        this.key = _key;
        this.value = _value;
        this.belong = _belong;
        this.tag = _tag;
    }
    key : string ;
    value : any;
    belong : SceneType;
    tag : string ;
}

class SceneConfig
{
    constructor(_type :SceneType ,_prefabPath : string, _defaultBundle : string , _bundles : Array<string>) 
    {
        this.type = _type;
        this.bundleNames = _bundles;
        this.prefabPath = _prefabPath;
        this.defaultBundle = _defaultBundle;
    }
    type : SceneType;
    bundleNames : Array<string>; //依赖的所有bundle
    defaultBundle : string; //作为当前场景的prefab属于哪一个bundle
    prefabPath : string; //作为当前场景的prefab的路径
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
    Game,
}

export class UIMgr extends Singleton<UIMgr>()
{
    public static ResFolder : Array<string>; //Bundle目录结构
    public static InitialBundle : Array<string>;//初始bundle
    public static RestBundle : Array<string>;//剩余bundle
    mLayerRoot : cc.Node = null;
    mWindowRoot : cc.Node = null;
    mTopRoot : cc.Node = null;
    mLayerList : Array<LayerKeyPair>;
    mWindowList  : Array<LayerKeyPair>;
    mCurrentScene : SceneType;
    mSceneConfig : Array<SceneConfig>;
    mLoadingMask : LoadingMask = null;
    mToast : Toast = null;
    public Init(_loadFinish : Function)
    {
        this.mLayerRoot = cc.find("Canvas/LayerRoot");
        this.mWindowRoot = cc.find("Canvas/WindowRoot");
        this.mTopRoot = cc.find("Canvas/TopRoot");
        this.mLayerList = new Array<LayerKeyPair>();
        this.mWindowList = new Array<LayerKeyPair>();
        this.mCurrentScene = SceneType.None;
        this.mSceneConfig = new Array<SceneConfig>();

        //场景配置
        UIMgr.ResFolder = ["anm","font","music","prefab","texture"];
        UIMgr.InitialBundle = ["common","loading"];
        UIMgr.RestBundle = ["activityPage","cashPage","clubPage","gamePage","hall",
        "login","mePage","mttPage"];//,"cowboy","emoji"];
        let loadingConfig = new SceneConfig(SceneType.Loading , "prefab/LoadingUI" ,"loading" ,LoadingUI.GetUsingBundleFolder());
        let loginConfig = new SceneConfig(SceneType.Login, "prefab/LoginUI" ,"login",LoginUI.GetUsingBundleFolder());
        let hallConfig = new SceneConfig(SceneType.Hall, "prefab/HallUI" ,"hall",HallUI.GetUsingBundleFolder());
        let gameConfig = new SceneConfig(SceneType.Game, "prefab/GameUI" ,"gamePage",GameUI.GetUsingBundleFolder());

        this.mSceneConfig.push(loadingConfig);
        this.mSceneConfig.push(loginConfig);
        this.mSceneConfig.push(hallConfig);
        this.mSceneConfig.push(gameConfig);
        

        this.LoadInitRes(_loadFinish);

    }
    //公用资源加载和启动资源
    public LoadInitRes(_loadFinish : Function)
    {
        this.PreloadRes(UIMgr.InitialBundle, ()=>
        {
            //初始化菊花图
            this.CreatePrefab("common","prefab/LoadingMask" , (_tempNode)=>
            {
                let tempScript = _tempNode.getComponent(LoadingMask);
                this.mTopRoot.addChild(_tempNode);
                this.mLoadingMask = tempScript;
                this.mLoadingMask.ShowLoading(false);
            });
            //初始化快捷提示
            this.CreatePrefab("common","prefab/Toast" , (_tempNode)=>
            {
                let tempScript = _tempNode.getComponent(Toast);
                this.mTopRoot.addChild(_tempNode);
                this.mToast = tempScript;
                this.mToast.Show(false);
            });
            _loadFinish();
        });
    }

    //加载 除了启动资源外的剩下所有资源
    public LoadRestRes(_loadFinish : Function , _loadCallback : Function)
    {
        this.PreloadRes(UIMgr.RestBundle , ()=>
        {
            _loadFinish();
        } , _loadCallback);
    }

    public ShowLoading(_show:boolean , _tips:string = "Loading...")
    {
        this.mLoadingMask.ShowLoading(_show , _tips);
    }

    public ShowToast(_tips:string ,  _duration:number = 3)
    {
        let childCount = this.mTopRoot.children.length;
        this.mToast.node.setSiblingIndex(childCount);
        this.mToast.ShowToast(_tips , _duration);
    }

    public AddLayerInTopRoot(_bundleName :string , _prefabPath:string)
    {
        this.CreatePrefab(_bundleName,_prefabPath , (_tempNode)=>
        {
            this.mTopRoot.addChild(_tempNode);
            _tempNode.setSiblingIndex(0);
        });
    }

    public ShowLayer(_bundleName :string , _prefabPath:string , _show :boolean = true , _finishFunction : Function = null , _tag : string = "", _aka : string  = "")
    {
        let key = _bundleName + "/"  + _prefabPath + _aka;
        let target = this.FindLayer(key,LayerType.Layer);

        if(target != null && target.value == null)
        {
            console.log("ShowLayer 正在创建中，请不要重复创建 ===key" + key);
            return;
        }
        
        if(target != null && target.value!=null)
        {
            target.tag = _tag;
            let nodeCount = this.GetRootNode(LayerType.Layer).children.length;
            target.value.setSiblingIndex(nodeCount);
            let tempScript = target.value.getComponent(BaseUI);
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript);
            }
            return;
        }
        this.CreateRecordItem(key, LayerType.Layer , _tag);
        this.CreatePrefab(_bundleName,_prefabPath , (_tempNode)=>
        {
            this.GetRootNode(LayerType.Layer).addChild(_tempNode);
            this.RecordLayer(key , _tempNode , LayerType.Layer);
            let nodeCount = this.GetRootNode(LayerType.Layer).children.length;
            _tempNode.setSiblingIndex(nodeCount);
            let tempScript = _tempNode.getComponent(BaseUI);
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript);
            }
        });
    }

    public ShowWindow(_bundleName :string , _prefabPath:string , _show : boolean = true, _finishFunction : Function = null, _tag : string = "",_aka : string  = "")
    {
        let key = _bundleName + "/"  + _prefabPath + _aka;
        let target = this.FindLayer(key,LayerType.Window);

        if(target != null && target.value == null)
        {
            console.log("ShowWindow 正在创建中，请不要重复创建 ===key" + key);
            return;
        }

        if(target != null && target.value!=null)
        {
            target.tag = _tag;
            let nodeCount = this.GetRootNode(LayerType.Window).children.length;
            target.value.setSiblingIndex(nodeCount);
            let tempScript = target.value.getComponent(BaseWindow);
            tempScript.Show(_show);
            if(_finishFunction != null)
            {
                _finishFunction(tempScript.GetContentScript());
            }
            return;
        }

        this.CreateRecordItem(key , LayerType.Window , _tag);
        this.CreatePrefab("common","prefab/BaseWindow" , (_tempWindow)=>
        {
            this.CreatePrefab(_bundleName,_prefabPath , (_tempNode)=>
            {
                this.GetRootNode(LayerType.Window).addChild(_tempWindow);
                this.RecordLayer(key , _tempWindow , LayerType.Window);
                let tempScript = _tempWindow.getComponent(BaseWindow);
                let contentScript = _tempNode.getComponent(BaseUI);
                tempScript.SetContent(_tempNode , contentScript);
                tempScript.Show(_show);
                if(_finishFunction != null)
                {
                    _finishFunction(contentScript);
                }
            });
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

        if(this.mCurrentScene == _sceneType)
        {
            console.log("不能跳转到同一个场景 _sceneType==" + _sceneType);
            return;
        }

        if(this.mCurrentScene != SceneType.None)
        {
            let configDeleteScene = this.GetSceneConfig(this.mCurrentScene);
            this.DeleteScene( this.mCurrentScene);
            //删除bundle
            // for(let i = 0 ; i < configDeleteScene.bundleNames.length ; i++)
            // {
            //     ResMgr.ReleaseBundle(configDeleteScene.bundleNames[i]);
            // }
        }

        this.mCurrentScene = _sceneType;
        let configNewScene = this.GetSceneConfig(_sceneType);
        this.PreloadRes(configNewScene.bundleNames  , ()=>
        {
            this.ShowLayer(configNewScene.defaultBundle,configNewScene.prefabPath);
        });
    }

    public PreloadRes(_bundleNames : Array<string>  , _loadFinish : Function 
        , _loadCallback : Function = null)
    {
        let loadCount = _bundleNames.length * UIMgr.ResFolder.length;
        if(loadCount == 0)
        {
            if(_loadFinish)
            {
                _loadFinish();
            }
            return;
        }

        for(let i = 0 ; i < _bundleNames.length ; i++)
        {
            ResMgr.PreloadBundle(_bundleNames[i] , (_bundle)=>
            {
                ResMgr.PreloadAssetsInBundle(_bundle , UIMgr.ResFolder , ()=>
                {
                    loadCount--;
                    if(_loadCallback != null)
                    {
                        _loadCallback(loadCount);
                    }
                    let tips = "加载资源 BundleName:" +_bundleNames[i] + "  count =" + loadCount;
                    console.log(tips);
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

    private FindLayer(_key : string , _type :LayerType) : LayerKeyPair
    {
        let targetList = this.GetList(_type);
        let index = targetList.findIndex((_item) => _item.key === _key);
        if(index >= 0)
        {
            return targetList[index];
        }
        return null;
    }

    private GetRootNode( _type :LayerType) : cc.Node
    {
        switch(_type)
        {
            case LayerType.Layer:
                return this.mLayerRoot;
            case LayerType.Window:
                return this.mWindowRoot;
        }
    }

    private RecordLayer(_key : string , _node : cc.Node , _type : LayerType)
    {
        let target = this.FindLayer(_key,_type);
        if(target == null)
        {
            console.log("RecordLayer error 没有当前key ====" + _key);
            return;
        }
        target.value = _node;
    }

    private CreateRecordItem(_key : string ,  _type : LayerType , _tag : string)
    {
        let keyPair = new LayerKeyPair(_key , null , this.mCurrentScene , _tag);
        this.GetList(_type).push(keyPair);
    }
    
    public HideUiByTag(_tag : string)
    {
        for(let i = 0 ; i < this.mLayerList.length ; i++)
        {
            let currentKeyPair = this.mLayerList[i];
            if(currentKeyPair.tag == _tag)
            {
                if(currentKeyPair.value != null)
                {
                    let tempScript = currentKeyPair.value.getComponent(BaseUI);
                    tempScript.Show(false);
                }
            }
        }

        for(let i = 0 ; i < this.mWindowList.length ; i++)
        {
            let currentKeyPair = this.mWindowList[i];
            if(currentKeyPair.tag == _tag)
            {
                if(currentKeyPair.value != null)
                {
                    let tempScript = currentKeyPair.value.getComponent(BaseUI);
                    tempScript.Show(false);
                }
            }
        }
    }

}

