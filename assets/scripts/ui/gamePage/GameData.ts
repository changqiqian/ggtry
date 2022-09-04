import { _decorator} from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Network } from '../../network/Network';

export class GameData extends DataNotify 
{
    private static Instance:GameData = null;

    public static GetInstance() : GameData
    {
        if(GameData.Instance == null)
        {
            GameData.Instance = new GameData();
            GameData.Instance.CreateNotify();
        }

        return GameData.Instance;
    }


    //UI控制
    Data_ChatingSubLayer : Game_ChattingSubLayer = null ; //聊天页面子页面



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

