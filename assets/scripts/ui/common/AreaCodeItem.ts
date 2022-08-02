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
            LocalPlayerData.GetInstance().Data_AreaCode = this.mIndex;
        });
    }
    RegDataNotify() {
        LocalPlayerData.GetInstance().AddListener("Data_AreaCode",(_current , _before)=>
        {
            this.UpdateSelectStatus(_current);
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

    InitWithData(_countryName:string , _areaCode:string ,_index : number)
    {
        this.mBtn.SetTitle(_countryName + " " + _areaCode);
        this.mIndex = _index;
        this.UpdateSelectStatus(LocalPlayerData.GetInstance().Data_AreaCode);
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

}

