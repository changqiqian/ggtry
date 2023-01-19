import { _decorator, Component, Node, Label, instantiate, Tween } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { PlayerInfo } from '../../common/PlayerInfo';
import { Game_WinEffect } from '../../gamePage/subUI/Game_WinEffect';
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

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.StopAllTween();
        })

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            this.StopAllTween();
            let tween = new Tween(this.node);
            tween.delay(CowboyData.SettlementDelay);
            tween.call(()=>
            {
                for(let i = 0 ; i < _data.result.length ; i++)
                {
                    let current = _data.result[i];
                    if(current.uid == LocalPlayerData.Instance.Data_Uid.mData)
                    {
                        if(current.winLose > 0)
                        {
                            this.LoadPrefab("gamePage","prefab/Game_WinEffect",(_prefab)=>
                            {
                                let tempNode = instantiate(_prefab);
                                this.mPlayerInfo.node.addChild(tempNode);
                                let script = tempNode.getComponent(Game_WinEffect);
                                script.InitWithData(current.winLose);
                            })
                        }
                        break;
                    }
                }
            });
            tween.start();
        });

    }
    LateInit() {

    }

    CustmoerDestory() 
    {
    
    }

}

