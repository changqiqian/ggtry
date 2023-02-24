import { _decorator, Component, Node } from 'cc';
import { UIMgr } from '../../../base/UIMgr';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { BaseButton } from '../../common/BaseButton';
import { BriefRecordItem } from '../../common/BriefRecordItem';
const { ccclass, property } = _decorator;

@ccclass('Game_RecipeLayer')
export class Game_RecipeLayer  extends ListViewCtr<SimpleReplay>  
{

    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    @property(Node) 
    mBG: Node = null;

    @property(BaseButton) 
    mCloseBtn: BaseButton = null;

    private mGameId : string = null;

    onDisable()
    {
        UIMgr.Instance.DeleteUIByTarget(this);
    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.node.active = true;
        }
        else
        {
            this.mMovingShow.HideAnimation();
        }
    }

    BindUI()
    {
        this.AddTouchCloseEvent(this.mBG);
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

    public InitWithData(_gameId : string)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mGameId = _gameId;
        this.BindData();
    }

    BindData()
    {

    }

    Refresh()
    {

    }

    RenderEvent(_item: Node , _index: number)
    {
        _item.getComponent(BriefRecordItem).InitWithData(this.mCurrentData[_index]);
    }


}

