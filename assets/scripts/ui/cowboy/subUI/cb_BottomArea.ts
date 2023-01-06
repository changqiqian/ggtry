import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
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
        CowboyData.Instance.Data_LocalPlayerPos.mData = this.mPlayerInfo.node.worldPosition;
    }
    BindUI() 
    {
        this.mChipCtr.InitWithData();
    }

    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_NickName.AddListenner(this,(_data)=>
        {
            this.mPlayerInfo.SetName(_data);
        });

        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            this.mPlayerInfo.SetLocalHead(Number(_data));
        });

        CowboyData.Instance.Data_Money.AddListenner(this,(_data)=>
        {
            this.mMoney.string = Tool.ConvertMoney_S2C(_data) + "";
        });

    }
    LateInit() {

    }

    CustmoerDestory() 
    {
    
    }

}

