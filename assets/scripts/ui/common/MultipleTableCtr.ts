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
        this.mGameData = MultipleTableCtr.CreateGameData(_gameType);
    }
    mIndex : number;
    mGameId : string;
    mScript : GameBase;
    mGameData : GameData;
    mPrefabName : string ;
    mGameType : GameType;
}



@ccclass('MultipleTableCtr')
export class MultipleTableCtr extends BaseUI 
{

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


    DeleteGameUI(_index : number)
    {
        let current = MultipleTableCtr.FindGameStruct(_index);
        current.mGameData.Clear();
        current.mGameData = null;
        this.GetControlButton(_index).ResetUI();
        UIMgr.Instance.DeleteUiByTag(MultipleTableCtr.GetUiTag(_index));
        let uiIndex = MultipleTableCtr.mGameStruct.findIndex((_item) => _item.mIndex === _index);
        MultipleTableCtr.mGameStruct.splice(uiIndex , 1);
        HallData.Instance.Data_MultipeIndex.mData = MultipleTableCtr.mHomeIndex;
    }

    InsertGameUI(_gameType : GameType ,_gameId : string , _seatNum : number)
    {
        let index = MultipleTableCtr.GetAviliableIndex();
        let prefabName = MultipleTableCtr.GetPrefabName(_gameType);
        UIMgr.Instance.ShowLayer("gamePage","prefab/" + prefabName,true,(_script)=>
        {
            let gameScript = _script as GameBase;
            gameScript.InitWithData(index,_seatNum);
            let gameStruct = (new GameStruct(index , _script , _gameId , _gameType));
            MultipleTableCtr.mGameStruct.push(gameStruct);
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

    public static GetGameStructByGameId(_gameId : string):GameStruct
    {
        let index = MultipleTableCtr.mGameStruct.findIndex((_item) => _item.mGameId === _gameId);
        if(index >= 0)
        {
            return MultipleTableCtr.mGameStruct[index];
        }
        console.log("Wrong! 没有找到这个游戏id ==== _gameId==" + _gameId);
        return null;
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

    public static CreateGameData(_gameType : GameType) : GameData
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

    public static GetUiTag(_index : number)
    {
        return GameData.GameUiTag + _index;
    }
}

