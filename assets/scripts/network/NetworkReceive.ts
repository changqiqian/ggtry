import { Enum } from "cc";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { Network } from "./Network";

export class NetworkReceive extends Singleton<NetworkReceive>()
{

    public RegisterMsg()
    {
        Network.Instance.AddMsgListenner(MessageId.S2C_Login,(_data)=>
        {
            let msg = S2CLogin.decode(_data);
            console.log("收到的内容 ===" + JSON.stringify(msg));
            if(msg.result.resId == MsgResult.Success)
            {
                
            }
            else
            {
                UIMgr.Instance.ShowToast(msg.result.resMessage);
            }
        },this);
    }

    public UnregisterMsg()
    {
        Network.Instance.RemoveListenner(this);
    }
}


enum MsgResult { 
    Failed = 0,
    Success = 1,
}