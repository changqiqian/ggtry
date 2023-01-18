import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { CardStruct } from '../../../base/Calculator';
import { cbEnum_Gender, CowboyData } from '../CowboyData';
import { cb_Role } from './cb_Role';
const { ccclass, property } = _decorator;

@ccclass('cb_RoleCtr')
export class cb_RoleCtr extends BaseUI 
{

    @property(cb_Role) 
    mcb_RoleMan: cb_Role = null;
    @property(cb_Role) 
    mcb_RoleGirl: cb_Role = null;
    
    InitParam() 
    {

    }
    BindUI() {

    }
    RegDataNotify() 
    {
        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            this.mcb_RoleMan.ShowAllCards(_data.boyCards);
            this.mcb_RoleGirl.ShowAllCards(_data.girlCards);

            if(_data.winner == 0)
            {
                this.mcb_RoleMan.PlayWinSpine();
            }
            else
            {
                this.mcb_RoleGirl.PlayWinSpine();
            }
        });

        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            this.mcb_RoleMan.PlayIdleSpine();
            this.mcb_RoleGirl.PlayIdleSpine();
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    ShowCards(_cards:Array<CardInfo> , _gender:cbEnum_Gender)
    {
        this.node.children[_gender].getComponent(cb_Role).ShowAllCards(_cards);
    }

}

