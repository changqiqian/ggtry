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
        Network.GetInstance().SendMyMttRank(this.mCurrentPage, null);
    }
    RegDataNotify() {
        HallData.GetInstance().AddListener(
            'Data_MeRankData',
            (_current, _before) => {
                console.log('有资料变化罗');
                let itemList = _current.resultList;
                if (!itemList || itemList.length === 0) {
                    this.mIsLastPage = true;
                    return;
                }

                for (let i = 0; i < itemList.length; i++) {
                    let currentData = itemList[i];
                    let index = this.mCurrentData.findIndex((_item) => _item.matchId === currentData.matchId);
                    if (index < 0) {
                        //去重
                        this.mCurrentData.push(currentData);
                        this.LoadPrefab('mePage', 'prefab/Me_RankItem', (_prefab) => {
                            let playerItem = instantiate(_prefab);
                            this.mScrollView.content.addChild(playerItem);
                            let script = playerItem.getComponent(Me_RankItem);
                            script.InitWithData(currentData);
                        });
                    }
                }
            },
            this
        );
    }
    LateInit() {}
    UnregDataNotify() {}
    CustmoerDestory() {}

    Refresh() {
        this.mCurrentPage++;
        Network.GetInstance().SendMyMttRank(this.mCurrentPage, null);
    }

    OnDragBottom() {
        if (this.mIsLastPage) {
            return;
        }
        this.Refresh();
    }
}
