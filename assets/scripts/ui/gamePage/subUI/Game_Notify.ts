import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { UIMgr } from '../../../base/UIMgr';
import { Game_BuyInApprove } from './Game_BuyInApprove';
const { ccclass, property } = _decorator;

@ccclass('Game_Notify')
export class Game_Notify extends BaseUI 
{
    @property(BaseButton) 
    mFriendNotifyBtn: BaseButton = null;
    @property(BaseButton) 
    mBuyInNotifyBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mFriendNotifyBtn.SetClickCallback(()=>
        {

        });
        this.mBuyInNotifyBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowWindow("gamePage","prefab/Game_BuyInApprove",true,(_script)=>
            {
                let temp = _script as Game_BuyInApprove;
                temp.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });

        this.mFriendNotifyBtn.Show(false);
        this.mBuyInNotifyBtn.Show(false);
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
        gameData.Data_HTTPBuyInRequest.AddListenner(this,(_data)=>
        {
            if(_data.data  == null)
            {
                this.mBuyInNotifyBtn.Show(false);
                return;
            }

            if(_data.data.length == 0)
            {
                this.mBuyInNotifyBtn.Show(false);
                return;
            }
            this.mBuyInNotifyBtn.Show(true);
        });

    }
}

