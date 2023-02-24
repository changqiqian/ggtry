import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Tool } from '../../Tool';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
import { Club_RecordPlayerItem } from './Club_RecordPlayerItem';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordGeneralLayer')
export class Club_RecordGeneralLayer extends ListViewCtr<RecordPlayer> 
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
    mInsurance: Label = null;
    @property(Label)
    mJackPot: Label = null;
    @property(Label)
    mTotalHands: Label = null;
    @property(Label)
    mTotalBringIn: Label = null;


    onEnable()
    {

    }

    
    BindUI()
    {
        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
    }
    RegDataNotify()
    {

        HallData.Instance.Data_ClubRecordDetailSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Club_RecordDetailSubPage.General);
        })
        
        LocalPlayerData.Instance.Data_RecordDetail.AddListenner(this,(_data)=>
        {
            this.mCreator.string = _data.creator;
            this.mGameID.string = _data.gameCode;
            this.mDateTitle.string = _data.date;
            this.mRoomName.string = _data.texasConfig.gameName;

            if(_data.texasConfig.gameType == GameType.GameType_TexasCash)
            {
                this.mGameType.string = Localization.GetString("00306");
            }
            else if(_data.texasConfig.gameType == GameType.GameType_ShortCash)
            {
                this.mGameType.string = Localization.GetString("00188");
            }
            else if(_data.texasConfig.gameType == GameType.GameType_OmhCash)
            {
                this.mGameType.string = Localization.GetString("00238");
            }
            

            this.mSeat.string = _data.texasConfig.seatNum;

            let sb = Tool.ConvertMoney_S2C(_data.texasConfig.smallBlind);
            let ante = Tool.ConvertMoney_S2C(_data.texasConfig.ante);
            let binldInfo = sb + "";
            binldInfo += "/" + sb * 2;
            if(_data.texasConfig.straddle)
            {
                binldInfo += "/" + sb * 4;
            }
    
            if(ante > 0)
            {
                binldInfo += "(" + ante  + ")";
            }

            this.mBlind.string = binldInfo;

            this.mDuration.string =  Tool.ConvertSecondsToHour(_data.texasConfig.gameDuration);
            this.mInsurance.string =  Tool.ConvertMoney_S2C(_data.insurance) + "";
            this.mJackPot.string =  Tool.ConvertMoney_S2C(_data.jackpot) + "";
            this.mTotalHands.string = _data.totalHands + "";
            this.mTotalBringIn.string = Tool.ConvertMoney_S2C(_data.totalBuyIn) + "";

            this.ForceSetData(_data.list);
            this.RefreshData();
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    Refresh()
    {

    }
    
    RenderEvent(_item: Node , _index: number)
    {
        let script = _item.getComponent(Club_RecordPlayerItem);
        script.InitWithData(this.mCurrentData[_index]);
    }

    OnDragTop() 
    {

    }
    OnDragBottom() 
    {

    }

}

