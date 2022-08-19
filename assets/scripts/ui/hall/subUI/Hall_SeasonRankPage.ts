import { _decorator, Component, Node, Sprite, Label, ScrollView } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { HallData, Hall_RankSubPage } from '../HallData';
const { ccclass, property } = _decorator;

@ccclass('Hall_SeasonRankPage')
export class Hall_SeasonRankPage extends BaseUI 
{
    @property(Sprite) 
    mHead: Sprite = null;
    @property(Node) 
    mDetails: Node = null;
    @property(Label) 
    mName: Label = null;
    @property(Label) 
    mID: Label = null;
    @property(Label) 
    mPower: Label = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_HallRankSubPage",(_current , _before)=>
        {
            this.Show(_current == Hall_RankSubPage.Season);
            if(_current == Hall_RankSubPage.Season)
            {
            
            }
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }
}

