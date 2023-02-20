import { Singleton } from "../base/Singleton";

export class NetworkHttp extends Singleton<NetworkHttp>()
{
    public HttpGet( _xhr : XMLHttpRequest , _param : string ,_success: Function, _error: Function ) 
    {
        _xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _xhr.setRequestHeader("token", "BearereyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUkpMyc3MMzAwUNJRKi1OLYrPTFGyMjQw0FEqTs4vSIUpAMpmJpYAZczMzSwMzU1MzWsBAAAA__8.tn7KmGfRAdpI_3sbn0_JfFIZP98xFdrzaaL0dhmUGqg");
        _xhr.onreadystatechange = function () 
        {
            if (_xhr.readyState == 4) 
            {
                _success && _success(_xhr.responseText);
            }
        };

        _xhr.onerror = function (_err) 
        {
            console.log('HttpGet err ====' + _err);
            console.log('HttpGet url ====' + _err);
            _error && _error(_err);
        };
        _xhr.send(_param);
    }

    //获取 今日，本周，本月 总战绩概括
    //day = 1; // 1=今天  2=本周 3=本月
    public PostTotalRecordData(_gameType : GameType , _day : HTTP_Day)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8080/api/game/sy/record/sum");
        xhr.setRequestHeader("sign", "c2cc32c87bb51fd49a8fea4e5bb23f57");
        xhr.setRequestHeader("timestamp", "1672821524273");

        let param = 
        {
            userId : "6743682430",
            gameType : _gameType,
            day : _day
        }


        this.HttpGet(xhr,JSON.stringify(param),(_result)=>
        {
            console.log("_result==" + _result);
        },
        (_err)=>
        {

        })
    }

    //获取战绩细节入口数据
    public PostRecordData(_gameType:GameType , _pageNum : number , _pageSize : number)
    {
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8080/api/game/sy/record?page="+_pageNum+"&limit=" + _pageSize;
        xhr.open('POST', url);
        xhr.setRequestHeader("sign", "c2cc32c87bb51fd49a8fea4e5bb23f57");
        xhr.setRequestHeader("timestamp", "1672821524273");
        let param = 
        {
            userId : "6743682430",
            gameType : _gameType,
        }
        this.HttpGet(xhr,JSON.stringify(param),(_result)=>
        {
            console.log("_result==" + _result);
        },
        (_err)=>
        {

        })
    }

    //获取战绩细节数据
    public PostRecordDetailData(_gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8080/api/game/sy/game/detail");
        xhr.setRequestHeader("sign", "c2cc32c87bb51fd49a8fea4e5bb23f57");
        xhr.setRequestHeader("timestamp", "1672821524273");
        let param = 
        {
            userId : "6743682430",
            gameId : "G1001",
        }
        this.HttpGet(xhr,JSON.stringify(param),(_result)=>
        {
            console.log("_result==" + _result);
        },
        (_err)=>
        {

        })
    }
}


export enum HTTP_Day
{
    Today = 1,
    Week,
    Month ,
}
