import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
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

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

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

