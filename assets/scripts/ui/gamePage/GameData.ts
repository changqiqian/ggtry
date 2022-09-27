import { _decorator} from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseDataNotify } from '../../base/BaseDataNotify';
import { DataNotify } from '../../base/DataNotify';
import { Network } from '../../network/Network';

export class GameData extends BaseDataNotify 
{
    private static Instance:GameData = null;

    public static GetInstance() : GameData
    {
        if(GameData.Instance == null)
        {
            GameData.Instance = new GameData();
        }

        return GameData.Instance;
    }


    //UI控制
    Data_ChatingSubLayer :  BaseData<Game_ChattingSubLayer> = new BaseData<Game_ChattingSubLayer>();  //聊天页面子页面



    RegisteMsg()
    {

        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


}


export enum Game_ChattingSubLayer
{
    ChatHistory,
    Shortcut,
}

