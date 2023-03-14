import { UIMgr } from "./base/UIMgr";
import { Localization } from './base/Localization';
export class Tool
{

    public static ConvertSecondsToHour(_time :number) : string
    {
        let result = _time/3600;
        return result.toFixed(1) + "h";
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

    public static DateFormat(_fmt : string, _date :Date)  : string
    {
        let ret;
        const opt = 
        {
            "Y+": _date.getFullYear().toString(),        // 年
            "m+": (_date.getMonth() + 1).toString(),     // 月
            "d+": _date.getDate().toString(),            // 日
            "H+": _date.getHours().toString(),           // 时
            "M+": _date.getMinutes().toString(),         // 分
            "S+": _date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) 
        {
            ret = new RegExp("(" + k + ")").exec(_fmt);
            if (ret) {
                _fmt = _fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return _fmt;
    }

    //_offset = 从今天开始往前推几天  0=今天 1=昨天 2=两天前 3=3天前
    public static GetDateDurationFromToday(_offset : number) : string
    {
        var date = new Date();
        date.setDate(date.getDate() - _offset); 
        let result = Tool.DateFormat("YYYY-mm-dd",date);
        console.log("GetDateDurationFromToday==" +  result);
        return result;
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

    public static GetMoneyMultiple() : number
    {
        return 1000;
    }

    //服务器的钱转成客户端
    public static ConvertMoney_S2C(_serverMoney : number) : number
    {
        let clientMoney = _serverMoney / Tool.GetMoneyMultiple();
        return clientMoney;
    }

    public static ConvertMoney_C2S(_clientMoney : number) : number
    {
        let serverMoney = _clientMoney * Tool.GetMoneyMultiple();
        return serverMoney;
    }

    public static CeilServerMoney(_serverMoney : number) : number
    {
        let result = Math.ceil(_serverMoney/Tool.GetMoneyMultiple());
        result = result* Tool.GetMoneyMultiple();
        return result;
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

    public static ConvertToBB(_amount : number , _bb : number) : string
    {
        let resultBB = _amount/_bb;
        return resultBB.toFixed(1) + "bb";
    }

    public static GetBlindInfo(_sb :number , _straddle : boolean , _ante : number) : string
    {
        let blindInfo = "";
        let sb = Tool.ConvertMoney_S2C(_sb);
        let bb = sb*2;
        let straddle = bb * 2;
        blindInfo += sb + "/";
        blindInfo += bb;
        if(_straddle)
        {
            blindInfo += "/" + straddle;
        }
        if(_ante > 0)
        {
            blindInfo += "(" + Tool.ConvertMoney_S2C(_ante) + ")"
        }
        return blindInfo;
    }

}