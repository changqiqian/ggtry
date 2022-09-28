
import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";



export class LoginData extends SingletonBaseNotify<LoginData>()
{
    protected ResetInstance() 
    {
        LoginData.ClearInstance();
    }
    


}

