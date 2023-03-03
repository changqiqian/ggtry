import { _decorator, Component, Node, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { NetworkHttp } from '../../network/NetworkHttp';
import ListView from '../../UiTool/ListView';
import { ListViewCtr } from '../../UiTool/ListViewCtr';
import { BriefRecordItem } from '../common/BriefRecordItem';
import { Game_CashReplay } from '../gamePage/subUI/Game_CashReplay';
import { Club_RecordDetailSubPage, HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordRecipeLayer')
export class Club_RecordRecipeLayer extends ListViewCtr<SimpleReplay> 
{

    BindUI()
    {

    }
    RegDataNotify()
    {

        HallData.Instance.Data_ClubRecordDetailSubPage.AddListenner(this,(_data)=>
        {
            this.Show(_data == Club_RecordDetailSubPage.Recipe);
        })

        LocalPlayerData.Instance.Data_SimpleReplayData.AddListenner(this,(_data)=>
        {
            if(this.mCurrentPage != _data.pageNum)
            {
                return;
            }

            for(let i = 0 ; i < _data.list.length ; i++)
            {
                let current = _data.list[i];
                let index = this.mCurrentData.findIndex((_item) => _item.index === current.index);
                if(index < 0)
                {
                    this.InsertOneData(current);
                }
            }

            this.UpdateData(_data.total);
        })


        LocalPlayerData.Instance.Data_ReplayData.AddListenner(this,(_data)=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_CashReplay",true,(_script)=>
            {
                let tempScript = _script as Game_CashReplay;
                tempScript.InitWithData(_data);
            });      

        });
    }

    Refresh()
    {
        if(LocalPlayerData.Instance.Data_RecordDetail.mData == null)
        {
            return;
        }
        let type = HallData.Instance.Data_ClubRecordSubPage.mData;
        let date = LocalPlayerData.Instance.Data_RecordDetail.mData.date;
        let gameId = LocalPlayerData.Instance.Data_RecordDetail.mData.gameCode;
        NetworkHttp.Instance.PostSimpleReplay(type , gameId,this.mCurrentPage , this.mPageSize , date );
    }

    RenderEvent(_item: Node , _index: number)
    {
        let script = _item.getComponent(BriefRecordItem);
        script.InitWithData(this.mCurrentData[_index],this.OnVedioBtn);
    }

    OnVedioBtn(_gameId : string , _index : number , _date : string)
    {
        NetworkHttp.Instance.PostReplayDetail(_gameId,_index,_date);
    }
}

