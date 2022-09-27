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
        CowboyData.GetInstance().Data_LocalPlayerPos.mData = this.mPlayerInfo.node.worldPosition;
    }
    BindUI() 
    {
        this.mChipCtr.InitWithData();
    }

    RegDataNotify() 
    {

        CowboyData.GetInstance().Data_SelectedChip.AddListenner(this,(_data)=>
        {
            console.log("Current Chip = " + _data);
        })


    }
    LateInit() {

    }

    CustmoerDestory() 
    {
    
    }

}

