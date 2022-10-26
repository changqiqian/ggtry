import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_ApplyingMember } from './Club_ApplyingMember';
const { ccclass, property } = _decorator;

@ccclass('Club_MemberNotifyWindow')
export class Club_MemberNotifyWindow extends BaseUI {
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(BaseButton) 
    mCancelAllBtn: BaseButton = null;
    @property(BaseButton) 
    mApplyAllBtn: BaseButton = null;

    private mClubId : string = null;

    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });
        this.mCancelAllBtn.SetClickCallback(()=>
        {
            this.ApplyingAll(false);
        });
        this.mApplyAllBtn.SetClickCallback(()=>
        {
            this.ApplyingAll(true);
        });
    }
    RegDataNotify()
    {
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_clubId : string)
    {
        this.mScrollView.content.destroyAllChildren();
        this.mClubId = _clubId;
        let applyingUsers = HallData.Instance.GetApplyingUsers(this.mClubId);
        for(let i = 0 ; i < applyingUsers.length ; i++)
        {
            let currentUser = applyingUsers[i];
            this.LoadPrefab("clubPage" , "prefab/Club_ApplyingMember" , (_prefab)=>
            {
                let tempNode = instantiate(_prefab);
                this.mScrollView.content.addChild(tempNode);
                let tempScript = tempNode.getComponent(Club_ApplyingMember);
                tempScript.InitWithData(currentUser,this.mClubId);
            });
        }
    }

    public ApplyingAll(_agree : boolean)
    {
        let applyingUsers = HallData.Instance.GetApplyingUsers(this.mClubId);
        if(applyingUsers.length == 0)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00114"));
            return;
        }
        let uids = new Array<string>();
        for(let i = 0 ; i < applyingUsers.length ; i++)
        {
            uids.push(applyingUsers[i].uid);
        }
        NetworkSend.Instance.AddClubMember(this.mClubId , _agree ,uids);
    }
}

