import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
import { HallData } from '../hall/HallData';
import { Club_HeadAndName } from './Club_HeadAndName';
const { ccclass, property } = _decorator;

@ccclass('Club_Setting')
export class Club_Setting extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(BaseButton) 
    mAssetsBtn: BaseButton = null;
    @property(BaseButton) 
    mAssetsRecordBtn: BaseButton = null;
    @property(BaseButton) 
    mMoreMemberBtn: BaseButton = null;
    @property(Node) 
    mUserContainer: Node = null;
    @property(Label) 
    mMemberCount: Label = null;
    @property(BaseButton) 
    mLogoBtn: BaseButton = null;
    @property(BaseButton) 
    mStampBtn: BaseButton = null;
    @property(BaseButton) 
    mClubNameBtn: BaseButton = null;
    @property(BaseButton) 
    mClubId: BaseButton = null;
    @property(BaseButton) 
    mClubNotifyBtn: BaseButton = null;
    @property(BaseButton) 
    mClubDescribe: BaseButton = null;
    @property(BaseButton) 
    mUnionBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(BaseButton) 
    mDismissBtn: BaseButton = null;


    onEnable()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
        //NetworkSend.Instance.GetClubMember(clubId,0,4);
    }

    onDisable()
    {
        let currentClub = LocalPlayerData.Instance.Data_CurrentEnterClub.mData;
        let logoChanged = currentClub.logo != HallData.Instance.Data_ClubLogoIndex.mData;
        let stampChanged = currentClub.stamp != HallData.Instance.Data_ClubStampIndex.mData;
        let nameChanged = currentClub.name != this.mClubNameBtn.GetTitle();
        if(logoChanged || stampChanged || nameChanged)
        {
            //发送修改消息
        }
    }

    InitParam()
    {
        
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        this.mAssetsBtn.SetClickCallback(()=>
        {
            this.ShowWindow("clubPage","prefab/Club_AssetsManage",true,null,HallData.ClubUiTag);
        });

        this.mAssetsRecordBtn.SetClickCallback(()=>
        {
            this.ShowLayer("clubPage","prefab/Club_AssetsRecord",true,null,HallData.ClubUiTag);
        });

        this.mMoreMemberBtn.SetClickCallback(()=>
        {
            this.ShowWindow("clubPage","prefab/Club_MemberList",true,null,HallData.ClubUiTag);
        });

        this.mLogoBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {

            }
        });

        this.mStampBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {

            }
        });
        this.mClubNameBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {

            }
        });

        this.mClubNotifyBtn.SetClickCallback(()=>
        {
            
        });

        this.mClubDescribe.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {

            }
        });
        this.mUnionBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {

            }
        });
        this.mDismissBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00102");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    NetworkSend.Instance.DismissClub(clubId);
                });
            })

        });
        this.mExitBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.id;
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00103");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    NetworkSend.Instance.QuitClub(clubId);
                });
            },HallData.ClubUiTag)
        });
        
    }
    RegDataNotify()
    {
        LocalPlayerData.Instance.Data_CurrentEnterClub.AddListenner(this,(_data)=>
        {
            HallData.Instance.Data_ClubLogoIndex.mData = _data.logo;
            HallData.Instance.Data_ClubStampIndex.mData = _data.stamp;
            this.mClubNameBtn.SetTitle(_data.name);
            this.mClubId.SetTitle(_data.id);

            this.mUnionBtn.node.active = LocalPlayerData.Instance.Data_Uid.mData == _data.ownerId;
            this.mDismissBtn.node.active = LocalPlayerData.Instance.Data_Uid.mData == _data.ownerId;
            this.mExitBtn.node.active = !LocalPlayerData.Instance.Data_Uid.mData == _data.ownerId;

        });

        HallData.Instance.Data_ClubLogoIndex.AddListenner(this,(_data)=>
        {
            let logoName = "Logo" + _data;
            this.LoadSprite("common" , "texture/club/" + logoName , (_spriteFrame)=>
            {
                this.mLogoBtn.node.getChildByName("Icon").getComponent(Sprite).spriteFrame = _spriteFrame;
            })
        });

        HallData.Instance.Data_ClubStampIndex.AddListenner(this,(_data)=>
        {
            let stampName = "Stamp" + _data;
            this.LoadSprite("common" , "texture/club/" + stampName , (_spriteFrame)=>
            {
                this.mStampBtn.node.getChildByName("Icon").getComponent(Sprite).spriteFrame = _spriteFrame;
            })
        });

        HallData.Instance.Data_ClubEnter.AddListenner(this,(_data)=>
        {
            if(this.node.active == false)
            {
                return;
            }

            if(_data == false)
            {
                this.Show(false);
            }
        });


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

            if(_data.page != 0)
            {
                return;
            }

            this.mMemberCount.string = _data.totalMember + "";

            for(let i = 0 ; i < this.mUserContainer.children.length  ; i++)
            {
                let currentNode = this.mUserContainer.children[i];
                if(i < _data.clubMembers.length)
                {
                    currentNode.active = true;
                    let currentMemberData = _data.clubMembers[i];
                    let currentScript = currentNode.getComponent(Club_HeadAndName);
                    currentScript.InitWithData(Number(currentMemberData.head),currentMemberData.nickName);
                }
                else
                {
                    currentNode.active = false;
                }
            }
        });
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    HaveRights() :boolean
    {
        let ownerId = LocalPlayerData.Instance.Data_CurrentEnterClub.mData.ownerId;

        if(LocalPlayerData.Instance.Data_Uid.mData == ownerId)
        {
            return true;
        }
        else
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00099"));
            return false;
        }
    }
}

