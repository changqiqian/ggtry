declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Properties of a ClubGameConfig. */
export interface IClubGameConfig {

    /** ClubGameConfig basicConfig */
    basicConfig?: (IGameBasicConfig|null);

    /** ClubGameConfig texasConfig */
    texasConfig?: (ITexasConfig|null);

    /** ClubGameConfig shortConfig */
    shortConfig?: (IShortConfig|null);

    /** ClubGameConfig matchingConfig */
    matchingConfig?: (IMatchingConfig|null);
}

/** Represents a ClubGameConfig. */
export class ClubGameConfig implements IClubGameConfig {

    /**
     * Constructs a new ClubGameConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IClubGameConfig);

    /** ClubGameConfig basicConfig. */
    public basicConfig?: (IGameBasicConfig|null);

    /** ClubGameConfig texasConfig. */
    public texasConfig?: (ITexasConfig|null);

    /** ClubGameConfig shortConfig. */
    public shortConfig?: (IShortConfig|null);

    /** ClubGameConfig matchingConfig. */
    public matchingConfig?: (IMatchingConfig|null);

    /**
     * Encodes the specified ClubGameConfig message. Does not implicitly {@link ClubGameConfig.verify|verify} messages.
     * @param m ClubGameConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubGameConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubGameConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubGameConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubGameConfig;
}

/** Properties of a MatchingConfig. */
export interface IMatchingConfig {

    /** MatchingConfig currentPlayerNum */
    currentPlayerNum?: (number|null);

    /** MatchingConfig startTime */
    startTime?: (number|null);
}

/** Represents a MatchingConfig. */
export class MatchingConfig implements IMatchingConfig {

    /**
     * Constructs a new MatchingConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IMatchingConfig);

    /** MatchingConfig currentPlayerNum. */
    public currentPlayerNum: number;

    /** MatchingConfig startTime. */
    public startTime: number;

    /**
     * Encodes the specified MatchingConfig message. Does not implicitly {@link MatchingConfig.verify|verify} messages.
     * @param m MatchingConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IMatchingConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a MatchingConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns MatchingConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): MatchingConfig;
}

/** Properties of a GameBasicConfig. */
export interface IGameBasicConfig {

    /** GameBasicConfig gameType */
    gameType?: (GameType|null);

    /** GameBasicConfig gameName */
    gameName?: (string|null);

    /** GameBasicConfig currencyType */
    currencyType?: (GameCurrencyType|null);

    /** GameBasicConfig taxType */
    taxType?: (GameTaxType|null);

    /** GameBasicConfig taxRatio */
    taxRatio?: (number|null);
}

/** Represents a GameBasicConfig. */
export class GameBasicConfig implements IGameBasicConfig {

    /**
     * Constructs a new GameBasicConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IGameBasicConfig);

    /** GameBasicConfig gameType. */
    public gameType: GameType;

    /** GameBasicConfig gameName. */
    public gameName: string;

    /** GameBasicConfig currencyType. */
    public currencyType: GameCurrencyType;

    /** GameBasicConfig taxType. */
    public taxType: GameTaxType;

    /** GameBasicConfig taxRatio. */
    public taxRatio: number;

    /**
     * Encodes the specified GameBasicConfig message. Does not implicitly {@link GameBasicConfig.verify|verify} messages.
     * @param m GameBasicConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameBasicConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a GameBasicConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameBasicConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): GameBasicConfig;
}

/** Properties of a TexasConfig. */
export interface ITexasConfig {

    /** TexasConfig smallBlind */
    smallBlind?: (number|null);

    /** TexasConfig straddle */
    straddle?: (boolean|null);

    /** TexasConfig ante */
    ante?: (number|null);

    /** TexasConfig maxTotalBuyIn */
    maxTotalBuyIn?: (number|null);

    /** TexasConfig minBringIn */
    minBringIn?: (number|null);

    /** TexasConfig maxBringIn */
    maxBringIn?: (number|null);

    /** TexasConfig allowBringOut */
    allowBringOut?: (boolean|null);

    /** TexasConfig minScoreAfterBringOut */
    minScoreAfterBringOut?: (number|null);

    /** TexasConfig insurance */
    insurance?: (boolean|null);

    /** TexasConfig gameDuration */
    gameDuration?: (number|null);

    /** TexasConfig thinkingTime */
    thinkingTime?: (number|null);

    /** TexasConfig seatNum */
    seatNum?: (number|null);

    /** TexasConfig autoStartNum */
    autoStartNum?: (number|null);

    /** TexasConfig gpsLimit */
    gpsLimit?: (boolean|null);

    /** TexasConfig ipLimit */
    ipLimit?: (boolean|null);
}

/** Represents a TexasConfig. */
export class TexasConfig implements ITexasConfig {

    /**
     * Constructs a new TexasConfig.
     * @param [p] Properties to set
     */
    constructor(p?: ITexasConfig);

    /** TexasConfig smallBlind. */
    public smallBlind: number;

    /** TexasConfig straddle. */
    public straddle: boolean;

    /** TexasConfig ante. */
    public ante: number;

    /** TexasConfig maxTotalBuyIn. */
    public maxTotalBuyIn: number;

    /** TexasConfig minBringIn. */
    public minBringIn: number;

    /** TexasConfig maxBringIn. */
    public maxBringIn: number;

    /** TexasConfig allowBringOut. */
    public allowBringOut: boolean;

    /** TexasConfig minScoreAfterBringOut. */
    public minScoreAfterBringOut: number;

    /** TexasConfig insurance. */
    public insurance: boolean;

    /** TexasConfig gameDuration. */
    public gameDuration: number;

    /** TexasConfig thinkingTime. */
    public thinkingTime: number;

    /** TexasConfig seatNum. */
    public seatNum: number;

    /** TexasConfig autoStartNum. */
    public autoStartNum: number;

    /** TexasConfig gpsLimit. */
    public gpsLimit: boolean;

    /** TexasConfig ipLimit. */
    public ipLimit: boolean;

    /**
     * Encodes the specified TexasConfig message. Does not implicitly {@link TexasConfig.verify|verify} messages.
     * @param m TexasConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITexasConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a TexasConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns TexasConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): TexasConfig;
}

/** Properties of a ShortConfig. */
export interface IShortConfig {

    /** ShortConfig scoreMode */
    scoreMode?: (ShortGameScoreMode|null);

    /** ShortConfig baseScore */
    baseScore?: (number|null);

    /** ShortConfig buttonDouble */
    buttonDouble?: (boolean|null);
}

/** Represents a ShortConfig. */
export class ShortConfig implements IShortConfig {

    /**
     * Constructs a new ShortConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IShortConfig);

    /** ShortConfig scoreMode. */
    public scoreMode: ShortGameScoreMode;

    /** ShortConfig baseScore. */
    public baseScore: number;

    /** ShortConfig buttonDouble. */
    public buttonDouble: boolean;

    /**
     * Encodes the specified ShortConfig message. Does not implicitly {@link ShortConfig.verify|verify} messages.
     * @param m ShortConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IShortConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ShortConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ShortConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ShortConfig;
}

/** GameType enum. */
export enum GameType {
    GameType_TexasCash = 0,
    GameType_ShortCash = 1,
    GameType_Mtt = 2,
    GameType_Omh = 3
}

/** GameTaxType enum. */
export enum GameTaxType {
    GameTaxType_EveryRound = 0,
    GameTaxType_WholeGameEnd = 1
}

/** GameCurrencyType enum. */
export enum GameCurrencyType {
    GameCurrencyType_Point = 0,
    GameCurrencyType_Coin = 1
}

/** ShortGameScoreMode enum. */
export enum ShortGameScoreMode {
    ShortGameScoreMode_AnteMode = 0,
    ShortGameScoreMode_BlindMode = 1
}

/** RecordDateType enum. */
export enum RecordDateType {
    RecordDateType_Today = 0,
    RecordDateType_Week = 1,
    RecordDateType_Month = 2
}

/** Represents a Result. */
export class Result implements IResult {

    /**
     * Constructs a new Result.
     * @param [p] Properties to set
     */
    constructor(p?: IResult);

    /** Result resId. */
    public resId: number;

    /** Result resMessage. */
    public resMessage: string;

    /**
     * Encodes the specified Result message. Does not implicitly {@link Result.verify|verify} messages.
     * @param m Result message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IResult, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Result message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): Result;
}

/** Represents a C2SGetUserInfo. */
export class C2SGetUserInfo implements IC2SGetUserInfo {

    /**
     * Constructs a new C2SGetUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetUserInfo);

    /**
     * Encodes the specified C2SGetUserInfo message. Does not implicitly {@link C2SGetUserInfo.verify|verify} messages.
     * @param m C2SGetUserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetUserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetUserInfo;
}

/** Represents a C2SChangeUserInfo. */
export class C2SChangeUserInfo implements IC2SChangeUserInfo {

    /**
     * Constructs a new C2SChangeUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SChangeUserInfo);

    /** C2SChangeUserInfo baseInfo. */
    public baseInfo?: (IUserBaseInfo|null);

    /**
     * Encodes the specified C2SChangeUserInfo message. Does not implicitly {@link C2SChangeUserInfo.verify|verify} messages.
     * @param m C2SChangeUserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SChangeUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SChangeUserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SChangeUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SChangeUserInfo;
}

/** AccountLevel enum. */
export enum AccountLevel {
    AccountLevel_Normal = 0,
    AccountLevel_Agent = 1,
    AccountLevel_Boss = 2
}

/** AccountStauts enum. */
export enum AccountStauts {
    AccountStauts_Normal = 0,
    AccountStauts_Frozen = 1
}

/** Represents a UserInfo. */
export class UserInfo implements IUserInfo {

    /**
     * Constructs a new UserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IUserInfo);

    /** UserInfo uid. */
    public uid: number;

    /** UserInfo phoneNum. */
    public phoneNum: string;

    /** UserInfo userBaseInfo. */
    public userBaseInfo?: (IUserBaseInfo|null);

    /** UserInfo userAssets. */
    public userAssets?: (IUserAssets|null);

    /** UserInfo userAccountInfo. */
    public userAccountInfo?: (IUserAccountInfo|null);

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

/** Represents a UserBaseInfo. */
export class UserBaseInfo implements IUserBaseInfo {

    /**
     * Constructs a new UserBaseInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IUserBaseInfo);

    /** UserBaseInfo nickName. */
    public nickName: string;

    /** UserBaseInfo head. */
    public head: string;

    /**
     * Encodes the specified UserBaseInfo message. Does not implicitly {@link UserBaseInfo.verify|verify} messages.
     * @param m UserBaseInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserBaseInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a UserBaseInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserBaseInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): UserBaseInfo;
}

/** Represents a UserAssets. */
export class UserAssets implements IUserAssets {

    /**
     * Constructs a new UserAssets.
     * @param [p] Properties to set
     */
    constructor(p?: IUserAssets);

    /** UserAssets coin. */
    public coin: number;

    /** UserAssets diamond. */
    public diamond: number;

    /** UserAssets clubPoint. */
    public clubPoint: number;

    /** UserAssets unionCoin. */
    public unionCoin: number;

    /**
     * Encodes the specified UserAssets message. Does not implicitly {@link UserAssets.verify|verify} messages.
     * @param m UserAssets message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserAssets, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a UserAssets message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserAssets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): UserAssets;
}

/** Represents a UserAccountInfo. */
export class UserAccountInfo implements IUserAccountInfo {

    /**
     * Constructs a new UserAccountInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IUserAccountInfo);

    /** UserAccountInfo accountLevel. */
    public accountLevel: AccountLevel;

    /** UserAccountInfo accountStatus. */
    public accountStatus: AccountStauts;

    /**
     * Encodes the specified UserAccountInfo message. Does not implicitly {@link UserAccountInfo.verify|verify} messages.
     * @param m UserAccountInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserAccountInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a UserAccountInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserAccountInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): UserAccountInfo;
}

/** Represents a S2CGetUserInfo. */
export class S2CGetUserInfo implements IS2CGetUserInfo {

    /**
     * Constructs a new S2CGetUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetUserInfo);

    /** S2CGetUserInfo userInfo. */
    public userInfo?: (IUserInfo|null);

    /**
     * Encodes the specified S2CGetUserInfo message. Does not implicitly {@link S2CGetUserInfo.verify|verify} messages.
     * @param m S2CGetUserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetUserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetUserInfo;
}

/** Represents a S2CChangeUserInfo. */
export class S2CChangeUserInfo implements IS2CChangeUserInfo {

    /**
     * Constructs a new S2CChangeUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CChangeUserInfo);

    /** S2CChangeUserInfo result. */
    public result?: (IResult|null);

    /** S2CChangeUserInfo baseInfo. */
    public baseInfo?: (IUserBaseInfo|null);

    /**
     * Encodes the specified S2CChangeUserInfo message. Does not implicitly {@link S2CChangeUserInfo.verify|verify} messages.
     * @param m S2CChangeUserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CChangeUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CChangeUserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CChangeUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CChangeUserInfo;
}

/** Represents a C2SLogin. */
export class C2SLogin implements IC2SLogin {

    /**
     * Constructs a new C2SLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SLogin);

    /** C2SLogin loginType. */
    public loginType: LoginType;

    /** C2SLogin phoneNumber. */
    public phoneNumber: number;

    /** C2SLogin code. */
    public code: string;

    /** C2SLogin psw. */
    public psw: string;

    /** C2SLogin token. */
    public token: string;

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @param m C2SLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SLogin, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SLogin;
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

/** Represents a C2SRegister. */
export class C2SRegister implements IC2SRegister {

    /**
     * Constructs a new C2SRegister.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SRegister);

    /** C2SRegister phoneNumber. */
    public phoneNumber: number;

    /** C2SRegister code. */
    public code: string;

    /**
     * Encodes the specified C2SRegister message. Does not implicitly {@link C2SRegister.verify|verify} messages.
     * @param m C2SRegister message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SRegister, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SRegister message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SRegister
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SRegister;
}

/** Represents a C2SGetSmsCode. */
export class C2SGetSmsCode implements IC2SGetSmsCode {

    /**
     * Constructs a new C2SGetSmsCode.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetSmsCode);

    /** C2SGetSmsCode phoneNumber. */
    public phoneNumber: number;

    /** C2SGetSmsCode type. */
    public type: SmsCodeType;

    /**
     * Encodes the specified C2SGetSmsCode message. Does not implicitly {@link C2SGetSmsCode.verify|verify} messages.
     * @param m C2SGetSmsCode message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetSmsCode, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetSmsCode message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetSmsCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetSmsCode;
}

/** SmsCodeType enum. */
export enum SmsCodeType {
    Register = 0,
    Login = 1,
    ResetPassword = 2
}

/** LoginType enum. */
export enum LoginType {
    LoginType_UnKnow = 0,
    LoginType_PhoneCode = 1,
    LoginType_PhonePsw = 2,
    LoginType_Token = 3
}

/** Represents a S2CLogin. */
export class S2CLogin implements IS2CLogin {

    /**
     * Constructs a new S2CLogin.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CLogin);

    /** S2CLogin result. */
    public result?: (IResult|null);

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @param m S2CLogin message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CLogin, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CLogin;
}

/** Represents a S2CLogout. */
export class S2CLogout implements IS2CLogout {

    /**
     * Constructs a new S2CLogout.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CLogout);

    /**
     * Encodes the specified S2CLogout message. Does not implicitly {@link S2CLogout.verify|verify} messages.
     * @param m S2CLogout message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CLogout, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CLogout message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CLogout;
}

/** Represents a S2CRegister. */
export class S2CRegister implements IS2CRegister {

    /**
     * Constructs a new S2CRegister.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CRegister);

    /** S2CRegister result. */
    public result?: (IResult|null);

    /**
     * Encodes the specified S2CRegister message. Does not implicitly {@link S2CRegister.verify|verify} messages.
     * @param m S2CRegister message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CRegister, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CRegister message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CRegister
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CRegister;
}

/** Represents a S2CGetSmsCode. */
export class S2CGetSmsCode implements IS2CGetSmsCode {

    /**
     * Constructs a new S2CGetSmsCode.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetSmsCode);

    /** S2CGetSmsCode code. */
    public code: number;

    /** S2CGetSmsCode type. */
    public type: SmsCodeType;

    /**
     * Encodes the specified S2CGetSmsCode message. Does not implicitly {@link S2CGetSmsCode.verify|verify} messages.
     * @param m S2CGetSmsCode message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetSmsCode, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetSmsCode message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetSmsCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetSmsCode;
}

/**
 * Login(1001-2000)
 * Hall(2001-4000)
 */
export enum MessageId {
    MSG_UnKnow = 0,
    MSG_LoginBegin = 1001,
    C2S_Login = 1002,
    C2S_Logout = 1003,
    C2S_Register = 1004,
    C2S_GetSmsCode = 1005,
    S2C_Login = 1100,
    S2C_Logout = 1101,
    S2C_Register = 1102,
    S2C_GetSmsCode = 1103,
    MSG_LoginEnd = 2000,
    MSG_HallBegin = 2001,
    C2S_GetUserInfo = 2002,
    S2C_GetUserInfo = 3000,
    MSG_HallEnd = 4000
}
 
}
export {}