import { _decorator, Component, Node, Sprite, Label, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_ObItem')
export class Game_ObItem extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Label) 
    mName: Label = null;
    @property(Node) 
    mDarkMask: Node = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    
    mPlayerInfo : PlayerInfo;
    InitParam()
    {

    }
    BindUI()
    {
        this.mBtn.SetClickCallback(()=>
        {
            if(this.mPlayerInfo == null)
            {
                return;
            }

            console.log("this.mPlayerInfo ===" + this.mPlayerInfo.nickName);
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
        this.mPlayerInfo = null;
    }

    public InitWithData(_playerInfo : PlayerInfo)
    {
        this.mPlayerInfo = _playerInfo;
        this.LoadLocalHead(parseInt(_playerInfo.head) , (_spriteFrame)=>
        {
            this.mHead.node.active = true;
            this.mHead.spriteFrame = _spriteFrame;
        })

        this.mName.string = _playerInfo.nickName;
        //this.ShowOnLine(_playerInfo.online);
    }

    ShowOnLine(_online : boolean)
    {
        this.mDarkMask.active = !_online;
        if(_online)
        {
            this.mName.color = new Color(255,255,255,255);
        }
        else
        {
            this.mName.color = new Color(255,255,255,150);
        }
    }
}

