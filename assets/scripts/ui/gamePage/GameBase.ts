import { _decorator, Component, Node, instantiate, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { Game_BottomUI } from './subUI/Game_BottomUI';
import { Game_ChatingCtr } from './subUI/Game_ChatingCtr';
import { Game_ControlBtns } from './subUI/Game_ControlBtns';
import { Game_GameStartInfo } from './subUI/Game_GameStartInfo';
import { Game_Pot } from './subUI/Game_Pot';
import { Game_PublicCards } from './subUI/Game_PublicCards';
import { Game_SeatUI } from './subUI/Game_SeatUI';
import { Game_SelfAction } from './subUI/Game_SelfAction';
import { Game_SelfPreAction } from './subUI/Game_SelfPreAction';
import { Game_SelfUI } from './subUI/Game_SelfUI';
import { Game_TopUI } from './subUI/Game_TopUI';

const { ccclass, property } = _decorator;

@ccclass('GameBase')
export class GameBase extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;

    mIndex : number = null;
    mMovingShow: MovingShow = null;

    InitParam() 
    {
        this.OffsetTop();
    }
    BindUI() 
    {
        this.mMovingShow = this.node.getComponent(MovingShow);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetHideAnimationCallback(()=>
        {
            this.node.active = false;
        })
    }
    RegDataNotify() 
    {
        // LoginData.Instance.Data_LoginSuccessData.AddListenner(this,(_data)=>
        // {
        //     if(_data)
        //     {
        //         return;
        //     }
        //     this.GetGameInfoMsg();
        // });
    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {

    }

    public ShowMoveInAnimation()
    {
        this.mMovingShow.ShowAnimation();
    }

    InitBottom()
    {
        this.AddSubView("gamePage","prefab/Game_BottomUI" , (_script)=>
        {
            let tempScript = _script as Game_BottomUI;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitGameStartInfo()
    {
        this.AddSubView("gamePage","prefab/Game_GameStartInfo", (_script)=>
        {
            let tempScript = _script as Game_GameStartInfo;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitPot()
    {
        this.AddSubView("gamePage","prefab/Game_Pot", (_script)=>
        {
            let tempScript = _script as Game_Pot;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitPublicCards()
    {
        this.AddSubView("gamePage","prefab/Game_PublicCards", (_script)=>
        {
            let tempScript = _script as Game_PublicCards;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitSelfAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfAction", (_script)=>
        {
            let tempScript = _script as Game_SelfAction;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitSelfPreAction()
    {
        this.AddSubView("gamePage","prefab/Game_SelfPreAction", (_script)=>
        {
            let tempScript = _script as Game_SelfPreAction;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitSelfUI()
    {
        this.AddSubView("gamePage","prefab/Game_SelfUI", (_script)=>
        {
            let tempScript = _script as Game_SelfUI;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitTopUI()
    {
        this.AddSubView("gamePage","prefab/Game_TopUI", (_script)=>
        {
            let tempScript = _script as Game_TopUI;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitControlBtns()
    {
        this.AddSubView("gamePage","prefab/Game_ControlBtns", (_script)=>
        {
            let tempScript = _script as Game_ControlBtns;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitSeatUI(_seatCount : number)
    {
        let prefabName = "prefab/Game_SeatUI" + _seatCount;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {
            let tempScript = _script as Game_SeatUI;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitOtherUI()
    {

    }

    InitChatCtr()
    {
        this.AddSubView("gamePage","prefab/Game_ChatingCtr" , (_script)=>
        {
            let tempScript = _script as Game_ChatingCtr;
            tempScript.InitWithData(this.mIndex);
        });
    }
    

    public InitWithData(_index : number,_seatNum : number)
    {
        this.mIndex = _index;
        this.InitBottom();
        this.InitGameStartInfo();
        this.InitPot();
        this.InitPublicCards();
        this.InitSelfAction();
        this.InitSelfPreAction();
        this.InitSelfUI();
        this.InitTopUI();
        this.InitControlBtns();
        this.InitOtherUI();
        this.InitSeatUI(_seatNum);

        this.LoadSprite("gamePage" , "texture/bg/BG" + this.mIndex,(_spriteFrame)=>
        {
            this.mBG.spriteFrame = _spriteFrame;
        });
    }

    public GetIndex() : number
    {
        return this.mIndex;
    }

    GetGameInfoMsg()
    {

    }

}

