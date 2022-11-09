import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { GameBase } from '../gamePage/GameBase';
import { HallData } from '../hall/HallData';
import { MultipleTableBtn } from './MultipleTableBtn';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

class GameKeyPair
{
    constructor(_index :number  , _script : GameBase) 
    {
        this.mIndex = _index;
        this.mScript = _script;
    }
    mIndex : number ;
    mScript : GameBase;
}



@ccclass('MultipleTableCtr')
export class MultipleTableCtr extends BaseUI {

    @property(Node) 
    mLayout: Node = null;

    @property(ToggleBtn) 
    mHomeToggle: ToggleBtn = null;

    public static ContentHeight :number = 160;
    public static MaxGame : number = 4;
    private mHomeIndex : number = -1;

    private mGameUI:Array<GameKeyPair> = null;
    InitParam()
    {
        this.mGameUI = new Array<GameKeyPair>();
        HallData.Instance.Data_MultipeIndex.mData = this.mHomeIndex;
        for(let i = 0 ; i < MultipleTableCtr.MaxGame ; i++)
        {
            let current = this.mLayout.children[i].getComponent(MultipleTableBtn);
            current.InitWithIndex(i);
        }

        this.mHomeToggle.SetDataNotify(HallData.Instance.Data_MultipeIndex,this.mHomeIndex);
    }
    BindUI()
    {

    }
    RegDataNotify()
    {
        HallData.Instance.Data_MultipeIndex.AddListenner(this,(_data)=>
        {
            if(_data == this.mHomeIndex)
            {
                this.HideAll();
            }
            else
            {
                this.ShowGameUI(_data);

            }
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    FindGameUI(_index : number) : GameBase
    {
        for(let i = 0 ; i < this.mGameUI.length ; i++)
        {
            let current = this.mGameUI[i];
            if(_index == current.mIndex)
            {
                return current.mScript;
            }
        }

        return null;
    }

    InsertGameUI(_index : number , _script:GameBase)
    {
        if(this.FindGameUI(_index) != null)
        {
            console.log("无法插入游戏ui，应为已经有了 _index==" + _index);
            return;
        }
        this.mGameUI.push(new GameKeyPair(_index,_script));
    }

    ShowGameUI(_index : number)
    {
        let currentGame = this.FindGameUI(_index);
        if(currentGame == null)
        {
            this.ShowLayer("gamePage","prefab/Game_Cash",true,(_script)=>
            {
                let gameScript = _script as GameBase;
                gameScript.InitWithData(_index,4+_index);
                this.InsertGameUI(_index,gameScript);
                gameScript.ShowMoveInAnimation();
            },"",_index.toString());
        }
        else
        {
            this.ShowLayer("gamePage","prefab/Game_Cash",true,null,"",_index.toString());
        }
    }

    HideAll()
    {
        for(let i = 0 ; i < this.mGameUI.length ; i++)
        {
            let current = this.mGameUI[i];
            current.mScript.Show(false);
        }
    }
}

