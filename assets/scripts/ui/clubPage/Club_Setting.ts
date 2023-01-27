import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Network } from '../../network/Network';
import { NetworkSend } from '../../network/NetworkSend';
import { Tool } from '../../Tool';
import { BaseButton } from '../common/BaseButton';
import { InputTipsWindow } from '../common/InputTipsWindow';
import { InputTipsWindowBig } from '../common/InputTipsWindowBig';
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
    mDonateBtn: BaseButton = null;
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
    mClubDescribe: BaseButton = null;
    @property(BaseButton) 
    mUnionBtn: BaseButton = null;
    @property(BaseButton) 
    mExitBtn: BaseButton = null;
    @property(BaseButton) 
    mDismissBtn: BaseButton = null;

    mLastTimeBrief : string = null;
    mLastTimeLogo : number = null;
    mLastTimeStamp :  number = null;
    mLastTimeName : string = null;
    mPageSize : number = 4;
    onEnable()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
        this.RefreshMember();
        this.UpdateClubInfoUI();


        let selfIsOwner = enterClub.clubMember.memberType == ClubMemberType.ClubAccountType_Owner
        this.mUnionBtn.node.active = selfIsOwner;
        this.mDismissBtn.node.active = selfIsOwner;
        this.mExitBtn.node.active = !(selfIsOwner);

        this.mLastTimeBrief = enterClub.clubInfo.brief;
        this.mLastTimeLogo = enterClub.clubInfo.logo;
        this.mLastTimeStamp = enterClub.clubInfo.stamp;
        this.mLastTimeName = enterClub.clubInfo.name;
    }

    onDisable()
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        if(enterClub == null)
        {
            return;
        }
        if(enterClub.clubMember.memberType != ClubMemberType.ClubAccountType_Owner)
        {
            return;
        }


        let logoChanged = enterClub.clubInfo.logo != HallData.Instance.Data_ClubLogoIndex.mData;
        let stampChanged = this.mLastTimeStamp != HallData.Instance.Data_ClubStampIndex.mData;
        let nameChanged = this.mLastTimeName != this.mClubNameBtn.GetTitle();
        let briefChanged = enterClub.clubInfo.brief != this.mLastTimeBrief;


        if(logoChanged || stampChanged || nameChanged || briefChanged)
        {
            let newLogo = logoChanged ?  HallData.Instance.Data_ClubLogoIndex.mData : null;
            let newStamp = stampChanged ? HallData.Instance.Data_ClubStampIndex.mData :null;
            let newName =  nameChanged? this.mClubNameBtn.GetTitle() : null;
            let newBrief = briefChanged? this.mLastTimeBrief : null;
            NetworkSend.Instance.ModifyClubInfo(enterClub.clubInfo.id,newName,newBrief,newLogo,newStamp);
        }
    }

    InitParam()
    {
        this.OffsetHallTop();
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        this.mDonateBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("common" , "prefab/InputTipsWindow",true,(_script)=>
            {
                let tempScript = _script as InputTipsWindow;
                let title = Localization.GetString("00323");
                tempScript.SetTitle(title);
                tempScript.SetCallback((_data)=>
                {
                    if(Tool.NumberTest(_data))
                    {
                        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
                        NetworkSend.Instance.GiveHallScore(enterClub.clubInfo.ownerId,GameCurrencyType.GameCurrencyType_Coin,_data);
                    }

                })
            },HallData.ClubUiTag)
        });

        this.mAssetsRecordBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("clubPage","prefab/Club_AssetsRecord",true,null,HallData.ClubUiTag);
        });

        this.mMoreMemberBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("clubPage","prefab/Club_MemberList",true,null,HallData.ClubUiTag);
        });

        this.mLogoBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowWindow("clubPage","prefab/Club_LogoChoseLayer",true,null,HallData.ClubUiTag);
            }
        });

        this.mStampBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowWindow("clubPage","prefab/Club_StampChoseLayer",true,null,HallData.ClubUiTag);
            }
        });
        this.mClubNameBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowWindow("common" , "prefab/InputTipsWindow",true,(_script)=>
                {
                    let tempScript = _script as InputTipsWindow;
                    let title = Localization.GetString("00121");
                    tempScript.SetTitle(title);
                    tempScript.SetCallback((_data)=>
                    {
                        if(_data != null && _data !="")
                        {
                            this.mClubNameBtn.SetTitle(_data);
                        }
                    })
                },HallData.ClubUiTag)
            }
        });

        this.mClubDescribe.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowWindow("common" , "prefab/InputTipsWindowBig",true,(_script)=>
                {
                    let tempScript = _script as InputTipsWindowBig;
                    let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                    let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
                    let title = Localization.GetString("00122");
                    tempScript.SetTitle(title,Localization.GetString("00123"));
                    tempScript.SetMaxInput(100);
                    tempScript.SetContent(enterClub.clubInfo.brief);
                    tempScript.SetCallback((_data)=>
                    {
                        if(_data != null && _data !="")
                        {
                            this.mLastTimeBrief = _data;
                        }
                    })
                },HallData.ClubUiTag)
            }
            else
            {
                UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
                {
                    let tempScript = _script as TipsWindow;
                    let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
                    let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
                    let tips = enterClub.clubInfo.brief;
                    tempScript.SetTips(tips);
                    tempScript.ShowConfirmBtnOnly();
                },HallData.ClubUiTag)
            }
        });
        this.mUnionBtn.SetClickCallback(()=>
        {
            if(this.HaveRights())
            {
                UIMgr.Instance.ShowToast("功能开发中");
            }
        });
        this.mDismissBtn.SetClickCallback(()=>
        {
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
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
            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            UIMgr.Instance.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
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

    UpdateClubInfoUI()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(clubId);
        HallData.Instance.Data_ClubLogoIndex.mData = enterClub.clubInfo.logo;
        HallData.Instance.Data_ClubStampIndex.mData = enterClub.clubInfo.stamp;
        this.mClubNameBtn.SetTitle(enterClub.clubInfo.name);
        this.mClubId.SetTitle(enterClub.clubInfo.id);
    }

    RegDataNotify()
    {
        HallData.Instance.Data_ModifyClubInfo.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(clubId != _data.id)
            {
                return;
            }
            this.UpdateClubInfoUI();
        });

        HallData.Instance.Data_ClubLogoIndex.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            let logoName = "Logo" + _data;
            this.LoadSprite("common" , "texture/club/" + logoName , (_spriteFrame)=>
            {
                this.mLogoBtn.SetSprite(_spriteFrame);
            })
        });

        HallData.Instance.Data_ClubStampIndex.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }
            let stampName = "Stamp" + _data;
            this.LoadSprite("common" , "texture/club/" + stampName , (_spriteFrame)=>
            {
                this.mStampBtn.SetSprite(_spriteFrame);
            })
        });


        HallData.Instance.Data_S2CGetClubMember.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(clubId != _data.clubId)
            {
                return;
            }

            if(_data.page != 1)
            {
                return;
            }

            if(this.mPageSize != _data.pageSize)
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
                    currentScript.InitWithData(Number(currentMemberData.head),currentMemberData.nickName,
                    currentMemberData.uid);
                }
                else
                {
                    currentNode.active = false;
                }
            }

            HallData.Instance.Data_S2CGetClubMember.mData = null;
        });


        HallData.Instance.Data_S2CRemoveMember.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
            if(clubId != _data.clubId)
            {
                return;
            }

            this.RefreshMember();
        });
        
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }

    RefreshMember()
    {
        let clubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        NetworkSend.Instance.GetClubMember(clubId,1,this.mPageSize);
    }

    HaveRights() :boolean
    {
        let currentClubId = LocalPlayerData.Instance.Data_CurrentEnterClubId.mData;
        let enterClub = LocalPlayerData.Instance.GetClubInfoByClubId(currentClubId);
        let selfIsOwner = enterClub.clubMember.memberType == ClubMemberType.ClubAccountType_Owner
        if(selfIsOwner)
        {
        }
        else
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00099"));
        }
        return selfIsOwner;
    }
}

