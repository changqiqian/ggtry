import { _decorator, Component, Node } from 'cc';
import { UIMgr } from '../../../base/UIMgr';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { BriefRecordItem } from '../../common/BriefRecordItem';
const { ccclass, property } = _decorator;

@ccclass('Game_RecipeLayer')
export class Game_RecipeLayer  extends ListViewCtr<SimpleReplayData>  
{

    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    @property(BaseButton) 
    mCloseBtn: BaseButton = null;

    private mGameId : string = null;
    onEnable()
    {
    
    }

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
            this.mMovingShow.ShowAnimation();
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

    BindUI()
    {
        this.node.on(Node.EventType.TOUCH_END,this.OnClickEmptyBG.bind(this),this);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mMovingShow.SetShowAnimationCallback(()=>
        {
            this.OnDragTop();
        })


        this.mCloseBtn.SetClickCallback(()=>
        {
            this.mMovingShow.HideAnimation();
        })
    }

    RegDataNotify()
    {

    }

    private OnClickEmptyBG()
    {
        this.Show(false);
    }

    public InitWithData(_gameId : string)
    {
        this.mGameId = _gameId;
        this.BindData();
    }

    BindData()
    {

    }

    Refresh()
    {
        for(let i = 0 ; i < 20 ; i++)
        {
            let temp = new SimpleReplayData();
            temp.gameId = "1111111";
            temp.index = i;
    
    
            let myCard1 = new CardInfo();
            myCard1.number =2;
            myCard1.type = 2;
            let myCard2 = new CardInfo();
            myCard2.number =3;
            myCard2.type = 3;
    
            temp.myCards = new Array<CardInfo>();
            temp.myCards.push(myCard1)
            temp.myCards.push(myCard2)
    
            temp.myResult = -30000;
    
            let publicCards = new Array<CardInfo>();
            let pub1 = new CardInfo();
            pub1.number = 5;
            pub1.type = 3;
            let pub2 = new CardInfo();
            pub2.number = 6;
            pub2.type = 3;
            let pub3 = new CardInfo();
            pub3.number = 7;
            pub3.type = 3;
            publicCards.push(pub1);
            publicCards.push(pub2);
            publicCards.push(pub3);
    
            temp.publicCards = publicCards;
    
            let winnerCards = new Array<CardInfo>();
            let wC1 = new CardInfo();
            wC1.number = 8;
            wC1.type = 3;
            let wC2 = new CardInfo();
            wC2.number = 9;
            wC2.type = 3;
            winnerCards.push(wC1);
            winnerCards.push(wC2);
            temp.winnerCards  = winnerCards;
    
            temp.winnerHead = "5";
            temp.winnerName = "test";
            temp.winnerResult = 40000;
            this.mCurrentData.push(temp);
        }

        this.RefreshData();
        this.mIsLastPage = true;
    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(BriefRecordItem).InitWithData(this.mCurrentData[_index]);
    }


}

