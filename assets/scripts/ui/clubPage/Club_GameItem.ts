import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { CircleTimer } from '../common/CircleTimer';
import { Club_GameType } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_GameItem')
export class Club_GameItem extends BaseUI 
{
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Label) 
    mGameType: Label = null;
    @property(Label) 
    mGameName: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mLeftTime: Label = null;
    @property(Node) 
    mScoreTag: Node = null;
    @property(Node) 
    mInsuranceTag: Node = null;
    @property(Node) 
    mIpTag: Node = null;
    @property(Label) 
    mBringIn: Label = null;

    
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

    public InitWithData(_type : Club_GameType)
    {
        let tempColor;
        let gameType;
        switch(_type)
        {
            case Club_GameType.TexasCash:
                tempColor = new Color(109,176,99);
                gameType = "NLH";
            break
            case Club_GameType.ShortCash:
                tempColor = new Color(98,174,175);
                gameType = "Short";
            break
            case Club_GameType.Mtt:
                gameType = "Mtt"
                tempColor = new Color(59,52,122);
            break
            case Club_GameType.Omh:
                gameType = "Omh"
                tempColor = Color.WHITE;
            break
        }
        this.mCircleTimer.SetColor(tempColor);
        this.mGameType.string = gameType;
        this.mGameType.color = tempColor;
    }
}

