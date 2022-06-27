import { DataNotify } from "./base/DataNotify";

export class StartData extends DataNotify 
{
    public static __ins:StartData = null;

    public static GetInstance() : StartData
    {
        if(StartData.__ins == null)
        {
            StartData.__ins = new StartData();
            StartData.__ins.CreateNotify();
        }

        return StartData.__ins;
    }
    
 

    Data_Test : number = null;
    

}

