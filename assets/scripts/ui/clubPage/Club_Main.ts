import { _decorator, Component, Node, PageView, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_Main')
export class Club_Main extends BaseUI 
{
    @property(BaseButton) 
    mCreateBtn: BaseButton = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(PageView) 
    mPageView: PageView = null;
    @property(BaseButton) 
    mLuckyDrawBtn: BaseButton = null;


    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCreateBtn.SetClickCallback(()=>
        {
            this.ShowWindow("clubPage","prefab/Club_CreateLayer");
        })
        this.mSearchBtn.SetClickCallback(()=>
        {
            this.ShowWindow("clubPage","prefab/Club_SearchLayer");
        })
    }

    RemovePage(_clubId : string)
    {
        let padges = this.mPageView.getPages();
        for(let i = 0 ; i < padges.length ; i++)
        {
            let currentPage = padges[i].getComponent(Club_MainEnter);
            if(currentPage.mData.id == _clubId)
            {
                this.mPageView.removePage(padges[i]);
                break;
            }
        }
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_ClubDismiss.AddListenner(this,(_data)=>
        {
            this.RemovePage(_data);
        });
        HallData.Instance.Data_ClubRemoveNotify.AddListenner(this,(_data)=>
        {
            this.RemovePage(_data);
            if(HallData.Instance.Data_ClubEnter.mData == false)
            {
                return;
            }

            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            if(currentClubId == _data)
            {
                HallData.Instance.Data_ClubEnter.mData = false;
            }
        });
        LocalPlayerData.Instance.Data_AccountLevel.AddListenner(this,(_data)=>
        {
            this.mCreateBtn.node.active = !(_data == AccountLevel.AccountLevel_Normal);
        });

        HallData.Instance.Data_ClubCreateData.AddListenner(this,(_data)=>
        {
            this.InsertClub(_data);
        });

        HallData.Instance.Data_ClubJoinNotify.AddListenner(this,(_data)=>
        {
            this.InsertClub(_data);
        });


        HallData.Instance.Data_ClubEnter.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.ShowLayer("clubPage","prefab/Club_PrivateLayer",true,null,HallData.ClubUiTag);
            }
            else
            {
                UIMgr.Instance.HideUiByTag(HallData.ClubUiTag);
            }
        });
        HallData.Instance.Data_ClubSearchSuccess.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.ShowWindow("clubPage","prefab/Club_SearchResult");
            }
        });

    }
    LateInit() 
    {
        NetworkSend.Instance.GetAllClubs();
    }

    CustmoerDestory() 
    {

    }

    InsertClub(_clubData : IClubDetailsInfo)
    {
        this.LoadPrefab("clubPage" , "prefab/Club_MainEnter" , (_prefab)=>
        {
            let tempNode = instantiate(_prefab);
            this.mPageView.addPage(tempNode);
            let tempScript = tempNode.getComponent(Club_MainEnter);
            tempScript.InitWithData(_clubData);
        });
    }
}

