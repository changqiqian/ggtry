import { LocalPlayerData } from "../base/LocalPlayerData";
import { Singleton } from "../base/Singleton";
import { UIMgr } from "../base/UIMgr";
import { MultipleTableCtr } from "../ui/common/MultipleTableCtr";

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
                _success && _success(_xhr.responseText);
            }
        };

        _xhr.onerror = function (_err) 
        {
            console.log('Http err ====' + _err);
            UIMgr.Instance.ShowToast("http error");
            _error && _error(_err);
        };

        _xhr.send(JSON.stringify(_param));
    }

    //房主查询买入请求
    public PostBuyInRequest(_approveStatus : HTTP_BuyInStates , _createGameUserId : string, _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8082/api/amount/sy/query/buy/request");

        console.log("http post  房主查询买入请求==");
        let param = 
        {
            approveStatus : _approveStatus,
            createGameUserId : _createGameUserId,
            gameId : _gameId
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==房主查询买入请求==" + _result);
            let json = JSON.parse(_result);
            let classData : HTTP_BuyInRequest = json as HTTP_BuyInRequest;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast( classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(param.gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_HTTPBuyInRequest.mData = classData;
            }

        },
        (_err)=>
        {

        }) 
    }

    //房主 处理买入请求
    public PostDealBuyInRequest(_approveStatus : HTTP_ApproveStatus , _approveUserId : string , _buyRequestId : string , _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8082/api/amount/sy/approve/buy/request");

        console.log("http post  房主 处理买入请求==");
        let param = 
        {
            approveStatus : _approveStatus,
            approveUserId : _approveUserId,
            buyRequestId : _buyRequestId,
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http== 房主 处理买入请求==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponse = json as HTT_BaseResponse;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                let tempData = new HTTP_ApproveResponse();
                tempData.status = _approveStatus;
                tempData.approveUserId = _approveUserId;
                tempData.buyRequestId = _buyRequestId;
                gameData.Data_HTTPApproveResponse.mData = tempData;
                gameData.RemoveApproveRequest(tempData);

                let tips = "";
                if(tempData.status == HTTP_ApproveStatus.Agree)
                {
                    tips = "已同意用户:"+ tempData.approveUserId +"的买入请求";
                }
                else
                {
                    tips = "已拒绝用户:"+ tempData.approveUserId +"的买入请求";
                }
                UIMgr.Instance.ShowToast(tips);
            }

        },
        (_err)=>
        {

        }) 
    }



}




// 审批状态查询 0 未审批 1 已审批 2 已拒绝
export enum HTTP_BuyInStates
{
    Waiting = 0,
    Finish,
    Reject ,
}

//审批状态确认 1 审批 2 拒绝
export enum HTTP_ApproveStatus
{
    Agree = 1, 
    Reject = 2
}

export class HTTP_ApproveResponse
{
    status:HTTP_ApproveStatus;
    approveUserId : string;
    buyRequestId : string;
}

export class HTT_BaseResponse
{
    code : string;
    msg: string;
}

export class HTTP_BuyInRequest
{
    code : string;
    msg: string
    data : Array<HTTP_BuyInData>;
}

export class HTTP_BuyInData
{
    amount: number;
    approvalStatus: number;
    createGameUserId: string
    createdTime: string
    diamond: number;
    gameId: string
    id: number;
    userId: string
    userName: string
    headUrl : string
}