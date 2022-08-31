import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Mtt_PlayerRankItem')
export class Mtt_PlayerRankItem extends BaseUI 
{
    @property(Label) 
    mRank: Label = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mTableNum: Label = null;
    @property(Label) 
    mScore: Label = null;
    @property(Label) 
    mBigBlind: Label = null;
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

    public InitWithData(_userid : number , _photoUrl : string , _nickname :string ,
         _tableId : number , _score :number , _bb : number , _rank :number)
    {
        this.mRank.string = _rank +"";
        this.mID.string = _userid + "";
        this.mName.string = _nickname;
        this.mTableNum.string = _tableId + "";
        this.mScore.string = _score + "";
        this.mBigBlind.string = _bb + "";

        this.LoadLocalHead(parseInt(_photoUrl),(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
    }
}

