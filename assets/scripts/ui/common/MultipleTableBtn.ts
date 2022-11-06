import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData } from '../hall/HallData';
import { ToggleBtn } from './ToggleBtn';
const { ccclass, property } = _decorator;

@ccclass('MultipleTableBtn')
export class MultipleTableBtn extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Node) 
    mProgressBG: Node = null;
    @property(Sprite) 
    mProgress: Sprite = null;
    @property(Node) 
    mTexasContainer: Node = null;
    @property(Node) 
    mOmhContainer: Node = null;
    @property(Node) 
    mPot: Node = null;
    @property(Label) 
    mPotInfo: Label = null;

    mIndex : number = null;
    mCurrentGid : string = null;

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

    InitWithIndex(_index : number)
    {
        this.mIndex = _index;
        this.mToggleBtn.SetDataNotify(HallData.Instance.Data_MultipeIndex,_index);
        // this.ResetUI();
    }

    ResetUI()
    {
        this.mProgressBG.active = false;
        this.mProgress.node.active = false;
        this.mTexasContainer.active = false;
        this.mOmhContainer.active = false;
        this.mPot.active = false;
    }
}

