import { _decorator, Component, Node, instantiate, Sprite, Prefab, SpriteFrame, ImageAsset, Texture2D } from 'cc';
import { ResMgr } from './ResMgr';
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



    LoadSprite(_bundleName : string, _assetPath : string ,  _loadFinish : Function)
    {
        ResMgr.GetAssetInBundle(_bundleName,_assetPath,ImageAsset,(_imageAsset)=>
        {
            let tempSpriteFrame = new SpriteFrame();
            let tempTexuture = new Texture2D();
            tempTexuture.image = _imageAsset;
            tempSpriteFrame.texture = tempTexuture;
            _loadFinish(tempSpriteFrame)
        });
    }

    LoadPrefab(_bundleName : string, _assetPath : string ,  _loadFinish : Function)
    {
        ResMgr.GetAssetInBundle(_bundleName,_assetPath,Prefab,(_prefab)=>
        {
            _loadFinish(_prefab)
        });
    }

    AddSubView(_bundleName : string, _assetPath : string)
    {
        this.LoadPrefab(_bundleName , _assetPath  ,  (_prefab)=>
        {
            let tempNode =  instantiate(_prefab);
            this.node.addChild(tempNode);
        });

    }

}

