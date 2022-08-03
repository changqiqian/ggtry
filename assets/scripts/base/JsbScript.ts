import { sys } from "cc";
import { GameConfig } from "../GameConfig";
import { LanguageType } from "./Localization";

export class JsbScript
{


    public static getDevicesImei() 
    {
        GameConfig.Imei = GameConfig.ReadSimpleData('imei');
        GameConfig.Model = GameConfig.ReadSimpleData('model');
        if (!GameConfig.Imei || !GameConfig.Model) 
        {
            if (sys.isBrowser)
            {
                GameConfig.Imei = GameConfig.GetRandChar();
                GameConfig.Model = GameConfig.Imei;
                GameConfig.WriteSimpleData("imei" , GameConfig.Imei);
                GameConfig.WriteSimpleData("model" , GameConfig.Model);
            }
            else
            {
                // if (sys.os === sys.OS.ANDROID) 
                // {
                //     jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDevicesImei", "()V");
                // } 
                // else if (sys.os === cc.sys.OS_IOS) 
                // {
                //     jsb.reflection.callStaticMethod("LocationTest", "getiPhoneimei:", "获取设备型号uuid");
                //     JsbScript.getUUID();
                // }
            }

        } 


    };

    public static responDevices(_imei, _modle) 
    {
        console.log("---- vimei: " + _imei + "  vmodle:   " + _modle);
        if (_imei !== null && _modle !== null) 
        {
            GameConfig.Imei = _imei;
            GameConfig.Model = _modle;
            GameConfig.WriteSimpleData("imei" , _imei);
            GameConfig.WriteSimpleData("model" , _modle);
        }
    };

    public static getUUID() 
    {
        if (sys.isBrowser)
        {
            return;
        }
        // if (cc.sys.os === cc.sys.OS_IOS) 
        // {
        //     jsb.reflection.callStaticMethod("AppController", "getUUID");
        // }
    };

    //获取设备基本信息
    public static getDevicesInfo()
    {
        if (cc.sys.isBrowser)
        {
            return;
        }

        GameConfig.ClientInfo.deviceId = GameConfig.Imei;
        GameConfig.ClientInfo.appVersion =  GameConfig.Version;

        if (sys.os === sys.OS.ANDROID) 
        {
            GameConfig.ClientInfo.deviceOs = 'Android';
        } 
        else if (cc.sys.os === cc.sys.OS_IOS) 
        {
            GameConfig.ClientInfo.deviceOs = 'iOS';
        } 
        else if (cc.sys.isBrowser) 
        {
            GameConfig.ClientInfo.deviceOs = 'web';
        } 
        else 
        {
            GameConfig.ClientInfo.deviceOs = 'other:' + cc.sys.os;
        }

        // if (sys.os === sys.OS.ANDROID) 
        // {
        //     jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDevicesInfo", "()V");
        // } 
        // else if (cc.sys.os === cc.sys.OS_IOS) 
        // {
        //     jsb.reflection.callStaticMethod("LocationTest", "getDevicesInfo");
        // }

        JsbScript.getChannelID();
    };

    //获取设备信息
    public static responDevicesInfo(appName, deviceBrand, deviceOsVersion, ip) 
    {
        console.log("appName: " + appName + " deviceBrand: " + deviceBrand + ' deviceOsVersion: ' + deviceOsVersion);
        console.log("ip == " + ip)

        GameConfig.ClientInfo.appName = appName;
        GameConfig.ClientInfo.deviceBrand = deviceBrand;
        GameConfig.ClientInfo.deviceOsVersion = deviceOsVersion;
        GameConfig.ClientInfo.ip = ip;

    };

    //获取channelID
    public static getChannelID()
    {
        if (cc.sys.isBrowser)
        {
            return;
        }
        // if (sys.os === sys.OS.ANDROID) 
        // {
        //     jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getChannelID", "()V");
        // } 
        // else if (cc.sys.os === cc.sys.OS_IOS) 
        // {
        //     jsb.reflection.callStaticMethod("LocationTest", "getChannelID");
        // }
    };

    //获取channelID回调
    public static responChannelID(channelID, version) 
    {
        console.log("channelID: " + channelID);
        console.log("version: " + version);
        GameConfig.ClientInfo.channel = channelID;
        GameConfig.ClientInfo.version = version;
    };

    public static getSysLanguage() 
    {
        if (sys.os === sys.OS.ANDROID) 
        {
            let result = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getSysLanguage", "()Ljava/lang/String;");
            if(Object.prototype.toString.call(result)=="[object String]")
            {
                if( -1 != result.indexOf('en') ) 
                {
                    return LanguageType.EN;
                }
                else if( -1 != result.indexOf('zh-CN') ) 
                {
                    return LanguageType.CN;
                } 
                else if( -1 != result.indexOf('zh-HK') || -1 != result.indexOf('zh-TW') )
                {
                    return LanguageType.HK;
                }
            }
        } 
        else if (cc.sys.os === cc.sys.OS_IOS) 
        {
            //  "en"、"zh"、“zh-Hans-CN"、"zh-Hant-CN"
            let langRet = jsb.reflection.callStaticMethod("AppController", "getCurrentLanguage");    
            if(Object.prototype.toString.call(langRet) =="[object String]")
            {
                if (-1 != langRet.indexOf('en')) 
                {
                    return LanguageType.EN;
                } 
                else if (-1 != langRet.indexOf('zh')) 
                {
                    return LanguageType.CN;
                } 
                else if (-1 != langRet.indexOf('zh-Hans-CN') || -1 != langRet.indexOf('zh-Hant-CN')) 
                {
                    return LanguageType.HK;
                }
            }   
        } 

        return LanguageType.CN;
    };

} 