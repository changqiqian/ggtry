import { _decorator} from 'cc';
import { BaseData } from '../../base/BaseData';
import { DataNotify } from '../../base/DataNotify';
import { MultipleNotify, SingletonBaseNotify } from '../../base/Singleton';
import { Network } from '../../network/Network';

export class GameData extends MultipleNotify
{

    //UI控制
    Data_ChatingSubLayer :  BaseData<Game_ChattingSubLayer> = new BaseData<Game_ChattingSubLayer>();  //聊天页面子页面




}


export enum Game_ChattingSubLayer
{
    ChatHistory,
    Shortcut,
}

