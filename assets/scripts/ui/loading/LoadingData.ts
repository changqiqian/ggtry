import { DataNotify } from "../../base/DataNotify";


export class LoadingData extends DataNotify 
{
    public static Instance:LoadingData = null;

    public static GetInstance() : LoadingData
    {
        if(LoadingData.Instance == null)
        {
            LoadingData.Instance = new LoadingData();
            LoadingData.Instance.CreateNotify();
        }

        return LoadingData.Instance;
    }
    
 

    Data_HotUpdateEnd : boolean = null;
    Data_HotUpdateProgress : number = null;
    Data_HotUpdateTips : string = null;


    //常量
    public static Version : string = "0.0.0"; 
}

