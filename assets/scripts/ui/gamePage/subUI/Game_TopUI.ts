import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { CommonNotify } from '../../../CommonNotify';
import { NetworkSend } from '../../../network/NetworkSend';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_Menu } from './Game_Menu';
import { Game_ObLayer } from './Game_ObLayer';
const { ccclass, property } = _decorator;

@ccclass('Game_TopUI')
export class Game_TopUI extends BaseUI 
{
    @property(BaseButton) 
    mMenuBtn: BaseButton = null;
    @property(BaseButton) 
    mObBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mMenuBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_Menu",true,(_script)=>
            {
                let tempScript = _script as Game_Menu;
                tempScript.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
        
        this.mObBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_ObLayer",true,(_script)=>
            {
                let tempScript = _script as Game_ObLayer;
                tempScript.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
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

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;


        gameData.Data_S2CCommonGetObSizeResp.AddListenner(this,(_data)=>
        {
            this.mObBtn.SetTitle(_data.obSize + "");
        })

        gameData.Data_S2CCommonEnterGameResp.AddListenner(this,(_data)=>
        {
            this.StartSecondsTimer(1000000,1,()=>
            {
                let seconds = this.GetRestSeconds();
                if(seconds%30 == 0)
                {
                    let msgID = gameData.OBSizeMsgId();
                    NetworkSend.Instance.GetObNum(msgID , gameStruct.mGameId);
                }
            })
        });
        CommonNotify.Instance.Data_SocketClose.AddListenner(this,(_data)=>
        {
            if(_data == true)
            {
                this.StopSecondsTimer();
            }

        });
    }
}

