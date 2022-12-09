import { _decorator, Component, Node, Label, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_BetAmount')
export class Game_BetAmount extends BaseUI 
{
    @property(Node) 
    mChip: Node = null;
    @property(Label) 
    mAmount: Label = null;
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

    Bet(_amount : number)
    {
        this.node.active =  true;
        this.mAmount.string = _amount + "";
    }

    public GetChipWorldPos() : Vec3
    {
        return this.mChip.worldPosition;
    }
}

