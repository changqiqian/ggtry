import { _decorator, Component, Node, Vec3 } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameData } from '../GameData';
import { Game_SeatItem } from './Game_SeatItem';
const { ccclass, property } = _decorator;

@ccclass('Game_SeatUI')
export class Game_SeatUI extends BaseUI 
{
    InitParam() 
    {
        let childCount = this.node.children.length; 
        for(let i = 0 ; i < childCount ; i++)
        {
            let current = this.node.children[i].getComponent(Game_SeatItem);
            current.SetSeatID(i);
        }
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

    TryRotateSeats(_LocalPlayerSeatId : number)
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

            for(let i = 0 ; i < MovePathConfigArray.length ; i++)
            {
                let current = MovePathConfigArray[i];
                let movingSeat = this.GetSeatNodeBySeatId(current.mTargetId);
                movingSeat.node.position =  current.mPath[current.mPath.length - 1];
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