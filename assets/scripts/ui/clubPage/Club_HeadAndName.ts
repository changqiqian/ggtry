import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Club_HeadAndName')
export class Club_HeadAndName extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;

    mUid : string = null;
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

    public InitWithData(_head : number , _name : string , _uid : string)
    {
        this.LoadLocalHead(_head,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
        this.mUid = _uid;
        this.mName.string = _name;
    }
}

