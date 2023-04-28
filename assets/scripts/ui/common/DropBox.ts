import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BaseData } from '../../base/BaseData';
import { BaseUI } from '../../base/BaseUI';
import { BaseButton } from './BaseButton';
import { DropBoxItem } from './DropBoxItem';
const { ccclass, property } = _decorator;

@ccclass('DropBox')
export class DropBox extends BaseUI 
{
    @property(Node) 
    mBG: Node = null;
    @property(BaseButton) 
    mBtn: BaseButton = null;
    @property(Node) 
    mDropContainer: Node = null;
    @property(Label) 
    mTitle: Label = null;
    @property(Node) 
    mDropDown: Node = null;

    mDataNotify : BaseData<number> = null;
    mTitles : Array<string> ;
    
    InitParam()
    {

    }
    BindUI()
    {
        this.MaxScreen(this.mBG);
        this.mBG.on(Node.EventType.TOUCH_END,()=>
        {
            this.Expand(false);
        });

        this.mBtn.SetClickCallback(()=>
        {
            this.Expand(true);
        });

        this.Expand(false);
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }
    CustmoerDestory()
    {
        if(this.mDataNotify != null)
        {
            this.mDataNotify.RemoveListennerByTarget(this);
            this.mDataNotify = null;
        }

        this.mTitles = null;
    }

    public Expand(_value : boolean)
    {
        this.mBG.active = _value;
        this.mDropContainer.active = _value;
    }

    public InitWithData(_baseData : BaseData<number> , _custmoerData : number , _titles : Array<string>)
    {
        _baseData.RemoveListennerByTarget(this);
        _baseData.mData = _custmoerData;
        this.mDataNotify = _baseData;
        this.mTitles = _titles;
        this.mDataNotify.AddListenner(this , this.NotifyCallback.bind(this));
        this.CreateItem();
    }

    CreateItem()
    {
        for(let i = 0 ; i < this.mTitles.length ; i++)
        {
            this.LoadPrefab("DropBoxItem" , DropBoxItem.Bunddle,DropBoxItem.PrefabPath , (_node)=>
            {
                let currentTitle = this.mTitles[i];
                this.mDropDown.addChild(_node);
                _node.getComponent(DropBoxItem).InitWithData(this.mDataNotify , i , currentTitle);
            })
        }
    }

    NotifyCallback(_val)
    {
        this.mTitle.string = this.mTitles[_val];
        this.mBtn.SetTitle(this.mTitles[_val]);
    }
}

