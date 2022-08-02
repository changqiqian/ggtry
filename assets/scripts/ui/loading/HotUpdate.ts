const jsb = (<any>window).jsb;
import { _decorator, Component, Node, Label, ProgressBar, Asset, game, sys, debug } from 'cc';
import { LoadingData } from './LoadingData';



const { ccclass, property } = _decorator;

@ccclass('HotUpdate')
export class HotUpdate extends Component {

    @property(Asset)
    manifestUrl: Asset = null!;

    private _updating = false;
    private _canRetry = false;
    private _storagePath = '';
    private _am;
    private _failCount = 0;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;
    onLoad() 
    {
        // Hot update is only available in Native build

        if (!jsb) 
        {
            LoadingData.GetInstance().Data_HotUpdateEnd = true;
            return;
        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'SY-remote-asset');
        console.log('Storage path for remote asset : ' + this._storagePath);

        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
        this.versionCompareHandle = function (versionA: string, versionB: string) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            LoadingData.Version = versionB;
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || '0');
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        // Init with empty manifest url for testing custom manifest
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);

        //var panel = this.panel;
        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path: string, asset: any) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                //panel.info.string = "Verification passed : " + relativePath;
                return true;
            }
            else {
                //panel.info.string = "Verification passed : " + relativePath + ' (' + expectedMD5 + ')';
                return true;
            }
        });

        //this.panel.info.string = 'Hot update is ready, please check or directly update.';
        //this.panel.fileProgress.progress = 0;
        //this.panel.byteProgress.progress = 0;
        if (cc.sys.os === cc.sys.OS_ANDROID) 
        {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(2);
        }
        /***********************************************检测是否有更新版本***********************************/
        LoadingData.GetInstance().Data_HotUpdateTips = '检测是否有更新版本';
        LoadingData.GetInstance().Data_HotUpdateProgress = 0;
        this.scheduleOnce(()=>{
            this.checkUpdate();
        },0);
    }


    checkCb(event: any) {
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                LoadingData.GetInstance().Data_HotUpdateTips = '本地没有找到manifest文件，跳过热更新';
                LoadingData.GetInstance().Data_HotUpdateEnd = true;
                console.log("checkCb","本地没有找到manifest文件，跳过热更新");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                LoadingData.GetInstance().Data_HotUpdateTips = '下载远端manifest文件失败，跳过热更新';
                LoadingData.GetInstance().Data_HotUpdateEnd = true;
                console.log("checkCb","下载远端manifest文件失败，跳过热更新");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                LoadingData.GetInstance().Data_HotUpdateTips = '已是最新版本';
                LoadingData.GetInstance().Data_HotUpdateEnd = true;
                console.log("checkCb","已是最新版本");
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                LoadingData.GetInstance().Data_HotUpdateTips = '发现新版本，准备更新...';
                LoadingData.GetInstance().Data_HotUpdateProgress = 0;
                console.log("checkCb","发现新版本");
                this.hotUpdate();
                break;
            default:
                return;
        }


        this._am.setEventCallback(null!);
        this._updating = false;
    }

    updateCb(event: any) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                LoadingData.GetInstance().Data_HotUpdateTips = '本地没有找到manifest文件';
                console.log("updateCb ERROR_NO_LOCAL_MANIFEST");
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                //this.panel.byteProgress.progress = event.getPercent();
                //this.panel.fileProgress.progress = event.getPercentByFile();
                //this.panel.fileLabel.string = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                //this.panel.byteLabel.string = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();
                //console.log(this.panel.fileLabel.string, this.panel.byteLabel.string);
                LoadingData.GetInstance().Data_HotUpdateProgress = event.getPercent();
                console.log("updateCb event.getPercent()=="+event.getPercent());
                var msg = event.getMessage();
                if (msg) 
                {
                    LoadingData.GetInstance().Data_HotUpdateTips = 'Updated file: ' + msg;
                    //this.panel.info.string = 'Updated file: ' + msg;
                    // cc.log(event.getPercent()/100 + '% : ' + msg);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                //this.panel.info.string = 'Fail to download manifest file, hot update skipped.';
                console.log("updateCb ERROR_PARSE_MANIFEST or ERROR_DOWNLOAD_MANIFEST ");
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                //this.panel.info.string = 'Already up to date with the latest remote version.';
                LoadingData.GetInstance().Data_HotUpdateTips = '已是最新版本';
                LoadingData.GetInstance().Data_HotUpdateEnd = true;
                console.log("updateCb ALREADY_UP_TO_DATE");
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                //this.panel.info.string = 'Update finished. ' + event.getMessage();
                LoadingData.GetInstance().Data_HotUpdateTips = '更新完毕';
                console.log("updateCb UPDATE_FINISHED");
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                //this.panel.info.string = 'Update failed. ' + event.getMessage();
                //this.panel.retryBtn.active = true;
                LoadingData.GetInstance().Data_HotUpdateTips = '更新失败';
                console.log("updateCb UPDATE_FAILED");
                this._updating = false;
                this._canRetry = true;
                this.retry();
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                //this.panel.info.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                LoadingData.GetInstance().Data_HotUpdateTips = '更新失败==' +  event.getMessage();
                console.log("updateCb ERROR_UPDATING");
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                //this.panel.info.string = event.getMessage();
                console.log("updateCb ERROR_DECOMPRESS");
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null!);
            this._updating = false;
        }

        if (needRestart) {
            this._am.setEventCallback(null!);
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            // restart game.
            setTimeout(() => {
                game.restart();
            }, 1000)
        }
    }

    retry() {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;

            //this.panel.info.string = 'Retry failed Assets...';
            LoadingData.GetInstance().Data_HotUpdateTips = '下载更新失败的资源';
            console.log("Retry failed Assets...'");
            this._am.downloadFailedAssets();
        }
    }

    checkUpdate() {
        if (this._updating) {
            //this.panel.info.string = 'Checking or updating ...';
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl;
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            //this.panel.info.string = 'Failed to load local manifest ...';
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    }

    hotUpdate() {
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                var url = this.manifestUrl.nativeUrl;
                this._am.loadLocalManifest(url);
            }

            this._failCount = 0;
            this._am.update();
            //this.panel.updateBtn.active = false;
            this._updating = true;
        }
    }

    onDestroy() 
    {
        if (!jsb) 
        {
            return;
        }
        this._am.setEventCallback(null!);
    }
}

