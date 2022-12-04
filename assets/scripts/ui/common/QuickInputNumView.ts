import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('QuickInputNumView')
export class QuickInputNumView extends BaseUI 
{
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Node) 
    mContainer: Node = null;

    mNumberClickCallback : Function = null;
    mDeleteClickCallback : Function = null;

    InitParam() 
    {

    }
    BindUI() 
    {
        this.node.on(Node.EventType.TOUCH_END,this.OnClickBG.bind(this),this);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        
        for(let i = 0 ; i < this.mContainer.children.length ; i++)
        {
            let currentBtn = this.mContainer.children[i].getComponent(BaseButton);
            if(i < 9)
            {
                let currentIndex = i+1;
                currentBtn.SetTitle(currentIndex.toString());
                currentBtn.SetClickCallback(this.OnClickNumBtn.bind(this),currentIndex);
            }
            else if(i == 9)
            {
                let currentIndex = 0;
                currentBtn.SetTitle(currentIndex.toString());
                currentBtn.SetClickCallback(this.OnClickNumBtn.bind(this),currentIndex);
            }
            else
            {
                currentBtn.SetClickCallback(this.OnDeleteBtn.bind(this));
            }
        }
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.mNumberClickCallback = null;
        this.mDeleteClickCallback = null;
    }


    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

    public SetCallback(_numberClickCallback : Function , _deleteClickCallback : Function)
    {
        this.mNumberClickCallback = _numberClickCallback;
        this.mDeleteClickCallback = _deleteClickCallback;
    }

    OnClickBG()
    {
        this.mMovingShow.HideAnimation();
    }

    OnClickNumBtn(_num)
    {
        if(this.mNumberClickCallback != null)
        {
            this.mNumberClickCallback(_num)
        }
    }

    OnDeleteBtn()
    {
        if(this.mDeleteClickCallback != null)
        {
            this.mDeleteClickCallback()
        }
    }
}

