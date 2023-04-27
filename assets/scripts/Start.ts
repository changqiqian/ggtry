import { _decorator, Component, Node, director, debug, setDisplayStats, js, macro, dynamicAtlasManager } from 'cc';
import { JsbScript } from './base/JsbScript';
import { Localization } from './base/Localization';
import { LocalPlayerData } from './base/LocalPlayerData';
import { SceneType, UIMgr } from './base/UIMgr';
import { GameConfig, NetWorkRoute } from './GameConfig';
import { NetworkReceive } from './network/NetworkReceive';

// macro.CLEANUP_IMAGE_CACHE = false;
// dynamicAtlasManager.enabled = true;

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
        //读取本地存储的登录token
        GameConfig.LoadToken();
        GameConfig.InitNetWorkConfig(NetWorkRoute.Test);
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
