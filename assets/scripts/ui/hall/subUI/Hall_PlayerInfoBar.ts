import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Hall_PlayerInfoBar')
export class Hall_PlayerInfoBar extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(BaseButton) 
    mCoinBtn: BaseButton = null;
    @property(Label) 
    mName: Label = null;

    
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCoinBtn.SetClickCallback(()=>
        {

        });

    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_Head.AddListenner(this,(_data)=>
        {
            if(_data == null)
            {
                return;
            }

            this.LoadLocalHead(_data,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        })

        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.mCoinBtn.SetTitle(Tool.ConvertMoney_S2C(_data).toString());
        })

        LocalPlayerData.Instance.Data_NickName.AddListenner(this,(_data)=>
        {
            this.mName.string = _data;
        })
        
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

