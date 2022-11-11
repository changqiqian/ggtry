import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_TableInfo')
export class Game_TableInfo extends BaseUI 
{
    @property(Label) 
    mRoomName: Label = null;
    @property(Label) 
    mRoomID: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mDoubleScore: Label = null;
    @property(Label) 
    mMinHold: Label = null;
    @property(Label) 
    mOtherInfo: Label = null;
    @property(Label) 
    mLeftTime: Label = null;
    private mIndex : number = null;
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }

    StartCountDown(_time : number)
    {
        this.StartSecondsTimer(_time);
        this.OnSecondTimer();
    }

    OnSecondTimer()
    {
        let seconds = this.GetRestSeconds();
        let preffix = Localization.GetString("00061");
        if(seconds >=0)
        {
            this.mLeftTime.string = preffix + Tool.GetRestTime_M_S(seconds);
        }
        else
        {
            this.mLeftTime.string = preffix + "00:00";
        }
    }
}

