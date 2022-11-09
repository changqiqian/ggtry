import { _decorator, Component, Node, sys, view, Widget } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

//用于适配顶部刘海
@ccclass('AdaptTop')
export class AdaptTop extends BaseUI {
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
        let safeHeight = sys.getSafeAreaRect().size.height;
        let fullHeight = view.getVisibleSize().height;
        console.log("safeHeight===" + safeHeight);
        console.log("fullHeight===" + fullHeight);
        console.log("fullHeight - safeHeight===" + (fullHeight - safeHeight));
        if(fullHeight > safeHeight)
        {
            let offsetHeight = (fullHeight - safeHeight)/2;
            let widget = this.node.getComponent(Widget);
            if(widget != null)
            {
                widget.top = offsetHeight;
            }
        }
    }
    CustmoerDestory()
    {
        
    }


}

