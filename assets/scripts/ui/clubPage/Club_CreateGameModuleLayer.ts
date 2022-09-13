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
        HallData.GetInstance().Data_ClubRefreshGameModule = true;
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
        HallData.GetInstance().AddListener("Data_ClubRefreshGameModule",(_current , _before)=>
        {
            if(_current)
            {
                this.Refresh();
            }
        },this);
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
        this.mScrollView.content.destroyAllChildren();
        for(let i = 0 ; i < GameConfig.MaxModule ; i++)
        {
            let currentStrData = GameConfig.GetCreateRoomModule(i);
            if(currentStrData == null)
            {
                break;
            }

            this.LoadPrefab("clubPage" , "prefab/Club_CreateGameModuleItem",(_prefab)=>
            {
                let classData = JSON.parse(currentStrData) as Club_CreateTexasConfig;
                let tempNode = instantiate(_prefab);
                this.mScrollView.content.addChild(tempNode);
                let script = tempNode.getComponent(Club_CreateGameModuleItem);
                script.InitWithData(classData , i);
            });
        }
    }
}

