import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { Emoji } from './Emoji_Const';
const { ccclass, property } = _decorator;

@ccclass('Emoji_Item')
export class Emoji_Item extends BaseUI 
{
    @property(Sprite) 
    mEmojiIcon: Sprite = null;
    @property(Label) 
    mCost: Label = null;
    @property(BaseButton) 
    mSelfBtn: BaseButton = null;

    mEmoji : Emoji = null;
    mCostAmount : number = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mSelfBtn.SetClickCallback(()=>
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

    public InitWithData(_type : Emoji , _costAmount : number)
    {
        this.mEmoji = _type;
        this.mCostAmount = _costAmount;
        this.LoadSprite("emoji","texture/" + _type , (_spriteFrame)=>
        {
            this.mEmojiIcon.spriteFrame = _spriteFrame;
        });

        this.mCost.string = _costAmount + "";
    }
}

