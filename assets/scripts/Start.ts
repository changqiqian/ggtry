import { _decorator, Component, Node, find } from 'cc';
import { BaseUI } from './base/BaseUI';
import { ResMgr } from './base/ResMgr';
import { SceneType, UIMgr } from './base/UIMgr';
import { StartData } from './StartData';
const { ccclass, property } = _decorator;

@ccclass('start')
export class Start extends Component {

    start() 
    {
        UIMgr.GetInstance().Init();
        UIMgr.GetInstance().ChangeScene(SceneType.Hall);    
        StartData.GetInstance().Test();
    }


    
}

