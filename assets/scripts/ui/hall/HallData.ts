
import { DataNotify } from '../../base/DataNotify';
import { Hall_SubPage } from './subUI/Hall_Bottom';


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

    Data_SubPage : Hall_SubPage = null;
    

}

