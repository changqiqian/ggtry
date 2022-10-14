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
                LocalPlayerData.Instance.Data_Head.mData = _data.toString();
                this.Show(false);
            },i);

            this.LoadLocalHead(i,(_spriteFrame)=>
            {
                currentBtn.SetSprite(_spriteFrame);
            });

        }

        this.mCameraBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("打开相机，需要在原生工程里面添加平台代码");
        });

        this.mPhotoLibrayBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowToast("打开相册，需要在原生工程里面添加平台代码");
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

    CustmoerDestory() 
    {

    }

}

