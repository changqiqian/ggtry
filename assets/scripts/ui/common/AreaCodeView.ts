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
        this.mMovingShow.ShowAnimation();
    }

    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mSearchEditBox.placeholder = Localization.GetString("00152");
        this.node.on(Node.EventType.TOUCH_END,this.TouchEmptyBG.bind(this),this);
        for(let i = 0 ; i < GameConfig.AreaCodeList.length ; i++)
        {
            this.LoadPrefab("common" , "prefab/AreaCodeItem"  ,  (_prefab)=>
            {
                let currentData = GameConfig.AreaCodeList[i];
                let tempNode =  instantiate(_prefab);
                this.mContent.addChild(tempNode);
                let countryName = Localization.GetString(currentData.name);
                tempNode.getComponent(AreaCodeItem).InitWithData(countryName,currentData.areaCode , i);
            });
        }

        this.mSearchBtn.SetClickCallback(()=>
        {
            this.ExcutiveSearch();
        });

        this.mMovingShow.SetAnimationType(AnimationShowType.FromBottom);
        this.mMovingShow.SetHideAnimationCallback(()=>
        {
            this.node.active = false;
        })

    }
    RegDataNotify() 
    {
        LoginData.Instance.Data_ShowAreaCodeView.AddListenner(this,(_data)=>
        {
            if(_data == false)
            {
                this.mMovingShow.HideAnimation();
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


    TouchEmptyBG()
    {
        this.mMovingShow.HideAnimation();
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

