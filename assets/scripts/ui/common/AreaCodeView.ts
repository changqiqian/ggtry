import { _decorator, Component, Node, EditBox, Prefab, instantiate } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Localization } from '../../base/Localization';
import { LocalPlayerData } from '../../base/LocalPlayerData';
import { GameConfig } from '../../GameConfig';
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



    InitParam() 
    {
        LocalPlayerData.GetInstance().Data_AreaCode = 0;
    }
    BindUI() 
    {
        this.node.on(Node.EventType.TOUCH_END,this.HideAnm.bind(this),this);
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

    }
    RegDataNotify() 
    {
        LocalPlayerData.GetInstance().AddListener("Data_AreaCode",(_current , _before)=>
        {
            if(_before != null)
            {
                this.HideAnm();
            }
        },this);
    }
    LateInit() 
    {

    }
    UnregDataNotify() 
    {
        LocalPlayerData.GetInstance().RemoveListenerByTarget(this);
    }
    CustmoerDestory() 
    {

    }

    public Show(_val : boolean)
    {
        if(_val)
        {
            this.ShowAnm();
        }
        else
        {
            this.HideAnm();
        }
    }

    ShowAnm()
    {
        this.node.active = true;
    }

    HideAnm()
    {
        this.node.active = false;
    }




}

