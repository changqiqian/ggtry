export class GameConfig
{
    public static DebugMode =  false;
    public static DevelopIP = "18.140.238.52:9008"; //研发环境ip
    public static TestIP = "13.229.222.39:9008"; //测试环境ip
    public static UsingIp = "13.229.222.39:9008"; //当前真实用的ip
    public static SeverUrl = "ws://13.229.222.39:9008/ws/";
    public static SetSeverUrl(_ip : string)
    {
        GameConfig.UsingIp = _ip;
        GameConfig.SeverUrl = "ws://" + _ip +"/ws/";
    }
    //发布的版本号
    public static Version = "1.1.3"
    //发布的版本信息
    public static VersionInfo = "alpha"
    //手机标识
    public static Imei = "";                 
     //手机型号
    public static Model = "";               

     //渠道
    public static Channel = "德州";             
    //渠道号
    public static ChannelInt = 100;       
    //经度
    public static JingDu = 0;              
    //维度
    public static WeiDu = 0;       
    
    public static ClientInfo = 
    {
        appName : "",
        deviceBrand : "",
        deviceOsVersion : "",
        ip : "",
        deviceOs : "",
        appVersion : "",
        deviceId : "",
        version  : "",
        channel : "",
    }

    public static LOGIN_TOKEN;
    public static LOGIN_USER;

    public static WebberAddr= "http://18.142.237.115:9487"; //打开收银台web


    public static AreaCodeList=[
        {"name":"CountryName0", "areaCode": "+852"},
        {"name":"CountryName1", "areaCode": "+63"},
        {"name":"CountryName2", "areaCode": "+886"},
        {"name":"CountryName3", "areaCode": "+66"},
        {"name":"CountryName4", "areaCode": "+60"},
        {"name":"CountryName5", "areaCode": "+853"},
        {"name":"CountryName6", "areaCode": "+856"},
        {"name":"CountryName7", "areaCode": "+39"},
        {"name":"CountryName8", "areaCode": "+1"},
        {"name":"CountryName9", "areaCode": "+81"},
        {"name":"CountryName10", "areaCode": "+44"},
        {"name":"CountryName11", "areaCode": "+33"},
        {"name":"CountryName12", "areaCode": "+82"},
        {"name":"CountryName13", "areaCode": "+61"},
        {"name":"CountryName14", "areaCode": "+1"},
        {"name":"CountryName15", "areaCode": "+95"},
        {"name":"CountryName16", "areaCode": "+65"},
        {"name":"CountryName17", "areaCode": "+62"},
        {"name":"CountryName17", "areaCode": "+850"},
        {"name":"CountryName18", "areaCode": "+7"},
        {"name":"CountryName19", "areaCode": "+375"},
        {"name":"CountryName20", "areaCode": "+54"},
        {"name":"CountryName21", "areaCode": "+595"},
        {"name":"CountryName22", "areaCode": "+55"},
        {"name":"CountryName23", "areaCode": "+32"},
        {"name":"CountryName24", "areaCode": "+48"},
        {"name":"CountryName25", "areaCode": "+49"},
        {"name":"CountryName26", "areaCode": "+358"},
        {"name":"CountryName27", "areaCode": "+855"},
        {"name":"CountryName28", "areaCode": "+20"},
        {"name":"CountryName29", "areaCode": "+31"},
        {"name":"CountryName30", "areaCode": "+46"},
        {"name":"CountryName31", "areaCode": "+41"},
        {"name":"CountryName32", "areaCode": "+64"},
        {"name":"CountryName33", "areaCode": "+91"},
        {"name":"CountryName34", "areaCode": "+972"},
        {"name":"CountryName35", "areaCode": "+962"},
        {"name":"CountryName36", "areaCode": "+56"},
        {"name":"CountryName37", "areaCode": "+351"},
        {"name":"CountryName38", "areaCode": "+966"},
        {"name":"CountryName39", "areaCode": "+90"},
        {"name":"CountryName40", "areaCode": "+45"},
        {"name":"CountryName41", "areaCode": "+84"},
        {"name":"CountryName42", "areaCode": "+971"},
    ]


    public static LoadToken()
    {
        GameConfig.LOGIN_TOKEN = GameConfig.ReadSimpleData("LOGIN_TOKEN", null);
        GameConfig.LOGIN_USER = GameConfig.ReadSimpleData("LOGIN_USER", null);
    }

    public static ClearToken()
    {
        GameConfig.LOGIN_TOKEN = null;
        GameConfig.LOGIN_USER = null;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", null);
        GameConfig.WriteSimpleData("LOGIN_USER", null);
    }

    public static SaveToken(_token:string , _user:string =null)
    {
        GameConfig.LOGIN_TOKEN = _token;
        GameConfig.LOGIN_USER = _user;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", _token);
        GameConfig.WriteSimpleData("LOGIN_USER", _user);
    }
    
    public static SaveBBTroggle(_value: boolean) 
    {
        let key = "SHOWBB_LOACAL_D";
        GameConfig.WriteSimpleData(key, _value == true ? 1 : 0);
    }

    public static GetBBToggleSetting() : boolean
    {
        let key = "SHOWBB_LOACAL_D";
        let result = GameConfig.ReadSimpleData(key, null);
        if(result == null)
        {
            return false;
        }
        return Number(result) == 1 ? true : false;
    }

    public static SaveBGMSetting(_value : boolean)
    {
        let key = "BGM_SETTING";
        GameConfig.WriteSimpleData(key, _value == true ? 1 : 0);
    }

    public static GetBGMSetting() : boolean
    {
        let key = "BGM_SETTING";
        let result = GameConfig.ReadSimpleData(key, null);
        if(result == null)
        {
            return false;
        }
        return Number(result) == 1 ? true : false;
    }


    public static SavePlayBGMTroggle(_isChecked: number) 
    {
        GameConfig.WriteSimpleData('IS_CAN_PLAY_BGM', _isChecked);
    }


    public static GetDefaultCustomerRaiseTitle(_index : number) : string
    {
        let defualtTitle = ["1/4" , "1/3" , "1/2" , "2/3" , "1x"];
        return defualtTitle[_index];
    }

    public static GetDefaultCustomerRaiseRatio(_option : number) : number
    {
        let defualtRatio = [1/4 , 1/3 , 1/2 , 2/3 , 1];
        return defualtRatio[_option];
    }

    public static SaveCustomerRaise(_index : number , _optionNum : number)
    {
        if(_index >= 3)//我们只有3个自定义加注按钮
        {
            console.log("我们只有3个自定义加注按钮 你当前想修改_index===" + _index);
            return;
        }
        let ratioName = "CUSTOMER_RAISE_RATIO" + _index;
        GameConfig.WriteSimpleData(ratioName, _optionNum);
        
        let titleName = "CUSTOMER_RAISE_TITLE" + _index; 
        GameConfig.WriteSimpleData(titleName, _optionNum);
    }

    public static GetCustomerRaiseRatio(_index : number) : number
    {
        if(_index >= 3)//我们只有3个自定义加注按钮
        {
            console.log("我们只有3个自定义加注按钮 你当前想获取_index===" + _index);
            return 0;
        }

        let titleName = "CUSTOMER_RAISE_RATIO" + _index; 
        let optionNum = GameConfig.ReadSimpleData(titleName, null);
        let result;
        if(optionNum == null)
        {
            result = GameConfig.GetDefaultCustomerRaiseRatio(_index);
        }
        else
        {
            result = GameConfig.GetDefaultCustomerRaiseRatio(Number(optionNum));
        }
        return result;
    }

    public static GetCustomerRaiseTitle(_index : number) : string
    {
        if(_index >= 3)//我们只有3个自定义加注按钮
        {
            console.log("我们只有3个自定义加注按钮 你当前想获取_index===" + _index);
            return "None";
        }

        let titleName = "CUSTOMER_RAISE_TITLE" + _index; 
        let optionNum = GameConfig.ReadSimpleData(titleName, null);
        let result;
        if(optionNum == null)
        {
            result = GameConfig.GetDefaultCustomerRaiseTitle(_index);
        }
        else
        {
            result = GameConfig.GetDefaultCustomerRaiseTitle(Number(optionNum));
        }

        return result;
    }

    public static SaveGameBGSetting(_index : number)
    {
        let Key = "CUSTOMER_BG";
        GameConfig.WriteSimpleData(Key, _index);
    }

    public static GetBGSetting() : number
    {
        let Key = "CUSTOMER_BG";
        let value = GameConfig.ReadSimpleData(Key, null);
        if(value == null)
        {
            return 0;
        }
        else
        {
            return Number(value);
        }
    }

    public static SaveGamePokerSetting(_index : number)
    {
        let Key = "CUSTOMER_POKER";
        GameConfig.WriteSimpleData(Key, _index);
    }

    public static GetPokerSetting() : number
    {
        let key = "CUSTOMER_POKER";
        let value = GameConfig.ReadSimpleData(key, null);
        if(value == null)
        {
            return 0;
        }
        else
        {
            return Number(value);
        }
    }

    public static SaveCustomerSliderSetting(_value : boolean)
    {
        let key = "CUSTOMER_SLIDER";
        GameConfig.WriteSimpleData(key, _value==true? 1: 0);
    }

    public static GaveCustomerSliderSetting() : boolean
    {
        let key = "CUSTOMER_SLIDER";
        let value = GameConfig.ReadSimpleData(key, null);
        if(value == null)
        {
            return false;
        }
        return Number(value) == 1 ? true : false;
    }


    public static GetRandChar()
    {
        var str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789';
        var randstr = "";
        for (var i = 0; i < 9; i++) {
            var index = Math.floor(str.length * Math.random());
            randstr += str.charAt(index);
        }
        return randstr;
    };

    public static WriteSimpleData = function (key, data)
    {
        localStorage.setItem(key, data);
    };
    //读取简单数据
    public static ReadSimpleData = function (key, defaultDate = null) 
    {
        var data = localStorage.getItem(key);
        if(data === "null" || data === null) 
        {
            data = defaultDate
        }
        return data;
    };
    

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

    //老工程里面的配置，看不懂 我也不晓得啥子意思 只能照抄
    public static BlindTime = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25, 30, 40, 45, 50, 60];
    public static TakeTime = [40, 40, 45, 40, 45, 42, 42, 48, 50, 48, 45, 40, 50, 60, 40, 45, 50, 60];
    public static Level = [40, 20, 15, 10, 9, 7, 6, 6, 5, 4, 3, 2, 2, 2, 1, 1, 1, 1];

    public static GetTakeTime(_time : number) : number
    {
        let index = GameConfig.BlindTime.findIndex((_item) => _item === _time);
        return GameConfig.TakeTime[index];
    }

    public static GetLevel(_time : number) : number
    {
        let index = GameConfig.BlindTime.findIndex((_item) => _item === _time);
        return GameConfig.Level[index];
    }

} 