import { DataNotify } from "../../base/DataNotify";
import { Network } from "../../network/Network";


export class GameDataMtt extends DataNotify 
{
    private static Instance:GameDataMtt = null;

    public static GetInstance() : GameDataMtt
    {
        if(GameDataMtt.Instance == null)
        {
            GameDataMtt.Instance = new GameDataMtt();
            GameDataMtt.Instance.CreateNotify();
        }

        return GameDataMtt.Instance;
    }


    RegisteMsg()
    {

        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


}