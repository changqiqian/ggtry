import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { HallData } from '../hall/HallData';
import { MultipleTableBtn } from './MultipleTableBtn';
const { ccclass, property } = _decorator;

@ccclass('MultipleTableCtr')
export class MultipleTableCtr extends BaseUI {

    @property(Node) 
    mLayout: Node = null;

    public static ContentHeight :number = 160;
    public static MaxGame : number = 4;
    InitParam()
    {
        HallData.Instance.Data_MultipeIndex.mData = 0;
        for(let i = 0 ; i < MultipleTableCtr.MaxGame ; i++)
        {
            let current = this.mLayout.children[i].getComponent(MultipleTableBtn);
            current.InitWithIndex(i);
        }
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
}

