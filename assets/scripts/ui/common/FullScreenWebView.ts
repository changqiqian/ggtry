import { _decorator, Component, Node, WebView, view, Tween, Vec3, easing } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('FullScreenWebView')
export class FullScreenWebView extends BaseUI 
{
    @property(WebView) 
    mWebView: WebView = null;
    mTween : any = null;
    mScheme : string = "backapp";
    InitParam() 
    {
        this.node.setPosition(0, - view.getVisibleSize().height);
        this.mWebView.setJavascriptInterfaceScheme(this.mScheme);
        this.mWebView.setOnJSCallback(this.WebCallCocos.bind(this));
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
    UnregDataNotify() 
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

    public SetUrl(_url : string , _param : string = "")
    {
        let final = _url + _param;
        this.mWebView.url = final;
    }

    WebCallCocos(_url)
    {
        console.log("WebCallCocos url===" + _url );
        this.Show(false);
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

