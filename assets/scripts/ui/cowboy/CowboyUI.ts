import { _decorator, Component, Node, instantiate, Prefab, UITransform, Vec3, Size, Tween, easing } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { CircleTimer } from '../common/CircleTimer';
import { CowboyData } from './CowboyData';
const { ccclass, property } = _decorator;


class ChipConfig
{
    constructor(_uid : string , _betID : number , _node : Node)
    {
        this.mUid = _uid;
        this.mBetID = _betID;
        this.mNode = _node;
    }

    mUid : string;
    mBetID : number;
    mNode : Node;
}

@ccclass('CowboyUI')
export class CowboyUI extends BaseUI 
{
    @property(Prefab) 
    mChip: Prefab = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;

    mChipList : Array<ChipConfig>;

    
    InitParam() 
    {
        this.mChipList = new Array<ChipConfig>();
    }
    BindUI() 
    {
        this.mCircleTimer.StartTimer(7);
    }
    RegDataNotify() 
    {
        CowboyData.GetInstance().Data_BetConfig.AddListenner(this,this.Data_BetConfig.bind(this))
    }
    LateInit() 
    {

    }


    CustmoerDestory()
    {
        this.mChipList.splice(0,this.mChipList.length - 1);
        this.mChipList = null;
    }
    
    Data_BetConfig(_current , _before)
    {
        let tempChip = instantiate(this.mChip) as Node;
        let flyToPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(_current.mTargetWorldPos);
        let chipSize = tempChip.getComponent(UITransform).contentSize;
        let finlaOffset = new Size();
        finlaOffset.width = _current.mOffset.width - chipSize.width/2;
        finlaOffset.height = _current.mOffset.height - chipSize.height/2;
        let finalPos = this.RandomPos(flyToPos , finlaOffset);
        let config = new ChipConfig(_current.mUid,_current.mBetID,tempChip);
        this.mChipList.push(config);
        //自己下注
        if(LocalPlayerData.GetInstance().Data_Uid.mData == _current.mUid)
        {   
            this.node.addChild(tempChip);
            let localPlayerWorldPos = CowboyData.GetInstance().Data_LocalPlayerPos.mData;
            let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
            tempChip.setPosition(localPlayerPos);
            this.ChipFlyToBetArea(config,finalPos);
        }
        else//其他玩家下注
        {

        }
    }

    ChipFlyToBetArea(_config : ChipConfig , _pos : Vec3)
    {
        let tween = new Tween(_config.mNode);
        tween.to(0.5,{position:_pos},{easing:easing.quadOut});
        tween.start();
    }

    ChipFlyToPlayer(_config : ChipConfig)
    {
        //自己回收筹码
        if(_config.mUid == LocalPlayerData.GetInstance().Data_Uid.mData)
        {
            let duration = 0.5;
            let localPlayerWorldPos = CowboyData.GetInstance().Data_LocalPlayerPos.mData;
            let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
            let tween = new Tween(_config.mNode);
            tween.to(duration,{position:localPlayerPos},{easing:easing.quadOut});
            tween.call(()=>{
                _config.mNode.active = false;
            });
            tween.start();
        }
        else //其他玩家回收筹码
        {

        }
    }

    CollectChip(_winID : number)
    {
        for(let i = 0 ; i < this.mChipList.length ; i++)
        {
            let currentConfig = this.mChipList[i];
            if(currentConfig.mBetID == _winID)//玩家回收筹码
            {
                this.ChipFlyToPlayer(currentConfig);
            }
            else //系统回收筹码
            {

            }
        }
    }

    RandomPos(_pos : Vec3 , _offset : Size) : Vec3
    {
        let offsetX = this.Random(0 , _offset.width);
        if(this.Random(0,10)%2 == 0)
        {
            offsetX = -offsetX;
        }

        let offsetY = this.Random(0 , _offset.height);
        if(this.Random(0,10)%2 == 0)
        {
            offsetY = -offsetY;
        }

        _pos.x = _pos.x + offsetX;
        _pos.y = _pos.y + offsetY;
        return _pos;
    }

    Random(lower:number, upper : number) : number
    {
        return Math.floor(Math.random() * (upper - lower+1)) + lower;
    }
}

