import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_Menu } from './Game_Menu';
const { ccclass, property } = _decorator;

@ccclass('Game_TopUI')
export class Game_TopUI extends BaseUI 
{
    @property(BaseButton) 
    mMenuBtn: BaseButton = null;
    @property(BaseButton) 
    mObBtn: BaseButton = null;

    @property(Label) 
    mAmount: Label = null;
    @property(Node) 
    mMicOff: Node = null;
    @property(Node) 
    mMicOn: Node = null;
    @property(Node) 
    mMicDisable: Node = null;
    private mIndex : number = null;
    InitParam() 
    {

    }
    BindUI() 
    {
        
        this.mMenuBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_Menu",true,(_script)=>
            {
                let tempScript = _script as Game_Menu;
                tempScript.InitWithData(this.mIndex);
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });
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
        this.mIndex = _index;
    }
}

