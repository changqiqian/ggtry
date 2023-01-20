import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ToggleBtn } from '../../common/ToggleBtn';
import { HallData } from '../../hall/HallData';
import { Game_ChattingSubLayer } from '../GameData';
import { Game_ChatHistoryLayer } from './Game_ChatHistoryLayer';
import { Game_ChatShortcutLayer } from './Game_ChatShortcutLayer';
const { ccclass, property } = _decorator;

@ccclass('Game_ChattingLayer')
export class Game_ChattingLayer extends BaseUI 
{

    @property(Node) 
    mLayout: Node = null;
    @property(Node) 
    mSubLayer: Node = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mSendBtn: BaseButton = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;


    private mIndex : number = null;
    private mInited : boolean = false;



    InitParam()
    {
    }
    BindUI()
    {
        this.AddTouchCloseEvent(this.node);


        this.mSendBtn.node.active = true;
        this.mSendBtn.SetClickCallback(()=>
        {
        })


        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);

        this.AddSubView("gamePage" , "prefab/Game_ChatHistoryLayer",(_script)=>
        {
            let tempScript = _script as Game_ChatHistoryLayer;
            tempScript.InitWithData(this.mIndex);
        } ,this.mSubLayer);
        this.AddSubView("gamePage" , "prefab/Game_ChatShortcutLayer",(_script)=>
        {
            let tempScript = _script as Game_ChatShortcutLayer;
            tempScript.InitWithData(this.mIndex);
        } ,this.mSubLayer);
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
        if(this.mInited == true)
        {
            return;
        }

        this.mInited = true;
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_ChatingSubLayer.mData = Game_ChattingSubLayer.ChatHistory;



        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let current = this.mLayout.children[i].getComponent(ToggleBtn);
            current.SetDataNotify(gameData.Data_ChatingSubLayer, i);
        }
    }
    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

}



