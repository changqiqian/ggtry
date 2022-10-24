import { _decorator, Component, Node, EditBox, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { NetworkSend } from '../../network/NetworkSend';
import { BaseButton } from '../common/BaseButton';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_SearchLayer')
export class Club_SearchLayer extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;


    onEnable()
    {
        this.mEditBox.string = "";
    }

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
            if(this.mEditBox.string == "")
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00100"));
                return;
            }

            NetworkSend.Instance.SearchClub(this.mEditBox.string);
        });
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubSearchSuccess.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.CloseAsWindow();
            }
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
}

