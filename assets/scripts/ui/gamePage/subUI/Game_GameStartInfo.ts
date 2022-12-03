import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_GameStartInfo')
export class Game_GameStartInfo extends BaseUI 
{
    @property(BaseButton) 
    mStartBtn: BaseButton = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mTips: Label = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.active = false;
        this.mStartBtn.Show(false);
        this.mCountDown.node.active = false;
        this.mTips.string = Localization.GetString("00246");


        this.mStartBtn.SetClickCallback(()=>
        {
            let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
            let gameData = gameStruct.mGameData;
            NetworkSend.Instance.StartGame(gameData.GameStartSendMsgId(),gameStruct.mGameId);
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        });

        gameData.Data_S2CCommonStartNotify.AddListenner(this,(_data)=>
        {
            this.UpdateUI();
        });
    }

    UpdateUI()
    {
        this.node.active = false;
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        let dynamicData = gameData.GetDynamicData();
        let state = dynamicData.state;
        let autoStartNum = gameData.GetStaticData().texasConfig.autoStartNum;
        if(autoStartNum > 0)
        {
            dynamicData.seatInfos
            this.mTips.string = Localization.GetString("00246");
            return;
        }

        let currentClub = LocalPlayerData.Instance.GetClubInfoByClubId(gameStruct.mClubId);
        if(currentClub == null)
        {
            return;
        }


        let gameStarted = state >= TexasCashState.TexasCashState_Waiting;
        if(gameStarted == true)
        {
            return;
        }
        this.node.active = true;
        let haveRights = currentClub.clubMember.memberType > ClubMemberType.ClubAccountType_Normal;
        this.mStartBtn.Show(haveRights);
        this.mTips.node.active = !haveRights;

    }
}

