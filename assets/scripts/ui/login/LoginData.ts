import { DataNotify } from "../../base/DataNotify";
import { SmsCodeType } from "../../network/Network";


export class LoginData extends DataNotify 
{
    public static Instance:LoginData = null;

    public static GetInstance() : LoginData
    {
        if(LoginData.Instance == null)
        {
            LoginData.Instance = new LoginData();
            LoginData.Instance.CreateNotify();
        }

        return LoginData.Instance;
    }
}

