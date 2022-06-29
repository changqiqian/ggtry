
import { DataNotify } from '../../base/DataNotify';


export class HallData extends DataNotify {
    public static Instance:HallData = null;

    public static GetInstance() : HallData
    {
        if(HallData.Instance == null)
        {
            HallData.Instance = new HallData();
            HallData.Instance.CreateNotify();
        }

        return HallData.Instance;
    }
    

}

