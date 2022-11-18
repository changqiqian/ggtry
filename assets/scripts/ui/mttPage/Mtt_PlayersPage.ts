import { _decorator, Component, Node, Label, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { HallData, Mtt_InfoSubPage } from '../hall/HallData';
import { Mtt_PlayerRankItem } from './Mtt_PlayerRankItem';
const { ccclass, property } = _decorator;

@ccclass('Mtt_PlayersPage')
export class Mtt_PlayersPage extends ListViewCtr<any> 
{
    @property(Label) 
    mPlayerAmount: Label = null;
    @property(Label) 
    mPrizeLevel: Label = null;

    BindUI() 
    {
        this.node.active = false; 
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_MttInfoSubPage.AddListenner(this , (_data)=>
        {
            this.Show(_data == Mtt_InfoSubPage.PlayerPage);
        })
    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {

    }
}

