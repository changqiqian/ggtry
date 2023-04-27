import { GameConfig } from "../GameConfig";
import { LocalPlayerData } from "../base/LocalPlayerData";
import { Localization } from "../base/Localization";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";

export class NetworkHttp extends Singleton<NetworkHttp>()
{
    public static SuccesCode = "0";
    public HttpSend( _xhr : XMLHttpRequest , _param  ,_success: Function, _error: Function ) 
    {
        //let token = "BearereyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUkpMyc3MMzAwVNJRKi1OLYrPTFGyMjQw1FEqTs4vSIUpAMpmJpYAZczMzY0MLcwNTWsBAAAA__8.zDHnip5yjb9ElXCnZaAV6nDNw_ivlWFYXyogQ6acajg"
        _xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // _xhr.setRequestHeader("token", token);
        // _xhr.setRequestHeader("sign", "c2cc32c87bb51fd49a8fea4e5bb23f57");
        // _xhr.setRequestHeader("timestamp", "1672821524273");
        _xhr.onreadystatechange = function () 
        {
            if (_xhr.readyState == 4) 
            {
                console.log("_xhr.responseText====="+_xhr.responseText);
                _success && _success(_xhr.responseText);
            }
        };

        _xhr.onerror = function (_err) 
        {
            console.log('Http err ====' + _err);
            UIMgr.Instance.ShowToast("http error");
            _error && _error(_err);
        };

        let httpSendParam = JSON.stringify(_param);
        _xhr.send(httpSendParam);
    }


    //购买钻石
    // public POSTBuyDiamondRequest(_price : number , _diamondAmount : number)
    // {
    //     UIMgr.Instance.ShowLoading(true);
    //     let xhr = new XMLHttpRequest();
    //     let url = GameConfig.NetConfig.HTTP_API
    //     url += "/api/hall/sy/user/buy/diamond"
    //     xhr.open('POST', url);
    //     console.log("http POST  购买钻石==");

    //     let param = 
    //     {
    //         buyAmount : _price,
    //         buyCount: _diamondAmount,
    //         userId: LocalPlayerData.Instance.Data_Uid.mData
    //     }
    //     this.HttpSend(xhr,param,(_result)=>
    //     {
    //         UIMgr.Instance.ShowLoading(false);
    //         console.log("_收到http==购买钻石==" + _result);
    //         let json = JSON.parse(_result);
    //         let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

    //         if(classData.code != NetworkHttp.SuccesCode)
    //         {
    //             UIMgr.Instance.ShowToast(classData.msg);
    //             return;
    //         }
    //         UIMgr.Instance.ShowToast(Localization.GetString("00427"));
    //         NetworkHttp.Instance.GetUserInfoRequest();
    //     },
    //     (_err)=>
    //     {
    //         UIMgr.Instance.ShowLoading(false);
    //     }) 
    // }

    // public BackHome()
    // {
    //     let url = GameConfig.NetConfig.HOME_URL;
    //     url += "?userId=" + LocalPlayerData.Instance.Data_Uid.mData;
    //     top.location.href=url
    // }
}

