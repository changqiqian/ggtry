import { BaseData } from "./base/BaseData";
import { BaseDataNotify } from "./base/BaseDataNotify";
import { DataNotify } from "./base/DataNotify";
import { Localization } from "./base/Localization";
import { LocalPlayerData } from "./base/LocalPlayerData";
import { SceneType, UIMgr } from "./base/UIMgr";
import { GameConfig } from "./GameConfig";
import { Network } from "./network/Network";

export class CommonNotify extends BaseDataNotify 
{
    private static Instance:CommonNotify = null;

    public static GetInstance() : CommonNotify
    {
        if(CommonNotify.Instance == null)
        {
            CommonNotify.Instance = new CommonNotify();
            CommonNotify.Instance.RegisteMsg();
        }

        return CommonNotify.Instance;
    }
    
    
    Data_SocketOpen : BaseData<boolean> = new BaseData<boolean>(true);
    Data_SocketClose : BaseData<boolean> = new BaseData<boolean>(true);
    Data_SocketError : BaseData<boolean> = new BaseData<boolean>(true);
    Data_LoginSuccessData : BaseData<boolean> = new BaseData<boolean>(true);

    Data_LastInputPhoneNum : BaseData<string> = new BaseData<string>(); //最后一次输入的手机号
    Data_LastInputPwd : BaseData<string> = new BaseData<string>();//最后一次输入的密码


    RegisteMsg()
    {

    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}

