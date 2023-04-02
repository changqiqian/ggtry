import { _decorator, Component, Node } from 'cc';
import { BaseUI } from '../../base/BaseUI';
import { Network } from '../../network/Network';
import { GameBase } from './GameBase';
import { Game_BottomUI } from './subUI/Game_BottomUI';
import { Game_CommonTips } from './subUI/Game_CommonTips';
import { Game_ControlBtns } from './subUI/Game_ControlBtns';
import { Game_GameStartInfo } from './subUI/Game_GameStartInfo';
import { Game_Pot } from './subUI/Game_Pot';
import { Game_PublicCards } from './subUI/Game_PublicCards';
import { Game_SelfAction } from './subUI/Game_SelfAction';
import { Game_SelfPreAction } from './subUI/Game_SelfPreAction';
import { Game_TableInfo } from './subUI/Game_TableInfo';
import { Game_TopUI } from './subUI/Game_TopUI';
const { ccclass, property } = _decorator;

@ccclass('Game_Cash')
export class Game_Cash extends GameBase 
{
    public static readonly PrefabName :string = "Game_Cash";

    InitSubView()
    {
        this.AddSubView("gamePage","prefab/Game_TableInfo", (_script)=>
        {
            let tempScript = _script as Game_TableInfo;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_Pot", (_script)=>
        {
            let tempScript = _script as Game_Pot;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_BottomUI" , (_script)=>
        {
            let tempScript = _script as Game_BottomUI;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_GameStartInfo", (_script)=>
        {
            let tempScript = _script as Game_GameStartInfo;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_PublicCards", (_script)=>
        {
            let tempScript = _script as Game_PublicCards;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_SelfAction", (_script)=>
        {
            let tempScript = _script as Game_SelfAction;
            tempScript.InitWithData(this.mIndex);
        });
        // this.AddSubView("gamePage","prefab/Game_SelfPreAction", (_script)=>
        // {
        //     let tempScript = _script as Game_SelfPreAction;
        //     tempScript.InitWithData(this.mIndex);
        // });

        this.AddSubView("gamePage","prefab/Game_TopUI", (_script)=>
        {
            let tempScript = _script as Game_TopUI;
            tempScript.InitWithData(this.mIndex);
        });
        this.AddSubView("gamePage","prefab/Game_ControlBtns", (_script)=>
        {
            let tempScript = _script as Game_ControlBtns;
            tempScript.InitWithData(this.mIndex);
        });
    }

}

