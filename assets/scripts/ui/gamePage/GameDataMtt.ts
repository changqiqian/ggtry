import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";



export class GameDataMtt extends SingletonBaseNotify<GameDataMtt>()
{
    protected ResetInstance() 
    {
        GameDataMtt.ClearInstance();
    }
}