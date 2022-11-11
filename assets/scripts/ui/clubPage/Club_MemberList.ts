import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_Member } from './Club_Member';
const { ccclass, property } = _decorator;

@ccclass('Club_MemberList')
export class Club_MemberList extends BaseUI {
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;

    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<ClubMember>;

    onEnable()
    {
        this.ResetPage();
        this.Refresh();
    }


    InitParam()
    {

    }
    BindUI()
    {
        this.mScrollView.node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.OnDragBottom, this);
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
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
                this.LoadPrefab("clubPage" , "prefab/Club_Member" , (_prefab)=>
                {
                    let tempNode = instantiate(_prefab);
                    this.mScrollView.content.addChild(tempNode);
                    let tempScript = tempNode.getComponent(Club_Member);
                    tempScript.InitWithData(current);
                });
                this.mCurrentData.push(current);
            }
            

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

    ResetPage()
    {
        this.mIsLastPage = false;
        this.mCurrentData = new Array<ClubMember>();
        this.mCurrentPage = 1;
        this.mScrollView.content.destroyAllChildren();
    }
}

