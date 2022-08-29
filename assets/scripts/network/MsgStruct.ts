

export class Msg_matchConfig
{
    gameType:number;
    matchId:number;
    matchName:string;
    enterFee:number;
    enterFeeType:number;
    enterFeeTicket:
    {
        tpId:number;
        name:string;
        desc:string;
        img:string;
        typeExpired:number;
        nums:number;
    };
    serviceFee:number;
    riseBlindTime:number;
    isRest:boolean;
    beginScore:number;
    beginBlind:number;
    seatCount:number;
    beginTime:number;
    minPlayer:number;
    maxPlayer:number;
    delayLevel:number;
    isAddBuy:boolean;
    reBuyCount:number;
    reBuyFee:number;
    reBuyFeeType:number;
    reBuyFeeTicket:
    {
        tpId:number;
        name:string;
        desc:string;
        img:string;
        typeExpired:number;
        nums:number;
    };
    rewardPlayerCount:number;
    isIpLimit:boolean;
    isGpsLimit:boolean;
    creatorNickname:string;
    creatorUserId:string;
    clubId:number;
    clubName:string;
    allianceId:number;
    allianceName:string;
    gameTime:number;
    ownerId:string;
    roomType:number;
    liverId:string;
    isLive:boolean;
    tableMicroIsOpen:boolean;
    releaseTime:number;
    beginMode:number;
    matchMode:number;
    allowPlayer:any;
    is_reload:boolean;
    strapConfig:
    {
        tag:string;
        isTop:boolean;
        rewardDesc:string;
        titleImg:string;
        titleColor:Array<number>;
        backgroundImg:string;
        coverImg:string;
    };
    satelliteId:number;
}

export class Msg_deskConfig
{
    gameId:number;
    gameName:string;
    matchType:number;
    matchID:number;
    baseScore:number;
    beforeScore:number;
    playTimes:number;
    playerCount:number;
    minTake:number;
    maxTake:number;
    hostId:string;
    ownerControl:boolean;
    isGameStart:boolean;
    roomStatus:number;
    isStraddle:boolean;
    isInsurance:boolean;
    ipNotify:boolean;
    gpsNotify:boolean;
    isShortCard:boolean;
    shortType:number;
    isCanOutScore:boolean;
    isDUserDouble:boolean;
    minHoldScore:number;
    minOutScore:number;
    minTakeD:number;
    maxTakeD:number;
    maxTotalTakeD:number;
    currencyType:number;
    tableId:number;
    isLive:boolean;
    roomType:number;
    delayCount:number;
    pauseCount:number;
    pauseTimeCut:number;
    isReplay:boolean;
    replayState:boolean;
    replayTimeCut:number;
    tableMicroIsOpen:boolean;
    posRandom:boolean;
    isSelectOuts:boolean;
    isOpenEqOuts:boolean;
    turnExpiredTime:number;
    liveAuthSwitch:boolean;
    delayHandCard:boolean;
    channelMode:number;
}

export class Msg_deskInfo
{
    basePool:number;
    poolInfos:any;
    curTurnUserId:string;
    curTurnTime:number;
    lastEndTime:number;
    leftTime:number;
    centerCards:Array<number>;
    dUserId:string;
    sUserId:string;
    bUserId:string;
    callCount:number;
    isAllIn:boolean;
    isGameResult:boolean;
    commandId:number;
    isCanDelay:boolean;
    leftDelayCount:number;
    delaySpend:string;
    raiseCount:number;
    minRaise:number;
    totalTime:number;
    straddleUsers:Array<any>;
    inSureUsers:Array<number>;
    inSurePools:any;
    turnInSure:any;
    winRates:any;
    livingUserId:string;
    anchorPhotoUrl:string;
    anchorNickName:string;
    delayTimes:number;
    isInvalidRaise:boolean;
    lookerNumber:number;
    posHistory:any;
    channelMode:number;
    deviceDenyMode:number;
    userList : Array<Msg_userFullInfo>;
}


export class Msg_status
{
    status:number;
    leftTime:number;
    curLevel:number;
    nextLevel:number;
    totalUser:number;
    totalReBuy:number;
    playerUser:number;
    restLeftTime:number;
    curBlind:number;
    beforeScore:number;
    nextBlind:number;
    nextBeforeScore:number;
    delayCount:number;
    reason:number;
    playTotalTime:number;
    ticketEnter:number;
    ticketReBuy:number;
    valueCut:number;
}

export class Msg_userFullInfo
{
    userInfo : Msg_userInfo;
    tableScore:number;
    totalScore:number;
    isPlaying:boolean;
    isGiveUp:boolean;
    isAllIn:boolean;
    pos:number;
    posLeftTime:number;
    take:number;
    status:number;
    cards:Array<number>;
    cardType:number;
    operateCard:number;
    maxCards:Array<number>;
    isHaveCards:boolean;
    showCards:Array<number>;
    delayTimes:number;
    straddleNextCnt:number;
    isLeave:boolean;
    isOpenMic:boolean;
    insureDelayTimes:number;
    preElection:
    {
        gameOpType:number;
        score:number;
        commandId:number;
    };
    mttBet:string;
    liveAuthAsk:boolean;
    isSendHandCard:boolean;
}


export class Msg_userInfo
{
    userId: string;
    nickname:string;
    gender:number;
    signiture:string;
    photoUrl:string;
    ip:string;
    jingDu:number;
    weiDu:number;
    score:number;
    idType:number;
    adminRole:number;
    isOpenMic:boolean;
    matchInfo:
    {
        gameTimes:number;
        playTimes:number;
        vPIP:number;
        winRate:number;
    };
    decoration:
    {
        pos1:number;
        pos2:number;
        pos3:number;
        pos4:number;
        pos5:number;
    }
}



//          流程
//RefreshMttInfo  - MttGetRoomInfo - EnterGame -  请求声网 - 请求消息展示 - MttSelfStatus - 修改mic状态
//      558              344            207         364       960           356             375

//RecordDuringMatch -  接收mic状态 - MttStatusChange - RefreshMttInfo - UpdatePlayerScore
//      233             376             353             558                 222

//GameStart - whosturn - PlayerAction - PotChange - SendPublicCards - DecideConbination
//   216         217        218            238          219                 237

//GamePlayerStatusChange -  GameResult --更新比分等消息后-- GameStart
//          213                 221                         216

