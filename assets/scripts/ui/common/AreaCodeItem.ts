import { _decorator, Component, Node, color, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('AreaCodeItem')
export class AreaCodeItem extends BaseUI {
    @property(Node) 
    mSelectedBG: Node = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    mIndex : number = -1;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBtn.SetClickCallback(()=>
        {
            LocalPlayerData.Instance.Data_AreaCode.mData = this.mIndex;
        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_AreaCode.AddListenner(this,(_data)=>
        {
            this.UpdateSelectStatus(_data);
        })

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    InitWithData(_countryName:string , _areaCode:string ,_index : number)
    {
        this.mBtn.SetTitle(_countryName + " " + _areaCode);
        this.mIndex = _index;
        this.UpdateSelectStatus(LocalPlayerData.Instance.Data_AreaCode.mData);
    }

    UpdateSelectStatus(_index : number)
    {
        let selected = _index == this.mIndex;
        this.mSelectedBG.active = selected;
        if(selected)
        {
            this.mBtn.SetTitleColor(new Color(255,255,255));
        }
        else
        {
            this.mBtn.SetTitleColor(new Color(142,144,149));
        }
    }

    ContainTargetContent(_targetContent : string) : boolean
    {
        let result =  this.mBtn.GetTitle().indexOf(_targetContent) != -1;
        return result;
    }

}

