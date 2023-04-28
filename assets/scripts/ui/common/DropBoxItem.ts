import { _decorator, Component, Node } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('DropBoxItem')
export class DropBoxItem extends BaseUI 
{
    public static PrefabPath : string = "prefab/DropBoxItem";
    public static Bunddle : string = "common";
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    InitParam()
    {

    }
    BindUI()
    {

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

    public InitWithData(_baseData : BaseData<number> , _custmoerData : number , _title : string)
    {
        this.mToggleBtn.SetDataNotify(_baseData , _custmoerData);
        this.mToggleBtn.SetTitle(_title);
    }
}

