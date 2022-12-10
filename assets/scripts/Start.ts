import { _decorator, Component, Node, director, debug, setDisplayStats, js } from 'cc';
import { JsbScript } from './base/JsbScript';
import { Localization } from './base/Localization';
import { LocalPlayerData } from './base/LocalPlayerData';
import { SceneType, UIMgr } from './base/UIMgr';
import { GameConfig } from './GameConfig';
import { NetworkReceive } from './network/NetworkReceive';



const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component 
{
    onLoad()
    {
        setDisplayStats(false);
    }
    start() 
    {

        //注册所有网络消息
        NetworkReceive.Instance.RegisterMsg();
        GameConfig.LoadToken();

        JsbScript.KeepScreenOn(true);
        //获取系统语言设置
        let systemLanguage = JsbScript.getSysLanguage();
        //设置当前语言
        Localization.SetLanguage(systemLanguage);

        LocalPlayerData.Instance.LoadLocalConfig();
        //初始化UIMgr
        UIMgr.Instance.Init(()=>
        {
            //初始化UIMgr成功后   跳转到Loading页面
            UIMgr.Instance.ChangeScene(SceneType.Loading);  
        });

    }


}
