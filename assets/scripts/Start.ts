import { _decorator, Component, Node, director, debug, setDisplayStats } from 'cc';
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
            //UIMgr.GetInstance().ChangeScene(SceneType.Loading);  
        });


        let totalBuffer = new ArrayBuffer(12);
        let currentOffset = 0;
        let flagDataView = new DataView(totalBuffer,currentOffset,2);
        flagDataView.setInt16(0,99);
        currentOffset += 2;

        let lengthDataView = new DataView(totalBuffer , currentOffset , 4);
        lengthDataView.setInt32(0, 12);
        currentOffset += 4;

        let extensionDataView = new DataView(totalBuffer);
        extensionDataView.setInt16(currentOffset,0);
        currentOffset += 2;

        let msgIdDataView = new DataView(totalBuffer);
        msgIdDataView.setInt32(currentOffset,1001);
        currentOffset += 4;
        
    }


}
