import { _decorator, Component, Node, instantiate, SpriteFrame, ImageAsset, assetManager, sys, view, Widget, UITransform, Vec3, Size } from 'cc';
import { CommonNotify } from '../CommonNotify';
import { GameConfig } from '../GameConfig';
import { CowboyData } from '../ui/cowboy/CowboyData';
import { HallData } from '../ui/hall/HallData';
import { LoadingData } from '../ui/loading/LoadingData';
import { LoginData } from '../ui/login/LoginData';
import { LocalPlayerData } from './LocalPlayerData';
import { ResMgr } from './ResMgr';
import { UIMgr } from './UIMgr';

class SubViewKeyPair {
    constructor(_key: string, _value: Node) {
        this.key = _key;
        this.value = _value;
    }
    key: string;
    value: Node;
}

const { ccclass, property } = _decorator;
// InitParam()
// {

// }
// BindUI()
// {

// }
// RegDataNotify()
// {

// }
// LateInit()
// {

// }
// CustmoerDestory()
// {

// }
@ccclass('BaseUI')

//如果你这个prefab有撑满全屏的背景图，那么将他放在prefab的根节点下，并且命名成BG
export abstract class BaseUI extends Component {
    mIsWindow: boolean = false;
    mLayerList: Array<SubViewKeyPair>;


    //计时器，可以自动补偿切到后台的时间，定时器停止造成的时间对不上
    mTotalCountTime : number;
    mTimerStartingTime : number;
    mTimerForward : boolean = null;

    //
    onLoad() 
    {
        this.PreInit();
        this.mIsWindow = false;
        this.mLayerList = new Array<SubViewKeyPair>();
        this.InitParam();
        this.BindUI();
        this.RegDataNotify();
    }

    start() 
    {
        this.LateInit();
    }

    onDestroy() {
        CowboyData.Instance.RemoveAllDataListennerByTarget(this);
        LoadingData.Instance.RemoveAllDataListennerByTarget(this);
        LoginData.Instance.RemoveAllDataListennerByTarget(this);
        HallData.Instance.RemoveAllDataListennerByTarget(this);
        LocalPlayerData.Instance.RemoveAllDataListennerByTarget(this);
        CommonNotify.Instance.RemoveAllDataListennerByTarget(this);
        this.StopSecondsTimer();
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
    abstract LateInit();
    //自定义析构
    abstract CustmoerDestory();

    public Show(_val: boolean) {
        this.node.active = _val;
    }

    PreInit()
    {
        
    }

    LoadSprite(_bundleName: string, _assetPath: string, _loadFinish: Function) {
        ResMgr.GetAssetInBundle(_bundleName, _assetPath, ImageAsset, (_imageAsset) => {
            if (cc.isValid(this.node, true) == false) {
                return;
            }
            let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
            _loadFinish(tempSpriteFrame);
        });
    }

    LoadLocalHead(_headIndex: number, _loadFinish: Function) {
        this.LoadSprite('common', 'texture/head/' + _headIndex.toString(), (_spriteFrame) => {
            if (_loadFinish) {
                _loadFinish(_spriteFrame);
            }
        });
    }

    LoadRemoteSprite(_url: string, _finish: Function) {
        if(_url == "")
        {
            return;
        }
        assetManager.loadRemote(_url, (_err: Error | null, _imageAsset: ImageAsset) => {
            if (cc.isValid(this.node, true) == false) {
                return;
            }
            if (_err) {
                console.error(_err.message || _err);
            } else if (_finish != null) {
                let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
                _finish(tempSpriteFrame);
            }
        });
    }

    LoadPrefab(_bundleName: string, _assetPath: string, _loadFinish: Function) {
        UIMgr.Instance.CreatePrefab(_bundleName, _assetPath, (_prefab) => {
            if (cc.isValid(this.node, true) == false) {
                return;
            }
            _loadFinish(_prefab);
        });
    }

    HaveSubView(_bundleName : string, _assetPath : string ) : boolean
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        return index >= 0;
    }

    GetSubView(_bundleName : string, _assetPath : string) : Node
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        if(index < 0)
        {
            return null;
        }

        return this.mLayerList[index].value;
    }


    AddSubView(_bundleName : string, _assetPath : string ,  _loadFinish : Function = null , _parent : Node = null)
    {
        let key = _bundleName + _assetPath;
        let index = this.mLayerList.findIndex((_item) => _item.key === key);
        if (index >= 0) 
        {
            let currentScript = this.mLayerList[index].value.getComponent(BaseUI);
            currentScript.Show(true);
            if (_loadFinish != null) {
                _loadFinish(currentScript);
            }
        } 
        else 
        {
            this.LoadPrefab(_bundleName, _assetPath, (_prefab) => 
            {
                if (cc.isValid(this.node, true) == false) 
                {
                    return;
                }
                let tempNode = instantiate(_prefab);
                if (_parent != null) 
                {
                    _parent.addChild(tempNode);
                } 
                else 
                {
                    this.node.addChild(tempNode);
                }
                let currentScript = tempNode.getComponent(BaseUI);
                let keyPair = new SubViewKeyPair(key, tempNode);
                this.mLayerList.push(keyPair);

                if (_loadFinish != null) 
                {
                    _loadFinish(currentScript);
                }
            });
        }
    }


    CloseAsWindow() 
    {
        let parentNode = this.node.parent;
        let parentScript = parentNode.getComponent(BaseUI);
        if (parentScript.mIsWindow) {
            parentScript.Show(false);
        } else {
            this.Show(false);
        }
    }
    //启动秒表  
    StartSecondsTimer(_totalTime : number , _timeSpace :number = 1 , _forward : boolean = false)
    {
        this.mTimerForward = _forward;
        if(_totalTime <= 0)
        {
            return;
        }
        this.mTotalCountTime = _totalTime * 1000;
        let tempDate = new Date();
        this.mTimerStartingTime = tempDate.getTime(); 
        this.StopSecondsTimer();
        this.schedule(this.SecondsTimerLogic, _timeSpace);
    }

    StopSecondsTimer()
    {
        this.unschedule(this.SecondsTimerLogic);
    }

    GetRestSeconds():number
    {
        let tempDate = new Date();
        let nowTime = tempDate.getTime(); 
        let timePast = nowTime - this.mTimerStartingTime;

        let restTime;
        if(this.mTimerForward)
        {
            restTime = this.mTotalCountTime + timePast;
        }
        else
        {
            restTime = this.mTotalCountTime - timePast;
        }

        if(restTime <= 0)
        {
            return 0;
        }
        return Math.ceil(restTime/1000);
    }

    GetRestMillSeconds():number
    {
        let tempDate = new Date();
        let nowTime = tempDate.getTime(); 
        let timePast = nowTime - this.mTimerStartingTime;
        let restTime ;
        if(this.mTimerForward)
        {
            restTime = this.mTotalCountTime + timePast;
        }
        else
        {
            restTime = this.mTotalCountTime - timePast;
        }

        if(restTime <= 0)
        {
            return 0;
        }
        
        return restTime;
    }

    SecondsTimerLogic()
    {
        let restTime = this.GetRestMillSeconds();
        if(restTime <= 0)
        {
            restTime = 0;
            this.StopSecondsTimer();
        }
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {


    }


    DeleteSelf()
    {
        this.node.removeFromParent();
        this.node.destroy();

    }

    //因为为了适配刘海屏幕，所有的ui都往下移动了一格，那么这些ui内部的背景图就无法撑满全屏，导致屏幕顶部刘海屏位置是黑的，
    //用这个方法就可以强制让prefab的背景图忽略刘海适配，撑满全屏
    public MaxScreen(_target : Node)
    {
        let widget = _target.getComponent(Widget);
        if(widget != null)
        {
            widget.updateAlignment();
        }
        let getVisibleSize = view.getVisibleSize();
        let tempTransform = _target.getComponent(UITransform);
        tempTransform.setContentSize(getVisibleSize);
        _target.setWorldPosition(new Vec3(getVisibleSize.width/2 ,getVisibleSize.height/2));
    }

}
