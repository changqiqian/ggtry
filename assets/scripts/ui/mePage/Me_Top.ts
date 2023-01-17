import { _decorator, Component, Node, Sprite, Label, misc } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { InputTipsWindow } from '../common/InputTipsWindow';
const { ccclass, property } = _decorator;

@ccclass('Me_Top')
export class Me_Top extends BaseUI 
{
    @property(BaseButton) 
    mHeadBtn: BaseButton = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mNickName: Label = null;
    @property(BaseButton) 
    mModifyNameBtn: BaseButton = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mHelpBtn: BaseButton = null;

    mLastTimeName : string = null;
    mLastTimeHead : string = null;
    onEnable()
    {
        this.mLastTimeHead = LocalPlayerData.Instance.Data_Head.mData;
        this.mLastTimeName = LocalPlayerData.Instance.Data_NickName.mData;
    }

    onDisable()
    {
        let newName = null;
        let newHead = null;
        if(this.mLastTimeHead != LocalPlayerData.Instance.Data_Head.mData)
        {
            newHead = LocalPlayerData.Instance.Data_Head.mData;
        }
        if(this.mLastTimeName != LocalPlayerData.Instance.Data_NickName.mData)
        {
            newName = LocalPlayerData.Instance.Data_NickName.mData;
        }

        if(newName == null && newHead == null)
        {
            return;
        }
        NetworkSend.Instance.ChangeUserInfo(newName , newHead);
    }
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mHeadBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("common" , "prefab/HeadChoserView");
        });

        this.mHelpBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("功能开发中");
        });

        this.mModifyNameBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("common" , "prefab/InputTipsWindow",true,(_script)=>
            {
                let tempScript = _script as InputTipsWindow;
                let title = Localization.GetString("00130");
                tempScript.SetTitle(title);
                tempScript.SetCallback((_data)=>
                {
                    if(_data != null && _data !="")
                    {
                        LocalPlayerData.Instance.Data_NickName.mData = _data;
                    }
                })
            })
        });

        
    }
    RegDataNotify() 
    {


        LocalPlayerData.Instance.Data_Uid.AddListenner(this,(_data)=>
        {
            this.mID.string = _data;
        })

        LocalPlayerData.Instance.Data_NickName.AddListenner(this,(_data)=>
        {
            this.mNickName.string = _data;
        })

        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            if(_data == null || _data == "")
            {
                return;
            }

            this.LoadLocalHead(_data,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        })

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

