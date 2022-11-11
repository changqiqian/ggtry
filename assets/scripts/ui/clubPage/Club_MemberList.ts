import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { NetworkSend } from '../../network/NetworkSend';
import ListView from '../../UiTool/ListView';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_Member } from './Club_Member';
const { ccclass, property } = _decorator;

@ccclass('Club_MemberList')
export class Club_MemberList extends BaseUI {
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ListView) 
    mListView: ListView = null;

    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<ClubMember>;

    onEnable()
    {
        this.OnDragTop();
    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragBottom.bind(this));
    }
    RegDataNotify()
    {
        HallData.Instance.Data_S2CGetClubMember.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            if(clubId != _data.clubId)
            {
                return;
            }

            if(this.mCurrentPage != _data.page)
            {
                return;
            }

            if(this.mPageSize != _data.pageSize)
            {
                return;
            }

            for(let i = 0 ; i < _data.clubMembers.length ; i++)
            {
                let current = _data.clubMembers[i];
                let index = this.mCurrentData.findIndex((_item) => _item.uid === current.uid);
                if(index < 0)
                {
                    this.mCurrentData.push(current);
                }
            }
            

            this.mListView.numItems = this.mCurrentData.length;

            if(this.mCurrentData.length >= _data.totalMember)
            {
                this.mIsLastPage = true;
            }
            else
            {
                this.mIsLastPage = false;
            }
            
            this.mCurrentPage++;

        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mCurrentData = null;
    }

    Refresh()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
        NetworkSend.Instance.GetClubMember(clubId,this.mCurrentPage,this.mPageSize)
    }

    OnDragBottom() 
    {
        if(this.mIsLastPage)
        {
            return;
        }
        this.Refresh();
    }

    OnDragTop() 
    {
        this.ResetPage();
        this.Refresh();
    }

    ResetPage()
    {
        this.mIsLastPage = false;
        this.mCurrentData = new Array<ClubMember>();
        this.mCurrentPage = 1;
        this.mListView.numItems = 0;
    }

    RenderEvent(_item: Node , _index: number)
    {
        let srcData = this.mCurrentData[_index];
        let script = _item.getComponent(Club_Member);
        script.InitWithData(srcData);
    }
}

