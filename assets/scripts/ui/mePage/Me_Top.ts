import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { BaseButton } from '../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Me_Top')
export class Me_Top extends BaseUI 
{
    @property(BaseButton) 
    mHeadBtn: BaseButton = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mNickName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(BaseButton) 
    mCyberBtn: BaseButton = null;

    
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mHeadBtn.SetClickCallback(()=>
        {

        });

        this.mCyberBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_Uid.AddListenner(this,(_data)=>
        {
            this.mID.string = _data;
        })

        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            if(_data == null || _data == "")
            {
                return;
            }

            this.LoadLocalHead(_data,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        })

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

