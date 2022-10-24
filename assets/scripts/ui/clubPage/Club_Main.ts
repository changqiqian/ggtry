import { _decorator, Component, Node, PageView, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
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
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_AccountLevel.AddListenner(this,(_data)=>
        {
            this.mCreateBtn.node.active = !(_data == AccountLevel.AccountLevel_Normal);
        });

        HallData.Instance.Data_ClubCreateData.AddListenner(this,(_data)=>
        {
            this.InsertClub(_data);
        });

        HallData.Instance.Data_ClubJoinResult.AddListenner(this,(_data)=>
        {
            this.InsertClub(_data);
        });


        HallData.Instance.Data_ClubEnter.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.ShowLayer("clubPage","prefab/Club_PrivateLayer");
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

