import { _decorator, Component, Node, ScrollView, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from '../common/BaseButton';
import { Network } from '../../network/Network';
import { HallData } from '../hall/HallData';
import { Me_RankItem } from './Me_RankItem';
const { ccclass, property } = _decorator;

@ccclass('Me_Rank')
export class Me_Rank extends BaseUI {
    @property(BaseButton)
    mBackBtn: BaseButton = null;
    @property(ScrollView)
    mScrollView: ScrollView = null;

    mCurrentPage: number = 0;
    mPageCount: number = 20;
    mIsLastPage: boolean = false;
    mCurrentData: Array<any> = [];

    InitParam() {}
    BindUI() {
        this.mScrollView.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.OnDragBottom, this);

        this.mBackBtn.SetClickCallback(() => {
            this.Show(false);
        });
    }
    RegDataNotify() {
       
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
}
