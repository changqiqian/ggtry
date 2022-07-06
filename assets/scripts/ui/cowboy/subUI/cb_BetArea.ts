import { _decorator, Component, Node, Label, Button, instantiate, UITransform, Size } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { cb_BetConfig, CowboyData } from '../CowboyData';
import { cb_HistoryLayout } from './cb_HistoryLayout';
const { ccclass, property } = _decorator;

@ccclass('cb_BetArea')
export class cb_BetArea extends BaseUI {
    @property(Label) 
    mAmount: Label = null;
    @property(Button) 
    mBetBtn: Button = null;
    @property(Label) 
    mAreaName: Label = null;
    @property(Label) 
    mAreaRatio: Label = null;
    @property(cb_HistoryLayout) 
    mHistory: cb_HistoryLayout = null;

    mBetID : number;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBetBtn.node.on(Node.EventType.TOUCH_END,this.OnBetBtn.bind(this),this);
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {
        this.mBetBtn.node.off(Node.EventType.TOUCH_END,this.OnBetBtn.bind(this),this);
    }

    OnBetBtn()
    {
        let worldPos = this.mBetBtn.node.worldPosition; 
        let offset = this.mBetBtn.node.getComponent(UITransform).contentSize;
        let haflOffset = new Size(offset.width/2 , offset.height/2);
        let localUid = LocalPlayerData.GetInstance().Data_Uid;
        let betConfig = new cb_BetConfig(worldPos,haflOffset,this.mBetID ,localUid );
        CowboyData.GetInstance().Data_BetConfig = betConfig;
    }


    SetAreaConfig(_name : string , _ratio : string , _betID :number)
    {
        this.mAreaName.string = _name;
        this.mAreaRatio.string = _ratio;
        this.mBetID = _betID;
    }

}

