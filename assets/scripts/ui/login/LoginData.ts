import { DataNotify } from "../../base/DataNotify";



export class LoginData extends DataNotify 
{
    private static Instance:LoginData = null;

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

