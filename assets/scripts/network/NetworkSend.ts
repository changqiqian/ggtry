import { Localization } from "../base/Localization";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { GameConfig } from "../GameConfig";
import { Tool } from "../Tool";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";
import { HallData } from "../ui/hall/HallData";
import { Network } from "./Network";

export class NetworkSend extends Singleton<NetworkSend>()
{
    public EnterGame(_gameId : string , _gameType : GameType , _clubId : string = "" , _uid : string)
    {
        UIMgr.Instance.ShowLoading(true);
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
            {
                let msg = new C2SEnterGame();
                msg.gameId = _gameId;
                msg.uid = _uid;
                Network.Instance.SendMsg(MessageId.C2S_TexasCashEnterGame , C2SEnterGame.encode(msg).finish());
                console.log("进入游戏 德州现金桌 C2S_TexasCashEnterGame== " + JSON.stringify(msg))
            }
            break;
            case GameType.GameType_ShortCash:
            {
                
            }
            break;
            case GameType.GameType_OmhCash:
            {
                
            }
            break;
            case GameType.GameType_TexasMtt:
            {
                
            }
            break;
            case GameType.GameType_ShortMtt:
            {
                
            }
            break;
            case GameType.GameType_OmhMtt:
            {
                
            }
            break;
        }
    }
    
    public ExitGame( _gameId : string, _gameType : GameType)
    {
        UIMgr.Instance.ShowLoading(true);
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
            {
                let msg = new C2SExitGame();
                msg.gameId = _gameId;
                Network.Instance.SendMsg(MessageId.C2S_TexasCashExitGame , C2SExitGame.encode(msg).finish());
                console.log("退出德州现金桌 C2S_TexasCashExitGame== " + JSON.stringify(msg))
            }
            break;
            case GameType.GameType_ShortCash:
            {
                
            }
            break;
            case GameType.GameType_OmhCash:
            {
                
            }
            break;
            case GameType.GameType_TexasMtt:
            {
                
            }
            break;
            case GameType.GameType_ShortMtt:
            {
                
            }
            break;
            case GameType.GameType_OmhMtt:
            {
                
            }
            break;
        }
    }

    public SitDown(_msgId : number ,_gameId : string , _seat : number )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameSitDown();
        msg.gameId = _gameId;
        msg.seat = _seat;
        Network.Instance.SendMsg(_msgId , C2SGameSitDown.encode(msg).finish());
        console.log("坐下  === " + JSON.stringify(msg))
    }

    public StandUp(_msgId : number ,_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameStandUp();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGameStandUp.encode(msg).finish());
        console.log("站起  === " + JSON.stringify(msg))
    }

    public BringIn(_msgId : number ,_gameId : string , _amount : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameBringIn();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(_msgId , C2SGameBringIn.encode(msg).finish());
        console.log("带入  === " + JSON.stringify(msg))
    }

    public StartGame(_msgId : number ,_gameId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGameOpen();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGameOpen.encode(msg).finish());
        console.log("申请开始游戏  === " + JSON.stringify(msg))
    }
    
    public SendGameAction(_msgId : number ,_gameId : string , _actionInfo : ActionInfo)
    {
        let msg = new C2SGameAction();
        msg.gameId = _gameId;
        msg.actionInfo = _actionInfo;
        Network.Instance.SendMsg(_msgId , C2SGameAction.encode(msg).finish());
        console.log("玩家动作  === " + JSON.stringify(msg))
    }

    public SendChat(_msgId : number,_gameId : string , _content : string)
    {
        let msg = new C2SGameChat();
        msg.gameId = _gameId;
        msg.content = _content;
        Network.Instance.SendMsg(_msgId , C2SGameChat.encode(msg).finish());
        console.log("玩家聊天  === " + JSON.stringify(msg))
    }

    public SendShowPublicCards(_msgId : number,_gameId : string)
    {
        let msg = new C2SExaminePublicCard();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SExaminePublicCard.encode(msg).finish());
        console.log("看公共牌  === " + JSON.stringify(msg))
    }

    public SendShowHands(_msgId : number,_gameId : string)
    {
        let msg = new C2SExaminePrivateCard();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SExaminePrivateCard.encode(msg).finish());
        console.log("看手牌  === " + JSON.stringify(msg))
    }

    public SendExtraThinkingTime(_msgId : number,_gameId : string)
    {
        let msg = new C2SExtraThink();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SExtraThink.encode(msg).finish());
        console.log("申请思考时间  === " + JSON.stringify(msg))
    }


    public SendCuoPaiStart(_msgId : number,_gameId : string)
    {
        let msg = new C2SSqueezeStart();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SSqueezeStart.encode(msg).finish());
        console.log("申请开始搓牌  === " + JSON.stringify(msg))
    }


    public SendCuoPaiEnd(_msgId : number,_gameId : string)
    {
        let msg = new C2SSqueezeFinish();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SSqueezeFinish.encode(msg).finish());
        console.log("申请搓牌结束  === " + JSON.stringify(msg))
    }

    public GetObList(_msgId : number ,_gameId : string , _page : number , _pageSize : number)
    {
        
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetObList();
        msg.gameId = _gameId;
        msg.page = _page;
        msg.pageSize = _pageSize;
        Network.Instance.SendMsg(_msgId , C2SGetObList.encode(msg).finish());
        console.log("获取观看者列表  === " + JSON.stringify(msg))
    }

    public GetObNum(_msgId : number ,_gameId : string )
    {
        let msg = new C2SGetObSize();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGetObSize.encode(msg).finish());
        console.log("获取观看者列表数量  === " + JSON.stringify(msg))
    }

    public ShowSelfCards(_msgId : number ,_gameId : string , _cards : Array<CardInfo> )
    {
        let msg = new C2SShowSelfCard();
        msg.gameId = _gameId;
        msg.cardList = _cards;
        Network.Instance.SendMsg(_msgId , C2SShowSelfCard.encode(msg).finish());
        console.log("公开自己的手牌  === " + JSON.stringify(msg))
    }


    public AutoState(_msgId : number ,_gameId : string )
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SCancelAutoOperator();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SCancelAutoOperator.encode(msg).finish());
        console.log("托管状态申请  === " + JSON.stringify(msg))
    }

    public BuyInsurance(_msgId : number ,_gameId : string , _amount : number)
    {
        let msg = new C2SGameBuyInsurance();
        msg.gameId = _gameId;
        msg.amount = _amount;
        Network.Instance.SendMsg(_msgId , C2SGameBuyInsurance.encode(msg).finish());
        console.log("购买保险  === " + JSON.stringify(msg))
    }

    public GetRecordPlayerList(_msgId : number ,_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetStatistics();
        msg.gameId = _gameId;
        Network.Instance.SendMsg(_msgId , C2SGetStatistics.encode(msg).finish());
        console.log("获取买入列表  === " + JSON.stringify(msg))
    }
    
    public GetReplayList(_msgId : number ,_gameId : string , _page : number , _pageSize : number) 
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SSimpleReplay();
        msg.gameId = _gameId;
        msg.page = _page;
        msg.pageSize = _pageSize;
        Network.Instance.SendMsg(_msgId , C2SSimpleReplay.encode(msg).finish());
        console.log("获取游戏实时手牌列表  === " + JSON.stringify(msg))
    }

    public GetPlaterStatistic(_msgId : number ,_gameId : string , _uid : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SGetPlayerStatistics();
        msg.gameId = _gameId;
        msg.uid = _uid;
        Network.Instance.SendMsg(_msgId , C2SGetPlayerStatistics.encode(msg).finish());
        console.log("获取玩家静态数据  === " + JSON.stringify(msg))
    }

    public GetReplayDetail(_msgId : number ,_gameId : string , _index : number ) 
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SDetailReplay();
        msg.gameId = _gameId;
        msg.index = _index;
        Network.Instance.SendMsg(_msgId , C2SDetailReplay.encode(msg).finish());
        console.log("获取实时牌局回放诗句  === " + JSON.stringify(msg))
    }

    
    public RefreshGame(_msgId : number ,_gameId : string)
    {
        UIMgr.Instance.ShowLoading(true);
        let msg = new C2SRefresh();
        msg.gameId = _gameId;

        Network.Instance.SendMsg(_msgId , C2SRefresh.encode(msg).finish());
        console.log("刷新德州游戏最新信息  === " + JSON.stringify(msg))
    }
}




