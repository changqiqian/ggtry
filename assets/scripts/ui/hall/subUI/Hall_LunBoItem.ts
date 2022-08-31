import { _decorator, Component, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { InsertWebView } from '../../common/InsertWebView';
const { ccclass, property } = _decorator;

@ccclass('Hall_LunBoItem')
export class Hall_LunBoItem extends BaseUI 
{
    @property(Sprite) 
    mHttpImage: Sprite = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;

    mUrl : string = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBtn.SetClickCallback(()=>
        {
            this.ShowLayer("common","prefab/InsertWebView",true , (_script)=>
            {
                let tempScript = _script as InsertWebView;
                tempScript.SetTile("Detail");
                tempScript.SetUrl(this.mUrl);
            });
        });
        this.mBtn.SetProtectDoubleClick(true,1);
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

    public InitWithData(_url : string , _picUrl : string)
    {
        this.mUrl = _url;
        this.LoadRemoteSprite(_picUrl,(_spriteFrame)=>
        {
            this.mHttpImage.spriteFrame = _spriteFrame;
        });
    }
}




