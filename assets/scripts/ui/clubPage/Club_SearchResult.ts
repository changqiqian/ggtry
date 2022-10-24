import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_SearchResult')
export class Club_SearchResult extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Club_MainEnter) 
    mClub_MainEnter: Club_MainEnter = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let clubId = HallData.Instance.Data_ClubSearchResult.mData.id;
            NetworkSend.Instance.JoinClub(clubId);
            this.CloseAsWindow();
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubSearchResult.AddListenner(this,(_data)=>
        {
            this.mClub_MainEnter.InitWithData(_data);
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

