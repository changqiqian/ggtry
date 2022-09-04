import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { SelfEmoji } from './Emoji_Const';
const { ccclass, property } = _decorator;

@ccclass('Emoji_SelfItem')
export class Emoji_SelfItem extends BaseUI 
{
    @property(Sprite) 
    mIcon: Sprite = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;

    mType : SelfEmoji = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mSelfBtn.SetClickCallback(()=>
        {

        });
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

    public InitWithData(_type : SelfEmoji)
    {
        this.mType = _type;
        let name = "Self" + _type;
        this.LoadSprite("emoji","texture/" + name , (_spriteFrame)=>
        {
            this.mIcon.spriteFrame = _spriteFrame;
        });
    }
}

