import { _decorator, Component, Node } from 'cc';
import { Emoji_BaseDBAnm } from './Emoji_BaseDBAnm';
const { ccclass, property } = _decorator;

@ccclass('Emoji_DBAnm0')
export class Emoji_DBAnm0 extends Emoji_BaseDBAnm 
{
    InitParam()
    {
        this.mArmatureName = "Armature";
        this.mStartAnmName = "emission";
        this.mMiddleAnmName = "process";
        this.mEndAnmName = "aims";
    }
}

