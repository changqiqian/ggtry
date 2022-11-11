import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { CircleTimer } from '../common/CircleTimer';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordItem')
export class Club_RecordItem extends BaseUI 
{
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(Label) 
    mGameType: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mDuration: Label = null;
    @property(Label) 
    mGameName: Label = null;
    @property(Label) 
    mDate: Label = null;
    @property(Label) 
    mProfit: Label = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {

        });
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

    public InitWithData(_gameType : GameType)
    {
        let tempColor;
        let gameTypeName;
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
                tempColor = new Color(109,176,99);
                gameTypeName = "NLH";

            break
            case GameType.GameType_ShortCash:
                tempColor = new Color(98,174,175);
            break
            // case GameType.GameType_Mtt:
            //     gameTypeName = "Mtt"
            //     tempColor = new Color(59,52,122);
            // break
            // case GameType.GameType_Omh:
            //     gameTypeName = "Omh"
            //     tempColor = Color.WHITE;
            // break
        }
        this.mCircleTimer.SetColor(tempColor);
        this.mGameType.string = gameTypeName;
        this.mGameType.color = tempColor;
    }
}

