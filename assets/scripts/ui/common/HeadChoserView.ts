import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('HeadChoserView')
export class HeadChoserView extends BaseUI 
{
    @property(Node) 
    mHeadLayout: Node = null;
    @property(BaseButton) 
    mCameraBtn: BaseButton = null;
    @property(BaseButton) 
    mPhotoLibrayBtn: BaseButton = null;
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < this.mHeadLayout.children.length ; i++)
        {
            let currentBtn = this.mHeadLayout.children[i].getComponent(BaseButton);
            currentBtn.SetClickCallback((_data)=>
            {
                LocalPlayerData.GetInstance().Data_PhotoUrl = _data.toString();
                this.Show(false);
            },i);

            this.LoadSprite("common" , "texture/head/" + i.toString() , (_spriteFrame)=>
            {
                currentBtn.SetSprite(_spriteFrame);
            })
        }

        this.mCameraBtn.SetClickCallback(()=>
        {
            UIMgr.GetInstance().ShowToast("打开相机，需要在原生工程里面添加平台代码");
        });

        this.mPhotoLibrayBtn.SetClickCallback(()=>
        {
            UIMgr.GetInstance().ShowToast("打开相册，需要在原生工程里面添加平台代码");
        });

        this.mCancelBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });
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

    }

}

