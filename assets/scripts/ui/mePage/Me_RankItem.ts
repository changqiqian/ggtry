import { _decorator, Component, Node, Sprite, Label, SpriteFrame, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Me_PrizeItem } from './Me_PrizeItem';
import { Mtt_RegisterFee } from '../mttPage/Mtt_RegisterFee';
import { Localization } from '../../base/Localization';
const { ccclass, property } = _decorator;

@ccclass('Me_RankItem')
export class Me_RankItem extends BaseUI {
    @property(Label)
    mGameName: Label = null;
    @property(Label)
    mGameDate: Label = null;
    @property(Label)
    mGameLevel: Label = null;
    @property(Sprite)
    mRewardSprite: Sprite = null;
    @property(SpriteFrame)
    mRewardSprites: Array<SpriteFrame> = [];
    @property(Label)
    mTroplyLevel: Label = null;
    @property(Node)
    mPrizeNode: Node = null;
    @property(Node)
    mRegisterFee: Node = null;

    _data: any = null;

    InitParam() {}
    BindUI() {}
    RegDataNotify() {}
    LateInit() {}
    UnregDataNotify() {}
    CustmoerDestory() {}
    public InitWithData(_data: any) {
        this._data = _data;
        this.mGameName.string = _data.matchName;
        let endTime = _data.endTime + '';
        this.mGameDate.string = endTime.substring(6, 8) + '/' + endTime.substring(4, 6) + ' ' + endTime.substring(8, 10) + ':' + endTime.substring(10, 12);
        this.mGameLevel.string = _data.ranking;

        //前三名
        if (_data.ranking <= 3) {
            this.mRewardSprite.spriteFrame = this.mRewardSprites[_data.ranking - 1];
        } else {
            //进入奖励圈
            if (_data.isReward) {
                this.mTroplyLevel.node.active = true;
                this.mTroplyLevel.string = _data.ranking;
                this.mRewardSprite.spriteFrame = this.mRewardSprites[3];
                //没进奖励圈
            } else {
                this.mRewardSprite.spriteFrame = this.mRewardSprites[4];
            }
        }

        // 1实物 2金币 3钻石
        if (_data.reward.length > 0) {
            this.mPrizeNode.destroyAllChildren();
        }
        // const testData = {
        //     reward: [
        //         {
        //             describe: '金币 * 1000',
        //             rewardType: 1,
        //         },
        //         {
        //             describe: '99999 * 10',
        //             rewardType: 5,
        //         },
        //     ],
        // };
        // for (let i = 0; i < testData.reward.length; i++) {
        //     this.LoadPrefab('mePage', 'prefab/Me_PrizeItem', (_prefab) => {
        //         let prizeData = testData.reward[i];
        //         let playerItem = instantiate(_prefab);
        //         playerItem.parent = this.mPrizeNode;
        //         let script = playerItem.getComponent(Me_PrizeItem);
        //         script.InitWithData(prizeData);
        //     });
        // }
        for (let i = 0; i < _data.reward.length; i++) {
            this.LoadPrefab('mePage', 'prefab/Me_PrizeItem', (_prefab) => {
                let prizeData = _data.reward[i];
                let playerItem = instantiate(_prefab);
                playerItem.parent = this.mPrizeNode;
                let script = playerItem.getComponent(Me_PrizeItem);
                script.InitWithData(prizeData);
            });
        }
        // 报名费
        let tempScript = this.mRegisterFee.getComponent(Mtt_RegisterFee);
        if (this._data.enterFee == 0) {
            tempScript.ShowNothing(Localization.GetString('00036'));
        } else {
            let regFee = this._data.enterFee.toString() + '+' + this._data.serviceFee.toString();
            tempScript.InitWithData(this._data.enterFeeType, regFee, this._data.enterFeeTicket.nums, this._data.enterFeeTicket.name);
        }
    }
}
