import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('cb_GameHistory')
export class cb_GameHistory extends BaseUI 
{
    @property(Label) 
    mGameCount: Label = null;
    @property(Label) 
    mBoyWinRate: Label = null;
    @property(Label) 
    mTieWinRate: Label = null;
    @property(Label) 
    mGirlWinRate: Label = null;
    //////////////////////////////
    @property(Label) 
    mBoyCount: Label = null;
    @property(Label) 
    mGirlCount: Label = null;
    @property(Label) 
    mTieCount: Label = null;
    //////////////////////////////
    @property(Label) 
    mTongSeLianPaiCount: Label = null;
    @property(Label) 
    mAACount: Label = null;
    @property(Label) 
    mPairCount: Label = null;
    //////////////////////////////
    @property(Label) 
    mHighOrPairCount: Label = null;
    @property(Label) 
    mFullHouseCount: Label = null;
    @property(Label) 
    mQuadsOrSFCount: Label = null;
    @property(Label) 
    mTwoPairCount: Label = null;
    @property(Label) 
    mTribleOrSOrFCount: Label = null;
    //////////////////////////////
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
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
}

