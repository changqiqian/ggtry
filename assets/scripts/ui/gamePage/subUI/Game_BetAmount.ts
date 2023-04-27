import { _decorator, Component, Node, Label, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { Tool } from '../../../Tool';
import { GameData } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_BetAmount')
export class Game_BetAmount extends BaseUI 
{
    @property(Node) 
    mChip: Node = null;
    @property(Label) 
    mAmount: Label = null;

    mData : number = GameConfig.WrongIndex;
    mReplay : boolean = false;
    mBB : number= 0;
    InitParam() 
    {

    }
    BindUI() 
    {
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_BBModeSetting.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    Bet(_amount : number ,_bb : number ,_replay : boolean)
    {
        this.mBB = _bb;
        this.mReplay = _replay;
        this.mData = _amount;
        this.node.active =  true;
        this.UpdateUI();
    }

    UpdateUI()
    {
        if(this.mData == GameConfig.WrongIndex)
        {
            return;
        }

        if(LocalPlayerData.Instance.Data_BBModeSetting.mData == false || this.mReplay )
        {
            let amountS2C = Tool.ConvertMoneyTo_K(this.mData);
            this.mAmount.string = amountS2C + "";
            return;
        }

        if(LocalPlayerData.Instance.Data_BBModeSetting.mData == true)
        {
            this.mAmount.string = Tool.ConvertToBB(this.mData , this.mBB) +""; 
        }
    }

    public GetChipWorldPos() : Vec3
    {
        return this.mChip.worldPosition;
    }
}

