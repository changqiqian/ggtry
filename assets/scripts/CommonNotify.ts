import { BaseData } from "./base/BaseData";
import { SingletonBaseNotify } from "./base/Singleton";


export class CommonNotify extends SingletonBaseNotify<CommonNotify>()
{
    protected ResetInstance() 
    {
        CommonNotify.ClearInstance();
    }

    
    Data_SocketOpen : BaseData<boolean> = new BaseData<boolean>();
    Data_SocketClose : BaseData<boolean> = new BaseData<boolean>();
    Data_SocketError : BaseData<boolean> = new BaseData<boolean>(true);
    Data_LayerDragDown: BaseData<boolean> = new BaseData<boolean>(false,false); //画面是否被向下拉了
    Data_LayerDragStart: BaseData<boolean> = new BaseData<boolean>(true); //开始拉动
    Data_LayerPosY : BaseData<number> = new BaseData<number>(); //当前layer Y偏移量
    Data_LayerDragFinish: BaseData<boolean> = new BaseData<boolean>(true); //拉动完成
}

