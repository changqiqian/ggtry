import { _decorator, Component, Node, instantiate, SpriteFrame, ImageAsset, assetManager } from 'cc';
import { CommonNotify } from '../CommonNotify';
import { CowboyData } from '../ui/cowboy/CowboyData';
import { GameData } from '../ui/gamePage/GameData';
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
    value: any;
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
export abstract class BaseUI extends Component {
    mIsWindow: boolean = false;
    mLayerList: Array<SubViewKeyPair>;

    //计时器，可以自动补偿切到后台的时间，定时器停止造成的时间对不上
    mTotalCountTime : number;
    mTimerStartingTime : number;
    mTimerForward : boolean = null;

    //
    onLoad() {
        this.mIsWindow = false;
        this.mLayerList = new Array<SubViewKeyPair>();
        this.InitParam();
        this.BindUI();
        this.RegDataNotify();
    }

    start() {
        this.LateInit();
    }

    onDestroy() {
        CowboyData.GetInstance().RemoveListenerByTarget(this);
        LoadingData.GetInstance().RemoveListenerByTarget(this);
        LoginData.GetInstance().RemoveListenerByTarget(this);
        HallData.GetInstance().RemoveListenerByTarget(this);
        GameData.GetInstance().RemoveListenerByTarget(this);
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
        CommonNotify.GetInstance().RemoveListenerByTarget(this);
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
        UIMgr.GetInstance().CreatePrefab(_bundleName, _assetPath, (_prefab) => {
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
                //currentScript.Show(_show);
                let keyPair = new SubViewKeyPair(key, tempNode);
                this.mLayerList.push(keyPair);

                if (_loadFinish != null) 
                {
                    _loadFinish(currentScript);
                }
            });
        }
    }

    ShowLayer(_bundleName: string, _assetPath: string, _show: boolean = true, _finishFunction: Function = null) 
    {
        UIMgr.GetInstance().ShowLayer(_bundleName, _assetPath, _show, _finishFunction);
    }

    ShowWindow(_bundleName: string, _prefabPath: string, _show: boolean = true, _finishFunction: Function = null) 
    {
        UIMgr.GetInstance().ShowWindow(_bundleName, _prefabPath, _show, _finishFunction);
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
}
