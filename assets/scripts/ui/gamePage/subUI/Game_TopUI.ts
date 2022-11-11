import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
const { ccclass, property } = _decorator;

@ccclass('Game_TopUI')
export class Game_TopUI extends BaseUI 
{
    @property(BaseButton) 
    mMenuBtn: BaseButton = null;
    @property(BaseButton) 
    mObBtn: BaseButton = null;

    @property(Label) 
    mAmount: Label = null;
    @property(Node) 
    mMicOff: Node = null;
    @property(Node) 
    mMicOn: Node = null;
    @property(Node) 
    mMicDisable: Node = null;
    private mIndex : number = null;
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

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
    }
}

