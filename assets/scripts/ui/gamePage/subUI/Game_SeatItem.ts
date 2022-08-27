import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { GameData } from '../GameData';
import { Game_Player } from './Game_Player';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatItem')
export class Game_SeatItem extends BaseUI 
{

    @property(BaseButton) 
    mSitBtn: BaseButton = null;
    @property(BaseButton) 
    mEmptyBtn: BaseButton = null;
    @property(Game_Player) 
    mGame_Player: Game_Player = null;
    mSeatID : number = null; //座位编号
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mSitBtn.SetClickCallback(()=>
        {

        });

        this.mEmptyBtn.SetClickCallback(()=>
        {

        });

        this.mGame_Player.Show(false);
    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_UpdatePlayingPlayer",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            this.mSitBtn.node.active = currentPlayer == null;
            this.mEmptyBtn.node.active = currentPlayer != null;
            if(currentPlayer == null)
            {
                return;
            }
        },this);
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

    SetSeatID(_id : number)
    {
        this.mSeatID = _id;
        this.mGame_Player.SetSeatID(_id);
    }
}

