import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameData } from '../gamePage/GameData';
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

    }

    public SetLocalHead(_bundleName : string , _assetPath : string)
    {

    }

    public SetName(_name : string)
    {
        this.mName.string = _name;
    }
}

