import { _decorator, Component, Node, Label, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { cb_HistoryLayout } from './cb_HistoryLayout';
const { ccclass, property } = _decorator;

@ccclass('cb_TotalHistory')
export class cb_TotalHistory extends BaseUI {

    @property(Label) 
    mGameName: Label = null;
    @property(cb_HistoryLayout) 
    mHistoryLayout: cb_HistoryLayout = null;
    InitParam() 
    {

    }
    BindUI() {

        // let config = new Array<Color>();
        // config.push(Color.YELLOW);
        // config.push(Color.RED);
        // config.push(Color.GREEN);
        // this.mHistoryLayout.SetConfig(config, 10 );
        // this.mHistoryLayout.SetData([1,0,0,0,2,1,0,0,0,2]);
        // setTimeout(() => 
        // {
        //     this.mHistoryLayout.InsertOneData(0);
        // }, 2000)

        // setTimeout(() => 
        // {
        //     this.mHistoryLayout.InsertOneData(0);
        // }, 4000)
        // setTimeout(() => 
        // {
        //     this.mHistoryLayout.InsertOneData(0);
        // }, 6000)
    }
    RegDataNotify() {

    }
    LateInit() {

    }

    CustmoerDestory() {

    }

}

