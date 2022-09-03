import { _decorator, Component, Node, EditBox } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { ToggleBtn } from '../../common/ToggleBtn';
import { GameData, Game_ChattingSubLayer } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_ChattingLayer')
export class Game_ChattingLayer extends BaseUI 
{
    @property(Node) 
    mLayout: Node = null;
    @property(Node) 
    mSubLayer: Node = null;
    @property(ToggleBtn) 
    mVipToggle: ToggleBtn = null;
    @property(EditBox) 
    mEditBox: EditBox = null;
    @property(BaseButton) 
    mSendBtn: BaseButton = null;
    @property(BaseButton) 
    mVipSendBtn: BaseButton = null;
    InitParam()
    {
        GameData.GetInstance().Data_ChatingSubLayer = Game_ChattingSubLayer.ChatHistory;
    }
    BindUI()
    {
        for(let i = 0 ; i < this.mLayout.children.length ; i++)
        {
            let current = this.mLayout.children[i].getComponent(ToggleBtn);
            current.SetDataNotify(GameData.GetInstance() , "Data_ChatingSubLayer" , i);
        }


        this.mSendBtn.node.active = true;
        this.mVipSendBtn.node.active = false;
        this.mVipToggle.SetClickCallback((_value)=>
        {
            this.mSendBtn.node.active = !_value;
            this.mVipSendBtn.node.active = _value;
        });

        this.mSendBtn.SetClickCallback(()=>
        {

        })

        this.mVipSendBtn.SetClickCallback(()=>
        {

        })

        this.AddSubView("gamePage" , "prefab/Game_ChatHistoryLayer",null ,this.mSubLayer);
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


