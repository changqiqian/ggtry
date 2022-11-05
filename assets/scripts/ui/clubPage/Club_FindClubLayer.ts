import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_MainEnter } from './Club_MainEnter';
const { ccclass, property } = _decorator;

@ccclass('Club_FindClubLayer')
export class Club_FindClubLayer extends BaseUI {
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Club_MainEnter) 
    mClub_MainEnter: Club_MainEnter = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    InitParam()
    {
        //这几个变量 只要在编辑器里面拖动绑定，编辑器就回报错，没办法了 只有代码绑定
        this.mCloseBtn = this.node.getChildByPath("Top/CloseBtn").getComponent(BaseButton);
        this.mClub_MainEnter = this.node.getChildByPath("Bottom/Club_MainEnter").getComponent(Club_MainEnter);
        this.mConfirmBtn = this.node.getChildByPath("Bottom/ConfirmBtn").getComponent(BaseButton);
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

        this.mClub_MainEnter.SetReviewOnly(true);
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

