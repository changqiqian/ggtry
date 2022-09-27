import { _decorator, Component, Node, director, debug, setDisplayStats } from 'cc';
import { BaseData } from './base/BaseData';
import { BaseDataNotify } from './base/BaseDataNotify';
import { SceneType, UIMgr } from './base/UIMgr';
import { GameConfig } from './GameConfig';
import { MeassureSlider } from './ui/common/MeassureSlider';

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
            UIMgr.GetInstance().ChangeScene(SceneType.Loading);  
        });
    

    }


}
