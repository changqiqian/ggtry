import { _decorator, Component, Node } from 'cc';
import { SceneType, UIMgr } from './base/UIMgr';

const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component 
{
    start() 
    {
        UIMgr.GetInstance().Init();
        UIMgr.GetInstance().ChangeScene(SceneType.Loading);  
    }


}

