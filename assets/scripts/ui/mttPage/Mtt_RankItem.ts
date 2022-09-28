import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { LadderRank } from '../common/LadderRank';
const { ccclass, property } = _decorator;

@ccclass('Mtt_RankItem')
export class Mtt_RankItem extends BaseUI 
{
    @property(LadderRank) 
    mLadderRank: LadderRank = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mScore: Label = null;
    @property(Node) 
    mMeBG: Node = null;
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
    public InitWithData(_data : any)
    {
        this.mName.string = _data.nickName;
        this.mID.string = 'ID: ' + _data.userId;
        this.mLadderRank.ShowRank(_data.rankingId);
        this.mScore.string = _data.score + "";
        this.LoadLocalHead(parseInt(_data.photo),(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mMeBG.active = _data.userId == LocalPlayerData.Instance.Data_Uid.mData;
    }
}

