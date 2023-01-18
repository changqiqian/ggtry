import { _decorator, Component, Node, instantiate, Prefab, UITransform, Vec3, Size, Tween, easing } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { SpineCtr } from '../../UiTool/SpineCtr';
import { CircleTimer } from '../common/CircleTimer';
import { cb_ChipConfig, CowboyData } from './CowboyData';
import { cb_Chip } from './subUI/cb_Chip';
const { ccclass, property } = _decorator;

@ccclass('CowboyUI')
export class CowboyUI extends BaseUI 
{
    @property(Prefab) 
    mChip: Prefab = null;
    @property(CircleTimer) 
    mCircleTimer: CircleTimer = null;
    @property(SpineCtr) 
    mSpine: SpineCtr = null;

    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    mChipList : Array<cb_ChipConfig>;

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }
    InitParam() 
    {
        this.mChipList = new Array<cb_ChipConfig>();
    }
    BindUI() 
    {
        this.OffsetTop();
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
    }
    RegDataNotify() 
    {
        CowboyData.Instance.Data_BetConfig.AddListenner(this,(_data)=>
        {
            let tempChip = instantiate(this.mChip) as Node;
            let flyToPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(_data.mTargetWorldPos);
            let chipSize = tempChip.getComponent(UITransform).contentSize;
            let finlaOffset = new Size();
            finlaOffset.width = _data.mOffset.width - chipSize.width/2;
            finlaOffset.height = _data.mOffset.height - chipSize.height/2;
            let finalPos = this.RandomPos(flyToPos , finlaOffset);
            let config = new cb_ChipConfig(_data.mUid,_data.mBetArea,tempChip);
            this.mChipList.push(config);
            this.node.addChild(tempChip);
            //自己下注
            if(LocalPlayerData.Instance.Data_Uid.mData == _data.mUid)
            {   
                let localPlayerWorldPos = CowboyData.Instance.Data_LocalPlayerPos.mData;
                let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
                tempChip.setPosition(localPlayerPos);
                tempChip.getComponent(cb_Chip).SetAmount(_data.mAmount);
                this.ChipFlyToBetArea(config,finalPos);
            }
            else//其他玩家下注
            {
                let otherPlayerWorldPos = CowboyData.Instance.Data_OtherPlayerPos.mData;
                let otherPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(otherPlayerWorldPos);
                tempChip.setPosition(otherPlayerPos);
                tempChip.getComponent(cb_Chip).SetAmount(_data.mAmount);
                this.ChipFlyToBetArea(config,finalPos);
            }
        });
        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(_data.restTime);
            this.mSpine.Hide();
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(CowboyData.Instance.GetDuration(CowboyPhase.CowBoyPhase_Start),()=>
            {
                
            });
            this.mSpine.SetAnimation("ksxz",false,(_data)=>
            {   
                this.mSpine.Hide(); 
            });
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(CowboyData.Instance.GetDuration(CowboyPhase.CowBoyPhase_Settlement));
            this.mSpine.SetAnimation("tzxz",false,(_data)=>
            {   
                this.mSpine.Hide(); 
            });
        });

        CowboyData.Instance.Data_S2CTexasCowboyExitGameResp.AddListenner(this,(_data)=>
        {
            this.Show(false);
        });

    }
    LateInit() 
    {

    }


    CustmoerDestory()
    {
        this.mChipList.splice(0,this.mChipList.length - 1);
        this.mChipList = null;
        CowboyData.Instance.Clear();
    }
    

    ChipFlyToBetArea(_config : cb_ChipConfig , _pos : Vec3)
    {
        let tween = new Tween(_config.mNode);
        tween.to(0.5,{position:_pos},{easing:easing.quadOut});
        tween.start();
    }

    ChipFlyToPlayer(_config : cb_ChipConfig)
    {
        //自己回收筹码
        if(_config.mUid == LocalPlayerData.Instance.Data_Uid.mData)
        {
            let duration = 0.5;
            let localPlayerWorldPos = CowboyData.Instance.Data_LocalPlayerPos.mData;
            let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
            let tween = new Tween(_config.mNode);
            tween.to(duration,{position:localPlayerPos},{easing:easing.quadOut});
            tween.call(()=>
            {
                _config.mNode.active = false;
            });
            tween.start();
        }
        else //其他玩家回收筹码
        {

        }
    }

    CollectChip(_winArea : CowboyAreaType)
    {
        for(let i = 0 ; i < this.mChipList.length ; i++)
        {
            let currentConfig = this.mChipList[i];
            if(currentConfig.mBetArea == _winArea)//玩家回收筹码
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
        let offsetX = Tool.Random(0 , _offset.width);
        if(Tool.Random(0,10)%2 == 0)
        {
            offsetX = -offsetX;
        }

        let offsetY = Tool.Random(0 , _offset.height);
        if(Tool.Random(0,10)%2 == 0)
        {
            offsetY = -offsetY;
        }

        _pos.x = _pos.x + offsetX;
        _pos.y = _pos.y + offsetY;
        return _pos;
    }

}

