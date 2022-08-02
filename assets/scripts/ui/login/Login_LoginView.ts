import { _decorator, Component, Node, Button, Label, EditBox } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Login_LoginView')
export class Login_LoginView extends BaseUI {

    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mSubTitle: Label = null;
    @property(BaseButton) 
    mAreaCodeBtn: BaseButton = null;
    @property(EditBox) 
    mAccountEditBox: EditBox = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    @property(BaseButton) 
    mPasswordLoginBtn: BaseButton = null;
    
    InitParam() {

    }
    BindUI() {
       this.mBackBtn.SetClickCallback(()=>
       {
            this.Delete();
       });

       this.mAreaCodeBtn.SetClickCallback(()=>
       {
            this.ShowSubView("common","prefab/AreaCodeView");
       });

       this.mConfirmBtn.SetClickCallback(()=>
       {
            console.log("mConfirmBtn")
       });

       this.mPasswordLoginBtn.SetClickCallback(()=>
       {
            console.log("mPasswordLoginBtn")
       });
    }
    RegDataNotify() 
    {
        LocalPlayerData.GetInstance().AddListener("Data_AreaCode",(_current , _before)=>
        {
            this.mAreaCodeBtn.SetTitle(GameConfig.AreaCodeList[_current].areaCode);
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

}

