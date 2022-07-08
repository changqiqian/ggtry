import { _decorator, Component, Node, instantiate, Sprite, Prefab, SpriteFrame, ImageAsset, Texture2D, assetManager, Asset, LoadCompleteCallback } from 'cc';
import { ResMgr } from './ResMgr';
import { UIMgr } from './UIMgr';


const { ccclass, property } = _decorator;

@ccclass('BaseUI')
export abstract class BaseUI extends Component 
{
    onLoad() 
    {
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
            if(_err)
            {
                console.error(_err.message || _err);
            }
            else if(_finish != null)
            {
                if(cc.isValid(this.node , true) == false)
                {
                    return;
                }
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

    AddSubView(_bundleName : string, _assetPath : string)
    {
        this.LoadPrefab(_bundleName , _assetPath  ,  (_prefab)=>
        {
            if(cc.isValid(this.node , true) == false)
            {
                return;
            }
            let tempNode =  instantiate(_prefab);
            this.node.addChild(tempNode);
        });

    }

}

