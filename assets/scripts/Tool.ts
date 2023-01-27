import { UIMgr } from "./base/UIMgr";
import { Localization } from './base/Localization';
export class Tool
{

    public static ConvertSecondsToHour(_time :number) : string
    {
        let result = _time/3600;
        return result.toFixed(1);
    }
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

    public static getRestTime_H_M_S(_time :number ) : string
    {
        let hourAmount = 3600;
        let minAmount = 60;
        
        let hour =  Math.floor(_time/hourAmount);
        _time -= hour * hourAmount;
        let min =  Math.floor(_time/minAmount);
        _time -= min * minAmount;
        let second = _time;


        let hourStr = "";
        let minStr = "";
        let secondStr = "";

        hourStr = hour + "";
        if(hour<10)
        {
            hourStr = "0" + hour;
        }

        minStr = min + "";
        if(min<10)
        {
            minStr = "0" + min;
        }

        secondStr = second + "";
        if(second<10)
        {
            secondStr = "0" + second;
        }
        let finalTime = hourStr + ":" + minStr + ":" + secondStr;
        return finalTime;
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
        let clientMoney = _serverMoney / 1000;
        return clientMoney;
    }

    public static ConvertMoney_C2S(_clientMoney : number) : number
    {
        let serverMoney = _clientMoney * 1000;
        return serverMoney;
    }

    public static PasswordTest(_target : string) : boolean
    {
        if(_target == "")
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00004"));
            return false;
        }

        if(_target.indexOf(" ") >= 0)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }


        let result = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(_target);
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

        if(_target.indexOf(" ") >= 0)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }
        //var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        let result = /^[0-9]*$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00002"));
        }
        return result;
    }

    public static NumberTest(_target : string) : boolean
    {
        if(_target == "")
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00124"));
            return false;
        }

        if(_target.indexOf(" ") >= 0)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }
        let result = /^[0-9]*$/.test(_target);
        if(result == false)
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00125"));
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

        if(_target.indexOf(" ")  >= 0)
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
        let result = /^d{7}$/.test(_target);
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

        if(_target.indexOf(" ")  >= 0) 
        {
            UIMgr.Instance.ShowToast(Localization.GetString("00015"));
            return false;
        }
        return true;
    }

    public static Random(lower:number, upper : number) : number
    {
        return Math.floor(Math.random() * (upper - lower+1)) + lower;
    }

}