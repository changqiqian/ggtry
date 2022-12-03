import { _decorator, Component, Node } from 'cc';
import { ListViewCtr } from '../../../UiTool/ListViewCtr';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
const { ccclass, property } = _decorator;

@ccclass('Game_RecipeLayer')
export class Game_RecipeLayer  extends ListViewCtr<any>  
{

    @property(MovingShow) 
    mMovingShow: MovingShow = null;

    private mIndex : number = null;


    onEnable()
    {
        super.onEnable();
        this.mMovingShow.ShowAnimation();
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
        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetHideAnimationCallback(()=>
        {
            this.node.active = false;
        })
    }
    
    RegDataNotify()
    {

    }

    public InitWithData(_index : number)
    {
        this.mIndex = _index;
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

    }
}

