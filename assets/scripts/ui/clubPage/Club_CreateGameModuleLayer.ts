import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { Club_CreateTexasConfig, HallData } from '../hall/HallData';
import { Club_CreateGameModuleItem } from './Club_CreateGameModuleItem';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateGameModuleLayer')
export class Club_CreateGameModuleLayer extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(ScrollView) 
    mScrollView: ScrollView = null;


    InitParam()
    {
        this.OffsetHallTop();
        HallData.Instance.Data_ClubRefreshGameModule.mData = true;
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        })
    }
    RegDataNotify()
    {
        HallData.Instance.Data_ClubRefreshGameModule.AddListenner(this,(_data)=>
        {
            if(_data)
            {
                this.Refresh();
            }
        })
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {

    }
    Refresh()
    {
        GameConfig.ReoderCreateRoomModuleData();
        this.RemoveAndDestoryAllChild(this.mScrollView.content);
        for(let i = 0 ; i < GameConfig.MaxModule ; i++)
        {
            let currentStrData = GameConfig.GetCreateRoomModule(i);
            if(currentStrData == null)
            {
                break;
            }

            this.LoadPrefab("clubPage" , "prefab/Club_CreateGameModuleItem",(_node)=>
            {
                let classData = JSON.parse(currentStrData) as Club_CreateTexasConfig;
                this.mScrollView.content.addChild(_node);
                let script = _node.getComponent(Club_CreateGameModuleItem);
                script.InitWithData(classData , i);
            });
        }
    }
}

