import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('InputCodeIndicator')
export class InputCodeIndicator extends BaseUI 
{

    mToggles : Array<ToggleBtn> = null;
    mCallback : Function = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mToggles = new Array<ToggleBtn>();
        this.node.on(Node.EventType.TOUCH_END,this.OnClicked.bind(this),this);
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let currentToggle = this.node.children[i].getComponent(ToggleBtn);
            currentToggle.SetForbidden(true);
            this.mToggles.push(currentToggle);
        }
    }

    onEnable()
    {
        this.ClearAllNumber();
    }

    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {
        this.mCallback = null;
        this.mToggles = null;
    }

    OnClicked()
    {
        if(this.mCallback != null)
        {
            this.mCallback();
        }
    }

    public SetClickCallback(_callback : Function)
    {
        this.mCallback = _callback;
    }

    public InsertOneNum(_number : string)
    {
        let currentNums = this.GetCurrentContent();
        let currentIndex = currentNums.length;
        if(currentIndex >= this.mToggles.length)
        {
            return;
        }

        this.mToggles[currentIndex].ShowSelected();
        this.mToggles[currentIndex].SetTitle(_number.toString());
    }

    public GetCurrentContent() : string
    {
        let currentNums = "";
        for(let i = 0 ; i < this.mToggles.length ; i++)
        {
            let currentToggle = this.mToggles[i];
            if(currentToggle.IsSelected())
            {
                currentNums += currentToggle.GetTitle();
            }
            else
            {
                break;
            }
        }

        return currentNums;
    }

    DeleteOneNumber()
    {
        for(let i = this.mToggles.length - 1 ; i >= 0  ; i--)
        {
            let current = this.mToggles[i];
            if(current.IsSelected())
            {
                current.ShowUnselected();
                current.SetTitle("");
                break;
            }
            else
            {
                continue;
            }
        }
    }

    ClearAllNumber()
    {
        for(let i = 0 ; i < this.mToggles.length ; i++)
        {
            this.mToggles[i].ShowUnselected();
            this.mToggles[i].SetTitle("");
        }
    }


}

