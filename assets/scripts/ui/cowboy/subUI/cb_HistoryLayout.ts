import { _decorator, Component, Node, Label, Color, Vec3, Size, UI, UITransform, instantiate, Sprite, Prefab, Tween } from 'cc';
import { DEBUG } from 'cc/env';
import { BaseUI } from '../../../base/BaseUI';
import { Localization } from '../../../base/Localization';
const { ccclass, property } = _decorator;




@ccclass('cb_HistoryLayout')
export class cb_HistoryLayout extends BaseUI {

    @property(Node) 
    mLayOut: Node = null;
    @property(Node) 
    mDarkBg: Node = null;
    @property(Label) 
    mDescribe: Label = null;
    @property(Prefab) 
    mDotPrefab: Prefab = null;

    mMaxDot : number;
    mPositionConfig : Array<number>;
    mDotSize : Size;
    mMoveOffset : number = 20;
    mMoveDuration : number = 0.2;
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

    public ResetUI()
    {
        this.mDescribe.string = "";
        this.Clear();
    }

    public SetConfig( _maxDot : number , _dotSize : Size = new Size(20,20))
    {
        this.mMaxDot = _maxDot;
        this.mDotSize = _dotSize;
        this.CalculatePositionConfig();
    }

    public SetData(_datas : Array<boolean>)
    {
        if(_datas.length == 0)
        {
            this.mDescribe.string = Localization.ReplaceString("00294",this.mMaxDot + "");
            return;
        }

        for(let i = 0 ; i < _datas.length ; i++)
        {
            let currentData = _datas[i];
            this.InsertOneData(currentData);
        }
    }

    public InsertOneData(_data : boolean)
    {
        this.mDescribe.string = "";
        let currentIndex = this.mLayOut.children.length;
        let color = _data ? Color.YELLOW : Color.GRAY;

        if(currentIndex < this.mMaxDot)
        {
            let tempNode =  instantiate(this.mDotPrefab) as Node;
            this.mLayOut.addChild(tempNode);
            tempNode.setPosition(this.mPositionConfig[currentIndex],0);
            tempNode.getComponent(Sprite).color = color;
        }
        else
        {
            let tempNode =  instantiate(this.mDotPrefab) as Node;
            this.mLayOut.addChild(tempNode);
            tempNode.setPosition(this.mPositionConfig[this.mPositionConfig.length - 1], this.mMoveOffset);
            tempNode.getComponent(Sprite).color = color;

            let firstDot = this.mLayOut.children[0];
            let firstTween = new Tween(firstDot);
            firstTween.to(this.mMoveDuration , {position : new Vec3(firstDot.position.x , this.mMoveOffset)});
            firstTween.call(()=>
            {
                firstDot.removeFromParent();
                firstDot.destroy();
            });
            firstTween.start();

            for(let i = 1 ; i <= this.mMaxDot ; i++)
            {
                let currentDot = this.mLayOut.children[i];
                let destination = this.mPositionConfig[i-1];
                let tempTween = new Tween(currentDot);
                tempTween.to(this.mMoveDuration , {position : new Vec3(destination , 0)});
                tempTween.start();
            }
        }
    }

    public Clear()
    {
        this.mLayOut.destroyAllChildren();
    }

    public ShowDescribe()
    {
        this.mDarkBg.active = true;
        this.mLayOut.active = false;
    }

    public ShowHistory()
    {
        this.mDarkBg.active = false;
        this.mLayOut.active = true;
    }

    public SetDescribe(_describe : string)
    {
        this.mDescribe.string = _describe;
    }

    private CalculatePositionConfig()
    {
        this.mPositionConfig = new Array<number>();
        let totalWidth = this.mLayOut.getComponent(UITransform).contentSize.width;
        let spaceCount = this.mMaxDot + 1;
        let space = totalWidth / spaceCount;
        for(let i = 1 ; i <= this.mMaxDot ; i++)
        {
            let posX = i * space;
            this.mPositionConfig.push(posX);
        }
    }

}

