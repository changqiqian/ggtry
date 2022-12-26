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
        this.StopAllTween();
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
        this.StopAllTween();
        let tempTween = new Tween(this.node);
        tempTween.to(0.3,{position:new Vec3(0 , 0 ,0)},{easing:easing.quadIn});
        tempTween.start();
    }

    HideAnimation()
    {
        this.StopAllTween();
        let tempTween = new Tween(this.node);
        tempTween.to(0.3,{position:new Vec3(0 ,-view.getVisibleSize().height ,0)},{easing:easing.quadOut});
        tempTween.call(()=>
        {
            this.node.active = false;
        });
        tempTween.start();
    }

}

