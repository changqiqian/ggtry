import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { GameBase } from '../gamePage/GameBase';
import { GameData } from '../gamePage/GameData';
import { GameDataCash } from '../gamePage/GameDataCash';
import { Game_Cash } from '../gamePage/Game_Cash';
import { HallData } from '../hall/HallData';
import { MultipleTableBtn } from './MultipleTableBtn';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

class GameStruct
{
    constructor(_gameId : string = "") 
    {
        this.mGameId = _gameId;
        this.mIndex = GameConfig.WrongIndex;
        this.mGameType = null;
        this.mScript = null;
        this.mPrefabName = "";
        this.mGameData = null;
        this.mIsClubGame = false;
        this.mClubId = "";
    }

    public SetClubInfo(_clubId : string)
    {
        if(_clubId != "")
        {
            this.mClubId = _clubId;
            this.mIsClubGame = true;
        }
    }

    public InitWithData(_index :number  , _script : GameBase , _gameId : string , _gameType : GameType )
    {
        this.mIndex = _index;
        this.mGameType = _gameType;
        this.mScript = _script;
        this.mGameId = _gameId;
        this.mPrefabName = MultipleTableCtr.GetPrefabName(_gameType);
        this.mGameData = this.CreateGameData(_gameType);
    }


    mIndex : number;
    mGameId : string;
    mScript : GameBase;
    mGameData : GameData;
    mPrefabName : string ;
    mGameType : GameType;
    mClubId : string;
    mIsClubGame : boolean;

    public CreateGameData(_gameType : GameType) : GameData
    {
        let gameData = null;
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
                gameData = new GameDataCash();
            break;
            case GameType.GameType_TexasMtt:
            break;
            case GameType.GameType_ShortCash:
            break;
            case GameType.GameType_ShortMtt:
            break;
            case GameType.GameType_OmhCash:
            break;
            case GameType.GameType_OmhMtt:
            break;
        }
        return gameData;
    }
}


@ccclass('MultipleTableCtr')
export class MultipleTableCtr extends BaseUI 
{
    @property(Node) 
    mLayout: Node = null;

    @property(ToggleBtn) 
    mHomeToggle: ToggleBtn = null;

    public static GameStruct:Array<GameStruct> = new Array<GameStruct>();
    public static readonly MaxGame : number = 4;
    private static readonly HomeIndex : number = -1;

    InitParam()
    {
        HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.HomeIndex;
        for(let i = 0 ; i < MultipleTableCtr.MaxGame ; i++)
        {
            let current = this.mLayout.children[i].getComponent(MultipleTableBtn);
            current.InitWithIndex(i);
        }

        this.mHomeToggle.SetDataNotify(HallData.Instance.Data_MultipeIndex,MultipleTableCtr.HomeIndex);
    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        HallData.Instance.Data_MultipeIndex.AddListenner(this,(_data)=>
        {
            if(_data == MultipleTableCtr.HomeIndex)
            {
                MultipleTableCtr.HideAllGameUI();
            }
            else
            {
                MultipleTableCtr.ShowGameUI(_data);
            }
        });

        HallData.Instance.Data_S2CEnterGame.AddListenner(this,(_data)=>
        {
            this.InsertGameUI(_data);
        });

        HallData.Instance.Data_S2CExitGame.AddListenner(this,(_data)=>
        {
            this.DeleteGameUI(_data.gameId);
        });
        HallData.Instance.Data_S2CDismissClubGame.AddListenner(this,(_data)=>
        {
            this.DeleteGameUI(_data.gameId);
        });

        HallData.Instance.Data_S2CDismissClubGameNotify.AddListenner(this,(_data)=>
        {
            this.DeleteGameUI(_data.gameId);
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    GetControlButton(_index : number) : MultipleTableBtn
    {
        return this.mLayout.children[_index].getComponent(MultipleTableBtn);
    }

    DeleteGameUI(_gameId : string)
    {
        let current = MultipleTableCtr.FindGameStructByGameId(_gameId);
        if(current == null)
        {
            return;
        }
        current.mGameData.Clear();
        current.mGameData = null;
        let index = current.mIndex;
        this.GetControlButton(index).ResetUI();
        UIMgr.Instance.DeleteUiByTag(MultipleTableCtr.GetUiTag(index));
        MultipleTableCtr.RemoveGameStructByGameId(_gameId);
        HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.HomeIndex;
    }

    InsertGameUI(_data : S2CCommonEnterGameResp)
    {
        let gameType = _data.gameStatic.basicConfig.gameType;
        let gameId = _data.gameId;
        let seatNum = _data.gameStatic.texasConfig.seatNum;
        let index = MultipleTableCtr.GetAviliableIndex();
        let prefabName = MultipleTableCtr.GetPrefabName(gameType);
        UIMgr.Instance.ShowLayer("gamePage","prefab/" + prefabName,true,(_script)=>
        {
            let gameStruct = MultipleTableCtr.FindGameStructByGameId(gameId);
            gameStruct.InitWithData(index , _script , gameId , gameType);
            gameStruct.mGameData.SetGameInfo(_data);
            let gameScript = _script as GameBase;
            gameScript.InitWithData(index,seatNum);
            gameScript.ShowMoveInAnimation();
            this.GetControlButton(index).BindGameData(gameStruct.mGameData);
            HallData.Instance.Data_MultipeIndex.mData = index;
        },MultipleTableCtr.GetUiTag(index),index.toString());
    }

    public static FindGameStruct(_index : number) : GameStruct
    {
        for(let i = 0 ; i < MultipleTableCtr.GameStruct.length ; i++)
        {
            let current = MultipleTableCtr.GameStruct[i];
            if(_index == current.mIndex)
            {
                return current;
            }
        }

        return null;
    }

    public static FindGameStructByGameId(_gameId : string) : GameStruct
    {
        for(let i = 0 ; i < MultipleTableCtr.GameStruct.length ; i++)
        {
            let current = MultipleTableCtr.GameStruct[i];
            if(_gameId == current.mGameId)
            {
                return current;
            }
        }
        return null;
    }

    public static ShowGameUI(_index : number)
    {
        let current = MultipleTableCtr.FindGameStruct(_index);
        if(current == null)
        {
            console.log("MultipleTableCtr 当前UI还没有创建====_index===" + _index);
            HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.HomeIndex;
            return;
        }
        UIMgr.Instance.ShowLayer("gamePage","prefab/" + current.mPrefabName,true,null,MultipleTableCtr.GetUiTag(_index),_index.toString());
    }

    public static HideAllGameUI()
    {
        for(let i = 0 ; i < MultipleTableCtr.GameStruct.length ; i++)
        {
            let current = MultipleTableCtr.GameStruct[i];
            UIMgr.Instance.HideUiByTag(MultipleTableCtr.GetUiTag(current.mIndex));
        }
    }

    public static CheckGameMax() : boolean
    {
        if(MultipleTableCtr.GameStruct.length >= MultipleTableCtr.MaxGame)
        {
            return true;
        }

        return false;
    }

    public static GetAviliableIndex() : number
    {
        for(let i = 0 ; i < MultipleTableCtr.MaxGame ; i++)
        {
            let index = MultipleTableCtr.GameStruct.findIndex((_item) => _item.mIndex === i);
            if(index < 0)
            {
                return i;
            }
        }
        console.log("GetAviliableIndex Wrong! 不可能到这里来");
        return GameConfig.WrongIndex;
    }

    public static GetPrefabName(_gameType : GameType)
    {
        let name = "";
        switch(_gameType)
        {
            case GameType.GameType_TexasCash:
                name = Game_Cash.PrefabName;
            break;
            case GameType.GameType_TexasMtt:
            break;
            case GameType.GameType_ShortCash:
            break;
            case GameType.GameType_ShortMtt:
            break;
            case GameType.GameType_OmhCash:
            break;
            case GameType.GameType_OmhMtt:
            break;
        }
        return name;
    }


    public static GetUiTag(_index : number)
    {
        return GameData.GameUiTag + _index;
    }

    public static CreateNewGameStruct(_gameId : string , _clubId : string = "")
    {
        let gameStruct = new GameStruct(_gameId);
        gameStruct.SetClubInfo(_clubId);
        MultipleTableCtr.GameStruct.push(gameStruct);
    }

    public static RemoveGameStructByGameId(_gameId : string )
    {
        let uiIndex = MultipleTableCtr.GameStruct.findIndex((_item) => _item.mGameId === _gameId);
        if(uiIndex >= 0)
        {
            MultipleTableCtr.GameStruct.splice(uiIndex , 1);
            return;
        }

        console.log("RemoveGameStructByGameId wrong _gameId===" + _gameId);
    }

    //检查是否能进入房间
    public static CanEnterGame(_gameId : string , _clubId : string = "") : boolean
    {
        if(MultipleTableCtr.CheckGameMax())
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00239"));
            return false;
        } 

        let tryToGetGameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
        if(tryToGetGameStruct!=null)
        {
            //如果已经进过当前房间了，直接切换到当前房间页面，就不用重新发送进入房间消息了
            HallData.Instance.Data_MultipeIndex.mData = tryToGetGameStruct.mIndex;
            return false;
        }

        MultipleTableCtr.CreateNewGameStruct(_gameId , _clubId);

        return true;
    }
}

