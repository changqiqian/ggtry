import { _decorator, Component, Node, director, debug, setDisplayStats } from 'cc';
import { SceneType, UIMgr } from './base/UIMgr';

const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component 
{
    onLoad()
    {
        setDisplayStats(false);
        if (cc.sys.isNative) 
        {
            console.log('设置屏幕常亮')
            jsb.Device.setKeepScreenOn(true)
        }
    }
    start() 
    {
        UIMgr.GetInstance().Init(()=>
        {
            UIMgr.GetInstance().ChangeScene(SceneType.Game);  
        });
    }


}
