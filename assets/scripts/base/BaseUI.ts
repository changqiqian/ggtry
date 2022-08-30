import { _decorator, Component, Node, instantiate, SpriteFrame, ImageAsset, assetManager } from 'cc';
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
// UnregDataNotify()
// {

// }
// CustmoerDestory()
// {

// }
@ccclass('BaseUI')
export abstract class BaseUI extends Component {
    mIsWindow: boolean = false;
    mLayerList: Array<SubViewKeyPair>;

    //计时器，可以自动补偿切到后台的时间，防止时间对不上
    mTotalCountTime : number;
    mTimerStartingTime : number;
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
        this.StopSecondsTimer();
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
    abstract LateInit();
    //数据驱动注销
    abstract UnregDataNotify();
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



    StartSecondsTimer(_totalTime : number)
    {
        if(_totalTime <= 0)
        {
            return;
        }
        this.mTotalCountTime = _totalTime;
        let tempDate = new Date();
        this.mTimerStartingTime = tempDate.getSeconds(); 
        this.StopSecondsTimer();
        this.schedule(this.SecondsTimerLogic, 1);
    }

    StopSecondsTimer()
    {
        this.unschedule(this.SecondsTimerLogic);
    }

    SecondsTimerLogic()
    {
        let tempDate = new Date();
        let nowTime = tempDate.getSeconds(); 
        let timePast = nowTime - this.mTimerStartingTime;
        let restTime = this.mTotalCountTime - timePast;
        if(restTime <= 0)
        {
            restTime = 0;
            this.StopSecondsTimer();
        }
        this.OnSecondTimer(restTime);
    }

    OnSecondTimer(_restTime : number)
    {

    }


    DeleteSelf()
    {
        this.node.removeFromParent();
        this.node.destroy();
    }
}
