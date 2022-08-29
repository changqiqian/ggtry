import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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

    }
    RegDataNotify() 
    {
        GameData.GetInstance().AddListener("Data_UpdatePlayingPlayer",(_current , _before)=>
        {
            let currentPlayer = GameData.GetInstance().FindPlayerBySeatId(this.mSeatID);
            let selfPlayer = GameData.GetInstance().FindPlayerByUserId(LocalPlayerData.GetInstance().Data_Uid);
            if(currentPlayer == null)
            {
                if(selfPlayer == null)
                {
                    this.mSitBtn.node.active = true;
                    this.mEmptyBtn.node.active = false;
                }
                else
                {
                    this.mSitBtn.node.active = false;
                    this.mEmptyBtn.node.active = true;
                }
            }
            else
            {
                this.mSitBtn.node.active = false;
                this.mEmptyBtn.node.active = false;
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

