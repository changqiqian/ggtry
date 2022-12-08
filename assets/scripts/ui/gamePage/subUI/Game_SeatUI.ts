import { _decorator, Component, Node, Vec3, Tween } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { GameData } from '../GameData';
import { GameReplayData } from '../GameReplayData';
import { Game_SeatItem } from './Game_SeatItem';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatUI')
export class Game_SeatUI extends BaseUI 
{
    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {

    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

    }

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
        this.InitSeat();
        this.BindData();
    }

    public InitWithReplayData()
    {
        this.InitSeatWithReplay();
    }

    InitSeatWithReplay()
    {
        let childCount = this.node.children.length; 
        for(let i = 0 ; i < childCount ; i++)
        {
            let current = this.node.children[i].getComponent(Game_SeatItem);
            current.InitWithReplayData(i);
        }

        let selfPlayer = GameReplayData.Instance.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
        this.TryRotateSeats(selfPlayer.seat , false);
    }

    InitSeat()
    {
        let childCount = this.node.children.length; 
        for(let i = 0 ; i < childCount ; i++)
        {
            let current = this.node.children[i].getComponent(Game_SeatItem);
            current.InitWithData(this.mIndex , i);
        }
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            let seatInfos = _data.gameDynamic.seatInfos;
            for(let i = 0 ; i < seatInfos.length ; i++)
            {
                let current = seatInfos[i];
                if(current.uid == LocalPlayerData.Instance.Data_Uid.mData)
                {
                    this.TryRotateSeats(current.seat , true);
                    break;
                }
            }
        })

        gameData.Data_S2CCommonSitDownNotify.AddListenner(this,(_data)=>
        {
            let playerInfo = _data.seatPlayerInfo;
            if(playerInfo.uid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                return;
            }
            this.TryRotateSeats(playerInfo.seat,true);
        })
    }

    GetSeatNodeBySeatId(_seatId : number) : Game_SeatItem
    {
        let childCount = this.node.children.length; 
        for(let i = 0 ; i < childCount ; i++)
        {
            let current = this.node.children[i].getComponent(Game_SeatItem);
            if(current.mSeatID == _seatId)
            {
                return current;
            }
        }

        return null;
    }

    FindBottomSeat() : Game_SeatItem
    {
        let index = 0;
        let pos = this.node.children[0].position;
        let childCount = this.node.children.length; 
        for(let i = 1 ; i < childCount ; i++)
        {
            let current = this.node.children[i];
            if(current.position.y < pos.y)
            {
                pos = current.position;
                index = i;
            }
        }

        return this.node.children[index].getComponent(Game_SeatItem);
    }

    TryRotateSeats(_LocalPlayerSeatId : number , _animation : boolean )
    {
        let localSeat = this.GetSeatNodeBySeatId(_LocalPlayerSeatId);
        let bottomSeat = this.FindBottomSeat();
        if(localSeat.mSeatID == bottomSeat.mSeatID) //自己已经是最底部的座位了
        {
            console.log("Game_SeatUI 自己已经是最底部的座位了");
            return;
        }

        let step = this.GetStepFromTarget(localSeat.mSeatID , bottomSeat.mSeatID);
        if(step != 0)
        {
            let MovePathConfigArray = new Array<MovePathConfig>();
            let childCount = this.node.children.length; 
            for(let i = 0 ; i < childCount ; i++)
            {
                let current = this.node.children[i].getComponent(Game_SeatItem);
                MovePathConfigArray.push(this.GetPath(current.mSeatID , step));
            }
            this.RotateWithAnm(MovePathConfigArray , _animation);
        }
    }

    RotateWithAnm(_movePathConfigArray : Array<MovePathConfig> , _anmation : boolean)
    {
        for(let i = 0 ; i < _movePathConfigArray.length ; i++)
        {
            let current = _movePathConfigArray[i];
            let movingSeat = this.GetSeatNodeBySeatId(current.mTargetId);
            if(_anmation)
            {
                let totalDuration = 0.3;
                let tempTween = new Tween(movingSeat.node);
                let destination = current.mPath[current.mPath.length - 1];
                tempTween.to(totalDuration , {position : new Vec3(destination)});
                tempTween.call(()=>
                {
                    let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
                    let gameData = gameStruct.mGameData;
                    gameData.Data_RotateSeatEnd.mData = true;
                });
                tempTween.start();
            }
            else
            {

                movingSeat.node.position =  current.mPath[current.mPath.length - 1];
                GameReplayData.Instance.Data_RotateSeatEnd.mData = true;
            }
        }
    }

    GetPath(_targetSeatId : number , _step : number) : MovePathConfig
    {

        let config = new MovePathConfig();
        config.mTargetId = _targetSeatId;
        while(_step > 0)
        {
            let nextSeat = this.GetNextSeat(_targetSeatId); 
            let newPos = new Vec3(nextSeat.node.position.x , nextSeat.node.position.y , nextSeat.node.position.z)  
            config.mPath.push(newPos);
            _targetSeatId = nextSeat.mSeatID;
            _step--;
        }    

        return config;
    }

    GetNextSeat(_currentSeatId : number) : Game_SeatItem
    {
        let childCount = this.node.children.length; 
        _currentSeatId++;
        if(_currentSeatId == childCount)
        {
            _currentSeatId = 0;
        }

        return this.GetSeatNodeBySeatId(_currentSeatId);
    }

    GetStepFromTarget(_from : number , _to : number ) : number
    {
        if(_from == _to)
        {
            return 0;
        }
        
        let step = 1;
        let nextSeat = this.GetNextSeat(_from);
        while(nextSeat.mSeatID != _to)
        {
            step++;
            nextSeat = this.GetNextSeat(nextSeat.mSeatID);
        }
        return step;
    }
    
}

class MovePathConfig
{
    constructor() 
    {
        this.mPath = new Array<Vec3>();
    }
    mTargetId : number;
    mPath : Array<Vec3>;
}