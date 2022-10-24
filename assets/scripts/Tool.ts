import { UIMgr } from "./base/UIMgr";
import { Localization } from './base/Localization';
export class Tool
{
    //获取几分几秒对应的字符串时间显示格式  00:00
    public static GetRestTime_M_S(_time :number ) : string
    {
        let mins = Math.floor(_time/60);
        let seconds = (_time % 60);
        let strMin = "";
        let strSecond = "";
        if (mins < 10) 
        {
            strMin = "0" + mins;
        }
        else
        {
            strMin = mins + "";
        }

        if (seconds < 10) 
        {
            strSecond = "0" + seconds;
        }
        else
        {
            strSecond = seconds + "";
        }

        let finalTime = strMin + ":" + strSecond;
        return finalTime;
    }

    //获取对应的时间格式  xx天xx小时xx分xx秒
    public static GetRestTime_D_H_M_S(_time) : string
    {
        let days = parseInt((_time / 60 / 60 / 24).toString() , 10); //计算剩余的天数 
        let hours = parseInt((_time / 60 / 60 % 24).toString() , 10); //计算剩余的小时 
        let minutes = parseInt((_time / 60 % 60).toString(), 10);//计算剩余的分钟 
        let seconds = parseInt((_time % 60).toString(), 10);//计算剩余的秒数
        let time = '';
        
        if (days > 0) 
        {
            if (days < 10)
                time = days + "Days ";
                if(days==1)
                {
                    time =days + "Day ";
                }
            else
            {
                time = days + "Days ";
            }
        }
        if (hours > 0) 
        {
            if (hours < 10)
            {
                time += "0" + hours + ":";
            }
            else
            {
                time += hours + ":";
            }
        }
        if (minutes > 0) 
        {
            if (minutes < 10)
            {
                time += "0" + minutes + ":";
            }
            else
            {
                time += minutes + ":";
            }
        } 
        else 
        {
            time += "00:";
        }
        if (seconds > 0) 
        {
            if (seconds < 10)
            {
                time += "0" + seconds;
            }
            else
            {
                time += seconds;
            }
        } 
        else 
        {
            time += "00";
        }
        return (time == "") ? "0" : time;
    }

    //以...来代替多出来的文字
    public static GetStrWithLen (str, len)
    {
        var playernName = str + '';
     
        var nameLength = 0;
        var cutIndex = 0;
         
        for(var i=0; i<playernName.length; i++) 
        {
            if(escape(playernName[i]).indexOf("%u")<0)
            {//不是中文
                
                if(playernName[i] >= 'A' && playernName[i] <= 'Z') 
                {
                    nameLength += 2;
                } 
                else 
                {
                    nameLength += 1;
                }
    
            }
            else
            {//中文
                nameLength += 3;
            }
            
            if(nameLength > len)
            {
                cutIndex = i;
                break;
            }
        }
    
        let strPoint = ''
        if(nameLength <= len)
        {
            cutIndex = playernName.length;
        } 
        else 
        {
            strPoint = '...'
        }
        var finalName =  playernName.slice(0, cutIndex) + strPoint; //
        return finalName;
    };

    //服务器的钱转成客户端
    public static ConvertMoney_S2C(_serverMoney : number) : number
    {
        let clientMoney = _serverMoney / 10000;
        return clientMoney;
    }

    public static ConvertMoney_C2S(_clientMoney : number) : number
    {
        let serverMoney = _clientMoney * 10000;
        return serverMoney;
    }

    public static PasswordTest(_target : string) : boolean
    {
        if(_target == "")
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00004"));
            return;
        }

        if(_target.indexOf(" ") != -1)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return;
        }

        let result = /^[1-9][0-9]*([\.][0-9]{1,2})?$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00109"));
        }
        return result;
    }

    public static AccountTest(_target : string) : boolean
    {
        if(_target == "")
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00111"));
            return false;
        }

        if(_target.indexOf(" ") != -1)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }

        let result = /^((d{3,4}-)|d{3.4}-)?d{7,8}$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00002"));
        }
        return result;
    }

    public static IdTest(_target : string) : boolean
    {
        if(_target == "")
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00100"));
            return false;
        }

        if(_target.indexOf(" ") != -1)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }
        let result = /^[0-9]*$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00110"));
        }
        return result;
    }
    
    public static InviteCodeTest(_target : string) : boolean
    {
        let result = /^d{n}$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00112"));
        }
        return result;
    }

    public static NickNameTest(_target : string) : boolean
    {
        if(_target.length == 0) 
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00011"));
            return false;
        }

        if(_target.indexOf(" ") != -1) 
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }
        return true;
    }

}