import { _decorator, Component, Node, EditBox, ScrollView, instantiate, UI } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
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
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(BaseButton) 
    mTakeBackBtn: BaseButton = null;
    @property(BaseButton) 
    mGiveBtn: BaseButton = null;

    mCurrentPage :number = 0;
    mPageSize : number = 20;
    mIsLastPage : boolean = false;
    mCurrentData : Array<IClubMember>;
    onEnable()
    {
        HallData.Instance.Data_ClubScoreManageUid.ResetData();
        this.ResetPage();
        this.Refresh();
    }
    InitParam()
    {

    }
    BindUI()
    {
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

        this.mScrollView.node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.OnDragBottom, this);
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

            // if(this.mCurrentPage != _data.page)
            // {
            //     return;
            // }

            for(let i = 0 ; i < _data.clubMembers.length ; i++)
            {
                let current = _data.clubMembers[i];
                this.LoadPrefab("clubPage" , "prefab/Club_AssetsManageItem" , (_prefab)=>
                {
                    let tempNode = instantiate(_prefab);
                    this.mScrollView.content.addChild(tempNode);
                    let tempScript = tempNode.getComponent(Club_AssetsManageItem);
                    tempScript.InitWithData(current);
                });
                this.mCurrentData.push(current);
            }
            

            // if(this.mCurrentData.length >= _data.totalMember)
            // {
            //     this.mIsLastPage = true;
            // }
            // else
            // {
            //     this.mIsLastPage = false;
            // }
            this.mIsLastPage = true;
            
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
        this.mCurrentData = new Array<IClubMember>();
        this.mCurrentPage = 0;
        this.mScrollView.content.destroyAllChildren();
    }
    
    ShowAssetsManagerWindow(_give : boolean)
    {
        if(HallData.Instance.Data_ClubScoreManageUid.mData == null)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00115"));
            return;
        }

        this.ShowWindow("clubPage", "prefab/Club_AssetsManageWindow",true,(_script)=>
        {
            let tempScript = _script as Club_AssetsManageWindow;
            tempScript.InitWithData(_give);
        },HallData.ClubUiTag);
    }
}

