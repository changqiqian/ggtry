import { _decorator, Component, Node, Vec3 } from 'cc';
import { DataNotify } from '../../base/DataNotify';
import { Localization } from '../../base/Localization';
import { UIMgr } from '../../base/UIMgr';
import { GameConfig } from '../../GameConfig';
import { Network } from '../../network/Network';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData extends DataNotify 
{
    private static Instance:GameData = null;

    public static GetInstance() : GameData
    {
        if(GameData.Instance == null)
        {
            GameData.Instance = new GameData();
            GameData.Instance.CreateNotify();
        }

        return GameData.Instance;
    }


    //UI控制
    Data_ChatingSubLayer : Game_ChattingSubLayer = null ; //聊天页面子页面



    RegisteMsg()
    {

        
    }

    UnregisteMsg()
    {
        Network.GetInstance().RemoveListenner(this);
    }


}


export enum Game_ChattingSubLayer
{
    ChatHistory,
    Shortcut,
    Emoji,
}

