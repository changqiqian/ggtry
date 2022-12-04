import { _decorator, Component, Node } from 'cc';
import { GameBase } from '../GameBase';
import { Game_TableInfo } from './Game_TableInfo';
const { ccclass, property } = _decorator;

@ccclass('Game_CashReplay')
export class Game_CashReplay extends GameBase {
    public static readonly PrefabName :string = "Game_CashReplay";
    InitOtherUI()
    {
        this.AddSubView("gamePage","prefab/Game_TableInfo", (_script)=>
        {
            let tempScript = _script as Game_TableInfo;
            tempScript.InitWithData(this.mIndex);
        });
    }
}

