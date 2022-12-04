import { _decorator, Component, Node, Size, UITransform, Vec3, Vec2, PolygonCollider2D, EventTouch, Intersection2D, Sprite } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { UIMgr } from '../../base/UIMgr';
import { BaseButton } from './BaseButton';
const { ccclass, property } = _decorator;

@ccclass('CuoPai')
export class CuoPai extends BaseUI {
    @property
    private mCardSize: Size = new Size(0, 0);
    /**最外层的遮罩*/
    @property(UITransform)
    mMaskMove:UITransform | undefined; 
    /**卡牌层*/
    @property(Node)
    mLayoutCard:Node | undefined;  
    /**卡牌背面*/
    @property(Node)
    mCardBack:Node | undefined;
    /**卡牌正面*/
    @property(Node)
    mCardFace:Node | undefined;
    /**渐变层的遮罩*/
    @property(Node)
    mMaskShadow:Node | undefined;
    /**渐变层 为了提高真实度*/
    @property(Node)
    mShadow:Node | undefined;

    @property(BaseButton)
    mFinishBtn:BaseButton;

    /**卡牌层的固定位置  为了防止 搓牌效果遮罩移动时 卡牌层同时位移*/
    private mLayoutCardWorldPosition:Vec3 = new Vec3();
    /**遮罩层的款 目前只用来做 翻牌判断*/
    private mCardDiameter:number = 0;
    /**是否开始搓牌效果*/
    private mMoveStart:boolean = false;
    /**移动的正弦余弦*/
    private mSinCos = {sin:0,cos:0};
    /**纸牌世界坐标4个点 修正遮罩层的偏移*/
    private mCardWorldPoints:Array<Vec2> = new Array<Vec2>();
    /**翻拍动画结束*/
    private mPeekCardEnd:boolean = false;
    /**触碰点记录 触碰点距离太近导致角度不好计算加的变量*/
    private mTouchPos:Array<Vec2> = new Array<Vec2>();
    /**方向类型 修正搓牌过程中的正面牌位置 0 只判断x坐标+ 1只判断x坐标- 2 只判断y坐标+ 3只判断y坐标-*/
    private mCardFaceType : Direciton = Direciton.ToRight;
    InitParam()
    {
        this.Reset();
    }
    BindUI()
    {
        this.node!.on(Node.EventType.TOUCH_START,this.TouchStart.bind(this));
        this.node!.on(Node.EventType.TOUCH_MOVE,this.TouchMove.bind(this));
        this.node!.on(Node.EventType.TOUCH_END,this.TouchEnd.bind(this));
        this.node!.on(Node.EventType.TOUCH_CANCEL,this.TouchEnd.bind(this));

        this.mFinishBtn.SetClickCallback(()=>
        {
            if(this.mPeekCardEnd)
            {
                return;
            }
            this.Finish();
        })
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

    public Reset()
    {
        this.mPeekCardEnd = false;
        //这是为了遮罩层旋转了也不会让纸牌缺边
        let hypotenuse = this.getSignHypotenuse(this.mCardSize.width,this.mCardSize.height);
        this.mCardDiameter = hypotenuse;
        this.mMaskMove!.setContentSize(hypotenuse,hypotenuse);
        //更新纸牌大小
        this.mCardBack!.getComponent(UITransform)!.contentSize   = this.mCardSize;
        this.mCardFace!.getComponent(UITransform)!.contentSize   = this.mCardSize;
        this.mMaskShadow!.getComponent(UITransform)!.contentSize = this.mCardSize;

        let MaskMove_Rect  = this.mMaskMove!.node.getComponent(PolygonCollider2D)!;
        MaskMove_Rect.points[0] = new Vec2( -hypotenuse/2,-hypotenuse/2 );
        MaskMove_Rect.points[1] = new Vec2( -hypotenuse/2,hypotenuse/2 );
        MaskMove_Rect.points[2] = new Vec2( hypotenuse/2,hypotenuse/2 );
        MaskMove_Rect.points[3] = new Vec2( hypotenuse/2,-hypotenuse/2 );

        //纸牌的4个边缘点世界坐标 为了修正遮罩层的偏移
        let cardBackUIT = this.mCardBack!.getComponent(UITransform)!;        
        let vvvv0 = cardBackUIT.convertToWorldSpaceAR(new Vec3(-this.mCardSize.width/2,-this.mCardSize.height/2));
        this.mCardWorldPoints[0] = new Vec2( vvvv0.x,vvvv0.y );//90 ~ 0
        let vvvv1 = cardBackUIT.convertToWorldSpaceAR(new Vec3(-this.mCardSize.width/2,this.mCardSize.height/2));
        this.mCardWorldPoints[1] = new Vec2( vvvv1.x,vvvv1.y );//0 ~ -90
        let vvvv2 = cardBackUIT.convertToWorldSpaceAR(new Vec3(this.mCardSize.width/2,this.mCardSize.height/2));
        this.mCardWorldPoints[2] = new Vec2( vvvv2.x,vvvv2.y );//-90 ~ 180
        let vvvv3 = cardBackUIT.convertToWorldSpaceAR(new Vec3(this.mCardSize.width/2,-this.mCardSize.height/2));
        this.mCardWorldPoints[3] = new Vec2( vvvv3.x,vvvv3.y );//180 ~ 90
        
        //初始化渐变图
        this.mShadow!.active = false;
        this.mShadow!.getComponent(UITransform)!.height = hypotenuse;



        this.mLayoutCardWorldPosition = this.mLayoutCard!.getWorldPosition();
        this.mCardFace!.active = false;
    }

    private TouchStart(_event:EventTouch)
    {
        this.mTouchPos = [];
        //不在纸牌区域内的话就不执行
        if(!Intersection2D.pointInPolygon(_event.getUIStartLocation(),this.mCardWorldPoints))
        return;

        this.mTouchPos.push(_event.getUIStartLocation());
    }

    private TouchMove(_event:EventTouch)
    {
        if(this.mPeekCardEnd || this.mTouchPos.length == 0)
        {
            return;
        }
        
        let startPos = _event.getUIStartLocation();
        let endPos = _event.getUILocation();
        this.mTouchPos.push(endPos);

        if(!this.mMoveStart)
        {
            let obj = this.getSignDistance(endPos,startPos);
            if( obj.distance >= 10)
            {
                //触发固定方向 开始移动
                this.mMoveStart = true;
                this.mSinCos = obj.sincos;

                // this.mShadow!.active = true;
                
                let angle = this.getSignAngle(endPos,startPos);
         
                this.mMaskMove!.node.angle = angle;
                this.mLayoutCard!.angle = -angle;  
                this.mShadow!.angle = angle;
                this.mCardFace!.angle = 0;
                let index = 0;

                //纸牌正面初始位置锚点调整
                let cardFaceUIT = this.mCardFace!.getComponent(UITransform)!;
                switch(angle)
                {
                    case 0://向右
                        index = 0;
                        cardFaceUIT.setAnchorPoint(1,0);
                        this.mCardFaceType = Direciton.ToRight;
                        break;
                    case 90://向上
                        index = 0;
                        cardFaceUIT.setAnchorPoint(0,1);
                        this.mCardFaceType = Direciton.ToUp;
                        break;
                    case 180://向左
                        index = 2;
                        cardFaceUIT.setAnchorPoint(0,1);
                        this.mCardFaceType = Direciton.ToLeft;
                        break;
                    case -90://向下
                        index = 2;
                        cardFaceUIT.setAnchorPoint(1,0);
                        this.mCardFaceType = Direciton.ToBottom;
                        break;
                    default:
                        {
                            if(angle < 90 && angle > 0)
                            {
                                index = 0;
                                this.mCardFace!.angle     = angle*2;                                     
                                cardFaceUIT.setAnchorPoint(1,0); 
                                this.mCardFaceType = Direciton.ToRight;
                                if(angle > 45)
                                {
                                    this.mCardFaceType =  Direciton.ToUp;
                                }
                            }
                            else if(angle < 0 && angle > -90)
                            {
                                index = 1;
                                this.mCardFace!.angle = 180 + angle*2;
                                cardFaceUIT.setAnchorPoint(0,0);
                                this.mCardFaceType = Direciton.ToRight;                           
                                if(angle<-45)
                                {
                                    this.mCardFaceType = Direciton.ToBottom; 
                                }
                                
                            }
                            else if(angle < -90 && angle > -180)
                            {
                                index = 2;
                                this.mCardFace!.angle = 180 + angle*2;
                                cardFaceUIT.setAnchorPoint(1,0);  
                                this.mCardFaceType = Direciton.ToBottom; 
                                if(angle<-135)
                                {
                                    this.mCardFaceType = Direciton.ToLeft; 
                                }                                                            

                            }
                            else
                            {
                                index = 3;
                                this.mCardFace!.angle = angle*2;                                     
                                cardFaceUIT.setAnchorPoint(0,0); 
                                this.mCardFaceType = Direciton.ToLeft; 
                                if(angle<135)
                                {
                                    this.mCardFaceType = Direciton.ToUp; 
                                }                                 
                                
                            }
                        }
                        break;
                }
                
                //遮罩层移动前位置修正
                let tpp  = this.mMaskMove!.node.getComponent(PolygonCollider2D)!;
                let twpa = this.mCardWorldPoints;
                while(1)
                {
                    this.mMaskMove!.node.setPosition(this.mMaskMove!.node.getPosition().x + this.mSinCos.cos,this.mMaskMove!.node.getPosition().y + this.mSinCos.sin);
                    if(!Intersection2D.pointInPolygon(new Vec2(twpa[index].x,twpa[index].y),tpp.worldPoints))
                    break;
                }

                //纸牌正面位置修正            
                let cbackw = this.mCardBack!.getComponent(UITransform)!.getBoundingBoxToWorld();
                switch(index)
                {
                    case 0:
                        this.mCardFace!.setWorldPosition(new Vec3(cbackw.x,cbackw.y));         
                        break;
                    case 2:
                        this.mCardFace!.setWorldPosition(new Vec3(cbackw.x+cbackw.width,cbackw.y+cbackw.height));                        
                        break;
                    case 1:
                        this.mCardFace!.setWorldPosition(new Vec3(cbackw.x,cbackw.y+cbackw.height)); 
                        break; 
                    case 3:
                        this.mCardFace!.setWorldPosition(new Vec3(cbackw.x+cbackw.width,cbackw.y)); 
                        break;
                    default:
                        this.mCardFace!.setWorldPosition(new Vec3(twpa[index].x,twpa[index].y));
                        break;
                }
               
                //渐变效果初始化
                this.mMaskShadow!.angle = this.mCardFace!.angle;
                this.mMaskShadow!.getComponent(UITransform)!.setAnchorPoint(cardFaceUIT.anchorPoint);
                this.mMaskShadow!.setPosition(this.mCardFace!.getPosition());
                this.mShadow!.angle = angle - this.mCardFace!.angle;
                this.mCardFace!.active    = true;
            }
        }
        else
        {
            let dragDistance = this.getSignDistance(endPos,startPos).distance;
            this.mShadow.active = dragDistance >= 30;
            //获取触碰点移动角度
            let angle = this.getSignAngle(endPos,this.mTouchPos[0]);
            let addx = this.mSinCos.cos;
            let addy = this.mSinCos.sin;
            
            let cardfacetype = this.mCardFaceType;
            //反方向修正
            if( this.mMaskMove!.node.angle + 90 >= angle && this.mMaskMove!.node.angle - 90 <= angle )
            {//正
            }
            else
            {
             //负
                addx = -this.mSinCos.cos;
                addy = -this.mSinCos.sin;    
                switch(cardfacetype)
                {
                    case Direciton.ToRight:
                        cardfacetype = Direciton.ToLeft;
                        break;
                    case Direciton.ToLeft:
                        cardfacetype = Direciton.ToRight;
                        break;
                    case Direciton.ToUp:
                        cardfacetype = Direciton.ToBottom;
                        break;
                    case Direciton.ToBottom:
                        cardfacetype = Direciton.ToUp;
                        break;
                }
            }

            let maskShadow_rect  = this.mCardFace!.getComponent(PolygonCollider2D)!;
   
            let isBack = false;
            //修正牌面坐标  不修正牌面和触摸点距离会越来越远
            while(1)
            {
                switch(cardfacetype)
                {
                    case Direciton.ToRight:
                        if(endPos.x <= maskShadow_rect.worldPoints[0].x)
                        {
                            isBack = true;
                        }
                        break;
                    case Direciton.ToLeft:
                        if(endPos.x >= maskShadow_rect.worldPoints[0].x)
                        {
                            isBack = true;
                        }
                        break;
                    case Direciton.ToUp://
                        if(endPos.y <= maskShadow_rect.worldPoints[0].y)
                        {
                            isBack = true;
                        }
                        break;
                    case Direciton.ToBottom://
                        if(endPos.y >= maskShadow_rect.worldPoints[0].y)
                        {
                            isBack = true;
                        }
                        break;
                }
                if(isBack)break;
                //最外遮罩层的移动
                this.mMaskMove!.node.setPosition(this.mMaskMove!.node.getPosition().x + addx,this.mMaskMove!.node.getPosition().y + addy);
                //正面牌移动
                this.mCardFace!.setPosition(this.mCardFace!.getPosition().x + addx*2,this.mCardFace!.getPosition().y + addy*2); 
                //渐变图所在层位置修正
                this.mMaskShadow!.setPosition(this.mCardFace!.getPosition());
            }


            //渐变图位置修正
            let tpp = this.mMaskMove!.node.getComponent(PolygonCollider2D)!;
            this.mShadow!.setWorldPosition(new Vec3(tpp.worldPoints[0].x,tpp.worldPoints[0].y));

            //是否执行结束搓牌
            let minMove = this.mCardDiameter * 0.6;
            let biasMove = minMove * Math.abs(addy);
            let finishCondition = minMove + biasMove;
            let obj = this.getSignDistance(endPos,startPos);
            if( obj.distance >= finishCondition)
            {
                this.Finish();
            }

        }

        //触碰点角度计算  数量越多敏感度越低
        this.mLayoutCard!.setWorldPosition(this.mLayoutCardWorldPosition);
        if(this.mTouchPos.length >=4)
        {
            this.mTouchPos.shift();
        }

    }

    private TouchEnd(_event?:EventTouch)
    {
        this.mMaskMove!.node.angle = 0;
        this.mLayoutCard!.angle = 0;
        this.mMaskMove!.node.setPosition(0,0);
        this.mLayoutCard!.setPosition(0,0);
        this.mMoveStart = false;
        this.mShadow!.active  = false;
        this.mCardFace!.active = false;
        this.mCardFace!.setPosition(1000,1000);
    }

    private Finish()
    {
        this.mPeekCardEnd = true;
        this.TouchEnd();
        this.mFinishBtn.Show(false);
        this.mCardBack!.getComponent(Sprite)!.spriteFrame = this.mCardFace!.getComponent(Sprite)!.spriteFrame;
        this.StartSecondsTimer(2,1,false,()=>
        {
            let restTime = this.GetRestSeconds();
            if(restTime <= 0)
            {
                UIMgr.Instance.DeleteUIByTarget(this);
            }
        });
    }

    private getSignDistance(_endPos:Vec2, _startPos:Vec2) 
    {
        let a = _endPos.x-_startPos.x;
        let b = _endPos.y-_startPos.y;
        let c = this.getSignHypotenuse(Math.abs(a),Math.abs(b));
        let obj = 
        {
            sincos:
            {
                sin:b/c,
                cos:a/c,
            },
            distance:c
        }
        return obj;
    }

    private getSignHypotenuse(_width:number, _height:number) 
    {
        let a = Math.pow(_width,2);
        let b = Math.pow(_height,2);
        let c = Math.sqrt(a+b);
        return c;
    }

    private getSignAngle(_endPos:Vec2, _startPos:Vec2) 
    {
        var radian = Math.atan2(_endPos.y - _startPos.y, _endPos.x - _startPos.x);  // 返回来的是弧度
        var angle = 180 / Math.PI * radian;                                     // 根据弧度计算角度
        return angle;
    }
}



enum Direciton
{
    ToRight = 0,
    ToLeft,
    ToUp,
    ToBottom
}