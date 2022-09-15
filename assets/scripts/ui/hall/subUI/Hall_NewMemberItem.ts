import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { PlayerInfo } from '../../common/PlayerInfo';
const { ccclass, property } = _decorator;

@ccclass('Hall_NewMemberItem')
export class Hall_NewMemberItem extends BaseUI 
{
    @property(PlayerInfo) 
    mPlayerInfo: PlayerInfo = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mIgnoreBtn: BaseButton = null;
    @property(BaseButton) 
    mAgreeBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mIgnoreBtn.SetClickCallback(()=>
        {

        })
        this.mAgreeBtn.SetClickCallback(()=>
        {
            
        })
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

