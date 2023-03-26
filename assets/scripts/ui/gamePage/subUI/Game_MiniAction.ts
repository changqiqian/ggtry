import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { GameConfig } from '../../../GameConfig';
import { Tool } from '../../../Tool';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniAction')
export class Game_MiniAction extends BaseUI {
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mPosName: Label = null;
    @property(Label) 
    mNickName: Label = null;
    @property(Label) 
    mActName: Label = null;
    @property(Label) 
    mActAmount: Label = null;
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

    InitWithData(_act : ActionInfo)
    {
        let playerInfo = GameReplayData.Instance.GetPlayerInfoByUid(_act.uid);
        this.LoadLocalHead(parseInt(playerInfo.head) , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        })
        this.mPosName.string = GameReplayData.Instance.GetPosName(_act.uid);
        this.mNickName.string = playerInfo.nickName;
        this.mActName.string =  GameConfig.GetActionTypeName(_act.actionType);
        if(_act.actionType == ActionType.ActionType_Fold ||
            _act.actionType == ActionType.ActionType_Check)
        {
            this.mActAmount.node.active = false;
            return;
        }
        this.mActAmount.string = Tool.ConvertMoney_S2C(_act.amount) + "";
    }
}

