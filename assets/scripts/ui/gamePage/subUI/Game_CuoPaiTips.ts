import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_CuoPaiTips')
export class Game_CuoPaiTips extends BaseUI {

    @property(Label) 
    mTips: Label = null;
    @property(Label) 
    mCountDown: Label = null;
    @property(Label) 
    mCost: Label = null;
    @property(BaseButton) 
    mDealBtn: BaseButton = null;
    @property(BaseButton) 
    mCuoBtn: BaseButton = null;
    InitParam()
    {
        this.mDealBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });
        this.mCuoBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });
    }
    BindUI()
    {

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

    public InitWithData(_leftTime : number)
    {
        this.mCountDown.string = _leftTime + "";
        this.StartSecondsTimer(_leftTime,1,()=>
        {
            let restTime = this.GetRestMillSeconds();
            let seconds = this.GetRestSeconds();
            this.mCountDown.string = seconds + "";
            if(restTime == 0)
            {
                this.Show(false);
            }
        })
    }

}

