import { DataNotify } from "../../base/DataNotify";


export class LoadingData extends DataNotify 
{
    public static __ins:LoadingData = null;

    public static GetInstance() : LoadingData
    {
        if(LoadingData.__ins == null)
        {
            LoadingData.__ins = new LoadingData();
            LoadingData.__ins.CreateNotify();
        }

        return LoadingData.__ins;
    }
    
 

    Data_HotUpdateEnd : boolean = null;
    

}

