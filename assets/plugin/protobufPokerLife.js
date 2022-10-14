// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.ClubGameConfig = (function() {

    /**
     * Properties of a ClubGameConfig.
     * @exports IClubGameConfig
     * @interface IClubGameConfig
     * @property {IGameBasicConfig|null} [basicConfig] ClubGameConfig basicConfig
     * @property {ITexasConfig|null} [texasConfig] ClubGameConfig texasConfig
     * @property {IShortConfig|null} [shortConfig] ClubGameConfig shortConfig
     * @property {IMatchingConfig|null} [matchingConfig] ClubGameConfig matchingConfig
     */

    /**
     * Constructs a new ClubGameConfig.
     * @exports ClubGameConfig
     * @classdesc Represents a ClubGameConfig.
     * @implements IClubGameConfig
     * @constructor
     * @param {IClubGameConfig=} [p] Properties to set
     */
    function ClubGameConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubGameConfig basicConfig.
     * @member {IGameBasicConfig|null|undefined} basicConfig
     * @memberof ClubGameConfig
     * @instance
     */
    ClubGameConfig.prototype.basicConfig = null;

    /**
     * ClubGameConfig texasConfig.
     * @member {ITexasConfig|null|undefined} texasConfig
     * @memberof ClubGameConfig
     * @instance
     */
    ClubGameConfig.prototype.texasConfig = null;

    /**
     * ClubGameConfig shortConfig.
     * @member {IShortConfig|null|undefined} shortConfig
     * @memberof ClubGameConfig
     * @instance
     */
    ClubGameConfig.prototype.shortConfig = null;

    /**
     * ClubGameConfig matchingConfig.
     * @member {IMatchingConfig|null|undefined} matchingConfig
     * @memberof ClubGameConfig
     * @instance
     */
    ClubGameConfig.prototype.matchingConfig = null;

    /**
     * Encodes the specified ClubGameConfig message. Does not implicitly {@link ClubGameConfig.verify|verify} messages.
     * @function encode
     * @memberof ClubGameConfig
     * @static
     * @param {IClubGameConfig} m ClubGameConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubGameConfig.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.basicConfig != null && Object.hasOwnProperty.call(m, "basicConfig"))
            $root.GameBasicConfig.encode(m.basicConfig, w.uint32(10).fork()).ldelim();
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.TexasConfig.encode(m.texasConfig, w.uint32(18).fork()).ldelim();
        if (m.shortConfig != null && Object.hasOwnProperty.call(m, "shortConfig"))
            $root.ShortConfig.encode(m.shortConfig, w.uint32(26).fork()).ldelim();
        if (m.matchingConfig != null && Object.hasOwnProperty.call(m, "matchingConfig"))
            $root.MatchingConfig.encode(m.matchingConfig, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ClubGameConfig message from the specified reader or buffer.
     * @function decode
     * @memberof ClubGameConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubGameConfig} ClubGameConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubGameConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubGameConfig();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.basicConfig = $root.GameBasicConfig.decode(r, r.uint32());
                break;
            case 2:
                m.texasConfig = $root.TexasConfig.decode(r, r.uint32());
                break;
            case 3:
                m.shortConfig = $root.ShortConfig.decode(r, r.uint32());
                break;
            case 4:
                m.matchingConfig = $root.MatchingConfig.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubGameConfig;
})();

$root.MatchingConfig = (function() {

    /**
     * Properties of a MatchingConfig.
     * @exports IMatchingConfig
     * @interface IMatchingConfig
     * @property {number|null} [currentPlayerNum] MatchingConfig currentPlayerNum
     * @property {number|null} [startTime] MatchingConfig startTime
     */

    /**
     * Constructs a new MatchingConfig.
     * @exports MatchingConfig
     * @classdesc Represents a MatchingConfig.
     * @implements IMatchingConfig
     * @constructor
     * @param {IMatchingConfig=} [p] Properties to set
     */
    function MatchingConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MatchingConfig currentPlayerNum.
     * @member {number} currentPlayerNum
     * @memberof MatchingConfig
     * @instance
     */
    MatchingConfig.prototype.currentPlayerNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MatchingConfig startTime.
     * @member {number} startTime
     * @memberof MatchingConfig
     * @instance
     */
    MatchingConfig.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified MatchingConfig message. Does not implicitly {@link MatchingConfig.verify|verify} messages.
     * @function encode
     * @memberof MatchingConfig
     * @static
     * @param {IMatchingConfig} m MatchingConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    MatchingConfig.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.currentPlayerNum != null && Object.hasOwnProperty.call(m, "currentPlayerNum"))
            w.uint32(8).int64(m.currentPlayerNum);
        if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
            w.uint32(16).int64(m.startTime);
        return w;
    };

    /**
     * Decodes a MatchingConfig message from the specified reader or buffer.
     * @function decode
     * @memberof MatchingConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MatchingConfig} MatchingConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    MatchingConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MatchingConfig();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currentPlayerNum = r.int64();
                break;
            case 2:
                m.startTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return MatchingConfig;
})();

$root.GameBasicConfig = (function() {

    /**
     * Properties of a GameBasicConfig.
     * @exports IGameBasicConfig
     * @interface IGameBasicConfig
     * @property {GameType|null} [gameType] GameBasicConfig gameType
     * @property {string|null} [gameName] GameBasicConfig gameName
     * @property {GameCurrencyType|null} [currencyType] GameBasicConfig currencyType
     * @property {GameTaxType|null} [taxType] GameBasicConfig taxType
     * @property {number|null} [taxRatio] GameBasicConfig taxRatio
     */

    /**
     * Constructs a new GameBasicConfig.
     * @exports GameBasicConfig
     * @classdesc Represents a GameBasicConfig.
     * @implements IGameBasicConfig
     * @constructor
     * @param {IGameBasicConfig=} [p] Properties to set
     */
    function GameBasicConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameBasicConfig gameType.
     * @member {GameType} gameType
     * @memberof GameBasicConfig
     * @instance
     */
    GameBasicConfig.prototype.gameType = 0;

    /**
     * GameBasicConfig gameName.
     * @member {string} gameName
     * @memberof GameBasicConfig
     * @instance
     */
    GameBasicConfig.prototype.gameName = "";

    /**
     * GameBasicConfig currencyType.
     * @member {GameCurrencyType} currencyType
     * @memberof GameBasicConfig
     * @instance
     */
    GameBasicConfig.prototype.currencyType = 0;

    /**
     * GameBasicConfig taxType.
     * @member {GameTaxType} taxType
     * @memberof GameBasicConfig
     * @instance
     */
    GameBasicConfig.prototype.taxType = 0;

    /**
     * GameBasicConfig taxRatio.
     * @member {number} taxRatio
     * @memberof GameBasicConfig
     * @instance
     */
    GameBasicConfig.prototype.taxRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified GameBasicConfig message. Does not implicitly {@link GameBasicConfig.verify|verify} messages.
     * @function encode
     * @memberof GameBasicConfig
     * @static
     * @param {IGameBasicConfig} m GameBasicConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    GameBasicConfig.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(8).int32(m.gameType);
        if (m.gameName != null && Object.hasOwnProperty.call(m, "gameName"))
            w.uint32(18).string(m.gameName);
        if (m.currencyType != null && Object.hasOwnProperty.call(m, "currencyType"))
            w.uint32(24).int32(m.currencyType);
        if (m.taxType != null && Object.hasOwnProperty.call(m, "taxType"))
            w.uint32(32).int32(m.taxType);
        if (m.taxRatio != null && Object.hasOwnProperty.call(m, "taxRatio"))
            w.uint32(40).int64(m.taxRatio);
        return w;
    };

    /**
     * Decodes a GameBasicConfig message from the specified reader or buffer.
     * @function decode
     * @memberof GameBasicConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameBasicConfig} GameBasicConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    GameBasicConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameBasicConfig();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameType = r.int32();
                break;
            case 2:
                m.gameName = r.string();
                break;
            case 3:
                m.currencyType = r.int32();
                break;
            case 4:
                m.taxType = r.int32();
                break;
            case 5:
                m.taxRatio = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GameBasicConfig;
})();

$root.TexasConfig = (function() {

    /**
     * Properties of a TexasConfig.
     * @exports ITexasConfig
     * @interface ITexasConfig
     * @property {number|null} [smallBlind] TexasConfig smallBlind
     * @property {boolean|null} [straddle] TexasConfig straddle
     * @property {number|null} [ante] TexasConfig ante
     * @property {number|null} [maxTotalBuyIn] TexasConfig maxTotalBuyIn
     * @property {number|null} [minBringIn] TexasConfig minBringIn
     * @property {number|null} [maxBringIn] TexasConfig maxBringIn
     * @property {boolean|null} [allowBringOut] TexasConfig allowBringOut
     * @property {number|null} [minScoreAfterBringOut] TexasConfig minScoreAfterBringOut
     * @property {boolean|null} [insurance] TexasConfig insurance
     * @property {number|null} [gameDuration] TexasConfig gameDuration
     * @property {number|null} [thinkingTime] TexasConfig thinkingTime
     * @property {number|null} [seatNum] TexasConfig seatNum
     * @property {number|null} [autoStartNum] TexasConfig autoStartNum
     * @property {boolean|null} [gpsLimit] TexasConfig gpsLimit
     * @property {boolean|null} [ipLimit] TexasConfig ipLimit
     */

    /**
     * Constructs a new TexasConfig.
     * @exports TexasConfig
     * @classdesc Represents a TexasConfig.
     * @implements ITexasConfig
     * @constructor
     * @param {ITexasConfig=} [p] Properties to set
     */
    function TexasConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TexasConfig smallBlind.
     * @member {number} smallBlind
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.smallBlind = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig straddle.
     * @member {boolean} straddle
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.straddle = false;

    /**
     * TexasConfig ante.
     * @member {number} ante
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.ante = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig maxTotalBuyIn.
     * @member {number} maxTotalBuyIn
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.maxTotalBuyIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig minBringIn.
     * @member {number} minBringIn
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.minBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig maxBringIn.
     * @member {number} maxBringIn
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.maxBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig allowBringOut.
     * @member {boolean} allowBringOut
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.allowBringOut = false;

    /**
     * TexasConfig minScoreAfterBringOut.
     * @member {number} minScoreAfterBringOut
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.minScoreAfterBringOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig insurance.
     * @member {boolean} insurance
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.insurance = false;

    /**
     * TexasConfig gameDuration.
     * @member {number} gameDuration
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.gameDuration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig thinkingTime.
     * @member {number} thinkingTime
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.thinkingTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig seatNum.
     * @member {number} seatNum
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.seatNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig autoStartNum.
     * @member {number} autoStartNum
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.autoStartNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasConfig gpsLimit.
     * @member {boolean} gpsLimit
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.gpsLimit = false;

    /**
     * TexasConfig ipLimit.
     * @member {boolean} ipLimit
     * @memberof TexasConfig
     * @instance
     */
    TexasConfig.prototype.ipLimit = false;

    /**
     * Encodes the specified TexasConfig message. Does not implicitly {@link TexasConfig.verify|verify} messages.
     * @function encode
     * @memberof TexasConfig
     * @static
     * @param {ITexasConfig} m TexasConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    TexasConfig.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.smallBlind != null && Object.hasOwnProperty.call(m, "smallBlind"))
            w.uint32(8).int64(m.smallBlind);
        if (m.straddle != null && Object.hasOwnProperty.call(m, "straddle"))
            w.uint32(16).bool(m.straddle);
        if (m.ante != null && Object.hasOwnProperty.call(m, "ante"))
            w.uint32(24).int64(m.ante);
        if (m.maxTotalBuyIn != null && Object.hasOwnProperty.call(m, "maxTotalBuyIn"))
            w.uint32(32).int64(m.maxTotalBuyIn);
        if (m.minBringIn != null && Object.hasOwnProperty.call(m, "minBringIn"))
            w.uint32(40).int64(m.minBringIn);
        if (m.maxBringIn != null && Object.hasOwnProperty.call(m, "maxBringIn"))
            w.uint32(48).int64(m.maxBringIn);
        if (m.allowBringOut != null && Object.hasOwnProperty.call(m, "allowBringOut"))
            w.uint32(56).bool(m.allowBringOut);
        if (m.minScoreAfterBringOut != null && Object.hasOwnProperty.call(m, "minScoreAfterBringOut"))
            w.uint32(64).int64(m.minScoreAfterBringOut);
        if (m.insurance != null && Object.hasOwnProperty.call(m, "insurance"))
            w.uint32(72).bool(m.insurance);
        if (m.gameDuration != null && Object.hasOwnProperty.call(m, "gameDuration"))
            w.uint32(80).int64(m.gameDuration);
        if (m.thinkingTime != null && Object.hasOwnProperty.call(m, "thinkingTime"))
            w.uint32(88).int64(m.thinkingTime);
        if (m.seatNum != null && Object.hasOwnProperty.call(m, "seatNum"))
            w.uint32(96).int64(m.seatNum);
        if (m.autoStartNum != null && Object.hasOwnProperty.call(m, "autoStartNum"))
            w.uint32(104).int64(m.autoStartNum);
        if (m.gpsLimit != null && Object.hasOwnProperty.call(m, "gpsLimit"))
            w.uint32(112).bool(m.gpsLimit);
        if (m.ipLimit != null && Object.hasOwnProperty.call(m, "ipLimit"))
            w.uint32(120).bool(m.ipLimit);
        return w;
    };

    /**
     * Decodes a TexasConfig message from the specified reader or buffer.
     * @function decode
     * @memberof TexasConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TexasConfig} TexasConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    TexasConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TexasConfig();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.smallBlind = r.int64();
                break;
            case 2:
                m.straddle = r.bool();
                break;
            case 3:
                m.ante = r.int64();
                break;
            case 4:
                m.maxTotalBuyIn = r.int64();
                break;
            case 5:
                m.minBringIn = r.int64();
                break;
            case 6:
                m.maxBringIn = r.int64();
                break;
            case 7:
                m.allowBringOut = r.bool();
                break;
            case 8:
                m.minScoreAfterBringOut = r.int64();
                break;
            case 9:
                m.insurance = r.bool();
                break;
            case 10:
                m.gameDuration = r.int64();
                break;
            case 11:
                m.thinkingTime = r.int64();
                break;
            case 12:
                m.seatNum = r.int64();
                break;
            case 13:
                m.autoStartNum = r.int64();
                break;
            case 14:
                m.gpsLimit = r.bool();
                break;
            case 15:
                m.ipLimit = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return TexasConfig;
})();

$root.ShortConfig = (function() {

    /**
     * Properties of a ShortConfig.
     * @exports IShortConfig
     * @interface IShortConfig
     * @property {ShortGameScoreMode|null} [scoreMode] ShortConfig scoreMode
     * @property {number|null} [baseScore] ShortConfig baseScore
     * @property {boolean|null} [buttonDouble] ShortConfig buttonDouble
     */

    /**
     * Constructs a new ShortConfig.
     * @exports ShortConfig
     * @classdesc Represents a ShortConfig.
     * @implements IShortConfig
     * @constructor
     * @param {IShortConfig=} [p] Properties to set
     */
    function ShortConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ShortConfig scoreMode.
     * @member {ShortGameScoreMode} scoreMode
     * @memberof ShortConfig
     * @instance
     */
    ShortConfig.prototype.scoreMode = 0;

    /**
     * ShortConfig baseScore.
     * @member {number} baseScore
     * @memberof ShortConfig
     * @instance
     */
    ShortConfig.prototype.baseScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ShortConfig buttonDouble.
     * @member {boolean} buttonDouble
     * @memberof ShortConfig
     * @instance
     */
    ShortConfig.prototype.buttonDouble = false;

    /**
     * Encodes the specified ShortConfig message. Does not implicitly {@link ShortConfig.verify|verify} messages.
     * @function encode
     * @memberof ShortConfig
     * @static
     * @param {IShortConfig} m ShortConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ShortConfig.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.scoreMode != null && Object.hasOwnProperty.call(m, "scoreMode"))
            w.uint32(8).int32(m.scoreMode);
        if (m.baseScore != null && Object.hasOwnProperty.call(m, "baseScore"))
            w.uint32(16).int64(m.baseScore);
        if (m.buttonDouble != null && Object.hasOwnProperty.call(m, "buttonDouble"))
            w.uint32(24).bool(m.buttonDouble);
        return w;
    };

    /**
     * Decodes a ShortConfig message from the specified reader or buffer.
     * @function decode
     * @memberof ShortConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ShortConfig} ShortConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ShortConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ShortConfig();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.scoreMode = r.int32();
                break;
            case 2:
                m.baseScore = r.int64();
                break;
            case 3:
                m.buttonDouble = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ShortConfig;
})();

/**
 * GameType enum.
 * @exports GameType
 * @enum {number}
 * @property {number} GameType_TexasCash=0 GameType_TexasCash value
 * @property {number} GameType_ShortCash=1 GameType_ShortCash value
 * @property {number} GameType_Mtt=2 GameType_Mtt value
 * @property {number} GameType_Omh=3 GameType_Omh value
 */
$root.GameType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameType_TexasCash"] = 0;
    values[valuesById[1] = "GameType_ShortCash"] = 1;
    values[valuesById[2] = "GameType_Mtt"] = 2;
    values[valuesById[3] = "GameType_Omh"] = 3;
    return values;
})();

/**
 * GameTaxType enum.
 * @exports GameTaxType
 * @enum {number}
 * @property {number} GameTaxType_EveryRound=0 GameTaxType_EveryRound value
 * @property {number} GameTaxType_WholeGameEnd=1 GameTaxType_WholeGameEnd value
 */
$root.GameTaxType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameTaxType_EveryRound"] = 0;
    values[valuesById[1] = "GameTaxType_WholeGameEnd"] = 1;
    return values;
})();

/**
 * GameCurrencyType enum.
 * @exports GameCurrencyType
 * @enum {number}
 * @property {number} GameCurrencyType_Point=0 GameCurrencyType_Point value
 * @property {number} GameCurrencyType_Coin=1 GameCurrencyType_Coin value
 */
$root.GameCurrencyType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameCurrencyType_Point"] = 0;
    values[valuesById[1] = "GameCurrencyType_Coin"] = 1;
    return values;
})();

/**
 * ShortGameScoreMode enum.
 * @exports ShortGameScoreMode
 * @enum {number}
 * @property {number} ShortGameScoreMode_AnteMode=0 ShortGameScoreMode_AnteMode value
 * @property {number} ShortGameScoreMode_BlindMode=1 ShortGameScoreMode_BlindMode value
 */
$root.ShortGameScoreMode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ShortGameScoreMode_AnteMode"] = 0;
    values[valuesById[1] = "ShortGameScoreMode_BlindMode"] = 1;
    return values;
})();

/**
 * RecordDateType enum.
 * @exports RecordDateType
 * @enum {number}
 * @property {number} RecordDateType_Today=0 RecordDateType_Today value
 * @property {number} RecordDateType_Week=1 RecordDateType_Week value
 * @property {number} RecordDateType_Month=2 RecordDateType_Month value
 */
$root.RecordDateType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "RecordDateType_Today"] = 0;
    values[valuesById[1] = "RecordDateType_Week"] = 1;
    values[valuesById[2] = "RecordDateType_Month"] = 2;
    return values;
})();

$root.CommonResult = (function() {

    /**
     * Properties of a CommonResult.
     * @exports ICommonResult
     * @interface ICommonResult
     * @property {number|null} [resId] CommonResult resId
     * @property {string|null} [resMessage] CommonResult resMessage
     */

    /**
     * Constructs a new CommonResult.
     * @exports CommonResult
     * @classdesc Represents a CommonResult.
     * @implements ICommonResult
     * @constructor
     * @param {ICommonResult=} [p] Properties to set
     */
    function CommonResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CommonResult resId.
     * @member {number} resId
     * @memberof CommonResult
     * @instance
     */
    CommonResult.prototype.resId = 0;

    /**
     * CommonResult resMessage.
     * @member {string} resMessage
     * @memberof CommonResult
     * @instance
     */
    CommonResult.prototype.resMessage = "";

    /**
     * Encodes the specified CommonResult message. Does not implicitly {@link CommonResult.verify|verify} messages.
     * @function encode
     * @memberof CommonResult
     * @static
     * @param {ICommonResult} m CommonResult message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CommonResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.resId != null && Object.hasOwnProperty.call(m, "resId"))
            w.uint32(8).int32(m.resId);
        if (m.resMessage != null && Object.hasOwnProperty.call(m, "resMessage"))
            w.uint32(18).string(m.resMessage);
        return w;
    };

    /**
     * Decodes a CommonResult message from the specified reader or buffer.
     * @function decode
     * @memberof CommonResult
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CommonResult} CommonResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CommonResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CommonResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.resId = r.int32();
                break;
            case 2:
                m.resMessage = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CommonResult;
})();

$root.C2SGetUserInfo = (function() {

    /**
     * Properties of a C2SGetUserInfo.
     * @exports IC2SGetUserInfo
     * @interface IC2SGetUserInfo
     */

    /**
     * Constructs a new C2SGetUserInfo.
     * @exports C2SGetUserInfo
     * @classdesc Represents a C2SGetUserInfo.
     * @implements IC2SGetUserInfo
     * @constructor
     * @param {IC2SGetUserInfo=} [p] Properties to set
     */
    function C2SGetUserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SGetUserInfo message. Does not implicitly {@link C2SGetUserInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SGetUserInfo
     * @static
     * @param {IC2SGetUserInfo} m C2SGetUserInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetUserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SGetUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetUserInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetUserInfo} C2SGetUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetUserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetUserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGetUserInfo;
})();

$root.C2SChangeUserInfo = (function() {

    /**
     * Properties of a C2SChangeUserInfo.
     * @exports IC2SChangeUserInfo
     * @interface IC2SChangeUserInfo
     * @property {string|null} [nickName] C2SChangeUserInfo nickName
     * @property {string|null} [head] C2SChangeUserInfo head
     */

    /**
     * Constructs a new C2SChangeUserInfo.
     * @exports C2SChangeUserInfo
     * @classdesc Represents a C2SChangeUserInfo.
     * @implements IC2SChangeUserInfo
     * @constructor
     * @param {IC2SChangeUserInfo=} [p] Properties to set
     */
    function C2SChangeUserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SChangeUserInfo nickName.
     * @member {string} nickName
     * @memberof C2SChangeUserInfo
     * @instance
     */
    C2SChangeUserInfo.prototype.nickName = "";

    /**
     * C2SChangeUserInfo head.
     * @member {string} head
     * @memberof C2SChangeUserInfo
     * @instance
     */
    C2SChangeUserInfo.prototype.head = "";

    /**
     * Encodes the specified C2SChangeUserInfo message. Does not implicitly {@link C2SChangeUserInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SChangeUserInfo
     * @static
     * @param {IC2SChangeUserInfo} m C2SChangeUserInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SChangeUserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(10).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(18).string(m.head);
        return w;
    };

    /**
     * Decodes a C2SChangeUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SChangeUserInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SChangeUserInfo} C2SChangeUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SChangeUserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SChangeUserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.nickName = r.string();
                break;
            case 2:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SChangeUserInfo;
})();

/**
 * AccountLevel enum.
 * @exports AccountLevel
 * @enum {number}
 * @property {number} AccountLevel_Normal=0 AccountLevel_Normal value
 * @property {number} AccountLevel_Agent=1 AccountLevel_Agent value
 * @property {number} AccountLevel_Boss=2 AccountLevel_Boss value
 */
$root.AccountLevel = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AccountLevel_Normal"] = 0;
    values[valuesById[1] = "AccountLevel_Agent"] = 1;
    values[valuesById[2] = "AccountLevel_Boss"] = 2;
    return values;
})();

/**
 * AccountStauts enum.
 * @exports AccountStauts
 * @enum {number}
 * @property {number} AccountStauts_Normal=0 AccountStauts_Normal value
 * @property {number} AccountStauts_Frozen=1 AccountStauts_Frozen value
 */
$root.AccountStauts = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AccountStauts_Normal"] = 0;
    values[valuesById[1] = "AccountStauts_Frozen"] = 1;
    return values;
})();

$root.S2CGetUserInfo = (function() {

    /**
     * Properties of a S2CGetUserInfo.
     * @exports IS2CGetUserInfo
     * @interface IS2CGetUserInfo
     * @property {number|null} [uid] S2CGetUserInfo uid
     * @property {string|null} [phoneNum] S2CGetUserInfo phoneNum
     * @property {string|null} [nickName] S2CGetUserInfo nickName
     * @property {string|null} [head] S2CGetUserInfo head
     * @property {number|null} [coin] S2CGetUserInfo coin
     * @property {number|null} [diamond] S2CGetUserInfo diamond
     * @property {number|null} [clubPoint] S2CGetUserInfo clubPoint
     * @property {number|null} [unionCoin] S2CGetUserInfo unionCoin
     * @property {AccountLevel|null} [accountLevel] S2CGetUserInfo accountLevel
     * @property {AccountStauts|null} [accountStatus] S2CGetUserInfo accountStatus
     */

    /**
     * Constructs a new S2CGetUserInfo.
     * @exports S2CGetUserInfo
     * @classdesc Represents a S2CGetUserInfo.
     * @implements IS2CGetUserInfo
     * @constructor
     * @param {IS2CGetUserInfo=} [p] Properties to set
     */
    function S2CGetUserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetUserInfo uid.
     * @member {number} uid
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.uid = 0;

    /**
     * S2CGetUserInfo phoneNum.
     * @member {string} phoneNum
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.phoneNum = "";

    /**
     * S2CGetUserInfo nickName.
     * @member {string} nickName
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.nickName = "";

    /**
     * S2CGetUserInfo head.
     * @member {string} head
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.head = "";

    /**
     * S2CGetUserInfo coin.
     * @member {number} coin
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CGetUserInfo diamond.
     * @member {number} diamond
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CGetUserInfo clubPoint.
     * @member {number} clubPoint
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.clubPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CGetUserInfo unionCoin.
     * @member {number} unionCoin
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.unionCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CGetUserInfo accountLevel.
     * @member {AccountLevel} accountLevel
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.accountLevel = 0;

    /**
     * S2CGetUserInfo accountStatus.
     * @member {AccountStauts} accountStatus
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.accountStatus = 0;

    /**
     * Encodes the specified S2CGetUserInfo message. Does not implicitly {@link S2CGetUserInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CGetUserInfo
     * @static
     * @param {IS2CGetUserInfo} m S2CGetUserInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetUserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(8).int32(m.uid);
        if (m.phoneNum != null && Object.hasOwnProperty.call(m, "phoneNum"))
            w.uint32(18).string(m.phoneNum);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(26).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(34).string(m.head);
        if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
            w.uint32(40).int64(m.coin);
        if (m.diamond != null && Object.hasOwnProperty.call(m, "diamond"))
            w.uint32(48).int64(m.diamond);
        if (m.clubPoint != null && Object.hasOwnProperty.call(m, "clubPoint"))
            w.uint32(56).int64(m.clubPoint);
        if (m.unionCoin != null && Object.hasOwnProperty.call(m, "unionCoin"))
            w.uint32(64).int64(m.unionCoin);
        if (m.accountLevel != null && Object.hasOwnProperty.call(m, "accountLevel"))
            w.uint32(72).int32(m.accountLevel);
        if (m.accountStatus != null && Object.hasOwnProperty.call(m, "accountStatus"))
            w.uint32(80).int32(m.accountStatus);
        return w;
    };

    /**
     * Decodes a S2CGetUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetUserInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetUserInfo} S2CGetUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetUserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetUserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.int32();
                break;
            case 2:
                m.phoneNum = r.string();
                break;
            case 3:
                m.nickName = r.string();
                break;
            case 4:
                m.head = r.string();
                break;
            case 5:
                m.coin = r.int64();
                break;
            case 6:
                m.diamond = r.int64();
                break;
            case 7:
                m.clubPoint = r.int64();
                break;
            case 8:
                m.unionCoin = r.int64();
                break;
            case 9:
                m.accountLevel = r.int32();
                break;
            case 10:
                m.accountStatus = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetUserInfo;
})();

$root.S2CChangeUserInfo = (function() {

    /**
     * Properties of a S2CChangeUserInfo.
     * @exports IS2CChangeUserInfo
     * @interface IS2CChangeUserInfo
     * @property {ICommonResult|null} [result] S2CChangeUserInfo result
     * @property {string|null} [nickName] S2CChangeUserInfo nickName
     * @property {string|null} [head] S2CChangeUserInfo head
     */

    /**
     * Constructs a new S2CChangeUserInfo.
     * @exports S2CChangeUserInfo
     * @classdesc Represents a S2CChangeUserInfo.
     * @implements IS2CChangeUserInfo
     * @constructor
     * @param {IS2CChangeUserInfo=} [p] Properties to set
     */
    function S2CChangeUserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CChangeUserInfo result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CChangeUserInfo
     * @instance
     */
    S2CChangeUserInfo.prototype.result = null;

    /**
     * S2CChangeUserInfo nickName.
     * @member {string} nickName
     * @memberof S2CChangeUserInfo
     * @instance
     */
    S2CChangeUserInfo.prototype.nickName = "";

    /**
     * S2CChangeUserInfo head.
     * @member {string} head
     * @memberof S2CChangeUserInfo
     * @instance
     */
    S2CChangeUserInfo.prototype.head = "";

    /**
     * Encodes the specified S2CChangeUserInfo message. Does not implicitly {@link S2CChangeUserInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CChangeUserInfo
     * @static
     * @param {IS2CChangeUserInfo} m S2CChangeUserInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CChangeUserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(18).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(26).string(m.head);
        return w;
    };

    /**
     * Decodes a S2CChangeUserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CChangeUserInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CChangeUserInfo} S2CChangeUserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CChangeUserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CChangeUserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.nickName = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CChangeUserInfo;
})();

$root.C2SLogin = (function() {

    /**
     * Properties of a C2SLogin.
     * @exports IC2SLogin
     * @interface IC2SLogin
     * @property {LoginType|null} [loginType] C2SLogin loginType
     * @property {string|null} [phoneNumber] C2SLogin phoneNumber
     * @property {string|null} [code] C2SLogin code
     * @property {string|null} [psw] C2SLogin psw
     * @property {string|null} [token] C2SLogin token
     */

    /**
     * Constructs a new C2SLogin.
     * @exports C2SLogin
     * @classdesc Represents a C2SLogin.
     * @implements IC2SLogin
     * @constructor
     * @param {IC2SLogin=} [p] Properties to set
     */
    function C2SLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SLogin loginType.
     * @member {LoginType} loginType
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.loginType = 0;

    /**
     * C2SLogin phoneNumber.
     * @member {string} phoneNumber
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.phoneNumber = "";

    /**
     * C2SLogin code.
     * @member {string} code
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.code = "";

    /**
     * C2SLogin psw.
     * @member {string} psw
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.psw = "";

    /**
     * C2SLogin token.
     * @member {string} token
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.token = "";

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @function encode
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin} m C2SLogin message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.loginType != null && Object.hasOwnProperty.call(m, "loginType"))
            w.uint32(8).int32(m.loginType);
        if (m.phoneNumber != null && Object.hasOwnProperty.call(m, "phoneNumber"))
            w.uint32(18).string(m.phoneNumber);
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(26).string(m.code);
        if (m.psw != null && Object.hasOwnProperty.call(m, "psw"))
            w.uint32(34).string(m.psw);
        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
            w.uint32(42).string(m.token);
        return w;
    };

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLogin
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SLogin} C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.loginType = r.int32();
                break;
            case 2:
                m.phoneNumber = r.string();
                break;
            case 3:
                m.code = r.string();
                break;
            case 4:
                m.psw = r.string();
                break;
            case 5:
                m.token = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SLogin;
})();

$root.C2SLogout = (function() {

    /**
     * Properties of a C2SLogout.
     * @exports IC2SLogout
     * @interface IC2SLogout
     */

    /**
     * Constructs a new C2SLogout.
     * @exports C2SLogout
     * @classdesc Represents a C2SLogout.
     * @implements IC2SLogout
     * @constructor
     * @param {IC2SLogout=} [p] Properties to set
     */
    function C2SLogout(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SLogout message. Does not implicitly {@link C2SLogout.verify|verify} messages.
     * @function encode
     * @memberof C2SLogout
     * @static
     * @param {IC2SLogout} m C2SLogout message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SLogout.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SLogout message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLogout
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SLogout} C2SLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogout.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SLogout();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SLogout;
})();

$root.C2SRegister = (function() {

    /**
     * Properties of a C2SRegister.
     * @exports IC2SRegister
     * @interface IC2SRegister
     * @property {string|null} [phoneNumber] C2SRegister phoneNumber
     * @property {string|null} [code] C2SRegister code
     * @property {string|null} [nickName] C2SRegister nickName
     * @property {string|null} [psw] C2SRegister psw
     * @property {string|null} [head] C2SRegister head
     * @property {string|null} [inviteCode] C2SRegister inviteCode
     */

    /**
     * Constructs a new C2SRegister.
     * @exports C2SRegister
     * @classdesc Represents a C2SRegister.
     * @implements IC2SRegister
     * @constructor
     * @param {IC2SRegister=} [p] Properties to set
     */
    function C2SRegister(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SRegister phoneNumber.
     * @member {string} phoneNumber
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.phoneNumber = "";

    /**
     * C2SRegister code.
     * @member {string} code
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.code = "";

    /**
     * C2SRegister nickName.
     * @member {string} nickName
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.nickName = "";

    /**
     * C2SRegister psw.
     * @member {string} psw
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.psw = "";

    /**
     * C2SRegister head.
     * @member {string} head
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.head = "";

    /**
     * C2SRegister inviteCode.
     * @member {string} inviteCode
     * @memberof C2SRegister
     * @instance
     */
    C2SRegister.prototype.inviteCode = "";

    /**
     * Encodes the specified C2SRegister message. Does not implicitly {@link C2SRegister.verify|verify} messages.
     * @function encode
     * @memberof C2SRegister
     * @static
     * @param {IC2SRegister} m C2SRegister message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SRegister.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.phoneNumber != null && Object.hasOwnProperty.call(m, "phoneNumber"))
            w.uint32(10).string(m.phoneNumber);
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(18).string(m.code);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(26).string(m.nickName);
        if (m.psw != null && Object.hasOwnProperty.call(m, "psw"))
            w.uint32(34).string(m.psw);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(42).string(m.head);
        if (m.inviteCode != null && Object.hasOwnProperty.call(m, "inviteCode"))
            w.uint32(50).string(m.inviteCode);
        return w;
    };

    /**
     * Decodes a C2SRegister message from the specified reader or buffer.
     * @function decode
     * @memberof C2SRegister
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SRegister} C2SRegister
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SRegister.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SRegister();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.phoneNumber = r.string();
                break;
            case 2:
                m.code = r.string();
                break;
            case 3:
                m.nickName = r.string();
                break;
            case 4:
                m.psw = r.string();
                break;
            case 5:
                m.head = r.string();
                break;
            case 6:
                m.inviteCode = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SRegister;
})();

$root.C2SGetSmsCode = (function() {

    /**
     * Properties of a C2SGetSmsCode.
     * @exports IC2SGetSmsCode
     * @interface IC2SGetSmsCode
     * @property {string|null} [phoneNumber] C2SGetSmsCode phoneNumber
     * @property {SmsCodeType|null} [type] C2SGetSmsCode type
     */

    /**
     * Constructs a new C2SGetSmsCode.
     * @exports C2SGetSmsCode
     * @classdesc Represents a C2SGetSmsCode.
     * @implements IC2SGetSmsCode
     * @constructor
     * @param {IC2SGetSmsCode=} [p] Properties to set
     */
    function C2SGetSmsCode(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetSmsCode phoneNumber.
     * @member {string} phoneNumber
     * @memberof C2SGetSmsCode
     * @instance
     */
    C2SGetSmsCode.prototype.phoneNumber = "";

    /**
     * C2SGetSmsCode type.
     * @member {SmsCodeType} type
     * @memberof C2SGetSmsCode
     * @instance
     */
    C2SGetSmsCode.prototype.type = 0;

    /**
     * Encodes the specified C2SGetSmsCode message. Does not implicitly {@link C2SGetSmsCode.verify|verify} messages.
     * @function encode
     * @memberof C2SGetSmsCode
     * @static
     * @param {IC2SGetSmsCode} m C2SGetSmsCode message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetSmsCode.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.phoneNumber != null && Object.hasOwnProperty.call(m, "phoneNumber"))
            w.uint32(10).string(m.phoneNumber);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a C2SGetSmsCode message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetSmsCode
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetSmsCode} C2SGetSmsCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetSmsCode.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetSmsCode();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.phoneNumber = r.string();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGetSmsCode;
})();

/**
 * SmsCodeType enum.
 * @exports SmsCodeType
 * @enum {number}
 * @property {number} Register=0 Register value
 * @property {number} Login=1 Login value
 * @property {number} ResetPassword=2 ResetPassword value
 */
$root.SmsCodeType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Register"] = 0;
    values[valuesById[1] = "Login"] = 1;
    values[valuesById[2] = "ResetPassword"] = 2;
    return values;
})();

/**
 * LoginType enum.
 * @exports LoginType
 * @enum {number}
 * @property {number} LoginType_UnKnow=0 LoginType_UnKnow value
 * @property {number} LoginType_PhoneCode=1 LoginType_PhoneCode value
 * @property {number} LoginType_PhonePsw=2 LoginType_PhonePsw value
 * @property {number} LoginType_Token=3 LoginType_Token value
 */
$root.LoginType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LoginType_UnKnow"] = 0;
    values[valuesById[1] = "LoginType_PhoneCode"] = 1;
    values[valuesById[2] = "LoginType_PhonePsw"] = 2;
    values[valuesById[3] = "LoginType_Token"] = 3;
    return values;
})();

$root.S2CLogin = (function() {

    /**
     * Properties of a S2CLogin.
     * @exports IS2CLogin
     * @interface IS2CLogin
     * @property {ICommonResult|null} [result] S2CLogin result
     */

    /**
     * Constructs a new S2CLogin.
     * @exports S2CLogin
     * @classdesc Represents a S2CLogin.
     * @implements IS2CLogin
     * @constructor
     * @param {IS2CLogin=} [p] Properties to set
     */
    function S2CLogin(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CLogin result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.result = null;

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @function encode
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin} m S2CLogin message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CLogin.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLogin
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CLogin} S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogin.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CLogin();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CLogin;
})();

$root.S2CLogout = (function() {

    /**
     * Properties of a S2CLogout.
     * @exports IS2CLogout
     * @interface IS2CLogout
     */

    /**
     * Constructs a new S2CLogout.
     * @exports S2CLogout
     * @classdesc Represents a S2CLogout.
     * @implements IS2CLogout
     * @constructor
     * @param {IS2CLogout=} [p] Properties to set
     */
    function S2CLogout(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified S2CLogout message. Does not implicitly {@link S2CLogout.verify|verify} messages.
     * @function encode
     * @memberof S2CLogout
     * @static
     * @param {IS2CLogout} m S2CLogout message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CLogout.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a S2CLogout message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLogout
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CLogout} S2CLogout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogout.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CLogout();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CLogout;
})();

$root.S2CRegister = (function() {

    /**
     * Properties of a S2CRegister.
     * @exports IS2CRegister
     * @interface IS2CRegister
     * @property {ICommonResult|null} [result] S2CRegister result
     */

    /**
     * Constructs a new S2CRegister.
     * @exports S2CRegister
     * @classdesc Represents a S2CRegister.
     * @implements IS2CRegister
     * @constructor
     * @param {IS2CRegister=} [p] Properties to set
     */
    function S2CRegister(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CRegister result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CRegister
     * @instance
     */
    S2CRegister.prototype.result = null;

    /**
     * Encodes the specified S2CRegister message. Does not implicitly {@link S2CRegister.verify|verify} messages.
     * @function encode
     * @memberof S2CRegister
     * @static
     * @param {IS2CRegister} m S2CRegister message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CRegister.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CRegister message from the specified reader or buffer.
     * @function decode
     * @memberof S2CRegister
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CRegister} S2CRegister
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CRegister.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CRegister();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CRegister;
})();

$root.S2CGetSmsCode = (function() {

    /**
     * Properties of a S2CGetSmsCode.
     * @exports IS2CGetSmsCode
     * @interface IS2CGetSmsCode
     * @property {number|null} [code] S2CGetSmsCode code
     * @property {SmsCodeType|null} [type] S2CGetSmsCode type
     */

    /**
     * Constructs a new S2CGetSmsCode.
     * @exports S2CGetSmsCode
     * @classdesc Represents a S2CGetSmsCode.
     * @implements IS2CGetSmsCode
     * @constructor
     * @param {IS2CGetSmsCode=} [p] Properties to set
     */
    function S2CGetSmsCode(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetSmsCode code.
     * @member {number} code
     * @memberof S2CGetSmsCode
     * @instance
     */
    S2CGetSmsCode.prototype.code = 0;

    /**
     * S2CGetSmsCode type.
     * @member {SmsCodeType} type
     * @memberof S2CGetSmsCode
     * @instance
     */
    S2CGetSmsCode.prototype.type = 0;

    /**
     * Encodes the specified S2CGetSmsCode message. Does not implicitly {@link S2CGetSmsCode.verify|verify} messages.
     * @function encode
     * @memberof S2CGetSmsCode
     * @static
     * @param {IS2CGetSmsCode} m S2CGetSmsCode message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetSmsCode.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.code != null && Object.hasOwnProperty.call(m, "code"))
            w.uint32(8).int32(m.code);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a S2CGetSmsCode message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetSmsCode
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetSmsCode} S2CGetSmsCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetSmsCode.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetSmsCode();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.code = r.int32();
                break;
            case 2:
                m.type = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetSmsCode;
})();

/**
 * Login(1001-2000)
 * Hall(2001-4000)
 * @exports MessageId
 * @enum {number}
 * @property {number} MSG_UnKnow=0 MSG_UnKnow value
 * @property {number} MSG_LoginBegin=1001 MSG_LoginBegin value
 * @property {number} C2S_Login=1002 C2S_Login value
 * @property {number} C2S_Logout=1003 C2S_Logout value
 * @property {number} C2S_Register=1004 C2S_Register value
 * @property {number} C2S_GetSmsCode=1005 C2S_GetSmsCode value
 * @property {number} S2C_Login=1100 S2C_Login value
 * @property {number} S2C_Logout=1101 S2C_Logout value
 * @property {number} S2C_Register=1102 S2C_Register value
 * @property {number} S2C_GetSmsCode=1103 S2C_GetSmsCode value
 * @property {number} MSG_LoginEnd=2000 MSG_LoginEnd value
 * @property {number} MSG_HallBegin=2001 MSG_HallBegin value
 * @property {number} C2S_GetUserInfo=2002 C2S_GetUserInfo value
 * @property {number} S2C_GetUserInfo=3000 S2C_GetUserInfo value
 * @property {number} MSG_HallEnd=4000 MSG_HallEnd value
 */
$root.MessageId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MSG_UnKnow"] = 0;
    values[valuesById[1001] = "MSG_LoginBegin"] = 1001;
    values[valuesById[1002] = "C2S_Login"] = 1002;
    values[valuesById[1003] = "C2S_Logout"] = 1003;
    values[valuesById[1004] = "C2S_Register"] = 1004;
    values[valuesById[1005] = "C2S_GetSmsCode"] = 1005;
    values[valuesById[1100] = "S2C_Login"] = 1100;
    values[valuesById[1101] = "S2C_Logout"] = 1101;
    values[valuesById[1102] = "S2C_Register"] = 1102;
    values[valuesById[1103] = "S2C_GetSmsCode"] = 1103;
    values[valuesById[2000] = "MSG_LoginEnd"] = 2000;
    values[valuesById[2001] = "MSG_HallBegin"] = 2001;
    values[valuesById[2002] = "C2S_GetUserInfo"] = 2002;
    values[valuesById[3000] = "S2C_GetUserInfo"] = 3000;
    values[valuesById[4000] = "MSG_HallEnd"] = 4000;
    return values;
})();