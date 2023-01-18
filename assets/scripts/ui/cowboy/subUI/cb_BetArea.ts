import { _decorator, Component, Node, Label, Button, instantiate, UITransform, Size, Vec3, Prefab } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { Tool } from '../../../Tool';
import { cb_BetConfig, CowboyData } from '../CowboyData';
import { cb_HistoryLayout } from './cb_HistoryLayout';
import { cb_Chip } from './cb_Chip';
import { SpineCtr } from '../../../UiTool/SpineCtr';
const { ccclass, property } = _decorator;

@ccclass('cb_BetArea')
export class cb_BetArea extends BaseUI {
    @property(Label) 
    mAmount: Label = null;
    @property(Button) 
    mBetBtn: Button = null;
    @property(Label) 
    mAreaName: Label = null;
    @property(Label) 
    mAreaRatio: Label = null;
    @property(cb_HistoryLayout) 
    mHistory: cb_HistoryLayout = null;
    @property(SpineCtr) 
    mWinSpine: SpineCtr = null;

    @property(Node) 
    mChipContainer: Node = null;

    @property(Prefab) 
    mChip: Prefab = null;

    mBetArea : CowboyAreaType;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBetBtn.node.on(Node.EventType.TOUCH_END,this.OnBetBtn.bind(this),this);
    }
    RegDataNotify() 
    {
        CowboyData.Instance.Data_S2CTexasCowboyEnterGameResp.AddListenner(this,(_data)=>
        {
            if(_data.phase == CowboyPhase.CowBoyPhase_Settlement)
            {
                this.ResetUI();
                return;
            }

            this.RevertBetInfo();
            this.RevertHistory();
        })

        CowboyData.Instance.Data_S2CTexasCowboyGameStartNotify.AddListenner(this,(_data)=>
        {
            this.mAmount.string = "0(0)";
            this.mWinSpine.Hide();
            this.mChipContainer.destroyAllChildren();
        })
        

        CowboyData.Instance.Data_S2CTexasCowboyBetNotify.AddListenner(this,(_data)=>
        {
            let betInfo = _data.betInfo;
            if(betInfo.betArea != this.mBetArea)
            {
                return;
            }

            let worldPos = this.mChipContainer.worldPosition; 
            let offset = this.mChipContainer.getComponent(UITransform).contentSize;
            let haflOffset = new Size(offset.width/2 , offset.height/2);
            let actionId = betInfo.actionId;
            let betConfig = new cb_BetConfig(worldPos,haflOffset,this.mBetArea ,actionId ,Tool.ConvertMoney_S2C(betInfo.amount));
            CowboyData.Instance.Data_BetConfig.mData = betConfig;
            this.UpdateBetMoney();
        });

        CowboyData.Instance.Data_S2CTexasCowboyGameSettlementNotify.AddListenner(this,(_data)=>
        {
            let index = _data.reward.findIndex((item) =>{item === this.mBetArea});
            if(index < 0)
            {
                this.mWinSpine.Hide();
                return;
            }

            this.mWinSpine.SetAnimation("win");
        });
        
        
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {
        this.mBetBtn.node.off(Node.EventType.TOUCH_END,this.OnBetBtn.bind(this),this);
    }

    //复原下注情况
    RevertBetInfo()
    {
        this.mChipContainer.destroyAllChildren();
        let betAreaInfo = CowboyData.Instance.GetAreaBetInfoByAreaType(this.mBetArea);
        let myBetInfo = CowboyData.Instance.GetSelfBetInfoByAreaTpye(this.mBetArea);
        let totalBetMoney = Tool.ConvertMoney_S2C(betAreaInfo.totalBetNum);
        let myBetMoney = Tool.ConvertMoney_S2C(myBetInfo.amount);
        this.mAmount.string = totalBetMoney + "(" + myBetMoney + ")"; 
        this.CreateChipInArea(totalBetMoney);
    }

    UpdateBetMoney()
    {
        let betAreaInfo = CowboyData.Instance.GetAreaBetInfoByAreaType(this.mBetArea);
        let myBetInfo = CowboyData.Instance.GetSelfBetInfoByAreaTpye(this.mBetArea);
        let totalBetMoney = Tool.ConvertMoney_S2C(betAreaInfo.totalBetNum);
        let myBetMoney = Tool.ConvertMoney_S2C(myBetInfo.amount);
        this.mAmount.string = totalBetMoney + "(" + myBetMoney + ")"; 
    }

    //还原历史记录
    RevertHistory()
    {
        this.mHistory.ResetUI();
        let historyInfo =  CowboyData.Instance.GetAreaHistoryByAreaType(this.mBetArea);
        if(historyInfo == null)
        {
            this.mHistory.SetData([]);
            return;
        }
        let result = historyInfo.result;
        this.mHistory.SetData(result);
    }

    ResetUI()
    {
        this.mAmount.string = "0(0)";
        this.mWinSpine.Hide();
        this.mHistory.ResetUI();
        this.mChipContainer.destroyAllChildren();
    }

    OnBetBtn()
    {
        if(CowboyData.Instance.GetPhase() == CowboyPhase.CowBoyPhase_Settlement)
        {
            return;
        }

        if(CowboyData.Instance.Data_SelectedChip.mData == 0)
        {
            return;
        }

        //发送下注消息
    }

    
    CreateChipInArea(_totalAmount : number)
    {
        let separeteChipConfig = CowboyData.Instance.SeparateChip(_totalAmount);
        for(let i = 0 ; i < separeteChipConfig.length ; i++)
        {
            let targetAmount = CowboyData.Instance.ChipAmountConfig[i]
            let chipCount = separeteChipConfig[i];
            for(let k = 0 ; k < chipCount ; k++)
            {
                let tempChip = instantiate(this.mChip) as Node;
                let offset = this.mChipContainer.getComponent(UITransform).contentSize;
                let haflOffset = new Size(offset.width/2 , offset.height/2);
        
                let chipSize = tempChip.getComponent(UITransform).contentSize;
                let finlaOffset = new Size();
                finlaOffset.width = haflOffset.width - chipSize.width/2;
                finlaOffset.height = haflOffset.height - chipSize.height/2;
                let finalPos = this.RandomPos(new Vec3(0,0,0) , finlaOffset);
        
                this.mChipContainer.addChild(tempChip);
                tempChip.setPosition(finalPos);
                tempChip.getComponent(cb_Chip).SetAmount(targetAmount);
            }
        }

    }


    SetAreaConfig(_name : string , _ratio : string , _betArea :CowboyAreaType)
    {
        this.mAreaName.string = _name;
        this.mAreaRatio.string = _ratio;
        this.mBetArea = _betArea;
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

