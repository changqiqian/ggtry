import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';

const { ccclass, property } = _decorator;

@ccclass('Mtt_RegisterFee')
export class Mtt_RegisterFee extends BaseUI 
{
    @property(Node) 
    mCoin: Node = null;
    @property(Node) 
    mDiamond: Node = null;
    @property(Node) 
    mPoint: Node = null;
    @property(Node) 
    mLeaIcon: Node = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Node) 
    mTicketDivide: Node = null;
    @property(Node) 
    mTicket: Node = null;
    @property(Label) 
    mTicketName: Label = null;
    @property(Label) 
    mTicketAmount: Label = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.HideAll();
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

    public ShowNothing(_describe : string = "")
    {
        this.HideAll();
        this.mAmount.node.active = true;
        this.mAmount.string = _describe;
    }

    public InitWithData()
    {
        this.HideAll();
       
    }


    HideAll()
    {
        this.mCoin.active = false;
        this.mDiamond.active = false;
        this.mPoint.active = false;
        this.mLeaIcon.active = false;
        this.mAmount.node.active = false;

        this.mTicketDivide.active = false;
        this.mTicket.active = false;
        this.mTicketName.node.active = false;
        this.mTicketAmount.node.active = false;
    }

    ShowTicket(_ticketAmount :string = "" , _ticketName:string = "")
    {
        this.mTicketDivide.active = true;
        this.mTicket.active = true;
        this.mTicketName.node.active = true;
        this.mTicketAmount.node.active = true;
        this.mTicketName.string = GameConfig.GetStrWithLen(_ticketName, 35);
        this.mTicketAmount.string = _ticketAmount;
    }
}

