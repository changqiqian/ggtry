import { BaseData } from "../../base/BaseData";
import { BaseDataNotify } from "../../base/BaseDataNotify";

export class LoadingData extends BaseDataNotify 
{
    private static Instance:LoadingData = null;

    public static GetInstance() : LoadingData
    {
        if(LoadingData.Instance == null)
        {
            LoadingData.Instance = new LoadingData();
        }

        return LoadingData.Instance;
    }
    
 

    Data_HotUpdateEnd : BaseData<boolean> = new BaseData<boolean>(true);
    Data_HotUpdateProgress : BaseData<number> = new BaseData<number>();
    Data_HotUpdateTips : BaseData<string> = new BaseData<string>();
}

