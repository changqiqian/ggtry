

export class GameConfig
{   
    public static readonly DebugMode =  true;   //调试模式
    public static Version = "1.1.6"
    public static LOGIN_TOKEN;
    public static readonly WrongIndex = -99;//错误编号
    public static WEBSOCKET_ADDR = "www.baidu.com";


    public static LoadToken()
    {
        GameConfig.LOGIN_TOKEN = GameConfig.ReadSimpleData("LOGIN_TOKEN", null);
    }

    public static ClearToken()
    {
        GameConfig.LOGIN_TOKEN = null;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", null);
    }

    public static SaveToken(_token:string)
    {
        GameConfig.LOGIN_TOKEN = _token;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", _token);

    }
    

    public static WriteSimpleData(key, data)
    {
        localStorage.setItem(key, data);
    };
    //读取简单数据
    public static ReadSimpleData(key, defaultDate = null) 
    {
        var data = localStorage.getItem(key);
        if(data === "null" || data === null) 
        {
            data = defaultDate
        }
        return data;
    };

    public static WriteSimpleData_Bool(_key : string , _data : boolean)
    {
        GameConfig.WriteSimpleData(_key, _data == true ? 1 : 0);
    }

    public static ReadSimpleData_Bool(_key : string , _defualtValue = false) : boolean
    {
        let result = GameConfig.ReadSimpleData(_key, null);
        if(result == null)
        {
            return _defualtValue;
        }
        return Number(result) == 1 ? true : false;
    }

} 