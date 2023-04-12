
import { js, _decorator } from "cc";
import { BaseData } from "../../base/BaseData";
import { SingletonBaseNotify } from "../../base/Singleton";


export class LoginData extends SingletonBaseNotify<LoginData>()
{
    protected ResetInstance() 
    {
        LoginData.ClearInstance();
    }
    
    Data_LoginSuccessData : BaseData<boolean> = new BaseData<boolean>(true);
    Data_RegisterSuccessData : BaseData<boolean> = new BaseData<boolean>(true);
    Data_ShowAreaCodeView : BaseData<boolean> = new BaseData<boolean>(true);
    Data_InSignInProgress : BaseData<boolean> = new BaseData<boolean>();
    Data_VerifyPhoneNumber : BaseData<boolean> = new BaseData<boolean>();
}


