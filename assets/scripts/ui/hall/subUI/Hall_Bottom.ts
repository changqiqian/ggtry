import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { ToggleBtn } from '../../common/ToggleBtn';
import { HallData } from '../HallData';
const { ccclass, property } = _decorator;

@ccclass('Hall_Bottom')
export class Hall_Bottom extends BaseUI 
{
    

    InitParam() 
    {

    }
    BindUI() 
    {
        for(let i = 0 ; i < this.node.children.length ; i++)
        {
            let current = this.node.children[i].getComponent(ToggleBtn);
            current.SetDataNotify(HallData.GetInstance(),"Data_SubPage" , i);
        }
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


export enum Hall_SubPage //大厅底部分页
{
    MTT,
    Club,
    Me,
}