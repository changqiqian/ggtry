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
       

        LocalPlayerData.GetInstance().AddListener("Data_Uid",(_current , _before)=>
        {
            this.mID.string = _current;
        },this);

        LocalPlayerData.GetInstance().AddListener("Data_PhotoUrl",(_current , _before)=>
        {
            if(_current == null || _current == "")
            {
                return;
            }

            this.LoadLocalHead(_current,(_spriteFrame)=>
            {
                this.mHead.spriteFrame = _spriteFrame;
            });
        },this);
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

}

