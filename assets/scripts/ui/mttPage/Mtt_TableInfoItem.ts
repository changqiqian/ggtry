import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
const { ccclass, property } = _decorator;

@ccclass('Mtt_TableInfoItem')
export class Mtt_TableInfoItem extends BaseUI 
{
    @property(Label) 
    mTableNum: Label = null;
    @property(Label) 
    mPlayerNum: Label = null;
    @property(Label) 
    mMax: Label = null;
    @property(Label) 
    mAvg: Label = null;
    @property(Label) 
    mMin: Label = null;
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

    public InitWithData(_tableId : number , _userCount : number , _maxScore: number , _minScore: number,
        _avgScore: number)
    {
        this.mTableNum.string = _tableId + "";
        this.mPlayerNum.string = _userCount + "";
        this.mMax.string = _maxScore + "";
        this.mMin.string = _minScore + "";
        this.mAvg.string = _avgScore + "";
    }

}

