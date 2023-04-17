import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { HTTP_FriendsList } from '../../../network/NetworkHttp';
const { ccclass, property } = _decorator;

@ccclass('Game_FriendItem')
export class Game_FriendItem extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mDate: Label = null;
    mCallBack : Function = null;
    mIndex : number;
    InitParam()
    {

    }
    BindUI()
    {
        this.mToggleBtn.SetClickCallback((_value)=>
        {
            if(this.mCallBack != null)
            {
                this.mCallBack(_value , this.mIndex);
            }
        });
        this.mToggleBtn.SetShowStauts(false);
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mCallBack = null;
    }

    public InitWithData(_data : HTTP_FriendsList ,_index : number , _callBack : Function)
    {
        this.mIndex = _index;
        this.mCallBack = _callBack;
        this.LoadHead(_data.headUrl,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });

        this.mName.string = _data.userName;
        this.mID.string = _data.userId;
        this.mDate.string = _data.lastLoginTime;
        this.mToggleBtn.SetShowStauts(_data.selected);
    }
}

