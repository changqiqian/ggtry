import { _decorator, Component, Node, instantiate } from 'cc';
import { ResMgr } from './ResMgr';
export class BaseUI extends Component {


    onLoad() 
    {
        this.InitParam();
        this.BindUI();
        this.RegDataNotify();
    }

    start()
    {
        this.LateInit();
    }

    onDestroy()
    {
        this.UnregDataNotify();
        this.CustmoerDestory();
    }

    //“把UI节点与代码变量”绑定起来
    InitParam()
    {

    }


    //绑定ui事件
    BindUI()
    {

    }

    //数据驱动注册
    RegDataNotify()
    {

    }
    //延迟一贞初始化的内容
    LateInit()
    {

    }
    //数据驱动注销
    UnregDataNotify()
    {

    }
    //自定义析构
    CustmoerDestory()
    {

    }


}

