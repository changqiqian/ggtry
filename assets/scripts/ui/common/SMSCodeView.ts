import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LoginData } from '../login/LoginData';
import { BaseButton } from './BaseButton';
import { InputCodeIndicator } from './InputCodeIndicator';
import { QuickInputNumView } from './QuickInputNumView';
const { ccclass, property } = _decorator;

@ccclass('SMSCodeView')
export class SMSCodeView extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mPhoneNum: Label = null;
    @property(InputCodeIndicator) 
    mInputCodeIndicator: InputCodeIndicator = null;
    @property(BaseButton) 
    mResendBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;
    
    InitParam() 
    {
        this.mPhoneNum.string = "";
    }

    BindUI() 
    {
        this.mInputCodeIndicator.SetClickCallback(()=>
        {
            this.ShowSubView("common","prefab/QuickInputNumView",(_script)=>
            {
                let tempQuickInput = _script as QuickInputNumView;
                tempQuickInput.SetCallback(
                (_num)=>
                {
                   this.mInputCodeIndicator.InsertOneNum(_num);
                } , 
                ()=>
                {
                    this.mInputCodeIndicator.DeleteOneNumber();
                });
            });
        });

        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false)
        });

        this.mResendBtn.SetClickCallback(()=>
        {

        });

        this.mConfirmBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {
        LoginData.GetInstance().AddListener("Data_LastInputPhoneNum",(_current , _before)=>
        {
            this.mPhoneNum.string = _current;
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        LoginData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

}

