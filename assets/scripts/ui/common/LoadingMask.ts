import { _decorator, Component, Node, SpriteFrame, Label, Sprite, Tween } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('LoadingMask')
export class LoadingMask extends BaseUI {
    public static PrefabPath : string = "prefab/LoadingMask";
    public static Bunddle : string = "common";
    @property([SpriteFrame]) 
    mLoadingFrames: [SpriteFrame];
    @property(Label) 
    mTips: Label = null;
    @property(Sprite) 
    mIcon: Sprite = null;

    mCurrentIndex = 0 ;
    InitParam() 
    {
        this.mCurrentIndex = 0;
    }
    BindUI() 
    {

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

    public ShowLoading(_show : boolean , _tips : string  = "")
    {
        this.node.active = _show;
        this.mTips.string = _tips;
    }

    StartLoadingAnimation()
    {
        this.mCurrentIndex = 0;
    }


}

