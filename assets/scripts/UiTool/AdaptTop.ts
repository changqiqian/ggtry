import { _decorator, Component, Node, sys, view, Widget } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

//用于适配顶部刘海
@ccclass('AdaptTop')
export class AdaptTop extends Component {
    onLoad()
    {
        let safeHeight = sys.getSafeAreaRect().size.height;
        let fullHeight = view.getVisibleSize().height;
        if(fullHeight > safeHeight)
        {
            let offsetHeight = (fullHeight - safeHeight)/2.5;
            let widget = this.node.getComponent(Widget);
            if(widget != null)
            {
                widget.top = offsetHeight;
                widget.updateAlignment();
            }
        }
    }



}

