import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { UIMgr } from '../../../base/UIMgr';
import { BaseButton } from '../../common/BaseButton';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_ChattingLayer } from './Game_ChattingLayer';
import { Game_MatchInfoLayer } from './Game_MatchInfoLayer';
import { Game_RecipeLayer } from './Game_RecipeLayer';
const { ccclass, property } = _decorator;

@ccclass('Game_BottomUI')
export class Game_BottomUI extends BaseUI 
{
    @property(BaseButton) 
    mInfoBtn: BaseButton = null;
    @property(BaseButton) 
    mHistoryBtn: BaseButton = null;
    @property(BaseButton) 
    mChatBtn: BaseButton = null;

    @property(BaseButton) 
    mTestBtn: BaseButton = null;

    private mIndex : number = null;
    InitParam() 
    {
        
    }
    BindUI() 
    {
        this.mInfoBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_MatchInfoLayer",true,(_script)=>
            {
                let tempScript = _script as Game_MatchInfoLayer;
                tempScript.InitWithData(this.mIndex);
                tempScript.Refresh();
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });

        this.mHistoryBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_RecipeLayer",true,(_script)=>
            {
                let tempScript = _script as Game_RecipeLayer;
                tempScript.InitWithData(this.mIndex);
                tempScript.Refresh();
            },MultipleTableCtr.GetUiTag(this.mIndex),this.mIndex.toString());
        });

        this.mChatBtn.SetClickCallback(()=>
        {
            UIMgr.Instance.ShowLayer("gamePage","prefab/Game_ChattingLayer",true,(_script)=>
            {
                let tempScript = _script as Game_ChattingLayer;
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

