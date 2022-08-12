import { _decorator, Component, Node, instantiate, SpriteFrame, ImageAsset, assetManager } from 'cc';
import { ResMgr } from './ResMgr';
import { UIMgr } from './UIMgr';

class SubViewKeyPair
{
    constructor(_key :string  , _value : Node) 
    {
        this.key = _key;
        this.value = _value;
    }
    key : string ;
    value :  any;
}

const { ccclass, property } = _decorator;

@ccclass('BaseUI')
export abstract class BaseUI extends Component 
{
    mLayerList : Array<SubViewKeyPair>;
    onLoad() 
    {
        this.mLayerList = new Array<SubViewKeyPair>();
        this.InitParam();
        this.BindUI();
        this.RegDataNotify();
    }

    start()
    {
        this.LateInit();
    }

    onDestroy()
    {
        this.UnregDataNotify();
        this.CustmoerDestory();
        this.mLayerList = null;
    }

    //“把UI节点与代码变量”绑定起来
    abstract InitParam();
    //绑定ui事件
    abstract BindUI();
    //数据驱动注册
    abstract RegDataNotify();
    //延迟一贞初始化的内容
    abstract LateInit()
    //数据驱动注销
    abstract UnregDataNotify();
    //自定义析构
    abstract CustmoerDestory();

    public Show(_val : boolean)
    {
        this.node.active = _val;
    }

    LoadSprite(_bundleName : string, _assetPath : string ,  _loadFinish : Function)
    {
        ResMgr.GetAssetInBundle(_bundleName,_assetPath,ImageAsset,(_imageAsset)=>
        {
            if(cc.isValid(this.node , true) == false)
            {
                return;
            }
            let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
            _loadFinish(tempSpriteFrame)
        });
    }

    LoadRemoteSprite(_url : string , _finish : Function)
    {
        assetManager.loadRemote(_url,(_err:Error | null , _imageAsset :ImageAsset)=>
        {
            if(cc.isValid(this.node , true) == false)
            {
                return;
            }
            if(_err)
            {
                console.error(_err.message || _err);
            }
            else if(_finish != null)
            {
                let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
                _finish(tempSpriteFrame);
            }
        })
    }

    LoadPrefab(_bundleName : string, _assetPath : string ,  _loadFinish : Function)
    {
        UIMgr.GetInstance().CreatePrefab(_bundleName,_assetPath,(_prefab)=>
        {
            if(cc.isValid(this.node , true) == false)
            {
                return;
            }
            _loadFinish(_prefab)
        });
    }

    

    AddSubView(_bundleName : string, _assetPath : string , _show : boolean,  _loadFinish : Function = null , _parent : Node = null)
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        if(index >= 0)
        {
            let currentScript = this.mLayerList[index].value.getComponent(BaseUI);
            currentScript.Show(_show);
            if(_loadFinish != null)
            {
                _loadFinish(currentScript);
            }
        }
        else
        {
            this.LoadPrefab(_bundleName , _assetPath  ,  (_prefab)=>
            {
                if(cc.isValid(this.node , true) == false)
                {
                    return;
                }
                let tempNode =  instantiate(_prefab);
                if(_parent!=null)
                {
                    _parent.addChild(tempNode);
                }
                else
                {
                    this.node.addChild(tempNode);
                }
                let currentScript = tempNode.getComponent(BaseUI);
                currentScript.Show(_show);
                let keyPair = new SubViewKeyPair(key , tempNode);
                this.mLayerList.push(keyPair)

                if(_loadFinish != null)
                {
                    _loadFinish(currentScript);
                }
            });
        }
    }

    ShowLayer(_bundleName:string , _assetPath:string , _show:boolean = true , _finishFunction : Function = null)
    {
        UIMgr.GetInstance().ShowLayer(_bundleName,_assetPath,_show,_finishFunction);
    }

    Delete()
    {
        this.node.destroy();
    }
}

