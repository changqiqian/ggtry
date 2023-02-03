import { _decorator, Component, Node, instantiate, UITransform } from 'cc';
import { BaseUI } from '../../../base/BaseUI';
import { MultipleTableCtr } from '../../common/MultipleTableCtr';
import { Game_SingleChat } from './Game_SingleChat';
const { ccclass, property } = _decorator;

@ccclass('Game_ChatingCtr')
export class Game_ChatingCtr extends BaseUI 
{
    mLanes : Array<boolean>;
    mMaxLane : number = 15;

    mIndex : number;

    InitParam()
    {
        this.mLanes = new Array<boolean>();
        for(let i = 0 ; i < this.mMaxLane ; i++)
        {
            this.mLanes.push(true);
        }
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

    public InitWithData(_index : number)
    {
        if(this.CheckInitFlag())
        {
            return;
        }
        this.mIndex = _index;
        this.BindData();
    }

    BindData()
    {
        let gameStruct = MultipleTableCtr.FindGameStruct(this.mIndex);
        let gameData = gameStruct.mGameData;
        gameData.Data_S2CCommonChatNotify.AddListenner(this , (_data)=>
        {
            let userName = _data.playerName;
            let content = _data.content;
            let final = userName + " : " + content;
            this.CreateChat(final);
        });
    }

    CreateChat(_content : string)
    {
        let aviliableLaneIndex = this.GetAviliableLane();
        let posY = this.UsingLane(aviliableLaneIndex);

        this.LoadPrefab("gamePage","prefab/Game_SingleChat",(_node)=>
        {
            this.node.addChild(_node);
            let width = this.node.getComponent(UITransform).contentSize.width;
            _node.setPosition(width/2 , posY);
            let tempScript = _node.getComponent(Game_SingleChat);
            tempScript.InitWithData(_content,width,aviliableLaneIndex,(_index)=>
            {
                this.ReleaseLane(_index);
            });
        })
    }

    ReleaseLane(_index : number)
    {
        this.mLanes[_index] = true;
    }

    UsingLane(_index : number)
    {
        this.mLanes[_index] = false;
        let height = this.node.getComponent(UITransform).contentSize.height;
        let spaceY = height / this.mMaxLane /2;
        let posY =  (height / 2) -  (1 + _index) * spaceY;
        return posY;
    }

    GetAviliableLane() : number
    {
        for(let i = 0 ; i < this.mMaxLane ; i++)
        {
            let current = this.mLanes[i];
            if(current == true)
            {
                return i;
            }
        }

        return 0;
    }
}

