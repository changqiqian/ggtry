import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { CowboyData } from '../CowboyData';
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
        CowboyData.Instance.Data_S2CTexasCowboyTotalHistoryResp.AddListenner(this,(_data)=>
        {
            this.mGameCount.string = _data.totalGameCount+"";
            for(let i = 0 ; i < _data.totalHistory.length ; i++)
            {
                let current = _data.totalHistory[i];
                this.SetData(current , _data.totalGameCount);
            }
        });
    }

    SetData(_cowboyTotalHistory : CowboyTotalHistory , _totalGameCount : number)
    {
        switch(_cowboyTotalHistory.cowboyAreaType)
        {
            case CowboyAreaType.CowboyAreaType_0:
                {
                    this.mBoyWinRate.string = (_cowboyTotalHistory.count / _totalGameCount).toFixed(2) + "%";
                    this.mBoyCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_1:
                {
                    this.mTieWinRate.string = (_cowboyTotalHistory.count / _totalGameCount).toFixed(2) + "%";
                    this.mTieCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_2:
                {
                    this.mGirlWinRate.string = (_cowboyTotalHistory.count / _totalGameCount).toFixed(2) + "%";
                    this.mGirlCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_3:
                {
                    this.mTongSeLianPaiCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_4:
                {
                    this.mPairCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_5:
                {
                    this.mAACount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_6:
                {
                    this.mHighOrPairCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_7:
                {
                    this.mTwoPairCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_8:
                {
                    this.mTribleOrSOrFCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_9:
                {
                    this.mFullHouseCount.string = _cowboyTotalHistory.count + "";
                }
                break;
            case CowboyAreaType.CowboyAreaType_10:
                {
                    this.mQuadsOrSFCount.string = _cowboyTotalHistory.count + "";
                }
                break;
        }
    }


    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

