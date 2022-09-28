
import { BaseData } from "../../base/BaseData";
import { DataNotify } from "../../base/DataNotify";
import { SingletonBaseNotify } from "../../base/Singleton";
import { Network } from "../../network/Network";



export class LoginData extends SingletonBaseNotify<LoginData>()
{
    protected ResetInstance() 
    {
        LoginData.ClearInstance();
    }
    

    Data_LoginSuccessData : BaseData<boolean> = new BaseData<boolean>(true);
    Data_RegisterSuccessData : BaseData<boolean> = new BaseData<boolean>(true);
    Data_SmsCodeType : BaseData<SmsCodeType> = new BaseData<SmsCodeType>();
    Data_ShowAreaCodeView : BaseData<boolean> = new BaseData<boolean>(true);
    Data_InSignInProgress : BaseData<boolean> = new BaseData<boolean>();

}

