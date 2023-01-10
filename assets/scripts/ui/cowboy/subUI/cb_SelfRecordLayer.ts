import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { cb_WinLoseCount } from './cb_WinLoseCount';
const { ccclass, property } = _decorator;

@ccclass('cb_SelfRecordLayer')
export class cb_SelfRecordLayer extends BaseUI {
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Label) 
    mGameCode: Label = null;
    @property(Node) 
    mCowboyCards: Node = null;
    @property(Node) 
    mPublicCards: Node = null;
    @property(Node) 
    mGirlCards: Node = null;
    @property(Node) 
    mAreaInfos: Node = null;
    @property(Label) 
    mTotalBet: Label = null;
    @property(Label) 
    mTotalWin: Label = null;
    @property(Label) 
    mPageNum: Label = null;
    @property(BaseButton) 
    mLastBtn: BaseButton = null;
    @property(BaseButton) 
    mNextBtn: BaseButton = null;

    mCurrentPage : number;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mCurrentPage = 0;
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetRoot(this.node);

        for(let i = 0 ; i < this.mAreaInfos.children.length ; i++)
        {
            let areaScript = this.mAreaInfos.children[i].getComponent(cb_WinLoseCount);
            areaScript.SetAreaType(i);
        }

        this.mLastBtn.SetClickCallback(()=>
        {
            
        });


        this.mNextBtn.SetClickCallback(()=>
        {

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

    GetAreaByType(_cowboyAreaType : CowboyAreaType) : cb_WinLoseCount
    {
        for(let i = 0 ; i < this.mAreaInfos.children.length ; i++)
        {
            let areaScript = this.mAreaInfos.children[i].getComponent(cb_WinLoseCount);
            if(areaScript.GetAreaType() == _cowboyAreaType)
            {
                return areaScript;
            }
        }

        return null;
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
}

