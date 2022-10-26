declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Properties of a C2SCreateClub. */
export interface IC2SCreateClub {

    /** C2SCreateClub logo */
    logo?: (number|null);

    /** C2SCreateClub stamp */
    stamp?: (number|null);

    /** C2SCreateClub name */
    name?: (string|null);

    /** C2SCreateClub brief */
    brief?: (string|null);
}

/** Represents a C2SCreateClub. */
export class C2SCreateClub implements IC2SCreateClub {

    /**
     * Constructs a new C2SCreateClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SCreateClub);

    /** C2SCreateClub logo. */
    public logo: number;

    /** C2SCreateClub stamp. */
    public stamp: number;

    /** C2SCreateClub name. */
    public name: string;

    /** C2SCreateClub brief. */
    public brief: string;

    /**
     * Encodes the specified C2SCreateClub message. Does not implicitly {@link C2SCreateClub.verify|verify} messages.
     * @param m C2SCreateClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SCreateClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SCreateClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SCreateClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SCreateClub;
}

/** Properties of a C2SGetClubInfos. */
export interface IC2SGetClubInfos {
}

/** Represents a C2SGetClubInfos. */
export class C2SGetClubInfos implements IC2SGetClubInfos {

    /**
     * Constructs a new C2SGetClubInfos.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetClubInfos);

    /**
     * Encodes the specified C2SGetClubInfos message. Does not implicitly {@link C2SGetClubInfos.verify|verify} messages.
     * @param m C2SGetClubInfos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetClubInfos, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetClubInfos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetClubInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetClubInfos;
}

/** Properties of a C2SEnterClub. */
export interface IC2SEnterClub {

    /** C2SEnterClub clubId */
    clubId?: (string|null);
}

/** Represents a C2SEnterClub. */
export class C2SEnterClub implements IC2SEnterClub {

    /**
     * Constructs a new C2SEnterClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SEnterClub);

    /** C2SEnterClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SEnterClub message. Does not implicitly {@link C2SEnterClub.verify|verify} messages.
     * @param m C2SEnterClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SEnterClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SEnterClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SEnterClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SEnterClub;
}

/** Properties of a C2SSearchClub. */
export interface IC2SSearchClub {

    /** C2SSearchClub clubId */
    clubId?: (string|null);
}

/** Represents a C2SSearchClub. */
export class C2SSearchClub implements IC2SSearchClub {

    /**
     * Constructs a new C2SSearchClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SSearchClub);

    /** C2SSearchClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SSearchClub message. Does not implicitly {@link C2SSearchClub.verify|verify} messages.
     * @param m C2SSearchClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SSearchClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SSearchClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SSearchClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SSearchClub;
}

/** Properties of a C2SJoinClub. */
export interface IC2SJoinClub {

    /** C2SJoinClub clubId */
    clubId?: (string|null);
}

/** Represents a C2SJoinClub. */
export class C2SJoinClub implements IC2SJoinClub {

    /**
     * Constructs a new C2SJoinClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SJoinClub);

    /** C2SJoinClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SJoinClub message. Does not implicitly {@link C2SJoinClub.verify|verify} messages.
     * @param m C2SJoinClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SJoinClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SJoinClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SJoinClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SJoinClub;
}

/** Properties of a C2SGetClubMember. */
export interface IC2SGetClubMember {

    /** C2SGetClubMember clubId */
    clubId?: (string|null);

    /** C2SGetClubMember page */
    page?: (number|null);

    /** C2SGetClubMember pageSize */
    pageSize?: (number|null);
}

/** Represents a C2SGetClubMember. */
export class C2SGetClubMember implements IC2SGetClubMember {

    /**
     * Constructs a new C2SGetClubMember.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetClubMember);

    /** C2SGetClubMember clubId. */
    public clubId: string;

    /** C2SGetClubMember page. */
    public page: number;

    /** C2SGetClubMember pageSize. */
    public pageSize: number;

    /**
     * Encodes the specified C2SGetClubMember message. Does not implicitly {@link C2SGetClubMember.verify|verify} messages.
     * @param m C2SGetClubMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetClubMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetClubMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetClubMember;
}

/** Properties of a C2SAddClubMember. */
export interface IC2SAddClubMember {

    /** C2SAddClubMember clubId */
    clubId?: (string|null);

    /** C2SAddClubMember uids */
    uids?: (string[]|null);

    /** C2SAddClubMember agree */
    agree?: (boolean|null);
}

/** Represents a C2SAddClubMember. */
export class C2SAddClubMember implements IC2SAddClubMember {

    /**
     * Constructs a new C2SAddClubMember.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SAddClubMember);

    /** C2SAddClubMember clubId. */
    public clubId: string;

    /** C2SAddClubMember uids. */
    public uids: string[];

    /** C2SAddClubMember agree. */
    public agree: boolean;

    /**
     * Encodes the specified C2SAddClubMember message. Does not implicitly {@link C2SAddClubMember.verify|verify} messages.
     * @param m C2SAddClubMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SAddClubMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SAddClubMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SAddClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SAddClubMember;
}

/** Properties of a C2SDismissClub. */
export interface IC2SDismissClub {

    /** C2SDismissClub clubId */
    clubId?: (string|null);
}

/** Represents a C2SDismissClub. */
export class C2SDismissClub implements IC2SDismissClub {

    /**
     * Constructs a new C2SDismissClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SDismissClub);

    /** C2SDismissClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SDismissClub message. Does not implicitly {@link C2SDismissClub.verify|verify} messages.
     * @param m C2SDismissClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SDismissClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SDismissClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SDismissClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SDismissClub;
}

/** Properties of a C2SQuitClub. */
export interface IC2SQuitClub {

    /** C2SQuitClub clubId */
    clubId?: (string|null);
}

/** Represents a C2SQuitClub. */
export class C2SQuitClub implements IC2SQuitClub {

    /**
     * Constructs a new C2SQuitClub.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SQuitClub);

    /** C2SQuitClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SQuitClub message. Does not implicitly {@link C2SQuitClub.verify|verify} messages.
     * @param m C2SQuitClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SQuitClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SQuitClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SQuitClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SQuitClub;
}

/** Properties of a C2SRemoveMember. */
export interface IC2SRemoveMember {

    /** C2SRemoveMember clubId */
    clubId?: (string|null);

    /** C2SRemoveMember uids */
    uids?: (string[]|null);
}

/** Represents a C2SRemoveMember. */
export class C2SRemoveMember implements IC2SRemoveMember {

    /**
     * Constructs a new C2SRemoveMember.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SRemoveMember);

    /** C2SRemoveMember clubId. */
    public clubId: string;

    /** C2SRemoveMember uids. */
    public uids: string[];

    /**
     * Encodes the specified C2SRemoveMember message. Does not implicitly {@link C2SRemoveMember.verify|verify} messages.
     * @param m C2SRemoveMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SRemoveMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SRemoveMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SRemoveMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SRemoveMember;
}

/** Properties of a ClubDetailsInfo. */
export interface IClubDetailsInfo {

    /** ClubDetailsInfo logo */
    logo?: (number|null);

    /** ClubDetailsInfo stamp */
    stamp?: (number|null);

    /** ClubDetailsInfo name */
    name?: (string|null);

    /** ClubDetailsInfo brief */
    brief?: (string|null);

    /** ClubDetailsInfo id */
    id?: (string|null);

    /** ClubDetailsInfo ownerId */
    ownerId?: (string|null);

    /** ClubDetailsInfo memberCount */
    memberCount?: (number|null);

    /** ClubDetailsInfo tableCount */
    tableCount?: (number|null);

    /** ClubDetailsInfo totalClubPoint */
    totalClubPoint?: (number|null);
}

/** Represents a ClubDetailsInfo. */
export class ClubDetailsInfo implements IClubDetailsInfo {

    /**
     * Constructs a new ClubDetailsInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IClubDetailsInfo);

    /** ClubDetailsInfo logo. */
    public logo: number;

    /** ClubDetailsInfo stamp. */
    public stamp: number;

    /** ClubDetailsInfo name. */
    public name: string;

    /** ClubDetailsInfo brief. */
    public brief: string;

    /** ClubDetailsInfo id. */
    public id: string;

    /** ClubDetailsInfo ownerId. */
    public ownerId: string;

    /** ClubDetailsInfo memberCount. */
    public memberCount: number;

    /** ClubDetailsInfo tableCount. */
    public tableCount: number;

    /** ClubDetailsInfo totalClubPoint. */
    public totalClubPoint: number;

    /**
     * Encodes the specified ClubDetailsInfo message. Does not implicitly {@link ClubDetailsInfo.verify|verify} messages.
     * @param m ClubDetailsInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubDetailsInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubDetailsInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubDetailsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubDetailsInfo;
}

/** Properties of a ClubMember. */
export interface IClubMember {

    /** ClubMember id */
    id?: (string|null);

    /** ClubMember uid */
    uid?: (string|null);

    /** ClubMember nickName */
    nickName?: (string|null);

    /** ClubMember head */
    head?: (string|null);

    /** ClubMember clubPoint */
    clubPoint?: (number|null);

    /** ClubMember memberType */
    memberType?: (ClubMemberType|null);
}

/** Represents a ClubMember. */
export class ClubMember implements IClubMember {

    /**
     * Constructs a new ClubMember.
     * @param [p] Properties to set
     */
    constructor(p?: IClubMember);

    /** ClubMember id. */
    public id: string;

    /** ClubMember uid. */
    public uid: string;

    /** ClubMember nickName. */
    public nickName: string;

    /** ClubMember head. */
    public head: string;

    /** ClubMember clubPoint. */
    public clubPoint: number;

    /** ClubMember memberType. */
    public memberType: ClubMemberType;

    /**
     * Encodes the specified ClubMember message. Does not implicitly {@link ClubMember.verify|verify} messages.
     * @param m ClubMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubMember;
}

/** Properties of a ClubBasicJoinRequest. */
export interface IClubBasicJoinRequest {

    /** ClubBasicJoinRequest id */
    id?: (string|null);

    /** ClubBasicJoinRequest uid */
    uid?: (string|null);

    /** ClubBasicJoinRequest nickName */
    nickName?: (string|null);

    /** ClubBasicJoinRequest head */
    head?: (string|null);
}

/** Represents a ClubBasicJoinRequest. */
export class ClubBasicJoinRequest implements IClubBasicJoinRequest {

    /**
     * Constructs a new ClubBasicJoinRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IClubBasicJoinRequest);

    /** ClubBasicJoinRequest id. */
    public id: string;

    /** ClubBasicJoinRequest uid. */
    public uid: string;

    /** ClubBasicJoinRequest nickName. */
    public nickName: string;

    /** ClubBasicJoinRequest head. */
    public head: string;

    /**
     * Encodes the specified ClubBasicJoinRequest message. Does not implicitly {@link ClubBasicJoinRequest.verify|verify} messages.
     * @param m ClubBasicJoinRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubBasicJoinRequest, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubBasicJoinRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubBasicJoinRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubBasicJoinRequest;
}

/** Properties of a ClubJoinRequest. */
export interface IClubJoinRequest {

    /** ClubJoinRequest clubBasicJoinRequest */
    clubBasicJoinRequest?: (IClubBasicJoinRequest[]|null);

    /** ClubJoinRequest clubInfo */
    clubInfo?: (IClubDetailsInfo|null);
}

/** Represents a ClubJoinRequest. */
export class ClubJoinRequest implements IClubJoinRequest {

    /**
     * Constructs a new ClubJoinRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IClubJoinRequest);

    /** ClubJoinRequest clubBasicJoinRequest. */
    public clubBasicJoinRequest: IClubBasicJoinRequest[];

    /** ClubJoinRequest clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified ClubJoinRequest message. Does not implicitly {@link ClubJoinRequest.verify|verify} messages.
     * @param m ClubJoinRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubJoinRequest, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubJoinRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubJoinRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubJoinRequest;
}

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

/** ClubMemberType enum. */
export enum ClubMemberType {
    ClubAccountType_Normal = 0,
    ClubAccountType_Manager = 1,
    ClubAccountType_Owner = 2
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

/** Represents a HeartbeatPing. */
export class HeartbeatPing implements IHeartbeatPing {

    /**
     * Constructs a new HeartbeatPing.
     * @param [p] Properties to set
     */
    constructor(p?: IHeartbeatPing);

    /**
     * Encodes the specified HeartbeatPing message. Does not implicitly {@link HeartbeatPing.verify|verify} messages.
     * @param m HeartbeatPing message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHeartbeatPing, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a HeartbeatPing message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HeartbeatPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): HeartbeatPing;
}

/** Represents a HeartbeatPong. */
export class HeartbeatPong implements IHeartbeatPong {

    /**
     * Constructs a new HeartbeatPong.
     * @param [p] Properties to set
     */
    constructor(p?: IHeartbeatPong);

    /**
     * Encodes the specified HeartbeatPong message. Does not implicitly {@link HeartbeatPong.verify|verify} messages.
     * @param m HeartbeatPong message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHeartbeatPong, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a HeartbeatPong message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HeartbeatPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): HeartbeatPong;
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

/** Represents a S2CCreateClub. */
export class S2CCreateClub implements IS2CCreateClub {

    /**
     * Constructs a new S2CCreateClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCreateClub);

    /** S2CCreateClub result. */
    public result?: (ICommonResult|null);

    /** S2CCreateClub clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified S2CCreateClub message. Does not implicitly {@link S2CCreateClub.verify|verify} messages.
     * @param m S2CCreateClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCreateClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCreateClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCreateClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCreateClub;
}

/** Represents a S2CGetClubInfos. */
export class S2CGetClubInfos implements IS2CGetClubInfos {

    /**
     * Constructs a new S2CGetClubInfos.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetClubInfos);

    /** S2CGetClubInfos result. */
    public result?: (ICommonResult|null);

    /** S2CGetClubInfos clubInfos. */
    public clubInfos: IClubDetailsInfo[];

    /**
     * Encodes the specified S2CGetClubInfos message. Does not implicitly {@link S2CGetClubInfos.verify|verify} messages.
     * @param m S2CGetClubInfos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetClubInfos, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetClubInfos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetClubInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetClubInfos;
}

/** Represents a S2CEnterClub. */
export class S2CEnterClub implements IS2CEnterClub {

    /**
     * Constructs a new S2CEnterClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CEnterClub);

    /** S2CEnterClub result. */
    public result?: (ICommonResult|null);

    /** S2CEnterClub clubMember. */
    public clubMember?: (IClubMember|null);

    /** S2CEnterClub clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified S2CEnterClub message. Does not implicitly {@link S2CEnterClub.verify|verify} messages.
     * @param m S2CEnterClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CEnterClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CEnterClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CEnterClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CEnterClub;
}

/** Represents a S2CSearchClub. */
export class S2CSearchClub implements IS2CSearchClub {

    /**
     * Constructs a new S2CSearchClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CSearchClub);

    /** S2CSearchClub result. */
    public result?: (ICommonResult|null);

    /** S2CSearchClub clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified S2CSearchClub message. Does not implicitly {@link S2CSearchClub.verify|verify} messages.
     * @param m S2CSearchClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CSearchClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CSearchClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CSearchClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CSearchClub;
}

/** Represents a S2CJoinClub. */
export class S2CJoinClub implements IS2CJoinClub {

    /**
     * Constructs a new S2CJoinClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CJoinClub);

    /** S2CJoinClub result. */
    public result?: (ICommonResult|null);

    /**
     * Encodes the specified S2CJoinClub message. Does not implicitly {@link S2CJoinClub.verify|verify} messages.
     * @param m S2CJoinClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CJoinClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CJoinClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CJoinClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CJoinClub;
}

/** Represents a S2CGetClubMember. */
export class S2CGetClubMember implements IS2CGetClubMember {

    /**
     * Constructs a new S2CGetClubMember.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetClubMember);

    /** S2CGetClubMember result. */
    public result?: (ICommonResult|null);

    /** S2CGetClubMember clubId. */
    public clubId: string;

    /** S2CGetClubMember clubMembers. */
    public clubMembers: IClubMember[];

    /** S2CGetClubMember page. */
    public page: number;

    /** S2CGetClubMember pageSize. */
    public pageSize: number;

    /** S2CGetClubMember totalMember. */
    public totalMember: number;

    /**
     * Encodes the specified S2CGetClubMember message. Does not implicitly {@link S2CGetClubMember.verify|verify} messages.
     * @param m S2CGetClubMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetClubMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetClubMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetClubMember;
}

/** Represents a S2CAddClubMember. */
export class S2CAddClubMember implements IS2CAddClubMember {

    /**
     * Constructs a new S2CAddClubMember.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CAddClubMember);

    /** S2CAddClubMember result. */
    public result?: (ICommonResult|null);

    /** S2CAddClubMember clubId. */
    public clubId: string;

    /** S2CAddClubMember uids. */
    public uids: string[];

    /** S2CAddClubMember agree. */
    public agree: boolean;

    /**
     * Encodes the specified S2CAddClubMember message. Does not implicitly {@link S2CAddClubMember.verify|verify} messages.
     * @param m S2CAddClubMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CAddClubMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CAddClubMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CAddClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CAddClubMember;
}

/** Represents a S2CDismissClub. */
export class S2CDismissClub implements IS2CDismissClub {

    /**
     * Constructs a new S2CDismissClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CDismissClub);

    /** S2CDismissClub result. */
    public result?: (ICommonResult|null);

    /** S2CDismissClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified S2CDismissClub message. Does not implicitly {@link S2CDismissClub.verify|verify} messages.
     * @param m S2CDismissClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CDismissClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CDismissClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CDismissClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CDismissClub;
}

/** Represents a S2CQuitClub. */
export class S2CQuitClub implements IS2CQuitClub {

    /**
     * Constructs a new S2CQuitClub.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CQuitClub);

    /** S2CQuitClub result. */
    public result?: (ICommonResult|null);

    /** S2CQuitClub clubId. */
    public clubId: string;

    /**
     * Encodes the specified S2CQuitClub message. Does not implicitly {@link S2CQuitClub.verify|verify} messages.
     * @param m S2CQuitClub message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CQuitClub, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CQuitClub message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CQuitClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CQuitClub;
}

/** Represents a S2CRemoveMember. */
export class S2CRemoveMember implements IS2CRemoveMember {

    /**
     * Constructs a new S2CRemoveMember.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CRemoveMember);

    /** S2CRemoveMember result. */
    public result?: (ICommonResult|null);

    /** S2CRemoveMember clubId. */
    public clubId: string;

    /** S2CRemoveMember uids. */
    public uids: string[];

    /**
     * Encodes the specified S2CRemoveMember message. Does not implicitly {@link S2CRemoveMember.verify|verify} messages.
     * @param m S2CRemoveMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CRemoveMember, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CRemoveMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CRemoveMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CRemoveMember;
}

/** Represents a S2CClubJoinNotify. */
export class S2CClubJoinNotify implements IS2CClubJoinNotify {

    /**
     * Constructs a new S2CClubJoinNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CClubJoinNotify);

    /** S2CClubJoinNotify request. */
    public request: IClubJoinRequest[];

    /**
     * Encodes the specified S2CClubJoinNotify message. Does not implicitly {@link S2CClubJoinNotify.verify|verify} messages.
     * @param m S2CClubJoinNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CClubJoinNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CClubJoinNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CClubJoinNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CClubJoinNotify;
}

/** Represents a S2CJoinClubNotify. */
export class S2CJoinClubNotify implements IS2CJoinClubNotify {

    /**
     * Constructs a new S2CJoinClubNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CJoinClubNotify);

    /** S2CJoinClubNotify result. */
    public result?: (ICommonResult|null);

    /** S2CJoinClubNotify clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified S2CJoinClubNotify message. Does not implicitly {@link S2CJoinClubNotify.verify|verify} messages.
     * @param m S2CJoinClubNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CJoinClubNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CJoinClubNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CJoinClubNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CJoinClubNotify;
}

/** Represents a S2CRemoveNotify. */
export class S2CRemoveNotify implements IS2CRemoveNotify {

    /**
     * Constructs a new S2CRemoveNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CRemoveNotify);

    /** S2CRemoveNotify clubId. */
    public clubId: string;

    /**
     * Encodes the specified S2CRemoveNotify message. Does not implicitly {@link S2CRemoveNotify.verify|verify} messages.
     * @param m S2CRemoveNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CRemoveNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CRemoveNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CRemoveNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CRemoveNotify;
}

/** Represents a S2CDismissClubNotify. */
export class S2CDismissClubNotify implements IS2CDismissClubNotify {

    /**
     * Constructs a new S2CDismissClubNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CDismissClubNotify);

    /** S2CDismissClubNotify clubId. */
    public clubId: string;

    /**
     * Encodes the specified S2CDismissClubNotify message. Does not implicitly {@link S2CDismissClubNotify.verify|verify} messages.
     * @param m S2CDismissClubNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CDismissClubNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CDismissClubNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CDismissClubNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CDismissClubNotify;
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

/** Represents a C2SGetUserInfo. */
export class C2SGetUserInfo implements IC2SGetUserInfo {

    /**
     * Constructs a new C2SGetUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetUserInfo);

    /** C2SGetUserInfo token. */
    public token: string;

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

    /** C2SChangeUserInfo nickName. */
    public nickName: string;

    /** C2SChangeUserInfo head. */
    public head: string;

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

/** Represents a S2CGetUserInfo. */
export class S2CGetUserInfo implements IS2CGetUserInfo {

    /**
     * Constructs a new S2CGetUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetUserInfo);

    /** S2CGetUserInfo result. */
    public result?: (ICommonResult|null);

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
    public result?: (ICommonResult|null);

    /** S2CChangeUserInfo nickName. */
    public nickName: string;

    /** S2CChangeUserInfo head. */
    public head: string;

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
    public phoneNumber: string;

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

/** Represents a C2SRegister. */
export class C2SRegister implements IC2SRegister {

    /**
     * Constructs a new C2SRegister.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SRegister);

    /** C2SRegister phoneNumber. */
    public phoneNumber: string;

    /** C2SRegister code. */
    public code: string;

    /** C2SRegister nickName. */
    public nickName: string;

    /** C2SRegister psw. */
    public psw: string;

    /** C2SRegister head. */
    public head: string;

    /** C2SRegister inviteCode. */
    public inviteCode: string;

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
    public phoneNumber: string;

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

/** Represents a C2SVerifyPhoneNumber. */
export class C2SVerifyPhoneNumber implements IC2SVerifyPhoneNumber {

    /**
     * Constructs a new C2SVerifyPhoneNumber.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SVerifyPhoneNumber);

    /** C2SVerifyPhoneNumber phoneNumber. */
    public phoneNumber: string;

    /**
     * Encodes the specified C2SVerifyPhoneNumber message. Does not implicitly {@link C2SVerifyPhoneNumber.verify|verify} messages.
     * @param m C2SVerifyPhoneNumber message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SVerifyPhoneNumber, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SVerifyPhoneNumber message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SVerifyPhoneNumber
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SVerifyPhoneNumber;
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
    public result?: (ICommonResult|null);

    /** S2CLogin token. */
    public token: string;

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

/** Represents a S2CRegister. */
export class S2CRegister implements IS2CRegister {

    /**
     * Constructs a new S2CRegister.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CRegister);

    /** S2CRegister result. */
    public result?: (ICommonResult|null);

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

/** Represents a S2CVerifyPhoneNumber. */
export class S2CVerifyPhoneNumber implements IS2CVerifyPhoneNumber {

    /**
     * Constructs a new S2CVerifyPhoneNumber.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CVerifyPhoneNumber);

    /** S2CVerifyPhoneNumber result. */
    public result?: (ICommonResult|null);

    /**
     * Encodes the specified S2CVerifyPhoneNumber message. Does not implicitly {@link S2CVerifyPhoneNumber.verify|verify} messages.
     * @param m S2CVerifyPhoneNumber message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CVerifyPhoneNumber, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CVerifyPhoneNumber message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CVerifyPhoneNumber
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CVerifyPhoneNumber;
}

/** MessageId enum. */
export enum MessageId {
    MSG_UnKnow = 0,
    C2S_HeartbeatPing = 10,
    S2C_HeartbeatPong = 11,
    MSG_LoginBegin = 1001,
    C2S_Login = 1002,
    C2S_Register = 1004,
    C2S_GetSmsCode = 1005,
    C2S_VerifyPhoneNumber = 1006,
    S2C_Login = 1100,
    S2C_Register = 1102,
    S2C_GetSmsCode = 1103,
    S2C_VerifyPhoneNumber = 1104,
    MSG_LoginEnd = 2000,
    MSG_HallBegin = 2001,
    C2S_Logout = 2002,
    C2S_GetUserInfo = 2003,
    S2C_GetUserInfo = 3000,
    MSG_HallEnd = 3500,
    MSG_ClubBegin = 4001,
    C2S_CreateClub = 4002,
    C2S_GetClubInfos = 4003,
    C2S_EnterClub = 4004,
    C2S_SearchClub = 4005,
    C2S_JoinClub = 4006,
    C2S_GetClubMember = 4007,
    C2S_AddClubMember = 4008,
    C2S_DismissClub = 4009,
    C2S_QuitClub = 4010,
    C2S_RemoveMember = 4011,
    S2C_CreateClub = 4502,
    S2C_GetClubInfos = 4503,
    S2C_EnterClub = 4504,
    S2C_SearchClub = 4505,
    S2C_JoinClub = 4506,
    S2C_GetClubMember = 4507,
    S2C_AddClubMember = 4508,
    S2C_DismissClub = 4509,
    S2C_QuitClub = 4510,
    S2C_RemoveMember = 4511,
    S2C_ClubJoinNotify = 4610,
    S2C_JoinClubNotify = 4611,
    S2C_RemoveNotify = 4612,
    S2C_DismissClubNotify = 4613,
    MSG_ClubEnd = 5000
}
 
}
export {}