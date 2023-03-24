declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Properties of a CommonResult. */
export interface ICommonResult {

    /** CommonResult resId */
    resId?: (number|null);

    /** CommonResult resMessage */
    resMessage?: (string|null);
}

/** Represents a CommonResult. */
export class CommonResult implements ICommonResult {

    /**
     * Constructs a new CommonResult.
     * @param [p] Properties to set
     */
    constructor(p?: ICommonResult);

    /** CommonResult resId. */
    public resId: number;

    /** CommonResult resMessage. */
    public resMessage: string;

    /**
     * Encodes the specified CommonResult message. Does not implicitly {@link CommonResult.verify|verify} messages.
     * @param m CommonResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICommonResult, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CommonResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CommonResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CommonResult;
}

/** AccountLevel enum. */
export enum AccountLevel {
    AccountLevel_Normal = 0,
    AccountLevel_Agent = 1,
    AccountLevel_Boss = 2
}

/** AccountStatus enum. */
export enum AccountStatus {
    AccountStatus_Normal = 0,
    AccountStatus_Frozen = 1
}

/** GameCurrencyType enum. */
export enum GameCurrencyType {
    GameCurrencyType_Point = 0,
    GameCurrencyType_Coin = 1
}

/** Represents a C2SHeartbeatPing. */
export class C2SHeartbeatPing implements IC2SHeartbeatPing {

    /**
     * Constructs a new C2SHeartbeatPing.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SHeartbeatPing);

    /**
     * Encodes the specified C2SHeartbeatPing message. Does not implicitly {@link C2SHeartbeatPing.verify|verify} messages.
     * @param m C2SHeartbeatPing message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SHeartbeatPing, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SHeartbeatPing message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SHeartbeatPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SHeartbeatPing;
}

/** Represents a S2CHeartbeatPong. */
export class S2CHeartbeatPong implements IS2CHeartbeatPong {

    /**
     * Constructs a new S2CHeartbeatPong.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CHeartbeatPong);

    /**
     * Encodes the specified S2CHeartbeatPong message. Does not implicitly {@link S2CHeartbeatPong.verify|verify} messages.
     * @param m S2CHeartbeatPong message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CHeartbeatPong, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CHeartbeatPong message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CHeartbeatPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CHeartbeatPong;
}

/** Represents a S2CKick. */
export class S2CKick implements IS2CKick {

    /**
     * Constructs a new S2CKick.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CKick);

    /** S2CKick result. */
    public result?: (ICommonResult|null);

    /**
     * Encodes the specified S2CKick message. Does not implicitly {@link S2CKick.verify|verify} messages.
     * @param m S2CKick message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CKick, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CKick message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CKick;
}

/** Represents a UserInfo. */
export class UserInfo implements IUserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IUserInfo);

    /** UserInfo uid. */
    public uid: string;

    /** UserInfo nickName. */
    public nickName: string;

    /** UserInfo head. */
    public head: string;

    /** UserInfo coin. */
    public coin: number;

    /** UserInfo diamond. */
    public diamond: number;

    /** UserInfo accountLevel. */
    public accountLevel: AccountLevel;

    /** UserInfo accountStatus. */
    public accountStatus: AccountStatus;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @param m UserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): UserInfo;
}

/** Represents a C2STexasCowboyEnterGame. */
export class C2STexasCowboyEnterGame implements IC2STexasCowboyEnterGame {

    /**
     * Constructs a new C2STexasCowboyEnterGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyEnterGame);

    /** C2STexasCowboyEnterGame gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCowboyEnterGame message. Does not implicitly {@link C2STexasCowboyEnterGame.verify|verify} messages.
     * @param m C2STexasCowboyEnterGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyEnterGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyEnterGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyEnterGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyEnterGame;
}

/** Represents a C2STexasCowboyExitGame. */
export class C2STexasCowboyExitGame implements IC2STexasCowboyExitGame {

    /**
     * Constructs a new C2STexasCowboyExitGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyExitGame);

    /** C2STexasCowboyExitGame gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCowboyExitGame message. Does not implicitly {@link C2STexasCowboyExitGame.verify|verify} messages.
     * @param m C2STexasCowboyExitGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyExitGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyExitGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyExitGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyExitGame;
}

/** Represents a C2STexasCowboyBet. */
export class C2STexasCowboyBet implements IC2STexasCowboyBet {

    /**
     * Constructs a new C2STexasCowboyBet.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyBet);

    /** C2STexasCowboyBet gameId. */
    public gameId: string;

    /** C2STexasCowboyBet betInfo. */
    public betInfo?: (ICowboySingleBet|null);

    /**
     * Encodes the specified C2STexasCowboyBet message. Does not implicitly {@link C2STexasCowboyBet.verify|verify} messages.
     * @param m C2STexasCowboyBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyBet, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyBet;
}

/** Represents a C2STexasCowboyRecord. */
export class C2STexasCowboyRecord implements IC2STexasCowboyRecord {

    /**
     * Constructs a new C2STexasCowboyRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyRecord);

    /** C2STexasCowboyRecord gameId. */
    public gameId: string;

    /** C2STexasCowboyRecord whichGame. */
    public whichGame: number;

    /**
     * Encodes the specified C2STexasCowboyRecord message. Does not implicitly {@link C2STexasCowboyRecord.verify|verify} messages.
     * @param m C2STexasCowboyRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyRecord;
}

/** Represents a C2STexasCowboyBringIn. */
export class C2STexasCowboyBringIn implements IC2STexasCowboyBringIn {

    /**
     * Constructs a new C2STexasCowboyBringIn.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyBringIn);

    /** C2STexasCowboyBringIn gameId. */
    public gameId: string;

    /** C2STexasCowboyBringIn amount. */
    public amount: number;

    /**
     * Encodes the specified C2STexasCowboyBringIn message. Does not implicitly {@link C2STexasCowboyBringIn.verify|verify} messages.
     * @param m C2STexasCowboyBringIn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyBringIn, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyBringIn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyBringIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyBringIn;
}

/** Represents a C2STexasCowboyBringOut. */
export class C2STexasCowboyBringOut implements IC2STexasCowboyBringOut {

    /**
     * Constructs a new C2STexasCowboyBringOut.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyBringOut);

    /** C2STexasCowboyBringOut gameId. */
    public gameId: string;

    /** C2STexasCowboyBringOut amount. */
    public amount: number;

    /**
     * Encodes the specified C2STexasCowboyBringOut message. Does not implicitly {@link C2STexasCowboyBringOut.verify|verify} messages.
     * @param m C2STexasCowboyBringOut message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyBringOut, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyBringOut message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyBringOut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyBringOut;
}

/** Represents a C2STexasCowboyTotalHistory. */
export class C2STexasCowboyTotalHistory implements IC2STexasCowboyTotalHistory {

    /**
     * Constructs a new C2STexasCowboyTotalHistory.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCowboyTotalHistory);

    /** C2STexasCowboyTotalHistory gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCowboyTotalHistory message. Does not implicitly {@link C2STexasCowboyTotalHistory.verify|verify} messages.
     * @param m C2STexasCowboyTotalHistory message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCowboyTotalHistory, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCowboyTotalHistory message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCowboyTotalHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCowboyTotalHistory;
}

/** CowboyAreaType enum. */
export enum CowboyAreaType {
    CowboyAreaType_0 = 0,
    CowboyAreaType_1 = 1,
    CowboyAreaType_2 = 2,
    CowboyAreaType_3 = 3,
    CowboyAreaType_4 = 4,
    CowboyAreaType_5 = 5,
    CowboyAreaType_6 = 6,
    CowboyAreaType_7 = 7,
    CowboyAreaType_8 = 8,
    CowboyAreaType_9 = 9,
    CowboyAreaType_10 = 10
}

/** CowboyPhase enum. */
export enum CowboyPhase {
    CowBoyPhase_Start = 0,
    CowBoyPhase_Settlement = 1
}

/** Represents a CowboyAreaInfo. */
export class CowboyAreaInfo implements ICowboyAreaInfo {

    /**
     * Constructs a new CowboyAreaInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboyAreaInfo);

    /** CowboyAreaInfo cowboyAreaType. */
    public cowboyAreaType: CowboyAreaType;

    /** CowboyAreaInfo totalBetNum. */
    public totalBetNum: number;

    /**
     * Encodes the specified CowboyAreaInfo message. Does not implicitly {@link CowboyAreaInfo.verify|verify} messages.
     * @param m CowboyAreaInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboyAreaInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboyAreaInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboyAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboyAreaInfo;
}

/** Represents a CowboySingleBet. */
export class CowboySingleBet implements ICowboySingleBet {

    /**
     * Constructs a new CowboySingleBet.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboySingleBet);

    /** CowboySingleBet actionId. */
    public actionId: string;

    /** CowboySingleBet amount. */
    public amount: number;

    /** CowboySingleBet betArea. */
    public betArea: CowboyAreaType;

    /**
     * Encodes the specified CowboySingleBet message. Does not implicitly {@link CowboySingleBet.verify|verify} messages.
     * @param m CowboySingleBet message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboySingleBet, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboySingleBet message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboySingleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboySingleBet;
}

/** Represents a CowboyHistory. */
export class CowboyHistory implements ICowboyHistory {

    /**
     * Constructs a new CowboyHistory.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboyHistory);

    /** CowboyHistory cowboyAreaType. */
    public cowboyAreaType: CowboyAreaType;

    /** CowboyHistory result. */
    public result: boolean[];

    /**
     * Encodes the specified CowboyHistory message. Does not implicitly {@link CowboyHistory.verify|verify} messages.
     * @param m CowboyHistory message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboyHistory, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboyHistory message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboyHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboyHistory;
}

/** Represents a CowboyTotalHistory. */
export class CowboyTotalHistory implements ICowboyTotalHistory {

    /**
     * Constructs a new CowboyTotalHistory.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboyTotalHistory);

    /** CowboyTotalHistory cowboyAreaType. */
    public cowboyAreaType: CowboyAreaType;

    /** CowboyTotalHistory count. */
    public count: number;

    /**
     * Encodes the specified CowboyTotalHistory message. Does not implicitly {@link CowboyTotalHistory.verify|verify} messages.
     * @param m CowboyTotalHistory message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboyTotalHistory, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboyTotalHistory message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboyTotalHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboyTotalHistory;
}

/** Represents a CowboyRecord. */
export class CowboyRecord implements ICowboyRecord {

    /**
     * Constructs a new CowboyRecord.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboyRecord);

    /** CowboyRecord cowboyAreaType. */
    public cowboyAreaType: CowboyAreaType[];

    /** CowboyRecord areaWinLose. */
    public areaWinLose: number[];

    /** CowboyRecord betAmount. */
    public betAmount: number[];

    /** CowboyRecord boyCards. */
    public boyCards: ICardInfo[];

    /** CowboyRecord girlCards. */
    public girlCards: ICardInfo[];

    /** CowboyRecord publicCards. */
    public publicCards: ICardInfo[];

    /** CowboyRecord gameCode. */
    public gameCode: string;

    /**
     * Encodes the specified CowboyRecord message. Does not implicitly {@link CowboyRecord.verify|verify} messages.
     * @param m CowboyRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboyRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboyRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboyRecord;
}

/** Represents a CowboyWinLose. */
export class CowboyWinLose implements ICowboyWinLose {

    /**
     * Constructs a new CowboyWinLose.
     * @param [p] Properties to set
     */
    constructor(p?: ICowboyWinLose);

    /** CowboyWinLose uid. */
    public uid: string;

    /** CowboyWinLose winLose. */
    public winLose: number;

    /** CowboyWinLose restAmount. */
    public restAmount: number;

    /** CowboyWinLose reward. */
    public reward: number;

    /**
     * Encodes the specified CowboyWinLose message. Does not implicitly {@link CowboyWinLose.verify|verify} messages.
     * @param m CowboyWinLose message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICowboyWinLose, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CowboyWinLose message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CowboyWinLose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CowboyWinLose;
}

/** GameType enum. */
export enum GameType {
    GameType_TexasCash = 0,
    GameType_ShortCash = 1,
    GameType_OmhCash = 2,
    GameType_TexasMtt = 3,
    GameType_ShortMtt = 4,
    GameType_OmhMtt = 5,
    GameType_Cowboy = 6
}

/** Represents a CardInfo. */
export class CardInfo implements ICardInfo {

    /**
     * Constructs a new CardInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ICardInfo);

    /** CardInfo number. */
    public number: number;

    /** CardInfo type. */
    public type: number;

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @param m CardInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICardInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CardInfo;
}

/** Represents a S2CTexasCowboyEnterGameResp. */
export class S2CTexasCowboyEnterGameResp implements IS2CTexasCowboyEnterGameResp {

    /**
     * Constructs a new S2CTexasCowboyEnterGameResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyEnterGameResp);

    /** S2CTexasCowboyEnterGameResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyEnterGameResp gameId. */
    public gameId: string;

    /** S2CTexasCowboyEnterGameResp phase. */
    public phase: CowboyPhase;

    /** S2CTexasCowboyEnterGameResp cowboyAreaInfoList. */
    public cowboyAreaInfoList: ICowboyAreaInfo[];

    /** S2CTexasCowboyEnterGameResp myBetInfo. */
    public myBetInfo: ICowboySingleBet[];

    /** S2CTexasCowboyEnterGameResp history. */
    public history: ICowboyHistory[];

    /** S2CTexasCowboyEnterGameResp settlementTime. */
    public settlementTime: number;

    /** S2CTexasCowboyEnterGameResp betTime. */
    public betTime: number;

    /** S2CTexasCowboyEnterGameResp restTime. */
    public restTime: number;

    /** S2CTexasCowboyEnterGameResp oneCard. */
    public oneCard?: (ICardInfo|null);

    /** S2CTexasCowboyEnterGameResp money. */
    public money: number;

    /** S2CTexasCowboyEnterGameResp ratio. */
    public ratio: number[];

    /**
     * Encodes the specified S2CTexasCowboyEnterGameResp message. Does not implicitly {@link S2CTexasCowboyEnterGameResp.verify|verify} messages.
     * @param m S2CTexasCowboyEnterGameResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyEnterGameResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyEnterGameResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyEnterGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyEnterGameResp;
}

/** Represents a S2CTexasCowboyExitGameResp. */
export class S2CTexasCowboyExitGameResp implements IS2CTexasCowboyExitGameResp {

    /**
     * Constructs a new S2CTexasCowboyExitGameResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyExitGameResp);

    /** S2CTexasCowboyExitGameResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyExitGameResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CTexasCowboyExitGameResp message. Does not implicitly {@link S2CTexasCowboyExitGameResp.verify|verify} messages.
     * @param m S2CTexasCowboyExitGameResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyExitGameResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyExitGameResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyExitGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyExitGameResp;
}

/** Represents a S2CTexasCowboyBetResp. */
export class S2CTexasCowboyBetResp implements IS2CTexasCowboyBetResp {

    /**
     * Constructs a new S2CTexasCowboyBetResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyBetResp);

    /** S2CTexasCowboyBetResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyBetResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CTexasCowboyBetResp message. Does not implicitly {@link S2CTexasCowboyBetResp.verify|verify} messages.
     * @param m S2CTexasCowboyBetResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyBetResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyBetResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyBetResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyBetResp;
}

/** Represents a S2CTexasCowboyRecordResp. */
export class S2CTexasCowboyRecordResp implements IS2CTexasCowboyRecordResp {

    /**
     * Constructs a new S2CTexasCowboyRecordResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyRecordResp);

    /** S2CTexasCowboyRecordResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyRecordResp gameId. */
    public gameId: string;

    /** S2CTexasCowboyRecordResp record. */
    public record?: (ICowboyRecord|null);

    /** S2CTexasCowboyRecordResp whichGame. */
    public whichGame: number;

    /** S2CTexasCowboyRecordResp totalGame. */
    public totalGame: number;

    /**
     * Encodes the specified S2CTexasCowboyRecordResp message. Does not implicitly {@link S2CTexasCowboyRecordResp.verify|verify} messages.
     * @param m S2CTexasCowboyRecordResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyRecordResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyRecordResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyRecordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyRecordResp;
}

/** Represents a S2CTexasCowboyBringInResp. */
export class S2CTexasCowboyBringInResp implements IS2CTexasCowboyBringInResp {

    /**
     * Constructs a new S2CTexasCowboyBringInResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyBringInResp);

    /** S2CTexasCowboyBringInResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyBringInResp gameId. */
    public gameId: string;

    /** S2CTexasCowboyBringInResp amount. */
    public amount: number;

    /** S2CTexasCowboyBringInResp totalAmount. */
    public totalAmount: number;

    /**
     * Encodes the specified S2CTexasCowboyBringInResp message. Does not implicitly {@link S2CTexasCowboyBringInResp.verify|verify} messages.
     * @param m S2CTexasCowboyBringInResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyBringInResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyBringInResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyBringInResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyBringInResp;
}

/** Represents a S2CTexasCowboyBringOutResp. */
export class S2CTexasCowboyBringOutResp implements IS2CTexasCowboyBringOutResp {

    /**
     * Constructs a new S2CTexasCowboyBringOutResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyBringOutResp);

    /** S2CTexasCowboyBringOutResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyBringOutResp gameId. */
    public gameId: string;

    /** S2CTexasCowboyBringOutResp amount. */
    public amount: number;

    /** S2CTexasCowboyBringOutResp totalAmount. */
    public totalAmount: number;

    /**
     * Encodes the specified S2CTexasCowboyBringOutResp message. Does not implicitly {@link S2CTexasCowboyBringOutResp.verify|verify} messages.
     * @param m S2CTexasCowboyBringOutResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyBringOutResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyBringOutResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyBringOutResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyBringOutResp;
}

/** Represents a S2CTexasCowboyTotalHistoryResp. */
export class S2CTexasCowboyTotalHistoryResp implements IS2CTexasCowboyTotalHistoryResp {

    /**
     * Constructs a new S2CTexasCowboyTotalHistoryResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyTotalHistoryResp);

    /** S2CTexasCowboyTotalHistoryResp result. */
    public result?: (ICommonResult|null);

    /** S2CTexasCowboyTotalHistoryResp gameId. */
    public gameId: string;

    /** S2CTexasCowboyTotalHistoryResp totalHistory. */
    public totalHistory: ICowboyTotalHistory[];

    /** S2CTexasCowboyTotalHistoryResp totalGameCount. */
    public totalGameCount: number;

    /**
     * Encodes the specified S2CTexasCowboyTotalHistoryResp message. Does not implicitly {@link S2CTexasCowboyTotalHistoryResp.verify|verify} messages.
     * @param m S2CTexasCowboyTotalHistoryResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyTotalHistoryResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyTotalHistoryResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyTotalHistoryResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyTotalHistoryResp;
}

/** Represents a S2CTexasCowboyBetNotify. */
export class S2CTexasCowboyBetNotify implements IS2CTexasCowboyBetNotify {

    /**
     * Constructs a new S2CTexasCowboyBetNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyBetNotify);

    /** S2CTexasCowboyBetNotify gameId. */
    public gameId: string;

    /** S2CTexasCowboyBetNotify betInfo. */
    public betInfo: ICowboySingleBet[];

    /**
     * Encodes the specified S2CTexasCowboyBetNotify message. Does not implicitly {@link S2CTexasCowboyBetNotify.verify|verify} messages.
     * @param m S2CTexasCowboyBetNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyBetNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyBetNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyBetNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyBetNotify;
}

/** Represents a S2CTexasCowboyGameStartNotify. */
export class S2CTexasCowboyGameStartNotify implements IS2CTexasCowboyGameStartNotify {

    /**
     * Constructs a new S2CTexasCowboyGameStartNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyGameStartNotify);

    /** S2CTexasCowboyGameStartNotify gameId. */
    public gameId: string;

    /** S2CTexasCowboyGameStartNotify oneCard. */
    public oneCard?: (ICardInfo|null);

    /**
     * Encodes the specified S2CTexasCowboyGameStartNotify message. Does not implicitly {@link S2CTexasCowboyGameStartNotify.verify|verify} messages.
     * @param m S2CTexasCowboyGameStartNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyGameStartNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyGameStartNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyGameStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyGameStartNotify;
}

/** Represents a S2CTexasCowboyGameSettlementNotify. */
export class S2CTexasCowboyGameSettlementNotify implements IS2CTexasCowboyGameSettlementNotify {

    /**
     * Constructs a new S2CTexasCowboyGameSettlementNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CTexasCowboyGameSettlementNotify);

    /** S2CTexasCowboyGameSettlementNotify gameId. */
    public gameId: string;

    /** S2CTexasCowboyGameSettlementNotify reward. */
    public reward: CowboyAreaType[];

    /** S2CTexasCowboyGameSettlementNotify result. */
    public result: ICowboyWinLose[];

    /** S2CTexasCowboyGameSettlementNotify boyCards. */
    public boyCards: ICardInfo[];

    /** S2CTexasCowboyGameSettlementNotify girlCards. */
    public girlCards: ICardInfo[];

    /** S2CTexasCowboyGameSettlementNotify publicCards. */
    public publicCards: ICardInfo[];

    /** S2CTexasCowboyGameSettlementNotify winner. */
    public winner: number;

    /** S2CTexasCowboyGameSettlementNotify winnerCombination. */
    public winnerCombination: number;

    /**
     * Encodes the specified S2CTexasCowboyGameSettlementNotify message. Does not implicitly {@link S2CTexasCowboyGameSettlementNotify.verify|verify} messages.
     * @param m S2CTexasCowboyGameSettlementNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CTexasCowboyGameSettlementNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CTexasCowboyGameSettlementNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CTexasCowboyGameSettlementNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CTexasCowboyGameSettlementNotify;
}

/** AmountChangeType enum. */
export enum AmountChangeType {
    AmountType_Other = 0,
    AmountType_Charge = 1,
    AmountType_Grant = 2,
    AmountType_Prop = 3,
    AmountType_Commission = 4,
    AmountType_Return = 5,
    AmountType_Insurance = 6,
    AmountType_InsuranceReturn = 7,
    AmountType_BringIn = 8,
    AmountType_BringOut = 9,
    AmountType_JackpotIn = 10,
    AmountType_Jackpot = 11,
    AmountType_CowboyBet = 12,
    AmountType_CowboyReturn = 13
}

/** PropType enum. */
export enum PropType {
    PropType_Other = 0,
    PropType_ForceHand = 1,
    PropType_RubbingCards = 2,
    PropType_PublicCard = 3,
    PropType_DelayThinking = 4,
    PropType_Interaction = 5
}

/** JackpotType enum. */
export enum JackpotType {
    JackpotType_Other = 0,
    JackpotType_RoyalStraightFlash = 1,
    JackpotType_RoyalStraightFlash6 = 2,
    JackpotType_RoyalStraightFlash7 = 3
}

/** Represents a Game2LoggerGameRecord. */
export class Game2LoggerGameRecord implements IGame2LoggerGameRecord {

    /**
     * Constructs a new Game2LoggerGameRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IGame2LoggerGameRecord);

    /** Game2LoggerGameRecord gameType. */
    public gameType: GameType;

    /** Game2LoggerGameRecord gameId. */
    public gameId: string;

    /** Game2LoggerGameRecord creator. */
    public creator: string;

    /** Game2LoggerGameRecord beginTime. */
    public beginTime: string;

    /** Game2LoggerGameRecord endTime. */
    public endTime: string;

    /** Game2LoggerGameRecord configAnte. */
    public configAnte: number;

    /** Game2LoggerGameRecord configSmallBet. */
    public configSmallBet: number;

    /** Game2LoggerGameRecord configBigBet. */
    public configBigBet: number;

    /** Game2LoggerGameRecord configStraddleBet. */
    public configStraddleBet: number;

    /** Game2LoggerGameRecord configPlayerNum. */
    public configPlayerNum: number;

    /** Game2LoggerGameRecord totalPlayerNum. */
    public totalPlayerNum: number;

    /** Game2LoggerGameRecord gameSubRecord. */
    public gameSubRecord: IGameSubRecord[];

    /**
     * Encodes the specified Game2LoggerGameRecord message. Does not implicitly {@link Game2LoggerGameRecord.verify|verify} messages.
     * @param m Game2LoggerGameRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGame2LoggerGameRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Game2LoggerGameRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Game2LoggerGameRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): Game2LoggerGameRecord;
}

/** Represents a GameSubRecord. */
export class GameSubRecord implements IGameSubRecord {

    /**
     * Constructs a new GameSubRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IGameSubRecord);

    /** GameSubRecord subRoundId. */
    public subRoundId: number;

    /** GameSubRecord subBeginTime. */
    public subBeginTime: string;

    /** GameSubRecord subEndTime. */
    public subEndTime: string;

    /** GameSubRecord subTotalPlayerNum. */
    public subTotalPlayerNum: number;

    /** GameSubRecord subTotalBringin. */
    public subTotalBringin: number;

    /** GameSubRecord subTotalBringout. */
    public subTotalBringout: number;

    /** GameSubRecord subTotalCommission. */
    public subTotalCommission: number;

    /** GameSubRecord subTotalReturn. */
    public subTotalReturn: number;

    /** GameSubRecord subTotalInsurance. */
    public subTotalInsurance: number;

    /** GameSubRecord jackpot. */
    public jackpot: number;

    /** GameSubRecord jackpotCommission. */
    public jackpotCommission: number;

    /**
     * Encodes the specified GameSubRecord message. Does not implicitly {@link GameSubRecord.verify|verify} messages.
     * @param m GameSubRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameSubRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a GameSubRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameSubRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): GameSubRecord;
}

/** Represents a Game2LoggerReplayRecord. */
export class Game2LoggerReplayRecord implements IGame2LoggerReplayRecord {

    /**
     * Constructs a new Game2LoggerReplayRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IGame2LoggerReplayRecord);

    /** Game2LoggerReplayRecord gameType. */
    public gameType: GameType;

    /** Game2LoggerReplayRecord gameId. */
    public gameId: string;

    /** Game2LoggerReplayRecord endTime. */
    public endTime: string;

    /** Game2LoggerReplayRecord replayRecord. */
    public replayRecord: IReplayRecord[];

    /**
     * Encodes the specified Game2LoggerReplayRecord message. Does not implicitly {@link Game2LoggerReplayRecord.verify|verify} messages.
     * @param m Game2LoggerReplayRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGame2LoggerReplayRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Game2LoggerReplayRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Game2LoggerReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): Game2LoggerReplayRecord;
}

/** Represents a ReplayRecord. */
export class ReplayRecord implements IReplayRecord {

    /**
     * Constructs a new ReplayRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IReplayRecord);

    /** ReplayRecord happenTime. */
    public happenTime: string;

    /** ReplayRecord userName. */
    public userName: string;

    /** ReplayRecord userId. */
    public userId: string;

    /** ReplayRecord clubName. */
    public clubName: string;

    /** ReplayRecord clubId. */
    public clubId: string;

    /** ReplayRecord index. */
    public index: number;

    /** ReplayRecord publicCards. */
    public publicCards: ICardInfo[];

    /** ReplayRecord myCards. */
    public myCards: ICardInfo[];

    /** ReplayRecord myResult. */
    public myResult: number;

    /** ReplayRecord winnerCards. */
    public winnerCards: ICardInfo[];

    /** ReplayRecord winnerName. */
    public winnerName: string;

    /** ReplayRecord winnerHead. */
    public winnerHead: string;

    /** ReplayRecord winnerResult. */
    public winnerResult: number;

    /** ReplayRecord texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** ReplayRecord players. */
    public players: IPlayerInfo[];

    /** ReplayRecord dealerUid. */
    public dealerUid: string;

    /** ReplayRecord antes. */
    public antes: number;

    /** ReplayRecord roundStartActions. */
    public roundStartActions: IActionResult[];

    /** ReplayRecord preFlopActions. */
    public preFlopActions: IActionResult[];

    /** ReplayRecord flopActions. */
    public flopActions: IActionResult[];

    /** ReplayRecord turnActions. */
    public turnActions: IActionResult[];

    /** ReplayRecord riverActions. */
    public riverActions: IActionResult[];

    /** ReplayRecord result. */
    public result: IPlayerWinLose[];

    /** ReplayRecord potInfoFlop. */
    public potInfoFlop: IPotInfo[];

    /** ReplayRecord potInfoTurn. */
    public potInfoTurn: IPotInfo[];

    /** ReplayRecord potInfoRiver. */
    public potInfoRiver: IPotInfo[];

    /**
     * Encodes the specified ReplayRecord message. Does not implicitly {@link ReplayRecord.verify|verify} messages.
     * @param m ReplayRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReplayRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ReplayRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ReplayRecord;
}

/** Represents a Game2LoggerAmountChange. */
export class Game2LoggerAmountChange implements IGame2LoggerAmountChange {

    /**
     * Constructs a new Game2LoggerAmountChange.
     * @param [p] Properties to set
     */
    constructor(p?: IGame2LoggerAmountChange);

    /** Game2LoggerAmountChange gameType. */
    public gameType: GameType;

    /** Game2LoggerAmountChange gameId. */
    public gameId: string;

    /** Game2LoggerAmountChange amountChangeInfo. */
    public amountChangeInfo: IAmountChangeInfo[];

    /**
     * Encodes the specified Game2LoggerAmountChange message. Does not implicitly {@link Game2LoggerAmountChange.verify|verify} messages.
     * @param m Game2LoggerAmountChange message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGame2LoggerAmountChange, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Game2LoggerAmountChange message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Game2LoggerAmountChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): Game2LoggerAmountChange;
}

/** Represents an AmountChangeInfo. */
export class AmountChangeInfo implements IAmountChangeInfo {

    /**
     * Constructs a new AmountChangeInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAmountChangeInfo);

    /** AmountChangeInfo happenTime. */
    public happenTime: string;

    /** AmountChangeInfo userId. */
    public userId: string;

    /** AmountChangeInfo userName. */
    public userName: string;

    /** AmountChangeInfo head. */
    public head: string;

    /** AmountChangeInfo amountChange. */
    public amountChange: number;

    /** AmountChangeInfo preChange. */
    public preChange: number;

    /** AmountChangeInfo afterChange. */
    public afterChange: number;

    /** AmountChangeInfo amountChangeType. */
    public amountChangeType: AmountChangeType;

    /** AmountChangeInfo amountChangeGenerics. */
    public amountChangeGenerics?: (IAmountChangeGenerics|null);

    /**
     * Encodes the specified AmountChangeInfo message. Does not implicitly {@link AmountChangeInfo.verify|verify} messages.
     * @param m AmountChangeInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAmountChangeInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AmountChangeInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AmountChangeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): AmountChangeInfo;
}

/** Represents an AmountChangeGenerics. */
export class AmountChangeGenerics implements IAmountChangeGenerics {

    /**
     * Constructs a new AmountChangeGenerics.
     * @param [p] Properties to set
     */
    constructor(p?: IAmountChangeGenerics);

    /** AmountChangeGenerics clubName. */
    public clubName: string;

    /** AmountChangeGenerics clubId. */
    public clubId: string;

    /** AmountChangeGenerics baseProfit. */
    public baseProfit: number;

    /** AmountChangeGenerics propRate. */
    public propRate: number;

    /** AmountChangeGenerics propType. */
    public propType: PropType;

    /** AmountChangeGenerics preSettlement. */
    public preSettlement: number;

    /** AmountChangeGenerics handId. */
    public handId: string;

    /** AmountChangeGenerics poolRate. */
    public poolRate: number;

    /** AmountChangeGenerics currentHandCount. */
    public currentHandCount: number;

    /** AmountChangeGenerics currentWinCount. */
    public currentWinCount: number;

    /** AmountChangeGenerics betType. */
    public betType: CowboyAreaType;

    /** AmountChangeGenerics levelRate. */
    public levelRate: number;

    /** AmountChangeGenerics jackpotType. */
    public jackpotType: JackpotType;

    /** AmountChangeGenerics jackpotRate. */
    public jackpotRate: number;

    /** AmountChangeGenerics jackpotPool. */
    public jackpotPool: number;

    /**
     * Encodes the specified AmountChangeGenerics message. Does not implicitly {@link AmountChangeGenerics.verify|verify} messages.
     * @param m AmountChangeGenerics message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAmountChangeGenerics, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AmountChangeGenerics message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AmountChangeGenerics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): AmountChangeGenerics;
}

/** ActionType enum. */
export enum ActionType {
    ActionType_Init = 0,
    ActionType_Fold = 1,
    ActionType_Check = 2,
    ActionType_Bet = 3,
    ActionType_Ante = 4,
    ActionType_SB = 5,
    ActionType_BB = 6,
    ActionType_Straddle = 7,
    ActionType_Raise = 8,
    ActionType_AllIn = 9,
    ActionType_Call = 10
}

/** SettlementType enum. */
export enum SettlementType {
    SettlementType_AdvanceFold = 0,
    SettlementType_AdvanceSettlement = 1,
    SettlementType_NormalSettlement = 2
}

/** WinLoseType enum. */
export enum WinLoseType {
    WinLoseType_Win = 0,
    WinLoseType_Lose = 1
}

/** GameTaxType enum. */
export enum GameTaxType {
    GameTaxType_EveryRound = 0,
    GameTaxType_WholeGameEnd = 1
}

/** TexasCashState enum. */
export enum TexasCashState {
    TexasCashState_Create = 0,
    TexasCashState_WaitStart = 1,
    TexasCashState_RoundStart = 2,
    TexasCashState_PreFlopRound = 3,
    TexasCashState_FlopRound = 4,
    TexasCashState_TurnRound = 5,
    TexasCashState_RiverRound = 6,
    TexasCashState_Settlement = 7
}

/** GameRole enum. */
export enum GameRole {
    GameRole_Observer = 0,
    GameRole_Player = 1
}

/** Represents a BasicTexasConfig. */
export class BasicTexasConfig implements IBasicTexasConfig {

    /**
     * Constructs a new BasicTexasConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IBasicTexasConfig);

    /** BasicTexasConfig gameType. */
    public gameType: GameType;

    /** BasicTexasConfig gameName. */
    public gameName: string;

    /** BasicTexasConfig currencyType. */
    public currencyType: GameCurrencyType;

    /** BasicTexasConfig taxType. */
    public taxType: GameTaxType;

    /** BasicTexasConfig taxRatio. */
    public taxRatio: number;

    /** BasicTexasConfig smallBlind. */
    public smallBlind: number;

    /** BasicTexasConfig straddle. */
    public straddle: boolean;

    /** BasicTexasConfig ante. */
    public ante: number;

    /** BasicTexasConfig maxTotalBuyIn. */
    public maxTotalBuyIn: number;

    /** BasicTexasConfig minBringIn. */
    public minBringIn: number;

    /** BasicTexasConfig maxBringIn. */
    public maxBringIn: number;

    /** BasicTexasConfig allowBringOut. */
    public allowBringOut: boolean;

    /** BasicTexasConfig minScoreAfterBringOut. */
    public minScoreAfterBringOut: number;

    /** BasicTexasConfig insurance. */
    public insurance: boolean;

    /** BasicTexasConfig gameDuration. */
    public gameDuration: number;

    /** BasicTexasConfig thinkingTime. */
    public thinkingTime: number;

    /** BasicTexasConfig seatNum. */
    public seatNum: number;

    /** BasicTexasConfig autoStartNum. */
    public autoStartNum: number;

    /** BasicTexasConfig gpsLimit. */
    public gpsLimit: boolean;

    /** BasicTexasConfig ipLimit. */
    public ipLimit: boolean;

    /**
     * Encodes the specified BasicTexasConfig message. Does not implicitly {@link BasicTexasConfig.verify|verify} messages.
     * @param m BasicTexasConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBasicTexasConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a BasicTexasConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BasicTexasConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): BasicTexasConfig;
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerInfo);

    /** PlayerInfo uid. */
    public uid: string;

    /** PlayerInfo nickName. */
    public nickName: string;

    /** PlayerInfo head. */
    public head: string;

    /** PlayerInfo currencyNum. */
    public currencyNum: number;

    /** PlayerInfo bringInNum. */
    public bringInNum: number;

    /** PlayerInfo online. */
    public online: boolean;

    /** PlayerInfo gameRole. */
    public gameRole: GameRole;

    /** PlayerInfo cards. */
    public cards: ICardInfo[];

    /** PlayerInfo seat. */
    public seat: number;

    /** PlayerInfo buyInLeftTime. */
    public buyInLeftTime: number;

    /** PlayerInfo fold. */
    public fold: boolean;

    /** PlayerInfo autoLeftTime. */
    public autoLeftTime: number;

    /** PlayerInfo auto. */
    public auto: boolean;

    /** PlayerInfo totalHands. */
    public totalHands: number;

    /** PlayerInfo totalFlopHands. */
    public totalFlopHands: number;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param m PlayerInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PlayerInfo;
}

/** Represents a PlayerHistoryInfo. */
export class PlayerHistoryInfo implements IPlayerHistoryInfo {

    /**
     * Constructs a new PlayerHistoryInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerHistoryInfo);

    /** PlayerHistoryInfo uid. */
    public uid: string;

    /** PlayerHistoryInfo nickName. */
    public nickName: string;

    /** PlayerHistoryInfo head. */
    public head: string;

    /** PlayerHistoryInfo totalGames. */
    public totalGames: number;

    /** PlayerHistoryInfo totalBringIn. */
    public totalBringIn: number;

    /** PlayerHistoryInfo totalWinLose. */
    public totalWinLose: number;

    /**
     * Encodes the specified PlayerHistoryInfo message. Does not implicitly {@link PlayerHistoryInfo.verify|verify} messages.
     * @param m PlayerHistoryInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerHistoryInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PlayerHistoryInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerHistoryInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PlayerHistoryInfo;
}

/** Represents an ActionInfo. */
export class ActionInfo implements IActionInfo {

    /**
     * Constructs a new ActionInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IActionInfo);

    /** ActionInfo uid. */
    public uid: string;

    /** ActionInfo actionType. */
    public actionType: ActionType;

    /** ActionInfo amount. */
    public amount: number;

    /** ActionInfo roundAmount. */
    public roundAmount: number;

    /**
     * Encodes the specified ActionInfo message. Does not implicitly {@link ActionInfo.verify|verify} messages.
     * @param m ActionInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an ActionInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ActionInfo;
}

/** Represents a PotInfo. */
export class PotInfo implements IPotInfo {

    /**
     * Constructs a new PotInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IPotInfo);

    /** PotInfo pot. */
    public pot: number;

    /** PotInfo potId. */
    public potId: number;

    /**
     * Encodes the specified PotInfo message. Does not implicitly {@link PotInfo.verify|verify} messages.
     * @param m PotInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPotInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PotInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PotInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PotInfo;
}

/** Represents a CombinationResult. */
export class CombinationResult implements ICombinationResult {

    /**
     * Constructs a new CombinationResult.
     * @param [p] Properties to set
     */
    constructor(p?: ICombinationResult);

    /** CombinationResult cards. */
    public cards: ICardInfo[];

    /** CombinationResult Combination. */
    public Combination: number;

    /**
     * Encodes the specified CombinationResult message. Does not implicitly {@link CombinationResult.verify|verify} messages.
     * @param m CombinationResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICombinationResult, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CombinationResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CombinationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CombinationResult;
}

/** Represents a PlayerWinLose. */
export class PlayerWinLose implements IPlayerWinLose {

    /**
     * Constructs a new PlayerWinLose.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerWinLose);

    /** PlayerWinLose uid. */
    public uid: string;

    /** PlayerWinLose nickName. */
    public nickName: string;

    /** PlayerWinLose head. */
    public head: string;

    /** PlayerWinLose settlementType. */
    public settlementType: SettlementType;

    /** PlayerWinLose winLoseType. */
    public winLoseType: WinLoseType;

    /** PlayerWinLose winLose. */
    public winLose: number;

    /** PlayerWinLose amount. */
    public amount: number;

    /** PlayerWinLose cardInfo. */
    public cardInfo: ICardInfo[];

    /** PlayerWinLose combinationResult. */
    public combinationResult?: (ICombinationResult|null);

    /**
     * Encodes the specified PlayerWinLose message. Does not implicitly {@link PlayerWinLose.verify|verify} messages.
     * @param m PlayerWinLose message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerWinLose, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PlayerWinLose message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerWinLose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PlayerWinLose;
}

/** Represents an AboutTexasGameInfo. */
export class AboutTexasGameInfo implements IAboutTexasGameInfo {

    /**
     * Constructs a new AboutTexasGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAboutTexasGameInfo);

    /** AboutTexasGameInfo currentPlayerNum. */
    public currentPlayerNum: number;

    /** AboutTexasGameInfo leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified AboutTexasGameInfo message. Does not implicitly {@link AboutTexasGameInfo.verify|verify} messages.
     * @param m AboutTexasGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAboutTexasGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AboutTexasGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AboutTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): AboutTexasGameInfo;
}

/** Represents a TexasDynamicData. */
export class TexasDynamicData implements ITexasDynamicData {

    /**
     * Constructs a new TexasDynamicData.
     * @param [p] Properties to set
     */
    constructor(p?: ITexasDynamicData);

    /** TexasDynamicData state. */
    public state: TexasCashState;

    /** TexasDynamicData seatInfos. */
    public seatInfos: IPlayerInfo[];

    /** TexasDynamicData actionUid. */
    public actionUid: string;

    /** TexasDynamicData actionLeftTime. */
    public actionLeftTime: number;

    /** TexasDynamicData potInfo. */
    public potInfo: IPotInfo[];

    /** TexasDynamicData actions. */
    public actions: IActionInfo[];

    /** TexasDynamicData publicCards. */
    public publicCards: ICardInfo[];

    /** TexasDynamicData dealerUid. */
    public dealerUid: string;

    /** TexasDynamicData buyInsuranceTurn. */
    public buyInsuranceTurn?: (IBuyInsuranceTurn|null);

    /** TexasDynamicData totalPot. */
    public totalPot: number;

    /**
     * Encodes the specified TexasDynamicData message. Does not implicitly {@link TexasDynamicData.verify|verify} messages.
     * @param m TexasDynamicData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITexasDynamicData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a TexasDynamicData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TexasDynamicData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): TexasDynamicData;
}

/** Represents a BuyInsuranceTurn. */
export class BuyInsuranceTurn implements IBuyInsuranceTurn {

    /**
     * Constructs a new BuyInsuranceTurn.
     * @param [p] Properties to set
     */
    constructor(p?: IBuyInsuranceTurn);

    /** BuyInsuranceTurn gameId. */
    public gameId: string;

    /** BuyInsuranceTurn actionUid. */
    public actionUid: string;

    /** BuyInsuranceTurn outsCards. */
    public outsCards: ICardInfo[];

    /** BuyInsuranceTurn tieCards. */
    public tieCards: ICardInfo[];

    /** BuyInsuranceTurn publicCards. */
    public publicCards: ICardInfo[];

    /** BuyInsuranceTurn losePlayerInfo. */
    public losePlayerInfo: IPlayerInfo[];

    /** BuyInsuranceTurn ratios. */
    public ratios: number;

    /** BuyInsuranceTurn pots. */
    public pots: number;

    /** BuyInsuranceTurn buyFullPot. */
    public buyFullPot: number;

    /** BuyInsuranceTurn buyBack. */
    public buyBack: number;

    /** BuyInsuranceTurn leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified BuyInsuranceTurn message. Does not implicitly {@link BuyInsuranceTurn.verify|verify} messages.
     * @param m BuyInsuranceTurn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBuyInsuranceTurn, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a BuyInsuranceTurn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BuyInsuranceTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): BuyInsuranceTurn;
}

/** Represents an ActionResult. */
export class ActionResult implements IActionResult {

    /**
     * Constructs a new ActionResult.
     * @param [p] Properties to set
     */
    constructor(p?: IActionResult);

    /** ActionResult actionInfo. */
    public actionInfo?: (IActionInfo|null);

    /** ActionResult potInfo. */
    public potInfo: IPotInfo[];

    /** ActionResult totalNUm. */
    public totalNUm: number;

    /**
     * Encodes the specified ActionResult message. Does not implicitly {@link ActionResult.verify|verify} messages.
     * @param m ActionResult message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IActionResult, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an ActionResult message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ActionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ActionResult;
}

/** Represents a PlayerStatistic. */
export class PlayerStatistic implements IPlayerStatistic {

    /**
     * Constructs a new PlayerStatistic.
     * @param [p] Properties to set
     */
    constructor(p?: IPlayerStatistic);

    /** PlayerStatistic uid. */
    public uid: string;

    /** PlayerStatistic head. */
    public head: string;

    /** PlayerStatistic name. */
    public name: string;

    /** PlayerStatistic totalHands. */
    public totalHands: number;

    /** PlayerStatistic totalFlopHands. */
    public totalFlopHands: number;

    /** PlayerStatistic totalPreFlopRaiseCount. */
    public totalPreFlopRaiseCount: number;

    /** PlayerStatistic totalPreFlopAgainRaiseCount. */
    public totalPreFlopAgainRaiseCount: number;

    /** PlayerStatistic totalBringIn. */
    public totalBringIn: number;

    /** PlayerStatistic totalBringOut. */
    public totalBringOut: number;

    /** PlayerStatistic winLose. */
    public winLose: number;

    /**
     * Encodes the specified PlayerStatistic message. Does not implicitly {@link PlayerStatistic.verify|verify} messages.
     * @param m PlayerStatistic message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPlayerStatistic, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PlayerStatistic message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns PlayerStatistic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PlayerStatistic;
}

/** Represents a MySimpleInfo. */
export class MySimpleInfo implements IMySimpleInfo {

    /**
     * Constructs a new MySimpleInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IMySimpleInfo);

    /** MySimpleInfo myCards. */
    public myCards: ICardInfo[];

    /** MySimpleInfo myResult. */
    public myResult: number;

    /**
     * Encodes the specified MySimpleInfo message. Does not implicitly {@link MySimpleInfo.verify|verify} messages.
     * @param m MySimpleInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMySimpleInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a MySimpleInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MySimpleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): MySimpleInfo;
}

/** Represents a SimpleReplayRecord. */
export class SimpleReplayRecord implements ISimpleReplayRecord {

    /**
     * Constructs a new SimpleReplayRecord.
     * @param [p] Properties to set
     */
    constructor(p?: ISimpleReplayRecord);

    /** SimpleReplayRecord gameId. */
    public gameId: string;

    /** SimpleReplayRecord index. */
    public index: number;

    /** SimpleReplayRecord publicCards. */
    public publicCards: ICardInfo[];

    /** SimpleReplayRecord winnerSettlementResult. */
    public winnerSettlementResult: IPlayerWinLose[];

    /** SimpleReplayRecord mySimpleInfo. */
    public mySimpleInfo?: (IMySimpleInfo|null);

    /** SimpleReplayRecord date. */
    public date: string;

    /** SimpleReplayRecord intactSettlementResults. */
    public intactSettlementResults: IPlayerWinLose[];

    /**
     * Encodes the specified SimpleReplayRecord message. Does not implicitly {@link SimpleReplayRecord.verify|verify} messages.
     * @param m SimpleReplayRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISimpleReplayRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a SimpleReplayRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SimpleReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): SimpleReplayRecord;
}

/** Represents a DetailReplayRecord. */
export class DetailReplayRecord implements IDetailReplayRecord {

    /**
     * Constructs a new DetailReplayRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IDetailReplayRecord);

    /** DetailReplayRecord gameId. */
    public gameId: string;

    /** DetailReplayRecord index. */
    public index: number;

    /** DetailReplayRecord texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** DetailReplayRecord dealerUid. */
    public dealerUid: string;

    /** DetailReplayRecord players. */
    public players: IPlayerInfo[];

    /** DetailReplayRecord publicCards. */
    public publicCards: ICardInfo[];

    /** DetailReplayRecord roundStartActions. */
    public roundStartActions: IActionResult[];

    /** DetailReplayRecord preFlopActions. */
    public preFlopActions: IActionResult[];

    /** DetailReplayRecord flopActions. */
    public flopActions: IActionResult[];

    /** DetailReplayRecord turnActions. */
    public turnActions: IActionResult[];

    /** DetailReplayRecord riverActions. */
    public riverActions: IActionResult[];

    /** DetailReplayRecord correspondSettlementResult. */
    public correspondSettlementResult: IPlayerWinLose[];

    /** DetailReplayRecord potInfoFlop. */
    public potInfoFlop: IPotInfo[];

    /** DetailReplayRecord potInfoTurn. */
    public potInfoTurn: IPotInfo[];

    /** DetailReplayRecord potInfoRiver. */
    public potInfoRiver: IPotInfo[];

    /** DetailReplayRecord intactSettlementResults. */
    public intactSettlementResults: IPlayerWinLose[];

    /**
     * Encodes the specified DetailReplayRecord message. Does not implicitly {@link DetailReplayRecord.verify|verify} messages.
     * @param m DetailReplayRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDetailReplayRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a DetailReplayRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns DetailReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): DetailReplayRecord;
}

/** Represents a RecordData. */
export class RecordData implements IRecordData {

    /**
     * Constructs a new RecordData.
     * @param [p] Properties to set
     */
    constructor(p?: IRecordData);

    /** RecordData day. */
    public day: number;

    /** RecordData winLose. */
    public winLose: number;

    /** RecordData hands. */
    public hands: number;

    /** RecordData vpip. */
    public vpip: number;

    /** RecordData gameType. */
    public gameType: GameType;

    /**
     * Encodes the specified RecordData message. Does not implicitly {@link RecordData.verify|verify} messages.
     * @param m RecordData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRecordData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RecordData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RecordData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): RecordData;
}

/** Represents a RecordSingleData. */
export class RecordSingleData implements IRecordSingleData {

    /**
     * Constructs a new RecordSingleData.
     * @param [p] Properties to set
     */
    constructor(p?: IRecordSingleData);

    /** RecordSingleData list. */
    public list: IRecordSingle[];

    /** RecordSingleData pageNum. */
    public pageNum: number;

    /** RecordSingleData size. */
    public size: number;

    /** RecordSingleData total. */
    public total: number;

    /**
     * Encodes the specified RecordSingleData message. Does not implicitly {@link RecordSingleData.verify|verify} messages.
     * @param m RecordSingleData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRecordSingleData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RecordSingleData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RecordSingleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): RecordSingleData;
}

/** Represents a RecordSingle. */
export class RecordSingle implements IRecordSingle {

    /**
     * Constructs a new RecordSingle.
     * @param [p] Properties to set
     */
    constructor(p?: IRecordSingle);

    /** RecordSingle gameCode. */
    public gameCode: string;

    /** RecordSingle texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** RecordSingle winLose. */
    public winLose: number;

    /** RecordSingle date. */
    public date: string;

    /**
     * Encodes the specified RecordSingle message. Does not implicitly {@link RecordSingle.verify|verify} messages.
     * @param m RecordSingle message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRecordSingle, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RecordSingle message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RecordSingle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): RecordSingle;
}

/** Represents a RecordDetail. */
export class RecordDetail implements IRecordDetail {

    /**
     * Constructs a new RecordDetail.
     * @param [p] Properties to set
     */
    constructor(p?: IRecordDetail);

    /** RecordDetail gameCode. */
    public gameCode: string;

    /** RecordDetail texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** RecordDetail creator. */
    public creator: string;

    /** RecordDetail date. */
    public date: string;

    /** RecordDetail insurance. */
    public insurance: number;

    /** RecordDetail jackpot. */
    public jackpot: number;

    /** RecordDetail totalHands. */
    public totalHands: number;

    /** RecordDetail totalBuyIn. */
    public totalBuyIn: number;

    /** RecordDetail playerStatisticList. */
    public playerStatisticList: IPlayerStatistic[];

    /**
     * Encodes the specified RecordDetail message. Does not implicitly {@link RecordDetail.verify|verify} messages.
     * @param m RecordDetail message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRecordDetail, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RecordDetail message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RecordDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): RecordDetail;
}

/** MessageId enum. */
export enum MessageId {
    MSG_UnKnow = 0,
    C2S_HeartbeatPing = 10,
    S2C_HeartbeatPong = 11,
    S2C_Kick = 20,
    MSG_TexasCashBegin = 5001,
    C2S_TexasCashLogout = 5002,
    C2S_TexasCashEnterGame = 5003,
    C2S_TexasCashExitGame = 5004,
    C2S_TexasCashOpen = 5005,
    C2S_TexasCashSitDown = 5006,
    C2S_TexasCashStandUp = 5007,
    C2S_TexasCashBringIn = 5008,
    C2S_TexasCashAction = 5009,
    C2S_TexasCashBuyInsurance = 5010,
    C2S_TexasCashChat = 5011,
    C2S_TexasCashGetObList = 5012,
    C2S_TexasCashGetObSize = 5013,
    C2S_TexasCashGetBringInList = 5014,
    C2S_TexasCashExaminePublicCard = 5015,
    C2S_TexasCashExaminePrivateCard = 5016,
    C2S_TexasCashShowSelfCard = 5017,
    C2S_TexasCashExtraThink = 5018,
    C2S_TexasCashSqueezeStart = 5019,
    C2S_TexasCashSqueezeFinish = 5020,
    C2S_TexasCashGetStatistics = 5021,
    C2S_TexasCashSimpleReplay = 5022,
    C2S_TexasCashDetailReplay = 5023,
    C2S_TexasCashCancelAutoOperator = 5024,
    C2S_TexasCashGetPlayerStatistics = 5025,
    MSG_TexasCashEnd = 5500,
    MSG_TexasMttBegin = 5501,
    MSG_TexasMttEnd = 6000,
    MSG_ShortCashBegin = 6001,
    MSG_ShortCashEnd = 6500,
    MSG_ShortMttBegin = 6501,
    MSG_ShortMttEnd = 7000,
    MSG_OmhCashBegin = 7001,
    MSG_OmhCashEnd = 7500,
    MSG_OmhMttBegin = 7501,
    MSG_OmhMttEnd = 8000,
    S2C_CommonEnterGameResp = 8001,
    S2C_CommonExitGameResp = 8002,
    S2C_CommonStartResp = 8003,
    S2C_CommonSitDownResp = 8004,
    S2C_CommonStandUpResp = 8005,
    S2C_CommonBringInResp = 8006,
    S2C_CommonActionResp = 8007,
    S2C_CommonBuyInsuranceResp = 8008,
    S2C_CommonChatResp = 8009,
    S2C_CommonGetObListResp = 8010,
    S2C_CommonGetObSizeResp = 8011,
    S2C_CommonGetBringInListResp = 8012,
    S2C_CommonRefreshResp = 8013,
    S2C_CommonExaminePublicCardResp = 8014,
    S2C_CommonExaminePrivateCardResp = 8015,
    S2C_CommonShowSelfCardResp = 8016,
    S2C_CommonExtraThinkResp = 8017,
    S2C_CommonSqueezeStartResp = 8018,
    S2C_CommonSqueezeFinishResp = 8019,
    S2C_CommonGetStatisticsResp = 8020,
    S2C_CommonSimpleReplayResp = 8021,
    S2C_CommonDetailReplayResp = 8022,
    S2C_CommonCancelAutoOperatorResp = 8023,
    S2C_CommonGetPlayerStatisticsResp = 8024,
    S2C_CommonBringInTimerNotify = 8110,
    S2C_CommonBringInNotify = 8111,
    S2C_CommonSitDownNotify = 8112,
    S2C_CommonStandUpNotify = 8113,
    S2C_CommonChatNotify = 8116,
    S2C_CommonOpenNotify = 8250,
    S2C_CommonWaitStartNotify = 8251,
    S2C_CommonRoundStartNotify = 8252,
    S2C_CommonPreFlopRoundNotify = 8253,
    S2C_CommonFlopRoundNotify = 8254,
    S2C_CommonTurnRoundNotify = 8255,
    S2C_CommonRiverRoundNotify = 8256,
    S2C_CommonIntervalTimeNotify = 8257,
    S2C_CommonCurrentActionNotify = 8258,
    S2C_CommonActionNotify = 8259,
    S2C_CommonSettlementNotify = 8260,
    S2C_CommonExtraThinkNotify = 8261,
    S2C_CommonOpenCardNotify = 8262,
    S2C_CommonBuyInsuranceTurnNotify = 8263,
    S2C_CommonBuyInsuranceTurnRespNotify = 8264,
    S2C_CommonInsuranceLotteryNotify = 8265,
    S2C_CommonPotsNotify = 8266,
    S2C_CommonJackpotLotteryNotify = 8267,
    S2C_CommonSqueezeRoundNotify = 8268,
    S2C_CommonAutoOperatorNotify = 8269,
    S2C_CommonShowSelfCardNotify = 8270,
    MSG_TexasCowboyBegin = 10001,
    C2S_TexasCowboyEnterGame = 10002,
    C2S_TexasCowboyExitGame = 10003,
    C2S_TexasCowboyBet = 10004,
    C2S_TexasCowboyRecord = 10005,
    C2S_TexasCowboyBringIn = 10006,
    C2S_TexasCowboyBringOut = 10007,
    C2S_TexasCowboyTotalHistory = 10008,
    S2C_TexasCowboyEnterGameResp = 10030,
    S2C_TexasCowboyExitGameResp = 10031,
    S2C_TexasCowboyBetResp = 10032,
    S2C_TexasCowboyRecordResp = 10033,
    S2C_TexasCowboyBringInResp = 10034,
    S2C_TexasCowboyBringOutResp = 10035,
    S2C_TexasCowboyTotalHistoryResp = 10036,
    S2C_TexasCowboyBetNotify = 10050,
    S2C_TexasCowboyGameStartNotify = 10051,
    S2C_TexasCowboyGameSettlementNotify = 10052,
    MSG_TexasCowboyEnd = 10100
}

/** Represents a C2SLogout. */
export class C2SLogout implements IC2SLogout {

    /**
     * Constructs a new C2SLogout.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SLogout);

    /**
     * Encodes the specified C2SLogout message. Does not implicitly {@link C2SLogout.verify|verify} messages.
     * @param m C2SLogout message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SLogout, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SLogout message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SLogout;
}

/** Represents a C2SEnterGame. */
export class C2SEnterGame implements IC2SEnterGame {

    /**
     * Constructs a new C2SEnterGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SEnterGame);

    /** C2SEnterGame gameId. */
    public gameId: string;

    /** C2SEnterGame uid. */
    public uid: string;

    /**
     * Encodes the specified C2SEnterGame message. Does not implicitly {@link C2SEnterGame.verify|verify} messages.
     * @param m C2SEnterGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SEnterGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SEnterGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SEnterGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SEnterGame;
}

/** Represents a C2SExitGame. */
export class C2SExitGame implements IC2SExitGame {

    /**
     * Constructs a new C2SExitGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SExitGame);

    /** C2SExitGame gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SExitGame message. Does not implicitly {@link C2SExitGame.verify|verify} messages.
     * @param m C2SExitGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SExitGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SExitGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SExitGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SExitGame;
}

/** Represents a C2SGameSitDown. */
export class C2SGameSitDown implements IC2SGameSitDown {

    /**
     * Constructs a new C2SGameSitDown.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameSitDown);

    /** C2SGameSitDown gameId. */
    public gameId: string;

    /** C2SGameSitDown seat. */
    public seat: number;

    /**
     * Encodes the specified C2SGameSitDown message. Does not implicitly {@link C2SGameSitDown.verify|verify} messages.
     * @param m C2SGameSitDown message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameSitDown, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameSitDown message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameSitDown;
}

/** Represents a C2SGameStandUp. */
export class C2SGameStandUp implements IC2SGameStandUp {

    /**
     * Constructs a new C2SGameStandUp.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameStandUp);

    /** C2SGameStandUp gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SGameStandUp message. Does not implicitly {@link C2SGameStandUp.verify|verify} messages.
     * @param m C2SGameStandUp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameStandUp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameStandUp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameStandUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameStandUp;
}

/** Represents a C2SGameBringIn. */
export class C2SGameBringIn implements IC2SGameBringIn {

    /**
     * Constructs a new C2SGameBringIn.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameBringIn);

    /** C2SGameBringIn gameId. */
    public gameId: string;

    /** C2SGameBringIn amount. */
    public amount: number;

    /**
     * Encodes the specified C2SGameBringIn message. Does not implicitly {@link C2SGameBringIn.verify|verify} messages.
     * @param m C2SGameBringIn message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameBringIn, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameBringIn message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameBringIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameBringIn;
}

/** Represents a C2SGameAction. */
export class C2SGameAction implements IC2SGameAction {

    /**
     * Constructs a new C2SGameAction.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameAction);

    /** C2SGameAction gameId. */
    public gameId: string;

    /** C2SGameAction actionInfo. */
    public actionInfo?: (IActionInfo|null);

    /**
     * Encodes the specified C2SGameAction message. Does not implicitly {@link C2SGameAction.verify|verify} messages.
     * @param m C2SGameAction message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameAction, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameAction message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameAction;
}

/** Represents a C2SGameBuyInsurance. */
export class C2SGameBuyInsurance implements IC2SGameBuyInsurance {

    /**
     * Constructs a new C2SGameBuyInsurance.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameBuyInsurance);

    /** C2SGameBuyInsurance gameId. */
    public gameId: string;

    /** C2SGameBuyInsurance amount. */
    public amount: number;

    /**
     * Encodes the specified C2SGameBuyInsurance message. Does not implicitly {@link C2SGameBuyInsurance.verify|verify} messages.
     * @param m C2SGameBuyInsurance message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameBuyInsurance, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameBuyInsurance message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameBuyInsurance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameBuyInsurance;
}

/** Represents a C2SGameChat. */
export class C2SGameChat implements IC2SGameChat {

    /**
     * Constructs a new C2SGameChat.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameChat);

    /** C2SGameChat gameId. */
    public gameId: string;

    /** C2SGameChat content. */
    public content: string;

    /**
     * Encodes the specified C2SGameChat message. Does not implicitly {@link C2SGameChat.verify|verify} messages.
     * @param m C2SGameChat message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameChat, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameChat message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameChat;
}

/** Represents a C2SGameOpen. */
export class C2SGameOpen implements IC2SGameOpen {

    /**
     * Constructs a new C2SGameOpen.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGameOpen);

    /** C2SGameOpen gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SGameOpen message. Does not implicitly {@link C2SGameOpen.verify|verify} messages.
     * @param m C2SGameOpen message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGameOpen, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGameOpen message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGameOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGameOpen;
}

/** Represents a C2SGetObList. */
export class C2SGetObList implements IC2SGetObList {

    /**
     * Constructs a new C2SGetObList.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetObList);

    /** C2SGetObList gameId. */
    public gameId: string;

    /** C2SGetObList page. */
    public page: number;

    /** C2SGetObList pageSize. */
    public pageSize: number;

    /**
     * Encodes the specified C2SGetObList message. Does not implicitly {@link C2SGetObList.verify|verify} messages.
     * @param m C2SGetObList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetObList, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetObList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetObList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetObList;
}

/** Represents a C2SGetObSize. */
export class C2SGetObSize implements IC2SGetObSize {

    /**
     * Constructs a new C2SGetObSize.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetObSize);

    /** C2SGetObSize gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SGetObSize message. Does not implicitly {@link C2SGetObSize.verify|verify} messages.
     * @param m C2SGetObSize message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetObSize, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetObSize message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetObSize
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetObSize;
}

/** Represents a CS2GetBringInList. */
export class CS2GetBringInList implements ICS2GetBringInList {

    /**
     * Constructs a new CS2GetBringInList.
     * @param [p] Properties to set
     */
    constructor(p?: ICS2GetBringInList);

    /** CS2GetBringInList gameId. */
    public gameId: string;

    /** CS2GetBringInList page. */
    public page: number;

    /** CS2GetBringInList pageSize. */
    public pageSize: number;

    /**
     * Encodes the specified CS2GetBringInList message. Does not implicitly {@link CS2GetBringInList.verify|verify} messages.
     * @param m CS2GetBringInList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICS2GetBringInList, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CS2GetBringInList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CS2GetBringInList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): CS2GetBringInList;
}

/** Represents a C2SRefresh. */
export class C2SRefresh implements IC2SRefresh {

    /**
     * Constructs a new C2SRefresh.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SRefresh);

    /** C2SRefresh gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SRefresh message. Does not implicitly {@link C2SRefresh.verify|verify} messages.
     * @param m C2SRefresh message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SRefresh, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SRefresh message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SRefresh;
}

/** Represents a C2SExaminePublicCard. */
export class C2SExaminePublicCard implements IC2SExaminePublicCard {

    /**
     * Constructs a new C2SExaminePublicCard.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SExaminePublicCard);

    /** C2SExaminePublicCard gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SExaminePublicCard message. Does not implicitly {@link C2SExaminePublicCard.verify|verify} messages.
     * @param m C2SExaminePublicCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SExaminePublicCard, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SExaminePublicCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SExaminePublicCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SExaminePublicCard;
}

/** Represents a C2SExaminePrivateCard. */
export class C2SExaminePrivateCard implements IC2SExaminePrivateCard {

    /**
     * Constructs a new C2SExaminePrivateCard.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SExaminePrivateCard);

    /** C2SExaminePrivateCard gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SExaminePrivateCard message. Does not implicitly {@link C2SExaminePrivateCard.verify|verify} messages.
     * @param m C2SExaminePrivateCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SExaminePrivateCard, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SExaminePrivateCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SExaminePrivateCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SExaminePrivateCard;
}

/** Represents a C2SShowSelfCard. */
export class C2SShowSelfCard implements IC2SShowSelfCard {

    /**
     * Constructs a new C2SShowSelfCard.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SShowSelfCard);

    /** C2SShowSelfCard gameId. */
    public gameId: string;

    /** C2SShowSelfCard cardList. */
    public cardList: ICardInfo[];

    /**
     * Encodes the specified C2SShowSelfCard message. Does not implicitly {@link C2SShowSelfCard.verify|verify} messages.
     * @param m C2SShowSelfCard message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SShowSelfCard, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SShowSelfCard message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SShowSelfCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SShowSelfCard;
}

/** Represents a C2SExtraThink. */
export class C2SExtraThink implements IC2SExtraThink {

    /**
     * Constructs a new C2SExtraThink.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SExtraThink);

    /** C2SExtraThink gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SExtraThink message. Does not implicitly {@link C2SExtraThink.verify|verify} messages.
     * @param m C2SExtraThink message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SExtraThink, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SExtraThink message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SExtraThink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SExtraThink;
}

/** Represents a C2SSqueezeStart. */
export class C2SSqueezeStart implements IC2SSqueezeStart {

    /**
     * Constructs a new C2SSqueezeStart.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SSqueezeStart);

    /** C2SSqueezeStart gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SSqueezeStart message. Does not implicitly {@link C2SSqueezeStart.verify|verify} messages.
     * @param m C2SSqueezeStart message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SSqueezeStart, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SSqueezeStart message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SSqueezeStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SSqueezeStart;
}

/** Represents a C2SSqueezeFinish. */
export class C2SSqueezeFinish implements IC2SSqueezeFinish {

    /**
     * Constructs a new C2SSqueezeFinish.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SSqueezeFinish);

    /** C2SSqueezeFinish gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SSqueezeFinish message. Does not implicitly {@link C2SSqueezeFinish.verify|verify} messages.
     * @param m C2SSqueezeFinish message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SSqueezeFinish, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SSqueezeFinish message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SSqueezeFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SSqueezeFinish;
}

/** Represents a C2SGetStatistics. */
export class C2SGetStatistics implements IC2SGetStatistics {

    /**
     * Constructs a new C2SGetStatistics.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetStatistics);

    /** C2SGetStatistics gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SGetStatistics message. Does not implicitly {@link C2SGetStatistics.verify|verify} messages.
     * @param m C2SGetStatistics message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetStatistics, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetStatistics message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetStatistics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetStatistics;
}

/** Represents a C2SSimpleReplay. */
export class C2SSimpleReplay implements IC2SSimpleReplay {

    /**
     * Constructs a new C2SSimpleReplay.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SSimpleReplay);

    /** C2SSimpleReplay gameId. */
    public gameId: string;

    /** C2SSimpleReplay page. */
    public page: number;

    /** C2SSimpleReplay pageSize. */
    public pageSize: number;

    /**
     * Encodes the specified C2SSimpleReplay message. Does not implicitly {@link C2SSimpleReplay.verify|verify} messages.
     * @param m C2SSimpleReplay message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SSimpleReplay, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SSimpleReplay message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SSimpleReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SSimpleReplay;
}

/** Represents a C2SDetailReplay. */
export class C2SDetailReplay implements IC2SDetailReplay {

    /**
     * Constructs a new C2SDetailReplay.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SDetailReplay);

    /** C2SDetailReplay gameId. */
    public gameId: string;

    /** C2SDetailReplay index. */
    public index: number;

    /**
     * Encodes the specified C2SDetailReplay message. Does not implicitly {@link C2SDetailReplay.verify|verify} messages.
     * @param m C2SDetailReplay message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SDetailReplay, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SDetailReplay message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SDetailReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SDetailReplay;
}

/** Represents a C2SCancelAutoOperator. */
export class C2SCancelAutoOperator implements IC2SCancelAutoOperator {

    /**
     * Constructs a new C2SCancelAutoOperator.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SCancelAutoOperator);

    /** C2SCancelAutoOperator gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SCancelAutoOperator message. Does not implicitly {@link C2SCancelAutoOperator.verify|verify} messages.
     * @param m C2SCancelAutoOperator message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SCancelAutoOperator, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SCancelAutoOperator message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SCancelAutoOperator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SCancelAutoOperator;
}

/** Represents a C2SGetPlayerStatistics. */
export class C2SGetPlayerStatistics implements IC2SGetPlayerStatistics {

    /**
     * Constructs a new C2SGetPlayerStatistics.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetPlayerStatistics);

    /** C2SGetPlayerStatistics gameId. */
    public gameId: string;

    /** C2SGetPlayerStatistics uid. */
    public uid: string;

    /**
     * Encodes the specified C2SGetPlayerStatistics message. Does not implicitly {@link C2SGetPlayerStatistics.verify|verify} messages.
     * @param m C2SGetPlayerStatistics message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetPlayerStatistics, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetPlayerStatistics message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetPlayerStatistics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetPlayerStatistics;
}

/** Represents a S2CCommonEnterGameResp. */
export class S2CCommonEnterGameResp implements IS2CCommonEnterGameResp {

    /**
     * Constructs a new S2CCommonEnterGameResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonEnterGameResp);

    /** S2CCommonEnterGameResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonEnterGameResp gameId. */
    public gameId: string;

    /** S2CCommonEnterGameResp texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** S2CCommonEnterGameResp gameDynamic. */
    public gameDynamic?: (ITexasDynamicData|null);

    /**
     * Encodes the specified S2CCommonEnterGameResp message. Does not implicitly {@link S2CCommonEnterGameResp.verify|verify} messages.
     * @param m S2CCommonEnterGameResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonEnterGameResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonEnterGameResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonEnterGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonEnterGameResp;
}

/** Represents a S2CCommonExitGameResp. */
export class S2CCommonExitGameResp implements IS2CCommonExitGameResp {

    /**
     * Constructs a new S2CCommonExitGameResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonExitGameResp);

    /** S2CCommonExitGameResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonExitGameResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonExitGameResp message. Does not implicitly {@link S2CCommonExitGameResp.verify|verify} messages.
     * @param m S2CCommonExitGameResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonExitGameResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonExitGameResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonExitGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonExitGameResp;
}

/** Represents a S2CCommonSitDownResp. */
export class S2CCommonSitDownResp implements IS2CCommonSitDownResp {

    /**
     * Constructs a new S2CCommonSitDownResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSitDownResp);

    /** S2CCommonSitDownResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonSitDownResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonSitDownResp message. Does not implicitly {@link S2CCommonSitDownResp.verify|verify} messages.
     * @param m S2CCommonSitDownResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSitDownResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSitDownResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSitDownResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSitDownResp;
}

/** Represents a S2CCommonStandUpResp. */
export class S2CCommonStandUpResp implements IS2CCommonStandUpResp {

    /**
     * Constructs a new S2CCommonStandUpResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonStandUpResp);

    /** S2CCommonStandUpResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonStandUpResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonStandUpResp message. Does not implicitly {@link S2CCommonStandUpResp.verify|verify} messages.
     * @param m S2CCommonStandUpResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonStandUpResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonStandUpResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonStandUpResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonStandUpResp;
}

/** Represents a S2CCommonBringInResp. */
export class S2CCommonBringInResp implements IS2CCommonBringInResp {

    /**
     * Constructs a new S2CCommonBringInResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBringInResp);

    /** S2CCommonBringInResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonBringInResp gameId. */
    public gameId: string;

    /** S2CCommonBringInResp bringInNum. */
    public bringInNum: number;

    /** S2CCommonBringInResp totalBringInNum. */
    public totalBringInNum: number;

    /** S2CCommonBringInResp currencyNum. */
    public currencyNum: number;

    /**
     * Encodes the specified S2CCommonBringInResp message. Does not implicitly {@link S2CCommonBringInResp.verify|verify} messages.
     * @param m S2CCommonBringInResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBringInResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBringInResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBringInResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBringInResp;
}

/** Represents a S2CCommonActionResp. */
export class S2CCommonActionResp implements IS2CCommonActionResp {

    /**
     * Constructs a new S2CCommonActionResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonActionResp);

    /** S2CCommonActionResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonActionResp gameId. */
    public gameId: string;

    /** S2CCommonActionResp actionInfo. */
    public actionInfo?: (IActionInfo|null);

    /**
     * Encodes the specified S2CCommonActionResp message. Does not implicitly {@link S2CCommonActionResp.verify|verify} messages.
     * @param m S2CCommonActionResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonActionResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonActionResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonActionResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonActionResp;
}

/** Represents a S2CCommonBuyInsuranceResp. */
export class S2CCommonBuyInsuranceResp implements IS2CCommonBuyInsuranceResp {

    /**
     * Constructs a new S2CCommonBuyInsuranceResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBuyInsuranceResp);

    /** S2CCommonBuyInsuranceResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonBuyInsuranceResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonBuyInsuranceResp message. Does not implicitly {@link S2CCommonBuyInsuranceResp.verify|verify} messages.
     * @param m S2CCommonBuyInsuranceResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBuyInsuranceResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBuyInsuranceResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBuyInsuranceResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBuyInsuranceResp;
}

/** Represents a S2CCommonChatResp. */
export class S2CCommonChatResp implements IS2CCommonChatResp {

    /**
     * Constructs a new S2CCommonChatResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonChatResp);

    /** S2CCommonChatResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonChatResp gameId. */
    public gameId: string;

    /** S2CCommonChatResp content. */
    public content: string;

    /**
     * Encodes the specified S2CCommonChatResp message. Does not implicitly {@link S2CCommonChatResp.verify|verify} messages.
     * @param m S2CCommonChatResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonChatResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonChatResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonChatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonChatResp;
}

/** Represents a S2CCommonStartResp. */
export class S2CCommonStartResp implements IS2CCommonStartResp {

    /**
     * Constructs a new S2CCommonStartResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonStartResp);

    /** S2CCommonStartResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonStartResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonStartResp message. Does not implicitly {@link S2CCommonStartResp.verify|verify} messages.
     * @param m S2CCommonStartResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonStartResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonStartResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonStartResp;
}

/** Represents a S2CCommonGetObListResp. */
export class S2CCommonGetObListResp implements IS2CCommonGetObListResp {

    /**
     * Constructs a new S2CCommonGetObListResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetObListResp);

    /** S2CCommonGetObListResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetObListResp gameId. */
    public gameId: string;

    /** S2CCommonGetObListResp observer. */
    public observer: IPlayerInfo[];

    /** S2CCommonGetObListResp page. */
    public page: number;

    /** S2CCommonGetObListResp pageSize. */
    public pageSize: number;

    /** S2CCommonGetObListResp totalMember. */
    public totalMember: number;

    /**
     * Encodes the specified S2CCommonGetObListResp message. Does not implicitly {@link S2CCommonGetObListResp.verify|verify} messages.
     * @param m S2CCommonGetObListResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetObListResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetObListResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetObListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetObListResp;
}

/** Represents a S2CCommonGetObSizeResp. */
export class S2CCommonGetObSizeResp implements IS2CCommonGetObSizeResp {

    /**
     * Constructs a new S2CCommonGetObSizeResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetObSizeResp);

    /** S2CCommonGetObSizeResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetObSizeResp gameId. */
    public gameId: string;

    /** S2CCommonGetObSizeResp obSize. */
    public obSize: number;

    /**
     * Encodes the specified S2CCommonGetObSizeResp message. Does not implicitly {@link S2CCommonGetObSizeResp.verify|verify} messages.
     * @param m S2CCommonGetObSizeResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetObSizeResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetObSizeResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetObSizeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetObSizeResp;
}

/** Represents a S2CCommonGetBringInListResp. */
export class S2CCommonGetBringInListResp implements IS2CCommonGetBringInListResp {

    /**
     * Constructs a new S2CCommonGetBringInListResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetBringInListResp);

    /** S2CCommonGetBringInListResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetBringInListResp gameId. */
    public gameId: string;

    /** S2CCommonGetBringInListResp playerHistoryInfo. */
    public playerHistoryInfo: IPlayerHistoryInfo[];

    /** S2CCommonGetBringInListResp page. */
    public page: number;

    /** S2CCommonGetBringInListResp pageSize. */
    public pageSize: number;

    /** S2CCommonGetBringInListResp totalMember. */
    public totalMember: number;

    /**
     * Encodes the specified S2CCommonGetBringInListResp message. Does not implicitly {@link S2CCommonGetBringInListResp.verify|verify} messages.
     * @param m S2CCommonGetBringInListResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetBringInListResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetBringInListResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetBringInListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetBringInListResp;
}

/** Represents a S2CCommonRefreshResp. */
export class S2CCommonRefreshResp implements IS2CCommonRefreshResp {

    /**
     * Constructs a new S2CCommonRefreshResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonRefreshResp);

    /** S2CCommonRefreshResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonRefreshResp gameId. */
    public gameId: string;

    /** S2CCommonRefreshResp gameDynamic. */
    public gameDynamic?: (ITexasDynamicData|null);

    /**
     * Encodes the specified S2CCommonRefreshResp message. Does not implicitly {@link S2CCommonRefreshResp.verify|verify} messages.
     * @param m S2CCommonRefreshResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonRefreshResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonRefreshResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonRefreshResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonRefreshResp;
}

/** Represents a S2CCommonExaminePublicCardResp. */
export class S2CCommonExaminePublicCardResp implements IS2CCommonExaminePublicCardResp {

    /**
     * Constructs a new S2CCommonExaminePublicCardResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonExaminePublicCardResp);

    /** S2CCommonExaminePublicCardResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonExaminePublicCardResp gameId. */
    public gameId: string;

    /** S2CCommonExaminePublicCardResp publicCardList. */
    public publicCardList: ICardInfo[];

    /**
     * Encodes the specified S2CCommonExaminePublicCardResp message. Does not implicitly {@link S2CCommonExaminePublicCardResp.verify|verify} messages.
     * @param m S2CCommonExaminePublicCardResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonExaminePublicCardResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonExaminePublicCardResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonExaminePublicCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonExaminePublicCardResp;
}

/** Represents a S2CCommonExaminePrivateCardResp. */
export class S2CCommonExaminePrivateCardResp implements IS2CCommonExaminePrivateCardResp {

    /**
     * Constructs a new S2CCommonExaminePrivateCardResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonExaminePrivateCardResp);

    /** S2CCommonExaminePrivateCardResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonExaminePrivateCardResp gameId. */
    public gameId: string;

    /** S2CCommonExaminePrivateCardResp playerList. */
    public playerList: IPlayerInfo[];

    /**
     * Encodes the specified S2CCommonExaminePrivateCardResp message. Does not implicitly {@link S2CCommonExaminePrivateCardResp.verify|verify} messages.
     * @param m S2CCommonExaminePrivateCardResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonExaminePrivateCardResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonExaminePrivateCardResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonExaminePrivateCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonExaminePrivateCardResp;
}

/** Represents a S2CCommonShowSelfCardResp. */
export class S2CCommonShowSelfCardResp implements IS2CCommonShowSelfCardResp {

    /**
     * Constructs a new S2CCommonShowSelfCardResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonShowSelfCardResp);

    /** S2CCommonShowSelfCardResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonShowSelfCardResp gameId. */
    public gameId: string;

    /** S2CCommonShowSelfCardResp cardList. */
    public cardList: ICardInfo[];

    /**
     * Encodes the specified S2CCommonShowSelfCardResp message. Does not implicitly {@link S2CCommonShowSelfCardResp.verify|verify} messages.
     * @param m S2CCommonShowSelfCardResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonShowSelfCardResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonShowSelfCardResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonShowSelfCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonShowSelfCardResp;
}

/** Represents a S2CCommonExtraThinkResp. */
export class S2CCommonExtraThinkResp implements IS2CCommonExtraThinkResp {

    /**
     * Constructs a new S2CCommonExtraThinkResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonExtraThinkResp);

    /** S2CCommonExtraThinkResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonExtraThinkResp gameId. */
    public gameId: string;

    /** S2CCommonExtraThinkResp extraTime. */
    public extraTime: number;

    /** S2CCommonExtraThinkResp totalTime. */
    public totalTime: number;

    /**
     * Encodes the specified S2CCommonExtraThinkResp message. Does not implicitly {@link S2CCommonExtraThinkResp.verify|verify} messages.
     * @param m S2CCommonExtraThinkResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonExtraThinkResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonExtraThinkResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonExtraThinkResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonExtraThinkResp;
}

/** Represents a S2CCommonSqueezeStartResp. */
export class S2CCommonSqueezeStartResp implements IS2CCommonSqueezeStartResp {

    /**
     * Constructs a new S2CCommonSqueezeStartResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSqueezeStartResp);

    /** S2CCommonSqueezeStartResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonSqueezeStartResp gameId. */
    public gameId: string;

    /** S2CCommonSqueezeStartResp cardInfo. */
    public cardInfo?: (ICardInfo|null);

    /** S2CCommonSqueezeStartResp leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified S2CCommonSqueezeStartResp message. Does not implicitly {@link S2CCommonSqueezeStartResp.verify|verify} messages.
     * @param m S2CCommonSqueezeStartResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSqueezeStartResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSqueezeStartResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSqueezeStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSqueezeStartResp;
}

/** Represents a S2CCommonSqueezeFinishResp. */
export class S2CCommonSqueezeFinishResp implements IS2CCommonSqueezeFinishResp {

    /**
     * Constructs a new S2CCommonSqueezeFinishResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSqueezeFinishResp);

    /** S2CCommonSqueezeFinishResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonSqueezeFinishResp gameId. */
    public gameId: string;

    /** S2CCommonSqueezeFinishResp cardInfo. */
    public cardInfo?: (ICardInfo|null);

    /** S2CCommonSqueezeFinishResp leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified S2CCommonSqueezeFinishResp message. Does not implicitly {@link S2CCommonSqueezeFinishResp.verify|verify} messages.
     * @param m S2CCommonSqueezeFinishResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSqueezeFinishResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSqueezeFinishResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSqueezeFinishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSqueezeFinishResp;
}

/** Represents a S2CCommonGetStatisticsResp. */
export class S2CCommonGetStatisticsResp implements IS2CCommonGetStatisticsResp {

    /**
     * Constructs a new S2CCommonGetStatisticsResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetStatisticsResp);

    /** S2CCommonGetStatisticsResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetStatisticsResp gameId. */
    public gameId: string;

    /** S2CCommonGetStatisticsResp insuranceWinlose. */
    public insuranceWinlose: number;

    /** S2CCommonGetStatisticsResp jackpotWinlose. */
    public jackpotWinlose: number;

    /** S2CCommonGetStatisticsResp playerStatisticList. */
    public playerStatisticList: IPlayerStatistic[];

    /**
     * Encodes the specified S2CCommonGetStatisticsResp message. Does not implicitly {@link S2CCommonGetStatisticsResp.verify|verify} messages.
     * @param m S2CCommonGetStatisticsResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetStatisticsResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetStatisticsResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetStatisticsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetStatisticsResp;
}

/** Represents a S2CCommonSimpleReplayResp. */
export class S2CCommonSimpleReplayResp implements IS2CCommonSimpleReplayResp {

    /**
     * Constructs a new S2CCommonSimpleReplayResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSimpleReplayResp);

    /** S2CCommonSimpleReplayResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonSimpleReplayResp gameId. */
    public gameId: string;

    /** S2CCommonSimpleReplayResp simpleReplayRecord. */
    public simpleReplayRecord: ISimpleReplayRecord[];

    /** S2CCommonSimpleReplayResp page. */
    public page: number;

    /** S2CCommonSimpleReplayResp pageSize. */
    public pageSize: number;

    /** S2CCommonSimpleReplayResp totalNum. */
    public totalNum: number;

    /**
     * Encodes the specified S2CCommonSimpleReplayResp message. Does not implicitly {@link S2CCommonSimpleReplayResp.verify|verify} messages.
     * @param m S2CCommonSimpleReplayResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSimpleReplayResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSimpleReplayResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSimpleReplayResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSimpleReplayResp;
}

/** Represents a S2CCommonDetailReplayResp. */
export class S2CCommonDetailReplayResp implements IS2CCommonDetailReplayResp {

    /**
     * Constructs a new S2CCommonDetailReplayResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonDetailReplayResp);

    /** S2CCommonDetailReplayResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonDetailReplayResp gameId. */
    public gameId: string;

    /** S2CCommonDetailReplayResp detailReplayRecord. */
    public detailReplayRecord?: (IDetailReplayRecord|null);

    /**
     * Encodes the specified S2CCommonDetailReplayResp message. Does not implicitly {@link S2CCommonDetailReplayResp.verify|verify} messages.
     * @param m S2CCommonDetailReplayResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonDetailReplayResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonDetailReplayResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonDetailReplayResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonDetailReplayResp;
}

/** Represents a S2CCommonCancelAutoOperatorResp. */
export class S2CCommonCancelAutoOperatorResp implements IS2CCommonCancelAutoOperatorResp {

    /**
     * Constructs a new S2CCommonCancelAutoOperatorResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonCancelAutoOperatorResp);

    /** S2CCommonCancelAutoOperatorResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonCancelAutoOperatorResp gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonCancelAutoOperatorResp message. Does not implicitly {@link S2CCommonCancelAutoOperatorResp.verify|verify} messages.
     * @param m S2CCommonCancelAutoOperatorResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonCancelAutoOperatorResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonCancelAutoOperatorResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonCancelAutoOperatorResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonCancelAutoOperatorResp;
}

/** Represents a S2CCommonGetPlayerStatisticsResp. */
export class S2CCommonGetPlayerStatisticsResp implements IS2CCommonGetPlayerStatisticsResp {

    /**
     * Constructs a new S2CCommonGetPlayerStatisticsResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetPlayerStatisticsResp);

    /** S2CCommonGetPlayerStatisticsResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetPlayerStatisticsResp gameId. */
    public gameId: string;

    /** S2CCommonGetPlayerStatisticsResp playerStatistic. */
    public playerStatistic?: (IPlayerStatistic|null);

    /**
     * Encodes the specified S2CCommonGetPlayerStatisticsResp message. Does not implicitly {@link S2CCommonGetPlayerStatisticsResp.verify|verify} messages.
     * @param m S2CCommonGetPlayerStatisticsResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetPlayerStatisticsResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetPlayerStatisticsResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetPlayerStatisticsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetPlayerStatisticsResp;
}

/** Represents a S2CCommonBringInTimerNotify. */
export class S2CCommonBringInTimerNotify implements IS2CCommonBringInTimerNotify {

    /**
     * Constructs a new S2CCommonBringInTimerNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBringInTimerNotify);

    /** S2CCommonBringInTimerNotify gameId. */
    public gameId: string;

    /** S2CCommonBringInTimerNotify actionUid. */
    public actionUid: string;

    /** S2CCommonBringInTimerNotify leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified S2CCommonBringInTimerNotify message. Does not implicitly {@link S2CCommonBringInTimerNotify.verify|verify} messages.
     * @param m S2CCommonBringInTimerNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBringInTimerNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBringInTimerNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBringInTimerNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBringInTimerNotify;
}

/** Represents a S2CCommonBringInNotify. */
export class S2CCommonBringInNotify implements IS2CCommonBringInNotify {

    /**
     * Constructs a new S2CCommonBringInNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBringInNotify);

    /** S2CCommonBringInNotify gameId. */
    public gameId: string;

    /** S2CCommonBringInNotify uid. */
    public uid: string;

    /** S2CCommonBringInNotify bringInNum. */
    public bringInNum: number;

    /** S2CCommonBringInNotify totalBringInNum. */
    public totalBringInNum: number;

    /** S2CCommonBringInNotify currencyNum. */
    public currencyNum: number;

    /**
     * Encodes the specified S2CCommonBringInNotify message. Does not implicitly {@link S2CCommonBringInNotify.verify|verify} messages.
     * @param m S2CCommonBringInNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBringInNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBringInNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBringInNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBringInNotify;
}

/** Represents a S2CCommonSitDownNotify. */
export class S2CCommonSitDownNotify implements IS2CCommonSitDownNotify {

    /**
     * Constructs a new S2CCommonSitDownNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSitDownNotify);

    /** S2CCommonSitDownNotify gameId. */
    public gameId: string;

    /** S2CCommonSitDownNotify seatPlayerInfo. */
    public seatPlayerInfo?: (IPlayerInfo|null);

    /**
     * Encodes the specified S2CCommonSitDownNotify message. Does not implicitly {@link S2CCommonSitDownNotify.verify|verify} messages.
     * @param m S2CCommonSitDownNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSitDownNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSitDownNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSitDownNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSitDownNotify;
}

/** Represents a S2CCommonStandUpNotify. */
export class S2CCommonStandUpNotify implements IS2CCommonStandUpNotify {

    /**
     * Constructs a new S2CCommonStandUpNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonStandUpNotify);

    /** S2CCommonStandUpNotify gameId. */
    public gameId: string;

    /** S2CCommonStandUpNotify actionSeat. */
    public actionSeat: number;

    /** S2CCommonStandUpNotify actionUid. */
    public actionUid: string;

    /**
     * Encodes the specified S2CCommonStandUpNotify message. Does not implicitly {@link S2CCommonStandUpNotify.verify|verify} messages.
     * @param m S2CCommonStandUpNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonStandUpNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonStandUpNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonStandUpNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonStandUpNotify;
}

/** Represents a S2CCommonOpenNotify. */
export class S2CCommonOpenNotify implements IS2CCommonOpenNotify {

    /**
     * Constructs a new S2CCommonOpenNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonOpenNotify);

    /** S2CCommonOpenNotify gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonOpenNotify message. Does not implicitly {@link S2CCommonOpenNotify.verify|verify} messages.
     * @param m S2CCommonOpenNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonOpenNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonOpenNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonOpenNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonOpenNotify;
}

/** Represents a S2CCommonRoundStartNotify. */
export class S2CCommonRoundStartNotify implements IS2CCommonRoundStartNotify {

    /**
     * Constructs a new S2CCommonRoundStartNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonRoundStartNotify);

    /** S2CCommonRoundStartNotify gameId. */
    public gameId: string;

    /** S2CCommonRoundStartNotify players. */
    public players: IPlayerInfo[];

    /** S2CCommonRoundStartNotify dealerUid. */
    public dealerUid: string;

    /** S2CCommonRoundStartNotify antes. */
    public antes: number;

    /** S2CCommonRoundStartNotify actionInfo. */
    public actionInfo: IActionInfo[];

    /** S2CCommonRoundStartNotify totalPot. */
    public totalPot: number;

    /**
     * Encodes the specified S2CCommonRoundStartNotify message. Does not implicitly {@link S2CCommonRoundStartNotify.verify|verify} messages.
     * @param m S2CCommonRoundStartNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonRoundStartNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonRoundStartNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonRoundStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonRoundStartNotify;
}

/** Represents a S2CCommonActionNotify. */
export class S2CCommonActionNotify implements IS2CCommonActionNotify {

    /**
     * Constructs a new S2CCommonActionNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonActionNotify);

    /** S2CCommonActionNotify gameId. */
    public gameId: string;

    /** S2CCommonActionNotify actionInfo. */
    public actionInfo?: (IActionInfo|null);

    /** S2CCommonActionNotify totalPot. */
    public totalPot: number;

    /**
     * Encodes the specified S2CCommonActionNotify message. Does not implicitly {@link S2CCommonActionNotify.verify|verify} messages.
     * @param m S2CCommonActionNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonActionNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonActionNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonActionNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonActionNotify;
}

/** Represents a S2CCommonBuyInsuranceTurnNotify. */
export class S2CCommonBuyInsuranceTurnNotify implements IS2CCommonBuyInsuranceTurnNotify {

    /**
     * Constructs a new S2CCommonBuyInsuranceTurnNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBuyInsuranceTurnNotify);

    /** S2CCommonBuyInsuranceTurnNotify buyInsuranceTurn. */
    public buyInsuranceTurn?: (IBuyInsuranceTurn|null);

    /**
     * Encodes the specified S2CCommonBuyInsuranceTurnNotify message. Does not implicitly {@link S2CCommonBuyInsuranceTurnNotify.verify|verify} messages.
     * @param m S2CCommonBuyInsuranceTurnNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBuyInsuranceTurnNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBuyInsuranceTurnNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBuyInsuranceTurnNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBuyInsuranceTurnNotify;
}

/** Represents a S2CCommonBuyInsuranceTurnRespNotify. */
export class S2CCommonBuyInsuranceTurnRespNotify implements IS2CCommonBuyInsuranceTurnRespNotify {

    /**
     * Constructs a new S2CCommonBuyInsuranceTurnRespNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBuyInsuranceTurnRespNotify);

    /** S2CCommonBuyInsuranceTurnRespNotify gameId. */
    public gameId: string;

    /** S2CCommonBuyInsuranceTurnRespNotify actionUid. */
    public actionUid: string;

    /** S2CCommonBuyInsuranceTurnRespNotify amount. */
    public amount: number;

    /**
     * Encodes the specified S2CCommonBuyInsuranceTurnRespNotify message. Does not implicitly {@link S2CCommonBuyInsuranceTurnRespNotify.verify|verify} messages.
     * @param m S2CCommonBuyInsuranceTurnRespNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBuyInsuranceTurnRespNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBuyInsuranceTurnRespNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBuyInsuranceTurnRespNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBuyInsuranceTurnRespNotify;
}

/** Represents a S2CCommonInsuranceLotteryNotify. */
export class S2CCommonInsuranceLotteryNotify implements IS2CCommonInsuranceLotteryNotify {

    /**
     * Constructs a new S2CCommonInsuranceLotteryNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonInsuranceLotteryNotify);

    /** S2CCommonInsuranceLotteryNotify gameId. */
    public gameId: string;

    /** S2CCommonInsuranceLotteryNotify actionUid. */
    public actionUid: string;

    /** S2CCommonInsuranceLotteryNotify amount. */
    public amount: number;

    /** S2CCommonInsuranceLotteryNotify restAmount. */
    public restAmount: number;

    /**
     * Encodes the specified S2CCommonInsuranceLotteryNotify message. Does not implicitly {@link S2CCommonInsuranceLotteryNotify.verify|verify} messages.
     * @param m S2CCommonInsuranceLotteryNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonInsuranceLotteryNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonInsuranceLotteryNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonInsuranceLotteryNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonInsuranceLotteryNotify;
}

/** Represents a S2CCommonChatNotify. */
export class S2CCommonChatNotify implements IS2CCommonChatNotify {

    /**
     * Constructs a new S2CCommonChatNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonChatNotify);

    /** S2CCommonChatNotify gameId. */
    public gameId: string;

    /** S2CCommonChatNotify actionUid. */
    public actionUid: string;

    /** S2CCommonChatNotify content. */
    public content: string;

    /** S2CCommonChatNotify playerName. */
    public playerName: string;

    /** S2CCommonChatNotify head. */
    public head: string;

    /**
     * Encodes the specified S2CCommonChatNotify message. Does not implicitly {@link S2CCommonChatNotify.verify|verify} messages.
     * @param m S2CCommonChatNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonChatNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonChatNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonChatNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonChatNotify;
}

/** Represents a S2CCommonExtraThinkNotify. */
export class S2CCommonExtraThinkNotify implements IS2CCommonExtraThinkNotify {

    /**
     * Constructs a new S2CCommonExtraThinkNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonExtraThinkNotify);

    /** S2CCommonExtraThinkNotify gameId. */
    public gameId: string;

    /** S2CCommonExtraThinkNotify actionUid. */
    public actionUid: string;

    /** S2CCommonExtraThinkNotify extraTime. */
    public extraTime: number;

    /** S2CCommonExtraThinkNotify totalTime. */
    public totalTime: number;

    /**
     * Encodes the specified S2CCommonExtraThinkNotify message. Does not implicitly {@link S2CCommonExtraThinkNotify.verify|verify} messages.
     * @param m S2CCommonExtraThinkNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonExtraThinkNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonExtraThinkNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonExtraThinkNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonExtraThinkNotify;
}

/** Represents a S2CCommonPreFlopRoundNotify. */
export class S2CCommonPreFlopRoundNotify implements IS2CCommonPreFlopRoundNotify {

    /**
     * Constructs a new S2CCommonPreFlopRoundNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonPreFlopRoundNotify);

    /** S2CCommonPreFlopRoundNotify gameId. */
    public gameId: string;

    /** S2CCommonPreFlopRoundNotify cards. */
    public cards: ICardInfo[];

    /**
     * Encodes the specified S2CCommonPreFlopRoundNotify message. Does not implicitly {@link S2CCommonPreFlopRoundNotify.verify|verify} messages.
     * @param m S2CCommonPreFlopRoundNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonPreFlopRoundNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonPreFlopRoundNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonPreFlopRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonPreFlopRoundNotify;
}

/** Represents a S2CCommonFlopRoundNotify. */
export class S2CCommonFlopRoundNotify implements IS2CCommonFlopRoundNotify {

    /**
     * Constructs a new S2CCommonFlopRoundNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonFlopRoundNotify);

    /** S2CCommonFlopRoundNotify gameId. */
    public gameId: string;

    /** S2CCommonFlopRoundNotify cards. */
    public cards: ICardInfo[];

    /**
     * Encodes the specified S2CCommonFlopRoundNotify message. Does not implicitly {@link S2CCommonFlopRoundNotify.verify|verify} messages.
     * @param m S2CCommonFlopRoundNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonFlopRoundNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonFlopRoundNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonFlopRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonFlopRoundNotify;
}

/** Represents a S2CCommonTurnRoundNotify. */
export class S2CCommonTurnRoundNotify implements IS2CCommonTurnRoundNotify {

    /**
     * Constructs a new S2CCommonTurnRoundNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonTurnRoundNotify);

    /** S2CCommonTurnRoundNotify gameId. */
    public gameId: string;

    /** S2CCommonTurnRoundNotify card. */
    public card?: (ICardInfo|null);

    /**
     * Encodes the specified S2CCommonTurnRoundNotify message. Does not implicitly {@link S2CCommonTurnRoundNotify.verify|verify} messages.
     * @param m S2CCommonTurnRoundNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonTurnRoundNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonTurnRoundNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonTurnRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonTurnRoundNotify;
}

/** Represents a S2CCommonRiverRoundNotify. */
export class S2CCommonRiverRoundNotify implements IS2CCommonRiverRoundNotify {

    /**
     * Constructs a new S2CCommonRiverRoundNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonRiverRoundNotify);

    /** S2CCommonRiverRoundNotify gameId. */
    public gameId: string;

    /** S2CCommonRiverRoundNotify card. */
    public card?: (ICardInfo|null);

    /**
     * Encodes the specified S2CCommonRiverRoundNotify message. Does not implicitly {@link S2CCommonRiverRoundNotify.verify|verify} messages.
     * @param m S2CCommonRiverRoundNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonRiverRoundNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonRiverRoundNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonRiverRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonRiverRoundNotify;
}

/** Represents a S2CCommonPotsNotify. */
export class S2CCommonPotsNotify implements IS2CCommonPotsNotify {

    /**
     * Constructs a new S2CCommonPotsNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonPotsNotify);

    /** S2CCommonPotsNotify gameId. */
    public gameId: string;

    /** S2CCommonPotsNotify potInfo. */
    public potInfo: IPotInfo[];

    /**
     * Encodes the specified S2CCommonPotsNotify message. Does not implicitly {@link S2CCommonPotsNotify.verify|verify} messages.
     * @param m S2CCommonPotsNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonPotsNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonPotsNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonPotsNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonPotsNotify;
}

/** Represents a S2CCommonCurrentActionNotify. */
export class S2CCommonCurrentActionNotify implements IS2CCommonCurrentActionNotify {

    /**
     * Constructs a new S2CCommonCurrentActionNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonCurrentActionNotify);

    /** S2CCommonCurrentActionNotify gameId. */
    public gameId: string;

    /** S2CCommonCurrentActionNotify letTime. */
    public letTime: number;

    /** S2CCommonCurrentActionNotify actionUid. */
    public actionUid: string;

    /**
     * Encodes the specified S2CCommonCurrentActionNotify message. Does not implicitly {@link S2CCommonCurrentActionNotify.verify|verify} messages.
     * @param m S2CCommonCurrentActionNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonCurrentActionNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonCurrentActionNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonCurrentActionNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonCurrentActionNotify;
}

/** Represents a S2CCommonSettlementNotify. */
export class S2CCommonSettlementNotify implements IS2CCommonSettlementNotify {

    /**
     * Constructs a new S2CCommonSettlementNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSettlementNotify);

    /** S2CCommonSettlementNotify gameId. */
    public gameId: string;

    /** S2CCommonSettlementNotify result. */
    public result: IPlayerWinLose[];

    /**
     * Encodes the specified S2CCommonSettlementNotify message. Does not implicitly {@link S2CCommonSettlementNotify.verify|verify} messages.
     * @param m S2CCommonSettlementNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSettlementNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSettlementNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSettlementNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSettlementNotify;
}

/** Represents a S2CCommonIntervalTimeNotify. */
export class S2CCommonIntervalTimeNotify implements IS2CCommonIntervalTimeNotify {

    /**
     * Constructs a new S2CCommonIntervalTimeNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonIntervalTimeNotify);

    /** S2CCommonIntervalTimeNotify gameId. */
    public gameId: string;

    /** S2CCommonIntervalTimeNotify intervalTime. */
    public intervalTime: number;

    /**
     * Encodes the specified S2CCommonIntervalTimeNotify message. Does not implicitly {@link S2CCommonIntervalTimeNotify.verify|verify} messages.
     * @param m S2CCommonIntervalTimeNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonIntervalTimeNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonIntervalTimeNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonIntervalTimeNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonIntervalTimeNotify;
}

/** Represents a S2CCommonOpenCardNotify. */
export class S2CCommonOpenCardNotify implements IS2CCommonOpenCardNotify {

    /**
     * Constructs a new S2CCommonOpenCardNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonOpenCardNotify);

    /** S2CCommonOpenCardNotify gameId. */
    public gameId: string;

    /** S2CCommonOpenCardNotify players. */
    public players: IPlayerInfo[];

    /**
     * Encodes the specified S2CCommonOpenCardNotify message. Does not implicitly {@link S2CCommonOpenCardNotify.verify|verify} messages.
     * @param m S2CCommonOpenCardNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonOpenCardNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonOpenCardNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonOpenCardNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonOpenCardNotify;
}

/** Represents a S2CCommonWaitStartNotify. */
export class S2CCommonWaitStartNotify implements IS2CCommonWaitStartNotify {

    /**
     * Constructs a new S2CCommonWaitStartNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonWaitStartNotify);

    /** S2CCommonWaitStartNotify gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CCommonWaitStartNotify message. Does not implicitly {@link S2CCommonWaitStartNotify.verify|verify} messages.
     * @param m S2CCommonWaitStartNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonWaitStartNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonWaitStartNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonWaitStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonWaitStartNotify;
}

/** Represents a S2CCommonJackpotLotteryNotify. */
export class S2CCommonJackpotLotteryNotify implements IS2CCommonJackpotLotteryNotify {

    /**
     * Constructs a new S2CCommonJackpotLotteryNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonJackpotLotteryNotify);

    /** S2CCommonJackpotLotteryNotify gameId. */
    public gameId: string;

    /** S2CCommonJackpotLotteryNotify jackpotCards. */
    public jackpotCards: ICardInfo[];

    /** S2CCommonJackpotLotteryNotify lotteryNum. */
    public lotteryNum: number;

    /** S2CCommonJackpotLotteryNotify currencyNum. */
    public currencyNum: number;

    /** S2CCommonJackpotLotteryNotify uid. */
    public uid: string;

    /**
     * Encodes the specified S2CCommonJackpotLotteryNotify message. Does not implicitly {@link S2CCommonJackpotLotteryNotify.verify|verify} messages.
     * @param m S2CCommonJackpotLotteryNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonJackpotLotteryNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonJackpotLotteryNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonJackpotLotteryNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonJackpotLotteryNotify;
}

/** Represents a S2CCommonSqueezeRoundNotify. */
export class S2CCommonSqueezeRoundNotify implements IS2CCommonSqueezeRoundNotify {

    /**
     * Constructs a new S2CCommonSqueezeRoundNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonSqueezeRoundNotify);

    /** S2CCommonSqueezeRoundNotify gameId. */
    public gameId: string;

    /** S2CCommonSqueezeRoundNotify leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified S2CCommonSqueezeRoundNotify message. Does not implicitly {@link S2CCommonSqueezeRoundNotify.verify|verify} messages.
     * @param m S2CCommonSqueezeRoundNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonSqueezeRoundNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonSqueezeRoundNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonSqueezeRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonSqueezeRoundNotify;
}

/** Represents a S2CCommonAutoOperatorNotify. */
export class S2CCommonAutoOperatorNotify implements IS2CCommonAutoOperatorNotify {

    /**
     * Constructs a new S2CCommonAutoOperatorNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonAutoOperatorNotify);

    /** S2CCommonAutoOperatorNotify uid. */
    public uid: string;

    /** S2CCommonAutoOperatorNotify gameId. */
    public gameId: string;

    /** S2CCommonAutoOperatorNotify auto. */
    public auto: boolean;

    /** S2CCommonAutoOperatorNotify leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified S2CCommonAutoOperatorNotify message. Does not implicitly {@link S2CCommonAutoOperatorNotify.verify|verify} messages.
     * @param m S2CCommonAutoOperatorNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonAutoOperatorNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonAutoOperatorNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonAutoOperatorNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonAutoOperatorNotify;
}

/** Represents a S2CCommonShowSelfCardNotify. */
export class S2CCommonShowSelfCardNotify implements IS2CCommonShowSelfCardNotify {

    /**
     * Constructs a new S2CCommonShowSelfCardNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonShowSelfCardNotify);

    /** S2CCommonShowSelfCardNotify gameId. */
    public gameId: string;

    /** S2CCommonShowSelfCardNotify uid. */
    public uid: string;

    /** S2CCommonShowSelfCardNotify cardList. */
    public cardList: ICardInfo[];

    /**
     * Encodes the specified S2CCommonShowSelfCardNotify message. Does not implicitly {@link S2CCommonShowSelfCardNotify.verify|verify} messages.
     * @param m S2CCommonShowSelfCardNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonShowSelfCardNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonShowSelfCardNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonShowSelfCardNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonShowSelfCardNotify;
}
 
}
export {}