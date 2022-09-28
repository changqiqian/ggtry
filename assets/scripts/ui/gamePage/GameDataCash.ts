import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";


export class GameDataCash extends SingletonBaseNotify<GameDataCash>()
{
    protected ResetInstance() 
    {
        GameDataCash.ClearInstance();
    }
}