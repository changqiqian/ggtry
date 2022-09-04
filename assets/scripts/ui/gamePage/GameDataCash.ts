import { DataNotify } from "../../base/DataNotify";
import { Network } from "../../network/Network";


export class GameDataCash extends DataNotify 
{
    private static Instance:GameDataCash = null;

    public static GetInstance() : GameDataCash
    {
        if(GameDataCash.Instance == null)
        {
            GameDataCash.Instance = new GameDataCash();
            GameDataCash.Instance.CreateNotify();
        }

        return GameDataCash.Instance;
    }


    RegisteMsg()
    {

        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


}