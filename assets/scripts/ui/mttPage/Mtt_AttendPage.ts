import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';

import { BaseButton } from '../common/BaseButton';

import { Mtt_AttendBtn } from './Mtt_AttendBtn';
const { ccclass, property } = _decorator;

@ccclass('Mtt_AttendPage')
export class Mtt_AttendPage extends BaseUI 
{
    @property(Label) 
    mTitle: Label = null;
    @property(Label) 
    mTips: Label = null;
    @property(Node) 
    mOptionNode: Node = null;
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCancelBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let currentOption = this.GetCurrentSelectOption();
            if(currentOption == null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00043"));
                return;
            }


            this.CloseAsWindow();
        });
    }

    GetCurrentSelectOption():Mtt_AttendBtn
    {
        for(let i = 0 ; i < this.mOptionNode.children.length ; i++)
        {
            let currentOption = this.GetOption(i);
            if(currentOption.IsSelected())
            {
                return currentOption;
            }
        }

        return null;
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

    HideOptions()
    {
        for(let i = 0 ; i < this.mOptionNode.children.length ; i++)
        {
            this.mOptionNode.children[i].active = false;
        }
    }

    GetOption(_index : number) :Mtt_AttendBtn
    {
        if(_index >= this.mOptionNode.children.length)
        {
            console.log("选项数量不足，prefab中只有3个 请手动在prefab中去增加选项");
            return null;
        }

        return this.mOptionNode.children[_index].getComponent(Mtt_AttendBtn);
    }

    public InitWithData(_data : any , _haveRealReward : boolean)
    {
        this.HideOptions();
    }
}

