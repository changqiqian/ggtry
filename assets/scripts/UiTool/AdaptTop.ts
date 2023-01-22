import { _decorator, Component, Node, sys, view, Widget } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

//用于适配顶部刘海
@ccclass('AdaptTop')
export class AdaptTop extends Component 
{
    public static IsLiuHai : boolean = false;
    public static IsIphoneX : boolean = false;
    onLoad()
    {
        let safeHeight = sys.getSafeAreaRect().size.height;
        let fullHeight = view.getVisibleSize().height;
        let fullWidth = view.getVisibleSize().width;

        let num = fullHeight - safeHeight;
        console.log("fullHeight===" + fullHeight);
        console.log("safeHeight===" + safeHeight);
        console.log("Top num===" + num);
        if(num >= 50)
        {
            let offsetHeight = (fullHeight - safeHeight)/4;
            let widget = this.node.getComponent(Widget);
            if(widget != null)
            {
                widget.top = offsetHeight;
                widget.updateAlignment();
            }

            AdaptTop.IsLiuHai = true;
        }

        if(fullHeight/fullWidth > 2)
        {
            AdaptTop.IsIphoneX = true;
        }
    }




}

