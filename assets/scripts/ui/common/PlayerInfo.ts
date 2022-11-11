import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('PlayerInfo')
export class PlayerInfo extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    InitParam() 
    {

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

    CustmoerDestory() 
    {

    }

    public SetRomoteHead(_url : string)
    {
        this.LoadRemoteSprite(_url,(_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        });
    }

    public SetLocalHead(_headIndex : number)
    {
        this.LoadLocalHead(_headIndex , (_spriteFrame)=>
        {
            this.mHead.spriteFrame = _spriteFrame;
        })
    }

    public SetName(_name : string)
    {
        this.mName.string = _name;
    }
}

