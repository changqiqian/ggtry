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
    mGameData :GameData  = null;
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

    Bet(_amount : number , _gameData : GameData , _replay : boolean)
    {
        this.mGameData = _gameData;
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
            let amountS2C = Tool.ConvertMoney_S2C(this.mData);
            this.mAmount.string = amountS2C + "";
            return;
        }

        if(LocalPlayerData.Instance.Data_BBModeSetting.mData == true)
        {
            let bb =  this.mGameData.GetStaticData().smallBlind * 2;
            this.mAmount.string = Tool.ConvertToBB(this.mData , bb) +""; 
        }
    }

    public GetChipWorldPos() : Vec3
    {
        return this.mChip.worldPosition;
    }
}

