import { _decorator, Component, Node, Label, CCString } from 'cc';
import { Localization } from './Localization';
const { ccclass, property } = _decorator;

@ccclass('LocalizationText')
export class LocalizationText extends Component 
{
    @property({}) 
    mKey: string = "";
    private mLabel: Label = null;
    start() 
    {
        this.mLabel = this.node.getComponent(Label);
        this.mLabel.string = Localization.GetString(this.mKey);
    }
}

