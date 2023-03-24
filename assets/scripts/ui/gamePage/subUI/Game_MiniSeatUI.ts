import { _decorator, Component, Node, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Game_MiniPlayer } from './Game_MiniPlayer';
const { ccclass, property } = _decorator;

@ccclass('Game_MiniSeatUI')
export class Game_MiniSeatUI extends BaseUI {
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

    InitSeat()
    {
        // let childCount = this.node.children.length; 
        // for(let i = 0 ; i < childCount ; i++)
        // {
        //     let current = this.node.children[i].getComponent(Game_SeatItem);
        //     current.InitWithData(this.mIndex , i);
        // }
    }

    GetSeatNodeBySeatId(_seatId : number) : Game_MiniPlayer
    {
        // let childCount = this.node.children.length; 
        // for(let i = 0 ; i < childCount ; i++)
        // {
        //     let current = this.node.children[i].getComponent(Game_SeatItem);
        //     if(current.mSeatID == _seatId)
        //     {
        //         return current;
        //     }
        // }

        return null;
    }

    FindBottomSeat() : Game_MiniPlayer
    {
        let index = 0;
        // let pos = this.node.children[0].position;
        // let childCount = this.node.children.length; 
        // for(let i = 1 ; i < childCount ; i++)
        // {
        //     let current = this.node.children[i];
        //     if(current.position.y < pos.y)
        //     {
        //         pos = current.position;
        //         index = i;
        //     }
        // }

        return this.node.children[index].getComponent(Game_MiniPlayer);
    }

    TryRotateSeats(_LocalPlayerSeatId : number )
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
                let current = this.node.children[i].getComponent(Game_MiniPlayer);
                MovePathConfigArray.push(this.GetPath(current.mSeatID , step));
            }
            this.RotateWithAnm(MovePathConfigArray);
        }
    }

    RotateWithAnm(_movePathConfigArray : Array<MovePathConfig> )
    {
        for(let i = 0 ; i < _movePathConfigArray.length ; i++)
        {
            let current = _movePathConfigArray[i];
            let movingSeat = this.GetSeatNodeBySeatId(current.mTargetId);
            movingSeat.node.position =  current.mPath[current.mPath.length - 1];
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

    GetNextSeat(_currentSeatId : number) : Game_MiniPlayer
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
