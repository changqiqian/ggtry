import { Club_CreateTexasConfig } from "./ui/hall/HallData";


export class GameConfig
{
    public static DebugMode =  true;
    public static PrivateIP = "192.168.68.112:9001"; //私人电脑ip
    public static DevelopIP = "52.77.219.158:9001"; //开发环境ip
    public static TestIP = "13.229.222.39:9008"; //测试环境ip
    public static UsingIp = "13.229.222.39:9008"; //当前真实用的ip
    public static SeverUrl = "ws://13.229.222.39:9008/pokerlife";
    public static SetSeverUrl(_ip : string)
    {
        GameConfig.UsingIp = _ip;
        GameConfig.SeverUrl = "ws://" + _ip +"/pokerlife";
    }
    //发布的版本号
    public static Version = "1.0.9"

      
    public static LOGIN_TOKEN;
    public static LOGIN_PHONE;

    public static WebberAddr= "http://18.142.237.115:9487"; //打开收银台web


    public static ClubLogoNumber = 8;
    public static ClubStampNumber = 4;

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
        //return ["1/2" , "2/4" ,"3/6" , "4/8" , "5/10" , "10/20" , "20/40" , "25/50" , "50/100", "100/200"];
    }
    public static GetTexasCreateRoomBlindValue(): Array<number>
    {
        return [1 , 2, 3 ,4 ,5 ,10 ,20 ,25 , 50 , 100];
    }

    public static GetTexasCreateRoomAnteTitle(_smallBlind : number)
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

    public static GetTexasCreateRoomAnteValue(_smallBlind : number)
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

    public static GetTexasCreateRoomMaxBuyInTitle()
    {
        return ["4" , "6" , "8" , "10" , "15" , "20" , "40" , "50" , "100"];
    }

    public static GetTexasCreateRoomMaxBuyInValue()
    {
        return [4 , 6 , 8 , 10 , 15 , 20 , 40 , 50 , 100];
    }

    public static GetTexasCreateRoomBringInTitle()
    {
        return ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
    }

    public static GetTexasCreateRoomBringInValue()
    {
        return [1 , 2 , 3, 4, 5, 6, 7, 8, 9];
    }

    public static GetTexasCreateRoomBringOutTitle()
    {
        return ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" ];
    }

    public static GetTexasCreateRoomBringOutValue()
    {
        return [1 , 2 , 3, 4, 5, 6, 7, 8];
    }

    public static GetTexasCreateRoomGameDurationTitle()
    {
        return ["1" , "1.5" , "2" , "2.5" , "3" , "4" , "5" , "6" ];
    }

    public static GetTexasCreateRoomGameDurationValue()
    {
        return [1 , 1.5 , 2, 2.5, 3, 4, 5, 6];
    }

    public static GetTexasCreateRoomThinkingTimeTitle()
    {
        return ["8s" , "12s" , "15s" , "20s"];
    }

    public static GetTexasCreateRoomThinkingTimeValue()
    {
        return [8, 12 , 15, 20];
    }

    public static GetTexasCreateRoomSeatNumTitle()
    {
        return ["2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
    }

    public static GetTexasCreateRoomSeatNumValue()
    {
        return [2,3,4,5,6,7,8,9];
    }


    public static GetTexasCreateRoomAutoStartTitle()
    {
        return ["0" , "2" , "3" , "4" , "5" , "6"];
    }

    public static GetTexasCreateRoomAutoStartValue()
    {
        return [0,2,3,4,5,6];
    }

    public static GetShortCreateRoomBaseScoreTitle()
    {
        return ["" , "" , "" , "" , "" , "", "" , "" , "" , ""];
    }

    public static GetShortCreateRoomBaseScoreValue()
    {
        return [1 , 2 , 5 , 10 , 20 , 40 , 50 , 100 , 200 , 500];
    }

    public static LoadToken()
    {
        GameConfig.LOGIN_TOKEN = GameConfig.ReadSimpleData("LOGIN_TOKEN", null);
        GameConfig.LOGIN_PHONE = GameConfig.ReadSimpleData("LOGIN_PHONE", null);
    }

    public static ClearToken()
    {
        GameConfig.LOGIN_TOKEN = null;
        GameConfig.LOGIN_PHONE = null;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", null);
        GameConfig.WriteSimpleData("LOGIN_PHONE", null);
    }

    public static SaveToken(_token:string , _user:string =null)
    {
        GameConfig.LOGIN_TOKEN = _token;
        GameConfig.LOGIN_PHONE = _user;
        GameConfig.WriteSimpleData("LOGIN_TOKEN", _token);
        GameConfig.WriteSimpleData("LOGIN_PHONE", _user);
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
        GameConfig.WriteSimpleData_Bool(key , _value);
    }

    public static GetCustomerSliderSetting() : boolean
    {
        let key = "CUSTOMER_SLIDER";
        return GameConfig.ReadSimpleData_Bool(key);
    }

    public static MaxModule = 10; //最大储存的创建房间模版数量
    public static TryToSaveCreateRoomModule(_data : Club_CreateTexasConfig , _index : number) : boolean
    {
        let newIndex;

        if(_index != null)
        {
            newIndex = _index;
        }
        else
        {
            newIndex =GameConfig.GetCreateRoomModuleNewIndex();
        }

        if(newIndex == -1)
        {
            return false;
        }
        GameConfig.SaveCreateRoomModule(JSON.stringify(_data) , newIndex);
        return true;
    }

    public static GetCreateRoomModuleNewIndex()
    {
        for(let i = 0 ; i < GameConfig.MaxModule ; i++)
        {
            let value = GameConfig.GetCreateRoomModule(i);
            if(value == null)
            {
                return i;
            }
        }

        console.log("模版空间已满")
        return -1;
    }

    public static DeleteCreateRoomModule(_index : number)
    {
        GameConfig.SaveCreateRoomModule( null , _index);
    }

    public static SaveCreateRoomModule(_data : string , _index : number)
    {
        let preffix = "CREATE_GAME_MODULE";
        let currentKey = preffix + _index;
        GameConfig.WriteSimpleData(currentKey, _data);
        console.log("SaveCreateRoomModule index ==" + _index)
        console.log("SaveCreateRoomModule _data ==" + _data)
    }

    public static GetCreateRoomModule(_index : number)
    {
        let preffix = "CREATE_GAME_MODULE";
        let currentKey = preffix + _index;
        let value = GameConfig.ReadSimpleData(currentKey, null);
        return value;
    }
    //删除模版后，把模版重新排序，往前补齐，让模版占用索引永远从0开始，依次排列
    //例如目前有5个模版，用户删除了第三个模版，然么第三个模版就处于空缺状态，于是用这个方法把后面的模版依次往前挪动一格
    public static ReoderCreateRoomModuleData()
    {
        let step = 0;
        while(step < GameConfig.MaxModule)
        {
            let currentModule = GameConfig.GetCreateRoomModule(step);
            if(currentModule == null)
            {
                let nextModuleIndex= -1;
                for(let i = step + 1 ; i < GameConfig.MaxModule ; i++)
                {
                    let tempModuleData = GameConfig.GetCreateRoomModule(i);
                    if(tempModuleData == null)
                    {
                        continue;
                    }
                    nextModuleIndex = i;
                    break;
                }
                if(nextModuleIndex != -1)
                {
                    let nextModuleData = GameConfig.GetCreateRoomModule(nextModuleIndex); 
                    GameConfig.DeleteCreateRoomModule(nextModuleIndex);
                    GameConfig.SaveCreateRoomModule(nextModuleData , step);
                }
            }
            step++;
        }
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

    public static ReadSimpleData_Bool(_key : string) : boolean
    {
        let result = GameConfig.ReadSimpleData(_key, null);
        if(result == null)
        {
            return false;
        }
        return Number(result) == 1 ? true : false;
    }
    
} 