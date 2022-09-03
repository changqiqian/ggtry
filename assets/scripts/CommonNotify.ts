import { DataNotify } from "./base/DataNotify";
import { Localization } from "./base/Localization";
import { LocalPlayerData } from "./base/LocalPlayerData";
import { SceneType, UIMgr } from "./base/UIMgr";
import { GameConfig } from "./GameConfig";
import { Network } from "./network/Network";

export class CommonNotify extends DataNotify 
{
    private static Instance:CommonNotify = null;

    public static GetInstance() : CommonNotify
    {
        if(CommonNotify.Instance == null)
        {
            CommonNotify.Instance = new CommonNotify();
            CommonNotify.Instance.CreateNotify();
            CommonNotify.Instance.RegisteMsg();
        }

        return CommonNotify.Instance;
    }
    
    
    Data_SocketOpen : boolean = null;
    Data_SocketClose : boolean = null;
    Data_SocketError: boolean = null;
    Data_LoginSuccessData : any = null;

    Data_LastInputPhoneNum : string = null; //最后一次输入的手机号
    Data_LastInputPwd : string = null;//最后一次输入的密码

    ClearData()
    {
        this.Data_SocketOpen = false;
        this.Data_SocketClose = false;
        this.Data_SocketError = false;
    }

    RegisteMsg()
    {

    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }

}

