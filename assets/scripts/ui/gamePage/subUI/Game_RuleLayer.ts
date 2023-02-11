import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { AnimationShowType, MovingShow } from '../../../UiTool/MovingShow';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { ToggleBtn } from '../../common/ToggleBtn';
import { Game_RuleSubLayer } from '../GameData';
const { ccclass, property } = _decorator;

@ccclass('Game_RuleLayer')
export class Game_RuleLayer extends BaseUI 
{
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    @property(Node) 
    mToggleGroup: Node = null;
    @property(Node) 
    mSubLayer: Node = null;
    
    @property(Node) 
    mBG: Node = null;
    @property(Node) 
    mCombinationList: Node = null;
    @property(Node) 
    mInsuranceList: Node = null;

    private mIndex : number = null;
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

    InitParam()
    {

    }
    BindUI()
    {
        this.AddTouchCloseEvent(this.mBG);
        this.mMovingShow.SetAnimationType(AnimationShowType.FromLeft);
        this.mMovingShow.SetRoot(this.node);

    }
    RegDataNotify()
    {

    }
    LateInit()
    {
        

    }
    CustmoerDestory()
    {

    }

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.HideAll();
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_RuleSubLayer.mData = Game_RuleSubLayer.Combination;

        for(let i = 0 ; i < this.mToggleGroup.children.length ; i++)
        {
            let current = this.mToggleGroup.children[i];
            let toggle = current.getComponent(ToggleBtn);
            toggle.SetDataNotify(gameData.Data_RuleSubLayer, i);
        }

        gameData.Data_RuleSubLayer.AddListenner(this,(_data)=>
        {
            this.HideAll();
            
            if(_data == Game_RuleSubLayer.Combination)
            {
                this.mCombinationList.active = true;
            }
            else if(_data == Game_RuleSubLayer.Insurance)
            {
                this.mInsuranceList.active = true;
            }
        });
    }

    HideAll()
    {
        this.mCombinationList.active = false;
        this.mInsuranceList.active = false;
    }
}

