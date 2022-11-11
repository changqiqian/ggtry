import { _decorator, Component, Node, ScrollView, UITransform, Size, Label, sys } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { BaseButton } from '../common/BaseButton';
import { FullScreenWebView } from '../common/FullScreenWebView';
import { InsertWebView } from '../common/InsertWebView';
import { UIMgr } from '../../base/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('Me_Main')
export class Me_Main extends BaseUI {
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
    InitParam() {}
    BindUI() {
        this.mBankBtn.SetClickCallback(() => {
            if (sys.isBrowser) {
                UIMgr.Instance.ShowLayer('common', 'prefab/InsertWebView', true, (_script) => {
                    let tempScript = _script as InsertWebView;
                    let param = '/?userId=' + LocalPlayerData.Instance.Data_Uid.mData + '&token=' + GameConfig.LOGIN_TOKEN + '&apiUrl=http://' + GameConfig.UsingIp;
                    tempScript.SetUrl(GameConfig.WebberAddr, param);
                });
            } else {
                UIMgr.Instance.ShowLayer('common', 'prefab/FullScreenWebView', true, (_script) => {
                    let tempScript = _script as FullScreenWebView;
                    let param = '/?userId=' + LocalPlayerData.Instance.Data_Uid.mData + '&token=' + GameConfig.LOGIN_TOKEN + '&apiUrl=http://' + GameConfig.UsingIp;
                    tempScript.SetUrl(GameConfig.WebberAddr, param);
                });
            }
        });
        this.mBankBtn.SetProtectDoubleClick(true, 1);

        this.mMsgBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Message');
        });

        this.mTableBtn.SetClickCallback(() => {
            if (sys.isBrowser) {
                UIMgr.Instance.ShowLayer('common', 'prefab/InsertWebView', true, (_script) => {
                    let tempScript = _script as InsertWebView;
                    let param = '/manage-table';
                    tempScript.SetUrl(GameConfig.WebberAddr, param);
                });
            } else {
                UIMgr.Instance.ShowLayer('common', 'prefab/FullScreenWebView', true, (_script) => {
                    let tempScript = _script as FullScreenWebView;
                    let param = '/manage-table';
                    tempScript.SetUrl(GameConfig.WebberAddr, param);
                });
            }
        });

        this.mQuestBtn.SetClickCallback(() => {});

        this.mProfitBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Record');
        });

        this.mGameRecordBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Rank');
        });

        this.mSettingBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowWindow('mePage', 'prefab/Me_SettingWindow');
        });

        this.mAgentBtn.SetClickCallback(() => {
            UIMgr.Instance.ShowLayer('mePage', 'prefab/Me_Proxy');
        });

        this.mServiceBtn.SetClickCallback(() => {});
    }
    RegDataNotify() {}
    LateInit() {
        this.EnableScroll();
    }

    CustmoerDestory() {}

    EnableScroll() {
        let scrollViewContentTransform = this.mScrollView.content.getComponent(UITransform);
        let scrollViewHeight = scrollViewContentTransform.height;
        let bottomNode = this.FindScrollViewBottomChild();
        let bottomNodeY = bottomNode.position.y;
        let bottomNodeHeight = bottomNode.getComponent(UITransform).height;
        bottomNodeY = Math.abs(bottomNodeY);

        let requireScrollHeight = bottomNodeY + bottomNodeHeight;
        if (requireScrollHeight > scrollViewHeight) {
            let finalSize = new Size(scrollViewContentTransform.width, requireScrollHeight);
            scrollViewContentTransform.setContentSize(finalSize);
            this.mScrollView.vertical = true;
        } else {
            this.mScrollView.vertical = false;
        }
    }

    FindScrollViewBottomChild(): Node {
        let finalPosY = 0;
        let finalNode = null;
        for (let i = 0; i < this.mScrollView.content.children.length; i++) {
            let current = this.mScrollView.content.children[i];
            let posY = current.position.y;
            if (finalPosY > posY) {
                finalPosY = posY;
                finalNode = current;
            }
        }
        return finalNode;
    }
}
