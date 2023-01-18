import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { NetworkSend } from '../../network/NetworkSend';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { DropBox } from '../common/DropBox';
import { HallData } from '../hall/HallData';
import { Cash_GameItem } from './Cash_GameItem';
const { ccclass, property } = _decorator;

@ccclass('Cash_Main')
export class Cash_Main  extends ListViewCtr<HallTexasGameInfo> 
{
    @property(Node) 
    mTop: Node = null;
    @property(DropBox) 
    mSeatDropBox: DropBox = null;
    @property(DropBox) 
    mTimeDropBox: DropBox = null;
    @property(DropBox) 
    mBBDropBox: DropBox = null;
    @property(Node) 
    mBottom: Node = null;

    BindUI() 
    {
        this.AddSubView("hall","prefab/Hall_LunBo",null,this.mTop);

        this.mSeatDropBox.InitWithData(HallData.Instance.Data_DropBoxSeatOption, 0 , GameConfig.GetDropBoxSeatTitle());
        this.mTimeDropBox.InitWithData(HallData.Instance.Data_DropBoxGameTypeOption, 0 , GameConfig.GetDropBoxGameTypeTitle());
        this.mBBDropBox.InitWithData(HallData.Instance.Data_DropBoxBBOption, 0 , GameConfig.GetDropBoxBBTitle());
    }
    RegDataNotify() 
    {
        HallData.Instance.Data_DropBoxSeatOption.AddListenner(this,(_data)=>
        {

        });

        HallData.Instance.Data_DropBoxGameTypeOption.AddListenner(this,(_data)=>
        {

        });

        HallData.Instance.Data_DropBoxBBOption.AddListenner(this,(_data)=>
        {

        });

        HallData.Instance.Data_S2CHallTexasGameInfoResp.AddListenner(this,(_data)=>
        {
            if(this.node.activeInHierarchy == false)
            {
                return;
            }

            this.ForceSetData(_data.gameList);
            this.RefreshData();
        });
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    OnDragBottom() 
    {

    }

    Refresh()
    {
        NetworkSend.Instance.GetTexasGameListInHall();
    }

    RenderEvent(_item: Node , _index: number)
    {
        let srcData = this.mCurrentData[_index];
        let script = _item.getComponent(Cash_GameItem);
        script.InitWithData(srcData);
    }

}

