import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { GameBase } from './GameBase';
import { Game_TableInfo } from './subUI/Game_TableInfo';
const { ccclass, property } = _decorator;

@ccclass('Game_Cash')
export class Game_Cash extends GameBase 
{
    public static PrefabName :string = "Game_Cash";
    InitOtherUI()
    {
        this.AddSubView("gamePage","prefab/Game_TableInfo", (_script)=>
        {
            let tempScript = _script as Game_TableInfo;
            tempScript.InitWithData(this.mIndex);
        });
    }


}

