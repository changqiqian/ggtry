import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { HallData, Me_MessageSubPage } from '../hall/HallData';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';


const { ccclass, property } = _decorator;

@ccclass('Me_Message')
export class Me_Message extends BaseUI {
    @property(BaseButton)
    mBackBtn: BaseButton = null;
    @property(Node)
    mLayout: Node = null;
    @property(Node)
    mAnnouncementDot: Node = null;
    @property(Node)
    mMessageDot: Node = null;
    @property(ScrollView)
    mScrollView: ScrollView = null;

    mCurrentPage: number = 0;
    mPageCount: number = 20;
    mIsLastPage: boolean = false;
    mCurrentData: Array<any>;

    onEnable() 
    {
        HallData.GetInstance().Data_MeMessageSubPage = Me_MessageSubPage.Announcement;
    }

    InitParam() {}
    BindUI() {
        this.mBackBtn.SetClickCallback(() => {
            this.Show(false);
        });

        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);

        for (let i = this.mLayout.children.length - 1; i >= 0; i--) {
            let current = this.mLayout.children[i].getComponent(ToggleBtn);
            let title = '';
            switch (i) {
                case Me_MessageSubPage.Announcement:
                    title = Localization.GetString('01000');
                    break;
                case Me_MessageSubPage.Message:
                    title = Localization.GetString('01001');
                    break;
            }
            current.SetTitle(title);
            current.SetDataNotify(HallData.GetInstance(), 'Data_MeMessageSubPage', i);
        }

    }
    RegDataNotify() {
       
        HallData.GetInstance().AddListener(
            'Data_MeMessageSubPage',
            (_current, _before) => {
                console.log('点击:' + HallData.GetInstance().Data_MeMessageSubPage);
                this.ResetPage();
                this.Refresh();
            },
            this
        );
        
    }
    LateInit() {}
    CustmoerDestory() {}
    Refresh() {
        this.mCurrentPage++;
    }

    OnDragBottom() {
        if (this.mIsLastPage) {
            return;
        }
        this.Refresh();
    }

    ResetPage() {
        this.mIsLastPage = false;
        this.mCurrentData = new Array<any>();
        this.mCurrentPage = 0;
        this.mScrollView.content.destroyAllChildren();
    }
}
