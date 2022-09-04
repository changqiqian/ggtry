export class Tool
{
    //获取几分几秒对应的字符串时间显示格式  00:00
    public static GetRestTime_M_S(_time :number ) : string
    {
        let mins = Math.floor(_time/60);
        let seconds = (_time % 60);
        let strMin = "";
        let strSecond = "";
        if (mins < 10) 
        {
            strMin = "0" + mins;
        }
        else
        {
            strMin = mins + "";
        }

        if (seconds < 10) 
        {
            strSecond = "0" + seconds;
        }
        else
        {
            strSecond = seconds + "";
        }

        let finalTime = strMin + ":" + strSecond;
        return finalTime;
    }

    //获取对应的时间格式  xx天xx小时xx分xx秒
    public static GetRestTime_D_H_M_S(_time) : string
    {
        let days = parseInt((_time / 60 / 60 / 24).toString() , 10); //计算剩余的天数 
        let hours = parseInt((_time / 60 / 60 % 24).toString() , 10); //计算剩余的小时 
        let minutes = parseInt((_time / 60 % 60).toString(), 10);//计算剩余的分钟 
        let seconds = parseInt((_time % 60).toString(), 10);//计算剩余的秒数
        let time = '';
        
        if (days > 0) 
        {
            if (days < 10)
                time = days + "Days ";
                if(days==1)
                {
                    time =days + "Day ";
                }
            else
            {
                time = days + "Days ";
            }
        }
        if (hours > 0) 
        {
            if (hours < 10)
            {
                time += "0" + hours + ":";
            }
            else
            {
                time += hours + ":";
            }
        }
        if (minutes > 0) 
        {
            if (minutes < 10)
            {
                time += "0" + minutes + ":";
            }
            else
            {
                time += minutes + ":";
            }
        } 
        else 
        {
            time += "00:";
        }
        if (seconds > 0) 
        {
            if (seconds < 10)
            {
                time += "0" + seconds;
            }
            else
            {
                time += seconds;
            }
        } 
        else 
        {
            time += "00";
        }
        return (time == "") ? "0" : time;
    }

    //以...来代替多出来的文字
    public static GetStrWithLen (str, len)
    {
        var playernName = str + '';
     
        var nameLength = 0;
        var cutIndex = 0;
         
        for(var i=0; i<playernName.length; i++) 
        {
            if(escape(playernName[i]).indexOf("%u")<0)
            {//不是中文
                
                if(playernName[i] >= 'A' && playernName[i] <= 'Z') 
                {
                    nameLength += 2;
                } 
                else 
                {
                    nameLength += 1;
                }
    
            }
            else
            {//中文
                nameLength += 3;
            }
            
            if(nameLength > len)
            {
                cutIndex = i;
                break;
            }
        }
    
        let strPoint = ''
        if(nameLength <= len)
        {
            cutIndex = playernName.length;
        } 
        else 
        {
            strPoint = '...'
        }
        var finalName =  playernName.slice(0, cutIndex) + strPoint; //
        return finalName;
    };

}