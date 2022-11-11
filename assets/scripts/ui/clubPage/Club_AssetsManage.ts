import { _decorator, Component, Node, EditBox, ScrollView, instantiate, UI } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import ListView from '../../UiTool/ListView';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_AssetsManageItem } from './Club_AssetsManageItem';
import { Club_AssetsManageWindow } from './Club_AssetsManageWindow';
const { ccclass, property } = _decorator;

@ccclass('Club_AssetsManage')
export class Club_AssetsManage extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(ListView) 
    mListView: ListView = null;
    @property(BaseButton) 
    mTakeBackBtn: BaseButton = null;
    @property(BaseButton) 
    mGiveBtn: BaseButton = null;

    mCurrentPage :number = 1;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<ClubMember>;
    onEnable()
    {
        HallData.Instance.Data_ClubScoreManageUid.ResetData();
        this.OnDragTop();
    }
    InitParam()
    {

    }
    BindUI()
    {
        this.mEditBox.placeholder = Localization.GetString("00163");
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        })

        this.mTakeBackBtn.SetClickCallback(()=>
        {
            this.ShowAssetsManagerWindow(false);
        });
        this.mGiveBtn.SetClickCallback(()=>
        {
            this.ShowAssetsManagerWindow(true);
        });

        this.mSearchBtn.SetClickCallback(()=>
        {

        });
        

        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragBottom(this.OnDragBottom.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));
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
    
    ShowAssetsManagerWindow(_give : boolean)
    {
        if(HallData.Instance.Data_ClubScoreManageUid.mData == null)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00115"));
            return;
        }

        UIMgr.Instance.ShowWindow("clubPage", "prefab/Club_AssetsManageWindow",true,(_script)=>
        {
            let tempScript = _script as Club_AssetsManageWindow;
            tempScript.InitWithData(_give);
        },HallData.ClubUiTag);
    }

    RenderEvent(_item: Node , _index: number)
    {
        let srcData = this.mCurrentData[_index];
        let script = _item.getComponent(Club_AssetsManageItem);
        script.InitWithData(srcData);
    }
}

