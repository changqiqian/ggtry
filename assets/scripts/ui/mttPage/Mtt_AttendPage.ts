import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { GameType, Network } from '../../network/Network';
import { BaseButton } from '../common/BaseButton';
import { HallData, Mtt_RegType } from '../hall/HallData';
import { Mtt_AttendBtn } from './Mtt_AttendBtn';
const { ccclass, property } = _decorator;

@ccclass('Mtt_AttendPage')
export class Mtt_AttendPage extends BaseUI 
{
    @property(Label) 
    mTitle: Label = null;
    @property(Label) 
    mTips: Label = null;
    @property(Node) 
    mOptionNode: Node = null;
    @property(BaseButton) 
    mCancelBtn: BaseButton = null;
    @property(BaseButton) 
    mConfirmBtn: BaseButton = null;

    onEnable()
    {
        HallData.GetInstance().Data_MttAttendOption = Mtt_RegType.None;
    }

    InitParam() 
    {

    }
    BindUI() 
    {
        this.mCancelBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mConfirmBtn.SetClickCallback(()=>
        {
            let currentOption = this.GetCurrentSelectOption();
            if(currentOption == null)
            {
                UIMgr.GetInstance().ShowToast(Localization.GetString("00043"));
                return;
            }


            let matchId = HallData.GetInstance().Data_CurrentMttMatchID;
            let clubId = LocalPlayerData.GetInstance().Data_CurrentClubId;
            let currentType = currentOption.GetType();
            if(currentType == Mtt_RegType.Ticket)
            {
                let ticketList = HallData.GetInstance().Data_SelfTickets.list;
                if(!ticketList || ticketList.length <= 0) 
                {
                    UIMgr.GetInstance().ShowToast(Localization.GetString("00044"));
                    return
                }
                
                let ticketId = currentOption.GetTicketId();
                Network.GetInstance().SendAttendMtt(GameType.Mtt,matchId,ticketId,clubId);
            }
            else
            {
                Network.GetInstance().SendAttendMtt(GameType.Mtt,matchId,0,clubId);
            }
            this.CloseAsWindow();
        });
    }

    GetCurrentSelectOption():Mtt_AttendBtn
    {
        for(let i = 0 ; i < this.mOptionNode.children.length ; i++)
        {
            let currentOption = this.GetOption(i);
            if(currentOption.IsSelected())
            {
                return currentOption;
            }
        }

        return null;
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

    HideOptions()
    {
        for(let i = 0 ; i < this.mOptionNode.children.length ; i++)
        {
            this.mOptionNode.children[i].active = false;
        }
    }

    GetOption(_index : number) :Mtt_AttendBtn
    {
        if(_index >= this.mOptionNode.children.length)
        {
            console.log("选项数量不足，prefab中只有3个 请手动在prefab中去增加选项");
            return;
        }

        return this.mOptionNode.children[_index].getComponent(Mtt_AttendBtn);
    }

    public InitWithData(_data : any , _haveRealReward : boolean)
    {
        this.HideOptions();
        let matchData =  HallData.GetInstance().Data_MttMatchDetails;
        let restCoin = LocalPlayerData.GetInstance().Data_Coin;
        let restDiamond = LocalPlayerData.GetInstance().Data_Diamond;
        let restClubPoint = LocalPlayerData.GetInstance().Data_Point;
        let restUnionCoin = LocalPlayerData.GetInstance().Data_UnionCoin;
        
        let enterFee = matchData.matchConfig.enterFee
        let enterFeeType = matchData.matchConfig.enterFeeType
        let enterFeeTicket = matchData.matchConfig.enterFeeTicket

        let rebuyFee = matchData.matchConfig.reBuyFee
        let rebuyFeeType = matchData.matchConfig.reBuyFeeType
        let rebuyFeeTicket = matchData.matchConfig.reBuyFeeTicket

        let finalFee;
        let finalFeeType;
        let finalTicketFee;
        this.mTips.string = Localization.GetString("00043");
        if(_data.reBuyCount > 0)
        {
            this.mTitle.string = Localization.GetString("00041");
            finalFee = rebuyFee;
            finalFeeType = rebuyFeeType;
            finalTicketFee = rebuyFeeTicket;
        }
        else
        {
            this.mTitle.string = Localization.GetString("00042");
            finalFee = enterFee;
            finalFeeType = enterFeeType;
            finalTicketFee = enterFeeTicket;
        }
        
        let totalFee = finalFee +  _data.serviceFee;
        if(finalFeeType == Mtt_RegType.Coin) 
        {
            this.GetOption(0).node.active = true;
            let describe = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restCoin,describe);

        }// 2钻石
        else if(finalFeeType == Mtt_RegType.Diamond) 
        {
            this.GetOption(0).node.active = true;
            let describe = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restDiamond,describe);
        } // 3门票
        else if(finalFeeType ==  Mtt_RegType.Ticket)
        {
            this.GetOption(0).node.active = true;
            let describe = finalTicketFee.name + ' *' +finalTicketFee.nums;
            this.GetOption(0).SetTicketData(  finalTicketFee.tpId , describe , finalTicketFee.img);
        } // 4门票 金币
        else if(finalFeeType == Mtt_RegType.CoinAndTicket) 
        {
            this.GetOption(0).node.active = true;
            let describeCoin = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restCoin,describeCoin);

            this.GetOption(1).node.active = true;
            let describeTicket = finalTicketFee.name + ' *' +finalTicketFee.nums;
            this.GetOption(1).SetTicketData(  finalTicketFee.tpId , describeTicket , finalTicketFee.img);
        } // 5门票 钻石
        else if(finalFeeType== Mtt_RegType.DiamondAndTicket) 
        {
            this.GetOption(0).node.active = true;
            let describeCoin = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restDiamond,describeCoin);

            this.GetOption(1).node.active = true;
            let describeTicket = finalTicketFee.name + ' *' +finalTicketFee.nums;
            this.GetOption(1).SetTicketData(  finalTicketFee.tpId , describeTicket , finalTicketFee.img);
        }
        else if(finalFeeType== Mtt_RegType.Point)
        {
            this.GetOption(0).node.active = true;
            let describeCoin = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restClubPoint,describeCoin);
        }
        else if(finalFeeType== Mtt_RegType.UnionCoin)
        {
            this.GetOption(0).node.active = true;
            let describeCoin = totalFee + "";
            this.GetOption(0).SetData(finalFeeType,restUnionCoin,describeCoin);
        }
    }
}

