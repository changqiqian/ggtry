import { _decorator, Component, Node, instantiate, SpriteFrame, ImageAsset, assetManager, sys, view, Widget, UITransform, Vec3, Size, TweenSystem, game, Game } from 'cc';
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
    mInitFlag : boolean = false;
    mLayerList: Array<SubViewKeyPair>;


    //计时器，可以自动补偿切到后台的时间，定时器停止造成的时间对不上
    mTotalCountTime : number;
    mTimerStartingTime : number;
    mTimerCallback : Function = null;
    mTimerRunning : boolean = false;
    //
    onLoad() 
    {
        game.on(Game.EVENT_SHOW,this.OnGameShow,this);
        game.on(Game.EVENT_HIDE,this.OnGameHide,this);
        this.PreInit();
        this.mIsWindow = false;
        this.mLayerList = new Array<SubViewKeyPair>();
        this.InitParam();
        this.BindUI();

        this.scheduleOnce(()=>
        {
            this.RegDataNotify();
            this.LateInit();
        },0.01)
    }

    // start() 
    // {
    //     this.scheduleOnce(()=>
    //     {
    //         this.RegDataNotify();
    //         this.LateInit();
    //     },0.01)
    // }

    onDestroy() 
    {
        game.off(Game.EVENT_SHOW,this.OnGameShow,this);
        game.off(Game.EVENT_HIDE,this.OnGameHide,this);
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

    public Show(_val: boolean) 
    {
        this.node.active = _val;
    }

    PreInit()
    {
        
    }

    CheckInitFlag()
    {
        if(this.mInitFlag)
        {
            return true;
        }

        this.mInitFlag = true;
        return false;   
    }

    LoadSprite(_bundleName: string, _assetPath: string, _loadFinish: Function) 
    {
        ResMgr.GetAssetInBundle(_bundleName, _assetPath, ImageAsset, (_imageAsset) => 
        {
            if (cc.isValid(this.node, true) == false) 
            {
                return;
            }
            let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
            _loadFinish(tempSpriteFrame);
        });
    }

    LoadLocalHead(_headIndex: number, _loadFinish: Function) 
    {
        this.LoadSprite('common', 'texture/head/' + _headIndex.toString(), (_spriteFrame) => 
        {
            if (_loadFinish) 
            {
                _loadFinish(_spriteFrame);
            }
        });
    }

    LoadRemoteSprite(_url: string, _finish: Function) 
    {
        if(_url == "")
        {
            return;
        }
        assetManager.loadRemote(_url, (_err: Error | null, _imageAsset: ImageAsset) => 
        {
            if (cc.isValid(this.node, true) == false) 
            {
                return;
            }
            if (_err) 
            {
                console.error(_err.message || _err);
            } 
            else if (_finish != null) 
            {
                let tempSpriteFrame = SpriteFrame.createWithImage(_imageAsset);
                _finish(tempSpriteFrame);
            }
        });
    }

    LoadPrefab(_bundleName: string, _assetPath: string, _loadFinish: Function) 
    {
        UIMgr.Instance.CreatePrefab(_bundleName, _assetPath, (_prefab) => 
        {
            if (cc.isValid(this.node, true) == false) 
            {
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
            if (_loadFinish != null) 
            {
                _loadFinish(currentScript);
            }
        } 
        else 
        {
            this.LoadPrefab(_bundleName, _assetPath, (_node) => 
            {
                if (cc.isValid(this.node, true) == false) 
                {
                    return;
                }
                //let tempNode = instantiate(_prefab);
                if (_parent != null) 
                {
                    _parent.addChild(_node);
                } 
                else 
                {
                    this.node.addChild(_node);
                }
                let currentScript = _node.getComponent(BaseUI);
                let keyPair = new SubViewKeyPair(key, _node);
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
        if(parentScript == null)
        {
            this.Show(false);
            return;
        }
        
        if (parentScript.mIsWindow) 
        {
            parentScript.Show(false);
        } 
        else 
        {
            this.Show(false);
        }
    }
    //启动秒表  
    StartSecondsTimer(_totalTime : number , _timeSpace :number = 1 , _callback : Function = null)
    {
        this.mTimerCallback = _callback;
        if(_totalTime <= 0)
        {
            return;
        }
        this.mTimerRunning = true;
        this.mTotalCountTime = _totalTime * 1000;
        let tempDate = new Date();
        this.mTimerStartingTime = tempDate.getTime(); 
        this.StopSecondsTimer();
        this.schedule(this.SecondsTimerLogic, _timeSpace);
        this.SecondsTimerLogic();
    }

    StopSecondsTimer()
    {
        this.mTimerRunning = false;
        this.unschedule(this.SecondsTimerLogic);
    }

    GetRestSeconds():number
    {
        let tempDate = new Date();
        let nowTime = tempDate.getTime(); 
        let timePast = nowTime - this.mTimerStartingTime;

        let restTime = this.mTotalCountTime - timePast;
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
        let restTime = this.mTotalCountTime - timePast;

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
        if(this.mTimerCallback != null)
        {
            this.mTimerCallback();
        }
    }

    AddTouchCloseEvent(_node : Node)
    {
        _node.on(Node.EventType.TOUCH_END,this.TouchToClose,this);
    }

    TouchToClose()
    {
        this.Show(false);
    }

    StopAllTween(_target : Node = null)
    {
        let target = _target == null ? this.node : _target;
        TweenSystem.instance.ActionManager.pauseTarget(target);
        TweenSystem.instance.ActionManager.removeAllActionsFromTarget(target);
    }

    DeleteSelf()
    {
        if (cc.isValid(this.node, true) == false) 
        {
            return;
        }
        this.StopAllTween();
        this.node.removeFromParent();
        this.node.destroy();
    }


    OnGameShow()
    {
        if(this.mTimerRunning)
        {
            this.SecondsTimerLogic();
        }
    }

    OnGameHide()
    {

    }

    //因为为了适配刘海屏幕，所有的ui都往下移动了一格，那么这些ui内部的背景图就无法撑满全屏，导致屏幕顶部刘海屏位置是黑的，
    //用这个方法就可以强制让prefab的背景图忽略刘海适配，撑满全屏
    public MaxScreen(_target : Node)
    {
        let widget = _target.getComponent(Widget);
        if(widget != null)
        {
            widget.updateAlignment();
            widget.enabled = false;
            widget.destroy();
        }
        let getVisibleSize = view.getVisibleSize();
        let tempTransform = _target.getComponent(UITransform);
        tempTransform.setContentSize(getVisibleSize.width*1.1 , getVisibleSize.height * 1.1);
        _target.setWorldPosition(new Vec3(getVisibleSize.width/2 ,getVisibleSize.height/2));
    }

    public RemoveAndDestoryAllChild(_target : Node)
    {
        while(_target.children.length > 0)
        {
            let current =  _target.children[0];
            current.removeFromParent();
            current.destroy();
        }
    }

    //让ui换面往下移动一个'多桌ui'
    public OffsetTop()
    {
        // if(UIMgr.Instance.IsMultipleTableShow() == false)
        // {
        //     return;
        // }


        // let widget = this.node.getComponent(Widget);
        // if(widget != null)
        // {
        //     widget.top = GameConfig.MultipleUIHeight;
        //     widget.updateAlignment();
        // }
        // else
        // {
        //     console.log("OffsetTop wrong !! 当前prefab的根节点没有挂载widget")
        // }
    }

    //让ui换面往下移动半个'多桌ui'
    public OffsetHallTop()
    {
        // if(UIMgr.Instance.IsMultipleTableShow() == false)
        // {
        //     return;
        // }
        // let widget = this.node.getComponent(Widget);
        // if(widget != null)
        // {
        //     widget.top = GameConfig.MultipleUIHeight/2;
        //     widget.updateAlignment();
        // }
        // else
        // {
        //     console.log("OffsetTop wrong !! 当前prefab的根节点没有挂载widget")
        // }
    }

}
