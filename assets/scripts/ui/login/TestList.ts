import { _decorator, Component, Node, Label } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import ListView from '../../UiTool/ListView';
import { BaseButton } from '../common/BaseButton';
import { TestItem } from './TestItem';
const { ccclass, property } = _decorator;

@ccclass('TestList')
export class TestList extends BaseUI 
{
    @property(Label)
    mLabel: Label = null;
    @property(ListView)
    mList: ListView = null;

    @property(BaseButton)
    mBtn: BaseButton = null;

    mData : Array<number>;
    InitParam()
    {
        this.mData = new Array<number>();
        for (let n: number = 0; n < 10; n++) 
        {
            this.mData.push(n);
        }

    }
    BindUI()
    {
        this.mList.SetRenderCallback(this.RenderEvent.bind(this));

        this.mList.SetDragBottom(()=>
        {
            //下拉刷新
            console.log("DragBottom")
            for (let n: number = 0; n < 10; n++) 
            {
                this.mData.push(n+100);
            }
            this.mList.numItems = this.mData.length;
        });

        this.mBtn.SetClickCallback(()=>
        {
            //删除数据
            let deleteIndex = 5;
            this.mData.splice(deleteIndex, 1);
            this.mList.numItems = this.mData.length;
        })
        this.mList.numItems = this.mData.length;
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
        let srcData = this.mData[_index];
        let script = _item.getComponent(TestItem);
        script.InitWithData(srcData);
        this.mLabel.string = 'ListV当前渲染总数 = ' + this.mList.displayItemNum;
    }

    
}

