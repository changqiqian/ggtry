import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatShortcutItem')
export class Game_ChatShortcutItem extends BaseUI 
{
    @property(BaseButton) 
    mBtn: BaseButton = null;

    mIndex : number ;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {

        })

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

    public InitWithData(_index : number ,  _content :string)
    {
        this.mBtn.SetTitle(_content);
        this.mIndex = _index;
    }
}

