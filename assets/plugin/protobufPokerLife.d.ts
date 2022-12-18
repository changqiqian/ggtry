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

    /** C2SCreateClubGame basicConfig */
    basicConfig?: (IBasicGameConfig|null);

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

    /** C2SCreateClubGame basicConfig. */
    public basicConfig?: (IBasicGameConfig|null);

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

/** Properties of a C2SGetClubGameList. */
export interface IC2SGetClubGameList {

    /** C2SGetClubGameList clubId */
    clubId?: (string|null);
}

/** Represents a C2SGetClubGameList. */
export class C2SGetClubGameList implements IC2SGetClubGameList {

    /**
     * Constructs a new C2SGetClubGameList.
     * @param [p] Properties to set
     */
    constructor(p?: IC2SGetClubGameList);

    /** C2SGetClubGameList clubId. */
    public clubId: string;

    /**
     * Encodes the specified C2SGetClubGameList message. Does not implicitly {@link C2SGetClubGameList.verify|verify} messages.
     * @param m C2SGetClubGameList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IC2SGetClubGameList, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a C2SGetClubGameList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns C2SGetClubGameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): C2SGetClubGameList;
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

/** Represents a ClubGameInfo. */
export class ClubGameInfo implements IClubGameInfo {

    /**
     * Constructs a new ClubGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IClubGameInfo);

    /** ClubGameInfo clubId. */
    public clubId: string;

    /** ClubGameInfo gameId. */
    public gameId: string;

    /** ClubGameInfo creatorInfo. */
    public creatorInfo?: (IClubMember|null);

    /** ClubGameInfo aboutGameInfo. */
    public aboutGameInfo?: (IAboutGameInfo|null);

    /** ClubGameInfo gameStaticData. */
    public gameStaticData?: (IGameStaticData|null);

    /**
     * Encodes the specified ClubGameInfo message. Does not implicitly {@link ClubGameInfo.verify|verify} messages.
     * @param m ClubGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IClubGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClubGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns ClubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): ClubGameInfo;
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
    GameType_OmhMtt = 5
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

/** Represents a BasicGameConfig. */
export class BasicGameConfig implements IBasicGameConfig {

    /**
     * Constructs a new BasicGameConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IBasicGameConfig);

    /** BasicGameConfig gameType. */
    public gameType: GameType;

    /** BasicGameConfig gameName. */
    public gameName: string;

    /** BasicGameConfig currencyType. */
    public currencyType: GameCurrencyType;

    /** BasicGameConfig taxType. */
    public taxType: GameTaxType;

    /** BasicGameConfig taxRatio. */
    public taxRatio: number;

    /**
     * Encodes the specified BasicGameConfig message. Does not implicitly {@link BasicGameConfig.verify|verify} messages.
     * @param m BasicGameConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IBasicGameConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a BasicGameConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns BasicGameConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): BasicGameConfig;
}

/** Represents a BasicTexasConfig. */
export class BasicTexasConfig implements IBasicTexasConfig {

    /**
     * Constructs a new BasicTexasConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IBasicTexasConfig);

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

/** Represents an OmhConfig. */
export class OmhConfig implements IOmhConfig {

    /**
     * Constructs a new OmhConfig.
     * @param [p] Properties to set
     */
    constructor(p?: IOmhConfig);

    /** OmhConfig baseScore. */
    public baseScore: number;

    /**
     * Encodes the specified OmhConfig message. Does not implicitly {@link OmhConfig.verify|verify} messages.
     * @param m OmhConfig message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IOmhConfig, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an OmhConfig message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns OmhConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): OmhConfig;
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

/** Represents an AboutGameInfo. */
export class AboutGameInfo implements IAboutGameInfo {

    /**
     * Constructs a new AboutGameInfo.
     * @param [p] Properties to set
     */
    constructor(p?: IAboutGameInfo);

    /** AboutGameInfo currentPlayerNum. */
    public currentPlayerNum: number;

    /** AboutGameInfo leftTime. */
    public leftTime: number;

    /**
     * Encodes the specified AboutGameInfo message. Does not implicitly {@link AboutGameInfo.verify|verify} messages.
     * @param m AboutGameInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAboutGameInfo, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AboutGameInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AboutGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): AboutGameInfo;
}

/** Represents a GameStaticData. */
export class GameStaticData implements IGameStaticData {

    /**
     * Constructs a new GameStaticData.
     * @param [p] Properties to set
     */
    constructor(p?: IGameStaticData);

    /** GameStaticData basicConfig. */
    public basicConfig?: (IBasicGameConfig|null);

    /** GameStaticData texasConfig. */
    public texasConfig?: (IBasicTexasConfig|null);

    /**
     * Encodes the specified GameStaticData message. Does not implicitly {@link GameStaticData.verify|verify} messages.
     * @param m GameStaticData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameStaticData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a GameStaticData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameStaticData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): GameStaticData;
}

/** Represents a GameDynamicData. */
export class GameDynamicData implements IGameDynamicData {

    /**
     * Constructs a new GameDynamicData.
     * @param [p] Properties to set
     */
    constructor(p?: IGameDynamicData);

    /** GameDynamicData state. */
    public state: TexasCashState;

    /** GameDynamicData seatInfos. */
    public seatInfos: IPlayerInfo[];

    /** GameDynamicData actionUid. */
    public actionUid: string;

    /** GameDynamicData actionLeftTime. */
    public actionLeftTime: number;

    /** GameDynamicData potInfo. */
    public potInfo: IPotInfo[];

    /** GameDynamicData actions. */
    public actions: IActionInfo[];

    /** GameDynamicData publicCards. */
    public publicCards: ICardInfo[];

    /** GameDynamicData dealerUid. */
    public dealerUid: string;

    /**
     * Encodes the specified GameDynamicData message. Does not implicitly {@link GameDynamicData.verify|verify} messages.
     * @param m GameDynamicData message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGameDynamicData, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a GameDynamicData message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GameDynamicData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): GameDynamicData;
}

/** Represents a SimpleReplayData. */
export class SimpleReplayData implements ISimpleReplayData {

    /**
     * Constructs a new SimpleReplayData.
     * @param [p] Properties to set
     */
    constructor(p?: ISimpleReplayData);

    /** SimpleReplayData gameId. */
    public gameId: string;

    /** SimpleReplayData index. */
    public index: number;

    /** SimpleReplayData publicCards. */
    public publicCards: ICardInfo[];

    /** SimpleReplayData myCards. */
    public myCards: ICardInfo[];

    /** SimpleReplayData myResult. */
    public myResult: number;

    /** SimpleReplayData winnerCards. */
    public winnerCards: ICardInfo[];

    /** SimpleReplayData winnerName. */
    public winnerName: string;

    /** SimpleReplayData winnerHead. */
    public winnerHead: string;

    /** SimpleReplayData winnerResult. */
    public winnerResult: number;

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

    /** ReplayData gameStatic. */
    public gameStatic?: (IGameStaticData|null);

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
    public gameInfo?: (IClubGameInfo|null);

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

/** Represents a S2CGetClubGameList. */
export class S2CGetClubGameList implements IS2CGetClubGameList {

    /**
     * Constructs a new S2CGetClubGameList.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CGetClubGameList);

    /** S2CGetClubGameList result. */
    public result?: (ICommonResult|null);

    /** S2CGetClubGameList clubId. */
    public clubId: string;

    /** S2CGetClubGameList gameInfo. */
    public gameInfo: IClubGameInfo[];

    /**
     * Encodes the specified S2CGetClubGameList message. Does not implicitly {@link S2CGetClubGameList.verify|verify} messages.
     * @param m S2CGetClubGameList message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CGetClubGameList, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CGetClubGameList message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CGetClubGameList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CGetClubGameList;
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

    /** S2CCommonEnterGameResp gameStatic. */
    public gameStatic?: (IGameStaticData|null);

    /** S2CCommonEnterGameResp gameDynamic. */
    public gameDynamic?: (IGameDynamicData|null);

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

    /** S2CCommonGetObListResp observer. */
    public observer: IPlayerInfo[];

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

/** Represents a S2CCommonGetBuyInListResp. */
export class S2CCommonGetBuyInListResp implements IS2CCommonGetBuyInListResp {

    /**
     * Constructs a new S2CCommonGetBuyInListResp.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonGetBuyInListResp);

    /** S2CCommonGetBuyInListResp result. */
    public result?: (ICommonResult|null);

    /** S2CCommonGetBuyInListResp playerHistoryInfo. */
    public playerHistoryInfo: IPlayerHistoryInfo[];

    /**
     * Encodes the specified S2CCommonGetBuyInListResp message. Does not implicitly {@link S2CCommonGetBuyInListResp.verify|verify} messages.
     * @param m S2CCommonGetBuyInListResp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonGetBuyInListResp, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonGetBuyInListResp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonGetBuyInListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonGetBuyInListResp;
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

    /** S2CCommonRoundStartNotify potInfo. */
    public potInfo: IPotInfo[];

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

    /** S2CCommonActionNotify potInfo. */
    public potInfo: IPotInfo[];

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

/** Represents a S2CCommonBuyInsuranceNotify. */
export class S2CCommonBuyInsuranceNotify implements IS2CCommonBuyInsuranceNotify {

    /**
     * Constructs a new S2CCommonBuyInsuranceNotify.
     * @param [p] Properties to set
     */
    constructor(p?: IS2CCommonBuyInsuranceNotify);

    /** S2CCommonBuyInsuranceNotify gameId. */
    public gameId: string;

    /** S2CCommonBuyInsuranceNotify actionUid. */
    public actionUid: string;

    /**
     * Encodes the specified S2CCommonBuyInsuranceNotify message. Does not implicitly {@link S2CCommonBuyInsuranceNotify.verify|verify} messages.
     * @param m S2CCommonBuyInsuranceNotify message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IS2CCommonBuyInsuranceNotify, w?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a S2CCommonBuyInsuranceNotify message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns S2CCommonBuyInsuranceNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: (protobuf.Reader|Uint8Array), l?: number): S2CCommonBuyInsuranceNotify;
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
    C2S_ChangeUserInfo = 2004,
    S2C_GetUserInfo = 3001,
    S2C_ChangeUserInfo = 3002,
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
    C2S_GetClubGameList = 4016,
    C2S_DismissClubGame = 4017,
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
    S2C_GetClubGameList = 4515,
    S2C_DismissClubGame = 4516,
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
    CS2_TexasCashGetBuyInList = 5013,
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
    S2C_CommonGetBuyInListResp = 8011,
    S2C_CommonBringInTimerNotify = 8110,
    S2C_CommonBringInNotify = 8111,
    S2C_CommonSitDownNotify = 8112,
    S2C_CommonStandUpNotify = 8113,
    S2C_CommonActionNotify = 8114,
    S2C_CommonBuyInsuranceNotify = 8115,
    S2C_CommonChatNotify = 8116,
    S2C_CommonOpenNotify = 8250,
    S2C_CommonRoundStartNotify = 8251,
    S2C_CommonPreFlopRoundNotify = 8252,
    S2C_CommonFlopRoundNotify = 8253,
    S2C_CommonTurnRoundNotify = 8254,
    S2C_CommonRiverRoundNotify = 8255,
    S2C_CommonCurrentActionNotify = 8256,
    S2C_CommonSettlementNotify = 8257
}
 
}
export {}