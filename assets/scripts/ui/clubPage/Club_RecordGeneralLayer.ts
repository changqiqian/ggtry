import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordGeneralLayer')
export class Club_RecordGeneralLayer extends BaseUI 
{
    @property(Label)
    mCreator: Label = null;
    @property(Label)
    mGameID: Label = null;
    @property(Label)
    mDateTitle: Label = null;
    @property(Label)
    mRoomName: Label = null;
    @property(Label)
    mGameType: Label = null;
    @property(Label)
    mSeat: Label = null;
    @property(Label)
    mBlind: Label = null;
    @property(Label)
    mDuration: Label = null;
    @property(Label)
    mMaxPool: Label = null;
    @property(Label)
    mTotalHands: Label = null;
    @property(Label)
    mTotalBringIn: Label = null;
    @property(ScrollView)
    mScrollView: ScrollView = null;

    
    InitParam()
    {

    }
    BindUI()
    {

    }
    RegDataNotify()
    {

        HallData.Instance.Data_ClubRecordDetailSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Club_RecordDetailSubPage.General);
        })
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

