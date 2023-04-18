import { _decorator, Component, Label, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { BaseButton } from '../../common/BaseButton';
import { Game_BuyDiamondItem } from './Game_BuyDiamondItem';
import { LocalPlayerData } from '../../../base/LocalPlayerData';
import { GameConfig } from '../../../GameConfig';
import { UIMgr } from '../../../base/UIMgr';
import { Localization } from '../../../base/Localization';
import { NetworkHttp } from '../../../network/NetworkHttp';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Tool } from '../../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Game_BuyDiamond')
export class Game_BuyDiamond extends BaseUI 
{
    @property(BaseButton) 
    mCloseBtn: BaseButton = null;
    @property(Node) 
    mLayout: Node = null;
    @property(Label) 
    mAmount: Label = null;
    @property(BaseButton) 
    mBuyBtn: BaseButton = null;
    mIndex : number;

    mData : Array<DiamondData> = null;
    InitParam()
    {

    }
    BindUI()
    {
        this.mCloseBtn.SetClickCallback(()=>
        {
            this.CloseAsWindow();
        });

        this.mBuyBtn.SetClickCallback(()=>
        {
            let selectedIndex = LocalPlayerData.Instance.Data_DiamondSelectIndex.mData;
            if(selectedIndex<0)
            {
                UIMgr.Instance.ShowToast(Localization.GetString("00425"));
                return;
            }
            let currentData = this.mData[selectedIndex];
            NetworkHttp.Instance.POSTBuyDiamondRequest( currentData.mPrice , currentData.mDiamondAmount);
        });

        this.mData = new Array<DiamondData>();
        let tempData0 = new DiamondData(0,1000000,1000000);
        let tempData1 = new DiamondData(0.9,4500000,5000000);
        let tempData2 = new DiamondData(0.8,16000000,20000000);
        this.mData.push(tempData0);
        this.mData.push(tempData1);
        this.mData.push(tempData2);

        for(let i = 0 ; i < this.mData.length ; i++)
        {
            let current = this.mData[i];
            this.LoadPrefab("gamePage" , "prefab/Game_BuyDiamondItem",(_node)=>
            {
                this.mLayout.addChild(_node);
                let tempScript = _node.getComponent(Game_BuyDiamondItem);
                tempScript.InitWithData(i , LocalPlayerData.Instance.Data_DiamondSelectIndex ,current );
            });
        }
    }
    RegDataNotify()
    {
        LocalPlayerData.Instance.Data_UpdateHallMoney.AddListenner(this , (_data)=>
        {
            let coin = LocalPlayerData.Instance.Data_Coin.mData;
            this.mAmount.string = Tool.ConvertMoney_S2C(coin) + "";
        });
    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        this.mData = null;
    }

    public InitWithData(_index : number)
    {
        this.mIndex = _index;   
        this.ResetUI();
        if(this.CheckInitFlag())
        {
            return;
        } 
        this.BindData();
    }

    BindData()
    {

    }

    ResetUI()
    {
        LocalPlayerData.Instance.Data_DiamondSelectIndex.mData = GameConfig.WrongIndex;
        this.mAmount.string = Localization.GetString("00426");
        NetworkHttp.Instance.GetUserInfoRequest();
    }
}


export class DiamondData
{
    constructor(_discount : number , _price : number , _diamondAmount : number)
    {
        this.mDiscount = _discount;
        this.mPrice = _price;
        this.mDiamondAmount = _diamondAmount;
    }
    mDiscount : number;
    mPrice : number;
    mDiamondAmount : number;
}
