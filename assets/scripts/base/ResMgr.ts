
import { AssetManager, assetManager } from "cc";

export class ResMgr 
{
    public static PreloadBundle( _bundleName : string , _loadFinish : Function)
    {
        assetManager.loadBundle(_bundleName,(_error , _bundle)=>
        {
            if(_error != null)
            {
                console.log("PreloadBundle error   name===:" + _bundleName);
            }
            else
            {
                if(_loadFinish)
                {
                    _loadFinish(_bundle);
                }
            }
        });
    }

    public static PreloadAssetsInBundle(_bundle : AssetManager.Bundle , _folders : Array<string> , _loadFinish : Function)
    {
        for(let i = 0 ; i < _folders.length ; i++)
        {
           
            _bundle.preloadDir(_folders[i],()=>
            {
                if(_loadFinish)
                {
                    _loadFinish();
                }
            });
        }
    }
    

    public static GetAssetInBundle(_bundleName : string , _assetPath : string , _assetType , _loadFinish : Function) : any
    {
        var bundle = this.GetBundle(_bundleName);
        if(bundle == null)
        {
            console.log("GetAssetInBundle  失败  name===:" + _bundleName);
            return null;
        }

        bundle.load(_assetPath,_assetType,(_error , _asset)=>
        {
            if(_error != null)
            {
                console.log("GetAssetInBundle _bundleName:_assetName===" + _bundleName + ":" + _assetPath);
                console.log("GetAssetInBundle error  ===" + _error);
            }
            else
            {
                if(_loadFinish)
                {
                    _loadFinish(_asset);
                }
            }
        });
    }

    public static ReleaseBundle(_bundleName : string)
    {
        var bundle = this.GetBundle(_bundleName);
        if(bundle == null)
        {
            console.log("ReleaseBundle  失败  name===:" + _bundleName);
            return null;
        }

        bundle.releaseAll();
        assetManager.removeBundle(bundle);
    }    


    private static GetBundle(_bundleName : string) : AssetManager.Bundle
    {
        var bundle = assetManager.getBundle(_bundleName);
        if(bundle==null)
        {
            console.log("GetBundle  当前bundle还没有加载  name===:" + _bundleName);
            return null;
        }

        return bundle;
    }
}

