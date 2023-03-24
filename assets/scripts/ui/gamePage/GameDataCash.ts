import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";
import { GameData } from "./GameData";

//德州现金数据
export class GameDataCash extends GameData
{
    public GameStartSendMsgId() : number
    {
        return MessageId.C2S_TexasCashOpen
    }
    public SitDownSendMsgId() : number
    {
        return MessageId.C2S_TexasCashSitDown
    }
    public StandUpSendMsgId() : number
    {
        return MessageId.C2S_TexasCashStandUp
    }
    public BringInSendMsgId() : number
    {
        return MessageId.C2S_TexasCashBringIn
    }

    public ActionSendMsgId() : number
    {
        return MessageId.C2S_TexasCashAction
    }
    public BuyInsuranceSendMsgId() : number
    {
        return MessageId.C2S_TexasCashBuyInsurance
    }
    public ChatSendMsgId() : number
    {
        return MessageId.C2S_TexasCashChat
    }
    
    public ObListSendMsgId() : number
    {
        return MessageId.C2S_TexasCashGetObList;
    }


    public ExtraThinkingTimeMsgId() : number
    {
        return MessageId.C2S_TexasCashExtraThink;
    }
    public ShowPublicMsgId() : number
    {
        return MessageId.C2S_TexasCashExaminePublicCard;
    }
    public ShowHansMsgId() : number
    {
        return MessageId.C2S_TexasCashExaminePrivateCard;
    }
    
    public StartCuoPaiMsgId() : number
    {
        return MessageId.C2S_TexasCashSqueezeStart;
    }
    public EndCuoPaiMsgId() : number
    {
        return MessageId.C2S_TexasCashSqueezeFinish;
    }

    public RecordPlayerMsgId() : number
    {
        return MessageId.C2S_TexasCashGetStatistics;
    }
    public ReplayListMsgId() : number
    {
        return MessageId.C2S_TexasCashSimpleReplay;
    }
    public ReplayDetailMsgId() : number
    {
        return MessageId.C2S_TexasCashDetailReplay;
    }

    public  AutoMsgId() : number
    {
        return MessageId.C2S_TexasCashCancelAutoOperator;
    }

    public PlayerStatisticMsgId() : number
    {
        return MessageId.C2S_TexasCashGetPlayerStatistics;
    }


    public OBSizeMsgId() : number
    {
        return MessageId.C2S_TexasCashGetObSize;
    }
    public ShowSelfCardsMsgId() : number
    {
        return MessageId.C2S_TexasCashShowSelfCard;
    }

    
}