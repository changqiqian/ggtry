import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { Network } from '../../network/Network';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData, Mtt_RegType } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Mtt_AttendBtn')
export class Mtt_AttendBtn extends BaseUI 
{
    @property(ToggleBtn) 
    mToggleBtn: ToggleBtn = null;
    @property(Sprite) 
    mCurrencyIcon: Sprite = null;
    @property(Label) 
    mDescribe: Label = null;
    @property(Label) 
    mAmount: Label = null;

    mType : Mtt_RegType = null;
    mTicketId : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {

    }
    RegDataNotify() 
    {
        HallData.GetInstance().AddListener("Data_UnionAssets",(_current , _before)=>
        {
            if(this.mType == Mtt_RegType.UnionCoin)
            {
                this.mAmount.string = _current.amount + "";
            }

        },this);

        HallData.GetInstance().AddListener("Data_SelfTickets",(_current , _before)=>
        {
            if(this.mType == Mtt_RegType.UnionCoin)
            {
                this.mAmount.string = _current.count + "";
            }
        },this);
        
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        HallData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

    public SetData(_tpye : Mtt_RegType , _restAmount:number , _describe : string)
    {
        this.mType = _tpye;
        this.mToggleBtn.SetDataNotify(HallData.GetInstance(),"Data_MttAttendOption" , this.mType);
        let textureName = "C" + _tpye;
        this.LoadSprite("common" , "texture/" + textureName , (_spriteFrame)=>
        {
            this.mCurrencyIcon.spriteFrame = _spriteFrame;
        })

        this.mAmount.string = _restAmount + "";
        this.mDescribe.string = _describe;

        if(this.mType == Mtt_RegType.UnionCoin)
        {
            //发送消息获取联盟coin
            Network.GetInstance().SendGetUnionAssets(LocalPlayerData.GetInstance().Data_CurrentClubId);
        }
    }

    public SetTicketData(_ticketId : number ,  _describe : string , _ticketImage : string)
    {
        this.mType = Mtt_RegType.Ticket;
        this.mTicketId = _ticketId;
        if(_ticketImage && _ticketImage != '')
        {
            let textureName = "C" + Mtt_RegType.Ticket;
            this.LoadSprite("common" , "texture/" + textureName , (_spriteFrame)=>
            {
                this.mCurrencyIcon.spriteFrame = _spriteFrame;
            })
        }
        else
        {
            this.LoadRemoteSprite(_ticketImage,(_spriteFrame)=>
            {
                this.mCurrencyIcon.spriteFrame = _spriteFrame;
            });
        }
        this.mDescribe.string = _describe;
        Network.GetInstance().SendGetSelfTicket(this.mTicketId);
    }

    public GetType() : Mtt_RegType
    {
        return this.mType;
    }

    public GetTicketId() : number
    {
        if(this.mType != Mtt_RegType.Ticket)
        {
            console.log("这个组件并不是门票类型，如果你强行取值会有风险");
        }
        return this.mTicketId;
    }

    public IsSelected() : boolean
    {
        if(this.node.active == false)
        {
            return false;
        }

        return this.mToggleBtn.IsSelected();
    }
}

