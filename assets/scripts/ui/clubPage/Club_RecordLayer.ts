import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { HTTP_Date, NetworkHttp } from '../../network/NetworkHttp';
import { Tool } from '../../Tool';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
import { Club_RecordItem } from './Club_RecordItem';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordLayer')
export class Club_RecordLayer extends ListViewCtr<RecordSingle> 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mGameTypeLayout: Node = null;
    @property(Node) 
    mDateLayout: Node = null;
    @property(Label) 
    mProfit: Label = null;
    @property(Label) 
    mGameNum: Label = null;
    @property(Label) 
    mVPIP: Label = null;

    onEnable()
    {
        super.onEnable();
        this.RequireTotalRecord();
    }

    BindUI()
    {
        this.OffsetHallTop();
        this.mBackBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.DeleteUIByTarget(this);
        });

        for(let i = 0 ; i < this.mGameTypeLayout.children.length ; i++)
        {
            let type;
            let currentToggle = this.mGameTypeLayout.children[i].getComponent(ToggleBtn);
            if(i == 0)
            {
                type = GameType.GameType_TexasCash;
                currentToggle.SetTitle(Localization.GetString("00306"));
            }
            else if(i == 1)
            {
                type = GameType.GameType_ShortCash;
                currentToggle.SetTitle(Localization.GetString("00188"));
            }
            else if(i == 2)
            {
                type = GameType.GameType_OmhCash;
                currentToggle.SetTitle(Localization.GetString("00238"));
            }
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordSubPage , type);
        }

        for(let i = 0 ; i < this.mDateLayout.children.length ; i++)
        {
            let currentToggle = this.mDateLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordDateType, i);
        }


        HallData.Instance.Data_ClubRecordSubPage.mData = GameType.GameType_TexasCash;
        HallData.Instance.Data_ClubRecordDateType.mData = HTTP_Date.Today;
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubRecordSubPage.AddListenner(this,(_data)=>
        {
            if(this.mInitFlag == false)
            {
                return;
            }
            this.RequireTotalRecord();
            this.ResetPage();
            this.Refresh();
        })

        HallData.Instance.Data_ClubRecordDateType.AddListenner(this,(_data)=>
        {
            if(this.mInitFlag == false)
            {
                return;
            }
            this.RequireTotalRecord();
            this.ResetPage();
            this.Refresh();
        })

        LocalPlayerData.Instance.Data_RecordData.AddListenner(this,(_data)=>
        {
            this.mProfit.string = Tool.ConvertMoney_S2C(_data.winLose) + "";
            this.mGameNum.string = _data.hands;
            this.mVPIP.string = _data.vpip + "%";
        })

        LocalPlayerData.Instance.Data_RecordSingleData.AddListenner(this,(_data)=>
        {
            if(this.mCurrentPage != _data.pageNum)
            {
                return;
            }

            for(let i = 0 ; i < _data.list.length ; i++)
            {
                let current = _data.list[i];
                let index = this.mCurrentData.findIndex((_item) => _item.gameCode === current.gameCode);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }

            this.UpdateData(_data.total);
        })
    }
    LateInit()
    {
        if(this.CheckInitFlag())
        {
            return;
        }
    }
    CustmoerDestory()
    {

    }

    Refresh()
    {
        let type = HallData.Instance.Data_ClubRecordSubPage.mData;
        let day = HallData.Instance.Data_ClubRecordDateType.mData;
        NetworkHttp.Instance.PostRecordData(type ,day, this.mCurrentPage , this.mPageSize);
    }
    RenderEvent(_item: Node , _index: number)
    {
        let script = _item.getComponent(Club_RecordItem);
        script.InitWithData(this.mCurrentData[_index]);
    }

    RequireTotalRecord()
    {
        let type = HallData.Instance.Data_ClubRecordSubPage.mData;
        let day = HallData.Instance.Data_ClubRecordDateType.mData;
        NetworkHttp.Instance.PostTotalRecordData(type,day)
    }

}

