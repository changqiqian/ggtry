import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { MeassureItem } from './MeassureItem';
import { ProgressSlider } from './ProgressSlider';
const { ccclass, property } = _decorator;

@ccclass('MeassureSlider')
export class MeassureSlider extends BaseUI 
{
    @property(Node) 
    mMeassureNode: Node = null;
    @property(ProgressSlider) 
    mProgressSlider: ProgressSlider = null;
    mValues : Array<number>;

    mOnValueChange : Function = null;
    onEnable()
    {
        this.Reset();
    }

    InitParam()
    {

    }
    BindUI()
    {

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

    public InitWithData(_titles : Array<string> , _values : Array<number> , _onValueChange : Function)
    {
        if(this.mMeassureNode.children.length != _titles.length)
        {
            console.log("MeassureSlider _titles长度不正确");
            return;
        }

        if(this.mMeassureNode.children.length != _values.length)
        {
            console.log("MeassureSlider _values长度不正确");
            return;
        }
        this.mOnValueChange = _onValueChange;
        this.mValues = _values;
        for(let i = 0 ; i < this.mMeassureNode.children.length ; i++)
        {
            let currentItem = this.mMeassureNode.children[i].getComponent(MeassureItem);   
            let currentTitle = _titles[i];
            currentItem.SetTitle(currentTitle);
        }

        this.mProgressSlider.SetDragCallback(this.OnDragMove.bind(this));
        this.mProgressSlider.SetEndCallback(this.OnDragEnd.bind(this));
        this.Reset();
    }

    OnDragEnd(_value)
    {
        let currentIndex = this.CalculateCurrentIndex(_value);
        this.HighLightItem(currentIndex);
        let value = this.GetPercentByIndex(currentIndex);
        this.mProgressSlider.SetPercent(value);
        if(this.mOnValueChange)
        {
            this.mOnValueChange(this.mValues[currentIndex]);
        }
    }

    OnDragMove(_value)
    {
        let currentIndex = this.CalculateCurrentIndex(_value);
        this.HighLightItem(currentIndex);
    }

    Reset()
    {
        this.mProgressSlider.SetPercent(0);
        this.HighLightItem(0);
        if(this.mOnValueChange)
        {
            this.mOnValueChange(this.mValues[0]);
        }
    }

    HighLightItem(_index : number)
    {
        for(let i = 0 ; i < this.mMeassureNode.children.length ; i++)
        {
            let currentItem = this.mMeassureNode.children[i].getComponent(MeassureItem);   
            currentItem.SetHighLight(i == _index);
        }
    }

    GetValue() : number
    {
        let currentIndex = this.CalculateCurrentIndex(this.mProgressSlider.GetPercent());
        return this.mValues[currentIndex];
    }

    GetPercentByIndex(_index : number) : number
    {
        let childrenCount = this.mMeassureNode.children.length;
        let spaceCount = childrenCount - 1;
        let sapceWidth = 1 / spaceCount;
        let percent = _index * sapceWidth;
        return percent;
    }

    CalculateCurrentIndex(_percent : number) : number
    {
        let childrenCount = this.mMeassureNode.children.length;
        let spaceCount = childrenCount - 1;
        let sapceWidth = 1 / spaceCount;
        let halfSapce = sapceWidth/2;
        
        for(let i = 0 ; i < childrenCount ; i++)
        {
            let baseValue = i * sapceWidth;
            let bottom = baseValue - halfSapce;
            let top = baseValue + halfSapce;
   
            if(_percent > bottom && _percent <= top )
            {
                return i;
            }
        }

        return 0;
    }

    
}

