import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Game_TableInfo')
export class Game_TableInfo extends BaseUI 
{
    @property(Label) 
    mRoomName: Label = null;
    @property(Label) 
    mRoomID: Label = null;
    @property(Label) 
    mBlindInfo: Label = null;
    @property(Label) 
    mDoubleScore: Label = null;
    @property(Label) 
    mMinHold: Label = null;
    @property(Label) 
    mOtherInfo: Label = null;
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
    UnregDataNotify() 
    {

    }
    CustmoerDestory() 
    {

    }
}

