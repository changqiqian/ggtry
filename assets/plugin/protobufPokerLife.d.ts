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

/** Properties of a C2SModifyClubInfo. */
export interface IC2SModifyClubInfo {

    /** C2SModifyClubInfo clubId */
    clubId?: (string|null);

    /** C2SModifyClubInfo newName */
    newName?: (string|null);

    /** C2SModifyClubInfo newBrief */
    newBrief?: (string|null);

    /** C2SModifyClubInfo newLogo */
    newLogo?: (number|null);

    /** C2SModifyClubInfo newStamp */
    newStamp?: (number|null);
}

/** Represents a C2SModifyClubInfo. */
export class C2SModifyClubInfo implements IC2SModifyClubInfo {

    /**
     * Constructs a new C2SModifyClubInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SModifyClubInfo);

    /** C2SModifyClubInfo clubId. */
    public clubId: string;

    /** C2SModifyClubInfo newName. */
    public newName: string;

    /** C2SModifyClubInfo newBrief. */
    public newBrief: string;

    /** C2SModifyClubInfo newLogo. */
    public newLogo: number;

    /** C2SModifyClubInfo newStamp. */
    public newStamp: number;

    /**
     * Encodes the specified C2SModifyClubInfo message. Does not implicitly {@link C2SModifyClubInfo.verify|verify} messages.
     * @param m C2SModifyClubInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SModifyClubInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SModifyClubInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SModifyClubInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SModifyClubInfo;
}

/** Properties of a C2SShareClubScore. */
export interface IC2SShareClubScore {

    /** C2SShareClubScore clubId */
    clubId?: (string|null);

    /** C2SShareClubScore uid */
    uid?: (string|null);

    /** C2SShareClubScore amount */
    amount?: (number|null);
}

/** Represents a C2SShareClubScore. */
export class C2SShareClubScore implements IC2SShareClubScore {

    /**
     * Constructs a new C2SShareClubScore.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SShareClubScore);

    /** C2SShareClubScore clubId. */
    public clubId: string;

    /** C2SShareClubScore uid. */
    public uid: string;

    /** C2SShareClubScore amount. */
    public amount: number;

    /**
     * Encodes the specified C2SShareClubScore message. Does not implicitly {@link C2SShareClubScore.verify|verify} messages.
     * @param m C2SShareClubScore message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SShareClubScore, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SShareClubScore message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SShareClubScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SShareClubScore;
}

/** Properties of a C2SModifyMemberRole. */
export interface IC2SModifyMemberRole {

    /** C2SModifyMemberRole clubId */
    clubId?: (string|null);

    /** C2SModifyMemberRole uid */
    uid?: (string|null);

    /** C2SModifyMemberRole memberType */
    memberType?: (ClubMemberType|null);
}

/** Represents a C2SModifyMemberRole. */
export class C2SModifyMemberRole implements IC2SModifyMemberRole {

    /**
     * Constructs a new C2SModifyMemberRole.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SModifyMemberRole);

    /** C2SModifyMemberRole clubId. */
    public clubId: string;

    /** C2SModifyMemberRole uid. */
    public uid: string;

    /** C2SModifyMemberRole memberType. */
    public memberType: ClubMemberType;

    /**
     * Encodes the specified C2SModifyMemberRole message. Does not implicitly {@link C2SModifyMemberRole.verify|verify} messages.
     * @param m C2SModifyMemberRole message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SModifyMemberRole, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SModifyMemberRole message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SModifyMemberRole
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SModifyMemberRole;
}

/** Properties of a C2SCreateClubGame. */
export interface IC2SCreateClubGame {

    /** C2SCreateClubGame clubId */
    clubId?: (string|null);

    /** C2SCreateClubGame texasConfig */
    texasConfig?: (IBasicTexasConfig|null);
}

/** Represents a C2SCreateClubGame. */
export class C2SCreateClubGame implements IC2SCreateClubGame {

    /**
     * Constructs a new C2SCreateClubGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SCreateClubGame);

    /** C2SCreateClubGame clubId. */
    public clubId: string;

    /** C2SCreateClubGame texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /**
     * Encodes the specified C2SCreateClubGame message. Does not implicitly {@link C2SCreateClubGame.verify|verify} messages.
     * @param m C2SCreateClubGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SCreateClubGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SCreateClubGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SCreateClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SCreateClubGame;
}

/** Properties of a C2SGetClubTexasGameInfo. */
export interface IC2SGetClubTexasGameInfo {

    /** C2SGetClubTexasGameInfo clubId */
    clubId?: (string|null);
}

/** Represents a C2SGetClubTexasGameInfo. */
export class C2SGetClubTexasGameInfo implements IC2SGetClubTexasGameInfo {

    /**
     * Constructs a new C2SGetClubTexasGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetClubTexasGameInfo);

    /** C2SGetClubTexasGameInfo clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SGetClubTexasGameInfo message. Does not implicitly {@link C2SGetClubTexasGameInfo.verify|verify} messages.
     * @param m C2SGetClubTexasGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetClubTexasGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetClubTexasGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetClubTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetClubTexasGameInfo;
}

/** Properties of a C2SGetClubSubGameInfo. */
export interface IC2SGetClubSubGameInfo {

    /** C2SGetClubSubGameInfo clubId */
    clubId?: (string|null);
}

/** Represents a C2SGetClubSubGameInfo. */
export class C2SGetClubSubGameInfo implements IC2SGetClubSubGameInfo {

    /**
     * Constructs a new C2SGetClubSubGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetClubSubGameInfo);

    /** C2SGetClubSubGameInfo clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SGetClubSubGameInfo message. Does not implicitly {@link C2SGetClubSubGameInfo.verify|verify} messages.
     * @param m C2SGetClubSubGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetClubSubGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetClubSubGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetClubSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetClubSubGameInfo;
}

/** Properties of a C2SDismissClubGame. */
export interface IC2SDismissClubGame {

    /** C2SDismissClubGame clubId */
    clubId?: (string|null);

    /** C2SDismissClubGame gameId */
    gameId?: (string|null);
}

/** Represents a C2SDismissClubGame. */
export class C2SDismissClubGame implements IC2SDismissClubGame {

    /**
     * Constructs a new C2SDismissClubGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SDismissClubGame);

    /** C2SDismissClubGame clubId. */
    public clubId: string;

    /** C2SDismissClubGame gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2SDismissClubGame message. Does not implicitly {@link C2SDismissClubGame.verify|verify} messages.
     * @param m C2SDismissClubGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SDismissClubGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SDismissClubGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SDismissClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SDismissClubGame;
}

/** ClubMemberType enum. */
export enum ClubMemberType {
    ClubAccountType_Normal = 0,
    ClubAccountType_Manager = 1,
    ClubAccountType_Owner = 2
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

/** Represents a ClubTexasGameInfo. */
export class ClubTexasGameInfo implements IClubTexasGameInfo {

    /**
     * Constructs a new ClubTexasGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IClubTexasGameInfo);

    /** ClubTexasGameInfo clubId. */
    public clubId: string;

    /** ClubTexasGameInfo gameId. */
    public gameId: string;

    /** ClubTexasGameInfo creatorInfo. */
    public creatorInfo?: (IClubMember|null);

    /** ClubTexasGameInfo aboutGameInfo. */
    public aboutGameInfo?: (IAboutTexasGameInfo|null);

    /** ClubTexasGameInfo basicTexasConfig. */
    public basicTexasConfig?: (IBasicTexasConfig|null);

    /**
     * Encodes the specified ClubTexasGameInfo message. Does not implicitly {@link ClubTexasGameInfo.verify|verify} messages.
     * @param m ClubTexasGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubTexasGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubTexasGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubTexasGameInfo;
}

/** Represents a ClubSubGameInfo. */
export class ClubSubGameInfo implements IClubSubGameInfo {

    /**
     * Constructs a new ClubSubGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IClubSubGameInfo);

    /** ClubSubGameInfo clubId. */
    public clubId: string;

    /** ClubSubGameInfo gameId. */
    public gameId: string;

    /** ClubSubGameInfo gameName. */
    public gameName: string;

    /** ClubSubGameInfo gameType. */
    public gameType: GameType;

    /** ClubSubGameInfo currencyType. */
    public currencyType: GameCurrencyType;

    /**
     * Encodes the specified ClubSubGameInfo message. Does not implicitly {@link ClubSubGameInfo.verify|verify} messages.
     * @param m ClubSubGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubSubGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubSubGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubSubGameInfo;
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

    /** PlayerInfo auto. */
    public auto: boolean;

    /** PlayerInfo autoLeftTime. */
    public autoLeftTime: number;

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

    /** PlayerWinLose winLose. */
    public winLose: number;

    /** PlayerWinLose cardInfo. */
    public cardInfo: ICardInfo[];

    /** PlayerWinLose combinationResult. */
    public combinationResult?: (ICombinationResult|null);

    /** PlayerWinLose amount. */
    public amount: number;

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

/** HTTP用到的结构//////////////////////////////////// */
export class SimpleReplayData implements ISimpleReplayData {

    /**
     * Constructs a new SimpleReplayData.
     * @param [p] Properties to set
     */
    constructor(p?: ISimpleReplayData);

    /** SimpleReplayData list. */
    public list: ISimpleReplay[];

    /** SimpleReplayData pageNum. */
    public pageNum: number;

    /** SimpleReplayData size. */
    public size: number;

    /** SimpleReplayData total. */
    public total: number;

    /**
     * Encodes the specified SimpleReplayData message. Does not implicitly {@link SimpleReplayData.verify|verify} messages.
     * @param m SimpleReplayData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISimpleReplayData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a SimpleReplayData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SimpleReplayData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): SimpleReplayData;
}

/** Represents a SimpleReplay. */
export class SimpleReplay implements ISimpleReplay {

    /**
     * Constructs a new SimpleReplay.
     * @param [p] Properties to set
     */
    constructor(p?: ISimpleReplay);

    /** SimpleReplay gameId. */
    public gameId: string;

    /** SimpleReplay index. */
    public index: number;

    /** SimpleReplay publicCards. */
    public publicCards: ICardInfo[];

    /** SimpleReplay myCards. */
    public myCards: ICardInfo[];

    /** SimpleReplay myResult. */
    public myResult: number;

    /** SimpleReplay winnerCards. */
    public winnerCards: ICardInfo[];

    /** SimpleReplay winnerName. */
    public winnerName: string;

    /** SimpleReplay winnerHead. */
    public winnerHead: string;

    /** SimpleReplay winnerResult. */
    public winnerResult: number;

    /** SimpleReplay date. */
    public date: string;

    /**
     * Encodes the specified SimpleReplay message. Does not implicitly {@link SimpleReplay.verify|verify} messages.
     * @param m SimpleReplay message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISimpleReplay, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a SimpleReplay message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SimpleReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): SimpleReplay;
}

/** Represents a ReplayData. */
export class ReplayData implements IReplayData {

    /**
     * Constructs a new ReplayData.
     * @param [p] Properties to set
     */
    constructor(p?: IReplayData);

    /** ReplayData gameId. */
    public gameId: string;

    /** ReplayData index. */
    public index: number;

    /** ReplayData texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /** ReplayData players. */
    public players: IPlayerInfo[];

    /** ReplayData dealerUid. */
    public dealerUid: string;

    /** ReplayData antes. */
    public antes: number;

    /** ReplayData publicCards. */
    public publicCards: ICardInfo[];

    /** ReplayData roundStartActions. */
    public roundStartActions: IActionResult[];

    /** ReplayData preFlopActions. */
    public preFlopActions: IActionResult[];

    /** ReplayData flopActions. */
    public flopActions: IActionResult[];

    /** ReplayData turnActions. */
    public turnActions: IActionResult[];

    /** ReplayData riverActions. */
    public riverActions: IActionResult[];

    /** ReplayData result. */
    public result: IPlayerWinLose[];

    /** ReplayData potInfoFlop. */
    public potInfoFlop: IPotInfo[];

    /** ReplayData potInfoTurn. */
    public potInfoTurn: IPotInfo[];

    /** ReplayData potInfoRiver. */
    public potInfoRiver: IPotInfo[];

    /**
     * Encodes the specified ReplayData message. Does not implicitly {@link ReplayData.verify|verify} messages.
     * @param m ReplayData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IReplayData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ReplayData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ReplayData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ReplayData;
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

    /** RecordDetail list. */
    public list: IRecordPlayer[];

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

/** Represents a RecordPlayer. */
export class RecordPlayer implements IRecordPlayer {

    /**
     * Constructs a new RecordPlayer.
     * @param [p] Properties to set
     */
    constructor(p?: IRecordPlayer);

    /** RecordPlayer uid. */
    public uid: string;

    /** RecordPlayer head. */
    public head: string;

    /** RecordPlayer name. */
    public name: string;

    /** RecordPlayer hands. */
    public hands: number;

    /** RecordPlayer vpip. */
    public vpip: number;

    /** RecordPlayer buyIn. */
    public buyIn: number;

    /** RecordPlayer winLose. */
    public winLose: number;

    /**
     * Encodes the specified RecordPlayer message. Does not implicitly {@link RecordPlayer.verify|verify} messages.
     * @param m RecordPlayer message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRecordPlayer, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RecordPlayer message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RecordPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): RecordPlayer;
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

/** Represents a S2CModifyClubInfo. */
export class S2CModifyClubInfo implements IS2CModifyClubInfo {

    /**
     * Constructs a new S2CModifyClubInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CModifyClubInfo);

    /** S2CModifyClubInfo result. */
    public result?: (ICommonResult|null);

    /** S2CModifyClubInfo clubInfo. */
    public clubInfo?: (IClubDetailsInfo|null);

    /**
     * Encodes the specified S2CModifyClubInfo message. Does not implicitly {@link S2CModifyClubInfo.verify|verify} messages.
     * @param m S2CModifyClubInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CModifyClubInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CModifyClubInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CModifyClubInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CModifyClubInfo;
}

/** Represents a S2CShareClubScore. */
export class S2CShareClubScore implements IS2CShareClubScore {

    /**
     * Constructs a new S2CShareClubScore.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CShareClubScore);

    /** S2CShareClubScore result. */
    public result?: (ICommonResult|null);

    /** S2CShareClubScore clubId. */
    public clubId: string;

    /** S2CShareClubScore uid. */
    public uid: string;

    /** S2CShareClubScore amount. */
    public amount: number;

    /** S2CShareClubScore playerRestPoint. */
    public playerRestPoint: number;

    /** S2CShareClubScore clubRestPoint. */
    public clubRestPoint: number;

    /**
     * Encodes the specified S2CShareClubScore message. Does not implicitly {@link S2CShareClubScore.verify|verify} messages.
     * @param m S2CShareClubScore message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CShareClubScore, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CShareClubScore message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CShareClubScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CShareClubScore;
}

/** Represents a S2CModifyMemberRole. */
export class S2CModifyMemberRole implements IS2CModifyMemberRole {

    /**
     * Constructs a new S2CModifyMemberRole.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CModifyMemberRole);

    /** S2CModifyMemberRole result. */
    public result?: (ICommonResult|null);

    /** S2CModifyMemberRole clubId. */
    public clubId: string;

    /** S2CModifyMemberRole uid. */
    public uid: string;

    /** S2CModifyMemberRole memberType. */
    public memberType: ClubMemberType;

    /**
     * Encodes the specified S2CModifyMemberRole message. Does not implicitly {@link S2CModifyMemberRole.verify|verify} messages.
     * @param m S2CModifyMemberRole message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CModifyMemberRole, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CModifyMemberRole message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CModifyMemberRole
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CModifyMemberRole;
}

/** Represents a S2CCreateClubGame. */
export class S2CCreateClubGame implements IS2CCreateClubGame {

    /**
     * Constructs a new S2CCreateClubGame.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCreateClubGame);

    /** S2CCreateClubGame result. */
    public result?: (ICommonResult|null);

    /** S2CCreateClubGame clubId. */
    public clubId: string;

    /** S2CCreateClubGame gameInfo. */
    public gameInfo?: (IClubTexasGameInfo|null);

    /**
     * Encodes the specified S2CCreateClubGame message. Does not implicitly {@link S2CCreateClubGame.verify|verify} messages.
     * @param m S2CCreateClubGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCreateClubGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCreateClubGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCreateClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCreateClubGame;
}

/** Represents a S2CGetClubTexasGameInfoResp. */
export class S2CGetClubTexasGameInfoResp implements IS2CGetClubTexasGameInfoResp {

    /**
     * Constructs a new S2CGetClubTexasGameInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetClubTexasGameInfoResp);

    /** S2CGetClubTexasGameInfoResp result. */
    public result?: (ICommonResult|null);

    /** S2CGetClubTexasGameInfoResp clubId. */
    public clubId: string;

    /** S2CGetClubTexasGameInfoResp gameInfo. */
    public gameInfo: IClubTexasGameInfo[];

    /**
     * Encodes the specified S2CGetClubTexasGameInfoResp message. Does not implicitly {@link S2CGetClubTexasGameInfoResp.verify|verify} messages.
     * @param m S2CGetClubTexasGameInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetClubTexasGameInfoResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetClubTexasGameInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetClubTexasGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetClubTexasGameInfoResp;
}

/** Represents a S2CGetClubSubGameInfoResp. */
export class S2CGetClubSubGameInfoResp implements IS2CGetClubSubGameInfoResp {

    /**
     * Constructs a new S2CGetClubSubGameInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetClubSubGameInfoResp);

    /** S2CGetClubSubGameInfoResp result. */
    public result?: (ICommonResult|null);

    /** S2CGetClubSubGameInfoResp clubId. */
    public clubId: string;

    /** S2CGetClubSubGameInfoResp gameInfo. */
    public gameInfo: IClubSubGameInfo[];

    /**
     * Encodes the specified S2CGetClubSubGameInfoResp message. Does not implicitly {@link S2CGetClubSubGameInfoResp.verify|verify} messages.
     * @param m S2CGetClubSubGameInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetClubSubGameInfoResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetClubSubGameInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetClubSubGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetClubSubGameInfoResp;
}

/** Represents a S2CDismissClubGame. */
export class S2CDismissClubGame implements IS2CDismissClubGame {

    /**
     * Constructs a new S2CDismissClubGame.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CDismissClubGame);

    /** S2CDismissClubGame result. */
    public result?: (ICommonResult|null);

    /** S2CDismissClubGame clubId. */
    public clubId: string;

    /** S2CDismissClubGame gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CDismissClubGame message. Does not implicitly {@link S2CDismissClubGame.verify|verify} messages.
     * @param m S2CDismissClubGame message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CDismissClubGame, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CDismissClubGame message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CDismissClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CDismissClubGame;
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

/** Represents a S2CClubTotalPointNotify. */
export class S2CClubTotalPointNotify implements IS2CClubTotalPointNotify {

    /**
     * Constructs a new S2CClubTotalPointNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CClubTotalPointNotify);

    /** S2CClubTotalPointNotify clubId. */
    public clubId: string;

    /** S2CClubTotalPointNotify clubRestAmount. */
    public clubRestAmount: number;

    /** S2CClubTotalPointNotify amount. */
    public amount: number;

    /**
     * Encodes the specified S2CClubTotalPointNotify message. Does not implicitly {@link S2CClubTotalPointNotify.verify|verify} messages.
     * @param m S2CClubTotalPointNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CClubTotalPointNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CClubTotalPointNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CClubTotalPointNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CClubTotalPointNotify;
}

/** Represents a S2CClubPlayerPointNotify. */
export class S2CClubPlayerPointNotify implements IS2CClubPlayerPointNotify {

    /**
     * Constructs a new S2CClubPlayerPointNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CClubPlayerPointNotify);

    /** S2CClubPlayerPointNotify clubId. */
    public clubId: string;

    /** S2CClubPlayerPointNotify playerRestAmount. */
    public playerRestAmount: number;

    /** S2CClubPlayerPointNotify amount. */
    public amount: number;

    /**
     * Encodes the specified S2CClubPlayerPointNotify message. Does not implicitly {@link S2CClubPlayerPointNotify.verify|verify} messages.
     * @param m S2CClubPlayerPointNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CClubPlayerPointNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CClubPlayerPointNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CClubPlayerPointNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CClubPlayerPointNotify;
}

/** Represents a S2CModifyMemberRoleNotify. */
export class S2CModifyMemberRoleNotify implements IS2CModifyMemberRoleNotify {

    /**
     * Constructs a new S2CModifyMemberRoleNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CModifyMemberRoleNotify);

    /** S2CModifyMemberRoleNotify clubId. */
    public clubId: string;

    /** S2CModifyMemberRoleNotify memberType. */
    public memberType: ClubMemberType;

    /**
     * Encodes the specified S2CModifyMemberRoleNotify message. Does not implicitly {@link S2CModifyMemberRoleNotify.verify|verify} messages.
     * @param m S2CModifyMemberRoleNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CModifyMemberRoleNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CModifyMemberRoleNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CModifyMemberRoleNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CModifyMemberRoleNotify;
}

/** Represents a S2CDismissClubGameNotify. */
export class S2CDismissClubGameNotify implements IS2CDismissClubGameNotify {

    /**
     * Constructs a new S2CDismissClubGameNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CDismissClubGameNotify);

    /** S2CDismissClubGameNotify clubId. */
    public clubId: string;

    /** S2CDismissClubGameNotify gameId. */
    public gameId: string;

    /**
     * Encodes the specified S2CDismissClubGameNotify message. Does not implicitly {@link S2CDismissClubGameNotify.verify|verify} messages.
     * @param m S2CDismissClubGameNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CDismissClubGameNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CDismissClubGameNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CDismissClubGameNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CDismissClubGameNotify;
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

/** Represents a C2SRefreshUserInfo. */
export class C2SRefreshUserInfo implements IC2SRefreshUserInfo {

    /**
     * Constructs a new C2SRefreshUserInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SRefreshUserInfo);

    /**
     * Encodes the specified C2SRefreshUserInfo message. Does not implicitly {@link C2SRefreshUserInfo.verify|verify} messages.
     * @param m C2SRefreshUserInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SRefreshUserInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SRefreshUserInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SRefreshUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SRefreshUserInfo;
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

/** Represents a C2SGetHallTexasGameInfo. */
export class C2SGetHallTexasGameInfo implements IC2SGetHallTexasGameInfo {

    /**
     * Constructs a new C2SGetHallTexasGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetHallTexasGameInfo);

    /**
     * Encodes the specified C2SGetHallTexasGameInfo message. Does not implicitly {@link C2SGetHallTexasGameInfo.verify|verify} messages.
     * @param m C2SGetHallTexasGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetHallTexasGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetHallTexasGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetHallTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetHallTexasGameInfo;
}

/** Represents a C2SGetHallSubGameInfo. */
export class C2SGetHallSubGameInfo implements IC2SGetHallSubGameInfo {

    /**
     * Constructs a new C2SGetHallSubGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetHallSubGameInfo);

    /**
     * Encodes the specified C2SGetHallSubGameInfo message. Does not implicitly {@link C2SGetHallSubGameInfo.verify|verify} messages.
     * @param m C2SGetHallSubGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetHallSubGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetHallSubGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetHallSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetHallSubGameInfo;
}

/** Represents a C2SAddCurrency. */
export class C2SAddCurrency implements IC2SAddCurrency {

    /**
     * Constructs a new C2SAddCurrency.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SAddCurrency);

    /** C2SAddCurrency uid. */
    public uid: string;

    /** C2SAddCurrency currencyNum. */
    public currencyNum: number;

    /** C2SAddCurrency currencyType. */
    public currencyType: GameCurrencyType;

    /**
     * Encodes the specified C2SAddCurrency message. Does not implicitly {@link C2SAddCurrency.verify|verify} messages.
     * @param m C2SAddCurrency message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SAddCurrency, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SAddCurrency message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SAddCurrency
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SAddCurrency;
}

/** Represents a HallTexasGameInfo. */
export class HallTexasGameInfo implements IHallTexasGameInfo {

    /**
     * Constructs a new HallTexasGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHallTexasGameInfo);

    /** HallTexasGameInfo gameId. */
    public gameId: string;

    /** HallTexasGameInfo aboutGameInfo. */
    public aboutGameInfo?: (IAboutTexasGameInfo|null);

    /** HallTexasGameInfo basicTexasConfig. */
    public basicTexasConfig?: (IBasicTexasConfig|null);

    /**
     * Encodes the specified HallTexasGameInfo message. Does not implicitly {@link HallTexasGameInfo.verify|verify} messages.
     * @param m HallTexasGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallTexasGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a HallTexasGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): HallTexasGameInfo;
}

/** Represents a HallSubGameInfo. */
export class HallSubGameInfo implements IHallSubGameInfo {

    /**
     * Constructs a new HallSubGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IHallSubGameInfo);

    /** HallSubGameInfo gameId. */
    public gameId: string;

    /** HallSubGameInfo gameName. */
    public gameName: string;

    /** HallSubGameInfo gameType. */
    public gameType: GameType;

    /** HallSubGameInfo currencyType. */
    public currencyType: GameCurrencyType;

    /**
     * Encodes the specified HallSubGameInfo message. Does not implicitly {@link HallSubGameInfo.verify|verify} messages.
     * @param m HallSubGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IHallSubGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a HallSubGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns HallSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): HallSubGameInfo;
}

/** Represents an InHallGameInfo. */
export class InHallGameInfo implements IInHallGameInfo {

    /**
     * Constructs a new InHallGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IInHallGameInfo);

    /** InHallGameInfo gameId. */
    public gameId: string;

    /** InHallGameInfo gameType. */
    public gameType: GameType;

    /**
     * Encodes the specified InHallGameInfo message. Does not implicitly {@link InHallGameInfo.verify|verify} messages.
     * @param m InHallGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInHallGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an InHallGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InHallGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): InHallGameInfo;
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

    /** S2CGetUserInfo enterTexasGameList. */
    public enterTexasGameList: IInHallGameInfo[];

    /** S2CGetUserInfo enterSubGameList. */
    public enterSubGameList: IInHallGameInfo[];

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

/** Represents a S2CRefreshUserInfoResp. */
export class S2CRefreshUserInfoResp implements IS2CRefreshUserInfoResp {

    /**
     * Constructs a new S2CRefreshUserInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CRefreshUserInfoResp);

    /** S2CRefreshUserInfoResp result. */
    public result?: (ICommonResult|null);

    /** S2CRefreshUserInfoResp userInfo. */
    public userInfo?: (IUserInfo|null);

    /**
     * Encodes the specified S2CRefreshUserInfoResp message. Does not implicitly {@link S2CRefreshUserInfoResp.verify|verify} messages.
     * @param m S2CRefreshUserInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CRefreshUserInfoResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CRefreshUserInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CRefreshUserInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CRefreshUserInfoResp;
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

    /** S2CChangeUserInfo userInfo. */
    public userInfo?: (IUserInfo|null);

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

/** Represents a S2CHallTexasGameInfoResp. */
export class S2CHallTexasGameInfoResp implements IS2CHallTexasGameInfoResp {

    /**
     * Constructs a new S2CHallTexasGameInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CHallTexasGameInfoResp);

    /** S2CHallTexasGameInfoResp result. */
    public result?: (ICommonResult|null);

    /** S2CHallTexasGameInfoResp gameList. */
    public gameList: IHallTexasGameInfo[];

    /**
     * Encodes the specified S2CHallTexasGameInfoResp message. Does not implicitly {@link S2CHallTexasGameInfoResp.verify|verify} messages.
     * @param m S2CHallTexasGameInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CHallTexasGameInfoResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CHallTexasGameInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CHallTexasGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CHallTexasGameInfoResp;
}

/** Represents a S2CGetHallSubGameInfoResp. */
export class S2CGetHallSubGameInfoResp implements IS2CGetHallSubGameInfoResp {

    /**
     * Constructs a new S2CGetHallSubGameInfoResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetHallSubGameInfoResp);

    /** S2CGetHallSubGameInfoResp result. */
    public result?: (ICommonResult|null);

    /** S2CGetHallSubGameInfoResp gameList. */
    public gameList: IHallSubGameInfo[];

    /**
     * Encodes the specified S2CGetHallSubGameInfoResp message. Does not implicitly {@link S2CGetHallSubGameInfoResp.verify|verify} messages.
     * @param m S2CGetHallSubGameInfoResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetHallSubGameInfoResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetHallSubGameInfoResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetHallSubGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetHallSubGameInfoResp;
}

/** Represents a S2CAddCurrencyResp. */
export class S2CAddCurrencyResp implements IS2CAddCurrencyResp {

    /**
     * Constructs a new S2CAddCurrencyResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CAddCurrencyResp);

    /** S2CAddCurrencyResp result. */
    public result?: (ICommonResult|null);

    /** S2CAddCurrencyResp uid. */
    public uid: string;

    /** S2CAddCurrencyResp currencyNum. */
    public currencyNum: number;

    /** S2CAddCurrencyResp currencyType. */
    public currencyType: GameCurrencyType;

    /**
     * Encodes the specified S2CAddCurrencyResp message. Does not implicitly {@link S2CAddCurrencyResp.verify|verify} messages.
     * @param m S2CAddCurrencyResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CAddCurrencyResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CAddCurrencyResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CAddCurrencyResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CAddCurrencyResp;
}

/** Represents a S2CAddCurrencyNotify. */
export class S2CAddCurrencyNotify implements IS2CAddCurrencyNotify {

    /**
     * Constructs a new S2CAddCurrencyNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CAddCurrencyNotify);

    /** S2CAddCurrencyNotify currencyNum. */
    public currencyNum: number;

    /** S2CAddCurrencyNotify currencyType. */
    public currencyType: GameCurrencyType;

    /**
     * Encodes the specified S2CAddCurrencyNotify message. Does not implicitly {@link S2CAddCurrencyNotify.verify|verify} messages.
     * @param m S2CAddCurrencyNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CAddCurrencyNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CAddCurrencyNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CAddCurrencyNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CAddCurrencyNotify;
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
    LoginType_PhonePsw = 2
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
    S2C_Kick = 20,
    MSG_LoginBegin = 1001,
    C2S_Login = 1002,
    C2S_Register = 1004,
    C2S_GetSmsCode = 1005,
    C2S_VerifyPhoneNumber = 1006,
    S2C_Login = 1101,
    S2C_Register = 1102,
    S2C_GetSmsCode = 1103,
    S2C_VerifyPhoneNumber = 1104,
    MSG_LoginEnd = 2000,
    MSG_HallBegin = 2001,
    C2S_Logout = 2002,
    C2S_GetUserInfo = 2003,
    C2S_RefreshUserInfo = 2004,
    C2S_ChangeUserInfo = 2005,
    C2S_GetHallTexasGameInfo = 2006,
    C2S_GetHallSubGameInfo = 2007,
    C2S_AddCurrency = 2008,
    S2C_GetUserInfo = 3001,
    S2C_RefreshUserInfoResp = 3002,
    S2C_ChangeUserInfo = 3003,
    S2C_GetHallTexasGameInfoResp = 3004,
    S2C_GetHallSubGameInfoResp = 3005,
    S2C_AddCurrencyResp = 3006,
    S2C_AddCurrencyNotify = 3007,
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
    C2S_ModifyClubInfo = 4012,
    C2S_ShareClubScore = 4013,
    C2S_ModifyMemberRole = 4014,
    C2S_CreateClubGame = 4015,
    C2S_GetClubTexasGameInfo = 4016,
    C2S_GetClubSubGameInfo = 4017,
    C2S_DismissClubGame = 4018,
    S2C_CreateClub = 4501,
    S2C_GetClubInfos = 4502,
    S2C_EnterClub = 4503,
    S2C_SearchClub = 4504,
    S2C_JoinClub = 4505,
    S2C_GetClubMember = 4506,
    S2C_AddClubMember = 4507,
    S2C_DismissClub = 4508,
    S2C_QuitClub = 4509,
    S2C_RemoveMember = 4510,
    S2C_ModifyClubInfo = 4511,
    S2C_ShareClubScore = 4512,
    S2C_ModifyMemberRole = 4513,
    S2C_CreateClubGame = 4514,
    S2C_GetClubTexasGameInfoResp = 4515,
    S2C_GetClubSubGameInfoResp = 4516,
    S2C_DismissClubGame = 4517,
    S2C_ClubJoinNotify = 4611,
    S2C_JoinClubNotify = 4612,
    S2C_RemoveNotify = 4613,
    S2C_DismissClubNotify = 4614,
    S2C_ClubTotalPointNotify = 4615,
    S2C_ClubPlayerPointNotify = 4616,
    S2C_ModifyMemberRoleNotify = 4617,
    S2C_DismissClubGameNotify = 4618,
    MSG_ClubEnd = 5000,
    MSG_TexasCashBegin = 5001,
    C2S_TexasCashEnterGame = 5002,
    C2S_TexasCashExitGame = 5003,
    C2S_TexasCashOpen = 5004,
    C2S_TexasCashSitDown = 5005,
    C2S_TexasCashStandUp = 5007,
    C2S_TexasCashBringIn = 5008,
    C2S_TexasCashAction = 5009,
    C2S_TexasCashBuyInsurance = 5010,
    C2S_TexasCashChat = 5011,
    C2S_TexasCashGetObList = 5012,
    C2S_TexasCashGetBringInList = 5013,
    C2S_TexasCashExaminePublicCard = 5014,
    C2S_TexasCashExaminePrivateCard = 5015,
    C2S_TexasCashExtraThink = 5016,
    C2S_TexasCashSqueezeStart = 5017,
    C2S_TexasCashSqueezeFinish = 5018,
    C2S_TexasCashPlayerRecord = 5019,
    C2S_TexasCashReplayList = 5020,
    C2S_TexasCashReplayDetails = 5021,
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
    S2C_CommonGetBringInListResp = 8011,
    S2C_CommonRefreshResp = 8012,
    S2C_CommonExaminePublicCardResp = 8013,
    S2C_CommonExaminePrivateCardResp = 8014,
    S2C_CommonExtraThinkResp = 8015,
    S2C_CommonSqueezeStartResp = 8016,
    S2C_CommonSqueezeFinishResp = 8017,
    S2C_CommonPlayerRecordResp = 8018,
    S2C_CommonReplayListResp = 8019,
    S2C_CommonReplayDetailsResp = 8020,
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

/** Represents a C2SEnterGame. */
export class C2SEnterGame implements IC2SEnterGame {

    /**
     * Constructs a new C2SEnterGame.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SEnterGame);

    /** C2SEnterGame gameId. */
    public gameId: string;

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

/** Represents a C2STexasCashExtraThink. */
export class C2STexasCashExtraThink implements IC2STexasCashExtraThink {

    /**
     * Constructs a new C2STexasCashExtraThink.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashExtraThink);

    /** C2STexasCashExtraThink gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCashExtraThink message. Does not implicitly {@link C2STexasCashExtraThink.verify|verify} messages.
     * @param m C2STexasCashExtraThink message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashExtraThink, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashExtraThink message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashExtraThink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashExtraThink;
}

/** Represents a C2STexasCashSqueezeStart. */
export class C2STexasCashSqueezeStart implements IC2STexasCashSqueezeStart {

    /**
     * Constructs a new C2STexasCashSqueezeStart.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashSqueezeStart);

    /** C2STexasCashSqueezeStart gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCashSqueezeStart message. Does not implicitly {@link C2STexasCashSqueezeStart.verify|verify} messages.
     * @param m C2STexasCashSqueezeStart message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashSqueezeStart, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashSqueezeStart message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashSqueezeStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashSqueezeStart;
}

/** Represents a C2STexasCashSqueezeFinish. */
export class C2STexasCashSqueezeFinish implements IC2STexasCashSqueezeFinish {

    /**
     * Constructs a new C2STexasCashSqueezeFinish.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashSqueezeFinish);

    /** C2STexasCashSqueezeFinish gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCashSqueezeFinish message. Does not implicitly {@link C2STexasCashSqueezeFinish.verify|verify} messages.
     * @param m C2STexasCashSqueezeFinish message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashSqueezeFinish, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashSqueezeFinish message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashSqueezeFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashSqueezeFinish;
}

/** Represents a C2STexasCashPlayerRecord. */
export class C2STexasCashPlayerRecord implements IC2STexasCashPlayerRecord {

    /**
     * Constructs a new C2STexasCashPlayerRecord.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashPlayerRecord);

    /** C2STexasCashPlayerRecord gameId. */
    public gameId: string;

    /**
     * Encodes the specified C2STexasCashPlayerRecord message. Does not implicitly {@link C2STexasCashPlayerRecord.verify|verify} messages.
     * @param m C2STexasCashPlayerRecord message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashPlayerRecord, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashPlayerRecord message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashPlayerRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashPlayerRecord;
}

/** Represents a C2STexasCashReplayList. */
export class C2STexasCashReplayList implements IC2STexasCashReplayList {

    /**
     * Constructs a new C2STexasCashReplayList.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashReplayList);

    /** C2STexasCashReplayList gameId. */
    public gameId: string;

    /** C2STexasCashReplayList page. */
    public page: number;

    /** C2STexasCashReplayList pageSize. */
    public pageSize: number;

    /**
     * Encodes the specified C2STexasCashReplayList message. Does not implicitly {@link C2STexasCashReplayList.verify|verify} messages.
     * @param m C2STexasCashReplayList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashReplayList, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashReplayList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashReplayList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashReplayList;
}

/** Represents a C2STexasCashReplayDetails. */
export class C2STexasCashReplayDetails implements IC2STexasCashReplayDetails {

    /**
     * Constructs a new C2STexasCashReplayDetails.
     * @param [p] Properties to set
     */
    constructor(p?: IC2STexasCashReplayDetails);

    /** C2STexasCashReplayDetails gameId. */
    public gameId: string;

    /** C2STexasCashReplayDetails index. */
    public index: number;

    /**
     * Encodes the specified C2STexasCashReplayDetails message. Does not implicitly {@link C2STexasCashReplayDetails.verify|verify} messages.
     * @param m C2STexasCashReplayDetails message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2STexasCashReplayDetails, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2STexasCashReplayDetails message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2STexasCashReplayDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2STexasCashReplayDetails;
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

/** Represents a S2CCommonPlayerRecordResp. */
export class S2CCommonPlayerRecordResp implements IS2CCommonPlayerRecordResp {

    /**
     * Constructs a new S2CCommonPlayerRecordResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonPlayerRecordResp);

    /** S2CCommonPlayerRecordResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonPlayerRecordResp gameId. */
    public gameId: string;

    /** S2CCommonPlayerRecordResp insuranceWinlose. */
    public insuranceWinlose: number;

    /** S2CCommonPlayerRecordResp jackpotWinlose. */
    public jackpotWinlose: number;

    /** S2CCommonPlayerRecordResp list. */
    public list: IRecordPlayer[];

    /**
     * Encodes the specified S2CCommonPlayerRecordResp message. Does not implicitly {@link S2CCommonPlayerRecordResp.verify|verify} messages.
     * @param m S2CCommonPlayerRecordResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonPlayerRecordResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonPlayerRecordResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonPlayerRecordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonPlayerRecordResp;
}

/** Represents a S2CCommonReplayListResp. */
export class S2CCommonReplayListResp implements IS2CCommonReplayListResp {

    /**
     * Constructs a new S2CCommonReplayListResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonReplayListResp);

    /** S2CCommonReplayListResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonReplayListResp gameId. */
    public gameId: string;

    /** S2CCommonReplayListResp data. */
    public data?: (ISimpleReplayData|null);

    /**
     * Encodes the specified S2CCommonReplayListResp message. Does not implicitly {@link S2CCommonReplayListResp.verify|verify} messages.
     * @param m S2CCommonReplayListResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonReplayListResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonReplayListResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonReplayListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonReplayListResp;
}

/** Represents a S2CCommonReplayDetailsResp. */
export class S2CCommonReplayDetailsResp implements IS2CCommonReplayDetailsResp {

    /**
     * Constructs a new S2CCommonReplayDetailsResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonReplayDetailsResp);

    /** S2CCommonReplayDetailsResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonReplayDetailsResp gameId. */
    public gameId: string;

    /** S2CCommonReplayDetailsResp data. */
    public data?: (IReplayData|null);

    /**
     * Encodes the specified S2CCommonReplayDetailsResp message. Does not implicitly {@link S2CCommonReplayDetailsResp.verify|verify} messages.
     * @param m S2CCommonReplayDetailsResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonReplayDetailsResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonReplayDetailsResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonReplayDetailsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonReplayDetailsResp;
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
 
}
export {}