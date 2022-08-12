import { _decorator, Component, Node, ScrollView, UITransform, Size, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { FullScreenWebView } from '../common/FullScreenWebView';
import { InsertWebView } from '../common/InsertWebView';
const { ccclass, property } = _decorator;

@ccclass('Me_Main')
export class Me_Main extends BaseUI 
{
    @property(ScrollView) 
    mScrollView: ScrollView = null;
    @property(BaseButton) 
    mBankBtn: BaseButton = null;
    @property(Label) 
    mCoin: Label = null;
    @property(Label) 
    mDiamond: Label = null;
    @property(BaseButton) 
    mMsgBtn: BaseButton = null;
    @property(BaseButton) 
    mTableBtn: BaseButton = null;
    @property(BaseButton) 
    mQuestBtn: BaseButton = null;
    @property(BaseButton) 
    mProfitBtn: BaseButton = null;
    @property(BaseButton) 
    mGameRecordBtn: BaseButton = null;
    @property(BaseButton) 
    mSettingBtn: BaseButton = null;
    @property(BaseButton) 
    mAgentBtn: BaseButton = null;
    @property(BaseButton) 
    mServiceBtn: BaseButton = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        this.mBankBtn.SetClickCallback(()=>
        {
            this.ShowLayer("common","prefab/FullScreenWebView",true , (_script)=>
            {
                let tempScript = _script as FullScreenWebView;
                let param = "/?userId=" + LocalPlayerData.GetInstance().Data_Uid + "&token=" + GameConfig.LOGIN_TOKEN;
                tempScript.SetUrl("http://www.m.jiayoux.com",param);
            });
        });
        this.mBankBtn.SetProtectDoubleClick(true,1);

        this.mMsgBtn.SetClickCallback(()=>
        {

        });

        this.mTableBtn.SetClickCallback(()=>
        {

        });

        this.mQuestBtn.SetClickCallback(()=>
        {

        });

        this.mProfitBtn.SetClickCallback(()=>
        {

        });

        this.mGameRecordBtn.SetClickCallback(()=>
        {

        });

        this.mSettingBtn.SetClickCallback(()=>
        {

        });

        this.mAgentBtn.SetClickCallback(()=>
        {

        });

        this.mServiceBtn.SetClickCallback(()=>
        {

        });
    }
    RegDataNotify() 
    {
        LocalPlayerData.GetInstance().AddListener("Data_Coin",(_current , _before)=>
        {
            this.mCoin.string = _current;
        },this);

        LocalPlayerData.GetInstance().AddListener("Data_Diamond",(_current , _before)=>
        {
            this.mDiamond.string = _current;
        },this);
    }
    LateInit() 
    {
        this.EnableScroll();
    }
    UnregDataNotify() 
    {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

    EnableScroll()
    {
        let scrollViewContentTransform = this.mScrollView.content.getComponent(UITransform);
        let scrollViewHeight = scrollViewContentTransform.height;
        let bottomNode = this.FindScrollViewBottomChild();
        let bottomNodeY = bottomNode.position.y;
        let bottomNodeHeight = bottomNode.getComponent(UITransform).height;
        bottomNodeY = Math.abs(bottomNodeY);
        
        let requireScrollHeight = bottomNodeY + bottomNodeHeight;
        if(requireScrollHeight > scrollViewHeight)
        {
            let finalSize = new Size(scrollViewContentTransform.width,requireScrollHeight);
            scrollViewContentTransform.setContentSize(finalSize);
            this.mScrollView.vertical = true;
        }
        else
        {
            this.mScrollView.vertical = false;
        }

    }

    FindScrollViewBottomChild() : Node
    {
        let finalPosY = 0;
        let finalNode = null;
        for(let i = 0 ; i < this.mScrollView.content.children.length ; i++)
        {
            let current = this.mScrollView.content.children[i];
            let posY = current.position.y;
            if(finalPosY > posY)
            {
                finalPosY = posY;
                finalNode = current;
            }
        }
        return finalNode;
    }
}

