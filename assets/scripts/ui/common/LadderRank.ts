import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('LadderRank')
export class LadderRank extends BaseUI 
{
    @property(Label) 
    mOther: Label = null;
    @property(Node) 
    mSprRank: Node = null;
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
=
    CustmoerDestory() 
    {

    }

    public ShowRank(_rank : number)
    {
        _rank--; //服务器是从1开始，我是从0开始
        this.mSprRank.active = false;
        this.mOther.node.active = false;
        if(_rank <= 2)
        {
            this.mSprRank.active = true;
            for(let i = 0 ; i < this.mSprRank.children.length ; i++)
            {
                this.mSprRank.children[i].active = i == _rank;
            }
        }
        else
        {
            this.mOther.node.active = true;
            this.mOther.string = _rank + "";
        }
    }
}

