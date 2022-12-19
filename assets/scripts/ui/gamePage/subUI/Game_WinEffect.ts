import { _decorator, Component, Node, ParticleSystem, ParticleSystem2D, Label, Tween, Vec3, easing, Color } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { Tool } from '../../../Tool';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
const { ccclass, property } = _decorator;

@ccclass('Game_WinEffect')
export class Game_WinEffect extends BaseUI 
{
    @property(ParticleSystem2D) 
    mParticular: ParticleSystem2D = null;
    @property(Label) 
    mWinAmount: Label = null;

    mIndex : number;
    InitParam()
    {

    }
    BindUI()
    {
        this.mParticular.positionType = ParticleSystem2D.PositionType.RELATIVE;
    }
    RegDataNotify()
    {

    }
    LateInit()
    {

    }

    CustmoerDestory()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        if(gameStruct !=null)
        {
            let gameData = gameStruct.mGameData;
            gameData.RemoveAllDataListennerByTarget(this);
        }
        
    }

    public InitWithData(_amount : number , _index : number)
    {
        console.log("InitWithData 成功====" + _amount);
        this.mIndex = _index;
        let clientAmount = Tool.ConvertMoney_S2C(_amount)
        if(clientAmount >= 0)
        {
            this.mWinAmount.string =   "+" + clientAmount;
            this.mWinAmount.color = new Color(0,255,0);
        }
        else
        {
            this.mWinAmount.string =   "" + clientAmount;
            this.mWinAmount.color = new Color(255,0,0);
        }

        let tween = new Tween(this.mWinAmount.node); 
        tween.to(0.5 , {position : new Vec3(0,200,0)} , {easing : easing.quadIn});
        tween.delay(1.5);
        tween.call(()=>
        {
            this.DeleteSelf();
        });
        tween.start();
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonRoundStartNotify.AddListenner(this,(_data)=>
        {
            this.DeleteSelf();
        })
    }
}

