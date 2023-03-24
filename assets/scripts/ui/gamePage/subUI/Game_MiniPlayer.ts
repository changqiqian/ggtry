import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Game_BetAmount } from './Game_BetAmount';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniPlayer')
export class Game_MiniPlayer extends BaseUI 
{
    @property(Node) 
    mEmptyNode: Node = null;
    @property(Node) 
    mInfoNode: Node = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mAmount: Label = null;
    @property(Label) 
    mName: Label = null;
    @property(Node) 
    mDealer: Node = null;
    @property(Game_BetAmount) 
    mGame_BetAmount: Game_BetAmount = null;
    @property(Node) 
    mCards: Node = null;
    

    mSeatID : number = 0;

    
    
    
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

