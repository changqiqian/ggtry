import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { NetworkSend } from '../../../network/NetworkSend';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ShowPoker } from './Game_ShowPoker';
const { ccclass, property } = _decorator;

@ccclass('Game_ShowPokerUI')
export class Game_ShowPokerUI extends BaseUI {
    @property(Node) 
    mMovingShow: Node = null;


    mIndex : number = null;

    InitParam()
    {

    }
    BindUI()
    {

        for(let i = 0 ; i < this.mMovingShow.children.length ; i++)
        {
            this.GetBaseButton(i).SetClickCallback((_customerData)=>
            {
                let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
                if(gameStruct == null)
                {
                    return;
                }
                let gameData = gameStruct.mGameData;
                let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData);
                if(selfPlayer == null)
                {
                    return;
                }

                let state = gameData.GetGameState();
                if(state != TexasCashState.TexasCashState_Settlement)
                {
                    return;
                }
                let showCards = new Array<CardInfo>();
                if(_customerData == 0)
                {
                    showCards.push(selfPlayer.cards[0]);
                    this.GetBaseButton(0).Show(false);
                    this.GetBaseButton(2).Show(false);
                }
                else if(_customerData == 1)
                {
                    showCards.push(selfPlayer.cards[1]);
                    this.GetBaseButton(1).Show(false);
                    this.GetBaseButton(2).Show(false);
                }
                else if(_customerData == 2)
                {
                    showCards = selfPlayer.cards;
                    this.ShowBtn(false);
                }

                let msgId = gameData.ShowSelfCardsMsgId();
                NetworkSend.Instance.ShowSelfCards(msgId,gameStruct.mGameId ,showCards );


            },i);
        }
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

    public Show(_val : boolean)
    {
        super.Show(_val);
        this.ShowBtn(_val);
    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
        this.Show(false);
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        if(gameStruct == null)
        {
            return;
        }

        let gameData = gameStruct.mGameData;

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.Show(false);
        });

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            this.Show(false);
            let selfUid = LocalPlayerData.Instance.Data_Uid.mData;
            let selfPlayer = gameData.GetPlayerInfoByUid(selfUid);
            if(selfPlayer == null)
            {
                return;
            }
            
            let show = gameData.PlayerHaveCards(selfUid);
            this.Show(show);

            this.GetShowPoker(0).SetCard(selfPlayer.cards[0]);
            this.GetShowPoker(1).SetCard(selfPlayer.cards[1]);
            this.GetShowPoker(2).SetCardWithTwoNumber(selfPlayer.cards);
        });

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.Show(false);
        })

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.Show(false);
        })
    }

    GetButtonNode(_index : number) : Node
    {
        return this.mMovingShow.children[_index];
    }

    GetBaseButton(_index : number) : BaseButton
    {
        let node = this.GetButtonNode(_index);
        return node.getComponent(BaseButton);
    }

    GetShowPoker(_index : number) : Game_ShowPoker
    {
        let node = this.GetButtonNode(_index);
        return node.getChildByName("Game_ShowPoker").getComponent(Game_ShowPoker);
    }

    ShowBtn(_value : boolean)
    {
        for(let i = 0 ; i < this.mMovingShow.children.length ; i++)
        {
            this.GetBaseButton(i).Show(_value);
        }
    }
}

