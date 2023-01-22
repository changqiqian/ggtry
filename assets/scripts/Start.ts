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
        setDisplayStats(GameConfig.DebugMode);
    }
    start() 
    {
        //注册所有网络消息
        NetworkReceive.Instance.RegisterMsg();
        //读取本地存储的登录token
        GameConfig.LoadToken();
        //保持屏幕常亮
        JsbScript.KeepScreenOn(true);
        //获取系统语言设置
        let systemLanguage = JsbScript.getSysLanguage();
        //设置当前语言
        Localization.SetLanguage(systemLanguage);
        //初始化玩家基础设置
        LocalPlayerData.Instance.LoadLocalConfig();
        //初始化UIMgr
        UIMgr.Instance.Init(()=>
        {
            //初始化UIMgr成功后   跳转到Loading页面
            UIMgr.Instance.ChangeScene(SceneType.Loading);  
        });

    }


}
