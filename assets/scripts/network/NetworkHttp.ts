import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";

export class NetworkHttp extends Singleton<NetworkHttp>()
{
    public HttpSend( _xhr : XMLHttpRequest , _param  ,_success: Function, _error: Function ) 
    {
        let token = "BearereyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUkpMyc3MMzAwVNJRKi1OLYrPTFGyMjQw1FEqTs4vSIUpAMpmJpYAZczMzY0MLcwNTWsBAAAA__8.zDHnip5yjb9ElXCnZaAV6nDNw_ivlWFYXyogQ6acajg"
        _xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _xhr.setRequestHeader("token", token);
        _xhr.setRequestHeader("sign", "c2cc32c87bb51fd49a8fea4e5bb23f57");
        _xhr.setRequestHeader("timestamp", "1672821524273");
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
            UIMgr.Instance.ShowToast("http error");
            _error && _error(_err);
        };

        _param.userId = "6743682430";
        _xhr.send(JSON.stringify(_param));
    }

    //获取 今日，本周，本月 总战绩概括
    public PostTotalRecordData(_gameType : GameType , _day : HTTP_Date, _clubId : string = "")
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8080/api/game/sy/record/sum");

        console.log("http 获取 今日，本周，本月 总战绩概括==");
        let param = 
        {
            gameType : _gameType,
            day : _day,
            clubId : _clubId
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==今日，本周，本月 总战绩概括==" + _result);
            let json = JSON.parse(_result);
            let protoData = json.data as RecordData;
            LocalPlayerData.Instance.Data_RecordData.mData = protoData;
        },
        (_err)=>
        {

        }) 
    }

    //获取战绩细节入口数据
    public PostRecordData(_gameType:GameType ,_day : HTTP_Date, _pageNum : number , _pageSize : number , _clubId : string = "")
    {
        console.log("http 获取战绩细节入口数据==");
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8080/api/game/sy/record?page=" + _pageNum + "&limit=" + _pageSize;
        xhr.open('POST', url);
        let param = 
        {
            gameType : _gameType,
            day : _day,
            clubId : _clubId
        }
        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==获取战绩细节入口数据==" + _result);
            let json = JSON.parse(_result);
            let protoData = json.data as RecordSingleData;
            LocalPlayerData.Instance.Data_RecordSingleData.mData = protoData;
        
        },
        (_err)=>
        {

        })
    }

    //获取战绩细节数据
    public PostRecordDetailData(_gameId : string , _date : string  , _gameType : GameType)
    {
        console.log("http 获取战绩细节数据==");
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8080/api/game/sy/game/detail");
        let param = 
        {
            gameId : _gameId,
            endDate : _date,
            gameType : _gameType
        }
        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==获取战绩细节数据==" + _result);
            let json = JSON.parse(_result);
            let protoData = json.data as RecordDetail;
            LocalPlayerData.Instance.Data_RecordDetail.mData = protoData;
        },
        (_err)=>
        {

        })
    }

    //获取简单手牌数据
    public PostSimpleReplay(_gameType : GameType, _gameId : string , _pageNum : number , _pageSize : number , _date : string )
    {
        console.log("http 获取简单手牌数据==");
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8080/api/game/sy/hand?page="+_pageNum+"&limit=" + _pageSize;

        xhr.open('POST', url);
        let param = 
        {
            gameId : "G1001",
            endDate : _date,
            gameType : _gameType
        }
        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==获取简单手牌数据==" + _result);
            let json = JSON.parse(_result);
            let protoData = json.data as SimpleReplayData;
            LocalPlayerData.Instance.Data_SimpleReplayData.mData = protoData;
        },
        (_err)=>
        {

        })
    }

    //获取详细手牌数据
    public PostReplayDetail(_gameId : string , _index : number ,_date : string)
    {
        console.log("http 获取详细手牌数据==");
        let xhr = new XMLHttpRequest();

        xhr.open('POST', "http://54.169.147.71:8080/api/game/sy/hand/detail");
        let param = 
        {
            gameId : "G1001",
            index : _index,
            endDate : _date,
        }
        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==获取详细手牌数据==" + _result);
            let json = JSON.parse(_result);
            let protoData = json.data as ReplayData;

            LocalPlayerData.Instance.Data_ReplayData.mData = protoData;
        },
        (_err)=>
        {

        })
    }
}


export enum HTTP_Date
{
    Today = 0,
    Week,
    Month ,
}
