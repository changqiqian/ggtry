
export function Singleton<T>() 
{
    class SingletonT 
    {
        protected constructor() 
        {

        }
        private static sInstance: SingletonT = null;
        public static get Instance(): T 
        {
            if(this.sInstance == null) 
            {
                this.sInstance = new this();
        
            }
            return this.sInstance as T;
        }

        public static ClearInstance()
        {
            this.sInstance = null;
        }

    }

    return SingletonT;
}

export function SingletonBaseNotify<T>() 
{
    class SingletonB 
    {
        public constructor() 
        {

        }
        private static sInstance: SingletonB = null;
        public static get Instance(): T 
        {
            if(this.sInstance == null) 
            {
                this.sInstance = new this();
        
            }
            return this.sInstance as T;
        }

        public static ClearInstance()
        {
            this.sInstance = null;
        }

        public RemoveAllDataListenner()
        {
            var props = Object.keys(this);
            props.forEach((prop)=>
            {
                let str = prop.toString();
                this[str].RemoveAllListenner();
            });
        }
        public RemoveAllDataListennerByTarget(_target : any)
        {
            var props = Object.keys(this);
            props.forEach((prop)=>
            {
                let str = prop.toString();
                // console.log("str==" + str);
                // console.log("this[str]==" + this[str]);
                if(this[str] != null)
                {
                    this[str].RemoveListennerByTarget(_target);
                }
            });
        }
    
        public Clear()
        {
            var props = Object.keys(this);
            props.forEach((prop)=>
            {
                let str = prop.toString();
                this[str].Clear();
            });
            this.ResetInstance();
        }

        protected ResetInstance() 
        {
            console.log("注意！！！！！ 请子类实现 ResetInstance 方法");
        }
    }

    return SingletonB;
}


