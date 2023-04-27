import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { Tool } from '../../../Tool';
import { GameReplayData } from '../GameReplayData';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniAction')
export class Game_MiniAction extends BaseUI {
    @property(Node) 
    mOther: Node = null;
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
    @property(Node) 
    mPosBG: Node = null;

    @property(Node) 
    mSelfBG: Node = null;
    @property(Label) 
    mSelfActName: Label = null;
    @property(Label) 
    mSelfActAmount: Label = null;
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
        this.mOther.active = false;
        this.mSelfBG.active = false;
        if(_act.uid != LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.mOther.active = true;
            this.ShowPosBG(_act.actionType);
            this.LoadHead(playerInfo.head , (_spriteFrame)=>
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
            this.mActAmount.string = Tool.ConvertMoneyTo_K(_act.amount) 
        }
        else
        {
            this.mSelfBG.active = true;
            this.mSelfActName.string =  GameConfig.GetActionTypeName(_act.actionType);
            if(_act.actionType == ActionType.ActionType_Fold ||
                _act.actionType == ActionType.ActionType_Check)
            {
                this.mSelfActAmount.node.active = false;
                return;
            }
            this.mSelfActAmount.string = Tool.ConvertMoneyTo_K(_act.amount) 
        }
    }

    public InitWithWinner(_playerWinLose : PlayerWinLose)
    {
        this.mOther.active = false;
        this.mSelfBG.active = false;
        if(_playerWinLose.uid != LocalPlayerData.Instance.Data_Uid.mData)
        {
            this.mOther.active = true;
            this.ShowPosBG(ActionType.ActionType_Check);
            this.LoadHead(_playerWinLose.head , (_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            })
            this.mPosName.string = GameReplayData.Instance.GetPosName(_playerWinLose.uid);
            this.mNickName.string = _playerWinLose.nickName;
            this.mActName.string =  Localization.GetString("00390");
            this.mActAmount.string = Tool.ConvertMoneyTo_K(_playerWinLose.winLose) 
        }
        else
        {
            this.mSelfBG.active = true;
            this.mSelfActName.string =  Localization.GetString("00390");
            this.mSelfActAmount.string = Tool.ConvertMoneyTo_K(_playerWinLose.winLose) 
        }
    }

    ShowPosBG(_actionType :ActionType)
    {
        for(let i = 0 ; i < this.mPosBG.children.length ; i++)
        {
            this.mPosBG.children[i].active = false;
        }

        this.mPosBG.getChildByName("Action" + _actionType).active = true;
    }
}

