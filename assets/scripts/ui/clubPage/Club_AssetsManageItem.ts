import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { PlayerInfo } from '../common/PlayerInfo';
import { ToggleBtn } from '../common/ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManageItem')
export class Club_AssetsManageItem extends BaseUI 
{
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mID: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;

    InitParam()
    {

    }
    BindUI()
    {

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
}

