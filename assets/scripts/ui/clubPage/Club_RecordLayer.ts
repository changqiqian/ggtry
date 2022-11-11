import { _decorator, Component, Node, Label, ScrollView } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from '../../UiTool/ListView';
import { BaseButton } from '../common/BaseButton';
import { ToggleBtn } from '../common/ToggleBtn';
import { HallData } from '../hall/HallData';
const { ccclass, property } = _decorator;

@ccclass('Club_RecordLayer')
export class Club_RecordLayer extends BaseUI 
{
    @property(BaseButton) 
    mBackBtn: BaseButton = null;
    @property(Node) 
    mGameTypeLayout: Node = null;
    @property(Node) 
    mCurrencyLayout: Node = null;
    @property(Node) 
    mDateLayout: Node = null;
    @property(Label) 
    mProfit: Label = null;
    @property(Label) 
    mGameNum: Label = null;
    @property(Label) 
    mVPIP: Label = null;
    @property(ListView) 
    mListView: ListView = null;
    InitParam()
    {
        this.AutoAdaptMultipleTableUI();
    }
    BindUI()
    {
        this.mBackBtn.SetClickCallback(()=>
        {
            this.Show(false);
        });

        for(let i = 0 ; i < this.mGameTypeLayout.children.length ; i++)
        {
            let currentToggle = this.mGameTypeLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordSubPage , i);
        }
        for(let i = 0 ; i < this.mCurrencyLayout.children.length ; i++)
        {
            let currentToggle = this.mCurrencyLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordCoinType, i);
        }
        for(let i = 0 ; i < this.mDateLayout.children.length ; i++)
        {
            let currentToggle = this.mDateLayout.children[i].getComponent(ToggleBtn);
            currentToggle.SetDataNotify(HallData.Instance.Data_ClubRecordDateType, i);
        }


        this.mListView.SetRenderCallback(this.RenderEvent.bind(this));
        this.mListView.SetDragTop(this.OnDragTop.bind(this));

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

    RenderEvent(_item: Node , _index: number)
    {

    }

    OnDragTop() 
    {

    }
}

