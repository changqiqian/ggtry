import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Mtt_SingleReward')
export class Mtt_SingleReward extends BaseUI 
{

    @property(Node) 
    mIcons: Node = null;
    @property(Label) 
    mDescribe: Label = null;
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

    public InitWithData(_rewardType : number , _describe : string , _amount : number)
    {
        _rewardType--;
        for(let i = 0 ; i < this.mIcons.children.length ; i++)
        {
            this.mIcons.children[i].active = _rewardType==i;
        }

        this.mDescribe.string = _describe;
    }
}

