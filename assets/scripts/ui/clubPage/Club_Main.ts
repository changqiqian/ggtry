import { _decorator, Component, Node, PageView, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
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
    mCowboyBtn: BaseButton = null;
    @property(BaseButton) 
    mDefualtSearchBtn: BaseButton = null;

    onEnable()
    {
        NetworkSend.Instance.GetMiniGameListInHall();
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCreateBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_CreateLayer");
        })
        this.mSearchBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_SearchLayer");
        })

        this.mDefualtSearchBtn.Show(false);
        this.mDefualtSearchBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_SearchLayer");
        })


        this.mCowboyBtn.Show(false);
        this.mCowboyBtn.SetClickCallback(()=>
        {
            let cowboyList = HallData.Instance.GetHallGameList(GameType.GameType_Cowboy);
            let gameId = cowboyList[0].gameId;
            NetworkSend.Instance.EnterCowboy(gameId);
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
            let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
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

        HallData.Instance.Data_UpdateAllClub.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.mPageView.removeAllPages();
                let enterClubInfos = LocalPlayerData.Instance.Data_EnterClubs.mData;
                this.mDefualtSearchBtn.Show(enterClubInfos.length==0);
                for(let i = 0 ; i < enterClubInfos.length ; i++)
                {
                    let currentInfo = enterClubInfos[i].clubInfo;
                    this.InsertClub(currentInfo);
                }
            }

        });

        HallData.Instance.Data_ClubJoinNotify.AddListenner(this,(_data)=>
        {
            this.InsertClub(_data);
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.ReplaceString("00106",_data.id);
                tempScript.SetTips(tips);
                tempScript.ShowConfirmBtnOnly();
            })
        });

        HallData.Instance.Data_ClubEnter.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                UIMgr.Instance.ShowLayer("clubPage","prefab/Club_PrivateLayer",true,null,HallData.ClubUiTag);
            }
            else
            {
                LocalPlayerData.Instance.Data_CurrentEnterClubId.mData = "";
                UIMgr.Instance.HideUiByTag(HallData.ClubUiTag);
            }
        });
        HallData.Instance.Data_ClubSearchSuccess.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                UIMgr.Instance.ShowWindow("clubPage","prefab/Club_JoinClubWindow");
            }
        });


        HallData.Instance.Data_S2CGetHallSubGameInfoResp.AddListenner(this,(_data)=>
        {
            let cowboyList = HallData.Instance.GetHallGameList(GameType.GameType_Cowboy);
            if(cowboyList == null || cowboyList.length == 0)
            {
                this.mCowboyBtn.Show(false);
                return;
            }

            this.mCowboyBtn.Show(true);

        });

    }
    LateInit() 
    {
        NetworkSend.Instance.GetAllClubs();
    }

    CustmoerDestory() 
    {

    }

    InsertClub(_clubData : ClubDetailsInfo)
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

