import { _decorator, Component, Node, view, UITransform, Vec3, Widget } from 'cc';
import { BaseUI } from '../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('AdaptFullScreen')
export class AdaptFullScreen extends Component 
{
    onLoad() 
    {
        let widget = this.node.getComponent(Widget);
        if(widget != null)
        {
            widget.enabled = false;
        }

        let screenSize = view.getVisibleSize();
        let transform = this.node.getComponent(UITransform);
        transform.setContentSize(screenSize);
        this.node.setWorldPosition(new Vec3(screenSize.width/2,screenSize.height/2));
    }

}

