import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
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
    constructor(_index :number  , _script : GameBase , _gameId : string , _gameType : GameType) 
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
    public static MultipleUIHeight : number = 150;
    @property(Node) 
    mLayout: Node = null;

    @property(ToggleBtn) 
    mHomeToggle: ToggleBtn = null;

    public static mGameStruct:Array<GameStruct> = new Array<GameStruct>();
    public static MaxGame : number = 4;
    private static mHomeIndex : number = -1;

  
    InitParam()
    {
        HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.mHomeIndex;
        for(let i = 0 ; i < MultipleTableCtr.MaxGame ; i++)
        {
            let current = this.mLayout.children[i].getComponent(MultipleTableBtn);
            current.InitWithIndex(i);
        }

        this.mHomeToggle.SetDataNotify(HallData.Instance.Data_MultipeIndex,MultipleTableCtr.mHomeIndex);
    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        HallData.Instance.Data_MultipeIndex.AddListenner(this,(_data)=>
        {
            if(_data == MultipleTableCtr.mHomeIndex)
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
            this.InsertGameUI(_data.gameStatic.basicConfig.gameType,_data.gameId,_data.gameStatic.texasConfig.seatNum,_data.gameStatic);
        });

        HallData.Instance.Data_S2CExitGame.AddListenner(this,(_data)=>
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
        current.mGameData.Clear();
        current.mGameData = null;
        let index = current.mIndex;
        this.GetControlButton(index).ResetUI();
        UIMgr.Instance.DeleteUiByTag(MultipleTableCtr.GetUiTag(index));
        let uiIndex = MultipleTableCtr.mGameStruct.findIndex((_item) => _item.mIndex === index);
        MultipleTableCtr.mGameStruct.splice(uiIndex , 1);
        HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.mHomeIndex;
    }

    InsertGameUI(_gameType : GameType ,_gameId : string , _seatNum : number , _gameStaticData : GameStaticData)
    {
        let index = MultipleTableCtr.GetAviliableIndex();
        let prefabName = MultipleTableCtr.GetPrefabName(_gameType);
        UIMgr.Instance.ShowLayer("gamePage","prefab/" + prefabName,true,(_script)=>
        {
            let gameStruct = (new GameStruct(index , _script , _gameId , _gameType));
            gameStruct.mGameData.SetGameInfo(_gameStaticData);
            MultipleTableCtr.mGameStruct.push(gameStruct);
            let gameScript = _script as GameBase;
            gameScript.InitWithData(index,_seatNum);
            gameScript.ShowMoveInAnimation();
            this.GetControlButton(index).BindGameData(gameStruct.mGameData);
            HallData.Instance.Data_MultipeIndex.mData = index;
        },MultipleTableCtr.GetUiTag(index),index.toString());
    }

    public static FindGameStruct(_index : number) : GameStruct
    {
        for(let i = 0 ; i < MultipleTableCtr.mGameStruct.length ; i++)
        {
            let current = MultipleTableCtr.mGameStruct[i];
            if(_index == current.mIndex)
            {
                return current;
            }
        }

        return null;
    }

    public static FindGameStructByGameId(_gameId : string) : GameStruct
    {
        for(let i = 0 ; i < MultipleTableCtr.mGameStruct.length ; i++)
        {
            let current = MultipleTableCtr.mGameStruct[i];
            if(_gameId == current.mGameId)
            {
                return current;
            }
        }
        return null;
    }
    public static GetGameDataByIndex(_index : number):GameData
    {
        let current = MultipleTableCtr.FindGameStruct(_index);
        if(current == null)
        {
            console.log("GetGameDataByIndex! 没有找到这个游戏id对应的数据驱动 ==== _index==" + _index);
            return null;
        }

        return current.mGameData;
    }
    
    public static GetGameDataByGameId(_gameId : string):GameData
    {
        let current = MultipleTableCtr.FindGameStructByGameId(_gameId);
        if(current == null)
        {
            console.log("GetGameDataByGameId! 没有找到这个游戏id对应的数据驱动 ==== _gameId==" + _gameId);
            return null;
        }

        return current.mGameData;
    }
    public static ShowGameUI(_index : number)
    {
        let current = MultipleTableCtr.FindGameStruct(_index);
        if(current == null)
        {
            console.log("MultipleTableCtr 当前UI还没有创建====_index===" + _index);
            HallData.Instance.Data_MultipeIndex.mData = this.mHomeIndex;
            return;
        }
        UIMgr.Instance.ShowLayer("gamePage","prefab/" + current.mPrefabName,true,null,MultipleTableCtr.GetUiTag(_index),_index.toString());
    }

    public static HideAllGameUI()
    {
        for(let i = 0 ; i < MultipleTableCtr.mGameStruct.length ; i++)
        {
            let current = MultipleTableCtr.mGameStruct[i];
            current.mScript.Show(false);
        }
    }

    public static CheckGameMax() : boolean
    {
        let aviliableIndex = MultipleTableCtr.GetAviliableIndex();
        if(aviliableIndex >= MultipleTableCtr.MaxGame)
        {
            return true;
        }

        return false;
    }

    public static GetAviliableIndex() : number
    {
        if(MultipleTableCtr.mGameStruct.length == 0)
        {
            return 0;
        }

        for(let i = 0 ; i < MultipleTableCtr.mGameStruct.length ; i++)
        {
            let index = MultipleTableCtr.mGameStruct.findIndex((_item) => _item.mIndex === i);
            if(index < 0)
            {
                return i;
            }
        }
        console.log("Wrong! 不可能到这里来");
        return 0;
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
}

