import { _decorator, Component, Node, Label, WebView, sys, Tween, Vec3, easing, view } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('InsertWebView')
export class InsertWebView extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Label) 
    mTitle: Label = null;
    @property(WebView) 
    mWebView: WebView = null;
    mTween : any = null;
    InitParam() 
    {
        this.node.setPosition(0, - view.getVisibleSize().height);
    }
    BindUI() 
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        })
    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.StopAnimation();
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.ShowAnmiation();
        }
        else
        {
            this.HideAnimation();
        }
    }
    

    public SetTile(_title : string)
    {
        this.mTitle.string = _title;
    }

    public SetUrl(_url : string , _param : string = "")
    {
        let final = _url + _param;
        this.mWebView.url = final;
    }

    ShowAnmiation()
    {
        this.StopAnimation();
        this.mTween = new Tween(this.node);
        this.mTween.to(0.3,{position:new Vec3(0 , 0 ,0)},{easing:easing.quadIn});
        this.mTween.start();
    }

    HideAnimation()
    {
        this.StopAnimation();
        this.mTween = new Tween(this.node);
        this.mTween.to(0.3,{position:new Vec3(0 ,-view.getVisibleSize().height ,0)},{easing:easing.quadOut});
        this.mTween.call(()=>
        {
            this.node.active = false;
        });
        this.mTween.start();
    }

    StopAnimation()
    {
        if(this.mTween != null)
        {
            this.mTween.stop();
            this.mTween = null;
        }
    }
}

