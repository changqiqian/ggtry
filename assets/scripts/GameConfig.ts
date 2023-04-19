
import { Localization } from "./base/Localization";
import { Tool } from "./Tool";


export class NetWorkConfig
{
    HTTP_API :string
    HOME_URL  :string
    WEBSOCKET_ADDR  :string
}

export enum NetWorkRoute
{
    Test = 0 , //--测试
    JiuDing = 1 , //--九鼎
}

export class GameConfig
{   
    public static readonly DebugMode =  false;   //调试模式
    public static Route;  //渠道
    public static NetConfig  : NetWorkConfig;
    public static InitNetWorkConfig(_route : NetWorkRoute)
    {
        GameConfig.Route = _route;
        GameConfig.NetConfig = new NetWorkConfig();
        if(GameConfig.Route == NetWorkRoute.Test)
        {
            GameConfig.NetConfig.HTTP_API = "http://54.169.147.71:8082";
            GameConfig.NetConfig.HOME_URL = "http://test-h5.9dhub.com";
            GameConfig.NetConfig.WEBSOCKET_ADDR = "ws://" +"18.142.179.150:9501" +"/pokerlife";
        }
        else if(GameConfig.Route == NetWorkRoute.JiuDing)
        {
            GameConfig.NetConfig.HTTP_API = "https://jd-texas-game-lobby-api.star-link-rel.cc";
            GameConfig.NetConfig.HOME_URL = "https://jd-texas-game-lobby.star-link-rel.cc";
            GameConfig.NetConfig.WEBSOCKET_ADDR = "ws://" + "jd-texas-game-api.star-link-rel.cc";
        }
    }


    //发布的版本号
    public static Version = "1.1.6"
      
    public static LOGIN_TOKEN;

    public static readonly MultipleUIHeight = 150;//多桌ui 占用屏幕顶部的高度
    public static readonly ClubLogoNumber = 8; //俱乐部logo数量
    public static readonly ClubStampNumber = 4; //俱乐部封面数量
    public static readonly WrongIndex = -99;//错误编号

    public static readonly AreaCodeList=[
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

    //俱乐部创建德州房间的时候，选择的抽水类型滑动条对应的标题
    public static GetTexasCreateRoomTaxTitle(_type : GameTaxType) : Array<string>
    {
        if(_type == GameTaxType.GameTaxType_EveryRound)
        {
            return ["0%","1%","2%","3%","4%","5%","6%","7%","8%","9%","10%"];
        }
        else
        {
            return ["0%","3%","3.5%","4%","4.5%","5%","6%","7%","8%","9%","10%"];
        }
    }

    //俱乐部创建德州房间的时候，选择的抽水类型滑动条对应的值
    public static GetTexasCreateRoomTaxValue(_type : GameTaxType) : Array<number>
    {
        if(_type == GameTaxType.GameTaxType_EveryRound)
        {
            return [0 , 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1];
        }
        else
        {
            return [0 , 0.03, 0.035, 0.04, 0.045, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1];
        }
    }

    public static GetTexasCreateRoomBlindTitle(): Array<string>
    {
        return ["","","","","","","","","",""];
    }
    public static GetTexasCreateRoomBlindValue(): Array<number>
    {
        return [1 , 2, 3 ,4 ,5 ,10 ,20 ,25 , 50 , 100];
    }

    public static GetTexasCreateRoomAnteTitle(_smallBlind : number):Array<string>
    {
        if(_smallBlind == 1 || _smallBlind == 2 || _smallBlind == 3 || _smallBlind == 4)
        {
            return ["0" , "1" , "2" , "3" , "4" , "5"];
        }
        else if(_smallBlind == 5)
        {
            return ["0" , "1" , "2" , "3" , "5" , "10"];
        }
        else if(_smallBlind == 10)
        {
            return ["0" , "2" , "5" , "10" , "20" , "40"];
        }
        else if(_smallBlind == 20)
        {
            return ["0" , "5" , "10" , "20" , "40" , "80"];
        }
        else if(_smallBlind == 25)
        {
            return ["0" , "5" , "10" , "25" , "50" , "100"];
        }
        else if(_smallBlind == 50)
        {
            return ["0" , "10" , "25" , "50" , "100" , "200"];
        }
        else if(_smallBlind == 100)
        {
            return ["0" , "25" , "50" , "100" , "200" , "400"];
        }
    }

    public static GetTexasCreateRoomAnteValue(_smallBlind : number): Array<number>
    {
        if(_smallBlind == 1 || _smallBlind == 2 || _smallBlind == 3 || _smallBlind == 4)
        {
            return [0 , 1  , 2 , 3 , 4 , 5];
        }
        else if(_smallBlind == 5)
        {
            return [0 , 1 , 2 , 3 , 5 , 10];
        }
        else if(_smallBlind == 10)
        {
            return [0 , 2 , 5 , 10 , 20 , 40];
        }
        else if(_smallBlind == 20)
        {
            return [0 , 5 , 10 , 20 , 40 , 80];
        }
        else if(_smallBlind == 25)
        {
            return [0 , 5 , 10 , 25 , 50 , 100];
        }
        else if(_smallBlind == 50)
        {
            return [0 , 10 , 25 , 50 , 100 , 200];
        }
        else if(_smallBlind == 100)
        {
            return [0 , 25 , 50 , 100 , 200 , 400];
        }
    }

    public static GetTexasCreateRoomMaxBuyInTitle():Array<string>
    {
        return ["4" , "6" , "8" , "10" , "15" , "20" , "40" , "50" , "100"];
    }

    public static GetTexasCreateRoomMaxBuyInValue(): Array<number>
    {
        return [4 , 6 , 8 , 10 , 15 , 20 , 40 , 50 , 100];
    }

    public static GetTexasCreateRoomBringInTitle():Array<string>
    {
        return ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
    }

    public static GetTexasCreateRoomBringInValue(): Array<number>
    {
        return [1 , 2 , 3, 4, 5, 6, 7, 8, 9];
    }

    public static GetTexasCreateRoomGameDurationTitle():Array<string>
    {
        return ["1" , "1.5" , "2" , "2.5" , "3" , "4" , "5" , "6" ];
    }

    public static GetTexasCreateRoomGameDurationValue(): Array<number>
    {
        return [1 , 1.5 , 2, 2.5, 3, 4, 5, 6];
    }

    public static GetTexasCreateRoomThinkingTimeTitle():Array<string>
    {
        return ["8s" , "12s" , "15s" , "20s"];
    }

    public static GetTexasCreateRoomThinkingTimeValue(): Array<number>
    {
        return [8, 12 , 15, 20];
    }

    public static GetTexasCreateRoomSeatNumTitle():Array<string>
    {
        return ["2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
    }

    public static GetTexasCreateRoomSeatNumValue(): Array<number>
    {
        return [2,3,4,5,6,7,8,9];
    }

    public static GetTexasCreateRoomAutoStartTitle():Array<string>
    {
        return ["0" , "2" , "3" , "4" , "5" , "6"];
    }

    public static GetTexasCreateRoomAutoStartValue():Array<number>
    {
        return [0,2,3,4,5,6];
    }

    public static GetDropBoxSeatTitle() :Array<string>
    {
        return ["座位","有空位"];
    }

    public static GetDropBoxGameTypeTitle() :Array<string>
    {
        return ["玩法","德州","短牌","奥马哈"];
    }

    public static GetDropBoxBBTitle() :Array<string>
    {
        return ["盲注","1/2","2/4","3/6","4/8","5/10","10/20","20/40","50/100","100/200"];
    }


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
    
    public static SaveBBToggle(_value: boolean) 
    {
        let key = "SHOWBB_LOACAL_D";
        GameConfig.WriteSimpleData_Bool(key , _value);
    }

    public static GetBBToggleSetting() : boolean
    {
        let key = "SHOWBB_LOACAL_D";
        return GameConfig.ReadSimpleData_Bool(key);
    }

    public static SaveBGMSetting(_value : boolean)
    {
        let key = "BGM_SETTING";
        GameConfig.WriteSimpleData_Bool(key , _value);
    }

    public static GetBGMSetting() : boolean
    {
        let key = "BGM_SETTING";
        return GameConfig.ReadSimpleData_Bool(key);
    }

    public static SaveChatSetting(_value : boolean)
    {
        let key = "CHAT_SETTING";
        GameConfig.WriteSimpleData_Bool(key , _value);
    }

    public static GetChatSetting() : boolean
    {
        let key = "CHAT_SETTING";
        return GameConfig.ReadSimpleData_Bool(key , true);
    }

    public static MinRaiseBtn = 2;
    public static MaxRaiseBtn = 4;
    public static GetDefaultCustomerRaiseTitle(_index : number) : string
    {
        let defualtTitle = ["1/4", "1/3" ,"2/5" , "1/2" , "3/5" , "2/3" , "3/4" ,  "4/5" , "1x" , "1.5x"];
        return defualtTitle[_index];
    }

    public static GetDefaultCustomerRaiseRatio(_option : number) : number
    {
        let defualtRatio = [1/4 , 1/3 ,2/5 , 1/2 , 3/5 , 2/3 , 3/4 ,  4/5 , 1 , 1.5];
        return defualtRatio[_option];
    }

    public static SaveCustomerRaise(_index : number , _optionNum : number)
    {
        if(_index >= GameConfig.MaxRaiseBtn)//我们只有4个自定义加注按钮
        {
            console.log("我们只有3个自定义加注按钮 你当前想修改_index===" + _index);
            return;
        }
        let Title = "CUSTOMER_RAISE_Index" + _index;
        GameConfig.WriteSimpleData(Title, _optionNum);
    }

    public static SaveAllCustomerRaise(_value : Array<number>)
    {
        for(let i = 0 ; i <  GameConfig.MaxRaiseBtn ; i++)
        {
            if(i < _value.length)
            {
                GameConfig.SaveCustomerRaise(i , _value[i]);
            }
            else
            {
                GameConfig.SaveCustomerRaise(i , GameConfig.WrongIndex);
            }

        }
    }

    public static GetCustomerRaise(_index : number) :number
    {
        if(_index >= GameConfig.MaxRaiseBtn)//我们只有4个自定义加注按钮
        {
            console.log("我们只有4个自定义加注按钮 你当前想获取_index===" + _index);
            return;
        }
        let Title = "CUSTOMER_RAISE_Index" + _index;
        let optionNum = GameConfig.ReadSimpleData(Title, null);
        if(optionNum == null)
        {
            return GameConfig.WrongIndex;
        }
        else
        {
            return parseInt(optionNum);
        }
    }

    public static GetAllCustomerRaise() : Array<number>
    {
        let result = new Array<number>();
        for(let i = 0 ; i <  GameConfig.MaxRaiseBtn ; i++)
        {
            let current = GameConfig.GetCustomerRaise(i);
            if(current != GameConfig.WrongIndex)
            {
                result.push(current);
            }
        }

        if(result.length == 0) //从来没有设置过快捷加注按钮
        {
            for(let i = 0 ; i < GameConfig.MaxRaiseBtn ; i++)
            {
                result.push(i);
                GameConfig.SaveCustomerRaise(i,i);
            }
        }

        result.sort();
        return result;
    }

    public static SaveGameBGSetting(_index : number)
    {
        let Key = "CUSTOMER_BG_New";
        GameConfig.WriteSimpleData(Key, _index);
    }

    public static GetBGSetting() : number
    {
        let Key = "CUSTOMER_BG_New";
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
        GameConfig.WriteSimpleData_Bool(key , _value);
    }

    public static GetCustomerSliderSetting() : boolean
    {
        let key = "CUSTOMER_SLIDER";
        return GameConfig.ReadSimpleData_Bool(key);
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

    public static GetActionTypeName(_actionType : ActionType) : string
    {
        switch(_actionType)
        {
            case ActionType.ActionType_Ante:
            {
                return Localization.GetString("00211");
            }
            case ActionType.ActionType_SB:
            {
                return Localization.GetString("00252");
            }
            case ActionType.ActionType_BB:
            {
                return Localization.GetString("00253");
            }
            case ActionType.ActionType_Straddle:
            {
                return Localization.GetString("00210");
            }
            case ActionType.ActionType_Bet:
            {
                return Localization.GetString("00254");
            }
            case ActionType.ActionType_Raise:
            {
                return Localization.GetString("00068");
            }
            case ActionType.ActionType_AllIn:
            {
                return Localization.GetString("00069");
            }
            case ActionType.ActionType_Check:
            {
                return Localization.GetString("00066");
            }
            case ActionType.ActionType_Fold:
            {
                return Localization.GetString("00065");
            }
            case ActionType.ActionType_Call:
            {
                return Localization.GetString("00067");
            }
        }

        return "None";
    }


    public static uid : string;

    public static CreateUID()
    {
        let rand = Tool.Random(100,9000);
        GameConfig.uid = rand.toString();
    }

    public static GetTopUid() : string
    {
        return top.USER_ID;
        //return GameConfig.uid;
    }

    public static GetTopGameId() : string
    {
        return top.GAME_ID;
        //return "9999999990";
    }
    
    
} 