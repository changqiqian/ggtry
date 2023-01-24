import { _decorator, Component, Node, ScrollView, UITransform, Size, Label, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { FullScreenWebView } from '../common/FullScreenWebView';
import { InsertWebView } from '../common/InsertWebView';
import { UIMgr } from '../../base/UIMgr';
import { Tool } from '../../Tool';
const { ccclass, property } = _decorator;

@ccclass('Me_Main')
export class Me_Main extends BaseUI {

    @property(BaseButton)
    mAddBtn: BaseButton = null;
    @property(Label)
    mMoney: Label = null;

    @property(BaseButton)
    mMsgBtn: BaseButton = null;
    @property(BaseButton)
    mProfitBtn: BaseButton = null;
    @property(BaseButton)
    mSettingBtn: BaseButton = null;
    @property(BaseButton)
    mGameRecordBtn: BaseButton = null;


    InitParam() 
    {

    }
    BindUI() 
    {
        this.mAddBtn.SetClickCallback(() => 
        {

        });

        this.mMsgBtn.SetClickCallback(() => 
        {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Message');
        });

       
        this.mProfitBtn.SetClickCallback(() => 
        {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Record');
        });

        this.mGameRecordBtn.SetClickCallback(() => 
        {
            //UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Rank');
        });

        this.mSettingBtn.SetClickCallback(() =>
        {
            UIMgr.Instance.ShowWindow('mePage', 'prefab/Me_SettingWindow');
        });


    }
    RegDataNotify() 
    {
        LocalPlayerData.Instance.Data_Coin.AddListenner(this,(_data)=>
        {
            this.mMoney.string = Tool.ConvertMoney_S2C(_data) + "";
        });
    }
    LateInit() 
    {
        //this.EnableScroll();
    }

    CustmoerDestory() 
    {

    }

    // EnableScroll() 
    // {
    //     let scrollViewContentTransform = this.mScrollView.content.getComponent(UITransform);
    //     let scrollViewHeight = scrollViewContentTransform.height;
    //     let bottomNode = this.FindScrollViewBottomChild();
    //     let bottomNodeY = bottomNode.position.y;
    //     let bottomNodeHeight = bottomNode.getComponent(UITransform).height;
    //     bottomNodeY = Math.abs(bottomNodeY);

    //     let requireScrollHeight = bottomNodeY + bottomNodeHeight;
    //     if (requireScrollHeight > scrollViewHeight) 
    //     {
    //         let finalSize = new Size(scrollViewContentTransform.width, requireScrollHeight);
    //         scrollViewContentTransform.setContentSize(finalSize);
    //         this.mScrollView.vertical = true;
    //     } 
    //     else 
    //     {
    //         this.mScrollView.vertical = false;
    //     }
    // }

    // FindScrollViewBottomChild(): Node 
    // {
    //     let finalPosY = 0;
    //     let finalNode = null;
    //     for (let i = 0; i < this.mScrollView.content.children.length; i++) 
    //     {
    //         let current = this.mScrollView.content.children[i];
    //         let posY = current.position.y;
    //         if (finalPosY > posY) 
    //         {
    //             finalPosY = posY;
    //             finalNode = current;
    //         }
    //     }
    //     return finalNode;
    // }
}
