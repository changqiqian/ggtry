import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('HeadChoserView')
export class HeadChoserView extends BaseUI 
{
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Node) 
    mHeadLayout: Node = null;
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;

    onEnable()
    {
        this.mMovingShow.ShowAnimation();
    }
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetHideAnimationCallback(()=>
        {
            this.node.active = false;
        })

        for(let i = 0 ; i < this.mHeadLayout.children.length ; i++)
        {
            let currentBtn = this.mHeadLayout.children[i].getComponent(BaseButton);
            currentBtn.SetClickCallback((_data)=>
            {
                LocalPlayerData.Instance.Data_Head.mData = _data.toString();
                this.Show(false);
            },i);

            this.LoadLocalHead(i,(_spriteFrame)=>
            {
                currentBtn.SetSprite(_spriteFrame);
            });

        }

        this.mCancelBtn.SetClickCallback(()=>
        {
            this.Show(false);
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

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

}

