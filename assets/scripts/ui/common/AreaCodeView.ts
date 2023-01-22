import { _decorator, Component, Node, EditBox, Prefab, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
import { AnimationShowType, MovingShow } from '../../UiTool/MovingShow';
import { LoginData } from '../login/LoginData';
import { AreaCodeItem } from './AreaCodeItem';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('AreaCodeView')
export class AreaCodeView extends BaseUI {

    @property(Node) 
    mBG: Node = null;
    @property(EditBox) 
    mSearchEditBox: EditBox = null;
    @property(BaseButton) 
    mSearchBtn: BaseButton = null;
    @property(Node) 
    mContent: Node = null;
    @property(MovingShow) 
    mMovingShow: MovingShow = null;
    onEnable()
    {
        this.mSearchEditBox.string = "";
        this.ExcutiveSearch();
    }

    InitParam() 
    {
        
    }
    BindUI() 
    {

        this.MaxScreen(this.mBG);
        this.AddTouchCloseEvent(this.mBG);
        this.mSearchEditBox.placeholder = Localization.GetString("00152");
        this.AddTouchCloseEvent(this.node);

        this.mSearchBtn.SetClickCallback(()=>
        {
            this.ExcutiveSearch();
        });

        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetRoot(this.node);
        this.mMovingShow.SetShowAnimationCallback(()=>
        {
            for(let i = 0 ; i < GameConfig.AreaCodeList.length ; i++)
            {
                this.LoadPrefab("common" , "prefab/AreaCodeItem"  ,  (_node)=>
                {
                    let currentData = GameConfig.AreaCodeList[i];
                    this.mContent.addChild(_node);
                    let countryName = Localization.GetString(currentData.name);
                    _node.getComponent(AreaCodeItem).InitWithData(countryName,currentData.areaCode , i);
                });
            }
        });

    }
    RegDataNotify() 
    {
        LoginData.Instance.Data_ShowAreaCodeView.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                this.Show(false);
            }
        })
    }
    LateInit() 
    {

    }

    CustmoerDestory() 
    {

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

    ExcutiveSearch()
    {
        for(let i = 0 ; i < this.mContent.children.length ; i++)
        {
            let current = this.mContent.children[i].getComponent(AreaCodeItem);
            if(this.mSearchEditBox.string == "")
            {
                current.Show(true);
            }
            else
            {
                let contain = current.ContainTargetContent(this.mSearchEditBox.string);
                current.Show(contain);
            }
        }
    }

}

