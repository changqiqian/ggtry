import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Mtt_MatchStatus } from '../../hall/HallData';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_MttBottomTips')
export class Game_MttBottomTips extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(Label) 
    mTips: Label = null;
    InitParam() 
    {
        this.mBG.active = false;
        this.mTips.string = "";
    }
    BindUI() 
    {
        GameData.GetInstance().AddListener("Data_MttGetRoomInfo",(_current , _before)=>
        {
            if(_current.status >=  Mtt_MatchStatus.Started)
            {
                
            }
        },this);
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        GameData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }
}

