import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('Game_PlayerState')
export class Game_PlayerState extends BaseUI {
    @property(Node) 
    mDarkBG: Node = null;
    @property(Label) 
    StateTitle: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    InitParam()
    {
    }
    BindUI()
    {

    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public ShowAuto(_leftTime : number , _auto : boolean)
    {
        this.StopSecondsTimer();

        this.mDarkBG.active = _auto;
        this.StateTitle.node.active = _auto;
        this.mCountDown.node.active = _auto;
        if(_auto)
        {
            if(_leftTime > 0)
            {
                this.StateTitle.string = Localization.GetString("00241");
                this.StartSecondsTimer(_leftTime , 1  , ()=>
                {
                    let seconds = this.GetRestSeconds();
                    this.mCountDown.string = seconds + "";
                    if(seconds == 0)
                    {
                        this.mCountDown.string = "";
                        this.StateTitle.string = Localization.GetString("00368");
                    }
                })
            }
            else
            {
                this.StateTitle.string = Localization.GetString("00368");
            }

        }
    }

    public ShowBuyin(_leftTime : number)
    {
        let show = _leftTime > 0;
        this.StopSecondsTimer();

        this.mDarkBG.active = show;
        this.StateTitle.node.active = show;
        this.mCountDown.node.active = show;
        if(show)
        {
            this.StateTitle.string = Localization.GetString("00248");
            this.StartSecondsTimer(_leftTime , 1  , ()=>
            {
                let seconds = this.GetRestSeconds();
                this.mCountDown.string = seconds + "";
            })
        }
    }

    public HideAll()
    {
        this.StopSecondsTimer();
        this.mDarkBG.active = false;
        this.StateTitle.node.active = false;
        this.mCountDown.node.active = false;
    }
    
}

