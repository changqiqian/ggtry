import { _decorator, Component, Node, instantiate, Prefab, UITransform, Vec3, Size, Tween, easing, Label, Color } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { SpineCtr } from '../../UiTool/SpineCtr';
import { CircleTimer } from '../common/CircleTimer';
import { CowboyData } from './CowboyData';
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
    mSpineStartOrEnd: SpineCtr = null;
    @property(SpineCtr) 
    mSpineWait: SpineCtr = null;
    @property(Label) 
    mPhaseStatus: Label = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    mChips : Array<Node> = new Array<Node>();

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

    }
    BindUI() 
    {
        this.OffsetTop();
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
    }
    RegDataNotify() 
    {
        CowboyData.Instance.Data_S2CTexasCowboyExitGameResp.AddListenner(this,(_data)=>
        {
            this.mMovingShow.SetHideAnimationCallback(()=>
            {
                UIMgr.Instance.DeleteUiByTag(CowboyData.UITag);
            });
            UIMgr.Instance.HideUiByTag(CowboyData.UITag);
        });

        CowboyData.Instance.Data_HideUI.AddListenner(this,(_data)=>
        {
            this.mMovingShow.SetHideAnimationCallback(null);
            UIMgr.Instance.HideUiByTag(CowboyData.UITag);
        });

        CowboyData.Instance.Data_CollectConfig.AddListenner(this,(_data)=>
        {
            let tempChip = instantiate(this.mChip) as Node;
            let startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(_data.mTargetWorldPos);
            this.node.addChild(tempChip);
            this.mChips.push(tempChip);
            let localPlayerWorldPos = CowboyData.Instance.Data_LocalPlayerPos.mData;
            let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
            tempChip.setPosition(startPos);
            tempChip.getComponent(cb_Chip).SetAmount(_data.mAmount);
            this.ChipFlyTo(tempChip,localPlayerPos);
        });

        CowboyData.Instance.Data_BetConfig.AddListenner(this,(_data)=>
        {
            let tempChip = instantiate(this.mChip) as Node;
            let flyToPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(_data.mTargetWorldPos);
            let chipSize = tempChip.getComponent(UITransform).contentSize;
            let finlaOffset = new Size();
            finlaOffset.width = _data.mOffset.width - chipSize.width/2;
            finlaOffset.height = _data.mOffset.height - chipSize.height/2;
            let finalPos = this.RandomPos(flyToPos , finlaOffset);
            this.node.addChild(tempChip);
            this.mChips.push(tempChip);
            //自己下注
            if(LocalPlayerData.Instance.Data_Uid.mData == _data.mUid)
            {   
                let localPlayerWorldPos = CowboyData.Instance.Data_LocalPlayerPos.mData;
                let localPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(localPlayerWorldPos);
                tempChip.setPosition(localPlayerPos);
                tempChip.getComponent(cb_Chip).SetAmount(_data.mAmount);
                this.ChipFlyTo(tempChip,finalPos);
            }
            else//其他玩家下注
            {
                let otherPlayerWorldPos = CowboyData.Instance.Data_OtherPlayerPos.mData;
                let otherPlayerPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(otherPlayerWorldPos);
                tempChip.setPosition(otherPlayerPos);
                tempChip.getComponent(cb_Chip).SetAmount(_data.mAmount);
                this.ChipFlyTo(tempChip,finalPos);
            }
        });
        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(_data.restTime);
            this.mSpineStartOrEnd.Hide();
            let phase = CowboyData.Instance.GetPhase();
            if(phase == CowboyPhase.CowBoyPhase_Settlement)
            {
                this.mSpineWait.SetAnimation("qingdengdai",true);
            }
            else
            {
                this.mSpineWait.Hide(); 
            }
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(CowboyData.Instance.GetDuration(CowboyPhase.CowBoyPhase_Start),()=>
            {
                
            });
            this.mSpineStartOrEnd.SetAnimation("ksxz",false,(_data)=>
            {   
                this.mSpineStartOrEnd.Hide(); 
            });

            this.mSpineWait.Hide(); 
            this.UpdatePhaseStatus();

            for(let i = 0 ; i < this.mChips.length ; i++)
            {
                this.mChips[i].getComponent(cb_Chip).DeleteSelf();
            }
            
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            this.mCircleTimer.StartTimer(CowboyData.Instance.GetDuration(CowboyPhase.CowBoyPhase_Settlement));
            this.mSpineStartOrEnd.SetAnimation("tzxz",false,(_data)=>
            {   
                this.mSpineStartOrEnd.Hide(); 
            });
            this.UpdatePhaseStatus();
        });


    }
    LateInit() 
    {

    }


    CustmoerDestory()
    {
        this.mChips = null;
        CowboyData.Instance.Clear();
    }
    

    ChipFlyTo(_chip : Node , _pos : Vec3)
    {
        let tween = new Tween(_chip);
        tween.to(0.5,{position:_pos},{easing:easing.quadOut});
        tween.start();
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

    UpdatePhaseStatus()
    {
        let phase = CowboyData.Instance.GetPhase();
        if(phase == CowboyPhase.CowBoyPhase_Settlement)
        {
            this.mPhaseStatus.string = Localization.GetString("00309");
            this.mPhaseStatus.color = Color.RED;
        }
        else
        {
            this.mPhaseStatus.string  = Localization.GetString("00308");
            this.mPhaseStatus.color = Color.GREEN;
        }
        
    }
}

