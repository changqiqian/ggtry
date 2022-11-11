import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
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

    private mIndex : number = null;
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
      
    }
    LateInit() 
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }
}

