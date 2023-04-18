import { LocalPlayerData } from "../base/LocalPlayerData";
import { Localization } from "../base/Localization";
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
            let classData : HTTP_BuyInResponse = json as HTTP_BuyInResponse;

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
                let tips = "";
                if(_approveStatus == HTTP_ApproveStatus.Agree)
                {
                    tips = Localization.ReplaceString("00412",_approveUserId)
                }
                else
                {
                    tips = Localization.ReplaceString("00413",_approveUserId)
                }
                let ownnerId = gameData.GetOwnerId();
                UIMgr.Instance.ShowToast(tips);
            }

        },
        (_err)=>
        {

        }) 
    }

    //获取好友列表
    public GetFriendsList( _gameId : string ,_page : number , _limit : number)
    {
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/friend/";
        url += LocalPlayerData.Instance.Data_Uid.mData;
        url += "?";
        url += "page=" + _page +"&";
        url += "limit=" + _limit;
        xhr.open('GET', url);
        console.log("http get  获取好友列表==");
        this.HttpSend(xhr,{},(_result)=>
        {
            console.log("_收到http== 获取好友列表===" + _result);
            let json = JSON.parse(_result);
            let classData : HTTP_FriendsListResponse = json as HTTP_FriendsListResponse;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_HTTP_FriendsData.mData = classData.data;
            }

        },
        (_err)=>
        {

        }) 
    }

    //邀请好友
    public PostInviteFriends(_friendsUids : Array<string>, _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8082/api/hall/sy/user/game/invite");

        console.log("http post  邀请好友==");
        let param = 
        {
            friendIds : _friendsUids,
            gameId : _gameId,
            userId : LocalPlayerData.Instance.Data_Uid.mData
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==邀请好友==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast( classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(param.gameId);
            if(gameStruct != null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00415"));
            }

        },
        (_err)=>
        {

        }) 
    }

    //删除好友
    public PostDeleteFriends(_friendsUids : Array<string>, _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8082/api/hall/sy/user/friend/delete");

        console.log("http post  删除好友==");
        let param = 
        {
            friendIds : _friendsUids,
            userId : LocalPlayerData.Instance.Data_Uid.mData
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==删除好友==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast( classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00417"));
                let gameData = gameStruct.mGameData;
                gameData.Data_HTTP_RefreshFriendList.mData = true;
            }
        },
        (_err)=>
        {

        }) 
    }

    //添加好友
    public PostAddFriends(_friendUi : string, _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://54.169.147.71:8082/api/hall/sy/user/friend/send");

        console.log("http post  添加好友==");
        let param = 
        {
            friendId : _friendUi,
            userId : LocalPlayerData.Instance.Data_Uid.mData
        }

        this.HttpSend(xhr,param,(_result)=>
        {
            console.log("_收到http==添加好友==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast( classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00418"));
            }

        },
        (_err)=>
        {

        }) 
    }

    //获取好友请求列表
    public GetAddFriendsRequestList( _gameId : string)
    {
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/friend/request?userId=" + LocalPlayerData.Instance.Data_Uid.mData;
        xhr.open('GET', url);
        console.log("http GET  获取好友请求==");
        this.HttpSend(xhr,{},(_result)=>
        {
            console.log("_收到http==获取好友请求==" + _result);
            let json = JSON.parse(_result);
            let classData : HTTP_FriendsRequestListResponse = json as HTTP_FriendsRequestListResponse;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast( classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                let gameData = gameStruct.mGameData;
                gameData.Data_HTTP_FriendsRequestListResponse.mData = classData;
            }
        },
        (_err)=>
        {

        }) 
    }

    //接受好友请求
    public GetAgreeFriendsRequest( _gameId : string , _targetUid : string)
    {
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/friend/accept/" + _targetUid;
        xhr.open('GET', url);
        console.log("http GET  接受好友请求==");
        this.HttpSend(xhr,{},(_result)=>
        {
            console.log("_收到http==接受好友请求==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00421"));
            }
        },
        (_err)=>
        {

        }) 
    }

    //拒绝好友请求
    public GetRejectFriendsRequest( _gameId : string , _targetUid : string)
    {
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/friend/refuse/" + _targetUid;
        xhr.open('GET', url);
        console.log("http GET  拒绝好友请求==");
        this.HttpSend(xhr,{},(_result)=>
        {
            console.log("_收到http==拒绝好友请求==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }

            let gameStruct = MultipleTableCtr.FindGameStructByGameId(_gameId);
            if(gameStruct != null)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00422"));
            }
        },
        (_err)=>
        {

        }) 
    }

    //购买钻石
    public POSTBuyDiamondRequest(_price : number , _diamondAmount : number)
    {
        UIMgr.Instance.ShowLoading(true);
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/buy/diamond"
        xhr.open('POST', url);
        console.log("http POST  购买钻石==");

        let param = 
        {
            buyAmount : _price,
            buyCount: _diamondAmount,
            userId: LocalPlayerData.Instance.Data_Uid.mData
        }
        this.HttpSend(xhr,param,(_result)=>
        {
            UIMgr.Instance.ShowLoading(false);
            console.log("_收到http==购买钻石==" + _result);
            let json = JSON.parse(_result);
            let classData : HTT_BaseResponseWithData = json as HTT_BaseResponseWithData;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }
            UIMgr.Instance.ShowToast(Localization.GetString("00427"));
            NetworkHttp.Instance.GetUserInfoRequest();
        },
        (_err)=>
        {
            UIMgr.Instance.ShowLoading(false);
        }) 
    }

    //获取用户信息
    public GetUserInfoRequest()
    {
        UIMgr.Instance.ShowLoading(true);
        let xhr = new XMLHttpRequest();
        let url = "http://54.169.147.71:8082/api/hall/sy/user/" + LocalPlayerData.Instance.Data_Uid.mData;
        xhr.open('GET', url);
        console.log("http GET  获取用户信息==");
        this.HttpSend(xhr,{},(_result)=>
        {
            UIMgr.Instance.ShowLoading(false);
            console.log("_收到http==获取用户信息==" + _result);
            let json = JSON.parse(_result);
            let classData : HTTP_UserInfoResponse = json as HTTP_UserInfoResponse;

            if(classData.code != NetworkHttp.SuccesCode)
            {
                UIMgr.Instance.ShowToast(classData.msg);
                return;
            }

            LocalPlayerData.Instance.Data_Coin.mData = classData.data.coin;
            LocalPlayerData.Instance.Data_UpdateHallMoney.mData  = true;
            
        },
        (_err)=>
        {
            UIMgr.Instance.ShowLoading(false);
        }) 
    }

    public BackHome()
    {
        let url = "http://test-h5.9dhub.com?userId=" + LocalPlayerData.Instance.Data_Uid.mData;
        top.location.href=url
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

export class HTT_BaseResponseWithData
{
    code : string;
    msg: string;
    data: string
}

export class HTTP_BuyInResponse
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

export class HTTP_FriendsListResponse
{
    code : string;
    msg: string
    data : HTTP_FriendsData
}

export class HTTP_FriendsData
{
    total: number;
    pageNum: number;
    size: number;
    list : Array<HTTP_FriendsList>;
}

export class HTTP_FriendsList
{
    userId: string;
    userName:  string;
    coin:  string;
    diamond:  string;
    nation:  string;
    headUrl:  string;
    pinCode:  string;
    lastLoginTime:  string;
    lastLogoutTime:  string;
    selected : boolean = false;
}


export class HTTP_FriendsRequestListResponse
{
    code : string;
    msg: string
    data : Array<HTTP_FriendsRequestList>
}


export class HTTP_FriendsRequestList
{
    createTime: string
    friendId: string;
    headUrl: string;
    id: number;
    state: number
    userId: string;
    userName: string;
}

export class HTTP_UserInfoResponse
{
    code: string;
    msg:  string;
    data : HTTP_UserInfo;
}

export class HTTP_UserInfo
{
    userId: string;
    userName: string;
    coin: number
    diamond: number
    nation: string;
    headUrl: string;
    pinCode: string;
    state:number
    higherLevel: string;
    createTime: string;
    updateTime: string;
    lastLoginTime: string;
    lastLogoutTime: string;
    friendGameRatio:string;
    lobbyGameRatio: string;
    insuranceRatio: string;
}

