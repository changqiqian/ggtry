import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
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
        this.mClubId = _clubId;
        let applyingUsers = HallData.Instance.GetApplyingUsers(this.mClubId);
        this.mScrollView.content.destroyAllChildren();
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
        let uids = new Array<string>();
        for(let i = 0 ; i < applyingUsers.length ; i++)
        {
            uids.push(applyingUsers[i].uid);
        }
        NetworkSend.Instance.AddClubMember(this.mClubId , _agree ,uids);
    }
}

