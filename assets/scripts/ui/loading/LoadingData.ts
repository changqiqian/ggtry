import { BaseData } from "../../base/BaseData";
import { SingletonBaseNotify } from "../../base/Singleton";


export class LoadingData extends SingletonBaseNotify<LoadingData>()
{
    protected ResetInstance() 
    {
        LoadingData.ClearInstance();
    }
    

    Data_HotUpdateEnd : BaseData<boolean> = new BaseData<boolean>(true);
    Data_HotUpdateProgress : BaseData<number> = new BaseData<number>();
    Data_HotUpdateTips : BaseData<string> = new BaseData<string>();
}

