import { BaseDataNotify } from "../../base/BaseDataNotify";
import { DataNotify } from "../../base/DataNotify";



export class LoginData extends BaseDataNotify 
{
    private static Instance:LoginData = null;

    public static GetInstance() : LoginData
    {
        if(LoginData.Instance == null)
        {
            LoginData.Instance = new LoginData();
        }

        return LoginData.Instance;
    }
}

