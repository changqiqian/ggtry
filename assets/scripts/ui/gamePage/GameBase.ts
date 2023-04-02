import { _decorator, Component, Node, instantiate, Sprite, game, Game, TweenSystem } from 'cc';
import { AudioManager } from '../../base/AudioManager';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { CuoPai } from '../common/CuoPai';
import { MultipleTableCtr } from '../common/MultipleTableCtr';
import { HallData } from '../hall/HallData';
import { Game_BottomUI } from './subUI/Game_BottomUI';
import { Game_ChatingCtr } from './subUI/Game_ChatingCtr';
import { Game_CommonTips } from './subUI/Game_CommonTips';
import { Game_ControlBtns } from './subUI/Game_ControlBtns';
import { Game_CuoPaiTips } from './subUI/Game_CuoPaiTips';
import { Game_GameStartInfo } from './subUI/Game_GameStartInfo';
import { Game_InsuranceLayer } from './subUI/Game_InsuranceLayer';
import { Game_Pot } from './subUI/Game_Pot';
import { Game_PublicCards } from './subUI/Game_PublicCards';
import { Game_SeatUI } from './subUI/Game_SeatUI';
import { Game_SelfAction } from './subUI/Game_SelfAction';
import { Game_SelfPreAction } from './subUI/Game_SelfPreAction';
import { Game_TopUI } from './subUI/Game_TopUI';

const { ccclass, property } = _decorator;

@ccclass('GameBase')
export class GameBase extends BaseUI 
{
    @property(Sprite) 
    mBG: Sprite = null;

    mIndex : number = null;
    mMovingShow: MovingShow = null;

    InitParam() 
    {
        this.OffsetTop();
    }
    BindUI() 
    {
        this.mMovingShow = this.node.getComponent(MovingShow);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromRight);
        this.mMovingShow.SetRoot(this.node);
    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_BGSetting.AddListenner(this,(_data)=>
        {
            this.LoadSprite("gamePage","texture/bg/Table" + _data ,(_spriteFrame)=>
            {
                this.mBG.spriteFrame = _spriteFrame;
            })
        });
    }
    LateInit() 
    {
        
    }

    CustmoerDestory() 
    {

    }

    public ShowMoveInAnimation()
    {
        this.mMovingShow.ShowAnimation();
    }


    public InitWithData(_index : number,_seatNum : number)
    {
        this.mIndex = _index;
        this.InitSubView();
        this.InitSeatUI(_seatNum);
        this.InitChatCtr();
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.StopSecondsTimer();
            if(gameData.IsGamePlayingNow() == false)
            {
                return;
            }

            if(_data.buyInsuranceTurn != null)
            {
                gameData.Data_BuyInsuranceTurn.mData = _data.buyInsuranceTurn ;
            }

            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData)
            if(selfPlayer == null)
            {
                return;
            }
            if(selfPlayer.uid != gameData.GetDynamicData().actionUid)
            {
                return;
            }
            this.TryToPlayAudio("YourTurn");
        });

        gameData.Data_S2CCommonWaitStartNotify.AddListenner(this,(_data)=>
        {
            this.StopSecondsTimer();
        })

        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.TryToPlayAudio("Bet");
        })

        gameData.Data_S2CCommonPreFlopRoundNotify.AddListenner(this,(_data)=>
        {
            //发牌音效
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData)
            if(selfPlayer == null)
            {
                return;
            }

            this.TryToPlayAudio("DealCard");
        })

        gameData.Data_S2CCommonFlopRoundNotify.AddListenner(this,(_data)=>
        {
            this.TryToPlayAudio("DealCard");
        })

        gameData.Data_S2CCommonTurnRoundNotify.AddListenner(this,(_data)=>
        {
            this.TryToPlayAudio("DealCard");
        })

        gameData.Data_S2CCommonRiverRoundNotify.AddListenner(this,(_data)=>
        {
            this.TryToPlayAudio("DealCard");
        })

        gameData.Data_S2CCommonCurrentActionNotify.AddListenner(this,(_data)=>
        {
            let selfPlayer = gameData.GetPlayerInfoByUid(LocalPlayerData.Instance.Data_Uid.mData)
            if(selfPlayer == null)
            {
                return;
            }

            if(selfPlayer.uid != _data.actionUid)
            {
                return;
            }
            this.TryToPlayAudio("YourTurn");

        })

        gameData.Data_S2CCommonSettlementNotify.AddListenner(this,(_data)=>
        {
            
        })

        gameData.Data_BuyInsuranceTurn.AddListenner(this,(_data)=>
        {
            if(gameData.IsGamePlayingNow() == false)
            {
                return;
            }
            if(_data.actionUid != LocalPlayerData.Instance.Data_Uid.mData)
            {
                let layer =  this.GetSubView("gamePage","prefab/Game_InsuranceLayer" );
                if(layer != null)
                {
                    let script = layer.getComponent(Game_InsuranceLayer);
                    script.Show(false);
                }
            }
            else
            {
                this.AddSubView("gamePage","prefab/Game_InsuranceLayer" , (_script)=>
                {
                    let tempScript = _script as Game_InsuranceLayer;
                    tempScript.InitWithData(this.mIndex);
                });
            }

        });

        gameData.Data_S2CCommonBuyInsuranceTurnRespNotify.AddListenner(this,(_data)=>
        {
            this.AddSubView("gamePage","prefab/Game_CommonTips" , (_script)=>
            {
                let player = gameData.GetPlayerInfoByUid(_data.actionUid);
                if(player == null)
                {
                    return;
                }
                let temp = _script as Game_CommonTips;
                let amount = Tool.ConvertMoney_S2C(_data.amount) + "";
                let tips = player.nickName + " " + Localization.GetString("00337") + amount;
                temp.ShowTips(tips);
            });


        })

        gameData.Data_S2CCommonInsuranceLotteryNotify.AddListenner(this,(_data)=>
        {
            this.AddSubView("gamePage","prefab/Game_CommonTips" , (_script)=>
            {
                let player = gameData.GetPlayerInfoByUid(_data.actionUid);
                if(player == null)
                {
                    return;
                }
                let temp = _script as Game_CommonTips;
                let amount = Tool.ConvertMoney_S2C(_data.amount) + "";
                let tips = player.nickName + " " + Localization.GetString("00338") + amount;
                temp.ShowTips(tips);
            });


        })
        gameData.Data_S2CCommonJackpotLotteryNotify.AddListenner(this,(_data)=>
        {
            this.AddSubView("gamePage","prefab/Game_CommonTips" , (_script)=>
            {
                let player = gameData.GetPlayerInfoByUid(_data.uid);
                if(player == null)
                {
                    return;
                }
                let temp = _script as Game_CommonTips;
                let amount = Tool.ConvertMoney_S2C(_data.lotteryNum) + "";
                let tips = player.nickName + " " + Localization.GetString("00343") + amount;
                temp.ShowTips(tips);
            });

        })

        gameData.Data_S2CCommonSqueezeRoundNotify.AddListenner(this,(_data)=>
        {
            let localUid = LocalPlayerData.Instance.Data_Uid.mData;

            if(gameData.IsPlayerPlaying(localUid) == false)
            {
                this.AddSubView("gamePage","prefab/Game_CommonTips" , (_script)=>
                {
                    let temp = _script as Game_CommonTips;
                    let tips = Localization.GetString("00344");
                    temp.ShowTips(tips,_data.leftTime);
                });
                return;
            }


            let selfPlayer = gameData.GetPlayerInfoByUid(localUid);
            if(selfPlayer.fold == true)
            {
                this.AddSubView("gamePage","prefab/Game_CommonTips" , (_script)=>
                {
                    let temp = _script as Game_CommonTips;
                    let tips = Localization.GetString("00344");
                    temp.ShowTips(tips,_data.leftTime);
                });
                return;
            }

            this.AddSubView("gamePage","prefab/Game_CuoPaiTips" , (_script)=>
            {
                let tempScript = _script as Game_CuoPaiTips;
                tempScript.InitWithData(_data.leftTime , this.mIndex);
            });

        })

        gameData.Data_S2CCommonSqueezeStartResp.AddListenner(this,(_data)=>
        {
            this.AddSubView("common","prefab/CuoPai" , (_script)=>
            {
                let tempScript = _script as CuoPai;
                tempScript.InitWithData(this.mIndex ,_data.cardInfo  , _data.leftTime );
            });
        })

        

        gameData.Data_S2CCommonActionNotify.AddListenner(this,(_data)=>
        {
            let actType = _data.actionInfo.actionType;
            switch(actType)
            {
                case ActionType.ActionType_AllIn:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_Ante:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_BB:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_Bet:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_Call:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_Check:
                {
                    this.TryToPlayAudio("Check");
                }
                break;
                case ActionType.ActionType_Fold:
                {
                    this.TryToPlayAudio("Fold");
                }
                break;
                case ActionType.ActionType_Raise:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_SB:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
                case ActionType.ActionType_Straddle:
                {
                    this.TryToPlayAudio("Bet");
                }
                break;
            }
        })
    }

    TryToPlayAudio(_audioName : string)
    {
        if(HallData.Instance.Data_MultipeIndex.mData != this.mIndex)
        {
            return;
        }

        AudioManager.Instance.PlayMusicOneShot(_audioName);
    }

    InitSubView()
    {
        this.AddSubView("gamePage","prefab/Game_BottomUI" , (_script)=>
        {
            let tempScript = _script as Game_BottomUI;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_GameStartInfo", (_script)=>
        {
            let tempScript = _script as Game_GameStartInfo;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_Pot", (_script)=>
        {
            let tempScript = _script as Game_Pot;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_PublicCards", (_script)=>
        {
            let tempScript = _script as Game_PublicCards;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_SelfAction", (_script)=>
        {
            let tempScript = _script as Game_SelfAction;
            tempScript.InitWithData(this.mIndex);
        });
        // this.AddSubView("gamePage","prefab/Game_SelfPreAction", (_script)=>
        // {
        //     let tempScript = _script as Game_SelfPreAction;
        //     tempScript.InitWithData(this.mIndex);
        // });

        this.AddSubView("gamePage","prefab/Game_TopUI", (_script)=>
        {
            let tempScript = _script as Game_TopUI;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_ControlBtns", (_script)=>
        {
            let tempScript = _script as Game_ControlBtns;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitSeatUI(_seatCount : number)
    {
        let prefabName = "prefab/Game_SeatUI" + _seatCount;
        this.AddSubView("gamePage",  prefabName  , (_script) =>
        {
            let tempScript = _script as Game_SeatUI;
            tempScript.InitWithData(this.mIndex);
        });
    }

    InitChatCtr()
    {
        this.AddSubView("gamePage","prefab/Game_ChatingCtr" , (_script)=>
        {
            let tempScript = _script as Game_ChatingCtr;
            tempScript.InitWithData(this.mIndex);
        });
    }



}

