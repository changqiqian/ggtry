import { BaseData } from '../../base/BaseData';
import { SingletonBaseNotify } from '../../base/Singleton';
import { GameConfig } from '../../GameConfig';

export class HallData extends SingletonBaseNotify<HallData>()
{

    protected ResetInstance() 
    {
        HallData.ClearInstance();
    }
    Data_MultipeIndex : BaseData<number> = new BaseData<number>();      //多桌游戏选中
    Data_S2CEnterGame :  BaseData<S2CCommonEnterGameResp> = new BaseData<S2CCommonEnterGameResp>(true); //进入游戏
    Data_S2CExitGame : BaseData<S2CCommonSitDownResp> = new BaseData<S2CCommonSitDownResp>(true); //退出游戏
}