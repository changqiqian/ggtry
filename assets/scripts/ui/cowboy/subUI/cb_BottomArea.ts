import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { PlayerInfo } from '../../common/PlayerInfo';
import { CowboyData } from '../CowboyData';

import { cb_ChipCtr } from './cb_ChipCtr';
const { ccclass, property } = _decorator;

@ccclass('cb_BottomArea')
export class cb_BottomArea extends BaseUI {

    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mMoney: Label = null;
    @property(cb_ChipCtr) 
    mChipCtr: cb_ChipCtr = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mChipCtr.InitWithData();
    }

    RegDataNotify() 
    {
        CowboyData.GetInstance().Data_LocalPlayerPos = this.mPlayerInfo.node.worldPosition;
        CowboyData.GetInstance().AddListener("Data_SelectedChip",(_current , _before)=>
        {
            console.log("Current Chip = " + _current);
        },this);


        LocalPlayerData.GetInstance().AddListener("Data_Coin",(_current , _before)=>
        {
            this.mMoney.string = _current;
        },this);

        LocalPlayerData.GetInstance().AddListener("Data_NickName",(_current , _before)=>
        {
            this.mPlayerInfo.SetName(_current);
        },this);
    }
    LateInit() {

    }
    UnregDataNotify() 
    {
        CowboyData.GetInstance().RemoveListenerByTarget(this);
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {
    
    }

}

