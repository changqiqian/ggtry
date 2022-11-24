import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";
import { GameData } from "./GameData";

//德州现金数据
export class GameDataCash extends GameData
{
    public GameStartSendMsgId() : number
    {
        return MessageId.C2S_TexasCashEnterGame
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
    public BringOutSendMsgId() : number
    {
        return MessageId.C2S_TexasCashBringOut
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
    

    
    
    

}