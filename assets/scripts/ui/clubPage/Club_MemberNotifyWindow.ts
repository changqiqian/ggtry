import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import ListView from '../../UiTool/ListView';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
import { Club_ApplyingMember } from './Club_ApplyingMember';
const { ccclass, property } = _decorator;

@ccclass('Club_MemberNotifyWindow')
export class Club_MemberNotifyWindow extends BaseUI {
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(ListView) 
    mListView: ListView = null;
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

        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));

        this.mListView.SetDragBottom(()=>
        {

        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubApplyingNotify.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            if(_data)
            {
                let applyingUsers = HallData.Instance.GetApplyingUsers(this.mClubId);
                this.mListView.numItems = applyingUsers.length;
            }
        });
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
        this.mListView.numItems = applyingUsers.length;
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

    RenderEvent(_item: Node , _index: number)
    {
        let applyingUsers = HallData.Instance.GetApplyingUsers(this.mClubId);
        let srcData = applyingUsers[_index];
        let script = _item.getComponent(Club_ApplyingMember);
        script.InitWithData(srcData , this.mClubId);
    }
}

