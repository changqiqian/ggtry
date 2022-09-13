// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.PokerLife = (function() {

    /**
     * Namespace PokerLife.
     * @exports PokerLife
     * @namespace
     */
    var PokerLife = {};

    PokerLife.Club = (function() {

        /**
         * Namespace Club.
         * @memberof PokerLife
         * @namespace
         */
        var Club = {};

        Club.GameConfig = (function() {

            /**
             * Properties of a GameConfig.
             * @memberof PokerLife.Club
             * @interface IGameConfig
             * @property {PokerLife.Club.IGameBasicConfig} basicConfig GameConfig basicConfig
             * @property {PokerLife.Club.ITexasConfig} texasConfig GameConfig texasConfig
             * @property {PokerLife.Club.IShortConfig|null} [shortConfig] GameConfig shortConfig
             * @property {PokerLife.Club.IMatchingConfig|null} [matchingConfig] GameConfig matchingConfig
             */

            /**
             * Constructs a new GameConfig.
             * @memberof PokerLife.Club
             * @classdesc Represents a GameConfig.
             * @implements IGameConfig
             * @constructor
             * @param {PokerLife.Club.IGameConfig=} [p] Properties to set
             */
            function GameConfig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GameConfig basicConfig.
             * @member {PokerLife.Club.IGameBasicConfig} basicConfig
             * @memberof PokerLife.Club.GameConfig
             * @instance
             */
            GameConfig.prototype.basicConfig = null;

            /**
             * GameConfig texasConfig.
             * @member {PokerLife.Club.ITexasConfig} texasConfig
             * @memberof PokerLife.Club.GameConfig
             * @instance
             */
            GameConfig.prototype.texasConfig = null;

            /**
             * GameConfig shortConfig.
             * @member {PokerLife.Club.IShortConfig|null|undefined} shortConfig
             * @memberof PokerLife.Club.GameConfig
             * @instance
             */
            GameConfig.prototype.shortConfig = null;

            /**
             * GameConfig matchingConfig.
             * @member {PokerLife.Club.IMatchingConfig|null|undefined} matchingConfig
             * @memberof PokerLife.Club.GameConfig
             * @instance
             */
            GameConfig.prototype.matchingConfig = null;

            /**
             * Encodes the specified GameConfig message. Does not implicitly {@link PokerLife.Club.GameConfig.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Club.GameConfig
             * @static
             * @param {PokerLife.Club.IGameConfig} m GameConfig message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            GameConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.Club.GameBasicConfig.encode(m.basicConfig, w.uint32(10).fork()).ldelim();
                $root.PokerLife.Club.TexasConfig.encode(m.texasConfig, w.uint32(18).fork()).ldelim();
                if (m.shortConfig != null && Object.hasOwnProperty.call(m, "shortConfig"))
                    $root.PokerLife.Club.ShortConfig.encode(m.shortConfig, w.uint32(26).fork()).ldelim();
                if (m.matchingConfig != null && Object.hasOwnProperty.call(m, "matchingConfig"))
                    $root.PokerLife.Club.MatchingConfig.encode(m.matchingConfig, w.uint32(34).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a GameConfig message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Club.GameConfig
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Club.GameConfig} GameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            GameConfig.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Club.GameConfig();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.basicConfig = $root.PokerLife.Club.GameBasicConfig.decode(r, r.uint32());
                        break;
                    case 2:
                        m.texasConfig = $root.PokerLife.Club.TexasConfig.decode(r, r.uint32());
                        break;
                    case 3:
                        m.shortConfig = $root.PokerLife.Club.ShortConfig.decode(r, r.uint32());
                        break;
                    case 4:
                        m.matchingConfig = $root.PokerLife.Club.MatchingConfig.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("basicConfig"))
                    throw $util.ProtocolError("missing required 'basicConfig'", { instance: m });
                if (!m.hasOwnProperty("texasConfig"))
                    throw $util.ProtocolError("missing required 'texasConfig'", { instance: m });
                return m;
            };

            return GameConfig;
        })();

        Club.MatchingConfig = (function() {

            /**
             * Properties of a MatchingConfig.
             * @memberof PokerLife.Club
             * @interface IMatchingConfig
             * @property {number} currentPlayerNum MatchingConfig currentPlayerNum
             * @property {number} startTime MatchingConfig startTime
             */

            /**
             * Constructs a new MatchingConfig.
             * @memberof PokerLife.Club
             * @classdesc Represents a MatchingConfig.
             * @implements IMatchingConfig
             * @constructor
             * @param {PokerLife.Club.IMatchingConfig=} [p] Properties to set
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
             * @memberof PokerLife.Club.MatchingConfig
             * @instance
             */
            MatchingConfig.prototype.currentPlayerNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MatchingConfig startTime.
             * @member {number} startTime
             * @memberof PokerLife.Club.MatchingConfig
             * @instance
             */
            MatchingConfig.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified MatchingConfig message. Does not implicitly {@link PokerLife.Club.MatchingConfig.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Club.MatchingConfig
             * @static
             * @param {PokerLife.Club.IMatchingConfig} m MatchingConfig message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            MatchingConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int64(m.currentPlayerNum);
                w.uint32(16).int64(m.startTime);
                return w;
            };

            /**
             * Decodes a MatchingConfig message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Club.MatchingConfig
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Club.MatchingConfig} MatchingConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            MatchingConfig.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Club.MatchingConfig();
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
                if (!m.hasOwnProperty("currentPlayerNum"))
                    throw $util.ProtocolError("missing required 'currentPlayerNum'", { instance: m });
                if (!m.hasOwnProperty("startTime"))
                    throw $util.ProtocolError("missing required 'startTime'", { instance: m });
                return m;
            };

            return MatchingConfig;
        })();

        Club.GameBasicConfig = (function() {

            /**
             * Properties of a GameBasicConfig.
             * @memberof PokerLife.Club
             * @interface IGameBasicConfig
             * @property {PokerLife.Club.GameType} gameType GameBasicConfig gameType
             * @property {string} gameName GameBasicConfig gameName
             * @property {PokerLife.Club.GameCurrencyType} currencyType GameBasicConfig currencyType
             * @property {PokerLife.Club.GameTaxType} taxType GameBasicConfig taxType
             * @property {number} taxRatio GameBasicConfig taxRatio
             */

            /**
             * Constructs a new GameBasicConfig.
             * @memberof PokerLife.Club
             * @classdesc Represents a GameBasicConfig.
             * @implements IGameBasicConfig
             * @constructor
             * @param {PokerLife.Club.IGameBasicConfig=} [p] Properties to set
             */
            function GameBasicConfig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GameBasicConfig gameType.
             * @member {PokerLife.Club.GameType} gameType
             * @memberof PokerLife.Club.GameBasicConfig
             * @instance
             */
            GameBasicConfig.prototype.gameType = 0;

            /**
             * GameBasicConfig gameName.
             * @member {string} gameName
             * @memberof PokerLife.Club.GameBasicConfig
             * @instance
             */
            GameBasicConfig.prototype.gameName = "";

            /**
             * GameBasicConfig currencyType.
             * @member {PokerLife.Club.GameCurrencyType} currencyType
             * @memberof PokerLife.Club.GameBasicConfig
             * @instance
             */
            GameBasicConfig.prototype.currencyType = 0;

            /**
             * GameBasicConfig taxType.
             * @member {PokerLife.Club.GameTaxType} taxType
             * @memberof PokerLife.Club.GameBasicConfig
             * @instance
             */
            GameBasicConfig.prototype.taxType = 0;

            /**
             * GameBasicConfig taxRatio.
             * @member {number} taxRatio
             * @memberof PokerLife.Club.GameBasicConfig
             * @instance
             */
            GameBasicConfig.prototype.taxRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified GameBasicConfig message. Does not implicitly {@link PokerLife.Club.GameBasicConfig.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Club.GameBasicConfig
             * @static
             * @param {PokerLife.Club.IGameBasicConfig} m GameBasicConfig message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            GameBasicConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.gameType);
                w.uint32(18).string(m.gameName);
                w.uint32(24).int32(m.currencyType);
                w.uint32(32).int32(m.taxType);
                w.uint32(40).int64(m.taxRatio);
                return w;
            };

            /**
             * Decodes a GameBasicConfig message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Club.GameBasicConfig
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Club.GameBasicConfig} GameBasicConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            GameBasicConfig.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Club.GameBasicConfig();
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
                if (!m.hasOwnProperty("gameType"))
                    throw $util.ProtocolError("missing required 'gameType'", { instance: m });
                if (!m.hasOwnProperty("gameName"))
                    throw $util.ProtocolError("missing required 'gameName'", { instance: m });
                if (!m.hasOwnProperty("currencyType"))
                    throw $util.ProtocolError("missing required 'currencyType'", { instance: m });
                if (!m.hasOwnProperty("taxType"))
                    throw $util.ProtocolError("missing required 'taxType'", { instance: m });
                if (!m.hasOwnProperty("taxRatio"))
                    throw $util.ProtocolError("missing required 'taxRatio'", { instance: m });
                return m;
            };

            return GameBasicConfig;
        })();

        Club.TexasConfig = (function() {

            /**
             * Properties of a TexasConfig.
             * @memberof PokerLife.Club
             * @interface ITexasConfig
             * @property {number} smallBlind TexasConfig smallBlind
             * @property {boolean} straddle TexasConfig straddle
             * @property {number} ante TexasConfig ante
             * @property {number} maxTotalBuyIn TexasConfig maxTotalBuyIn
             * @property {number} minBringIn TexasConfig minBringIn
             * @property {number} maxBringIn TexasConfig maxBringIn
             * @property {boolean} allowBringOut TexasConfig allowBringOut
             * @property {number} minScoreAfterBringOut TexasConfig minScoreAfterBringOut
             * @property {boolean} insurance TexasConfig insurance
             * @property {number} gameDuration TexasConfig gameDuration
             * @property {number} thinkingTime TexasConfig thinkingTime
             * @property {number} seatNum TexasConfig seatNum
             * @property {number} autoStartNum TexasConfig autoStartNum
             * @property {boolean} gpsLimit TexasConfig gpsLimit
             * @property {boolean} ipLimit TexasConfig ipLimit
             */

            /**
             * Constructs a new TexasConfig.
             * @memberof PokerLife.Club
             * @classdesc Represents a TexasConfig.
             * @implements ITexasConfig
             * @constructor
             * @param {PokerLife.Club.ITexasConfig=} [p] Properties to set
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
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.smallBlind = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig straddle.
             * @member {boolean} straddle
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.straddle = false;

            /**
             * TexasConfig ante.
             * @member {number} ante
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.ante = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig maxTotalBuyIn.
             * @member {number} maxTotalBuyIn
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.maxTotalBuyIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig minBringIn.
             * @member {number} minBringIn
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.minBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig maxBringIn.
             * @member {number} maxBringIn
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.maxBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig allowBringOut.
             * @member {boolean} allowBringOut
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.allowBringOut = false;

            /**
             * TexasConfig minScoreAfterBringOut.
             * @member {number} minScoreAfterBringOut
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.minScoreAfterBringOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig insurance.
             * @member {boolean} insurance
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.insurance = false;

            /**
             * TexasConfig gameDuration.
             * @member {number} gameDuration
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.gameDuration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig thinkingTime.
             * @member {number} thinkingTime
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.thinkingTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig seatNum.
             * @member {number} seatNum
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.seatNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig autoStartNum.
             * @member {number} autoStartNum
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.autoStartNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TexasConfig gpsLimit.
             * @member {boolean} gpsLimit
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.gpsLimit = false;

            /**
             * TexasConfig ipLimit.
             * @member {boolean} ipLimit
             * @memberof PokerLife.Club.TexasConfig
             * @instance
             */
            TexasConfig.prototype.ipLimit = false;

            /**
             * Encodes the specified TexasConfig message. Does not implicitly {@link PokerLife.Club.TexasConfig.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Club.TexasConfig
             * @static
             * @param {PokerLife.Club.ITexasConfig} m TexasConfig message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            TexasConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int64(m.smallBlind);
                w.uint32(16).bool(m.straddle);
                w.uint32(24).int64(m.ante);
                w.uint32(32).int64(m.maxTotalBuyIn);
                w.uint32(40).int64(m.minBringIn);
                w.uint32(48).int64(m.maxBringIn);
                w.uint32(56).bool(m.allowBringOut);
                w.uint32(64).int64(m.minScoreAfterBringOut);
                w.uint32(72).bool(m.insurance);
                w.uint32(80).int64(m.gameDuration);
                w.uint32(88).int64(m.thinkingTime);
                w.uint32(96).int64(m.seatNum);
                w.uint32(104).int64(m.autoStartNum);
                w.uint32(112).bool(m.gpsLimit);
                w.uint32(120).bool(m.ipLimit);
                return w;
            };

            /**
             * Decodes a TexasConfig message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Club.TexasConfig
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Club.TexasConfig} TexasConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            TexasConfig.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Club.TexasConfig();
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
                if (!m.hasOwnProperty("smallBlind"))
                    throw $util.ProtocolError("missing required 'smallBlind'", { instance: m });
                if (!m.hasOwnProperty("straddle"))
                    throw $util.ProtocolError("missing required 'straddle'", { instance: m });
                if (!m.hasOwnProperty("ante"))
                    throw $util.ProtocolError("missing required 'ante'", { instance: m });
                if (!m.hasOwnProperty("maxTotalBuyIn"))
                    throw $util.ProtocolError("missing required 'maxTotalBuyIn'", { instance: m });
                if (!m.hasOwnProperty("minBringIn"))
                    throw $util.ProtocolError("missing required 'minBringIn'", { instance: m });
                if (!m.hasOwnProperty("maxBringIn"))
                    throw $util.ProtocolError("missing required 'maxBringIn'", { instance: m });
                if (!m.hasOwnProperty("allowBringOut"))
                    throw $util.ProtocolError("missing required 'allowBringOut'", { instance: m });
                if (!m.hasOwnProperty("minScoreAfterBringOut"))
                    throw $util.ProtocolError("missing required 'minScoreAfterBringOut'", { instance: m });
                if (!m.hasOwnProperty("insurance"))
                    throw $util.ProtocolError("missing required 'insurance'", { instance: m });
                if (!m.hasOwnProperty("gameDuration"))
                    throw $util.ProtocolError("missing required 'gameDuration'", { instance: m });
                if (!m.hasOwnProperty("thinkingTime"))
                    throw $util.ProtocolError("missing required 'thinkingTime'", { instance: m });
                if (!m.hasOwnProperty("seatNum"))
                    throw $util.ProtocolError("missing required 'seatNum'", { instance: m });
                if (!m.hasOwnProperty("autoStartNum"))
                    throw $util.ProtocolError("missing required 'autoStartNum'", { instance: m });
                if (!m.hasOwnProperty("gpsLimit"))
                    throw $util.ProtocolError("missing required 'gpsLimit'", { instance: m });
                if (!m.hasOwnProperty("ipLimit"))
                    throw $util.ProtocolError("missing required 'ipLimit'", { instance: m });
                return m;
            };

            return TexasConfig;
        })();

        Club.ShortConfig = (function() {

            /**
             * Properties of a ShortConfig.
             * @memberof PokerLife.Club
             * @interface IShortConfig
             * @property {PokerLife.Club.ShortGameScoreMode} scoreMode ShortConfig scoreMode
             * @property {number} baseScore ShortConfig baseScore
             * @property {boolean} buttonDouble ShortConfig buttonDouble
             */

            /**
             * Constructs a new ShortConfig.
             * @memberof PokerLife.Club
             * @classdesc Represents a ShortConfig.
             * @implements IShortConfig
             * @constructor
             * @param {PokerLife.Club.IShortConfig=} [p] Properties to set
             */
            function ShortConfig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * ShortConfig scoreMode.
             * @member {PokerLife.Club.ShortGameScoreMode} scoreMode
             * @memberof PokerLife.Club.ShortConfig
             * @instance
             */
            ShortConfig.prototype.scoreMode = 0;

            /**
             * ShortConfig baseScore.
             * @member {number} baseScore
             * @memberof PokerLife.Club.ShortConfig
             * @instance
             */
            ShortConfig.prototype.baseScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ShortConfig buttonDouble.
             * @member {boolean} buttonDouble
             * @memberof PokerLife.Club.ShortConfig
             * @instance
             */
            ShortConfig.prototype.buttonDouble = false;

            /**
             * Encodes the specified ShortConfig message. Does not implicitly {@link PokerLife.Club.ShortConfig.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Club.ShortConfig
             * @static
             * @param {PokerLife.Club.IShortConfig} m ShortConfig message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            ShortConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.scoreMode);
                w.uint32(16).int64(m.baseScore);
                w.uint32(24).bool(m.buttonDouble);
                return w;
            };

            /**
             * Decodes a ShortConfig message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Club.ShortConfig
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Club.ShortConfig} ShortConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            ShortConfig.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Club.ShortConfig();
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
                if (!m.hasOwnProperty("scoreMode"))
                    throw $util.ProtocolError("missing required 'scoreMode'", { instance: m });
                if (!m.hasOwnProperty("baseScore"))
                    throw $util.ProtocolError("missing required 'baseScore'", { instance: m });
                if (!m.hasOwnProperty("buttonDouble"))
                    throw $util.ProtocolError("missing required 'buttonDouble'", { instance: m });
                return m;
            };

            return ShortConfig;
        })();

        /**
         * GameType enum.
         * @name PokerLife.Club.GameType
         * @enum {number}
         * @property {number} TexasCash=0 TexasCash value
         * @property {number} ShortCash=1 ShortCash value
         * @property {number} Mtt=2 Mtt value
         * @property {number} Omh=3 Omh value
         */
        Club.GameType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TexasCash"] = 0;
            values[valuesById[1] = "ShortCash"] = 1;
            values[valuesById[2] = "Mtt"] = 2;
            values[valuesById[3] = "Omh"] = 3;
            return values;
        })();

        /**
         * GameTaxType enum.
         * @name PokerLife.Club.GameTaxType
         * @enum {number}
         * @property {number} EveryRound=0 EveryRound value
         * @property {number} WholeGameEnd=1 WholeGameEnd value
         */
        Club.GameTaxType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EveryRound"] = 0;
            values[valuesById[1] = "WholeGameEnd"] = 1;
            return values;
        })();

        /**
         * GameCurrencyType enum.
         * @name PokerLife.Club.GameCurrencyType
         * @enum {number}
         * @property {number} Point=0 Point value
         * @property {number} Coin=1 Coin value
         */
        Club.GameCurrencyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Point"] = 0;
            values[valuesById[1] = "Coin"] = 1;
            return values;
        })();

        /**
         * ShortGameScoreMode enum.
         * @name PokerLife.Club.ShortGameScoreMode
         * @enum {number}
         * @property {number} AnteMode=0 AnteMode value
         * @property {number} BlindMode=1 BlindMode value
         */
        Club.ShortGameScoreMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AnteMode"] = 0;
            values[valuesById[1] = "BlindMode"] = 1;
            return values;
        })();

        /**
         * RecordDateType enum.
         * @name PokerLife.Club.RecordDateType
         * @enum {number}
         * @property {number} Today=0 Today value
         * @property {number} Week=1 Week value
         * @property {number} Month=2 Month value
         */
        Club.RecordDateType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Today"] = 0;
            values[valuesById[1] = "Week"] = 1;
            values[valuesById[2] = "Month"] = 2;
            return values;
        })();

        return Club;
    })();

    PokerLife.Common = (function() {

        /**
         * Namespace Common.
         * @memberof PokerLife
         * @namespace
         */
        var Common = {};

        Common.MessageHeader = (function() {

            /**
             * Properties of a MessageHeader.
             * @memberof PokerLife.Common
             * @interface IMessageHeader
             * @property {PokerLife.Common.MsgStatus} msgStatus MessageHeader msgStatus
             * @property {PokerLife.Common.ErrorCode|null} [errorCode] MessageHeader errorCode
             * @property {string|null} [errorContent] MessageHeader errorContent
             */

            /**
             * Constructs a new MessageHeader.
             * @memberof PokerLife.Common
             * @classdesc Represents a MessageHeader.
             * @implements IMessageHeader
             * @constructor
             * @param {PokerLife.Common.IMessageHeader=} [p] Properties to set
             */
            function MessageHeader(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * MessageHeader msgStatus.
             * @member {PokerLife.Common.MsgStatus} msgStatus
             * @memberof PokerLife.Common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.msgStatus = 0;

            /**
             * MessageHeader errorCode.
             * @member {PokerLife.Common.ErrorCode} errorCode
             * @memberof PokerLife.Common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.errorCode = 0;

            /**
             * MessageHeader errorContent.
             * @member {string} errorContent
             * @memberof PokerLife.Common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.errorContent = "";

            /**
             * Encodes the specified MessageHeader message. Does not implicitly {@link PokerLife.Common.MessageHeader.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Common.MessageHeader
             * @static
             * @param {PokerLife.Common.IMessageHeader} m MessageHeader message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            MessageHeader.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.msgStatus);
                if (m.errorCode != null && Object.hasOwnProperty.call(m, "errorCode"))
                    w.uint32(16).int32(m.errorCode);
                if (m.errorContent != null && Object.hasOwnProperty.call(m, "errorContent"))
                    w.uint32(26).string(m.errorContent);
                return w;
            };

            /**
             * Decodes a MessageHeader message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Common.MessageHeader
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Common.MessageHeader} MessageHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHeader.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Common.MessageHeader();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.msgStatus = r.int32();
                        break;
                    case 2:
                        m.errorCode = r.int32();
                        break;
                    case 3:
                        m.errorContent = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("msgStatus"))
                    throw $util.ProtocolError("missing required 'msgStatus'", { instance: m });
                return m;
            };

            return MessageHeader;
        })();

        /**
         * MsgStatus enum.
         * @name PokerLife.Common.MsgStatus
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Failed=1 Failed value
         */
        Common.MsgStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Failed"] = 1;
            return values;
        })();

        /**
         * ErrorCode enum.
         * @name PokerLife.Common.ErrorCode
         * @enum {number}
         * @property {number} Unknow=0 Unknow value
         */
        Common.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknow"] = 0;
            return values;
        })();

        return Common;
    })();

    PokerLife.MsgId = (function() {

        /**
         * Namespace MsgId.
         * @memberof PokerLife
         * @namespace
         */
        var MsgId = {};

        /**
         * MsgId enum.
         * @name PokerLife.MsgId.MsgId
         * @enum {number}
         * @property {number} C2S_Register=0 C2S_Register value
         * @property {number} S2C_Register=1 S2C_Register value
         * @property {number} C2S_GetSmsCode=2 C2S_GetSmsCode value
         * @property {number} S2C_GetSmsCode=3 S2C_GetSmsCode value
         * @property {number} C2S_LoginWithSmsCode=4 C2S_LoginWithSmsCode value
         * @property {number} S2C_LoginWithSmsCode=5 S2C_LoginWithSmsCode value
         * @property {number} C2S_LoginWithPwd=6 C2S_LoginWithPwd value
         * @property {number} S2C_LoginWithPwd=7 S2C_LoginWithPwd value
         * @property {number} C2S_GetUserInfo=8 C2S_GetUserInfo value
         * @property {number} S2C_GetUserInfo=9 S2C_GetUserInfo value
         * @property {number} C2S_ResetPassword=10 C2S_ResetPassword value
         * @property {number} S2C_ResetPassword=11 S2C_ResetPassword value
         */
        MsgId.MsgId = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "C2S_Register"] = 0;
            values[valuesById[1] = "S2C_Register"] = 1;
            values[valuesById[2] = "C2S_GetSmsCode"] = 2;
            values[valuesById[3] = "S2C_GetSmsCode"] = 3;
            values[valuesById[4] = "C2S_LoginWithSmsCode"] = 4;
            values[valuesById[5] = "S2C_LoginWithSmsCode"] = 5;
            values[valuesById[6] = "C2S_LoginWithPwd"] = 6;
            values[valuesById[7] = "S2C_LoginWithPwd"] = 7;
            values[valuesById[8] = "C2S_GetUserInfo"] = 8;
            values[valuesById[9] = "S2C_GetUserInfo"] = 9;
            values[valuesById[10] = "C2S_ResetPassword"] = 10;
            values[valuesById[11] = "S2C_ResetPassword"] = 11;
            return values;
        })();

        return MsgId;
    })();

    PokerLife.Register = (function() {

        /**
         * Namespace Register.
         * @memberof PokerLife
         * @namespace
         */
        var Register = {};

        Register.C2S_Register = (function() {

            /**
             * Properties of a C2S_Register.
             * @memberof PokerLife.Register
             * @interface IC2S_Register
             * @property {PokerLife.UserInfo.IUserBaseInfo} baseInfo C2S_Register baseInfo
             * @property {string} password C2S_Register password
             * @property {string} smsCode C2S_Register smsCode
             */

            /**
             * Constructs a new C2S_Register.
             * @memberof PokerLife.Register
             * @classdesc Represents a C2S_Register.
             * @implements IC2S_Register
             * @constructor
             * @param {PokerLife.Register.IC2S_Register=} [p] Properties to set
             */
            function C2S_Register(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_Register baseInfo.
             * @member {PokerLife.UserInfo.IUserBaseInfo} baseInfo
             * @memberof PokerLife.Register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.baseInfo = null;

            /**
             * C2S_Register password.
             * @member {string} password
             * @memberof PokerLife.Register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.password = "";

            /**
             * C2S_Register smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.Register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_Register message. Does not implicitly {@link PokerLife.Register.C2S_Register.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.C2S_Register
             * @static
             * @param {PokerLife.Register.IC2S_Register} m C2S_Register message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_Register.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.UserInfo.UserBaseInfo.encode(m.baseInfo, w.uint32(10).fork()).ldelim();
                w.uint32(18).string(m.password);
                w.uint32(26).string(m.smsCode);
                return w;
            };

            /**
             * Decodes a C2S_Register message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.C2S_Register
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.C2S_Register} C2S_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_Register.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.C2S_Register();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.baseInfo = $root.PokerLife.UserInfo.UserBaseInfo.decode(r, r.uint32());
                        break;
                    case 2:
                        m.password = r.string();
                        break;
                    case 3:
                        m.smsCode = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("baseInfo"))
                    throw $util.ProtocolError("missing required 'baseInfo'", { instance: m });
                if (!m.hasOwnProperty("password"))
                    throw $util.ProtocolError("missing required 'password'", { instance: m });
                if (!m.hasOwnProperty("smsCode"))
                    throw $util.ProtocolError("missing required 'smsCode'", { instance: m });
                return m;
            };

            return C2S_Register;
        })();

        Register.S2C_Register = (function() {

            /**
             * Properties of a S2C_Register.
             * @memberof PokerLife.Register
             * @interface IS2C_Register
             * @property {boolean} result S2C_Register result
             */

            /**
             * Constructs a new S2C_Register.
             * @memberof PokerLife.Register
             * @classdesc Represents a S2C_Register.
             * @implements IS2C_Register
             * @constructor
             * @param {PokerLife.Register.IS2C_Register=} [p] Properties to set
             */
            function S2C_Register(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_Register result.
             * @member {boolean} result
             * @memberof PokerLife.Register.S2C_Register
             * @instance
             */
            S2C_Register.prototype.result = false;

            /**
             * Encodes the specified S2C_Register message. Does not implicitly {@link PokerLife.Register.S2C_Register.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.S2C_Register
             * @static
             * @param {PokerLife.Register.IS2C_Register} m S2C_Register message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_Register.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).bool(m.result);
                return w;
            };

            /**
             * Decodes a S2C_Register message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.S2C_Register
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.S2C_Register} S2C_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_Register.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.S2C_Register();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.result = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: m });
                return m;
            };

            return S2C_Register;
        })();

        Register.C2S_GetSmsCode = (function() {

            /**
             * Properties of a C2S_GetSmsCode.
             * @memberof PokerLife.Register
             * @interface IC2S_GetSmsCode
             * @property {PokerLife.Register.SmsCodeType} smsCodeType C2S_GetSmsCode smsCodeType
             */

            /**
             * Constructs a new C2S_GetSmsCode.
             * @memberof PokerLife.Register
             * @classdesc Represents a C2S_GetSmsCode.
             * @implements IC2S_GetSmsCode
             * @constructor
             * @param {PokerLife.Register.IC2S_GetSmsCode=} [p] Properties to set
             */
            function C2S_GetSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_GetSmsCode smsCodeType.
             * @member {PokerLife.Register.SmsCodeType} smsCodeType
             * @memberof PokerLife.Register.C2S_GetSmsCode
             * @instance
             */
            C2S_GetSmsCode.prototype.smsCodeType = 0;

            /**
             * Encodes the specified C2S_GetSmsCode message. Does not implicitly {@link PokerLife.Register.C2S_GetSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.C2S_GetSmsCode
             * @static
             * @param {PokerLife.Register.IC2S_GetSmsCode} m C2S_GetSmsCode message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_GetSmsCode.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.smsCodeType);
                return w;
            };

            /**
             * Decodes a C2S_GetSmsCode message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.C2S_GetSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.C2S_GetSmsCode} C2S_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.C2S_GetSmsCode();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.smsCodeType = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("smsCodeType"))
                    throw $util.ProtocolError("missing required 'smsCodeType'", { instance: m });
                return m;
            };

            return C2S_GetSmsCode;
        })();

        Register.S2C_GetSmsCode = (function() {

            /**
             * Properties of a S2C_GetSmsCode.
             * @memberof PokerLife.Register
             * @interface IS2C_GetSmsCode
             * @property {PokerLife.Register.SmsCodeType} smsCodeType S2C_GetSmsCode smsCodeType
             * @property {number} smsCode S2C_GetSmsCode smsCode
             */

            /**
             * Constructs a new S2C_GetSmsCode.
             * @memberof PokerLife.Register
             * @classdesc Represents a S2C_GetSmsCode.
             * @implements IS2C_GetSmsCode
             * @constructor
             * @param {PokerLife.Register.IS2C_GetSmsCode=} [p] Properties to set
             */
            function S2C_GetSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetSmsCode smsCodeType.
             * @member {PokerLife.Register.SmsCodeType} smsCodeType
             * @memberof PokerLife.Register.S2C_GetSmsCode
             * @instance
             */
            S2C_GetSmsCode.prototype.smsCodeType = 0;

            /**
             * S2C_GetSmsCode smsCode.
             * @member {number} smsCode
             * @memberof PokerLife.Register.S2C_GetSmsCode
             * @instance
             */
            S2C_GetSmsCode.prototype.smsCode = 0;

            /**
             * Encodes the specified S2C_GetSmsCode message. Does not implicitly {@link PokerLife.Register.S2C_GetSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.S2C_GetSmsCode
             * @static
             * @param {PokerLife.Register.IS2C_GetSmsCode} m S2C_GetSmsCode message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_GetSmsCode.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.smsCodeType);
                w.uint32(16).int32(m.smsCode);
                return w;
            };

            /**
             * Decodes a S2C_GetSmsCode message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.S2C_GetSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.S2C_GetSmsCode} S2C_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.S2C_GetSmsCode();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.smsCodeType = r.int32();
                        break;
                    case 2:
                        m.smsCode = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("smsCodeType"))
                    throw $util.ProtocolError("missing required 'smsCodeType'", { instance: m });
                if (!m.hasOwnProperty("smsCode"))
                    throw $util.ProtocolError("missing required 'smsCode'", { instance: m });
                return m;
            };

            return S2C_GetSmsCode;
        })();

        Register.C2S_LoginWithSmsCode = (function() {

            /**
             * Properties of a C2S_LoginWithSmsCode.
             * @memberof PokerLife.Register
             * @interface IC2S_LoginWithSmsCode
             * @property {string} phoneNum C2S_LoginWithSmsCode phoneNum
             * @property {string} smsCode C2S_LoginWithSmsCode smsCode
             */

            /**
             * Constructs a new C2S_LoginWithSmsCode.
             * @memberof PokerLife.Register
             * @classdesc Represents a C2S_LoginWithSmsCode.
             * @implements IC2S_LoginWithSmsCode
             * @constructor
             * @param {PokerLife.Register.IC2S_LoginWithSmsCode=} [p] Properties to set
             */
            function C2S_LoginWithSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_LoginWithSmsCode phoneNum.
             * @member {string} phoneNum
             * @memberof PokerLife.Register.C2S_LoginWithSmsCode
             * @instance
             */
            C2S_LoginWithSmsCode.prototype.phoneNum = "";

            /**
             * C2S_LoginWithSmsCode smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.Register.C2S_LoginWithSmsCode
             * @instance
             */
            C2S_LoginWithSmsCode.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_LoginWithSmsCode message. Does not implicitly {@link PokerLife.Register.C2S_LoginWithSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.C2S_LoginWithSmsCode
             * @static
             * @param {PokerLife.Register.IC2S_LoginWithSmsCode} m C2S_LoginWithSmsCode message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_LoginWithSmsCode.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.phoneNum);
                w.uint32(18).string(m.smsCode);
                return w;
            };

            /**
             * Decodes a C2S_LoginWithSmsCode message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.C2S_LoginWithSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.C2S_LoginWithSmsCode} C2S_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_LoginWithSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.C2S_LoginWithSmsCode();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.phoneNum = r.string();
                        break;
                    case 2:
                        m.smsCode = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("phoneNum"))
                    throw $util.ProtocolError("missing required 'phoneNum'", { instance: m });
                if (!m.hasOwnProperty("smsCode"))
                    throw $util.ProtocolError("missing required 'smsCode'", { instance: m });
                return m;
            };

            return C2S_LoginWithSmsCode;
        })();

        Register.S2C_LoginWithSmsCode = (function() {

            /**
             * Properties of a S2C_LoginWithSmsCode.
             * @memberof PokerLife.Register
             * @interface IS2C_LoginWithSmsCode
             * @property {boolean} result S2C_LoginWithSmsCode result
             */

            /**
             * Constructs a new S2C_LoginWithSmsCode.
             * @memberof PokerLife.Register
             * @classdesc Represents a S2C_LoginWithSmsCode.
             * @implements IS2C_LoginWithSmsCode
             * @constructor
             * @param {PokerLife.Register.IS2C_LoginWithSmsCode=} [p] Properties to set
             */
            function S2C_LoginWithSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_LoginWithSmsCode result.
             * @member {boolean} result
             * @memberof PokerLife.Register.S2C_LoginWithSmsCode
             * @instance
             */
            S2C_LoginWithSmsCode.prototype.result = false;

            /**
             * Encodes the specified S2C_LoginWithSmsCode message. Does not implicitly {@link PokerLife.Register.S2C_LoginWithSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.S2C_LoginWithSmsCode
             * @static
             * @param {PokerLife.Register.IS2C_LoginWithSmsCode} m S2C_LoginWithSmsCode message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_LoginWithSmsCode.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).bool(m.result);
                return w;
            };

            /**
             * Decodes a S2C_LoginWithSmsCode message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.S2C_LoginWithSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.S2C_LoginWithSmsCode} S2C_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_LoginWithSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.S2C_LoginWithSmsCode();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.result = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: m });
                return m;
            };

            return S2C_LoginWithSmsCode;
        })();

        Register.C2S_LoginWithPwd = (function() {

            /**
             * Properties of a C2S_LoginWithPwd.
             * @memberof PokerLife.Register
             * @interface IC2S_LoginWithPwd
             * @property {string} phoneNum C2S_LoginWithPwd phoneNum
             * @property {string} password C2S_LoginWithPwd password
             */

            /**
             * Constructs a new C2S_LoginWithPwd.
             * @memberof PokerLife.Register
             * @classdesc Represents a C2S_LoginWithPwd.
             * @implements IC2S_LoginWithPwd
             * @constructor
             * @param {PokerLife.Register.IC2S_LoginWithPwd=} [p] Properties to set
             */
            function C2S_LoginWithPwd(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_LoginWithPwd phoneNum.
             * @member {string} phoneNum
             * @memberof PokerLife.Register.C2S_LoginWithPwd
             * @instance
             */
            C2S_LoginWithPwd.prototype.phoneNum = "";

            /**
             * C2S_LoginWithPwd password.
             * @member {string} password
             * @memberof PokerLife.Register.C2S_LoginWithPwd
             * @instance
             */
            C2S_LoginWithPwd.prototype.password = "";

            /**
             * Encodes the specified C2S_LoginWithPwd message. Does not implicitly {@link PokerLife.Register.C2S_LoginWithPwd.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.C2S_LoginWithPwd
             * @static
             * @param {PokerLife.Register.IC2S_LoginWithPwd} m C2S_LoginWithPwd message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_LoginWithPwd.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.phoneNum);
                w.uint32(18).string(m.password);
                return w;
            };

            /**
             * Decodes a C2S_LoginWithPwd message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.C2S_LoginWithPwd
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.C2S_LoginWithPwd} C2S_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_LoginWithPwd.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.C2S_LoginWithPwd();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.phoneNum = r.string();
                        break;
                    case 2:
                        m.password = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("phoneNum"))
                    throw $util.ProtocolError("missing required 'phoneNum'", { instance: m });
                if (!m.hasOwnProperty("password"))
                    throw $util.ProtocolError("missing required 'password'", { instance: m });
                return m;
            };

            return C2S_LoginWithPwd;
        })();

        Register.S2C_LoginWithPwd = (function() {

            /**
             * Properties of a S2C_LoginWithPwd.
             * @memberof PokerLife.Register
             * @interface IS2C_LoginWithPwd
             * @property {boolean} result S2C_LoginWithPwd result
             */

            /**
             * Constructs a new S2C_LoginWithPwd.
             * @memberof PokerLife.Register
             * @classdesc Represents a S2C_LoginWithPwd.
             * @implements IS2C_LoginWithPwd
             * @constructor
             * @param {PokerLife.Register.IS2C_LoginWithPwd=} [p] Properties to set
             */
            function S2C_LoginWithPwd(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_LoginWithPwd result.
             * @member {boolean} result
             * @memberof PokerLife.Register.S2C_LoginWithPwd
             * @instance
             */
            S2C_LoginWithPwd.prototype.result = false;

            /**
             * Encodes the specified S2C_LoginWithPwd message. Does not implicitly {@link PokerLife.Register.S2C_LoginWithPwd.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.S2C_LoginWithPwd
             * @static
             * @param {PokerLife.Register.IS2C_LoginWithPwd} m S2C_LoginWithPwd message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_LoginWithPwd.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).bool(m.result);
                return w;
            };

            /**
             * Decodes a S2C_LoginWithPwd message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.S2C_LoginWithPwd
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.S2C_LoginWithPwd} S2C_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_LoginWithPwd.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.S2C_LoginWithPwd();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.result = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: m });
                return m;
            };

            return S2C_LoginWithPwd;
        })();

        Register.C2S_ResetPassword = (function() {

            /**
             * Properties of a C2S_ResetPassword.
             * @memberof PokerLife.Register
             * @interface IC2S_ResetPassword
             * @property {string} phoneNum C2S_ResetPassword phoneNum
             * @property {string} password C2S_ResetPassword password
             * @property {string} smsCode C2S_ResetPassword smsCode
             */

            /**
             * Constructs a new C2S_ResetPassword.
             * @memberof PokerLife.Register
             * @classdesc Represents a C2S_ResetPassword.
             * @implements IC2S_ResetPassword
             * @constructor
             * @param {PokerLife.Register.IC2S_ResetPassword=} [p] Properties to set
             */
            function C2S_ResetPassword(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_ResetPassword phoneNum.
             * @member {string} phoneNum
             * @memberof PokerLife.Register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.phoneNum = "";

            /**
             * C2S_ResetPassword password.
             * @member {string} password
             * @memberof PokerLife.Register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.password = "";

            /**
             * C2S_ResetPassword smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.Register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_ResetPassword message. Does not implicitly {@link PokerLife.Register.C2S_ResetPassword.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.C2S_ResetPassword
             * @static
             * @param {PokerLife.Register.IC2S_ResetPassword} m C2S_ResetPassword message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_ResetPassword.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.phoneNum);
                w.uint32(18).string(m.password);
                w.uint32(26).string(m.smsCode);
                return w;
            };

            /**
             * Decodes a C2S_ResetPassword message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.C2S_ResetPassword
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.C2S_ResetPassword} C2S_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_ResetPassword.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.C2S_ResetPassword();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.phoneNum = r.string();
                        break;
                    case 2:
                        m.password = r.string();
                        break;
                    case 3:
                        m.smsCode = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("phoneNum"))
                    throw $util.ProtocolError("missing required 'phoneNum'", { instance: m });
                if (!m.hasOwnProperty("password"))
                    throw $util.ProtocolError("missing required 'password'", { instance: m });
                if (!m.hasOwnProperty("smsCode"))
                    throw $util.ProtocolError("missing required 'smsCode'", { instance: m });
                return m;
            };

            return C2S_ResetPassword;
        })();

        Register.S2C_ResetPassword = (function() {

            /**
             * Properties of a S2C_ResetPassword.
             * @memberof PokerLife.Register
             * @interface IS2C_ResetPassword
             * @property {boolean} result S2C_ResetPassword result
             */

            /**
             * Constructs a new S2C_ResetPassword.
             * @memberof PokerLife.Register
             * @classdesc Represents a S2C_ResetPassword.
             * @implements IS2C_ResetPassword
             * @constructor
             * @param {PokerLife.Register.IS2C_ResetPassword=} [p] Properties to set
             */
            function S2C_ResetPassword(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_ResetPassword result.
             * @member {boolean} result
             * @memberof PokerLife.Register.S2C_ResetPassword
             * @instance
             */
            S2C_ResetPassword.prototype.result = false;

            /**
             * Encodes the specified S2C_ResetPassword message. Does not implicitly {@link PokerLife.Register.S2C_ResetPassword.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.Register.S2C_ResetPassword
             * @static
             * @param {PokerLife.Register.IS2C_ResetPassword} m S2C_ResetPassword message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_ResetPassword.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).bool(m.result);
                return w;
            };

            /**
             * Decodes a S2C_ResetPassword message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.Register.S2C_ResetPassword
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.Register.S2C_ResetPassword} S2C_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_ResetPassword.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.Register.S2C_ResetPassword();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.result = r.bool();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: m });
                return m;
            };

            return S2C_ResetPassword;
        })();

        /**
         * SmsCodeType enum.
         * @name PokerLife.Register.SmsCodeType
         * @enum {number}
         * @property {number} Register=0 Register value
         * @property {number} Login=1 Login value
         * @property {number} ResetPassword=2 ResetPassword value
         */
        Register.SmsCodeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Register"] = 0;
            values[valuesById[1] = "Login"] = 1;
            values[valuesById[2] = "ResetPassword"] = 2;
            return values;
        })();

        return Register;
    })();

    PokerLife.UserInfo = (function() {

        /**
         * Namespace UserInfo.
         * @memberof PokerLife
         * @namespace
         */
        var UserInfo = {};

        UserInfo.C2S_GetUserInfo = (function() {

            /**
             * Properties of a C2S_GetUserInfo.
             * @memberof PokerLife.UserInfo
             * @interface IC2S_GetUserInfo
             * @property {number} uid C2S_GetUserInfo uid
             */

            /**
             * Constructs a new C2S_GetUserInfo.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a C2S_GetUserInfo.
             * @implements IC2S_GetUserInfo
             * @constructor
             * @param {PokerLife.UserInfo.IC2S_GetUserInfo=} [p] Properties to set
             */
            function C2S_GetUserInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_GetUserInfo uid.
             * @member {number} uid
             * @memberof PokerLife.UserInfo.C2S_GetUserInfo
             * @instance
             */
            C2S_GetUserInfo.prototype.uid = 0;

            /**
             * Encodes the specified C2S_GetUserInfo message. Does not implicitly {@link PokerLife.UserInfo.C2S_GetUserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.C2S_GetUserInfo
             * @static
             * @param {PokerLife.UserInfo.IC2S_GetUserInfo} m C2S_GetUserInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_GetUserInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                return w;
            };

            /**
             * Decodes a C2S_GetUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.C2S_GetUserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.C2S_GetUserInfo} C2S_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetUserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.C2S_GetUserInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.uid = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("uid"))
                    throw $util.ProtocolError("missing required 'uid'", { instance: m });
                return m;
            };

            return C2S_GetUserInfo;
        })();

        UserInfo.S2C_GetUserInfo = (function() {

            /**
             * Properties of a S2C_GetUserInfo.
             * @memberof PokerLife.UserInfo
             * @interface IS2C_GetUserInfo
             * @property {PokerLife.UserInfo.IUserInfo} userInfo S2C_GetUserInfo userInfo
             */

            /**
             * Constructs a new S2C_GetUserInfo.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a S2C_GetUserInfo.
             * @implements IS2C_GetUserInfo
             * @constructor
             * @param {PokerLife.UserInfo.IS2C_GetUserInfo=} [p] Properties to set
             */
            function S2C_GetUserInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetUserInfo userInfo.
             * @member {PokerLife.UserInfo.IUserInfo} userInfo
             * @memberof PokerLife.UserInfo.S2C_GetUserInfo
             * @instance
             */
            S2C_GetUserInfo.prototype.userInfo = null;

            /**
             * Encodes the specified S2C_GetUserInfo message. Does not implicitly {@link PokerLife.UserInfo.S2C_GetUserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.S2C_GetUserInfo
             * @static
             * @param {PokerLife.UserInfo.IS2C_GetUserInfo} m S2C_GetUserInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_GetUserInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.UserInfo.UserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a S2C_GetUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.S2C_GetUserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.S2C_GetUserInfo} S2C_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetUserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.S2C_GetUserInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.userInfo = $root.PokerLife.UserInfo.UserInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("userInfo"))
                    throw $util.ProtocolError("missing required 'userInfo'", { instance: m });
                return m;
            };

            return S2C_GetUserInfo;
        })();

        UserInfo.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof PokerLife.UserInfo
             * @interface IUserInfo
             * @property {number} uid UserInfo uid
             * @property {PokerLife.UserInfo.IUserBaseInfo} userBaseInfo UserInfo userBaseInfo
             * @property {PokerLife.UserInfo.IUserAssets} userAssets UserInfo userAssets
             * @property {PokerLife.UserInfo.IUserAccountInfo} userAccountInfo UserInfo userAccountInfo
             */

            /**
             * Constructs a new UserInfo.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {PokerLife.UserInfo.IUserInfo=} [p] Properties to set
             */
            function UserInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserInfo uid.
             * @member {number} uid
             * @memberof PokerLife.UserInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.uid = 0;

            /**
             * UserInfo userBaseInfo.
             * @member {PokerLife.UserInfo.IUserBaseInfo} userBaseInfo
             * @memberof PokerLife.UserInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.userBaseInfo = null;

            /**
             * UserInfo userAssets.
             * @member {PokerLife.UserInfo.IUserAssets} userAssets
             * @memberof PokerLife.UserInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.userAssets = null;

            /**
             * UserInfo userAccountInfo.
             * @member {PokerLife.UserInfo.IUserAccountInfo} userAccountInfo
             * @memberof PokerLife.UserInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.userAccountInfo = null;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link PokerLife.UserInfo.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.UserInfo
             * @static
             * @param {PokerLife.UserInfo.IUserInfo} m UserInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                $root.PokerLife.UserInfo.UserBaseInfo.encode(m.userBaseInfo, w.uint32(18).fork()).ldelim();
                $root.PokerLife.UserInfo.UserAssets.encode(m.userAssets, w.uint32(26).fork()).ldelim();
                $root.PokerLife.UserInfo.UserAccountInfo.encode(m.userAccountInfo, w.uint32(34).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.UserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.UserInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.uid = r.int32();
                        break;
                    case 2:
                        m.userBaseInfo = $root.PokerLife.UserInfo.UserBaseInfo.decode(r, r.uint32());
                        break;
                    case 3:
                        m.userAssets = $root.PokerLife.UserInfo.UserAssets.decode(r, r.uint32());
                        break;
                    case 4:
                        m.userAccountInfo = $root.PokerLife.UserInfo.UserAccountInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("uid"))
                    throw $util.ProtocolError("missing required 'uid'", { instance: m });
                if (!m.hasOwnProperty("userBaseInfo"))
                    throw $util.ProtocolError("missing required 'userBaseInfo'", { instance: m });
                if (!m.hasOwnProperty("userAssets"))
                    throw $util.ProtocolError("missing required 'userAssets'", { instance: m });
                if (!m.hasOwnProperty("userAccountInfo"))
                    throw $util.ProtocolError("missing required 'userAccountInfo'", { instance: m });
                return m;
            };

            return UserInfo;
        })();

        UserInfo.UserBaseInfo = (function() {

            /**
             * Properties of a UserBaseInfo.
             * @memberof PokerLife.UserInfo
             * @interface IUserBaseInfo
             * @property {string} nickName UserBaseInfo nickName
             * @property {string} phoneNum UserBaseInfo phoneNum
             * @property {string} head UserBaseInfo head
             */

            /**
             * Constructs a new UserBaseInfo.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a UserBaseInfo.
             * @implements IUserBaseInfo
             * @constructor
             * @param {PokerLife.UserInfo.IUserBaseInfo=} [p] Properties to set
             */
            function UserBaseInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserBaseInfo nickName.
             * @member {string} nickName
             * @memberof PokerLife.UserInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.nickName = "";

            /**
             * UserBaseInfo phoneNum.
             * @member {string} phoneNum
             * @memberof PokerLife.UserInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.phoneNum = "";

            /**
             * UserBaseInfo head.
             * @member {string} head
             * @memberof PokerLife.UserInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.head = "";

            /**
             * Encodes the specified UserBaseInfo message. Does not implicitly {@link PokerLife.UserInfo.UserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.UserBaseInfo
             * @static
             * @param {PokerLife.UserInfo.IUserBaseInfo} m UserBaseInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            UserBaseInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(10).string(m.nickName);
                w.uint32(18).string(m.phoneNum);
                w.uint32(26).string(m.head);
                return w;
            };

            /**
             * Decodes a UserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.UserBaseInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.UserBaseInfo} UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.UserBaseInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.nickName = r.string();
                        break;
                    case 2:
                        m.phoneNum = r.string();
                        break;
                    case 3:
                        m.head = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("nickName"))
                    throw $util.ProtocolError("missing required 'nickName'", { instance: m });
                if (!m.hasOwnProperty("phoneNum"))
                    throw $util.ProtocolError("missing required 'phoneNum'", { instance: m });
                if (!m.hasOwnProperty("head"))
                    throw $util.ProtocolError("missing required 'head'", { instance: m });
                return m;
            };

            return UserBaseInfo;
        })();

        UserInfo.UserAssets = (function() {

            /**
             * Properties of a UserAssets.
             * @memberof PokerLife.UserInfo
             * @interface IUserAssets
             * @property {number} coin UserAssets coin
             * @property {number} diamond UserAssets diamond
             * @property {number} clubPoint UserAssets clubPoint
             * @property {number} unionCoin UserAssets unionCoin
             */

            /**
             * Constructs a new UserAssets.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a UserAssets.
             * @implements IUserAssets
             * @constructor
             * @param {PokerLife.UserInfo.IUserAssets=} [p] Properties to set
             */
            function UserAssets(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserAssets coin.
             * @member {number} coin
             * @memberof PokerLife.UserInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets diamond.
             * @member {number} diamond
             * @memberof PokerLife.UserInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets clubPoint.
             * @member {number} clubPoint
             * @memberof PokerLife.UserInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.clubPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets unionCoin.
             * @member {number} unionCoin
             * @memberof PokerLife.UserInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.unionCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified UserAssets message. Does not implicitly {@link PokerLife.UserInfo.UserAssets.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.UserAssets
             * @static
             * @param {PokerLife.UserInfo.IUserAssets} m UserAssets message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            UserAssets.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int64(m.coin);
                w.uint32(16).int64(m.diamond);
                w.uint32(24).int64(m.clubPoint);
                w.uint32(32).int64(m.unionCoin);
                return w;
            };

            /**
             * Decodes a UserAssets message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.UserAssets
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.UserAssets} UserAssets
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserAssets.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.UserAssets();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.coin = r.int64();
                        break;
                    case 2:
                        m.diamond = r.int64();
                        break;
                    case 3:
                        m.clubPoint = r.int64();
                        break;
                    case 4:
                        m.unionCoin = r.int64();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("coin"))
                    throw $util.ProtocolError("missing required 'coin'", { instance: m });
                if (!m.hasOwnProperty("diamond"))
                    throw $util.ProtocolError("missing required 'diamond'", { instance: m });
                if (!m.hasOwnProperty("clubPoint"))
                    throw $util.ProtocolError("missing required 'clubPoint'", { instance: m });
                if (!m.hasOwnProperty("unionCoin"))
                    throw $util.ProtocolError("missing required 'unionCoin'", { instance: m });
                return m;
            };

            return UserAssets;
        })();

        UserInfo.UserAccountInfo = (function() {

            /**
             * Properties of a UserAccountInfo.
             * @memberof PokerLife.UserInfo
             * @interface IUserAccountInfo
             * @property {PokerLife.UserInfo.AccountLevel} accountLevel UserAccountInfo accountLevel
             * @property {PokerLife.UserInfo.AccountStauts} accountStatus UserAccountInfo accountStatus
             */

            /**
             * Constructs a new UserAccountInfo.
             * @memberof PokerLife.UserInfo
             * @classdesc Represents a UserAccountInfo.
             * @implements IUserAccountInfo
             * @constructor
             * @param {PokerLife.UserInfo.IUserAccountInfo=} [p] Properties to set
             */
            function UserAccountInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserAccountInfo accountLevel.
             * @member {PokerLife.UserInfo.AccountLevel} accountLevel
             * @memberof PokerLife.UserInfo.UserAccountInfo
             * @instance
             */
            UserAccountInfo.prototype.accountLevel = 0;

            /**
             * UserAccountInfo accountStatus.
             * @member {PokerLife.UserInfo.AccountStauts} accountStatus
             * @memberof PokerLife.UserInfo.UserAccountInfo
             * @instance
             */
            UserAccountInfo.prototype.accountStatus = 0;

            /**
             * Encodes the specified UserAccountInfo message. Does not implicitly {@link PokerLife.UserInfo.UserAccountInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.UserInfo.UserAccountInfo
             * @static
             * @param {PokerLife.UserInfo.IUserAccountInfo} m UserAccountInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            UserAccountInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.accountLevel);
                w.uint32(16).int32(m.accountStatus);
                return w;
            };

            /**
             * Decodes a UserAccountInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.UserInfo.UserAccountInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.UserInfo.UserAccountInfo} UserAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserAccountInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.UserInfo.UserAccountInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.accountLevel = r.int32();
                        break;
                    case 2:
                        m.accountStatus = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("accountLevel"))
                    throw $util.ProtocolError("missing required 'accountLevel'", { instance: m });
                if (!m.hasOwnProperty("accountStatus"))
                    throw $util.ProtocolError("missing required 'accountStatus'", { instance: m });
                return m;
            };

            return UserAccountInfo;
        })();

        /**
         * AccountLevel enum.
         * @name PokerLife.UserInfo.AccountLevel
         * @enum {number}
         * @property {number} Normal=0 Normal value
         * @property {number} Agent=1 Agent value
         * @property {number} Boss=2 Boss value
         */
        UserInfo.AccountLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Normal"] = 0;
            values[valuesById[1] = "Agent"] = 1;
            values[valuesById[2] = "Boss"] = 2;
            return values;
        })();

        /**
         * AccountStauts enum.
         * @name PokerLife.UserInfo.AccountStauts
         * @enum {number}
         * @property {number} Normal=0 Normal value
         * @property {number} Frozen=1 Frozen value
         */
        UserInfo.AccountStauts = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Normal"] = 0;
            values[valuesById[1] = "Frozen"] = 1;
            return values;
        })();

        return UserInfo;
    })();

    return PokerLife;
})();