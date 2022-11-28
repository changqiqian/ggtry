import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { NetworkSend } from '../../network/NetworkSend';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_Member } from './Club_Member';
const { ccclass, property } = _decorator;

@ccclass('Club_MemberList')
export class Club_MemberList extends ListViewCtr<ClubMember> 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;


    BindUI()
    {
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

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
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
                    this.InsertOneData(current);
                }
            }
            
            this.UpdateData(_data.totalMember);
        });
    }


    Refresh()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        NetworkSend.Instance.GetClubMember(clubId,this.mCurrentPage,this.mPageSize)
    }

    RenderEvent(_item: Node , _index: number)
    {
        let srcData = this.mCurrentData[_index];
        let script = _item.getComponent(Club_Member);
        script.InitWithData(srcData);
    }
}

