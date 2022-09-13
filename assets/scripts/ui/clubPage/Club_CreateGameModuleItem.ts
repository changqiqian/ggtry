import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { TipsWindow } from '../common/TipsWindow';
import { Club_CreateTexasConfig, HallData } from '../hall/HallData';
import { Club_GameItem } from './Club_GameItem';
const { ccclass, property } = _decorator;

@ccclass('Club_CreateGameModuleItem')
export class Club_CreateGameModuleItem extends BaseUI
{
    @property(Club_GameItem) 
    mClub_GameItem: Club_GameItem = null;
    @property(BaseButton) 
    mEditBtn: BaseButton = null;
    @property(BaseButton) 
    mDeleteBtn: BaseButton = null;
    mIndex : number = null;
    InitParam()
    {
        
    }
    BindUI()
    {
        this.mEditBtn.SetClickCallback(()=>
        {
            HallData.GetInstance().ReadModule(this.mIndex);
            HallData.GetInstance().Data_ClubCurrentModuleIndex = this.mIndex;
            if(HallData.GetInstance().Data_Club_CreateTexasConfig.gameType == PokerLife.Club.GameType.TexasCash)
            {
                this.ShowLayer("clubPage" , "prefab/Club_CreateTexas")
            }
            else if(HallData.GetInstance().Data_Club_CreateTexasConfig.gameType == PokerLife.Club.GameType.ShortCash)
            {
                this.ShowLayer("clubPage" , "prefab/Club_CreateShort")
            }
        });
        this.mDeleteBtn.SetClickCallback(()=>
        {
            this.ShowWindow("common" , "prefab/TipsWindow",true,(_script)=>
            {
                let tempScript = _script as TipsWindow;
                let tips = Localization.GetString("00096");
                tempScript.SetTips(tips);
                tempScript.SetCallback(()=>
                {
                    GameConfig.DeleteCreateRoomModule(this.mIndex);
                    HallData.GetInstance().Data_ClubRefreshGameModule = true;
                })
            })
        });
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

    public InitWithData(_data : Club_CreateTexasConfig , _index : number)
    {
        this.mIndex = _index;
        this.mClub_GameItem.InitWithData(_data);
    }
}

