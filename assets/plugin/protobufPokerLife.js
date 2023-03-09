// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

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
 * AccountStatus enum.
 * @exports AccountStatus
 * @enum {number}
 * @property {number} AccountStatus_Normal=0 AccountStatus_Normal value
 * @property {number} AccountStatus_Frozen=1 AccountStatus_Frozen value
 */
$root.AccountStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AccountStatus_Normal"] = 0;
    values[valuesById[1] = "AccountStatus_Frozen"] = 1;
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

$root.C2SHeartbeatPing = (function() {

    /**
     * Properties of a C2SHeartbeatPing.
     * @exports IC2SHeartbeatPing
     * @interface IC2SHeartbeatPing
     */

    /**
     * Constructs a new C2SHeartbeatPing.
     * @exports C2SHeartbeatPing
     * @classdesc Represents a C2SHeartbeatPing.
     * @implements IC2SHeartbeatPing
     * @constructor
     * @param {IC2SHeartbeatPing=} [p] Properties to set
     */
    function C2SHeartbeatPing(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SHeartbeatPing message. Does not implicitly {@link C2SHeartbeatPing.verify|verify} messages.
     * @function encode
     * @memberof C2SHeartbeatPing
     * @static
     * @param {IC2SHeartbeatPing} m C2SHeartbeatPing message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SHeartbeatPing.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SHeartbeatPing message from the specified reader or buffer.
     * @function decode
     * @memberof C2SHeartbeatPing
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SHeartbeatPing} C2SHeartbeatPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SHeartbeatPing.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SHeartbeatPing();
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

    return C2SHeartbeatPing;
})();

$root.S2CHeartbeatPong = (function() {

    /**
     * Properties of a S2CHeartbeatPong.
     * @exports IS2CHeartbeatPong
     * @interface IS2CHeartbeatPong
     */

    /**
     * Constructs a new S2CHeartbeatPong.
     * @exports S2CHeartbeatPong
     * @classdesc Represents a S2CHeartbeatPong.
     * @implements IS2CHeartbeatPong
     * @constructor
     * @param {IS2CHeartbeatPong=} [p] Properties to set
     */
    function S2CHeartbeatPong(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified S2CHeartbeatPong message. Does not implicitly {@link S2CHeartbeatPong.verify|verify} messages.
     * @function encode
     * @memberof S2CHeartbeatPong
     * @static
     * @param {IS2CHeartbeatPong} m S2CHeartbeatPong message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CHeartbeatPong.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a S2CHeartbeatPong message from the specified reader or buffer.
     * @function decode
     * @memberof S2CHeartbeatPong
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CHeartbeatPong} S2CHeartbeatPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CHeartbeatPong.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CHeartbeatPong();
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

    return S2CHeartbeatPong;
})();

$root.S2CKick = (function() {

    /**
     * Properties of a S2CKick.
     * @exports IS2CKick
     * @interface IS2CKick
     * @property {ICommonResult|null} [result] S2CKick result
     */

    /**
     * Constructs a new S2CKick.
     * @exports S2CKick
     * @classdesc Represents a S2CKick.
     * @implements IS2CKick
     * @constructor
     * @param {IS2CKick=} [p] Properties to set
     */
    function S2CKick(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CKick result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CKick
     * @instance
     */
    S2CKick.prototype.result = null;

    /**
     * Encodes the specified S2CKick message. Does not implicitly {@link S2CKick.verify|verify} messages.
     * @function encode
     * @memberof S2CKick
     * @static
     * @param {IS2CKick} m S2CKick message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CKick.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CKick message from the specified reader or buffer.
     * @function decode
     * @memberof S2CKick
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CKick} S2CKick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CKick.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CKick();
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

    return S2CKick;
})();

$root.UserInfo = (function() {

    /**
     * Properties of a UserInfo.
     * @exports IUserInfo
     * @interface IUserInfo
     * @property {string|null} [uid] UserInfo uid
     * @property {string|null} [nickName] UserInfo nickName
     * @property {string|null} [head] UserInfo head
     * @property {number|null} [coin] UserInfo coin
     * @property {number|null} [diamond] UserInfo diamond
     * @property {AccountLevel|null} [accountLevel] UserInfo accountLevel
     * @property {AccountStatus|null} [accountStatus] UserInfo accountStatus
     */

    /**
     * Constructs a new UserInfo.
     * @exports UserInfo
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {IUserInfo=} [p] Properties to set
     */
    function UserInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * UserInfo uid.
     * @member {string} uid
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.uid = "";

    /**
     * UserInfo nickName.
     * @member {string} nickName
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.nickName = "";

    /**
     * UserInfo head.
     * @member {string} head
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.head = "";

    /**
     * UserInfo coin.
     * @member {number} coin
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo diamond.
     * @member {number} diamond
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInfo accountLevel.
     * @member {AccountLevel} accountLevel
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.accountLevel = 0;

    /**
     * UserInfo accountStatus.
     * @member {AccountStatus} accountStatus
     * @memberof UserInfo
     * @instance
     */
    UserInfo.prototype.accountStatus = 0;

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link UserInfo.verify|verify} messages.
     * @function encode
     * @memberof UserInfo
     * @static
     * @param {IUserInfo} m UserInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(18).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(26).string(m.head);
        if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
            w.uint32(32).int64(m.coin);
        if (m.diamond != null && Object.hasOwnProperty.call(m, "diamond"))
            w.uint32(40).int64(m.diamond);
        if (m.accountLevel != null && Object.hasOwnProperty.call(m, "accountLevel"))
            w.uint32(48).int32(m.accountLevel);
        if (m.accountStatus != null && Object.hasOwnProperty.call(m, "accountStatus"))
            w.uint32(56).int32(m.accountStatus);
        return w;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof UserInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UserInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.nickName = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.coin = r.int64();
                break;
            case 5:
                m.diamond = r.int64();
                break;
            case 6:
                m.accountLevel = r.int32();
                break;
            case 7:
                m.accountStatus = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return UserInfo;
})();

$root.C2STexasCowboyEnterGame = (function() {

    /**
     * Properties of a C2STexasCowboyEnterGame.
     * @exports IC2STexasCowboyEnterGame
     * @interface IC2STexasCowboyEnterGame
     * @property {string|null} [gameId] C2STexasCowboyEnterGame gameId
     */

    /**
     * Constructs a new C2STexasCowboyEnterGame.
     * @exports C2STexasCowboyEnterGame
     * @classdesc Represents a C2STexasCowboyEnterGame.
     * @implements IC2STexasCowboyEnterGame
     * @constructor
     * @param {IC2STexasCowboyEnterGame=} [p] Properties to set
     */
    function C2STexasCowboyEnterGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyEnterGame gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyEnterGame
     * @instance
     */
    C2STexasCowboyEnterGame.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCowboyEnterGame message. Does not implicitly {@link C2STexasCowboyEnterGame.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyEnterGame
     * @static
     * @param {IC2STexasCowboyEnterGame} m C2STexasCowboyEnterGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyEnterGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyEnterGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyEnterGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyEnterGame} C2STexasCowboyEnterGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyEnterGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyEnterGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyEnterGame;
})();

$root.C2STexasCowboyExitGame = (function() {

    /**
     * Properties of a C2STexasCowboyExitGame.
     * @exports IC2STexasCowboyExitGame
     * @interface IC2STexasCowboyExitGame
     * @property {string|null} [gameId] C2STexasCowboyExitGame gameId
     */

    /**
     * Constructs a new C2STexasCowboyExitGame.
     * @exports C2STexasCowboyExitGame
     * @classdesc Represents a C2STexasCowboyExitGame.
     * @implements IC2STexasCowboyExitGame
     * @constructor
     * @param {IC2STexasCowboyExitGame=} [p] Properties to set
     */
    function C2STexasCowboyExitGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyExitGame gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyExitGame
     * @instance
     */
    C2STexasCowboyExitGame.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCowboyExitGame message. Does not implicitly {@link C2STexasCowboyExitGame.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyExitGame
     * @static
     * @param {IC2STexasCowboyExitGame} m C2STexasCowboyExitGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyExitGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyExitGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyExitGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyExitGame} C2STexasCowboyExitGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyExitGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyExitGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyExitGame;
})();

$root.C2STexasCowboyBet = (function() {

    /**
     * Properties of a C2STexasCowboyBet.
     * @exports IC2STexasCowboyBet
     * @interface IC2STexasCowboyBet
     * @property {string|null} [gameId] C2STexasCowboyBet gameId
     * @property {ICowboySingleBet|null} [betInfo] C2STexasCowboyBet betInfo
     */

    /**
     * Constructs a new C2STexasCowboyBet.
     * @exports C2STexasCowboyBet
     * @classdesc Represents a C2STexasCowboyBet.
     * @implements IC2STexasCowboyBet
     * @constructor
     * @param {IC2STexasCowboyBet=} [p] Properties to set
     */
    function C2STexasCowboyBet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyBet gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyBet
     * @instance
     */
    C2STexasCowboyBet.prototype.gameId = "";

    /**
     * C2STexasCowboyBet betInfo.
     * @member {ICowboySingleBet|null|undefined} betInfo
     * @memberof C2STexasCowboyBet
     * @instance
     */
    C2STexasCowboyBet.prototype.betInfo = null;

    /**
     * Encodes the specified C2STexasCowboyBet message. Does not implicitly {@link C2STexasCowboyBet.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyBet
     * @static
     * @param {IC2STexasCowboyBet} m C2STexasCowboyBet message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.betInfo != null && Object.hasOwnProperty.call(m, "betInfo"))
            $root.CowboySingleBet.encode(m.betInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a C2STexasCowboyBet message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyBet
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyBet} C2STexasCowboyBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyBet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.betInfo = $root.CowboySingleBet.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyBet;
})();

$root.C2STexasCowboyRecord = (function() {

    /**
     * Properties of a C2STexasCowboyRecord.
     * @exports IC2STexasCowboyRecord
     * @interface IC2STexasCowboyRecord
     * @property {string|null} [gameId] C2STexasCowboyRecord gameId
     * @property {number|null} [whichGame] C2STexasCowboyRecord whichGame
     */

    /**
     * Constructs a new C2STexasCowboyRecord.
     * @exports C2STexasCowboyRecord
     * @classdesc Represents a C2STexasCowboyRecord.
     * @implements IC2STexasCowboyRecord
     * @constructor
     * @param {IC2STexasCowboyRecord=} [p] Properties to set
     */
    function C2STexasCowboyRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyRecord gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyRecord
     * @instance
     */
    C2STexasCowboyRecord.prototype.gameId = "";

    /**
     * C2STexasCowboyRecord whichGame.
     * @member {number} whichGame
     * @memberof C2STexasCowboyRecord
     * @instance
     */
    C2STexasCowboyRecord.prototype.whichGame = 0;

    /**
     * Encodes the specified C2STexasCowboyRecord message. Does not implicitly {@link C2STexasCowboyRecord.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyRecord
     * @static
     * @param {IC2STexasCowboyRecord} m C2STexasCowboyRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.whichGame != null && Object.hasOwnProperty.call(m, "whichGame"))
            w.uint32(16).int32(m.whichGame);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyRecord message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyRecord} C2STexasCowboyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.whichGame = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyRecord;
})();

$root.C2STexasCowboyBringIn = (function() {

    /**
     * Properties of a C2STexasCowboyBringIn.
     * @exports IC2STexasCowboyBringIn
     * @interface IC2STexasCowboyBringIn
     * @property {string|null} [gameId] C2STexasCowboyBringIn gameId
     * @property {number|null} [amount] C2STexasCowboyBringIn amount
     */

    /**
     * Constructs a new C2STexasCowboyBringIn.
     * @exports C2STexasCowboyBringIn
     * @classdesc Represents a C2STexasCowboyBringIn.
     * @implements IC2STexasCowboyBringIn
     * @constructor
     * @param {IC2STexasCowboyBringIn=} [p] Properties to set
     */
    function C2STexasCowboyBringIn(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyBringIn gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyBringIn
     * @instance
     */
    C2STexasCowboyBringIn.prototype.gameId = "";

    /**
     * C2STexasCowboyBringIn amount.
     * @member {number} amount
     * @memberof C2STexasCowboyBringIn
     * @instance
     */
    C2STexasCowboyBringIn.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified C2STexasCowboyBringIn message. Does not implicitly {@link C2STexasCowboyBringIn.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyBringIn
     * @static
     * @param {IC2STexasCowboyBringIn} m C2STexasCowboyBringIn message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyBringIn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(16).int64(m.amount);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyBringIn message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyBringIn
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyBringIn} C2STexasCowboyBringIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyBringIn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyBringIn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyBringIn;
})();

$root.C2STexasCowboyBringOut = (function() {

    /**
     * Properties of a C2STexasCowboyBringOut.
     * @exports IC2STexasCowboyBringOut
     * @interface IC2STexasCowboyBringOut
     * @property {string|null} [gameId] C2STexasCowboyBringOut gameId
     * @property {number|null} [amount] C2STexasCowboyBringOut amount
     */

    /**
     * Constructs a new C2STexasCowboyBringOut.
     * @exports C2STexasCowboyBringOut
     * @classdesc Represents a C2STexasCowboyBringOut.
     * @implements IC2STexasCowboyBringOut
     * @constructor
     * @param {IC2STexasCowboyBringOut=} [p] Properties to set
     */
    function C2STexasCowboyBringOut(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyBringOut gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyBringOut
     * @instance
     */
    C2STexasCowboyBringOut.prototype.gameId = "";

    /**
     * C2STexasCowboyBringOut amount.
     * @member {number} amount
     * @memberof C2STexasCowboyBringOut
     * @instance
     */
    C2STexasCowboyBringOut.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified C2STexasCowboyBringOut message. Does not implicitly {@link C2STexasCowboyBringOut.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyBringOut
     * @static
     * @param {IC2STexasCowboyBringOut} m C2STexasCowboyBringOut message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyBringOut.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(16).int64(m.amount);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyBringOut message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyBringOut
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyBringOut} C2STexasCowboyBringOut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyBringOut.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyBringOut();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyBringOut;
})();

$root.C2STexasCowboyTotalHistory = (function() {

    /**
     * Properties of a C2STexasCowboyTotalHistory.
     * @exports IC2STexasCowboyTotalHistory
     * @interface IC2STexasCowboyTotalHistory
     * @property {string|null} [gameId] C2STexasCowboyTotalHistory gameId
     */

    /**
     * Constructs a new C2STexasCowboyTotalHistory.
     * @exports C2STexasCowboyTotalHistory
     * @classdesc Represents a C2STexasCowboyTotalHistory.
     * @implements IC2STexasCowboyTotalHistory
     * @constructor
     * @param {IC2STexasCowboyTotalHistory=} [p] Properties to set
     */
    function C2STexasCowboyTotalHistory(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCowboyTotalHistory gameId.
     * @member {string} gameId
     * @memberof C2STexasCowboyTotalHistory
     * @instance
     */
    C2STexasCowboyTotalHistory.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCowboyTotalHistory message. Does not implicitly {@link C2STexasCowboyTotalHistory.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCowboyTotalHistory
     * @static
     * @param {IC2STexasCowboyTotalHistory} m C2STexasCowboyTotalHistory message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCowboyTotalHistory.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCowboyTotalHistory message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCowboyTotalHistory
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCowboyTotalHistory} C2STexasCowboyTotalHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCowboyTotalHistory.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCowboyTotalHistory();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCowboyTotalHistory;
})();

/**
 * CowboyAreaType enum.
 * @exports CowboyAreaType
 * @enum {number}
 * @property {number} CowboyAreaType_0=0 CowboyAreaType_0 value
 * @property {number} CowboyAreaType_1=1 CowboyAreaType_1 value
 * @property {number} CowboyAreaType_2=2 CowboyAreaType_2 value
 * @property {number} CowboyAreaType_3=3 CowboyAreaType_3 value
 * @property {number} CowboyAreaType_4=4 CowboyAreaType_4 value
 * @property {number} CowboyAreaType_5=5 CowboyAreaType_5 value
 * @property {number} CowboyAreaType_6=6 CowboyAreaType_6 value
 * @property {number} CowboyAreaType_7=7 CowboyAreaType_7 value
 * @property {number} CowboyAreaType_8=8 CowboyAreaType_8 value
 * @property {number} CowboyAreaType_9=9 CowboyAreaType_9 value
 * @property {number} CowboyAreaType_10=10 CowboyAreaType_10 value
 */
$root.CowboyAreaType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CowboyAreaType_0"] = 0;
    values[valuesById[1] = "CowboyAreaType_1"] = 1;
    values[valuesById[2] = "CowboyAreaType_2"] = 2;
    values[valuesById[3] = "CowboyAreaType_3"] = 3;
    values[valuesById[4] = "CowboyAreaType_4"] = 4;
    values[valuesById[5] = "CowboyAreaType_5"] = 5;
    values[valuesById[6] = "CowboyAreaType_6"] = 6;
    values[valuesById[7] = "CowboyAreaType_7"] = 7;
    values[valuesById[8] = "CowboyAreaType_8"] = 8;
    values[valuesById[9] = "CowboyAreaType_9"] = 9;
    values[valuesById[10] = "CowboyAreaType_10"] = 10;
    return values;
})();

/**
 * CowboyPhase enum.
 * @exports CowboyPhase
 * @enum {number}
 * @property {number} CowBoyPhase_Start=0 CowBoyPhase_Start value
 * @property {number} CowBoyPhase_Settlement=1 CowBoyPhase_Settlement value
 */
$root.CowboyPhase = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CowBoyPhase_Start"] = 0;
    values[valuesById[1] = "CowBoyPhase_Settlement"] = 1;
    return values;
})();

$root.CowboyAreaInfo = (function() {

    /**
     * Properties of a CowboyAreaInfo.
     * @exports ICowboyAreaInfo
     * @interface ICowboyAreaInfo
     * @property {CowboyAreaType|null} [cowboyAreaType] CowboyAreaInfo cowboyAreaType
     * @property {number|null} [totalBetNum] CowboyAreaInfo totalBetNum
     */

    /**
     * Constructs a new CowboyAreaInfo.
     * @exports CowboyAreaInfo
     * @classdesc Represents a CowboyAreaInfo.
     * @implements ICowboyAreaInfo
     * @constructor
     * @param {ICowboyAreaInfo=} [p] Properties to set
     */
    function CowboyAreaInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboyAreaInfo cowboyAreaType.
     * @member {CowboyAreaType} cowboyAreaType
     * @memberof CowboyAreaInfo
     * @instance
     */
    CowboyAreaInfo.prototype.cowboyAreaType = 0;

    /**
     * CowboyAreaInfo totalBetNum.
     * @member {number} totalBetNum
     * @memberof CowboyAreaInfo
     * @instance
     */
    CowboyAreaInfo.prototype.totalBetNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CowboyAreaInfo message. Does not implicitly {@link CowboyAreaInfo.verify|verify} messages.
     * @function encode
     * @memberof CowboyAreaInfo
     * @static
     * @param {ICowboyAreaInfo} m CowboyAreaInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboyAreaInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cowboyAreaType != null && Object.hasOwnProperty.call(m, "cowboyAreaType"))
            w.uint32(8).int32(m.cowboyAreaType);
        if (m.totalBetNum != null && Object.hasOwnProperty.call(m, "totalBetNum"))
            w.uint32(16).int64(m.totalBetNum);
        return w;
    };

    /**
     * Decodes a CowboyAreaInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CowboyAreaInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboyAreaInfo} CowboyAreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboyAreaInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboyAreaInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cowboyAreaType = r.int32();
                break;
            case 2:
                m.totalBetNum = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyAreaInfo;
})();

$root.CowboySingleBet = (function() {

    /**
     * Properties of a CowboySingleBet.
     * @exports ICowboySingleBet
     * @interface ICowboySingleBet
     * @property {string|null} [actionId] CowboySingleBet actionId
     * @property {number|null} [amount] CowboySingleBet amount
     * @property {CowboyAreaType|null} [betArea] CowboySingleBet betArea
     */

    /**
     * Constructs a new CowboySingleBet.
     * @exports CowboySingleBet
     * @classdesc Represents a CowboySingleBet.
     * @implements ICowboySingleBet
     * @constructor
     * @param {ICowboySingleBet=} [p] Properties to set
     */
    function CowboySingleBet(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboySingleBet actionId.
     * @member {string} actionId
     * @memberof CowboySingleBet
     * @instance
     */
    CowboySingleBet.prototype.actionId = "";

    /**
     * CowboySingleBet amount.
     * @member {number} amount
     * @memberof CowboySingleBet
     * @instance
     */
    CowboySingleBet.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CowboySingleBet betArea.
     * @member {CowboyAreaType} betArea
     * @memberof CowboySingleBet
     * @instance
     */
    CowboySingleBet.prototype.betArea = 0;

    /**
     * Encodes the specified CowboySingleBet message. Does not implicitly {@link CowboySingleBet.verify|verify} messages.
     * @function encode
     * @memberof CowboySingleBet
     * @static
     * @param {ICowboySingleBet} m CowboySingleBet message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboySingleBet.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.actionId != null && Object.hasOwnProperty.call(m, "actionId"))
            w.uint32(10).string(m.actionId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(16).int64(m.amount);
        if (m.betArea != null && Object.hasOwnProperty.call(m, "betArea"))
            w.uint32(24).int32(m.betArea);
        return w;
    };

    /**
     * Decodes a CowboySingleBet message from the specified reader or buffer.
     * @function decode
     * @memberof CowboySingleBet
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboySingleBet} CowboySingleBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboySingleBet.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboySingleBet();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.actionId = r.string();
                break;
            case 2:
                m.amount = r.int64();
                break;
            case 3:
                m.betArea = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboySingleBet;
})();

$root.CowboyHistory = (function() {

    /**
     * Properties of a CowboyHistory.
     * @exports ICowboyHistory
     * @interface ICowboyHistory
     * @property {CowboyAreaType|null} [cowboyAreaType] CowboyHistory cowboyAreaType
     * @property {Array.<boolean>|null} [result] CowboyHistory result
     */

    /**
     * Constructs a new CowboyHistory.
     * @exports CowboyHistory
     * @classdesc Represents a CowboyHistory.
     * @implements ICowboyHistory
     * @constructor
     * @param {ICowboyHistory=} [p] Properties to set
     */
    function CowboyHistory(p) {
        this.result = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboyHistory cowboyAreaType.
     * @member {CowboyAreaType} cowboyAreaType
     * @memberof CowboyHistory
     * @instance
     */
    CowboyHistory.prototype.cowboyAreaType = 0;

    /**
     * CowboyHistory result.
     * @member {Array.<boolean>} result
     * @memberof CowboyHistory
     * @instance
     */
    CowboyHistory.prototype.result = $util.emptyArray;

    /**
     * Encodes the specified CowboyHistory message. Does not implicitly {@link CowboyHistory.verify|verify} messages.
     * @function encode
     * @memberof CowboyHistory
     * @static
     * @param {ICowboyHistory} m CowboyHistory message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboyHistory.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cowboyAreaType != null && Object.hasOwnProperty.call(m, "cowboyAreaType"))
            w.uint32(8).int32(m.cowboyAreaType);
        if (m.result != null && m.result.length) {
            w.uint32(18).fork();
            for (var i = 0; i < m.result.length; ++i)
                w.bool(m.result[i]);
            w.ldelim();
        }
        return w;
    };

    /**
     * Decodes a CowboyHistory message from the specified reader or buffer.
     * @function decode
     * @memberof CowboyHistory
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboyHistory} CowboyHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboyHistory.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboyHistory();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cowboyAreaType = r.int32();
                break;
            case 2:
                if (!(m.result && m.result.length))
                    m.result = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.result.push(r.bool());
                } else
                    m.result.push(r.bool());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyHistory;
})();

$root.CowboyTotalHistory = (function() {

    /**
     * Properties of a CowboyTotalHistory.
     * @exports ICowboyTotalHistory
     * @interface ICowboyTotalHistory
     * @property {CowboyAreaType|null} [cowboyAreaType] CowboyTotalHistory cowboyAreaType
     * @property {number|null} [count] CowboyTotalHistory count
     */

    /**
     * Constructs a new CowboyTotalHistory.
     * @exports CowboyTotalHistory
     * @classdesc Represents a CowboyTotalHistory.
     * @implements ICowboyTotalHistory
     * @constructor
     * @param {ICowboyTotalHistory=} [p] Properties to set
     */
    function CowboyTotalHistory(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboyTotalHistory cowboyAreaType.
     * @member {CowboyAreaType} cowboyAreaType
     * @memberof CowboyTotalHistory
     * @instance
     */
    CowboyTotalHistory.prototype.cowboyAreaType = 0;

    /**
     * CowboyTotalHistory count.
     * @member {number} count
     * @memberof CowboyTotalHistory
     * @instance
     */
    CowboyTotalHistory.prototype.count = 0;

    /**
     * Encodes the specified CowboyTotalHistory message. Does not implicitly {@link CowboyTotalHistory.verify|verify} messages.
     * @function encode
     * @memberof CowboyTotalHistory
     * @static
     * @param {ICowboyTotalHistory} m CowboyTotalHistory message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboyTotalHistory.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cowboyAreaType != null && Object.hasOwnProperty.call(m, "cowboyAreaType"))
            w.uint32(8).int32(m.cowboyAreaType);
        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
            w.uint32(16).int32(m.count);
        return w;
    };

    /**
     * Decodes a CowboyTotalHistory message from the specified reader or buffer.
     * @function decode
     * @memberof CowboyTotalHistory
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboyTotalHistory} CowboyTotalHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboyTotalHistory.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboyTotalHistory();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.cowboyAreaType = r.int32();
                break;
            case 2:
                m.count = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyTotalHistory;
})();

$root.CowboyRecord = (function() {

    /**
     * Properties of a CowboyRecord.
     * @exports ICowboyRecord
     * @interface ICowboyRecord
     * @property {Array.<CowboyAreaType>|null} [cowboyAreaType] CowboyRecord cowboyAreaType
     * @property {Array.<number>|null} [areaWinLose] CowboyRecord areaWinLose
     * @property {Array.<number>|null} [betAmount] CowboyRecord betAmount
     * @property {Array.<ICardInfo>|null} [boyCards] CowboyRecord boyCards
     * @property {Array.<ICardInfo>|null} [girlCards] CowboyRecord girlCards
     * @property {Array.<ICardInfo>|null} [publicCards] CowboyRecord publicCards
     * @property {string|null} [gameCode] CowboyRecord gameCode
     */

    /**
     * Constructs a new CowboyRecord.
     * @exports CowboyRecord
     * @classdesc Represents a CowboyRecord.
     * @implements ICowboyRecord
     * @constructor
     * @param {ICowboyRecord=} [p] Properties to set
     */
    function CowboyRecord(p) {
        this.cowboyAreaType = [];
        this.areaWinLose = [];
        this.betAmount = [];
        this.boyCards = [];
        this.girlCards = [];
        this.publicCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboyRecord cowboyAreaType.
     * @member {Array.<CowboyAreaType>} cowboyAreaType
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.cowboyAreaType = $util.emptyArray;

    /**
     * CowboyRecord areaWinLose.
     * @member {Array.<number>} areaWinLose
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.areaWinLose = $util.emptyArray;

    /**
     * CowboyRecord betAmount.
     * @member {Array.<number>} betAmount
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.betAmount = $util.emptyArray;

    /**
     * CowboyRecord boyCards.
     * @member {Array.<ICardInfo>} boyCards
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.boyCards = $util.emptyArray;

    /**
     * CowboyRecord girlCards.
     * @member {Array.<ICardInfo>} girlCards
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.girlCards = $util.emptyArray;

    /**
     * CowboyRecord publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.publicCards = $util.emptyArray;

    /**
     * CowboyRecord gameCode.
     * @member {string} gameCode
     * @memberof CowboyRecord
     * @instance
     */
    CowboyRecord.prototype.gameCode = "";

    /**
     * Encodes the specified CowboyRecord message. Does not implicitly {@link CowboyRecord.verify|verify} messages.
     * @function encode
     * @memberof CowboyRecord
     * @static
     * @param {ICowboyRecord} m CowboyRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboyRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cowboyAreaType != null && m.cowboyAreaType.length) {
            w.uint32(10).fork();
            for (var i = 0; i < m.cowboyAreaType.length; ++i)
                w.int32(m.cowboyAreaType[i]);
            w.ldelim();
        }
        if (m.areaWinLose != null && m.areaWinLose.length) {
            w.uint32(18).fork();
            for (var i = 0; i < m.areaWinLose.length; ++i)
                w.int64(m.areaWinLose[i]);
            w.ldelim();
        }
        if (m.betAmount != null && m.betAmount.length) {
            w.uint32(26).fork();
            for (var i = 0; i < m.betAmount.length; ++i)
                w.int64(m.betAmount[i]);
            w.ldelim();
        }
        if (m.boyCards != null && m.boyCards.length) {
            for (var i = 0; i < m.boyCards.length; ++i)
                $root.CardInfo.encode(m.boyCards[i], w.uint32(34).fork()).ldelim();
        }
        if (m.girlCards != null && m.girlCards.length) {
            for (var i = 0; i < m.girlCards.length; ++i)
                $root.CardInfo.encode(m.girlCards[i], w.uint32(42).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(50).fork()).ldelim();
        }
        if (m.gameCode != null && Object.hasOwnProperty.call(m, "gameCode"))
            w.uint32(58).string(m.gameCode);
        return w;
    };

    /**
     * Decodes a CowboyRecord message from the specified reader or buffer.
     * @function decode
     * @memberof CowboyRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboyRecord} CowboyRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboyRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboyRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cowboyAreaType && m.cowboyAreaType.length))
                    m.cowboyAreaType = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.cowboyAreaType.push(r.int32());
                } else
                    m.cowboyAreaType.push(r.int32());
                break;
            case 2:
                if (!(m.areaWinLose && m.areaWinLose.length))
                    m.areaWinLose = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.areaWinLose.push(r.int64());
                } else
                    m.areaWinLose.push(r.int64());
                break;
            case 3:
                if (!(m.betAmount && m.betAmount.length))
                    m.betAmount = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.betAmount.push(r.int64());
                } else
                    m.betAmount.push(r.int64());
                break;
            case 4:
                if (!(m.boyCards && m.boyCards.length))
                    m.boyCards = [];
                m.boyCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.girlCards && m.girlCards.length))
                    m.girlCards = [];
                m.girlCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.gameCode = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyRecord;
})();

$root.CowboyWinLose = (function() {

    /**
     * Properties of a CowboyWinLose.
     * @exports ICowboyWinLose
     * @interface ICowboyWinLose
     * @property {string|null} [uid] CowboyWinLose uid
     * @property {number|null} [winLose] CowboyWinLose winLose
     * @property {number|null} [restAmount] CowboyWinLose restAmount
     * @property {number|null} [reward] CowboyWinLose reward
     */

    /**
     * Constructs a new CowboyWinLose.
     * @exports CowboyWinLose
     * @classdesc Represents a CowboyWinLose.
     * @implements ICowboyWinLose
     * @constructor
     * @param {ICowboyWinLose=} [p] Properties to set
     */
    function CowboyWinLose(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CowboyWinLose uid.
     * @member {string} uid
     * @memberof CowboyWinLose
     * @instance
     */
    CowboyWinLose.prototype.uid = "";

    /**
     * CowboyWinLose winLose.
     * @member {number} winLose
     * @memberof CowboyWinLose
     * @instance
     */
    CowboyWinLose.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CowboyWinLose restAmount.
     * @member {number} restAmount
     * @memberof CowboyWinLose
     * @instance
     */
    CowboyWinLose.prototype.restAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CowboyWinLose reward.
     * @member {number} reward
     * @memberof CowboyWinLose
     * @instance
     */
    CowboyWinLose.prototype.reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CowboyWinLose message. Does not implicitly {@link CowboyWinLose.verify|verify} messages.
     * @function encode
     * @memberof CowboyWinLose
     * @static
     * @param {ICowboyWinLose} m CowboyWinLose message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CowboyWinLose.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(16).int64(m.winLose);
        if (m.restAmount != null && Object.hasOwnProperty.call(m, "restAmount"))
            w.uint32(24).int64(m.restAmount);
        if (m.reward != null && Object.hasOwnProperty.call(m, "reward"))
            w.uint32(32).int64(m.reward);
        return w;
    };

    /**
     * Decodes a CowboyWinLose message from the specified reader or buffer.
     * @function decode
     * @memberof CowboyWinLose
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CowboyWinLose} CowboyWinLose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CowboyWinLose.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CowboyWinLose();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.winLose = r.int64();
                break;
            case 3:
                m.restAmount = r.int64();
                break;
            case 4:
                m.reward = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyWinLose;
})();

/**
 * GameType enum.
 * @exports GameType
 * @enum {number}
 * @property {number} GameType_TexasCash=0 GameType_TexasCash value
 * @property {number} GameType_ShortCash=1 GameType_ShortCash value
 * @property {number} GameType_OmhCash=2 GameType_OmhCash value
 * @property {number} GameType_TexasMtt=3 GameType_TexasMtt value
 * @property {number} GameType_ShortMtt=4 GameType_ShortMtt value
 * @property {number} GameType_OmhMtt=5 GameType_OmhMtt value
 * @property {number} GameType_Cowboy=6 GameType_Cowboy value
 */
$root.GameType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameType_TexasCash"] = 0;
    values[valuesById[1] = "GameType_ShortCash"] = 1;
    values[valuesById[2] = "GameType_OmhCash"] = 2;
    values[valuesById[3] = "GameType_TexasMtt"] = 3;
    values[valuesById[4] = "GameType_ShortMtt"] = 4;
    values[valuesById[5] = "GameType_OmhMtt"] = 5;
    values[valuesById[6] = "GameType_Cowboy"] = 6;
    return values;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number|null} [number] CardInfo number
     * @property {number|null} [type] CardInfo type
     */

    /**
     * Constructs a new CardInfo.
     * @exports CardInfo
     * @classdesc Represents a CardInfo.
     * @implements ICardInfo
     * @constructor
     * @param {ICardInfo=} [p] Properties to set
     */
    function CardInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CardInfo number.
     * @member {number} number
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.number = 0;

    /**
     * CardInfo type.
     * @member {number} type
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.type = 0;

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encode
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} m CardInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CardInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.number != null && Object.hasOwnProperty.call(m, "number"))
            w.uint32(8).int32(m.number);
        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
            w.uint32(16).int32(m.type);
        return w;
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CardInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.number = r.int32();
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

    return CardInfo;
})();

$root.S2CTexasCowboyEnterGameResp = (function() {

    /**
     * Properties of a S2CTexasCowboyEnterGameResp.
     * @exports IS2CTexasCowboyEnterGameResp
     * @interface IS2CTexasCowboyEnterGameResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyEnterGameResp result
     * @property {string|null} [gameId] S2CTexasCowboyEnterGameResp gameId
     * @property {CowboyPhase|null} [phase] S2CTexasCowboyEnterGameResp phase
     * @property {Array.<ICowboyAreaInfo>|null} [cowboyAreaInfoList] S2CTexasCowboyEnterGameResp cowboyAreaInfoList
     * @property {Array.<ICowboySingleBet>|null} [myBetInfo] S2CTexasCowboyEnterGameResp myBetInfo
     * @property {Array.<ICowboyHistory>|null} [history] S2CTexasCowboyEnterGameResp history
     * @property {number|null} [settlementTime] S2CTexasCowboyEnterGameResp settlementTime
     * @property {number|null} [betTime] S2CTexasCowboyEnterGameResp betTime
     * @property {number|null} [restTime] S2CTexasCowboyEnterGameResp restTime
     * @property {ICardInfo|null} [oneCard] S2CTexasCowboyEnterGameResp oneCard
     * @property {number|null} [money] S2CTexasCowboyEnterGameResp money
     * @property {Array.<number>|null} [ratio] S2CTexasCowboyEnterGameResp ratio
     */

    /**
     * Constructs a new S2CTexasCowboyEnterGameResp.
     * @exports S2CTexasCowboyEnterGameResp
     * @classdesc Represents a S2CTexasCowboyEnterGameResp.
     * @implements IS2CTexasCowboyEnterGameResp
     * @constructor
     * @param {IS2CTexasCowboyEnterGameResp=} [p] Properties to set
     */
    function S2CTexasCowboyEnterGameResp(p) {
        this.cowboyAreaInfoList = [];
        this.myBetInfo = [];
        this.history = [];
        this.ratio = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyEnterGameResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.result = null;

    /**
     * S2CTexasCowboyEnterGameResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.gameId = "";

    /**
     * S2CTexasCowboyEnterGameResp phase.
     * @member {CowboyPhase} phase
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.phase = 0;

    /**
     * S2CTexasCowboyEnterGameResp cowboyAreaInfoList.
     * @member {Array.<ICowboyAreaInfo>} cowboyAreaInfoList
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.cowboyAreaInfoList = $util.emptyArray;

    /**
     * S2CTexasCowboyEnterGameResp myBetInfo.
     * @member {Array.<ICowboySingleBet>} myBetInfo
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.myBetInfo = $util.emptyArray;

    /**
     * S2CTexasCowboyEnterGameResp history.
     * @member {Array.<ICowboyHistory>} history
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.history = $util.emptyArray;

    /**
     * S2CTexasCowboyEnterGameResp settlementTime.
     * @member {number} settlementTime
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.settlementTime = 0;

    /**
     * S2CTexasCowboyEnterGameResp betTime.
     * @member {number} betTime
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.betTime = 0;

    /**
     * S2CTexasCowboyEnterGameResp restTime.
     * @member {number} restTime
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.restTime = 0;

    /**
     * S2CTexasCowboyEnterGameResp oneCard.
     * @member {ICardInfo|null|undefined} oneCard
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.oneCard = null;

    /**
     * S2CTexasCowboyEnterGameResp money.
     * @member {number} money
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTexasCowboyEnterGameResp ratio.
     * @member {Array.<number>} ratio
     * @memberof S2CTexasCowboyEnterGameResp
     * @instance
     */
    S2CTexasCowboyEnterGameResp.prototype.ratio = $util.emptyArray;

    /**
     * Encodes the specified S2CTexasCowboyEnterGameResp message. Does not implicitly {@link S2CTexasCowboyEnterGameResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyEnterGameResp
     * @static
     * @param {IS2CTexasCowboyEnterGameResp} m S2CTexasCowboyEnterGameResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyEnterGameResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.phase != null && Object.hasOwnProperty.call(m, "phase"))
            w.uint32(24).int32(m.phase);
        if (m.cowboyAreaInfoList != null && m.cowboyAreaInfoList.length) {
            for (var i = 0; i < m.cowboyAreaInfoList.length; ++i)
                $root.CowboyAreaInfo.encode(m.cowboyAreaInfoList[i], w.uint32(34).fork()).ldelim();
        }
        if (m.myBetInfo != null && m.myBetInfo.length) {
            for (var i = 0; i < m.myBetInfo.length; ++i)
                $root.CowboySingleBet.encode(m.myBetInfo[i], w.uint32(42).fork()).ldelim();
        }
        if (m.history != null && m.history.length) {
            for (var i = 0; i < m.history.length; ++i)
                $root.CowboyHistory.encode(m.history[i], w.uint32(50).fork()).ldelim();
        }
        if (m.settlementTime != null && Object.hasOwnProperty.call(m, "settlementTime"))
            w.uint32(56).int32(m.settlementTime);
        if (m.betTime != null && Object.hasOwnProperty.call(m, "betTime"))
            w.uint32(64).int32(m.betTime);
        if (m.restTime != null && Object.hasOwnProperty.call(m, "restTime"))
            w.uint32(72).int32(m.restTime);
        if (m.oneCard != null && Object.hasOwnProperty.call(m, "oneCard"))
            $root.CardInfo.encode(m.oneCard, w.uint32(82).fork()).ldelim();
        if (m.money != null && Object.hasOwnProperty.call(m, "money"))
            w.uint32(88).int64(m.money);
        if (m.ratio != null && m.ratio.length) {
            w.uint32(98).fork();
            for (var i = 0; i < m.ratio.length; ++i)
                w.int64(m.ratio[i]);
            w.ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyEnterGameResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyEnterGameResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyEnterGameResp} S2CTexasCowboyEnterGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyEnterGameResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyEnterGameResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.phase = r.int32();
                break;
            case 4:
                if (!(m.cowboyAreaInfoList && m.cowboyAreaInfoList.length))
                    m.cowboyAreaInfoList = [];
                m.cowboyAreaInfoList.push($root.CowboyAreaInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.myBetInfo && m.myBetInfo.length))
                    m.myBetInfo = [];
                m.myBetInfo.push($root.CowboySingleBet.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.history && m.history.length))
                    m.history = [];
                m.history.push($root.CowboyHistory.decode(r, r.uint32()));
                break;
            case 7:
                m.settlementTime = r.int32();
                break;
            case 8:
                m.betTime = r.int32();
                break;
            case 9:
                m.restTime = r.int32();
                break;
            case 10:
                m.oneCard = $root.CardInfo.decode(r, r.uint32());
                break;
            case 11:
                m.money = r.int64();
                break;
            case 12:
                if (!(m.ratio && m.ratio.length))
                    m.ratio = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.ratio.push(r.int64());
                } else
                    m.ratio.push(r.int64());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyEnterGameResp;
})();

$root.S2CTexasCowboyExitGameResp = (function() {

    /**
     * Properties of a S2CTexasCowboyExitGameResp.
     * @exports IS2CTexasCowboyExitGameResp
     * @interface IS2CTexasCowboyExitGameResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyExitGameResp result
     * @property {string|null} [gameId] S2CTexasCowboyExitGameResp gameId
     */

    /**
     * Constructs a new S2CTexasCowboyExitGameResp.
     * @exports S2CTexasCowboyExitGameResp
     * @classdesc Represents a S2CTexasCowboyExitGameResp.
     * @implements IS2CTexasCowboyExitGameResp
     * @constructor
     * @param {IS2CTexasCowboyExitGameResp=} [p] Properties to set
     */
    function S2CTexasCowboyExitGameResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyExitGameResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyExitGameResp
     * @instance
     */
    S2CTexasCowboyExitGameResp.prototype.result = null;

    /**
     * S2CTexasCowboyExitGameResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyExitGameResp
     * @instance
     */
    S2CTexasCowboyExitGameResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CTexasCowboyExitGameResp message. Does not implicitly {@link S2CTexasCowboyExitGameResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyExitGameResp
     * @static
     * @param {IS2CTexasCowboyExitGameResp} m S2CTexasCowboyExitGameResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyExitGameResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyExitGameResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyExitGameResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyExitGameResp} S2CTexasCowboyExitGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyExitGameResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyExitGameResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyExitGameResp;
})();

$root.S2CTexasCowboyBetResp = (function() {

    /**
     * Properties of a S2CTexasCowboyBetResp.
     * @exports IS2CTexasCowboyBetResp
     * @interface IS2CTexasCowboyBetResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyBetResp result
     * @property {string|null} [gameId] S2CTexasCowboyBetResp gameId
     */

    /**
     * Constructs a new S2CTexasCowboyBetResp.
     * @exports S2CTexasCowboyBetResp
     * @classdesc Represents a S2CTexasCowboyBetResp.
     * @implements IS2CTexasCowboyBetResp
     * @constructor
     * @param {IS2CTexasCowboyBetResp=} [p] Properties to set
     */
    function S2CTexasCowboyBetResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyBetResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyBetResp
     * @instance
     */
    S2CTexasCowboyBetResp.prototype.result = null;

    /**
     * S2CTexasCowboyBetResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyBetResp
     * @instance
     */
    S2CTexasCowboyBetResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CTexasCowboyBetResp message. Does not implicitly {@link S2CTexasCowboyBetResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyBetResp
     * @static
     * @param {IS2CTexasCowboyBetResp} m S2CTexasCowboyBetResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyBetResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyBetResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyBetResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyBetResp} S2CTexasCowboyBetResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyBetResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyBetResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyBetResp;
})();

$root.S2CTexasCowboyRecordResp = (function() {

    /**
     * Properties of a S2CTexasCowboyRecordResp.
     * @exports IS2CTexasCowboyRecordResp
     * @interface IS2CTexasCowboyRecordResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyRecordResp result
     * @property {string|null} [gameId] S2CTexasCowboyRecordResp gameId
     * @property {ICowboyRecord|null} [record] S2CTexasCowboyRecordResp record
     * @property {number|null} [whichGame] S2CTexasCowboyRecordResp whichGame
     * @property {number|null} [totalGame] S2CTexasCowboyRecordResp totalGame
     */

    /**
     * Constructs a new S2CTexasCowboyRecordResp.
     * @exports S2CTexasCowboyRecordResp
     * @classdesc Represents a S2CTexasCowboyRecordResp.
     * @implements IS2CTexasCowboyRecordResp
     * @constructor
     * @param {IS2CTexasCowboyRecordResp=} [p] Properties to set
     */
    function S2CTexasCowboyRecordResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyRecordResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyRecordResp
     * @instance
     */
    S2CTexasCowboyRecordResp.prototype.result = null;

    /**
     * S2CTexasCowboyRecordResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyRecordResp
     * @instance
     */
    S2CTexasCowboyRecordResp.prototype.gameId = "";

    /**
     * S2CTexasCowboyRecordResp record.
     * @member {ICowboyRecord|null|undefined} record
     * @memberof S2CTexasCowboyRecordResp
     * @instance
     */
    S2CTexasCowboyRecordResp.prototype.record = null;

    /**
     * S2CTexasCowboyRecordResp whichGame.
     * @member {number} whichGame
     * @memberof S2CTexasCowboyRecordResp
     * @instance
     */
    S2CTexasCowboyRecordResp.prototype.whichGame = 0;

    /**
     * S2CTexasCowboyRecordResp totalGame.
     * @member {number} totalGame
     * @memberof S2CTexasCowboyRecordResp
     * @instance
     */
    S2CTexasCowboyRecordResp.prototype.totalGame = 0;

    /**
     * Encodes the specified S2CTexasCowboyRecordResp message. Does not implicitly {@link S2CTexasCowboyRecordResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyRecordResp
     * @static
     * @param {IS2CTexasCowboyRecordResp} m S2CTexasCowboyRecordResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyRecordResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.record != null && Object.hasOwnProperty.call(m, "record"))
            $root.CowboyRecord.encode(m.record, w.uint32(26).fork()).ldelim();
        if (m.whichGame != null && Object.hasOwnProperty.call(m, "whichGame"))
            w.uint32(32).int32(m.whichGame);
        if (m.totalGame != null && Object.hasOwnProperty.call(m, "totalGame"))
            w.uint32(40).int32(m.totalGame);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyRecordResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyRecordResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyRecordResp} S2CTexasCowboyRecordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyRecordResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyRecordResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.record = $root.CowboyRecord.decode(r, r.uint32());
                break;
            case 4:
                m.whichGame = r.int32();
                break;
            case 5:
                m.totalGame = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyRecordResp;
})();

$root.S2CTexasCowboyBringInResp = (function() {

    /**
     * Properties of a S2CTexasCowboyBringInResp.
     * @exports IS2CTexasCowboyBringInResp
     * @interface IS2CTexasCowboyBringInResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyBringInResp result
     * @property {string|null} [gameId] S2CTexasCowboyBringInResp gameId
     * @property {number|null} [amount] S2CTexasCowboyBringInResp amount
     * @property {number|null} [totalAmount] S2CTexasCowboyBringInResp totalAmount
     */

    /**
     * Constructs a new S2CTexasCowboyBringInResp.
     * @exports S2CTexasCowboyBringInResp
     * @classdesc Represents a S2CTexasCowboyBringInResp.
     * @implements IS2CTexasCowboyBringInResp
     * @constructor
     * @param {IS2CTexasCowboyBringInResp=} [p] Properties to set
     */
    function S2CTexasCowboyBringInResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyBringInResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyBringInResp
     * @instance
     */
    S2CTexasCowboyBringInResp.prototype.result = null;

    /**
     * S2CTexasCowboyBringInResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyBringInResp
     * @instance
     */
    S2CTexasCowboyBringInResp.prototype.gameId = "";

    /**
     * S2CTexasCowboyBringInResp amount.
     * @member {number} amount
     * @memberof S2CTexasCowboyBringInResp
     * @instance
     */
    S2CTexasCowboyBringInResp.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTexasCowboyBringInResp totalAmount.
     * @member {number} totalAmount
     * @memberof S2CTexasCowboyBringInResp
     * @instance
     */
    S2CTexasCowboyBringInResp.prototype.totalAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CTexasCowboyBringInResp message. Does not implicitly {@link S2CTexasCowboyBringInResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyBringInResp
     * @static
     * @param {IS2CTexasCowboyBringInResp} m S2CTexasCowboyBringInResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyBringInResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        if (m.totalAmount != null && Object.hasOwnProperty.call(m, "totalAmount"))
            w.uint32(32).int64(m.totalAmount);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyBringInResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyBringInResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyBringInResp} S2CTexasCowboyBringInResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyBringInResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyBringInResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.amount = r.int64();
                break;
            case 4:
                m.totalAmount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyBringInResp;
})();

$root.S2CTexasCowboyBringOutResp = (function() {

    /**
     * Properties of a S2CTexasCowboyBringOutResp.
     * @exports IS2CTexasCowboyBringOutResp
     * @interface IS2CTexasCowboyBringOutResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyBringOutResp result
     * @property {string|null} [gameId] S2CTexasCowboyBringOutResp gameId
     * @property {number|null} [amount] S2CTexasCowboyBringOutResp amount
     * @property {number|null} [totalAmount] S2CTexasCowboyBringOutResp totalAmount
     */

    /**
     * Constructs a new S2CTexasCowboyBringOutResp.
     * @exports S2CTexasCowboyBringOutResp
     * @classdesc Represents a S2CTexasCowboyBringOutResp.
     * @implements IS2CTexasCowboyBringOutResp
     * @constructor
     * @param {IS2CTexasCowboyBringOutResp=} [p] Properties to set
     */
    function S2CTexasCowboyBringOutResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyBringOutResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyBringOutResp
     * @instance
     */
    S2CTexasCowboyBringOutResp.prototype.result = null;

    /**
     * S2CTexasCowboyBringOutResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyBringOutResp
     * @instance
     */
    S2CTexasCowboyBringOutResp.prototype.gameId = "";

    /**
     * S2CTexasCowboyBringOutResp amount.
     * @member {number} amount
     * @memberof S2CTexasCowboyBringOutResp
     * @instance
     */
    S2CTexasCowboyBringOutResp.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CTexasCowboyBringOutResp totalAmount.
     * @member {number} totalAmount
     * @memberof S2CTexasCowboyBringOutResp
     * @instance
     */
    S2CTexasCowboyBringOutResp.prototype.totalAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CTexasCowboyBringOutResp message. Does not implicitly {@link S2CTexasCowboyBringOutResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyBringOutResp
     * @static
     * @param {IS2CTexasCowboyBringOutResp} m S2CTexasCowboyBringOutResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyBringOutResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        if (m.totalAmount != null && Object.hasOwnProperty.call(m, "totalAmount"))
            w.uint32(32).int64(m.totalAmount);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyBringOutResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyBringOutResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyBringOutResp} S2CTexasCowboyBringOutResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyBringOutResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyBringOutResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.amount = r.int64();
                break;
            case 4:
                m.totalAmount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyBringOutResp;
})();

$root.S2CTexasCowboyTotalHistoryResp = (function() {

    /**
     * Properties of a S2CTexasCowboyTotalHistoryResp.
     * @exports IS2CTexasCowboyTotalHistoryResp
     * @interface IS2CTexasCowboyTotalHistoryResp
     * @property {ICommonResult|null} [result] S2CTexasCowboyTotalHistoryResp result
     * @property {string|null} [gameId] S2CTexasCowboyTotalHistoryResp gameId
     * @property {Array.<ICowboyTotalHistory>|null} [totalHistory] S2CTexasCowboyTotalHistoryResp totalHistory
     * @property {number|null} [totalGameCount] S2CTexasCowboyTotalHistoryResp totalGameCount
     */

    /**
     * Constructs a new S2CTexasCowboyTotalHistoryResp.
     * @exports S2CTexasCowboyTotalHistoryResp
     * @classdesc Represents a S2CTexasCowboyTotalHistoryResp.
     * @implements IS2CTexasCowboyTotalHistoryResp
     * @constructor
     * @param {IS2CTexasCowboyTotalHistoryResp=} [p] Properties to set
     */
    function S2CTexasCowboyTotalHistoryResp(p) {
        this.totalHistory = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyTotalHistoryResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @instance
     */
    S2CTexasCowboyTotalHistoryResp.prototype.result = null;

    /**
     * S2CTexasCowboyTotalHistoryResp gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @instance
     */
    S2CTexasCowboyTotalHistoryResp.prototype.gameId = "";

    /**
     * S2CTexasCowboyTotalHistoryResp totalHistory.
     * @member {Array.<ICowboyTotalHistory>} totalHistory
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @instance
     */
    S2CTexasCowboyTotalHistoryResp.prototype.totalHistory = $util.emptyArray;

    /**
     * S2CTexasCowboyTotalHistoryResp totalGameCount.
     * @member {number} totalGameCount
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @instance
     */
    S2CTexasCowboyTotalHistoryResp.prototype.totalGameCount = 0;

    /**
     * Encodes the specified S2CTexasCowboyTotalHistoryResp message. Does not implicitly {@link S2CTexasCowboyTotalHistoryResp.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @static
     * @param {IS2CTexasCowboyTotalHistoryResp} m S2CTexasCowboyTotalHistoryResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyTotalHistoryResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.totalHistory != null && m.totalHistory.length) {
            for (var i = 0; i < m.totalHistory.length; ++i)
                $root.CowboyTotalHistory.encode(m.totalHistory[i], w.uint32(26).fork()).ldelim();
        }
        if (m.totalGameCount != null && Object.hasOwnProperty.call(m, "totalGameCount"))
            w.uint32(32).int32(m.totalGameCount);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyTotalHistoryResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyTotalHistoryResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyTotalHistoryResp} S2CTexasCowboyTotalHistoryResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyTotalHistoryResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyTotalHistoryResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.totalHistory && m.totalHistory.length))
                    m.totalHistory = [];
                m.totalHistory.push($root.CowboyTotalHistory.decode(r, r.uint32()));
                break;
            case 4:
                m.totalGameCount = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyTotalHistoryResp;
})();

$root.S2CTexasCowboyBetNotify = (function() {

    /**
     * Properties of a S2CTexasCowboyBetNotify.
     * @exports IS2CTexasCowboyBetNotify
     * @interface IS2CTexasCowboyBetNotify
     * @property {string|null} [gameId] S2CTexasCowboyBetNotify gameId
     * @property {Array.<ICowboySingleBet>|null} [betInfo] S2CTexasCowboyBetNotify betInfo
     */

    /**
     * Constructs a new S2CTexasCowboyBetNotify.
     * @exports S2CTexasCowboyBetNotify
     * @classdesc Represents a S2CTexasCowboyBetNotify.
     * @implements IS2CTexasCowboyBetNotify
     * @constructor
     * @param {IS2CTexasCowboyBetNotify=} [p] Properties to set
     */
    function S2CTexasCowboyBetNotify(p) {
        this.betInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyBetNotify gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyBetNotify
     * @instance
     */
    S2CTexasCowboyBetNotify.prototype.gameId = "";

    /**
     * S2CTexasCowboyBetNotify betInfo.
     * @member {Array.<ICowboySingleBet>} betInfo
     * @memberof S2CTexasCowboyBetNotify
     * @instance
     */
    S2CTexasCowboyBetNotify.prototype.betInfo = $util.emptyArray;

    /**
     * Encodes the specified S2CTexasCowboyBetNotify message. Does not implicitly {@link S2CTexasCowboyBetNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyBetNotify
     * @static
     * @param {IS2CTexasCowboyBetNotify} m S2CTexasCowboyBetNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyBetNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.betInfo != null && m.betInfo.length) {
            for (var i = 0; i < m.betInfo.length; ++i)
                $root.CowboySingleBet.encode(m.betInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyBetNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyBetNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyBetNotify} S2CTexasCowboyBetNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyBetNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyBetNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.betInfo && m.betInfo.length))
                    m.betInfo = [];
                m.betInfo.push($root.CowboySingleBet.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyBetNotify;
})();

$root.S2CTexasCowboyGameStartNotify = (function() {

    /**
     * Properties of a S2CTexasCowboyGameStartNotify.
     * @exports IS2CTexasCowboyGameStartNotify
     * @interface IS2CTexasCowboyGameStartNotify
     * @property {string|null} [gameId] S2CTexasCowboyGameStartNotify gameId
     * @property {ICardInfo|null} [oneCard] S2CTexasCowboyGameStartNotify oneCard
     */

    /**
     * Constructs a new S2CTexasCowboyGameStartNotify.
     * @exports S2CTexasCowboyGameStartNotify
     * @classdesc Represents a S2CTexasCowboyGameStartNotify.
     * @implements IS2CTexasCowboyGameStartNotify
     * @constructor
     * @param {IS2CTexasCowboyGameStartNotify=} [p] Properties to set
     */
    function S2CTexasCowboyGameStartNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyGameStartNotify gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyGameStartNotify
     * @instance
     */
    S2CTexasCowboyGameStartNotify.prototype.gameId = "";

    /**
     * S2CTexasCowboyGameStartNotify oneCard.
     * @member {ICardInfo|null|undefined} oneCard
     * @memberof S2CTexasCowboyGameStartNotify
     * @instance
     */
    S2CTexasCowboyGameStartNotify.prototype.oneCard = null;

    /**
     * Encodes the specified S2CTexasCowboyGameStartNotify message. Does not implicitly {@link S2CTexasCowboyGameStartNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyGameStartNotify
     * @static
     * @param {IS2CTexasCowboyGameStartNotify} m S2CTexasCowboyGameStartNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyGameStartNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.oneCard != null && Object.hasOwnProperty.call(m, "oneCard"))
            $root.CardInfo.encode(m.oneCard, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyGameStartNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyGameStartNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyGameStartNotify} S2CTexasCowboyGameStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyGameStartNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyGameStartNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.oneCard = $root.CardInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyGameStartNotify;
})();

$root.S2CTexasCowboyGameSettlementNotify = (function() {

    /**
     * Properties of a S2CTexasCowboyGameSettlementNotify.
     * @exports IS2CTexasCowboyGameSettlementNotify
     * @interface IS2CTexasCowboyGameSettlementNotify
     * @property {string|null} [gameId] S2CTexasCowboyGameSettlementNotify gameId
     * @property {Array.<CowboyAreaType>|null} [reward] S2CTexasCowboyGameSettlementNotify reward
     * @property {Array.<ICowboyWinLose>|null} [result] S2CTexasCowboyGameSettlementNotify result
     * @property {Array.<ICardInfo>|null} [boyCards] S2CTexasCowboyGameSettlementNotify boyCards
     * @property {Array.<ICardInfo>|null} [girlCards] S2CTexasCowboyGameSettlementNotify girlCards
     * @property {Array.<ICardInfo>|null} [publicCards] S2CTexasCowboyGameSettlementNotify publicCards
     * @property {number|null} [winner] S2CTexasCowboyGameSettlementNotify winner
     * @property {number|null} [winnerCombination] S2CTexasCowboyGameSettlementNotify winnerCombination
     */

    /**
     * Constructs a new S2CTexasCowboyGameSettlementNotify.
     * @exports S2CTexasCowboyGameSettlementNotify
     * @classdesc Represents a S2CTexasCowboyGameSettlementNotify.
     * @implements IS2CTexasCowboyGameSettlementNotify
     * @constructor
     * @param {IS2CTexasCowboyGameSettlementNotify=} [p] Properties to set
     */
    function S2CTexasCowboyGameSettlementNotify(p) {
        this.reward = [];
        this.result = [];
        this.boyCards = [];
        this.girlCards = [];
        this.publicCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CTexasCowboyGameSettlementNotify gameId.
     * @member {string} gameId
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.gameId = "";

    /**
     * S2CTexasCowboyGameSettlementNotify reward.
     * @member {Array.<CowboyAreaType>} reward
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.reward = $util.emptyArray;

    /**
     * S2CTexasCowboyGameSettlementNotify result.
     * @member {Array.<ICowboyWinLose>} result
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.result = $util.emptyArray;

    /**
     * S2CTexasCowboyGameSettlementNotify boyCards.
     * @member {Array.<ICardInfo>} boyCards
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.boyCards = $util.emptyArray;

    /**
     * S2CTexasCowboyGameSettlementNotify girlCards.
     * @member {Array.<ICardInfo>} girlCards
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.girlCards = $util.emptyArray;

    /**
     * S2CTexasCowboyGameSettlementNotify publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.publicCards = $util.emptyArray;

    /**
     * S2CTexasCowboyGameSettlementNotify winner.
     * @member {number} winner
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.winner = 0;

    /**
     * S2CTexasCowboyGameSettlementNotify winnerCombination.
     * @member {number} winnerCombination
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @instance
     */
    S2CTexasCowboyGameSettlementNotify.prototype.winnerCombination = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Encodes the specified S2CTexasCowboyGameSettlementNotify message. Does not implicitly {@link S2CTexasCowboyGameSettlementNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @static
     * @param {IS2CTexasCowboyGameSettlementNotify} m S2CTexasCowboyGameSettlementNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CTexasCowboyGameSettlementNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.reward != null && m.reward.length) {
            w.uint32(18).fork();
            for (var i = 0; i < m.reward.length; ++i)
                w.int32(m.reward[i]);
            w.ldelim();
        }
        if (m.result != null && m.result.length) {
            for (var i = 0; i < m.result.length; ++i)
                $root.CowboyWinLose.encode(m.result[i], w.uint32(26).fork()).ldelim();
        }
        if (m.boyCards != null && m.boyCards.length) {
            for (var i = 0; i < m.boyCards.length; ++i)
                $root.CardInfo.encode(m.boyCards[i], w.uint32(34).fork()).ldelim();
        }
        if (m.girlCards != null && m.girlCards.length) {
            for (var i = 0; i < m.girlCards.length; ++i)
                $root.CardInfo.encode(m.girlCards[i], w.uint32(42).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(50).fork()).ldelim();
        }
        if (m.winner != null && Object.hasOwnProperty.call(m, "winner"))
            w.uint32(56).int32(m.winner);
        if (m.winnerCombination != null && Object.hasOwnProperty.call(m, "winnerCombination"))
            w.uint32(64).uint64(m.winnerCombination);
        return w;
    };

    /**
     * Decodes a S2CTexasCowboyGameSettlementNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CTexasCowboyGameSettlementNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CTexasCowboyGameSettlementNotify} S2CTexasCowboyGameSettlementNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CTexasCowboyGameSettlementNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CTexasCowboyGameSettlementNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.reward && m.reward.length))
                    m.reward = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.reward.push(r.int32());
                } else
                    m.reward.push(r.int32());
                break;
            case 3:
                if (!(m.result && m.result.length))
                    m.result = [];
                m.result.push($root.CowboyWinLose.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.boyCards && m.boyCards.length))
                    m.boyCards = [];
                m.boyCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.girlCards && m.girlCards.length))
                    m.girlCards = [];
                m.girlCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.winner = r.int32();
                break;
            case 8:
                m.winnerCombination = r.uint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CTexasCowboyGameSettlementNotify;
})();

/**
 * AmountChangeType enum.
 * @exports AmountChangeType
 * @enum {number}
 * @property {number} AmountType_Other=0 AmountType_Other value
 * @property {number} AmountType_Charge=1 AmountType_Charge value
 * @property {number} AmountType_Grant=2 AmountType_Grant value
 * @property {number} AmountType_Prop=3 AmountType_Prop value
 * @property {number} AmountType_Commission=4 AmountType_Commission value
 * @property {number} AmountType_Return=5 AmountType_Return value
 * @property {number} AmountType_Insurance=6 AmountType_Insurance value
 * @property {number} AmountType_InsuranceReturn=7 AmountType_InsuranceReturn value
 * @property {number} AmountType_BringIn=8 AmountType_BringIn value
 * @property {number} AmountType_BringOut=9 AmountType_BringOut value
 * @property {number} AmountType_JackpotIn=10 AmountType_JackpotIn value
 * @property {number} AmountType_Jackpot=11 AmountType_Jackpot value
 * @property {number} AmountType_CowboyBet=12 AmountType_CowboyBet value
 * @property {number} AmountType_CowboyReturn=13 AmountType_CowboyReturn value
 */
$root.AmountChangeType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AmountType_Other"] = 0;
    values[valuesById[1] = "AmountType_Charge"] = 1;
    values[valuesById[2] = "AmountType_Grant"] = 2;
    values[valuesById[3] = "AmountType_Prop"] = 3;
    values[valuesById[4] = "AmountType_Commission"] = 4;
    values[valuesById[5] = "AmountType_Return"] = 5;
    values[valuesById[6] = "AmountType_Insurance"] = 6;
    values[valuesById[7] = "AmountType_InsuranceReturn"] = 7;
    values[valuesById[8] = "AmountType_BringIn"] = 8;
    values[valuesById[9] = "AmountType_BringOut"] = 9;
    values[valuesById[10] = "AmountType_JackpotIn"] = 10;
    values[valuesById[11] = "AmountType_Jackpot"] = 11;
    values[valuesById[12] = "AmountType_CowboyBet"] = 12;
    values[valuesById[13] = "AmountType_CowboyReturn"] = 13;
    return values;
})();

/**
 * PropType enum.
 * @exports PropType
 * @enum {number}
 * @property {number} PropType_Other=0 PropType_Other value
 * @property {number} PropType_ForceHand=1 PropType_ForceHand value
 * @property {number} PropType_RubbingCards=2 PropType_RubbingCards value
 * @property {number} PropType_PublicCard=3 PropType_PublicCard value
 * @property {number} PropType_DelayThinking=4 PropType_DelayThinking value
 * @property {number} PropType_Interaction=5 PropType_Interaction value
 */
$root.PropType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PropType_Other"] = 0;
    values[valuesById[1] = "PropType_ForceHand"] = 1;
    values[valuesById[2] = "PropType_RubbingCards"] = 2;
    values[valuesById[3] = "PropType_PublicCard"] = 3;
    values[valuesById[4] = "PropType_DelayThinking"] = 4;
    values[valuesById[5] = "PropType_Interaction"] = 5;
    return values;
})();

/**
 * JackpotType enum.
 * @exports JackpotType
 * @enum {number}
 * @property {number} JackpotType_Other=0 JackpotType_Other value
 * @property {number} JackpotType_RoyalStraightFlash=1 JackpotType_RoyalStraightFlash value
 * @property {number} JackpotType_RoyalStraightFlash6=2 JackpotType_RoyalStraightFlash6 value
 * @property {number} JackpotType_RoyalStraightFlash7=3 JackpotType_RoyalStraightFlash7 value
 */
$root.JackpotType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "JackpotType_Other"] = 0;
    values[valuesById[1] = "JackpotType_RoyalStraightFlash"] = 1;
    values[valuesById[2] = "JackpotType_RoyalStraightFlash6"] = 2;
    values[valuesById[3] = "JackpotType_RoyalStraightFlash7"] = 3;
    return values;
})();

$root.Game2LoggerGameRecord = (function() {

    /**
     * Properties of a Game2LoggerGameRecord.
     * @exports IGame2LoggerGameRecord
     * @interface IGame2LoggerGameRecord
     * @property {GameType|null} [gameType] Game2LoggerGameRecord gameType
     * @property {string|null} [gameId] Game2LoggerGameRecord gameId
     * @property {string|null} [creator] Game2LoggerGameRecord creator
     * @property {string|null} [beginTime] Game2LoggerGameRecord beginTime
     * @property {string|null} [endTime] Game2LoggerGameRecord endTime
     * @property {number|null} [configAnte] Game2LoggerGameRecord configAnte
     * @property {number|null} [configSmallBet] Game2LoggerGameRecord configSmallBet
     * @property {number|null} [configBigBet] Game2LoggerGameRecord configBigBet
     * @property {number|null} [configStraddleBet] Game2LoggerGameRecord configStraddleBet
     * @property {number|null} [configPlayerNum] Game2LoggerGameRecord configPlayerNum
     * @property {number|null} [totalPlayerNum] Game2LoggerGameRecord totalPlayerNum
     * @property {Array.<IGameSubRecord>|null} [gameSubRecord] Game2LoggerGameRecord gameSubRecord
     */

    /**
     * Constructs a new Game2LoggerGameRecord.
     * @exports Game2LoggerGameRecord
     * @classdesc Represents a Game2LoggerGameRecord.
     * @implements IGame2LoggerGameRecord
     * @constructor
     * @param {IGame2LoggerGameRecord=} [p] Properties to set
     */
    function Game2LoggerGameRecord(p) {
        this.gameSubRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Game2LoggerGameRecord gameType.
     * @member {GameType} gameType
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.gameType = 0;

    /**
     * Game2LoggerGameRecord gameId.
     * @member {string} gameId
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.gameId = "";

    /**
     * Game2LoggerGameRecord creator.
     * @member {string} creator
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.creator = "";

    /**
     * Game2LoggerGameRecord beginTime.
     * @member {string} beginTime
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.beginTime = "";

    /**
     * Game2LoggerGameRecord endTime.
     * @member {string} endTime
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.endTime = "";

    /**
     * Game2LoggerGameRecord configAnte.
     * @member {number} configAnte
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.configAnte = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Game2LoggerGameRecord configSmallBet.
     * @member {number} configSmallBet
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.configSmallBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Game2LoggerGameRecord configBigBet.
     * @member {number} configBigBet
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.configBigBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Game2LoggerGameRecord configStraddleBet.
     * @member {number} configStraddleBet
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.configStraddleBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Game2LoggerGameRecord configPlayerNum.
     * @member {number} configPlayerNum
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.configPlayerNum = 0;

    /**
     * Game2LoggerGameRecord totalPlayerNum.
     * @member {number} totalPlayerNum
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.totalPlayerNum = 0;

    /**
     * Game2LoggerGameRecord gameSubRecord.
     * @member {Array.<IGameSubRecord>} gameSubRecord
     * @memberof Game2LoggerGameRecord
     * @instance
     */
    Game2LoggerGameRecord.prototype.gameSubRecord = $util.emptyArray;

    /**
     * Encodes the specified Game2LoggerGameRecord message. Does not implicitly {@link Game2LoggerGameRecord.verify|verify} messages.
     * @function encode
     * @memberof Game2LoggerGameRecord
     * @static
     * @param {IGame2LoggerGameRecord} m Game2LoggerGameRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    Game2LoggerGameRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(8).int32(m.gameType);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.creator != null && Object.hasOwnProperty.call(m, "creator"))
            w.uint32(26).string(m.creator);
        if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
            w.uint32(34).string(m.beginTime);
        if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
            w.uint32(42).string(m.endTime);
        if (m.configAnte != null && Object.hasOwnProperty.call(m, "configAnte"))
            w.uint32(48).int64(m.configAnte);
        if (m.configSmallBet != null && Object.hasOwnProperty.call(m, "configSmallBet"))
            w.uint32(56).int64(m.configSmallBet);
        if (m.configBigBet != null && Object.hasOwnProperty.call(m, "configBigBet"))
            w.uint32(64).int64(m.configBigBet);
        if (m.configStraddleBet != null && Object.hasOwnProperty.call(m, "configStraddleBet"))
            w.uint32(72).int64(m.configStraddleBet);
        if (m.configPlayerNum != null && Object.hasOwnProperty.call(m, "configPlayerNum"))
            w.uint32(80).int32(m.configPlayerNum);
        if (m.totalPlayerNum != null && Object.hasOwnProperty.call(m, "totalPlayerNum"))
            w.uint32(88).int32(m.totalPlayerNum);
        if (m.gameSubRecord != null && m.gameSubRecord.length) {
            for (var i = 0; i < m.gameSubRecord.length; ++i)
                $root.GameSubRecord.encode(m.gameSubRecord[i], w.uint32(98).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Game2LoggerGameRecord message from the specified reader or buffer.
     * @function decode
     * @memberof Game2LoggerGameRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Game2LoggerGameRecord} Game2LoggerGameRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    Game2LoggerGameRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Game2LoggerGameRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameType = r.int32();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.creator = r.string();
                break;
            case 4:
                m.beginTime = r.string();
                break;
            case 5:
                m.endTime = r.string();
                break;
            case 6:
                m.configAnte = r.int64();
                break;
            case 7:
                m.configSmallBet = r.int64();
                break;
            case 8:
                m.configBigBet = r.int64();
                break;
            case 9:
                m.configStraddleBet = r.int64();
                break;
            case 10:
                m.configPlayerNum = r.int32();
                break;
            case 11:
                m.totalPlayerNum = r.int32();
                break;
            case 12:
                if (!(m.gameSubRecord && m.gameSubRecord.length))
                    m.gameSubRecord = [];
                m.gameSubRecord.push($root.GameSubRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Game2LoggerGameRecord;
})();

$root.GameSubRecord = (function() {

    /**
     * Properties of a GameSubRecord.
     * @exports IGameSubRecord
     * @interface IGameSubRecord
     * @property {number|null} [subRoundId] GameSubRecord subRoundId
     * @property {string|null} [subBeginTime] GameSubRecord subBeginTime
     * @property {string|null} [subEndTime] GameSubRecord subEndTime
     * @property {number|null} [subTotalPlayerNum] GameSubRecord subTotalPlayerNum
     * @property {number|null} [subTotalBringin] GameSubRecord subTotalBringin
     * @property {number|null} [subTotalBringout] GameSubRecord subTotalBringout
     * @property {number|null} [subTotalCommission] GameSubRecord subTotalCommission
     * @property {number|null} [subTotalReturn] GameSubRecord subTotalReturn
     * @property {number|null} [subTotalInsurance] GameSubRecord subTotalInsurance
     * @property {number|null} [jackpot] GameSubRecord jackpot
     * @property {number|null} [jackpotCommission] GameSubRecord jackpotCommission
     */

    /**
     * Constructs a new GameSubRecord.
     * @exports GameSubRecord
     * @classdesc Represents a GameSubRecord.
     * @implements IGameSubRecord
     * @constructor
     * @param {IGameSubRecord=} [p] Properties to set
     */
    function GameSubRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * GameSubRecord subRoundId.
     * @member {number} subRoundId
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subRoundId = 0;

    /**
     * GameSubRecord subBeginTime.
     * @member {string} subBeginTime
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subBeginTime = "";

    /**
     * GameSubRecord subEndTime.
     * @member {string} subEndTime
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subEndTime = "";

    /**
     * GameSubRecord subTotalPlayerNum.
     * @member {number} subTotalPlayerNum
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalPlayerNum = 0;

    /**
     * GameSubRecord subTotalBringin.
     * @member {number} subTotalBringin
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalBringin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord subTotalBringout.
     * @member {number} subTotalBringout
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalBringout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord subTotalCommission.
     * @member {number} subTotalCommission
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalCommission = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord subTotalReturn.
     * @member {number} subTotalReturn
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalReturn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord subTotalInsurance.
     * @member {number} subTotalInsurance
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.subTotalInsurance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord jackpot.
     * @member {number} jackpot
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameSubRecord jackpotCommission.
     * @member {number} jackpotCommission
     * @memberof GameSubRecord
     * @instance
     */
    GameSubRecord.prototype.jackpotCommission = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified GameSubRecord message. Does not implicitly {@link GameSubRecord.verify|verify} messages.
     * @function encode
     * @memberof GameSubRecord
     * @static
     * @param {IGameSubRecord} m GameSubRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    GameSubRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.subRoundId != null && Object.hasOwnProperty.call(m, "subRoundId"))
            w.uint32(8).int32(m.subRoundId);
        if (m.subBeginTime != null && Object.hasOwnProperty.call(m, "subBeginTime"))
            w.uint32(18).string(m.subBeginTime);
        if (m.subEndTime != null && Object.hasOwnProperty.call(m, "subEndTime"))
            w.uint32(26).string(m.subEndTime);
        if (m.subTotalPlayerNum != null && Object.hasOwnProperty.call(m, "subTotalPlayerNum"))
            w.uint32(32).int32(m.subTotalPlayerNum);
        if (m.subTotalBringin != null && Object.hasOwnProperty.call(m, "subTotalBringin"))
            w.uint32(40).int64(m.subTotalBringin);
        if (m.subTotalBringout != null && Object.hasOwnProperty.call(m, "subTotalBringout"))
            w.uint32(48).int64(m.subTotalBringout);
        if (m.subTotalCommission != null && Object.hasOwnProperty.call(m, "subTotalCommission"))
            w.uint32(56).int64(m.subTotalCommission);
        if (m.subTotalReturn != null && Object.hasOwnProperty.call(m, "subTotalReturn"))
            w.uint32(64).int64(m.subTotalReturn);
        if (m.subTotalInsurance != null && Object.hasOwnProperty.call(m, "subTotalInsurance"))
            w.uint32(72).int64(m.subTotalInsurance);
        if (m.jackpot != null && Object.hasOwnProperty.call(m, "jackpot"))
            w.uint32(80).int64(m.jackpot);
        if (m.jackpotCommission != null && Object.hasOwnProperty.call(m, "jackpotCommission"))
            w.uint32(88).int64(m.jackpotCommission);
        return w;
    };

    /**
     * Decodes a GameSubRecord message from the specified reader or buffer.
     * @function decode
     * @memberof GameSubRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {GameSubRecord} GameSubRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    GameSubRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.GameSubRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.subRoundId = r.int32();
                break;
            case 2:
                m.subBeginTime = r.string();
                break;
            case 3:
                m.subEndTime = r.string();
                break;
            case 4:
                m.subTotalPlayerNum = r.int32();
                break;
            case 5:
                m.subTotalBringin = r.int64();
                break;
            case 6:
                m.subTotalBringout = r.int64();
                break;
            case 7:
                m.subTotalCommission = r.int64();
                break;
            case 8:
                m.subTotalReturn = r.int64();
                break;
            case 9:
                m.subTotalInsurance = r.int64();
                break;
            case 10:
                m.jackpot = r.int64();
                break;
            case 11:
                m.jackpotCommission = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return GameSubRecord;
})();

$root.Game2LoggerReplayRecord = (function() {

    /**
     * Properties of a Game2LoggerReplayRecord.
     * @exports IGame2LoggerReplayRecord
     * @interface IGame2LoggerReplayRecord
     * @property {GameType|null} [gameType] Game2LoggerReplayRecord gameType
     * @property {string|null} [gameId] Game2LoggerReplayRecord gameId
     * @property {string|null} [endTime] Game2LoggerReplayRecord endTime
     * @property {Array.<IReplayRecord>|null} [replayRecord] Game2LoggerReplayRecord replayRecord
     */

    /**
     * Constructs a new Game2LoggerReplayRecord.
     * @exports Game2LoggerReplayRecord
     * @classdesc Represents a Game2LoggerReplayRecord.
     * @implements IGame2LoggerReplayRecord
     * @constructor
     * @param {IGame2LoggerReplayRecord=} [p] Properties to set
     */
    function Game2LoggerReplayRecord(p) {
        this.replayRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Game2LoggerReplayRecord gameType.
     * @member {GameType} gameType
     * @memberof Game2LoggerReplayRecord
     * @instance
     */
    Game2LoggerReplayRecord.prototype.gameType = 0;

    /**
     * Game2LoggerReplayRecord gameId.
     * @member {string} gameId
     * @memberof Game2LoggerReplayRecord
     * @instance
     */
    Game2LoggerReplayRecord.prototype.gameId = "";

    /**
     * Game2LoggerReplayRecord endTime.
     * @member {string} endTime
     * @memberof Game2LoggerReplayRecord
     * @instance
     */
    Game2LoggerReplayRecord.prototype.endTime = "";

    /**
     * Game2LoggerReplayRecord replayRecord.
     * @member {Array.<IReplayRecord>} replayRecord
     * @memberof Game2LoggerReplayRecord
     * @instance
     */
    Game2LoggerReplayRecord.prototype.replayRecord = $util.emptyArray;

    /**
     * Encodes the specified Game2LoggerReplayRecord message. Does not implicitly {@link Game2LoggerReplayRecord.verify|verify} messages.
     * @function encode
     * @memberof Game2LoggerReplayRecord
     * @static
     * @param {IGame2LoggerReplayRecord} m Game2LoggerReplayRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    Game2LoggerReplayRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(8).int32(m.gameType);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
            w.uint32(26).string(m.endTime);
        if (m.replayRecord != null && m.replayRecord.length) {
            for (var i = 0; i < m.replayRecord.length; ++i)
                $root.ReplayRecord.encode(m.replayRecord[i], w.uint32(34).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Game2LoggerReplayRecord message from the specified reader or buffer.
     * @function decode
     * @memberof Game2LoggerReplayRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Game2LoggerReplayRecord} Game2LoggerReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    Game2LoggerReplayRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Game2LoggerReplayRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameType = r.int32();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.endTime = r.string();
                break;
            case 4:
                if (!(m.replayRecord && m.replayRecord.length))
                    m.replayRecord = [];
                m.replayRecord.push($root.ReplayRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Game2LoggerReplayRecord;
})();

$root.ReplayRecord = (function() {

    /**
     * Properties of a ReplayRecord.
     * @exports IReplayRecord
     * @interface IReplayRecord
     * @property {string|null} [happenTime] ReplayRecord happenTime
     * @property {string|null} [userName] ReplayRecord userName
     * @property {string|null} [userId] ReplayRecord userId
     * @property {string|null} [clubName] ReplayRecord clubName
     * @property {string|null} [clubId] ReplayRecord clubId
     * @property {number|null} [index] ReplayRecord index
     * @property {Array.<ICardInfo>|null} [publicCards] ReplayRecord publicCards
     * @property {Array.<ICardInfo>|null} [myCards] ReplayRecord myCards
     * @property {number|null} [myResult] ReplayRecord myResult
     * @property {Array.<ICardInfo>|null} [winnerCards] ReplayRecord winnerCards
     * @property {string|null} [winnerName] ReplayRecord winnerName
     * @property {string|null} [winnerHead] ReplayRecord winnerHead
     * @property {number|null} [winnerResult] ReplayRecord winnerResult
     * @property {IBasicTexasConfig|null} [texasConfig] ReplayRecord texasConfig
     * @property {Array.<IPlayerInfo>|null} [players] ReplayRecord players
     * @property {string|null} [dealerUid] ReplayRecord dealerUid
     * @property {number|null} [antes] ReplayRecord antes
     * @property {Array.<IActionResult>|null} [roundStartActions] ReplayRecord roundStartActions
     * @property {Array.<IActionResult>|null} [preFlopActions] ReplayRecord preFlopActions
     * @property {Array.<IActionResult>|null} [flopActions] ReplayRecord flopActions
     * @property {Array.<IActionResult>|null} [turnActions] ReplayRecord turnActions
     * @property {Array.<IActionResult>|null} [riverActions] ReplayRecord riverActions
     * @property {Array.<IPlayerWinLose>|null} [result] ReplayRecord result
     * @property {Array.<IPotInfo>|null} [potInfoFlop] ReplayRecord potInfoFlop
     * @property {Array.<IPotInfo>|null} [potInfoTurn] ReplayRecord potInfoTurn
     * @property {Array.<IPotInfo>|null} [potInfoRiver] ReplayRecord potInfoRiver
     */

    /**
     * Constructs a new ReplayRecord.
     * @exports ReplayRecord
     * @classdesc Represents a ReplayRecord.
     * @implements IReplayRecord
     * @constructor
     * @param {IReplayRecord=} [p] Properties to set
     */
    function ReplayRecord(p) {
        this.publicCards = [];
        this.myCards = [];
        this.winnerCards = [];
        this.players = [];
        this.roundStartActions = [];
        this.preFlopActions = [];
        this.flopActions = [];
        this.turnActions = [];
        this.riverActions = [];
        this.result = [];
        this.potInfoFlop = [];
        this.potInfoTurn = [];
        this.potInfoRiver = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReplayRecord happenTime.
     * @member {string} happenTime
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.happenTime = "";

    /**
     * ReplayRecord userName.
     * @member {string} userName
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.userName = "";

    /**
     * ReplayRecord userId.
     * @member {string} userId
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.userId = "";

    /**
     * ReplayRecord clubName.
     * @member {string} clubName
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.clubName = "";

    /**
     * ReplayRecord clubId.
     * @member {string} clubId
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.clubId = "";

    /**
     * ReplayRecord index.
     * @member {number} index
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayRecord publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.publicCards = $util.emptyArray;

    /**
     * ReplayRecord myCards.
     * @member {Array.<ICardInfo>} myCards
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.myCards = $util.emptyArray;

    /**
     * ReplayRecord myResult.
     * @member {number} myResult
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.myResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayRecord winnerCards.
     * @member {Array.<ICardInfo>} winnerCards
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.winnerCards = $util.emptyArray;

    /**
     * ReplayRecord winnerName.
     * @member {string} winnerName
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.winnerName = "";

    /**
     * ReplayRecord winnerHead.
     * @member {string} winnerHead
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.winnerHead = "";

    /**
     * ReplayRecord winnerResult.
     * @member {number} winnerResult
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.winnerResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayRecord texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.texasConfig = null;

    /**
     * ReplayRecord players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.players = $util.emptyArray;

    /**
     * ReplayRecord dealerUid.
     * @member {string} dealerUid
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.dealerUid = "";

    /**
     * ReplayRecord antes.
     * @member {number} antes
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.antes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayRecord roundStartActions.
     * @member {Array.<IActionResult>} roundStartActions
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.roundStartActions = $util.emptyArray;

    /**
     * ReplayRecord preFlopActions.
     * @member {Array.<IActionResult>} preFlopActions
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.preFlopActions = $util.emptyArray;

    /**
     * ReplayRecord flopActions.
     * @member {Array.<IActionResult>} flopActions
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.flopActions = $util.emptyArray;

    /**
     * ReplayRecord turnActions.
     * @member {Array.<IActionResult>} turnActions
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.turnActions = $util.emptyArray;

    /**
     * ReplayRecord riverActions.
     * @member {Array.<IActionResult>} riverActions
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.riverActions = $util.emptyArray;

    /**
     * ReplayRecord result.
     * @member {Array.<IPlayerWinLose>} result
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.result = $util.emptyArray;

    /**
     * ReplayRecord potInfoFlop.
     * @member {Array.<IPotInfo>} potInfoFlop
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.potInfoFlop = $util.emptyArray;

    /**
     * ReplayRecord potInfoTurn.
     * @member {Array.<IPotInfo>} potInfoTurn
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.potInfoTurn = $util.emptyArray;

    /**
     * ReplayRecord potInfoRiver.
     * @member {Array.<IPotInfo>} potInfoRiver
     * @memberof ReplayRecord
     * @instance
     */
    ReplayRecord.prototype.potInfoRiver = $util.emptyArray;

    /**
     * Encodes the specified ReplayRecord message. Does not implicitly {@link ReplayRecord.verify|verify} messages.
     * @function encode
     * @memberof ReplayRecord
     * @static
     * @param {IReplayRecord} m ReplayRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ReplayRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.happenTime != null && Object.hasOwnProperty.call(m, "happenTime"))
            w.uint32(10).string(m.happenTime);
        if (m.userName != null && Object.hasOwnProperty.call(m, "userName"))
            w.uint32(18).string(m.userName);
        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
            w.uint32(26).string(m.userId);
        if (m.clubName != null && Object.hasOwnProperty.call(m, "clubName"))
            w.uint32(34).string(m.clubName);
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(42).string(m.clubId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(48).int64(m.index);
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(58).fork()).ldelim();
        }
        if (m.myCards != null && m.myCards.length) {
            for (var i = 0; i < m.myCards.length; ++i)
                $root.CardInfo.encode(m.myCards[i], w.uint32(66).fork()).ldelim();
        }
        if (m.myResult != null && Object.hasOwnProperty.call(m, "myResult"))
            w.uint32(72).int64(m.myResult);
        if (m.winnerCards != null && m.winnerCards.length) {
            for (var i = 0; i < m.winnerCards.length; ++i)
                $root.CardInfo.encode(m.winnerCards[i], w.uint32(82).fork()).ldelim();
        }
        if (m.winnerName != null && Object.hasOwnProperty.call(m, "winnerName"))
            w.uint32(90).string(m.winnerName);
        if (m.winnerHead != null && Object.hasOwnProperty.call(m, "winnerHead"))
            w.uint32(98).string(m.winnerHead);
        if (m.winnerResult != null && Object.hasOwnProperty.call(m, "winnerResult"))
            w.uint32(104).int64(m.winnerResult);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(114).fork()).ldelim();
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(122).fork()).ldelim();
        }
        if (m.dealerUid != null && Object.hasOwnProperty.call(m, "dealerUid"))
            w.uint32(130).string(m.dealerUid);
        if (m.antes != null && Object.hasOwnProperty.call(m, "antes"))
            w.uint32(136).int64(m.antes);
        if (m.roundStartActions != null && m.roundStartActions.length) {
            for (var i = 0; i < m.roundStartActions.length; ++i)
                $root.ActionResult.encode(m.roundStartActions[i], w.uint32(146).fork()).ldelim();
        }
        if (m.preFlopActions != null && m.preFlopActions.length) {
            for (var i = 0; i < m.preFlopActions.length; ++i)
                $root.ActionResult.encode(m.preFlopActions[i], w.uint32(154).fork()).ldelim();
        }
        if (m.flopActions != null && m.flopActions.length) {
            for (var i = 0; i < m.flopActions.length; ++i)
                $root.ActionResult.encode(m.flopActions[i], w.uint32(162).fork()).ldelim();
        }
        if (m.turnActions != null && m.turnActions.length) {
            for (var i = 0; i < m.turnActions.length; ++i)
                $root.ActionResult.encode(m.turnActions[i], w.uint32(170).fork()).ldelim();
        }
        if (m.riverActions != null && m.riverActions.length) {
            for (var i = 0; i < m.riverActions.length; ++i)
                $root.ActionResult.encode(m.riverActions[i], w.uint32(178).fork()).ldelim();
        }
        if (m.result != null && m.result.length) {
            for (var i = 0; i < m.result.length; ++i)
                $root.PlayerWinLose.encode(m.result[i], w.uint32(186).fork()).ldelim();
        }
        if (m.potInfoFlop != null && m.potInfoFlop.length) {
            for (var i = 0; i < m.potInfoFlop.length; ++i)
                $root.PotInfo.encode(m.potInfoFlop[i], w.uint32(194).fork()).ldelim();
        }
        if (m.potInfoTurn != null && m.potInfoTurn.length) {
            for (var i = 0; i < m.potInfoTurn.length; ++i)
                $root.PotInfo.encode(m.potInfoTurn[i], w.uint32(202).fork()).ldelim();
        }
        if (m.potInfoRiver != null && m.potInfoRiver.length) {
            for (var i = 0; i < m.potInfoRiver.length; ++i)
                $root.PotInfo.encode(m.potInfoRiver[i], w.uint32(210).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ReplayRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ReplayRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReplayRecord} ReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ReplayRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReplayRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.happenTime = r.string();
                break;
            case 2:
                m.userName = r.string();
                break;
            case 3:
                m.userId = r.string();
                break;
            case 4:
                m.clubName = r.string();
                break;
            case 5:
                m.clubId = r.string();
                break;
            case 6:
                m.index = r.int64();
                break;
            case 7:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 8:
                if (!(m.myCards && m.myCards.length))
                    m.myCards = [];
                m.myCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 9:
                m.myResult = r.int64();
                break;
            case 10:
                if (!(m.winnerCards && m.winnerCards.length))
                    m.winnerCards = [];
                m.winnerCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 11:
                m.winnerName = r.string();
                break;
            case 12:
                m.winnerHead = r.string();
                break;
            case 13:
                m.winnerResult = r.int64();
                break;
            case 14:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            case 15:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 16:
                m.dealerUid = r.string();
                break;
            case 17:
                m.antes = r.int64();
                break;
            case 18:
                if (!(m.roundStartActions && m.roundStartActions.length))
                    m.roundStartActions = [];
                m.roundStartActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 19:
                if (!(m.preFlopActions && m.preFlopActions.length))
                    m.preFlopActions = [];
                m.preFlopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 20:
                if (!(m.flopActions && m.flopActions.length))
                    m.flopActions = [];
                m.flopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 21:
                if (!(m.turnActions && m.turnActions.length))
                    m.turnActions = [];
                m.turnActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 22:
                if (!(m.riverActions && m.riverActions.length))
                    m.riverActions = [];
                m.riverActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 23:
                if (!(m.result && m.result.length))
                    m.result = [];
                m.result.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            case 24:
                if (!(m.potInfoFlop && m.potInfoFlop.length))
                    m.potInfoFlop = [];
                m.potInfoFlop.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 25:
                if (!(m.potInfoTurn && m.potInfoTurn.length))
                    m.potInfoTurn = [];
                m.potInfoTurn.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 26:
                if (!(m.potInfoRiver && m.potInfoRiver.length))
                    m.potInfoRiver = [];
                m.potInfoRiver.push($root.PotInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReplayRecord;
})();

$root.Game2LoggerAmountChange = (function() {

    /**
     * Properties of a Game2LoggerAmountChange.
     * @exports IGame2LoggerAmountChange
     * @interface IGame2LoggerAmountChange
     * @property {GameType|null} [gameType] Game2LoggerAmountChange gameType
     * @property {string|null} [gameId] Game2LoggerAmountChange gameId
     * @property {Array.<IAmountChangeInfo>|null} [amountChangeInfo] Game2LoggerAmountChange amountChangeInfo
     */

    /**
     * Constructs a new Game2LoggerAmountChange.
     * @exports Game2LoggerAmountChange
     * @classdesc Represents a Game2LoggerAmountChange.
     * @implements IGame2LoggerAmountChange
     * @constructor
     * @param {IGame2LoggerAmountChange=} [p] Properties to set
     */
    function Game2LoggerAmountChange(p) {
        this.amountChangeInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Game2LoggerAmountChange gameType.
     * @member {GameType} gameType
     * @memberof Game2LoggerAmountChange
     * @instance
     */
    Game2LoggerAmountChange.prototype.gameType = 0;

    /**
     * Game2LoggerAmountChange gameId.
     * @member {string} gameId
     * @memberof Game2LoggerAmountChange
     * @instance
     */
    Game2LoggerAmountChange.prototype.gameId = "";

    /**
     * Game2LoggerAmountChange amountChangeInfo.
     * @member {Array.<IAmountChangeInfo>} amountChangeInfo
     * @memberof Game2LoggerAmountChange
     * @instance
     */
    Game2LoggerAmountChange.prototype.amountChangeInfo = $util.emptyArray;

    /**
     * Encodes the specified Game2LoggerAmountChange message. Does not implicitly {@link Game2LoggerAmountChange.verify|verify} messages.
     * @function encode
     * @memberof Game2LoggerAmountChange
     * @static
     * @param {IGame2LoggerAmountChange} m Game2LoggerAmountChange message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    Game2LoggerAmountChange.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(8).int32(m.gameType);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.amountChangeInfo != null && m.amountChangeInfo.length) {
            for (var i = 0; i < m.amountChangeInfo.length; ++i)
                $root.AmountChangeInfo.encode(m.amountChangeInfo[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a Game2LoggerAmountChange message from the specified reader or buffer.
     * @function decode
     * @memberof Game2LoggerAmountChange
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {Game2LoggerAmountChange} Game2LoggerAmountChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    Game2LoggerAmountChange.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Game2LoggerAmountChange();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameType = r.int32();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.amountChangeInfo && m.amountChangeInfo.length))
                    m.amountChangeInfo = [];
                m.amountChangeInfo.push($root.AmountChangeInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return Game2LoggerAmountChange;
})();

$root.AmountChangeInfo = (function() {

    /**
     * Properties of an AmountChangeInfo.
     * @exports IAmountChangeInfo
     * @interface IAmountChangeInfo
     * @property {string|null} [happenTime] AmountChangeInfo happenTime
     * @property {string|null} [userId] AmountChangeInfo userId
     * @property {string|null} [userName] AmountChangeInfo userName
     * @property {string|null} [head] AmountChangeInfo head
     * @property {number|null} [amountChange] AmountChangeInfo amountChange
     * @property {number|null} [preChange] AmountChangeInfo preChange
     * @property {number|null} [afterChange] AmountChangeInfo afterChange
     * @property {AmountChangeType|null} [amountChangeType] AmountChangeInfo amountChangeType
     * @property {IAmountChangeGenerics|null} [amountChangeGenerics] AmountChangeInfo amountChangeGenerics
     */

    /**
     * Constructs a new AmountChangeInfo.
     * @exports AmountChangeInfo
     * @classdesc Represents an AmountChangeInfo.
     * @implements IAmountChangeInfo
     * @constructor
     * @param {IAmountChangeInfo=} [p] Properties to set
     */
    function AmountChangeInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AmountChangeInfo happenTime.
     * @member {string} happenTime
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.happenTime = "";

    /**
     * AmountChangeInfo userId.
     * @member {string} userId
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.userId = "";

    /**
     * AmountChangeInfo userName.
     * @member {string} userName
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.userName = "";

    /**
     * AmountChangeInfo head.
     * @member {string} head
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.head = "";

    /**
     * AmountChangeInfo amountChange.
     * @member {number} amountChange
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.amountChange = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeInfo preChange.
     * @member {number} preChange
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.preChange = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeInfo afterChange.
     * @member {number} afterChange
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.afterChange = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeInfo amountChangeType.
     * @member {AmountChangeType} amountChangeType
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.amountChangeType = 0;

    /**
     * AmountChangeInfo amountChangeGenerics.
     * @member {IAmountChangeGenerics|null|undefined} amountChangeGenerics
     * @memberof AmountChangeInfo
     * @instance
     */
    AmountChangeInfo.prototype.amountChangeGenerics = null;

    /**
     * Encodes the specified AmountChangeInfo message. Does not implicitly {@link AmountChangeInfo.verify|verify} messages.
     * @function encode
     * @memberof AmountChangeInfo
     * @static
     * @param {IAmountChangeInfo} m AmountChangeInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    AmountChangeInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.happenTime != null && Object.hasOwnProperty.call(m, "happenTime"))
            w.uint32(10).string(m.happenTime);
        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
            w.uint32(18).string(m.userId);
        if (m.userName != null && Object.hasOwnProperty.call(m, "userName"))
            w.uint32(26).string(m.userName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(34).string(m.head);
        if (m.amountChange != null && Object.hasOwnProperty.call(m, "amountChange"))
            w.uint32(40).int64(m.amountChange);
        if (m.preChange != null && Object.hasOwnProperty.call(m, "preChange"))
            w.uint32(48).int64(m.preChange);
        if (m.afterChange != null && Object.hasOwnProperty.call(m, "afterChange"))
            w.uint32(56).int64(m.afterChange);
        if (m.amountChangeType != null && Object.hasOwnProperty.call(m, "amountChangeType"))
            w.uint32(64).int32(m.amountChangeType);
        if (m.amountChangeGenerics != null && Object.hasOwnProperty.call(m, "amountChangeGenerics"))
            $root.AmountChangeGenerics.encode(m.amountChangeGenerics, w.uint32(74).fork()).ldelim();
        return w;
    };

    /**
     * Decodes an AmountChangeInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AmountChangeInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AmountChangeInfo} AmountChangeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    AmountChangeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AmountChangeInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.happenTime = r.string();
                break;
            case 2:
                m.userId = r.string();
                break;
            case 3:
                m.userName = r.string();
                break;
            case 4:
                m.head = r.string();
                break;
            case 5:
                m.amountChange = r.int64();
                break;
            case 6:
                m.preChange = r.int64();
                break;
            case 7:
                m.afterChange = r.int64();
                break;
            case 8:
                m.amountChangeType = r.int32();
                break;
            case 9:
                m.amountChangeGenerics = $root.AmountChangeGenerics.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AmountChangeInfo;
})();

$root.AmountChangeGenerics = (function() {

    /**
     * Properties of an AmountChangeGenerics.
     * @exports IAmountChangeGenerics
     * @interface IAmountChangeGenerics
     * @property {string|null} [clubName] AmountChangeGenerics clubName
     * @property {string|null} [clubId] AmountChangeGenerics clubId
     * @property {number|null} [baseProfit] AmountChangeGenerics baseProfit
     * @property {number|null} [propRate] AmountChangeGenerics propRate
     * @property {PropType|null} [propType] AmountChangeGenerics propType
     * @property {number|null} [preSettlement] AmountChangeGenerics preSettlement
     * @property {string|null} [handId] AmountChangeGenerics handId
     * @property {number|null} [poolRate] AmountChangeGenerics poolRate
     * @property {number|null} [currentHandCount] AmountChangeGenerics currentHandCount
     * @property {number|null} [currentWinCount] AmountChangeGenerics currentWinCount
     * @property {CowboyAreaType|null} [betType] AmountChangeGenerics betType
     * @property {number|null} [levelRate] AmountChangeGenerics levelRate
     * @property {JackpotType|null} [jackpotType] AmountChangeGenerics jackpotType
     * @property {number|null} [jackpotRate] AmountChangeGenerics jackpotRate
     * @property {number|null} [jackpotPool] AmountChangeGenerics jackpotPool
     */

    /**
     * Constructs a new AmountChangeGenerics.
     * @exports AmountChangeGenerics
     * @classdesc Represents an AmountChangeGenerics.
     * @implements IAmountChangeGenerics
     * @constructor
     * @param {IAmountChangeGenerics=} [p] Properties to set
     */
    function AmountChangeGenerics(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AmountChangeGenerics clubName.
     * @member {string} clubName
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.clubName = "";

    /**
     * AmountChangeGenerics clubId.
     * @member {string} clubId
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.clubId = "";

    /**
     * AmountChangeGenerics baseProfit.
     * @member {number} baseProfit
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.baseProfit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeGenerics propRate.
     * @member {number} propRate
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.propRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeGenerics propType.
     * @member {PropType} propType
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.propType = 0;

    /**
     * AmountChangeGenerics preSettlement.
     * @member {number} preSettlement
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.preSettlement = 0;

    /**
     * AmountChangeGenerics handId.
     * @member {string} handId
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.handId = "";

    /**
     * AmountChangeGenerics poolRate.
     * @member {number} poolRate
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.poolRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeGenerics currentHandCount.
     * @member {number} currentHandCount
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.currentHandCount = 0;

    /**
     * AmountChangeGenerics currentWinCount.
     * @member {number} currentWinCount
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.currentWinCount = 0;

    /**
     * AmountChangeGenerics betType.
     * @member {CowboyAreaType} betType
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.betType = 0;

    /**
     * AmountChangeGenerics levelRate.
     * @member {number} levelRate
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.levelRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeGenerics jackpotType.
     * @member {JackpotType} jackpotType
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.jackpotType = 0;

    /**
     * AmountChangeGenerics jackpotRate.
     * @member {number} jackpotRate
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.jackpotRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AmountChangeGenerics jackpotPool.
     * @member {number} jackpotPool
     * @memberof AmountChangeGenerics
     * @instance
     */
    AmountChangeGenerics.prototype.jackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified AmountChangeGenerics message. Does not implicitly {@link AmountChangeGenerics.verify|verify} messages.
     * @function encode
     * @memberof AmountChangeGenerics
     * @static
     * @param {IAmountChangeGenerics} m AmountChangeGenerics message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    AmountChangeGenerics.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubName != null && Object.hasOwnProperty.call(m, "clubName"))
            w.uint32(10).string(m.clubName);
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.baseProfit != null && Object.hasOwnProperty.call(m, "baseProfit"))
            w.uint32(24).int64(m.baseProfit);
        if (m.propRate != null && Object.hasOwnProperty.call(m, "propRate"))
            w.uint32(32).int64(m.propRate);
        if (m.propType != null && Object.hasOwnProperty.call(m, "propType"))
            w.uint32(40).int32(m.propType);
        if (m.preSettlement != null && Object.hasOwnProperty.call(m, "preSettlement"))
            w.uint32(48).int32(m.preSettlement);
        if (m.handId != null && Object.hasOwnProperty.call(m, "handId"))
            w.uint32(58).string(m.handId);
        if (m.poolRate != null && Object.hasOwnProperty.call(m, "poolRate"))
            w.uint32(64).int64(m.poolRate);
        if (m.currentHandCount != null && Object.hasOwnProperty.call(m, "currentHandCount"))
            w.uint32(72).int32(m.currentHandCount);
        if (m.currentWinCount != null && Object.hasOwnProperty.call(m, "currentWinCount"))
            w.uint32(80).int32(m.currentWinCount);
        if (m.betType != null && Object.hasOwnProperty.call(m, "betType"))
            w.uint32(88).int32(m.betType);
        if (m.levelRate != null && Object.hasOwnProperty.call(m, "levelRate"))
            w.uint32(96).int64(m.levelRate);
        if (m.jackpotType != null && Object.hasOwnProperty.call(m, "jackpotType"))
            w.uint32(104).int32(m.jackpotType);
        if (m.jackpotRate != null && Object.hasOwnProperty.call(m, "jackpotRate"))
            w.uint32(112).int64(m.jackpotRate);
        if (m.jackpotPool != null && Object.hasOwnProperty.call(m, "jackpotPool"))
            w.uint32(120).int64(m.jackpotPool);
        return w;
    };

    /**
     * Decodes an AmountChangeGenerics message from the specified reader or buffer.
     * @function decode
     * @memberof AmountChangeGenerics
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AmountChangeGenerics} AmountChangeGenerics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    AmountChangeGenerics.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AmountChangeGenerics();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubName = r.string();
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                m.baseProfit = r.int64();
                break;
            case 4:
                m.propRate = r.int64();
                break;
            case 5:
                m.propType = r.int32();
                break;
            case 6:
                m.preSettlement = r.int32();
                break;
            case 7:
                m.handId = r.string();
                break;
            case 8:
                m.poolRate = r.int64();
                break;
            case 9:
                m.currentHandCount = r.int32();
                break;
            case 10:
                m.currentWinCount = r.int32();
                break;
            case 11:
                m.betType = r.int32();
                break;
            case 12:
                m.levelRate = r.int64();
                break;
            case 13:
                m.jackpotType = r.int32();
                break;
            case 14:
                m.jackpotRate = r.int64();
                break;
            case 15:
                m.jackpotPool = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AmountChangeGenerics;
})();

/**
 * ActionType enum.
 * @exports ActionType
 * @enum {number}
 * @property {number} ActionType_Init=0 ActionType_Init value
 * @property {number} ActionType_Fold=1 ActionType_Fold value
 * @property {number} ActionType_Check=2 ActionType_Check value
 * @property {number} ActionType_Bet=3 ActionType_Bet value
 * @property {number} ActionType_Ante=4 ActionType_Ante value
 * @property {number} ActionType_SB=5 ActionType_SB value
 * @property {number} ActionType_BB=6 ActionType_BB value
 * @property {number} ActionType_Straddle=7 ActionType_Straddle value
 * @property {number} ActionType_Raise=8 ActionType_Raise value
 * @property {number} ActionType_AllIn=9 ActionType_AllIn value
 * @property {number} ActionType_Call=10 ActionType_Call value
 */
$root.ActionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ActionType_Init"] = 0;
    values[valuesById[1] = "ActionType_Fold"] = 1;
    values[valuesById[2] = "ActionType_Check"] = 2;
    values[valuesById[3] = "ActionType_Bet"] = 3;
    values[valuesById[4] = "ActionType_Ante"] = 4;
    values[valuesById[5] = "ActionType_SB"] = 5;
    values[valuesById[6] = "ActionType_BB"] = 6;
    values[valuesById[7] = "ActionType_Straddle"] = 7;
    values[valuesById[8] = "ActionType_Raise"] = 8;
    values[valuesById[9] = "ActionType_AllIn"] = 9;
    values[valuesById[10] = "ActionType_Call"] = 10;
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
 * TexasCashState enum.
 * @exports TexasCashState
 * @enum {number}
 * @property {number} TexasCashState_Create=0 TexasCashState_Create value
 * @property {number} TexasCashState_WaitStart=1 TexasCashState_WaitStart value
 * @property {number} TexasCashState_RoundStart=2 TexasCashState_RoundStart value
 * @property {number} TexasCashState_PreFlopRound=3 TexasCashState_PreFlopRound value
 * @property {number} TexasCashState_FlopRound=4 TexasCashState_FlopRound value
 * @property {number} TexasCashState_TurnRound=5 TexasCashState_TurnRound value
 * @property {number} TexasCashState_RiverRound=6 TexasCashState_RiverRound value
 * @property {number} TexasCashState_Settlement=7 TexasCashState_Settlement value
 */
$root.TexasCashState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TexasCashState_Create"] = 0;
    values[valuesById[1] = "TexasCashState_WaitStart"] = 1;
    values[valuesById[2] = "TexasCashState_RoundStart"] = 2;
    values[valuesById[3] = "TexasCashState_PreFlopRound"] = 3;
    values[valuesById[4] = "TexasCashState_FlopRound"] = 4;
    values[valuesById[5] = "TexasCashState_TurnRound"] = 5;
    values[valuesById[6] = "TexasCashState_RiverRound"] = 6;
    values[valuesById[7] = "TexasCashState_Settlement"] = 7;
    return values;
})();

/**
 * GameRole enum.
 * @exports GameRole
 * @enum {number}
 * @property {number} GameRole_Observer=0 GameRole_Observer value
 * @property {number} GameRole_Player=1 GameRole_Player value
 */
$root.GameRole = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GameRole_Observer"] = 0;
    values[valuesById[1] = "GameRole_Player"] = 1;
    return values;
})();

$root.BasicTexasConfig = (function() {

    /**
     * Properties of a BasicTexasConfig.
     * @exports IBasicTexasConfig
     * @interface IBasicTexasConfig
     * @property {GameType|null} [gameType] BasicTexasConfig gameType
     * @property {string|null} [gameName] BasicTexasConfig gameName
     * @property {GameCurrencyType|null} [currencyType] BasicTexasConfig currencyType
     * @property {GameTaxType|null} [taxType] BasicTexasConfig taxType
     * @property {number|null} [taxRatio] BasicTexasConfig taxRatio
     * @property {number|null} [smallBlind] BasicTexasConfig smallBlind
     * @property {boolean|null} [straddle] BasicTexasConfig straddle
     * @property {number|null} [ante] BasicTexasConfig ante
     * @property {number|null} [maxTotalBuyIn] BasicTexasConfig maxTotalBuyIn
     * @property {number|null} [minBringIn] BasicTexasConfig minBringIn
     * @property {number|null} [maxBringIn] BasicTexasConfig maxBringIn
     * @property {boolean|null} [allowBringOut] BasicTexasConfig allowBringOut
     * @property {number|null} [minScoreAfterBringOut] BasicTexasConfig minScoreAfterBringOut
     * @property {boolean|null} [insurance] BasicTexasConfig insurance
     * @property {number|null} [gameDuration] BasicTexasConfig gameDuration
     * @property {number|null} [thinkingTime] BasicTexasConfig thinkingTime
     * @property {number|null} [seatNum] BasicTexasConfig seatNum
     * @property {number|null} [autoStartNum] BasicTexasConfig autoStartNum
     * @property {boolean|null} [gpsLimit] BasicTexasConfig gpsLimit
     * @property {boolean|null} [ipLimit] BasicTexasConfig ipLimit
     */

    /**
     * Constructs a new BasicTexasConfig.
     * @exports BasicTexasConfig
     * @classdesc Represents a BasicTexasConfig.
     * @implements IBasicTexasConfig
     * @constructor
     * @param {IBasicTexasConfig=} [p] Properties to set
     */
    function BasicTexasConfig(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BasicTexasConfig gameType.
     * @member {GameType} gameType
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.gameType = 0;

    /**
     * BasicTexasConfig gameName.
     * @member {string} gameName
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.gameName = "";

    /**
     * BasicTexasConfig currencyType.
     * @member {GameCurrencyType} currencyType
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.currencyType = 0;

    /**
     * BasicTexasConfig taxType.
     * @member {GameTaxType} taxType
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.taxType = 0;

    /**
     * BasicTexasConfig taxRatio.
     * @member {number} taxRatio
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.taxRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig smallBlind.
     * @member {number} smallBlind
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.smallBlind = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig straddle.
     * @member {boolean} straddle
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.straddle = false;

    /**
     * BasicTexasConfig ante.
     * @member {number} ante
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.ante = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig maxTotalBuyIn.
     * @member {number} maxTotalBuyIn
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.maxTotalBuyIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig minBringIn.
     * @member {number} minBringIn
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.minBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig maxBringIn.
     * @member {number} maxBringIn
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.maxBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig allowBringOut.
     * @member {boolean} allowBringOut
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.allowBringOut = false;

    /**
     * BasicTexasConfig minScoreAfterBringOut.
     * @member {number} minScoreAfterBringOut
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.minScoreAfterBringOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig insurance.
     * @member {boolean} insurance
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.insurance = false;

    /**
     * BasicTexasConfig gameDuration.
     * @member {number} gameDuration
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.gameDuration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig thinkingTime.
     * @member {number} thinkingTime
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.thinkingTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig seatNum.
     * @member {number} seatNum
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.seatNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig autoStartNum.
     * @member {number} autoStartNum
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.autoStartNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig gpsLimit.
     * @member {boolean} gpsLimit
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.gpsLimit = false;

    /**
     * BasicTexasConfig ipLimit.
     * @member {boolean} ipLimit
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.ipLimit = false;

    /**
     * Encodes the specified BasicTexasConfig message. Does not implicitly {@link BasicTexasConfig.verify|verify} messages.
     * @function encode
     * @memberof BasicTexasConfig
     * @static
     * @param {IBasicTexasConfig} m BasicTexasConfig message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    BasicTexasConfig.encode = function encode(m, w) {
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
        if (m.smallBlind != null && Object.hasOwnProperty.call(m, "smallBlind"))
            w.uint32(48).int64(m.smallBlind);
        if (m.straddle != null && Object.hasOwnProperty.call(m, "straddle"))
            w.uint32(56).bool(m.straddle);
        if (m.ante != null && Object.hasOwnProperty.call(m, "ante"))
            w.uint32(64).int64(m.ante);
        if (m.maxTotalBuyIn != null && Object.hasOwnProperty.call(m, "maxTotalBuyIn"))
            w.uint32(72).int64(m.maxTotalBuyIn);
        if (m.minBringIn != null && Object.hasOwnProperty.call(m, "minBringIn"))
            w.uint32(80).int64(m.minBringIn);
        if (m.maxBringIn != null && Object.hasOwnProperty.call(m, "maxBringIn"))
            w.uint32(88).int64(m.maxBringIn);
        if (m.allowBringOut != null && Object.hasOwnProperty.call(m, "allowBringOut"))
            w.uint32(96).bool(m.allowBringOut);
        if (m.minScoreAfterBringOut != null && Object.hasOwnProperty.call(m, "minScoreAfterBringOut"))
            w.uint32(104).int64(m.minScoreAfterBringOut);
        if (m.insurance != null && Object.hasOwnProperty.call(m, "insurance"))
            w.uint32(112).bool(m.insurance);
        if (m.gameDuration != null && Object.hasOwnProperty.call(m, "gameDuration"))
            w.uint32(120).int64(m.gameDuration);
        if (m.thinkingTime != null && Object.hasOwnProperty.call(m, "thinkingTime"))
            w.uint32(128).int64(m.thinkingTime);
        if (m.seatNum != null && Object.hasOwnProperty.call(m, "seatNum"))
            w.uint32(136).int64(m.seatNum);
        if (m.autoStartNum != null && Object.hasOwnProperty.call(m, "autoStartNum"))
            w.uint32(144).int64(m.autoStartNum);
        if (m.gpsLimit != null && Object.hasOwnProperty.call(m, "gpsLimit"))
            w.uint32(152).bool(m.gpsLimit);
        if (m.ipLimit != null && Object.hasOwnProperty.call(m, "ipLimit"))
            w.uint32(160).bool(m.ipLimit);
        return w;
    };

    /**
     * Decodes a BasicTexasConfig message from the specified reader or buffer.
     * @function decode
     * @memberof BasicTexasConfig
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BasicTexasConfig} BasicTexasConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    BasicTexasConfig.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BasicTexasConfig();
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
            case 6:
                m.smallBlind = r.int64();
                break;
            case 7:
                m.straddle = r.bool();
                break;
            case 8:
                m.ante = r.int64();
                break;
            case 9:
                m.maxTotalBuyIn = r.int64();
                break;
            case 10:
                m.minBringIn = r.int64();
                break;
            case 11:
                m.maxBringIn = r.int64();
                break;
            case 12:
                m.allowBringOut = r.bool();
                break;
            case 13:
                m.minScoreAfterBringOut = r.int64();
                break;
            case 14:
                m.insurance = r.bool();
                break;
            case 15:
                m.gameDuration = r.int64();
                break;
            case 16:
                m.thinkingTime = r.int64();
                break;
            case 17:
                m.seatNum = r.int64();
                break;
            case 18:
                m.autoStartNum = r.int64();
                break;
            case 19:
                m.gpsLimit = r.bool();
                break;
            case 20:
                m.ipLimit = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BasicTexasConfig;
})();

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {string|null} [uid] PlayerInfo uid
     * @property {string|null} [nickName] PlayerInfo nickName
     * @property {string|null} [head] PlayerInfo head
     * @property {number|null} [currencyNum] PlayerInfo currencyNum
     * @property {number|null} [bringInNum] PlayerInfo bringInNum
     * @property {boolean|null} [online] PlayerInfo online
     * @property {GameRole|null} [gameRole] PlayerInfo gameRole
     * @property {Array.<ICardInfo>|null} [cards] PlayerInfo cards
     * @property {number|null} [seat] PlayerInfo seat
     * @property {number|null} [buyInLeftTime] PlayerInfo buyInLeftTime
     * @property {boolean|null} [fold] PlayerInfo fold
     * @property {number|null} [autoLeftTime] PlayerInfo autoLeftTime
     */

    /**
     * Constructs a new PlayerInfo.
     * @exports PlayerInfo
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {IPlayerInfo=} [p] Properties to set
     */
    function PlayerInfo(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerInfo uid.
     * @member {string} uid
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.uid = "";

    /**
     * PlayerInfo nickName.
     * @member {string} nickName
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.nickName = "";

    /**
     * PlayerInfo head.
     * @member {string} head
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.head = "";

    /**
     * PlayerInfo currencyNum.
     * @member {number} currencyNum
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.currencyNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo bringInNum.
     * @member {number} bringInNum
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.bringInNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo online.
     * @member {boolean} online
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.online = false;

    /**
     * PlayerInfo gameRole.
     * @member {GameRole} gameRole
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.gameRole = 0;

    /**
     * PlayerInfo cards.
     * @member {Array.<ICardInfo>} cards
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.cards = $util.emptyArray;

    /**
     * PlayerInfo seat.
     * @member {number} seat
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.seat = 0;

    /**
     * PlayerInfo buyInLeftTime.
     * @member {number} buyInLeftTime
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.buyInLeftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo fold.
     * @member {boolean} fold
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.fold = false;

    /**
     * PlayerInfo autoLeftTime.
     * @member {number} autoLeftTime
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.autoLeftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} m PlayerInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    PlayerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(18).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(26).string(m.head);
        if (m.currencyNum != null && Object.hasOwnProperty.call(m, "currencyNum"))
            w.uint32(32).int64(m.currencyNum);
        if (m.bringInNum != null && Object.hasOwnProperty.call(m, "bringInNum"))
            w.uint32(40).int64(m.bringInNum);
        if (m.online != null && Object.hasOwnProperty.call(m, "online"))
            w.uint32(48).bool(m.online);
        if (m.gameRole != null && Object.hasOwnProperty.call(m, "gameRole"))
            w.uint32(56).int32(m.gameRole);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                $root.CardInfo.encode(m.cards[i], w.uint32(66).fork()).ldelim();
        }
        if (m.seat != null && Object.hasOwnProperty.call(m, "seat"))
            w.uint32(72).int32(m.seat);
        if (m.buyInLeftTime != null && Object.hasOwnProperty.call(m, "buyInLeftTime"))
            w.uint32(80).int64(m.buyInLeftTime);
        if (m.fold != null && Object.hasOwnProperty.call(m, "fold"))
            w.uint32(88).bool(m.fold);
        if (m.autoLeftTime != null && Object.hasOwnProperty.call(m, "autoLeftTime"))
            w.uint32(96).int64(m.autoLeftTime);
        return w;
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.nickName = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.currencyNum = r.int64();
                break;
            case 5:
                m.bringInNum = r.int64();
                break;
            case 6:
                m.online = r.bool();
                break;
            case 7:
                m.gameRole = r.int32();
                break;
            case 8:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                m.cards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 9:
                m.seat = r.int32();
                break;
            case 10:
                m.buyInLeftTime = r.int64();
                break;
            case 11:
                m.fold = r.bool();
                break;
            case 12:
                m.autoLeftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerInfo;
})();

$root.PlayerHistoryInfo = (function() {

    /**
     * Properties of a PlayerHistoryInfo.
     * @exports IPlayerHistoryInfo
     * @interface IPlayerHistoryInfo
     * @property {string|null} [uid] PlayerHistoryInfo uid
     * @property {string|null} [nickName] PlayerHistoryInfo nickName
     * @property {string|null} [head] PlayerHistoryInfo head
     * @property {number|null} [totalGames] PlayerHistoryInfo totalGames
     * @property {number|null} [totalBringIn] PlayerHistoryInfo totalBringIn
     * @property {number|null} [totalWinLose] PlayerHistoryInfo totalWinLose
     */

    /**
     * Constructs a new PlayerHistoryInfo.
     * @exports PlayerHistoryInfo
     * @classdesc Represents a PlayerHistoryInfo.
     * @implements IPlayerHistoryInfo
     * @constructor
     * @param {IPlayerHistoryInfo=} [p] Properties to set
     */
    function PlayerHistoryInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerHistoryInfo uid.
     * @member {string} uid
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.uid = "";

    /**
     * PlayerHistoryInfo nickName.
     * @member {string} nickName
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.nickName = "";

    /**
     * PlayerHistoryInfo head.
     * @member {string} head
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.head = "";

    /**
     * PlayerHistoryInfo totalGames.
     * @member {number} totalGames
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.totalGames = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerHistoryInfo totalBringIn.
     * @member {number} totalBringIn
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.totalBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerHistoryInfo totalWinLose.
     * @member {number} totalWinLose
     * @memberof PlayerHistoryInfo
     * @instance
     */
    PlayerHistoryInfo.prototype.totalWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified PlayerHistoryInfo message. Does not implicitly {@link PlayerHistoryInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerHistoryInfo
     * @static
     * @param {IPlayerHistoryInfo} m PlayerHistoryInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    PlayerHistoryInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(18).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(26).string(m.head);
        if (m.totalGames != null && Object.hasOwnProperty.call(m, "totalGames"))
            w.uint32(32).int64(m.totalGames);
        if (m.totalBringIn != null && Object.hasOwnProperty.call(m, "totalBringIn"))
            w.uint32(40).int64(m.totalBringIn);
        if (m.totalWinLose != null && Object.hasOwnProperty.call(m, "totalWinLose"))
            w.uint32(48).int64(m.totalWinLose);
        return w;
    };

    /**
     * Decodes a PlayerHistoryInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerHistoryInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerHistoryInfo} PlayerHistoryInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerHistoryInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerHistoryInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.nickName = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.totalGames = r.int64();
                break;
            case 5:
                m.totalBringIn = r.int64();
                break;
            case 6:
                m.totalWinLose = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerHistoryInfo;
})();

$root.ActionInfo = (function() {

    /**
     * Properties of an ActionInfo.
     * @exports IActionInfo
     * @interface IActionInfo
     * @property {string|null} [uid] ActionInfo uid
     * @property {ActionType|null} [actionType] ActionInfo actionType
     * @property {number|null} [amount] ActionInfo amount
     * @property {number|null} [roundAmount] ActionInfo roundAmount
     */

    /**
     * Constructs a new ActionInfo.
     * @exports ActionInfo
     * @classdesc Represents an ActionInfo.
     * @implements IActionInfo
     * @constructor
     * @param {IActionInfo=} [p] Properties to set
     */
    function ActionInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionInfo uid.
     * @member {string} uid
     * @memberof ActionInfo
     * @instance
     */
    ActionInfo.prototype.uid = "";

    /**
     * ActionInfo actionType.
     * @member {ActionType} actionType
     * @memberof ActionInfo
     * @instance
     */
    ActionInfo.prototype.actionType = 0;

    /**
     * ActionInfo amount.
     * @member {number} amount
     * @memberof ActionInfo
     * @instance
     */
    ActionInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ActionInfo roundAmount.
     * @member {number} roundAmount
     * @memberof ActionInfo
     * @instance
     */
    ActionInfo.prototype.roundAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ActionInfo message. Does not implicitly {@link ActionInfo.verify|verify} messages.
     * @function encode
     * @memberof ActionInfo
     * @static
     * @param {IActionInfo} m ActionInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ActionInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.actionType != null && Object.hasOwnProperty.call(m, "actionType"))
            w.uint32(16).int32(m.actionType);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        if (m.roundAmount != null && Object.hasOwnProperty.call(m, "roundAmount"))
            w.uint32(32).int64(m.roundAmount);
        return w;
    };

    /**
     * Decodes an ActionInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ActionInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionInfo} ActionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ActionInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.actionType = r.int32();
                break;
            case 3:
                m.amount = r.int64();
                break;
            case 4:
                m.roundAmount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ActionInfo;
})();

$root.PotInfo = (function() {

    /**
     * Properties of a PotInfo.
     * @exports IPotInfo
     * @interface IPotInfo
     * @property {number|null} [pot] PotInfo pot
     * @property {number|null} [potId] PotInfo potId
     */

    /**
     * Constructs a new PotInfo.
     * @exports PotInfo
     * @classdesc Represents a PotInfo.
     * @implements IPotInfo
     * @constructor
     * @param {IPotInfo=} [p] Properties to set
     */
    function PotInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PotInfo pot.
     * @member {number} pot
     * @memberof PotInfo
     * @instance
     */
    PotInfo.prototype.pot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PotInfo potId.
     * @member {number} potId
     * @memberof PotInfo
     * @instance
     */
    PotInfo.prototype.potId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified PotInfo message. Does not implicitly {@link PotInfo.verify|verify} messages.
     * @function encode
     * @memberof PotInfo
     * @static
     * @param {IPotInfo} m PotInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    PotInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.pot != null && Object.hasOwnProperty.call(m, "pot"))
            w.uint32(8).int64(m.pot);
        if (m.potId != null && Object.hasOwnProperty.call(m, "potId"))
            w.uint32(16).int64(m.potId);
        return w;
    };

    /**
     * Decodes a PotInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PotInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PotInfo} PotInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    PotInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PotInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.pot = r.int64();
                break;
            case 2:
                m.potId = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PotInfo;
})();

$root.CombinationResult = (function() {

    /**
     * Properties of a CombinationResult.
     * @exports ICombinationResult
     * @interface ICombinationResult
     * @property {Array.<ICardInfo>|null} [cards] CombinationResult cards
     * @property {number|null} [Combination] CombinationResult Combination
     */

    /**
     * Constructs a new CombinationResult.
     * @exports CombinationResult
     * @classdesc Represents a CombinationResult.
     * @implements ICombinationResult
     * @constructor
     * @param {ICombinationResult=} [p] Properties to set
     */
    function CombinationResult(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CombinationResult cards.
     * @member {Array.<ICardInfo>} cards
     * @memberof CombinationResult
     * @instance
     */
    CombinationResult.prototype.cards = $util.emptyArray;

    /**
     * CombinationResult Combination.
     * @member {number} Combination
     * @memberof CombinationResult
     * @instance
     */
    CombinationResult.prototype.Combination = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Encodes the specified CombinationResult message. Does not implicitly {@link CombinationResult.verify|verify} messages.
     * @function encode
     * @memberof CombinationResult
     * @static
     * @param {ICombinationResult} m CombinationResult message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CombinationResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                $root.CardInfo.encode(m.cards[i], w.uint32(10).fork()).ldelim();
        }
        if (m.Combination != null && Object.hasOwnProperty.call(m, "Combination"))
            w.uint32(16).uint64(m.Combination);
        return w;
    };

    /**
     * Decodes a CombinationResult message from the specified reader or buffer.
     * @function decode
     * @memberof CombinationResult
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CombinationResult} CombinationResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CombinationResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CombinationResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                m.cards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.Combination = r.uint64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CombinationResult;
})();

$root.PlayerWinLose = (function() {

    /**
     * Properties of a PlayerWinLose.
     * @exports IPlayerWinLose
     * @interface IPlayerWinLose
     * @property {string|null} [uid] PlayerWinLose uid
     * @property {number|null} [winLose] PlayerWinLose winLose
     * @property {Array.<ICardInfo>|null} [cardInfo] PlayerWinLose cardInfo
     * @property {ICombinationResult|null} [combinationResult] PlayerWinLose combinationResult
     * @property {number|null} [amount] PlayerWinLose amount
     */

    /**
     * Constructs a new PlayerWinLose.
     * @exports PlayerWinLose
     * @classdesc Represents a PlayerWinLose.
     * @implements IPlayerWinLose
     * @constructor
     * @param {IPlayerWinLose=} [p] Properties to set
     */
    function PlayerWinLose(p) {
        this.cardInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerWinLose uid.
     * @member {string} uid
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.uid = "";

    /**
     * PlayerWinLose winLose.
     * @member {number} winLose
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerWinLose cardInfo.
     * @member {Array.<ICardInfo>} cardInfo
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.cardInfo = $util.emptyArray;

    /**
     * PlayerWinLose combinationResult.
     * @member {ICombinationResult|null|undefined} combinationResult
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.combinationResult = null;

    /**
     * PlayerWinLose amount.
     * @member {number} amount
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified PlayerWinLose message. Does not implicitly {@link PlayerWinLose.verify|verify} messages.
     * @function encode
     * @memberof PlayerWinLose
     * @static
     * @param {IPlayerWinLose} m PlayerWinLose message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    PlayerWinLose.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(16).int64(m.winLose);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.combinationResult != null && Object.hasOwnProperty.call(m, "combinationResult"))
            $root.CombinationResult.encode(m.combinationResult, w.uint32(34).fork()).ldelim();
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(40).int64(m.amount);
        return w;
    };

    /**
     * Decodes a PlayerWinLose message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerWinLose
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerWinLose} PlayerWinLose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerWinLose.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerWinLose();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.winLose = r.int64();
                break;
            case 3:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.combinationResult = $root.CombinationResult.decode(r, r.uint32());
                break;
            case 5:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerWinLose;
})();

$root.AboutTexasGameInfo = (function() {

    /**
     * Properties of an AboutTexasGameInfo.
     * @exports IAboutTexasGameInfo
     * @interface IAboutTexasGameInfo
     * @property {number|null} [currentPlayerNum] AboutTexasGameInfo currentPlayerNum
     * @property {number|null} [leftTime] AboutTexasGameInfo leftTime
     */

    /**
     * Constructs a new AboutTexasGameInfo.
     * @exports AboutTexasGameInfo
     * @classdesc Represents an AboutTexasGameInfo.
     * @implements IAboutTexasGameInfo
     * @constructor
     * @param {IAboutTexasGameInfo=} [p] Properties to set
     */
    function AboutTexasGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AboutTexasGameInfo currentPlayerNum.
     * @member {number} currentPlayerNum
     * @memberof AboutTexasGameInfo
     * @instance
     */
    AboutTexasGameInfo.prototype.currentPlayerNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AboutTexasGameInfo leftTime.
     * @member {number} leftTime
     * @memberof AboutTexasGameInfo
     * @instance
     */
    AboutTexasGameInfo.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified AboutTexasGameInfo message. Does not implicitly {@link AboutTexasGameInfo.verify|verify} messages.
     * @function encode
     * @memberof AboutTexasGameInfo
     * @static
     * @param {IAboutTexasGameInfo} m AboutTexasGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    AboutTexasGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.currentPlayerNum != null && Object.hasOwnProperty.call(m, "currentPlayerNum"))
            w.uint32(8).int64(m.currentPlayerNum);
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(16).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes an AboutTexasGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AboutTexasGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AboutTexasGameInfo} AboutTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    AboutTexasGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AboutTexasGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currentPlayerNum = r.int64();
                break;
            case 2:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return AboutTexasGameInfo;
})();

$root.TexasDynamicData = (function() {

    /**
     * Properties of a TexasDynamicData.
     * @exports ITexasDynamicData
     * @interface ITexasDynamicData
     * @property {TexasCashState|null} [state] TexasDynamicData state
     * @property {Array.<IPlayerInfo>|null} [seatInfos] TexasDynamicData seatInfos
     * @property {string|null} [actionUid] TexasDynamicData actionUid
     * @property {number|null} [actionLeftTime] TexasDynamicData actionLeftTime
     * @property {Array.<IPotInfo>|null} [potInfo] TexasDynamicData potInfo
     * @property {Array.<IActionInfo>|null} [actions] TexasDynamicData actions
     * @property {Array.<ICardInfo>|null} [publicCards] TexasDynamicData publicCards
     * @property {string|null} [dealerUid] TexasDynamicData dealerUid
     * @property {IBuyInsuranceTurn|null} [buyInsuranceTurn] TexasDynamicData buyInsuranceTurn
     * @property {number|null} [totalPot] TexasDynamicData totalPot
     */

    /**
     * Constructs a new TexasDynamicData.
     * @exports TexasDynamicData
     * @classdesc Represents a TexasDynamicData.
     * @implements ITexasDynamicData
     * @constructor
     * @param {ITexasDynamicData=} [p] Properties to set
     */
    function TexasDynamicData(p) {
        this.seatInfos = [];
        this.potInfo = [];
        this.actions = [];
        this.publicCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * TexasDynamicData state.
     * @member {TexasCashState} state
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.state = 0;

    /**
     * TexasDynamicData seatInfos.
     * @member {Array.<IPlayerInfo>} seatInfos
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.seatInfos = $util.emptyArray;

    /**
     * TexasDynamicData actionUid.
     * @member {string} actionUid
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.actionUid = "";

    /**
     * TexasDynamicData actionLeftTime.
     * @member {number} actionLeftTime
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.actionLeftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TexasDynamicData potInfo.
     * @member {Array.<IPotInfo>} potInfo
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.potInfo = $util.emptyArray;

    /**
     * TexasDynamicData actions.
     * @member {Array.<IActionInfo>} actions
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.actions = $util.emptyArray;

    /**
     * TexasDynamicData publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.publicCards = $util.emptyArray;

    /**
     * TexasDynamicData dealerUid.
     * @member {string} dealerUid
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.dealerUid = "";

    /**
     * TexasDynamicData buyInsuranceTurn.
     * @member {IBuyInsuranceTurn|null|undefined} buyInsuranceTurn
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.buyInsuranceTurn = null;

    /**
     * TexasDynamicData totalPot.
     * @member {number} totalPot
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.totalPot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified TexasDynamicData message. Does not implicitly {@link TexasDynamicData.verify|verify} messages.
     * @function encode
     * @memberof TexasDynamicData
     * @static
     * @param {ITexasDynamicData} m TexasDynamicData message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    TexasDynamicData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.state != null && Object.hasOwnProperty.call(m, "state"))
            w.uint32(8).int32(m.state);
        if (m.seatInfos != null && m.seatInfos.length) {
            for (var i = 0; i < m.seatInfos.length; ++i)
                $root.PlayerInfo.encode(m.seatInfos[i], w.uint32(18).fork()).ldelim();
        }
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(26).string(m.actionUid);
        if (m.actionLeftTime != null && Object.hasOwnProperty.call(m, "actionLeftTime"))
            w.uint32(32).int64(m.actionLeftTime);
        if (m.potInfo != null && m.potInfo.length) {
            for (var i = 0; i < m.potInfo.length; ++i)
                $root.PotInfo.encode(m.potInfo[i], w.uint32(42).fork()).ldelim();
        }
        if (m.actions != null && m.actions.length) {
            for (var i = 0; i < m.actions.length; ++i)
                $root.ActionInfo.encode(m.actions[i], w.uint32(50).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(58).fork()).ldelim();
        }
        if (m.dealerUid != null && Object.hasOwnProperty.call(m, "dealerUid"))
            w.uint32(66).string(m.dealerUid);
        if (m.buyInsuranceTurn != null && Object.hasOwnProperty.call(m, "buyInsuranceTurn"))
            $root.BuyInsuranceTurn.encode(m.buyInsuranceTurn, w.uint32(74).fork()).ldelim();
        if (m.totalPot != null && Object.hasOwnProperty.call(m, "totalPot"))
            w.uint32(80).int64(m.totalPot);
        return w;
    };

    /**
     * Decodes a TexasDynamicData message from the specified reader or buffer.
     * @function decode
     * @memberof TexasDynamicData
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {TexasDynamicData} TexasDynamicData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    TexasDynamicData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.TexasDynamicData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.state = r.int32();
                break;
            case 2:
                if (!(m.seatInfos && m.seatInfos.length))
                    m.seatInfos = [];
                m.seatInfos.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.actionUid = r.string();
                break;
            case 4:
                m.actionLeftTime = r.int64();
                break;
            case 5:
                if (!(m.potInfo && m.potInfo.length))
                    m.potInfo = [];
                m.potInfo.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.actions && m.actions.length))
                    m.actions = [];
                m.actions.push($root.ActionInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 8:
                m.dealerUid = r.string();
                break;
            case 9:
                m.buyInsuranceTurn = $root.BuyInsuranceTurn.decode(r, r.uint32());
                break;
            case 10:
                m.totalPot = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return TexasDynamicData;
})();

$root.BuyInsuranceTurn = (function() {

    /**
     * Properties of a BuyInsuranceTurn.
     * @exports IBuyInsuranceTurn
     * @interface IBuyInsuranceTurn
     * @property {string|null} [gameId] BuyInsuranceTurn gameId
     * @property {string|null} [actionUid] BuyInsuranceTurn actionUid
     * @property {Array.<ICardInfo>|null} [outsCards] BuyInsuranceTurn outsCards
     * @property {Array.<ICardInfo>|null} [tieCards] BuyInsuranceTurn tieCards
     * @property {Array.<ICardInfo>|null} [publicCards] BuyInsuranceTurn publicCards
     * @property {Array.<IPlayerInfo>|null} [losePlayerInfo] BuyInsuranceTurn losePlayerInfo
     * @property {number|null} [ratios] BuyInsuranceTurn ratios
     * @property {number|null} [pots] BuyInsuranceTurn pots
     * @property {number|null} [buyFullPot] BuyInsuranceTurn buyFullPot
     * @property {number|null} [buyBack] BuyInsuranceTurn buyBack
     * @property {number|null} [leftTime] BuyInsuranceTurn leftTime
     */

    /**
     * Constructs a new BuyInsuranceTurn.
     * @exports BuyInsuranceTurn
     * @classdesc Represents a BuyInsuranceTurn.
     * @implements IBuyInsuranceTurn
     * @constructor
     * @param {IBuyInsuranceTurn=} [p] Properties to set
     */
    function BuyInsuranceTurn(p) {
        this.outsCards = [];
        this.tieCards = [];
        this.publicCards = [];
        this.losePlayerInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BuyInsuranceTurn gameId.
     * @member {string} gameId
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.gameId = "";

    /**
     * BuyInsuranceTurn actionUid.
     * @member {string} actionUid
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.actionUid = "";

    /**
     * BuyInsuranceTurn outsCards.
     * @member {Array.<ICardInfo>} outsCards
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.outsCards = $util.emptyArray;

    /**
     * BuyInsuranceTurn tieCards.
     * @member {Array.<ICardInfo>} tieCards
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.tieCards = $util.emptyArray;

    /**
     * BuyInsuranceTurn publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.publicCards = $util.emptyArray;

    /**
     * BuyInsuranceTurn losePlayerInfo.
     * @member {Array.<IPlayerInfo>} losePlayerInfo
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.losePlayerInfo = $util.emptyArray;

    /**
     * BuyInsuranceTurn ratios.
     * @member {number} ratios
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.ratios = 0;

    /**
     * BuyInsuranceTurn pots.
     * @member {number} pots
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.pots = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BuyInsuranceTurn buyFullPot.
     * @member {number} buyFullPot
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.buyFullPot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BuyInsuranceTurn buyBack.
     * @member {number} buyBack
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.buyBack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BuyInsuranceTurn leftTime.
     * @member {number} leftTime
     * @memberof BuyInsuranceTurn
     * @instance
     */
    BuyInsuranceTurn.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified BuyInsuranceTurn message. Does not implicitly {@link BuyInsuranceTurn.verify|verify} messages.
     * @function encode
     * @memberof BuyInsuranceTurn
     * @static
     * @param {IBuyInsuranceTurn} m BuyInsuranceTurn message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    BuyInsuranceTurn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.outsCards != null && m.outsCards.length) {
            for (var i = 0; i < m.outsCards.length; ++i)
                $root.CardInfo.encode(m.outsCards[i], w.uint32(26).fork()).ldelim();
        }
        if (m.tieCards != null && m.tieCards.length) {
            for (var i = 0; i < m.tieCards.length; ++i)
                $root.CardInfo.encode(m.tieCards[i], w.uint32(34).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(42).fork()).ldelim();
        }
        if (m.losePlayerInfo != null && m.losePlayerInfo.length) {
            for (var i = 0; i < m.losePlayerInfo.length; ++i)
                $root.PlayerInfo.encode(m.losePlayerInfo[i], w.uint32(50).fork()).ldelim();
        }
        if (m.ratios != null && Object.hasOwnProperty.call(m, "ratios"))
            w.uint32(56).int32(m.ratios);
        if (m.pots != null && Object.hasOwnProperty.call(m, "pots"))
            w.uint32(64).int64(m.pots);
        if (m.buyFullPot != null && Object.hasOwnProperty.call(m, "buyFullPot"))
            w.uint32(72).int64(m.buyFullPot);
        if (m.buyBack != null && Object.hasOwnProperty.call(m, "buyBack"))
            w.uint32(80).int64(m.buyBack);
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(88).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a BuyInsuranceTurn message from the specified reader or buffer.
     * @function decode
     * @memberof BuyInsuranceTurn
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BuyInsuranceTurn} BuyInsuranceTurn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    BuyInsuranceTurn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BuyInsuranceTurn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                if (!(m.outsCards && m.outsCards.length))
                    m.outsCards = [];
                m.outsCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.tieCards && m.tieCards.length))
                    m.tieCards = [];
                m.tieCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.losePlayerInfo && m.losePlayerInfo.length))
                    m.losePlayerInfo = [];
                m.losePlayerInfo.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.ratios = r.int32();
                break;
            case 8:
                m.pots = r.int64();
                break;
            case 9:
                m.buyFullPot = r.int64();
                break;
            case 10:
                m.buyBack = r.int64();
                break;
            case 11:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BuyInsuranceTurn;
})();

$root.ActionResult = (function() {

    /**
     * Properties of an ActionResult.
     * @exports IActionResult
     * @interface IActionResult
     * @property {IActionInfo|null} [actionInfo] ActionResult actionInfo
     * @property {Array.<IPotInfo>|null} [potInfo] ActionResult potInfo
     */

    /**
     * Constructs a new ActionResult.
     * @exports ActionResult
     * @classdesc Represents an ActionResult.
     * @implements IActionResult
     * @constructor
     * @param {IActionResult=} [p] Properties to set
     */
    function ActionResult(p) {
        this.potInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ActionResult actionInfo.
     * @member {IActionInfo|null|undefined} actionInfo
     * @memberof ActionResult
     * @instance
     */
    ActionResult.prototype.actionInfo = null;

    /**
     * ActionResult potInfo.
     * @member {Array.<IPotInfo>} potInfo
     * @memberof ActionResult
     * @instance
     */
    ActionResult.prototype.potInfo = $util.emptyArray;

    /**
     * Encodes the specified ActionResult message. Does not implicitly {@link ActionResult.verify|verify} messages.
     * @function encode
     * @memberof ActionResult
     * @static
     * @param {IActionResult} m ActionResult message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ActionResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.actionInfo != null && Object.hasOwnProperty.call(m, "actionInfo"))
            $root.ActionInfo.encode(m.actionInfo, w.uint32(10).fork()).ldelim();
        if (m.potInfo != null && m.potInfo.length) {
            for (var i = 0; i < m.potInfo.length; ++i)
                $root.PotInfo.encode(m.potInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes an ActionResult message from the specified reader or buffer.
     * @function decode
     * @memberof ActionResult
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ActionResult} ActionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ActionResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ActionResult();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.actionInfo = $root.ActionInfo.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.potInfo && m.potInfo.length))
                    m.potInfo = [];
                m.potInfo.push($root.PotInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ActionResult;
})();

$root.SimpleReplayData = (function() {

    /**
     * Properties of a SimpleReplayData.
     * @exports ISimpleReplayData
     * @interface ISimpleReplayData
     * @property {Array.<ISimpleReplay>|null} [list] SimpleReplayData list
     * @property {number|null} [pageNum] SimpleReplayData pageNum
     * @property {number|null} [size] SimpleReplayData size
     * @property {number|null} [total] SimpleReplayData total
     */

    /**
     * Constructs a new SimpleReplayData.
     * @exports SimpleReplayData
     * @classdesc Represents a SimpleReplayData.
     * @implements ISimpleReplayData
     * @constructor
     * @param {ISimpleReplayData=} [p] Properties to set
     */
    function SimpleReplayData(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SimpleReplayData list.
     * @member {Array.<ISimpleReplay>} list
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.list = $util.emptyArray;

    /**
     * SimpleReplayData pageNum.
     * @member {number} pageNum
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.pageNum = 0;

    /**
     * SimpleReplayData size.
     * @member {number} size
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.size = 0;

    /**
     * SimpleReplayData total.
     * @member {number} total
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.total = 0;

    /**
     * Encodes the specified SimpleReplayData message. Does not implicitly {@link SimpleReplayData.verify|verify} messages.
     * @function encode
     * @memberof SimpleReplayData
     * @static
     * @param {ISimpleReplayData} m SimpleReplayData message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    SimpleReplayData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.SimpleReplay.encode(m.list[i], w.uint32(10).fork()).ldelim();
        }
        if (m.pageNum != null && Object.hasOwnProperty.call(m, "pageNum"))
            w.uint32(16).int32(m.pageNum);
        if (m.size != null && Object.hasOwnProperty.call(m, "size"))
            w.uint32(24).int32(m.size);
        if (m.total != null && Object.hasOwnProperty.call(m, "total"))
            w.uint32(32).int32(m.total);
        return w;
    };

    /**
     * Decodes a SimpleReplayData message from the specified reader or buffer.
     * @function decode
     * @memberof SimpleReplayData
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SimpleReplayData} SimpleReplayData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleReplayData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SimpleReplayData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.SimpleReplay.decode(r, r.uint32()));
                break;
            case 2:
                m.pageNum = r.int32();
                break;
            case 3:
                m.size = r.int32();
                break;
            case 4:
                m.total = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SimpleReplayData;
})();

$root.SimpleReplay = (function() {

    /**
     * Properties of a SimpleReplay.
     * @exports ISimpleReplay
     * @interface ISimpleReplay
     * @property {string|null} [gameId] SimpleReplay gameId
     * @property {number|null} [index] SimpleReplay index
     * @property {Array.<ICardInfo>|null} [publicCards] SimpleReplay publicCards
     * @property {Array.<ICardInfo>|null} [myCards] SimpleReplay myCards
     * @property {number|null} [myResult] SimpleReplay myResult
     * @property {Array.<ICardInfo>|null} [winnerCards] SimpleReplay winnerCards
     * @property {string|null} [winnerName] SimpleReplay winnerName
     * @property {string|null} [winnerHead] SimpleReplay winnerHead
     * @property {number|null} [winnerResult] SimpleReplay winnerResult
     * @property {string|null} [date] SimpleReplay date
     */

    /**
     * Constructs a new SimpleReplay.
     * @exports SimpleReplay
     * @classdesc Represents a SimpleReplay.
     * @implements ISimpleReplay
     * @constructor
     * @param {ISimpleReplay=} [p] Properties to set
     */
    function SimpleReplay(p) {
        this.publicCards = [];
        this.myCards = [];
        this.winnerCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SimpleReplay gameId.
     * @member {string} gameId
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.gameId = "";

    /**
     * SimpleReplay index.
     * @member {number} index
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplay publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.publicCards = $util.emptyArray;

    /**
     * SimpleReplay myCards.
     * @member {Array.<ICardInfo>} myCards
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.myCards = $util.emptyArray;

    /**
     * SimpleReplay myResult.
     * @member {number} myResult
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.myResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplay winnerCards.
     * @member {Array.<ICardInfo>} winnerCards
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.winnerCards = $util.emptyArray;

    /**
     * SimpleReplay winnerName.
     * @member {string} winnerName
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.winnerName = "";

    /**
     * SimpleReplay winnerHead.
     * @member {string} winnerHead
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.winnerHead = "";

    /**
     * SimpleReplay winnerResult.
     * @member {number} winnerResult
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.winnerResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplay date.
     * @member {string} date
     * @memberof SimpleReplay
     * @instance
     */
    SimpleReplay.prototype.date = "";

    /**
     * Encodes the specified SimpleReplay message. Does not implicitly {@link SimpleReplay.verify|verify} messages.
     * @function encode
     * @memberof SimpleReplay
     * @static
     * @param {ISimpleReplay} m SimpleReplay message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    SimpleReplay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int64(m.index);
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(26).fork()).ldelim();
        }
        if (m.myCards != null && m.myCards.length) {
            for (var i = 0; i < m.myCards.length; ++i)
                $root.CardInfo.encode(m.myCards[i], w.uint32(34).fork()).ldelim();
        }
        if (m.myResult != null && Object.hasOwnProperty.call(m, "myResult"))
            w.uint32(40).int64(m.myResult);
        if (m.winnerCards != null && m.winnerCards.length) {
            for (var i = 0; i < m.winnerCards.length; ++i)
                $root.CardInfo.encode(m.winnerCards[i], w.uint32(50).fork()).ldelim();
        }
        if (m.winnerName != null && Object.hasOwnProperty.call(m, "winnerName"))
            w.uint32(58).string(m.winnerName);
        if (m.winnerHead != null && Object.hasOwnProperty.call(m, "winnerHead"))
            w.uint32(66).string(m.winnerHead);
        if (m.winnerResult != null && Object.hasOwnProperty.call(m, "winnerResult"))
            w.uint32(72).int64(m.winnerResult);
        if (m.date != null && Object.hasOwnProperty.call(m, "date"))
            w.uint32(82).string(m.date);
        return w;
    };

    /**
     * Decodes a SimpleReplay message from the specified reader or buffer.
     * @function decode
     * @memberof SimpleReplay
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SimpleReplay} SimpleReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleReplay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SimpleReplay();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.index = r.int64();
                break;
            case 3:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 4:
                if (!(m.myCards && m.myCards.length))
                    m.myCards = [];
                m.myCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.myResult = r.int64();
                break;
            case 6:
                if (!(m.winnerCards && m.winnerCards.length))
                    m.winnerCards = [];
                m.winnerCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.winnerName = r.string();
                break;
            case 8:
                m.winnerHead = r.string();
                break;
            case 9:
                m.winnerResult = r.int64();
                break;
            case 10:
                m.date = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SimpleReplay;
})();

$root.ReplayData = (function() {

    /**
     * Properties of a ReplayData.
     * @exports IReplayData
     * @interface IReplayData
     * @property {string|null} [gameId] ReplayData gameId
     * @property {number|null} [index] ReplayData index
     * @property {IBasicTexasConfig|null} [texasConfig] ReplayData texasConfig
     * @property {Array.<IPlayerInfo>|null} [players] ReplayData players
     * @property {string|null} [dealerUid] ReplayData dealerUid
     * @property {number|null} [antes] ReplayData antes
     * @property {Array.<ICardInfo>|null} [publicCards] ReplayData publicCards
     * @property {Array.<IActionResult>|null} [roundStartActions] ReplayData roundStartActions
     * @property {Array.<IActionResult>|null} [preFlopActions] ReplayData preFlopActions
     * @property {Array.<IActionResult>|null} [flopActions] ReplayData flopActions
     * @property {Array.<IActionResult>|null} [turnActions] ReplayData turnActions
     * @property {Array.<IActionResult>|null} [riverActions] ReplayData riverActions
     * @property {Array.<IPlayerWinLose>|null} [result] ReplayData result
     * @property {Array.<IPotInfo>|null} [potInfoFlop] ReplayData potInfoFlop
     * @property {Array.<IPotInfo>|null} [potInfoTurn] ReplayData potInfoTurn
     * @property {Array.<IPotInfo>|null} [potInfoRiver] ReplayData potInfoRiver
     */

    /**
     * Constructs a new ReplayData.
     * @exports ReplayData
     * @classdesc Represents a ReplayData.
     * @implements IReplayData
     * @constructor
     * @param {IReplayData=} [p] Properties to set
     */
    function ReplayData(p) {
        this.players = [];
        this.publicCards = [];
        this.roundStartActions = [];
        this.preFlopActions = [];
        this.flopActions = [];
        this.turnActions = [];
        this.riverActions = [];
        this.result = [];
        this.potInfoFlop = [];
        this.potInfoTurn = [];
        this.potInfoRiver = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ReplayData gameId.
     * @member {string} gameId
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.gameId = "";

    /**
     * ReplayData index.
     * @member {number} index
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayData texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.texasConfig = null;

    /**
     * ReplayData players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.players = $util.emptyArray;

    /**
     * ReplayData dealerUid.
     * @member {string} dealerUid
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.dealerUid = "";

    /**
     * ReplayData antes.
     * @member {number} antes
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.antes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReplayData publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.publicCards = $util.emptyArray;

    /**
     * ReplayData roundStartActions.
     * @member {Array.<IActionResult>} roundStartActions
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.roundStartActions = $util.emptyArray;

    /**
     * ReplayData preFlopActions.
     * @member {Array.<IActionResult>} preFlopActions
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.preFlopActions = $util.emptyArray;

    /**
     * ReplayData flopActions.
     * @member {Array.<IActionResult>} flopActions
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.flopActions = $util.emptyArray;

    /**
     * ReplayData turnActions.
     * @member {Array.<IActionResult>} turnActions
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.turnActions = $util.emptyArray;

    /**
     * ReplayData riverActions.
     * @member {Array.<IActionResult>} riverActions
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.riverActions = $util.emptyArray;

    /**
     * ReplayData result.
     * @member {Array.<IPlayerWinLose>} result
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.result = $util.emptyArray;

    /**
     * ReplayData potInfoFlop.
     * @member {Array.<IPotInfo>} potInfoFlop
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.potInfoFlop = $util.emptyArray;

    /**
     * ReplayData potInfoTurn.
     * @member {Array.<IPotInfo>} potInfoTurn
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.potInfoTurn = $util.emptyArray;

    /**
     * ReplayData potInfoRiver.
     * @member {Array.<IPotInfo>} potInfoRiver
     * @memberof ReplayData
     * @instance
     */
    ReplayData.prototype.potInfoRiver = $util.emptyArray;

    /**
     * Encodes the specified ReplayData message. Does not implicitly {@link ReplayData.verify|verify} messages.
     * @function encode
     * @memberof ReplayData
     * @static
     * @param {IReplayData} m ReplayData message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ReplayData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int64(m.index);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(26).fork()).ldelim();
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(34).fork()).ldelim();
        }
        if (m.dealerUid != null && Object.hasOwnProperty.call(m, "dealerUid"))
            w.uint32(42).string(m.dealerUid);
        if (m.antes != null && Object.hasOwnProperty.call(m, "antes"))
            w.uint32(48).int64(m.antes);
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(58).fork()).ldelim();
        }
        if (m.roundStartActions != null && m.roundStartActions.length) {
            for (var i = 0; i < m.roundStartActions.length; ++i)
                $root.ActionResult.encode(m.roundStartActions[i], w.uint32(66).fork()).ldelim();
        }
        if (m.preFlopActions != null && m.preFlopActions.length) {
            for (var i = 0; i < m.preFlopActions.length; ++i)
                $root.ActionResult.encode(m.preFlopActions[i], w.uint32(74).fork()).ldelim();
        }
        if (m.flopActions != null && m.flopActions.length) {
            for (var i = 0; i < m.flopActions.length; ++i)
                $root.ActionResult.encode(m.flopActions[i], w.uint32(82).fork()).ldelim();
        }
        if (m.turnActions != null && m.turnActions.length) {
            for (var i = 0; i < m.turnActions.length; ++i)
                $root.ActionResult.encode(m.turnActions[i], w.uint32(90).fork()).ldelim();
        }
        if (m.riverActions != null && m.riverActions.length) {
            for (var i = 0; i < m.riverActions.length; ++i)
                $root.ActionResult.encode(m.riverActions[i], w.uint32(98).fork()).ldelim();
        }
        if (m.result != null && m.result.length) {
            for (var i = 0; i < m.result.length; ++i)
                $root.PlayerWinLose.encode(m.result[i], w.uint32(106).fork()).ldelim();
        }
        if (m.potInfoFlop != null && m.potInfoFlop.length) {
            for (var i = 0; i < m.potInfoFlop.length; ++i)
                $root.PotInfo.encode(m.potInfoFlop[i], w.uint32(114).fork()).ldelim();
        }
        if (m.potInfoTurn != null && m.potInfoTurn.length) {
            for (var i = 0; i < m.potInfoTurn.length; ++i)
                $root.PotInfo.encode(m.potInfoTurn[i], w.uint32(122).fork()).ldelim();
        }
        if (m.potInfoRiver != null && m.potInfoRiver.length) {
            for (var i = 0; i < m.potInfoRiver.length; ++i)
                $root.PotInfo.encode(m.potInfoRiver[i], w.uint32(130).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ReplayData message from the specified reader or buffer.
     * @function decode
     * @memberof ReplayData
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReplayData} ReplayData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ReplayData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReplayData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.index = r.int64();
                break;
            case 3:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            case 4:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 5:
                m.dealerUid = r.string();
                break;
            case 6:
                m.antes = r.int64();
                break;
            case 7:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 8:
                if (!(m.roundStartActions && m.roundStartActions.length))
                    m.roundStartActions = [];
                m.roundStartActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 9:
                if (!(m.preFlopActions && m.preFlopActions.length))
                    m.preFlopActions = [];
                m.preFlopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 10:
                if (!(m.flopActions && m.flopActions.length))
                    m.flopActions = [];
                m.flopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 11:
                if (!(m.turnActions && m.turnActions.length))
                    m.turnActions = [];
                m.turnActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 12:
                if (!(m.riverActions && m.riverActions.length))
                    m.riverActions = [];
                m.riverActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 13:
                if (!(m.result && m.result.length))
                    m.result = [];
                m.result.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            case 14:
                if (!(m.potInfoFlop && m.potInfoFlop.length))
                    m.potInfoFlop = [];
                m.potInfoFlop.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 15:
                if (!(m.potInfoTurn && m.potInfoTurn.length))
                    m.potInfoTurn = [];
                m.potInfoTurn.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 16:
                if (!(m.potInfoRiver && m.potInfoRiver.length))
                    m.potInfoRiver = [];
                m.potInfoRiver.push($root.PotInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReplayData;
})();

$root.RecordData = (function() {

    /**
     * Properties of a RecordData.
     * @exports IRecordData
     * @interface IRecordData
     * @property {number|null} [day] RecordData day
     * @property {number|null} [winLose] RecordData winLose
     * @property {number|null} [hands] RecordData hands
     * @property {number|null} [vpip] RecordData vpip
     * @property {GameType|null} [gameType] RecordData gameType
     */

    /**
     * Constructs a new RecordData.
     * @exports RecordData
     * @classdesc Represents a RecordData.
     * @implements IRecordData
     * @constructor
     * @param {IRecordData=} [p] Properties to set
     */
    function RecordData(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RecordData day.
     * @member {number} day
     * @memberof RecordData
     * @instance
     */
    RecordData.prototype.day = 0;

    /**
     * RecordData winLose.
     * @member {number} winLose
     * @memberof RecordData
     * @instance
     */
    RecordData.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordData hands.
     * @member {number} hands
     * @memberof RecordData
     * @instance
     */
    RecordData.prototype.hands = 0;

    /**
     * RecordData vpip.
     * @member {number} vpip
     * @memberof RecordData
     * @instance
     */
    RecordData.prototype.vpip = 0;

    /**
     * RecordData gameType.
     * @member {GameType} gameType
     * @memberof RecordData
     * @instance
     */
    RecordData.prototype.gameType = 0;

    /**
     * Encodes the specified RecordData message. Does not implicitly {@link RecordData.verify|verify} messages.
     * @function encode
     * @memberof RecordData
     * @static
     * @param {IRecordData} m RecordData message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    RecordData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.day != null && Object.hasOwnProperty.call(m, "day"))
            w.uint32(8).int32(m.day);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(16).int64(m.winLose);
        if (m.hands != null && Object.hasOwnProperty.call(m, "hands"))
            w.uint32(24).int32(m.hands);
        if (m.vpip != null && Object.hasOwnProperty.call(m, "vpip"))
            w.uint32(32).int32(m.vpip);
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(40).int32(m.gameType);
        return w;
    };

    /**
     * Decodes a RecordData message from the specified reader or buffer.
     * @function decode
     * @memberof RecordData
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RecordData} RecordData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    RecordData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RecordData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.day = r.int32();
                break;
            case 2:
                m.winLose = r.int64();
                break;
            case 3:
                m.hands = r.int32();
                break;
            case 4:
                m.vpip = r.int32();
                break;
            case 5:
                m.gameType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RecordData;
})();

$root.RecordSingleData = (function() {

    /**
     * Properties of a RecordSingleData.
     * @exports IRecordSingleData
     * @interface IRecordSingleData
     * @property {Array.<IRecordSingle>|null} [list] RecordSingleData list
     * @property {number|null} [pageNum] RecordSingleData pageNum
     * @property {number|null} [size] RecordSingleData size
     * @property {number|null} [total] RecordSingleData total
     */

    /**
     * Constructs a new RecordSingleData.
     * @exports RecordSingleData
     * @classdesc Represents a RecordSingleData.
     * @implements IRecordSingleData
     * @constructor
     * @param {IRecordSingleData=} [p] Properties to set
     */
    function RecordSingleData(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RecordSingleData list.
     * @member {Array.<IRecordSingle>} list
     * @memberof RecordSingleData
     * @instance
     */
    RecordSingleData.prototype.list = $util.emptyArray;

    /**
     * RecordSingleData pageNum.
     * @member {number} pageNum
     * @memberof RecordSingleData
     * @instance
     */
    RecordSingleData.prototype.pageNum = 0;

    /**
     * RecordSingleData size.
     * @member {number} size
     * @memberof RecordSingleData
     * @instance
     */
    RecordSingleData.prototype.size = 0;

    /**
     * RecordSingleData total.
     * @member {number} total
     * @memberof RecordSingleData
     * @instance
     */
    RecordSingleData.prototype.total = 0;

    /**
     * Encodes the specified RecordSingleData message. Does not implicitly {@link RecordSingleData.verify|verify} messages.
     * @function encode
     * @memberof RecordSingleData
     * @static
     * @param {IRecordSingleData} m RecordSingleData message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    RecordSingleData.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.RecordSingle.encode(m.list[i], w.uint32(10).fork()).ldelim();
        }
        if (m.pageNum != null && Object.hasOwnProperty.call(m, "pageNum"))
            w.uint32(16).int32(m.pageNum);
        if (m.size != null && Object.hasOwnProperty.call(m, "size"))
            w.uint32(24).int32(m.size);
        if (m.total != null && Object.hasOwnProperty.call(m, "total"))
            w.uint32(32).int32(m.total);
        return w;
    };

    /**
     * Decodes a RecordSingleData message from the specified reader or buffer.
     * @function decode
     * @memberof RecordSingleData
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RecordSingleData} RecordSingleData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    RecordSingleData.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RecordSingleData();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.RecordSingle.decode(r, r.uint32()));
                break;
            case 2:
                m.pageNum = r.int32();
                break;
            case 3:
                m.size = r.int32();
                break;
            case 4:
                m.total = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RecordSingleData;
})();

$root.RecordSingle = (function() {

    /**
     * Properties of a RecordSingle.
     * @exports IRecordSingle
     * @interface IRecordSingle
     * @property {string|null} [gameCode] RecordSingle gameCode
     * @property {IBasicTexasConfig|null} [texasConfig] RecordSingle texasConfig
     * @property {number|null} [winLose] RecordSingle winLose
     * @property {string|null} [date] RecordSingle date
     */

    /**
     * Constructs a new RecordSingle.
     * @exports RecordSingle
     * @classdesc Represents a RecordSingle.
     * @implements IRecordSingle
     * @constructor
     * @param {IRecordSingle=} [p] Properties to set
     */
    function RecordSingle(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RecordSingle gameCode.
     * @member {string} gameCode
     * @memberof RecordSingle
     * @instance
     */
    RecordSingle.prototype.gameCode = "";

    /**
     * RecordSingle texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof RecordSingle
     * @instance
     */
    RecordSingle.prototype.texasConfig = null;

    /**
     * RecordSingle winLose.
     * @member {number} winLose
     * @memberof RecordSingle
     * @instance
     */
    RecordSingle.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordSingle date.
     * @member {string} date
     * @memberof RecordSingle
     * @instance
     */
    RecordSingle.prototype.date = "";

    /**
     * Encodes the specified RecordSingle message. Does not implicitly {@link RecordSingle.verify|verify} messages.
     * @function encode
     * @memberof RecordSingle
     * @static
     * @param {IRecordSingle} m RecordSingle message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    RecordSingle.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameCode != null && Object.hasOwnProperty.call(m, "gameCode"))
            w.uint32(10).string(m.gameCode);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(18).fork()).ldelim();
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(24).int64(m.winLose);
        if (m.date != null && Object.hasOwnProperty.call(m, "date"))
            w.uint32(34).string(m.date);
        return w;
    };

    /**
     * Decodes a RecordSingle message from the specified reader or buffer.
     * @function decode
     * @memberof RecordSingle
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RecordSingle} RecordSingle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    RecordSingle.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RecordSingle();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameCode = r.string();
                break;
            case 2:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            case 3:
                m.winLose = r.int64();
                break;
            case 4:
                m.date = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RecordSingle;
})();

$root.RecordDetail = (function() {

    /**
     * Properties of a RecordDetail.
     * @exports IRecordDetail
     * @interface IRecordDetail
     * @property {string|null} [gameCode] RecordDetail gameCode
     * @property {IBasicTexasConfig|null} [texasConfig] RecordDetail texasConfig
     * @property {string|null} [creator] RecordDetail creator
     * @property {string|null} [date] RecordDetail date
     * @property {number|null} [insurance] RecordDetail insurance
     * @property {number|null} [jackpot] RecordDetail jackpot
     * @property {number|null} [totalHands] RecordDetail totalHands
     * @property {number|null} [totalBuyIn] RecordDetail totalBuyIn
     * @property {Array.<IRecordPlayer>|null} [list] RecordDetail list
     */

    /**
     * Constructs a new RecordDetail.
     * @exports RecordDetail
     * @classdesc Represents a RecordDetail.
     * @implements IRecordDetail
     * @constructor
     * @param {IRecordDetail=} [p] Properties to set
     */
    function RecordDetail(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RecordDetail gameCode.
     * @member {string} gameCode
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.gameCode = "";

    /**
     * RecordDetail texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.texasConfig = null;

    /**
     * RecordDetail creator.
     * @member {string} creator
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.creator = "";

    /**
     * RecordDetail date.
     * @member {string} date
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.date = "";

    /**
     * RecordDetail insurance.
     * @member {number} insurance
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.insurance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordDetail jackpot.
     * @member {number} jackpot
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordDetail totalHands.
     * @member {number} totalHands
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.totalHands = 0;

    /**
     * RecordDetail totalBuyIn.
     * @member {number} totalBuyIn
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.totalBuyIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordDetail list.
     * @member {Array.<IRecordPlayer>} list
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.list = $util.emptyArray;

    /**
     * Encodes the specified RecordDetail message. Does not implicitly {@link RecordDetail.verify|verify} messages.
     * @function encode
     * @memberof RecordDetail
     * @static
     * @param {IRecordDetail} m RecordDetail message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    RecordDetail.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameCode != null && Object.hasOwnProperty.call(m, "gameCode"))
            w.uint32(10).string(m.gameCode);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(18).fork()).ldelim();
        if (m.creator != null && Object.hasOwnProperty.call(m, "creator"))
            w.uint32(26).string(m.creator);
        if (m.date != null && Object.hasOwnProperty.call(m, "date"))
            w.uint32(34).string(m.date);
        if (m.insurance != null && Object.hasOwnProperty.call(m, "insurance"))
            w.uint32(40).int64(m.insurance);
        if (m.jackpot != null && Object.hasOwnProperty.call(m, "jackpot"))
            w.uint32(48).int64(m.jackpot);
        if (m.totalHands != null && Object.hasOwnProperty.call(m, "totalHands"))
            w.uint32(56).int32(m.totalHands);
        if (m.totalBuyIn != null && Object.hasOwnProperty.call(m, "totalBuyIn"))
            w.uint32(64).int64(m.totalBuyIn);
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.RecordPlayer.encode(m.list[i], w.uint32(74).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RecordDetail message from the specified reader or buffer.
     * @function decode
     * @memberof RecordDetail
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RecordDetail} RecordDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    RecordDetail.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RecordDetail();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameCode = r.string();
                break;
            case 2:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            case 3:
                m.creator = r.string();
                break;
            case 4:
                m.date = r.string();
                break;
            case 5:
                m.insurance = r.int64();
                break;
            case 6:
                m.jackpot = r.int64();
                break;
            case 7:
                m.totalHands = r.int32();
                break;
            case 8:
                m.totalBuyIn = r.int64();
                break;
            case 9:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.RecordPlayer.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RecordDetail;
})();

$root.RecordPlayer = (function() {

    /**
     * Properties of a RecordPlayer.
     * @exports IRecordPlayer
     * @interface IRecordPlayer
     * @property {string|null} [uid] RecordPlayer uid
     * @property {string|null} [head] RecordPlayer head
     * @property {string|null} [name] RecordPlayer name
     * @property {number|null} [totalHands] RecordPlayer totalHands
     * @property {number|null} [totalTurnHands] RecordPlayer totalTurnHands
     * @property {number|null} [totalBringIn] RecordPlayer totalBringIn
     * @property {number|null} [totalBringOut] RecordPlayer totalBringOut
     * @property {number|null} [winLose] RecordPlayer winLose
     */

    /**
     * Constructs a new RecordPlayer.
     * @exports RecordPlayer
     * @classdesc Represents a RecordPlayer.
     * @implements IRecordPlayer
     * @constructor
     * @param {IRecordPlayer=} [p] Properties to set
     */
    function RecordPlayer(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RecordPlayer uid.
     * @member {string} uid
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.uid = "";

    /**
     * RecordPlayer head.
     * @member {string} head
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.head = "";

    /**
     * RecordPlayer name.
     * @member {string} name
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.name = "";

    /**
     * RecordPlayer totalHands.
     * @member {number} totalHands
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.totalHands = 0;

    /**
     * RecordPlayer totalTurnHands.
     * @member {number} totalTurnHands
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.totalTurnHands = 0;

    /**
     * RecordPlayer totalBringIn.
     * @member {number} totalBringIn
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.totalBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordPlayer totalBringOut.
     * @member {number} totalBringOut
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.totalBringOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RecordPlayer winLose.
     * @member {number} winLose
     * @memberof RecordPlayer
     * @instance
     */
    RecordPlayer.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified RecordPlayer message. Does not implicitly {@link RecordPlayer.verify|verify} messages.
     * @function encode
     * @memberof RecordPlayer
     * @static
     * @param {IRecordPlayer} m RecordPlayer message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    RecordPlayer.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(18).string(m.head);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.totalHands != null && Object.hasOwnProperty.call(m, "totalHands"))
            w.uint32(32).int32(m.totalHands);
        if (m.totalTurnHands != null && Object.hasOwnProperty.call(m, "totalTurnHands"))
            w.uint32(40).int32(m.totalTurnHands);
        if (m.totalBringIn != null && Object.hasOwnProperty.call(m, "totalBringIn"))
            w.uint32(48).int64(m.totalBringIn);
        if (m.totalBringOut != null && Object.hasOwnProperty.call(m, "totalBringOut"))
            w.uint32(56).int64(m.totalBringOut);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(64).int64(m.winLose);
        return w;
    };

    /**
     * Decodes a RecordPlayer message from the specified reader or buffer.
     * @function decode
     * @memberof RecordPlayer
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RecordPlayer} RecordPlayer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    RecordPlayer.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RecordPlayer();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.head = r.string();
                break;
            case 3:
                m.name = r.string();
                break;
            case 4:
                m.totalHands = r.int32();
                break;
            case 5:
                m.totalTurnHands = r.int32();
                break;
            case 6:
                m.totalBringIn = r.int64();
                break;
            case 7:
                m.totalBringOut = r.int64();
                break;
            case 8:
                m.winLose = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RecordPlayer;
})();

/**
 * MessageId enum.
 * @exports MessageId
 * @enum {number}
 * @property {number} MSG_UnKnow=0 MSG_UnKnow value
 * @property {number} C2S_HeartbeatPing=10 C2S_HeartbeatPing value
 * @property {number} S2C_HeartbeatPong=11 S2C_HeartbeatPong value
 * @property {number} S2C_Kick=20 S2C_Kick value
 * @property {number} MSG_TexasCashBegin=5001 MSG_TexasCashBegin value
 * @property {number} C2S_TexasCashLogout=5002 C2S_TexasCashLogout value
 * @property {number} C2S_TexasCashEnterGame=5003 C2S_TexasCashEnterGame value
 * @property {number} C2S_TexasCashExitGame=5004 C2S_TexasCashExitGame value
 * @property {number} C2S_TexasCashOpen=5005 C2S_TexasCashOpen value
 * @property {number} C2S_TexasCashSitDown=5006 C2S_TexasCashSitDown value
 * @property {number} C2S_TexasCashStandUp=5007 C2S_TexasCashStandUp value
 * @property {number} C2S_TexasCashBringIn=5008 C2S_TexasCashBringIn value
 * @property {number} C2S_TexasCashAction=5009 C2S_TexasCashAction value
 * @property {number} C2S_TexasCashBuyInsurance=5010 C2S_TexasCashBuyInsurance value
 * @property {number} C2S_TexasCashChat=5011 C2S_TexasCashChat value
 * @property {number} C2S_TexasCashGetObList=5012 C2S_TexasCashGetObList value
 * @property {number} C2S_TexasCashGetBringInList=5013 C2S_TexasCashGetBringInList value
 * @property {number} C2S_TexasCashExaminePublicCard=5014 C2S_TexasCashExaminePublicCard value
 * @property {number} C2S_TexasCashExaminePrivateCard=5015 C2S_TexasCashExaminePrivateCard value
 * @property {number} C2S_TexasCashExtraThink=5016 C2S_TexasCashExtraThink value
 * @property {number} C2S_TexasCashSqueezeStart=5017 C2S_TexasCashSqueezeStart value
 * @property {number} C2S_TexasCashSqueezeFinish=5018 C2S_TexasCashSqueezeFinish value
 * @property {number} C2S_TexasCashPlayerRecord=5019 C2S_TexasCashPlayerRecord value
 * @property {number} C2S_TexasCashReplayList=5020 C2S_TexasCashReplayList value
 * @property {number} C2S_TexasCashReplayDetails=5021 C2S_TexasCashReplayDetails value
 * @property {number} C2S_TexasCashCancelAutoOperator=5022 C2S_TexasCashCancelAutoOperator value
 * @property {number} MSG_TexasCashEnd=5500 MSG_TexasCashEnd value
 * @property {number} MSG_TexasMttBegin=5501 MSG_TexasMttBegin value
 * @property {number} MSG_TexasMttEnd=6000 MSG_TexasMttEnd value
 * @property {number} MSG_ShortCashBegin=6001 MSG_ShortCashBegin value
 * @property {number} MSG_ShortCashEnd=6500 MSG_ShortCashEnd value
 * @property {number} MSG_ShortMttBegin=6501 MSG_ShortMttBegin value
 * @property {number} MSG_ShortMttEnd=7000 MSG_ShortMttEnd value
 * @property {number} MSG_OmhCashBegin=7001 MSG_OmhCashBegin value
 * @property {number} MSG_OmhCashEnd=7500 MSG_OmhCashEnd value
 * @property {number} MSG_OmhMttBegin=7501 MSG_OmhMttBegin value
 * @property {number} MSG_OmhMttEnd=8000 MSG_OmhMttEnd value
 * @property {number} S2C_CommonEnterGameResp=8001 S2C_CommonEnterGameResp value
 * @property {number} S2C_CommonExitGameResp=8002 S2C_CommonExitGameResp value
 * @property {number} S2C_CommonStartResp=8003 S2C_CommonStartResp value
 * @property {number} S2C_CommonSitDownResp=8004 S2C_CommonSitDownResp value
 * @property {number} S2C_CommonStandUpResp=8005 S2C_CommonStandUpResp value
 * @property {number} S2C_CommonBringInResp=8006 S2C_CommonBringInResp value
 * @property {number} S2C_CommonActionResp=8007 S2C_CommonActionResp value
 * @property {number} S2C_CommonBuyInsuranceResp=8008 S2C_CommonBuyInsuranceResp value
 * @property {number} S2C_CommonChatResp=8009 S2C_CommonChatResp value
 * @property {number} S2C_CommonGetObListResp=8010 S2C_CommonGetObListResp value
 * @property {number} S2C_CommonGetBringInListResp=8011 S2C_CommonGetBringInListResp value
 * @property {number} S2C_CommonRefreshResp=8012 S2C_CommonRefreshResp value
 * @property {number} S2C_CommonExaminePublicCardResp=8013 S2C_CommonExaminePublicCardResp value
 * @property {number} S2C_CommonExaminePrivateCardResp=8014 S2C_CommonExaminePrivateCardResp value
 * @property {number} S2C_CommonExtraThinkResp=8015 S2C_CommonExtraThinkResp value
 * @property {number} S2C_CommonSqueezeStartResp=8016 S2C_CommonSqueezeStartResp value
 * @property {number} S2C_CommonSqueezeFinishResp=8017 S2C_CommonSqueezeFinishResp value
 * @property {number} S2C_CommonPlayerRecordResp=8018 S2C_CommonPlayerRecordResp value
 * @property {number} S2C_CommonReplayListResp=8019 S2C_CommonReplayListResp value
 * @property {number} S2C_CommonReplayDetailsResp=8020 S2C_CommonReplayDetailsResp value
 * @property {number} S2C_CommonCancelAutoOperatorResp=8021 S2C_CommonCancelAutoOperatorResp value
 * @property {number} S2C_CommonBringInTimerNotify=8110 S2C_CommonBringInTimerNotify value
 * @property {number} S2C_CommonBringInNotify=8111 S2C_CommonBringInNotify value
 * @property {number} S2C_CommonSitDownNotify=8112 S2C_CommonSitDownNotify value
 * @property {number} S2C_CommonStandUpNotify=8113 S2C_CommonStandUpNotify value
 * @property {number} S2C_CommonChatNotify=8116 S2C_CommonChatNotify value
 * @property {number} S2C_CommonOpenNotify=8250 S2C_CommonOpenNotify value
 * @property {number} S2C_CommonWaitStartNotify=8251 S2C_CommonWaitStartNotify value
 * @property {number} S2C_CommonRoundStartNotify=8252 S2C_CommonRoundStartNotify value
 * @property {number} S2C_CommonPreFlopRoundNotify=8253 S2C_CommonPreFlopRoundNotify value
 * @property {number} S2C_CommonFlopRoundNotify=8254 S2C_CommonFlopRoundNotify value
 * @property {number} S2C_CommonTurnRoundNotify=8255 S2C_CommonTurnRoundNotify value
 * @property {number} S2C_CommonRiverRoundNotify=8256 S2C_CommonRiverRoundNotify value
 * @property {number} S2C_CommonIntervalTimeNotify=8257 S2C_CommonIntervalTimeNotify value
 * @property {number} S2C_CommonCurrentActionNotify=8258 S2C_CommonCurrentActionNotify value
 * @property {number} S2C_CommonActionNotify=8259 S2C_CommonActionNotify value
 * @property {number} S2C_CommonSettlementNotify=8260 S2C_CommonSettlementNotify value
 * @property {number} S2C_CommonExtraThinkNotify=8261 S2C_CommonExtraThinkNotify value
 * @property {number} S2C_CommonOpenCardNotify=8262 S2C_CommonOpenCardNotify value
 * @property {number} S2C_CommonBuyInsuranceTurnNotify=8263 S2C_CommonBuyInsuranceTurnNotify value
 * @property {number} S2C_CommonBuyInsuranceTurnRespNotify=8264 S2C_CommonBuyInsuranceTurnRespNotify value
 * @property {number} S2C_CommonInsuranceLotteryNotify=8265 S2C_CommonInsuranceLotteryNotify value
 * @property {number} S2C_CommonPotsNotify=8266 S2C_CommonPotsNotify value
 * @property {number} S2C_CommonJackpotLotteryNotify=8267 S2C_CommonJackpotLotteryNotify value
 * @property {number} S2C_CommonSqueezeRoundNotify=8268 S2C_CommonSqueezeRoundNotify value
 * @property {number} S2C_CommonAutoOperatorNotify=8269 S2C_CommonAutoOperatorNotify value
 * @property {number} MSG_TexasCowboyBegin=10001 MSG_TexasCowboyBegin value
 * @property {number} C2S_TexasCowboyEnterGame=10002 C2S_TexasCowboyEnterGame value
 * @property {number} C2S_TexasCowboyExitGame=10003 C2S_TexasCowboyExitGame value
 * @property {number} C2S_TexasCowboyBet=10004 C2S_TexasCowboyBet value
 * @property {number} C2S_TexasCowboyRecord=10005 C2S_TexasCowboyRecord value
 * @property {number} C2S_TexasCowboyBringIn=10006 C2S_TexasCowboyBringIn value
 * @property {number} C2S_TexasCowboyBringOut=10007 C2S_TexasCowboyBringOut value
 * @property {number} C2S_TexasCowboyTotalHistory=10008 C2S_TexasCowboyTotalHistory value
 * @property {number} S2C_TexasCowboyEnterGameResp=10030 S2C_TexasCowboyEnterGameResp value
 * @property {number} S2C_TexasCowboyExitGameResp=10031 S2C_TexasCowboyExitGameResp value
 * @property {number} S2C_TexasCowboyBetResp=10032 S2C_TexasCowboyBetResp value
 * @property {number} S2C_TexasCowboyRecordResp=10033 S2C_TexasCowboyRecordResp value
 * @property {number} S2C_TexasCowboyBringInResp=10034 S2C_TexasCowboyBringInResp value
 * @property {number} S2C_TexasCowboyBringOutResp=10035 S2C_TexasCowboyBringOutResp value
 * @property {number} S2C_TexasCowboyTotalHistoryResp=10036 S2C_TexasCowboyTotalHistoryResp value
 * @property {number} S2C_TexasCowboyBetNotify=10050 S2C_TexasCowboyBetNotify value
 * @property {number} S2C_TexasCowboyGameStartNotify=10051 S2C_TexasCowboyGameStartNotify value
 * @property {number} S2C_TexasCowboyGameSettlementNotify=10052 S2C_TexasCowboyGameSettlementNotify value
 * @property {number} MSG_TexasCowboyEnd=10100 MSG_TexasCowboyEnd value
 */
$root.MessageId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MSG_UnKnow"] = 0;
    values[valuesById[10] = "C2S_HeartbeatPing"] = 10;
    values[valuesById[11] = "S2C_HeartbeatPong"] = 11;
    values[valuesById[20] = "S2C_Kick"] = 20;
    values[valuesById[5001] = "MSG_TexasCashBegin"] = 5001;
    values[valuesById[5002] = "C2S_TexasCashLogout"] = 5002;
    values[valuesById[5003] = "C2S_TexasCashEnterGame"] = 5003;
    values[valuesById[5004] = "C2S_TexasCashExitGame"] = 5004;
    values[valuesById[5005] = "C2S_TexasCashOpen"] = 5005;
    values[valuesById[5006] = "C2S_TexasCashSitDown"] = 5006;
    values[valuesById[5007] = "C2S_TexasCashStandUp"] = 5007;
    values[valuesById[5008] = "C2S_TexasCashBringIn"] = 5008;
    values[valuesById[5009] = "C2S_TexasCashAction"] = 5009;
    values[valuesById[5010] = "C2S_TexasCashBuyInsurance"] = 5010;
    values[valuesById[5011] = "C2S_TexasCashChat"] = 5011;
    values[valuesById[5012] = "C2S_TexasCashGetObList"] = 5012;
    values[valuesById[5013] = "C2S_TexasCashGetBringInList"] = 5013;
    values[valuesById[5014] = "C2S_TexasCashExaminePublicCard"] = 5014;
    values[valuesById[5015] = "C2S_TexasCashExaminePrivateCard"] = 5015;
    values[valuesById[5016] = "C2S_TexasCashExtraThink"] = 5016;
    values[valuesById[5017] = "C2S_TexasCashSqueezeStart"] = 5017;
    values[valuesById[5018] = "C2S_TexasCashSqueezeFinish"] = 5018;
    values[valuesById[5019] = "C2S_TexasCashPlayerRecord"] = 5019;
    values[valuesById[5020] = "C2S_TexasCashReplayList"] = 5020;
    values[valuesById[5021] = "C2S_TexasCashReplayDetails"] = 5021;
    values[valuesById[5022] = "C2S_TexasCashCancelAutoOperator"] = 5022;
    values[valuesById[5500] = "MSG_TexasCashEnd"] = 5500;
    values[valuesById[5501] = "MSG_TexasMttBegin"] = 5501;
    values[valuesById[6000] = "MSG_TexasMttEnd"] = 6000;
    values[valuesById[6001] = "MSG_ShortCashBegin"] = 6001;
    values[valuesById[6500] = "MSG_ShortCashEnd"] = 6500;
    values[valuesById[6501] = "MSG_ShortMttBegin"] = 6501;
    values[valuesById[7000] = "MSG_ShortMttEnd"] = 7000;
    values[valuesById[7001] = "MSG_OmhCashBegin"] = 7001;
    values[valuesById[7500] = "MSG_OmhCashEnd"] = 7500;
    values[valuesById[7501] = "MSG_OmhMttBegin"] = 7501;
    values[valuesById[8000] = "MSG_OmhMttEnd"] = 8000;
    values[valuesById[8001] = "S2C_CommonEnterGameResp"] = 8001;
    values[valuesById[8002] = "S2C_CommonExitGameResp"] = 8002;
    values[valuesById[8003] = "S2C_CommonStartResp"] = 8003;
    values[valuesById[8004] = "S2C_CommonSitDownResp"] = 8004;
    values[valuesById[8005] = "S2C_CommonStandUpResp"] = 8005;
    values[valuesById[8006] = "S2C_CommonBringInResp"] = 8006;
    values[valuesById[8007] = "S2C_CommonActionResp"] = 8007;
    values[valuesById[8008] = "S2C_CommonBuyInsuranceResp"] = 8008;
    values[valuesById[8009] = "S2C_CommonChatResp"] = 8009;
    values[valuesById[8010] = "S2C_CommonGetObListResp"] = 8010;
    values[valuesById[8011] = "S2C_CommonGetBringInListResp"] = 8011;
    values[valuesById[8012] = "S2C_CommonRefreshResp"] = 8012;
    values[valuesById[8013] = "S2C_CommonExaminePublicCardResp"] = 8013;
    values[valuesById[8014] = "S2C_CommonExaminePrivateCardResp"] = 8014;
    values[valuesById[8015] = "S2C_CommonExtraThinkResp"] = 8015;
    values[valuesById[8016] = "S2C_CommonSqueezeStartResp"] = 8016;
    values[valuesById[8017] = "S2C_CommonSqueezeFinishResp"] = 8017;
    values[valuesById[8018] = "S2C_CommonPlayerRecordResp"] = 8018;
    values[valuesById[8019] = "S2C_CommonReplayListResp"] = 8019;
    values[valuesById[8020] = "S2C_CommonReplayDetailsResp"] = 8020;
    values[valuesById[8021] = "S2C_CommonCancelAutoOperatorResp"] = 8021;
    values[valuesById[8110] = "S2C_CommonBringInTimerNotify"] = 8110;
    values[valuesById[8111] = "S2C_CommonBringInNotify"] = 8111;
    values[valuesById[8112] = "S2C_CommonSitDownNotify"] = 8112;
    values[valuesById[8113] = "S2C_CommonStandUpNotify"] = 8113;
    values[valuesById[8116] = "S2C_CommonChatNotify"] = 8116;
    values[valuesById[8250] = "S2C_CommonOpenNotify"] = 8250;
    values[valuesById[8251] = "S2C_CommonWaitStartNotify"] = 8251;
    values[valuesById[8252] = "S2C_CommonRoundStartNotify"] = 8252;
    values[valuesById[8253] = "S2C_CommonPreFlopRoundNotify"] = 8253;
    values[valuesById[8254] = "S2C_CommonFlopRoundNotify"] = 8254;
    values[valuesById[8255] = "S2C_CommonTurnRoundNotify"] = 8255;
    values[valuesById[8256] = "S2C_CommonRiverRoundNotify"] = 8256;
    values[valuesById[8257] = "S2C_CommonIntervalTimeNotify"] = 8257;
    values[valuesById[8258] = "S2C_CommonCurrentActionNotify"] = 8258;
    values[valuesById[8259] = "S2C_CommonActionNotify"] = 8259;
    values[valuesById[8260] = "S2C_CommonSettlementNotify"] = 8260;
    values[valuesById[8261] = "S2C_CommonExtraThinkNotify"] = 8261;
    values[valuesById[8262] = "S2C_CommonOpenCardNotify"] = 8262;
    values[valuesById[8263] = "S2C_CommonBuyInsuranceTurnNotify"] = 8263;
    values[valuesById[8264] = "S2C_CommonBuyInsuranceTurnRespNotify"] = 8264;
    values[valuesById[8265] = "S2C_CommonInsuranceLotteryNotify"] = 8265;
    values[valuesById[8266] = "S2C_CommonPotsNotify"] = 8266;
    values[valuesById[8267] = "S2C_CommonJackpotLotteryNotify"] = 8267;
    values[valuesById[8268] = "S2C_CommonSqueezeRoundNotify"] = 8268;
    values[valuesById[8269] = "S2C_CommonAutoOperatorNotify"] = 8269;
    values[valuesById[10001] = "MSG_TexasCowboyBegin"] = 10001;
    values[valuesById[10002] = "C2S_TexasCowboyEnterGame"] = 10002;
    values[valuesById[10003] = "C2S_TexasCowboyExitGame"] = 10003;
    values[valuesById[10004] = "C2S_TexasCowboyBet"] = 10004;
    values[valuesById[10005] = "C2S_TexasCowboyRecord"] = 10005;
    values[valuesById[10006] = "C2S_TexasCowboyBringIn"] = 10006;
    values[valuesById[10007] = "C2S_TexasCowboyBringOut"] = 10007;
    values[valuesById[10008] = "C2S_TexasCowboyTotalHistory"] = 10008;
    values[valuesById[10030] = "S2C_TexasCowboyEnterGameResp"] = 10030;
    values[valuesById[10031] = "S2C_TexasCowboyExitGameResp"] = 10031;
    values[valuesById[10032] = "S2C_TexasCowboyBetResp"] = 10032;
    values[valuesById[10033] = "S2C_TexasCowboyRecordResp"] = 10033;
    values[valuesById[10034] = "S2C_TexasCowboyBringInResp"] = 10034;
    values[valuesById[10035] = "S2C_TexasCowboyBringOutResp"] = 10035;
    values[valuesById[10036] = "S2C_TexasCowboyTotalHistoryResp"] = 10036;
    values[valuesById[10050] = "S2C_TexasCowboyBetNotify"] = 10050;
    values[valuesById[10051] = "S2C_TexasCowboyGameStartNotify"] = 10051;
    values[valuesById[10052] = "S2C_TexasCowboyGameSettlementNotify"] = 10052;
    values[valuesById[10100] = "MSG_TexasCowboyEnd"] = 10100;
    return values;
})();

$root.C2SEnterGame = (function() {

    /**
     * Properties of a C2SEnterGame.
     * @exports IC2SEnterGame
     * @interface IC2SEnterGame
     * @property {string|null} [gameId] C2SEnterGame gameId
     * @property {string|null} [uid] C2SEnterGame uid
     */

    /**
     * Constructs a new C2SEnterGame.
     * @exports C2SEnterGame
     * @classdesc Represents a C2SEnterGame.
     * @implements IC2SEnterGame
     * @constructor
     * @param {IC2SEnterGame=} [p] Properties to set
     */
    function C2SEnterGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SEnterGame gameId.
     * @member {string} gameId
     * @memberof C2SEnterGame
     * @instance
     */
    C2SEnterGame.prototype.gameId = "";

    /**
     * C2SEnterGame uid.
     * @member {string} uid
     * @memberof C2SEnterGame
     * @instance
     */
    C2SEnterGame.prototype.uid = "";

    /**
     * Encodes the specified C2SEnterGame message. Does not implicitly {@link C2SEnterGame.verify|verify} messages.
     * @function encode
     * @memberof C2SEnterGame
     * @static
     * @param {IC2SEnterGame} m C2SEnterGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SEnterGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        return w;
    };

    /**
     * Decodes a C2SEnterGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEnterGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SEnterGame} C2SEnterGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SEnterGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.uid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SEnterGame;
})();

$root.C2SExitGame = (function() {

    /**
     * Properties of a C2SExitGame.
     * @exports IC2SExitGame
     * @interface IC2SExitGame
     * @property {string|null} [gameId] C2SExitGame gameId
     */

    /**
     * Constructs a new C2SExitGame.
     * @exports C2SExitGame
     * @classdesc Represents a C2SExitGame.
     * @implements IC2SExitGame
     * @constructor
     * @param {IC2SExitGame=} [p] Properties to set
     */
    function C2SExitGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SExitGame gameId.
     * @member {string} gameId
     * @memberof C2SExitGame
     * @instance
     */
    C2SExitGame.prototype.gameId = "";

    /**
     * Encodes the specified C2SExitGame message. Does not implicitly {@link C2SExitGame.verify|verify} messages.
     * @function encode
     * @memberof C2SExitGame
     * @static
     * @param {IC2SExitGame} m C2SExitGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SExitGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SExitGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2SExitGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SExitGame} C2SExitGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SExitGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SExitGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SExitGame;
})();

$root.C2SGameSitDown = (function() {

    /**
     * Properties of a C2SGameSitDown.
     * @exports IC2SGameSitDown
     * @interface IC2SGameSitDown
     * @property {string|null} [gameId] C2SGameSitDown gameId
     * @property {number|null} [seat] C2SGameSitDown seat
     */

    /**
     * Constructs a new C2SGameSitDown.
     * @exports C2SGameSitDown
     * @classdesc Represents a C2SGameSitDown.
     * @implements IC2SGameSitDown
     * @constructor
     * @param {IC2SGameSitDown=} [p] Properties to set
     */
    function C2SGameSitDown(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameSitDown gameId.
     * @member {string} gameId
     * @memberof C2SGameSitDown
     * @instance
     */
    C2SGameSitDown.prototype.gameId = "";

    /**
     * C2SGameSitDown seat.
     * @member {number} seat
     * @memberof C2SGameSitDown
     * @instance
     */
    C2SGameSitDown.prototype.seat = 0;

    /**
     * Encodes the specified C2SGameSitDown message. Does not implicitly {@link C2SGameSitDown.verify|verify} messages.
     * @function encode
     * @memberof C2SGameSitDown
     * @static
     * @param {IC2SGameSitDown} m C2SGameSitDown message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameSitDown.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.seat != null && Object.hasOwnProperty.call(m, "seat"))
            w.uint32(16).int32(m.seat);
        return w;
    };

    /**
     * Decodes a C2SGameSitDown message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameSitDown
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameSitDown} C2SGameSitDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameSitDown.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameSitDown();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.seat = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameSitDown;
})();

$root.C2SGameStandUp = (function() {

    /**
     * Properties of a C2SGameStandUp.
     * @exports IC2SGameStandUp
     * @interface IC2SGameStandUp
     * @property {string|null} [gameId] C2SGameStandUp gameId
     */

    /**
     * Constructs a new C2SGameStandUp.
     * @exports C2SGameStandUp
     * @classdesc Represents a C2SGameStandUp.
     * @implements IC2SGameStandUp
     * @constructor
     * @param {IC2SGameStandUp=} [p] Properties to set
     */
    function C2SGameStandUp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameStandUp gameId.
     * @member {string} gameId
     * @memberof C2SGameStandUp
     * @instance
     */
    C2SGameStandUp.prototype.gameId = "";

    /**
     * Encodes the specified C2SGameStandUp message. Does not implicitly {@link C2SGameStandUp.verify|verify} messages.
     * @function encode
     * @memberof C2SGameStandUp
     * @static
     * @param {IC2SGameStandUp} m C2SGameStandUp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameStandUp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SGameStandUp message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameStandUp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameStandUp} C2SGameStandUp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameStandUp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameStandUp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameStandUp;
})();

$root.C2SGameBringIn = (function() {

    /**
     * Properties of a C2SGameBringIn.
     * @exports IC2SGameBringIn
     * @interface IC2SGameBringIn
     * @property {string|null} [gameId] C2SGameBringIn gameId
     * @property {number|null} [amount] C2SGameBringIn amount
     */

    /**
     * Constructs a new C2SGameBringIn.
     * @exports C2SGameBringIn
     * @classdesc Represents a C2SGameBringIn.
     * @implements IC2SGameBringIn
     * @constructor
     * @param {IC2SGameBringIn=} [p] Properties to set
     */
    function C2SGameBringIn(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameBringIn gameId.
     * @member {string} gameId
     * @memberof C2SGameBringIn
     * @instance
     */
    C2SGameBringIn.prototype.gameId = "";

    /**
     * C2SGameBringIn amount.
     * @member {number} amount
     * @memberof C2SGameBringIn
     * @instance
     */
    C2SGameBringIn.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified C2SGameBringIn message. Does not implicitly {@link C2SGameBringIn.verify|verify} messages.
     * @function encode
     * @memberof C2SGameBringIn
     * @static
     * @param {IC2SGameBringIn} m C2SGameBringIn message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameBringIn.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(16).int64(m.amount);
        return w;
    };

    /**
     * Decodes a C2SGameBringIn message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameBringIn
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameBringIn} C2SGameBringIn
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameBringIn.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameBringIn();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameBringIn;
})();

$root.C2SGameAction = (function() {

    /**
     * Properties of a C2SGameAction.
     * @exports IC2SGameAction
     * @interface IC2SGameAction
     * @property {string|null} [gameId] C2SGameAction gameId
     * @property {IActionInfo|null} [actionInfo] C2SGameAction actionInfo
     */

    /**
     * Constructs a new C2SGameAction.
     * @exports C2SGameAction
     * @classdesc Represents a C2SGameAction.
     * @implements IC2SGameAction
     * @constructor
     * @param {IC2SGameAction=} [p] Properties to set
     */
    function C2SGameAction(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameAction gameId.
     * @member {string} gameId
     * @memberof C2SGameAction
     * @instance
     */
    C2SGameAction.prototype.gameId = "";

    /**
     * C2SGameAction actionInfo.
     * @member {IActionInfo|null|undefined} actionInfo
     * @memberof C2SGameAction
     * @instance
     */
    C2SGameAction.prototype.actionInfo = null;

    /**
     * Encodes the specified C2SGameAction message. Does not implicitly {@link C2SGameAction.verify|verify} messages.
     * @function encode
     * @memberof C2SGameAction
     * @static
     * @param {IC2SGameAction} m C2SGameAction message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameAction.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionInfo != null && Object.hasOwnProperty.call(m, "actionInfo"))
            $root.ActionInfo.encode(m.actionInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a C2SGameAction message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameAction
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameAction} C2SGameAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameAction.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameAction();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionInfo = $root.ActionInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameAction;
})();

$root.C2SGameBuyInsurance = (function() {

    /**
     * Properties of a C2SGameBuyInsurance.
     * @exports IC2SGameBuyInsurance
     * @interface IC2SGameBuyInsurance
     * @property {string|null} [gameId] C2SGameBuyInsurance gameId
     * @property {number|null} [amount] C2SGameBuyInsurance amount
     */

    /**
     * Constructs a new C2SGameBuyInsurance.
     * @exports C2SGameBuyInsurance
     * @classdesc Represents a C2SGameBuyInsurance.
     * @implements IC2SGameBuyInsurance
     * @constructor
     * @param {IC2SGameBuyInsurance=} [p] Properties to set
     */
    function C2SGameBuyInsurance(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameBuyInsurance gameId.
     * @member {string} gameId
     * @memberof C2SGameBuyInsurance
     * @instance
     */
    C2SGameBuyInsurance.prototype.gameId = "";

    /**
     * C2SGameBuyInsurance amount.
     * @member {number} amount
     * @memberof C2SGameBuyInsurance
     * @instance
     */
    C2SGameBuyInsurance.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified C2SGameBuyInsurance message. Does not implicitly {@link C2SGameBuyInsurance.verify|verify} messages.
     * @function encode
     * @memberof C2SGameBuyInsurance
     * @static
     * @param {IC2SGameBuyInsurance} m C2SGameBuyInsurance message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameBuyInsurance.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(16).int64(m.amount);
        return w;
    };

    /**
     * Decodes a C2SGameBuyInsurance message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameBuyInsurance
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameBuyInsurance} C2SGameBuyInsurance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameBuyInsurance.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameBuyInsurance();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameBuyInsurance;
})();

$root.C2SGameChat = (function() {

    /**
     * Properties of a C2SGameChat.
     * @exports IC2SGameChat
     * @interface IC2SGameChat
     * @property {string|null} [gameId] C2SGameChat gameId
     * @property {string|null} [content] C2SGameChat content
     */

    /**
     * Constructs a new C2SGameChat.
     * @exports C2SGameChat
     * @classdesc Represents a C2SGameChat.
     * @implements IC2SGameChat
     * @constructor
     * @param {IC2SGameChat=} [p] Properties to set
     */
    function C2SGameChat(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameChat gameId.
     * @member {string} gameId
     * @memberof C2SGameChat
     * @instance
     */
    C2SGameChat.prototype.gameId = "";

    /**
     * C2SGameChat content.
     * @member {string} content
     * @memberof C2SGameChat
     * @instance
     */
    C2SGameChat.prototype.content = "";

    /**
     * Encodes the specified C2SGameChat message. Does not implicitly {@link C2SGameChat.verify|verify} messages.
     * @function encode
     * @memberof C2SGameChat
     * @static
     * @param {IC2SGameChat} m C2SGameChat message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameChat.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            w.uint32(18).string(m.content);
        return w;
    };

    /**
     * Decodes a C2SGameChat message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameChat
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameChat} C2SGameChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameChat.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameChat();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameChat;
})();

$root.C2SGameOpen = (function() {

    /**
     * Properties of a C2SGameOpen.
     * @exports IC2SGameOpen
     * @interface IC2SGameOpen
     * @property {string|null} [gameId] C2SGameOpen gameId
     */

    /**
     * Constructs a new C2SGameOpen.
     * @exports C2SGameOpen
     * @classdesc Represents a C2SGameOpen.
     * @implements IC2SGameOpen
     * @constructor
     * @param {IC2SGameOpen=} [p] Properties to set
     */
    function C2SGameOpen(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGameOpen gameId.
     * @member {string} gameId
     * @memberof C2SGameOpen
     * @instance
     */
    C2SGameOpen.prototype.gameId = "";

    /**
     * Encodes the specified C2SGameOpen message. Does not implicitly {@link C2SGameOpen.verify|verify} messages.
     * @function encode
     * @memberof C2SGameOpen
     * @static
     * @param {IC2SGameOpen} m C2SGameOpen message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGameOpen.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SGameOpen message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameOpen
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGameOpen} C2SGameOpen
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameOpen.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGameOpen();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGameOpen;
})();

$root.C2SGetObList = (function() {

    /**
     * Properties of a C2SGetObList.
     * @exports IC2SGetObList
     * @interface IC2SGetObList
     * @property {string|null} [gameId] C2SGetObList gameId
     * @property {number|null} [page] C2SGetObList page
     * @property {number|null} [pageSize] C2SGetObList pageSize
     */

    /**
     * Constructs a new C2SGetObList.
     * @exports C2SGetObList
     * @classdesc Represents a C2SGetObList.
     * @implements IC2SGetObList
     * @constructor
     * @param {IC2SGetObList=} [p] Properties to set
     */
    function C2SGetObList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetObList gameId.
     * @member {string} gameId
     * @memberof C2SGetObList
     * @instance
     */
    C2SGetObList.prototype.gameId = "";

    /**
     * C2SGetObList page.
     * @member {number} page
     * @memberof C2SGetObList
     * @instance
     */
    C2SGetObList.prototype.page = 0;

    /**
     * C2SGetObList pageSize.
     * @member {number} pageSize
     * @memberof C2SGetObList
     * @instance
     */
    C2SGetObList.prototype.pageSize = 0;

    /**
     * Encodes the specified C2SGetObList message. Does not implicitly {@link C2SGetObList.verify|verify} messages.
     * @function encode
     * @memberof C2SGetObList
     * @static
     * @param {IC2SGetObList} m C2SGetObList message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetObList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(16).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(24).int32(m.pageSize);
        return w;
    };

    /**
     * Decodes a C2SGetObList message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetObList
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetObList} C2SGetObList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetObList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetObList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.page = r.int32();
                break;
            case 3:
                m.pageSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGetObList;
})();

$root.CS2GetBringInList = (function() {

    /**
     * Properties of a CS2GetBringInList.
     * @exports ICS2GetBringInList
     * @interface ICS2GetBringInList
     * @property {string|null} [gameId] CS2GetBringInList gameId
     * @property {number|null} [page] CS2GetBringInList page
     * @property {number|null} [pageSize] CS2GetBringInList pageSize
     */

    /**
     * Constructs a new CS2GetBringInList.
     * @exports CS2GetBringInList
     * @classdesc Represents a CS2GetBringInList.
     * @implements ICS2GetBringInList
     * @constructor
     * @param {ICS2GetBringInList=} [p] Properties to set
     */
    function CS2GetBringInList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CS2GetBringInList gameId.
     * @member {string} gameId
     * @memberof CS2GetBringInList
     * @instance
     */
    CS2GetBringInList.prototype.gameId = "";

    /**
     * CS2GetBringInList page.
     * @member {number} page
     * @memberof CS2GetBringInList
     * @instance
     */
    CS2GetBringInList.prototype.page = 0;

    /**
     * CS2GetBringInList pageSize.
     * @member {number} pageSize
     * @memberof CS2GetBringInList
     * @instance
     */
    CS2GetBringInList.prototype.pageSize = 0;

    /**
     * Encodes the specified CS2GetBringInList message. Does not implicitly {@link CS2GetBringInList.verify|verify} messages.
     * @function encode
     * @memberof CS2GetBringInList
     * @static
     * @param {ICS2GetBringInList} m CS2GetBringInList message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    CS2GetBringInList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(16).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(24).int32(m.pageSize);
        return w;
    };

    /**
     * Decodes a CS2GetBringInList message from the specified reader or buffer.
     * @function decode
     * @memberof CS2GetBringInList
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CS2GetBringInList} CS2GetBringInList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    CS2GetBringInList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CS2GetBringInList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.page = r.int32();
                break;
            case 3:
                m.pageSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CS2GetBringInList;
})();

$root.C2SRefresh = (function() {

    /**
     * Properties of a C2SRefresh.
     * @exports IC2SRefresh
     * @interface IC2SRefresh
     * @property {string|null} [gameId] C2SRefresh gameId
     */

    /**
     * Constructs a new C2SRefresh.
     * @exports C2SRefresh
     * @classdesc Represents a C2SRefresh.
     * @implements IC2SRefresh
     * @constructor
     * @param {IC2SRefresh=} [p] Properties to set
     */
    function C2SRefresh(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SRefresh gameId.
     * @member {string} gameId
     * @memberof C2SRefresh
     * @instance
     */
    C2SRefresh.prototype.gameId = "";

    /**
     * Encodes the specified C2SRefresh message. Does not implicitly {@link C2SRefresh.verify|verify} messages.
     * @function encode
     * @memberof C2SRefresh
     * @static
     * @param {IC2SRefresh} m C2SRefresh message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SRefresh.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SRefresh message from the specified reader or buffer.
     * @function decode
     * @memberof C2SRefresh
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SRefresh} C2SRefresh
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SRefresh.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SRefresh();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SRefresh;
})();

$root.C2SExaminePublicCard = (function() {

    /**
     * Properties of a C2SExaminePublicCard.
     * @exports IC2SExaminePublicCard
     * @interface IC2SExaminePublicCard
     * @property {string|null} [gameId] C2SExaminePublicCard gameId
     */

    /**
     * Constructs a new C2SExaminePublicCard.
     * @exports C2SExaminePublicCard
     * @classdesc Represents a C2SExaminePublicCard.
     * @implements IC2SExaminePublicCard
     * @constructor
     * @param {IC2SExaminePublicCard=} [p] Properties to set
     */
    function C2SExaminePublicCard(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SExaminePublicCard gameId.
     * @member {string} gameId
     * @memberof C2SExaminePublicCard
     * @instance
     */
    C2SExaminePublicCard.prototype.gameId = "";

    /**
     * Encodes the specified C2SExaminePublicCard message. Does not implicitly {@link C2SExaminePublicCard.verify|verify} messages.
     * @function encode
     * @memberof C2SExaminePublicCard
     * @static
     * @param {IC2SExaminePublicCard} m C2SExaminePublicCard message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SExaminePublicCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SExaminePublicCard message from the specified reader or buffer.
     * @function decode
     * @memberof C2SExaminePublicCard
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SExaminePublicCard} C2SExaminePublicCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SExaminePublicCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SExaminePublicCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SExaminePublicCard;
})();

$root.C2SExaminePrivateCard = (function() {

    /**
     * Properties of a C2SExaminePrivateCard.
     * @exports IC2SExaminePrivateCard
     * @interface IC2SExaminePrivateCard
     * @property {string|null} [gameId] C2SExaminePrivateCard gameId
     */

    /**
     * Constructs a new C2SExaminePrivateCard.
     * @exports C2SExaminePrivateCard
     * @classdesc Represents a C2SExaminePrivateCard.
     * @implements IC2SExaminePrivateCard
     * @constructor
     * @param {IC2SExaminePrivateCard=} [p] Properties to set
     */
    function C2SExaminePrivateCard(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SExaminePrivateCard gameId.
     * @member {string} gameId
     * @memberof C2SExaminePrivateCard
     * @instance
     */
    C2SExaminePrivateCard.prototype.gameId = "";

    /**
     * Encodes the specified C2SExaminePrivateCard message. Does not implicitly {@link C2SExaminePrivateCard.verify|verify} messages.
     * @function encode
     * @memberof C2SExaminePrivateCard
     * @static
     * @param {IC2SExaminePrivateCard} m C2SExaminePrivateCard message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SExaminePrivateCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SExaminePrivateCard message from the specified reader or buffer.
     * @function decode
     * @memberof C2SExaminePrivateCard
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SExaminePrivateCard} C2SExaminePrivateCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SExaminePrivateCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SExaminePrivateCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SExaminePrivateCard;
})();

$root.C2STexasCashExtraThink = (function() {

    /**
     * Properties of a C2STexasCashExtraThink.
     * @exports IC2STexasCashExtraThink
     * @interface IC2STexasCashExtraThink
     * @property {string|null} [gameId] C2STexasCashExtraThink gameId
     */

    /**
     * Constructs a new C2STexasCashExtraThink.
     * @exports C2STexasCashExtraThink
     * @classdesc Represents a C2STexasCashExtraThink.
     * @implements IC2STexasCashExtraThink
     * @constructor
     * @param {IC2STexasCashExtraThink=} [p] Properties to set
     */
    function C2STexasCashExtraThink(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashExtraThink gameId.
     * @member {string} gameId
     * @memberof C2STexasCashExtraThink
     * @instance
     */
    C2STexasCashExtraThink.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCashExtraThink message. Does not implicitly {@link C2STexasCashExtraThink.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashExtraThink
     * @static
     * @param {IC2STexasCashExtraThink} m C2STexasCashExtraThink message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashExtraThink.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCashExtraThink message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashExtraThink
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashExtraThink} C2STexasCashExtraThink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashExtraThink.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashExtraThink();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashExtraThink;
})();

$root.C2STexasCashSqueezeStart = (function() {

    /**
     * Properties of a C2STexasCashSqueezeStart.
     * @exports IC2STexasCashSqueezeStart
     * @interface IC2STexasCashSqueezeStart
     * @property {string|null} [gameId] C2STexasCashSqueezeStart gameId
     */

    /**
     * Constructs a new C2STexasCashSqueezeStart.
     * @exports C2STexasCashSqueezeStart
     * @classdesc Represents a C2STexasCashSqueezeStart.
     * @implements IC2STexasCashSqueezeStart
     * @constructor
     * @param {IC2STexasCashSqueezeStart=} [p] Properties to set
     */
    function C2STexasCashSqueezeStart(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashSqueezeStart gameId.
     * @member {string} gameId
     * @memberof C2STexasCashSqueezeStart
     * @instance
     */
    C2STexasCashSqueezeStart.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCashSqueezeStart message. Does not implicitly {@link C2STexasCashSqueezeStart.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashSqueezeStart
     * @static
     * @param {IC2STexasCashSqueezeStart} m C2STexasCashSqueezeStart message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashSqueezeStart.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCashSqueezeStart message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashSqueezeStart
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashSqueezeStart} C2STexasCashSqueezeStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashSqueezeStart.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashSqueezeStart();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashSqueezeStart;
})();

$root.C2STexasCashSqueezeFinish = (function() {

    /**
     * Properties of a C2STexasCashSqueezeFinish.
     * @exports IC2STexasCashSqueezeFinish
     * @interface IC2STexasCashSqueezeFinish
     * @property {string|null} [gameId] C2STexasCashSqueezeFinish gameId
     */

    /**
     * Constructs a new C2STexasCashSqueezeFinish.
     * @exports C2STexasCashSqueezeFinish
     * @classdesc Represents a C2STexasCashSqueezeFinish.
     * @implements IC2STexasCashSqueezeFinish
     * @constructor
     * @param {IC2STexasCashSqueezeFinish=} [p] Properties to set
     */
    function C2STexasCashSqueezeFinish(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashSqueezeFinish gameId.
     * @member {string} gameId
     * @memberof C2STexasCashSqueezeFinish
     * @instance
     */
    C2STexasCashSqueezeFinish.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCashSqueezeFinish message. Does not implicitly {@link C2STexasCashSqueezeFinish.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashSqueezeFinish
     * @static
     * @param {IC2STexasCashSqueezeFinish} m C2STexasCashSqueezeFinish message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashSqueezeFinish.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCashSqueezeFinish message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashSqueezeFinish
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashSqueezeFinish} C2STexasCashSqueezeFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashSqueezeFinish.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashSqueezeFinish();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashSqueezeFinish;
})();

$root.C2STexasCashPlayerRecord = (function() {

    /**
     * Properties of a C2STexasCashPlayerRecord.
     * @exports IC2STexasCashPlayerRecord
     * @interface IC2STexasCashPlayerRecord
     * @property {string|null} [gameId] C2STexasCashPlayerRecord gameId
     */

    /**
     * Constructs a new C2STexasCashPlayerRecord.
     * @exports C2STexasCashPlayerRecord
     * @classdesc Represents a C2STexasCashPlayerRecord.
     * @implements IC2STexasCashPlayerRecord
     * @constructor
     * @param {IC2STexasCashPlayerRecord=} [p] Properties to set
     */
    function C2STexasCashPlayerRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashPlayerRecord gameId.
     * @member {string} gameId
     * @memberof C2STexasCashPlayerRecord
     * @instance
     */
    C2STexasCashPlayerRecord.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCashPlayerRecord message. Does not implicitly {@link C2STexasCashPlayerRecord.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashPlayerRecord
     * @static
     * @param {IC2STexasCashPlayerRecord} m C2STexasCashPlayerRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashPlayerRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCashPlayerRecord message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashPlayerRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashPlayerRecord} C2STexasCashPlayerRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashPlayerRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashPlayerRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashPlayerRecord;
})();

$root.C2STexasCashReplayList = (function() {

    /**
     * Properties of a C2STexasCashReplayList.
     * @exports IC2STexasCashReplayList
     * @interface IC2STexasCashReplayList
     * @property {string|null} [gameId] C2STexasCashReplayList gameId
     * @property {number|null} [page] C2STexasCashReplayList page
     * @property {number|null} [pageSize] C2STexasCashReplayList pageSize
     */

    /**
     * Constructs a new C2STexasCashReplayList.
     * @exports C2STexasCashReplayList
     * @classdesc Represents a C2STexasCashReplayList.
     * @implements IC2STexasCashReplayList
     * @constructor
     * @param {IC2STexasCashReplayList=} [p] Properties to set
     */
    function C2STexasCashReplayList(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashReplayList gameId.
     * @member {string} gameId
     * @memberof C2STexasCashReplayList
     * @instance
     */
    C2STexasCashReplayList.prototype.gameId = "";

    /**
     * C2STexasCashReplayList page.
     * @member {number} page
     * @memberof C2STexasCashReplayList
     * @instance
     */
    C2STexasCashReplayList.prototype.page = 0;

    /**
     * C2STexasCashReplayList pageSize.
     * @member {number} pageSize
     * @memberof C2STexasCashReplayList
     * @instance
     */
    C2STexasCashReplayList.prototype.pageSize = 0;

    /**
     * Encodes the specified C2STexasCashReplayList message. Does not implicitly {@link C2STexasCashReplayList.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashReplayList
     * @static
     * @param {IC2STexasCashReplayList} m C2STexasCashReplayList message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashReplayList.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(16).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(24).int32(m.pageSize);
        return w;
    };

    /**
     * Decodes a C2STexasCashReplayList message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashReplayList
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashReplayList} C2STexasCashReplayList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashReplayList.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashReplayList();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.page = r.int32();
                break;
            case 3:
                m.pageSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashReplayList;
})();

$root.C2STexasCashReplayDetails = (function() {

    /**
     * Properties of a C2STexasCashReplayDetails.
     * @exports IC2STexasCashReplayDetails
     * @interface IC2STexasCashReplayDetails
     * @property {string|null} [gameId] C2STexasCashReplayDetails gameId
     * @property {number|null} [index] C2STexasCashReplayDetails index
     */

    /**
     * Constructs a new C2STexasCashReplayDetails.
     * @exports C2STexasCashReplayDetails
     * @classdesc Represents a C2STexasCashReplayDetails.
     * @implements IC2STexasCashReplayDetails
     * @constructor
     * @param {IC2STexasCashReplayDetails=} [p] Properties to set
     */
    function C2STexasCashReplayDetails(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashReplayDetails gameId.
     * @member {string} gameId
     * @memberof C2STexasCashReplayDetails
     * @instance
     */
    C2STexasCashReplayDetails.prototype.gameId = "";

    /**
     * C2STexasCashReplayDetails index.
     * @member {number} index
     * @memberof C2STexasCashReplayDetails
     * @instance
     */
    C2STexasCashReplayDetails.prototype.index = 0;

    /**
     * Encodes the specified C2STexasCashReplayDetails message. Does not implicitly {@link C2STexasCashReplayDetails.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashReplayDetails
     * @static
     * @param {IC2STexasCashReplayDetails} m C2STexasCashReplayDetails message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashReplayDetails.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int32(m.index);
        return w;
    };

    /**
     * Decodes a C2STexasCashReplayDetails message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashReplayDetails
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashReplayDetails} C2STexasCashReplayDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashReplayDetails.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashReplayDetails();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.index = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashReplayDetails;
})();

$root.C2STexasCashCancelAutoOperator = (function() {

    /**
     * Properties of a C2STexasCashCancelAutoOperator.
     * @exports IC2STexasCashCancelAutoOperator
     * @interface IC2STexasCashCancelAutoOperator
     * @property {string|null} [gameId] C2STexasCashCancelAutoOperator gameId
     */

    /**
     * Constructs a new C2STexasCashCancelAutoOperator.
     * @exports C2STexasCashCancelAutoOperator
     * @classdesc Represents a C2STexasCashCancelAutoOperator.
     * @implements IC2STexasCashCancelAutoOperator
     * @constructor
     * @param {IC2STexasCashCancelAutoOperator=} [p] Properties to set
     */
    function C2STexasCashCancelAutoOperator(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2STexasCashCancelAutoOperator gameId.
     * @member {string} gameId
     * @memberof C2STexasCashCancelAutoOperator
     * @instance
     */
    C2STexasCashCancelAutoOperator.prototype.gameId = "";

    /**
     * Encodes the specified C2STexasCashCancelAutoOperator message. Does not implicitly {@link C2STexasCashCancelAutoOperator.verify|verify} messages.
     * @function encode
     * @memberof C2STexasCashCancelAutoOperator
     * @static
     * @param {IC2STexasCashCancelAutoOperator} m C2STexasCashCancelAutoOperator message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2STexasCashCancelAutoOperator.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2STexasCashCancelAutoOperator message from the specified reader or buffer.
     * @function decode
     * @memberof C2STexasCashCancelAutoOperator
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2STexasCashCancelAutoOperator} C2STexasCashCancelAutoOperator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2STexasCashCancelAutoOperator.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2STexasCashCancelAutoOperator();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2STexasCashCancelAutoOperator;
})();

$root.S2CCommonEnterGameResp = (function() {

    /**
     * Properties of a S2CCommonEnterGameResp.
     * @exports IS2CCommonEnterGameResp
     * @interface IS2CCommonEnterGameResp
     * @property {ICommonResult|null} [result] S2CCommonEnterGameResp result
     * @property {string|null} [gameId] S2CCommonEnterGameResp gameId
     * @property {IBasicTexasConfig|null} [texasConfig] S2CCommonEnterGameResp texasConfig
     * @property {ITexasDynamicData|null} [gameDynamic] S2CCommonEnterGameResp gameDynamic
     */

    /**
     * Constructs a new S2CCommonEnterGameResp.
     * @exports S2CCommonEnterGameResp
     * @classdesc Represents a S2CCommonEnterGameResp.
     * @implements IS2CCommonEnterGameResp
     * @constructor
     * @param {IS2CCommonEnterGameResp=} [p] Properties to set
     */
    function S2CCommonEnterGameResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonEnterGameResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonEnterGameResp
     * @instance
     */
    S2CCommonEnterGameResp.prototype.result = null;

    /**
     * S2CCommonEnterGameResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonEnterGameResp
     * @instance
     */
    S2CCommonEnterGameResp.prototype.gameId = "";

    /**
     * S2CCommonEnterGameResp texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof S2CCommonEnterGameResp
     * @instance
     */
    S2CCommonEnterGameResp.prototype.texasConfig = null;

    /**
     * S2CCommonEnterGameResp gameDynamic.
     * @member {ITexasDynamicData|null|undefined} gameDynamic
     * @memberof S2CCommonEnterGameResp
     * @instance
     */
    S2CCommonEnterGameResp.prototype.gameDynamic = null;

    /**
     * Encodes the specified S2CCommonEnterGameResp message. Does not implicitly {@link S2CCommonEnterGameResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonEnterGameResp
     * @static
     * @param {IS2CCommonEnterGameResp} m S2CCommonEnterGameResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonEnterGameResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(26).fork()).ldelim();
        if (m.gameDynamic != null && Object.hasOwnProperty.call(m, "gameDynamic"))
            $root.TexasDynamicData.encode(m.gameDynamic, w.uint32(34).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonEnterGameResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonEnterGameResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonEnterGameResp} S2CCommonEnterGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonEnterGameResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonEnterGameResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            case 4:
                m.gameDynamic = $root.TexasDynamicData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonEnterGameResp;
})();

$root.S2CCommonExitGameResp = (function() {

    /**
     * Properties of a S2CCommonExitGameResp.
     * @exports IS2CCommonExitGameResp
     * @interface IS2CCommonExitGameResp
     * @property {ICommonResult|null} [result] S2CCommonExitGameResp result
     * @property {string|null} [gameId] S2CCommonExitGameResp gameId
     */

    /**
     * Constructs a new S2CCommonExitGameResp.
     * @exports S2CCommonExitGameResp
     * @classdesc Represents a S2CCommonExitGameResp.
     * @implements IS2CCommonExitGameResp
     * @constructor
     * @param {IS2CCommonExitGameResp=} [p] Properties to set
     */
    function S2CCommonExitGameResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonExitGameResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonExitGameResp
     * @instance
     */
    S2CCommonExitGameResp.prototype.result = null;

    /**
     * S2CCommonExitGameResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonExitGameResp
     * @instance
     */
    S2CCommonExitGameResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonExitGameResp message. Does not implicitly {@link S2CCommonExitGameResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonExitGameResp
     * @static
     * @param {IS2CCommonExitGameResp} m S2CCommonExitGameResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonExitGameResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonExitGameResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonExitGameResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonExitGameResp} S2CCommonExitGameResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonExitGameResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonExitGameResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonExitGameResp;
})();

$root.S2CCommonSitDownResp = (function() {

    /**
     * Properties of a S2CCommonSitDownResp.
     * @exports IS2CCommonSitDownResp
     * @interface IS2CCommonSitDownResp
     * @property {ICommonResult|null} [result] S2CCommonSitDownResp result
     * @property {string|null} [gameId] S2CCommonSitDownResp gameId
     */

    /**
     * Constructs a new S2CCommonSitDownResp.
     * @exports S2CCommonSitDownResp
     * @classdesc Represents a S2CCommonSitDownResp.
     * @implements IS2CCommonSitDownResp
     * @constructor
     * @param {IS2CCommonSitDownResp=} [p] Properties to set
     */
    function S2CCommonSitDownResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSitDownResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonSitDownResp
     * @instance
     */
    S2CCommonSitDownResp.prototype.result = null;

    /**
     * S2CCommonSitDownResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonSitDownResp
     * @instance
     */
    S2CCommonSitDownResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonSitDownResp message. Does not implicitly {@link S2CCommonSitDownResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSitDownResp
     * @static
     * @param {IS2CCommonSitDownResp} m S2CCommonSitDownResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSitDownResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonSitDownResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSitDownResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSitDownResp} S2CCommonSitDownResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSitDownResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSitDownResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSitDownResp;
})();

$root.S2CCommonStandUpResp = (function() {

    /**
     * Properties of a S2CCommonStandUpResp.
     * @exports IS2CCommonStandUpResp
     * @interface IS2CCommonStandUpResp
     * @property {ICommonResult|null} [result] S2CCommonStandUpResp result
     * @property {string|null} [gameId] S2CCommonStandUpResp gameId
     */

    /**
     * Constructs a new S2CCommonStandUpResp.
     * @exports S2CCommonStandUpResp
     * @classdesc Represents a S2CCommonStandUpResp.
     * @implements IS2CCommonStandUpResp
     * @constructor
     * @param {IS2CCommonStandUpResp=} [p] Properties to set
     */
    function S2CCommonStandUpResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonStandUpResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonStandUpResp
     * @instance
     */
    S2CCommonStandUpResp.prototype.result = null;

    /**
     * S2CCommonStandUpResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonStandUpResp
     * @instance
     */
    S2CCommonStandUpResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonStandUpResp message. Does not implicitly {@link S2CCommonStandUpResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonStandUpResp
     * @static
     * @param {IS2CCommonStandUpResp} m S2CCommonStandUpResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonStandUpResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonStandUpResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonStandUpResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonStandUpResp} S2CCommonStandUpResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonStandUpResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonStandUpResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonStandUpResp;
})();

$root.S2CCommonBringInResp = (function() {

    /**
     * Properties of a S2CCommonBringInResp.
     * @exports IS2CCommonBringInResp
     * @interface IS2CCommonBringInResp
     * @property {ICommonResult|null} [result] S2CCommonBringInResp result
     * @property {string|null} [gameId] S2CCommonBringInResp gameId
     * @property {number|null} [bringInNum] S2CCommonBringInResp bringInNum
     * @property {number|null} [totalBringInNum] S2CCommonBringInResp totalBringInNum
     * @property {number|null} [currencyNum] S2CCommonBringInResp currencyNum
     */

    /**
     * Constructs a new S2CCommonBringInResp.
     * @exports S2CCommonBringInResp
     * @classdesc Represents a S2CCommonBringInResp.
     * @implements IS2CCommonBringInResp
     * @constructor
     * @param {IS2CCommonBringInResp=} [p] Properties to set
     */
    function S2CCommonBringInResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBringInResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.result = null;

    /**
     * S2CCommonBringInResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.gameId = "";

    /**
     * S2CCommonBringInResp bringInNum.
     * @member {number} bringInNum
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.bringInNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonBringInResp totalBringInNum.
     * @member {number} totalBringInNum
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.totalBringInNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonBringInResp currencyNum.
     * @member {number} currencyNum
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.currencyNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonBringInResp message. Does not implicitly {@link S2CCommonBringInResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBringInResp
     * @static
     * @param {IS2CCommonBringInResp} m S2CCommonBringInResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBringInResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.bringInNum != null && Object.hasOwnProperty.call(m, "bringInNum"))
            w.uint32(24).int64(m.bringInNum);
        if (m.totalBringInNum != null && Object.hasOwnProperty.call(m, "totalBringInNum"))
            w.uint32(32).int64(m.totalBringInNum);
        if (m.currencyNum != null && Object.hasOwnProperty.call(m, "currencyNum"))
            w.uint32(40).int64(m.currencyNum);
        return w;
    };

    /**
     * Decodes a S2CCommonBringInResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBringInResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBringInResp} S2CCommonBringInResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBringInResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBringInResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.bringInNum = r.int64();
                break;
            case 4:
                m.totalBringInNum = r.int64();
                break;
            case 5:
                m.currencyNum = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBringInResp;
})();

$root.S2CCommonActionResp = (function() {

    /**
     * Properties of a S2CCommonActionResp.
     * @exports IS2CCommonActionResp
     * @interface IS2CCommonActionResp
     * @property {ICommonResult|null} [result] S2CCommonActionResp result
     * @property {string|null} [gameId] S2CCommonActionResp gameId
     * @property {IActionInfo|null} [actionInfo] S2CCommonActionResp actionInfo
     */

    /**
     * Constructs a new S2CCommonActionResp.
     * @exports S2CCommonActionResp
     * @classdesc Represents a S2CCommonActionResp.
     * @implements IS2CCommonActionResp
     * @constructor
     * @param {IS2CCommonActionResp=} [p] Properties to set
     */
    function S2CCommonActionResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonActionResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonActionResp
     * @instance
     */
    S2CCommonActionResp.prototype.result = null;

    /**
     * S2CCommonActionResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonActionResp
     * @instance
     */
    S2CCommonActionResp.prototype.gameId = "";

    /**
     * S2CCommonActionResp actionInfo.
     * @member {IActionInfo|null|undefined} actionInfo
     * @memberof S2CCommonActionResp
     * @instance
     */
    S2CCommonActionResp.prototype.actionInfo = null;

    /**
     * Encodes the specified S2CCommonActionResp message. Does not implicitly {@link S2CCommonActionResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonActionResp
     * @static
     * @param {IS2CCommonActionResp} m S2CCommonActionResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonActionResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.actionInfo != null && Object.hasOwnProperty.call(m, "actionInfo"))
            $root.ActionInfo.encode(m.actionInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonActionResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonActionResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonActionResp} S2CCommonActionResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonActionResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonActionResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.actionInfo = $root.ActionInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonActionResp;
})();

$root.S2CCommonBuyInsuranceResp = (function() {

    /**
     * Properties of a S2CCommonBuyInsuranceResp.
     * @exports IS2CCommonBuyInsuranceResp
     * @interface IS2CCommonBuyInsuranceResp
     * @property {ICommonResult|null} [result] S2CCommonBuyInsuranceResp result
     * @property {string|null} [gameId] S2CCommonBuyInsuranceResp gameId
     */

    /**
     * Constructs a new S2CCommonBuyInsuranceResp.
     * @exports S2CCommonBuyInsuranceResp
     * @classdesc Represents a S2CCommonBuyInsuranceResp.
     * @implements IS2CCommonBuyInsuranceResp
     * @constructor
     * @param {IS2CCommonBuyInsuranceResp=} [p] Properties to set
     */
    function S2CCommonBuyInsuranceResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBuyInsuranceResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonBuyInsuranceResp
     * @instance
     */
    S2CCommonBuyInsuranceResp.prototype.result = null;

    /**
     * S2CCommonBuyInsuranceResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonBuyInsuranceResp
     * @instance
     */
    S2CCommonBuyInsuranceResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonBuyInsuranceResp message. Does not implicitly {@link S2CCommonBuyInsuranceResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBuyInsuranceResp
     * @static
     * @param {IS2CCommonBuyInsuranceResp} m S2CCommonBuyInsuranceResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBuyInsuranceResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonBuyInsuranceResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBuyInsuranceResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBuyInsuranceResp} S2CCommonBuyInsuranceResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBuyInsuranceResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBuyInsuranceResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBuyInsuranceResp;
})();

$root.S2CCommonChatResp = (function() {

    /**
     * Properties of a S2CCommonChatResp.
     * @exports IS2CCommonChatResp
     * @interface IS2CCommonChatResp
     * @property {ICommonResult|null} [result] S2CCommonChatResp result
     * @property {string|null} [gameId] S2CCommonChatResp gameId
     * @property {string|null} [content] S2CCommonChatResp content
     */

    /**
     * Constructs a new S2CCommonChatResp.
     * @exports S2CCommonChatResp
     * @classdesc Represents a S2CCommonChatResp.
     * @implements IS2CCommonChatResp
     * @constructor
     * @param {IS2CCommonChatResp=} [p] Properties to set
     */
    function S2CCommonChatResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonChatResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonChatResp
     * @instance
     */
    S2CCommonChatResp.prototype.result = null;

    /**
     * S2CCommonChatResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonChatResp
     * @instance
     */
    S2CCommonChatResp.prototype.gameId = "";

    /**
     * S2CCommonChatResp content.
     * @member {string} content
     * @memberof S2CCommonChatResp
     * @instance
     */
    S2CCommonChatResp.prototype.content = "";

    /**
     * Encodes the specified S2CCommonChatResp message. Does not implicitly {@link S2CCommonChatResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonChatResp
     * @static
     * @param {IS2CCommonChatResp} m S2CCommonChatResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonChatResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            w.uint32(26).string(m.content);
        return w;
    };

    /**
     * Decodes a S2CCommonChatResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonChatResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonChatResp} S2CCommonChatResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonChatResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonChatResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.content = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonChatResp;
})();

$root.S2CCommonStartResp = (function() {

    /**
     * Properties of a S2CCommonStartResp.
     * @exports IS2CCommonStartResp
     * @interface IS2CCommonStartResp
     * @property {ICommonResult|null} [result] S2CCommonStartResp result
     * @property {string|null} [gameId] S2CCommonStartResp gameId
     */

    /**
     * Constructs a new S2CCommonStartResp.
     * @exports S2CCommonStartResp
     * @classdesc Represents a S2CCommonStartResp.
     * @implements IS2CCommonStartResp
     * @constructor
     * @param {IS2CCommonStartResp=} [p] Properties to set
     */
    function S2CCommonStartResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonStartResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonStartResp
     * @instance
     */
    S2CCommonStartResp.prototype.result = null;

    /**
     * S2CCommonStartResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonStartResp
     * @instance
     */
    S2CCommonStartResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonStartResp message. Does not implicitly {@link S2CCommonStartResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonStartResp
     * @static
     * @param {IS2CCommonStartResp} m S2CCommonStartResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonStartResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonStartResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonStartResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonStartResp} S2CCommonStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonStartResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonStartResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonStartResp;
})();

$root.S2CCommonGetObListResp = (function() {

    /**
     * Properties of a S2CCommonGetObListResp.
     * @exports IS2CCommonGetObListResp
     * @interface IS2CCommonGetObListResp
     * @property {ICommonResult|null} [result] S2CCommonGetObListResp result
     * @property {string|null} [gameId] S2CCommonGetObListResp gameId
     * @property {Array.<IPlayerInfo>|null} [observer] S2CCommonGetObListResp observer
     * @property {number|null} [page] S2CCommonGetObListResp page
     * @property {number|null} [pageSize] S2CCommonGetObListResp pageSize
     * @property {number|null} [totalMember] S2CCommonGetObListResp totalMember
     */

    /**
     * Constructs a new S2CCommonGetObListResp.
     * @exports S2CCommonGetObListResp
     * @classdesc Represents a S2CCommonGetObListResp.
     * @implements IS2CCommonGetObListResp
     * @constructor
     * @param {IS2CCommonGetObListResp=} [p] Properties to set
     */
    function S2CCommonGetObListResp(p) {
        this.observer = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonGetObListResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.result = null;

    /**
     * S2CCommonGetObListResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.gameId = "";

    /**
     * S2CCommonGetObListResp observer.
     * @member {Array.<IPlayerInfo>} observer
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.observer = $util.emptyArray;

    /**
     * S2CCommonGetObListResp page.
     * @member {number} page
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.page = 0;

    /**
     * S2CCommonGetObListResp pageSize.
     * @member {number} pageSize
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.pageSize = 0;

    /**
     * S2CCommonGetObListResp totalMember.
     * @member {number} totalMember
     * @memberof S2CCommonGetObListResp
     * @instance
     */
    S2CCommonGetObListResp.prototype.totalMember = 0;

    /**
     * Encodes the specified S2CCommonGetObListResp message. Does not implicitly {@link S2CCommonGetObListResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonGetObListResp
     * @static
     * @param {IS2CCommonGetObListResp} m S2CCommonGetObListResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonGetObListResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.observer != null && m.observer.length) {
            for (var i = 0; i < m.observer.length; ++i)
                $root.PlayerInfo.encode(m.observer[i], w.uint32(26).fork()).ldelim();
        }
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(32).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(40).int32(m.pageSize);
        if (m.totalMember != null && Object.hasOwnProperty.call(m, "totalMember"))
            w.uint32(48).int32(m.totalMember);
        return w;
    };

    /**
     * Decodes a S2CCommonGetObListResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonGetObListResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonGetObListResp} S2CCommonGetObListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonGetObListResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonGetObListResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.observer && m.observer.length))
                    m.observer = [];
                m.observer.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.page = r.int32();
                break;
            case 5:
                m.pageSize = r.int32();
                break;
            case 6:
                m.totalMember = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonGetObListResp;
})();

$root.S2CCommonGetBringInListResp = (function() {

    /**
     * Properties of a S2CCommonGetBringInListResp.
     * @exports IS2CCommonGetBringInListResp
     * @interface IS2CCommonGetBringInListResp
     * @property {ICommonResult|null} [result] S2CCommonGetBringInListResp result
     * @property {string|null} [gameId] S2CCommonGetBringInListResp gameId
     * @property {Array.<IPlayerHistoryInfo>|null} [playerHistoryInfo] S2CCommonGetBringInListResp playerHistoryInfo
     * @property {number|null} [page] S2CCommonGetBringInListResp page
     * @property {number|null} [pageSize] S2CCommonGetBringInListResp pageSize
     * @property {number|null} [totalMember] S2CCommonGetBringInListResp totalMember
     */

    /**
     * Constructs a new S2CCommonGetBringInListResp.
     * @exports S2CCommonGetBringInListResp
     * @classdesc Represents a S2CCommonGetBringInListResp.
     * @implements IS2CCommonGetBringInListResp
     * @constructor
     * @param {IS2CCommonGetBringInListResp=} [p] Properties to set
     */
    function S2CCommonGetBringInListResp(p) {
        this.playerHistoryInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonGetBringInListResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.result = null;

    /**
     * S2CCommonGetBringInListResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.gameId = "";

    /**
     * S2CCommonGetBringInListResp playerHistoryInfo.
     * @member {Array.<IPlayerHistoryInfo>} playerHistoryInfo
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.playerHistoryInfo = $util.emptyArray;

    /**
     * S2CCommonGetBringInListResp page.
     * @member {number} page
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.page = 0;

    /**
     * S2CCommonGetBringInListResp pageSize.
     * @member {number} pageSize
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.pageSize = 0;

    /**
     * S2CCommonGetBringInListResp totalMember.
     * @member {number} totalMember
     * @memberof S2CCommonGetBringInListResp
     * @instance
     */
    S2CCommonGetBringInListResp.prototype.totalMember = 0;

    /**
     * Encodes the specified S2CCommonGetBringInListResp message. Does not implicitly {@link S2CCommonGetBringInListResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonGetBringInListResp
     * @static
     * @param {IS2CCommonGetBringInListResp} m S2CCommonGetBringInListResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonGetBringInListResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.playerHistoryInfo != null && m.playerHistoryInfo.length) {
            for (var i = 0; i < m.playerHistoryInfo.length; ++i)
                $root.PlayerHistoryInfo.encode(m.playerHistoryInfo[i], w.uint32(26).fork()).ldelim();
        }
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(32).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(40).int32(m.pageSize);
        if (m.totalMember != null && Object.hasOwnProperty.call(m, "totalMember"))
            w.uint32(48).int32(m.totalMember);
        return w;
    };

    /**
     * Decodes a S2CCommonGetBringInListResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonGetBringInListResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonGetBringInListResp} S2CCommonGetBringInListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonGetBringInListResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonGetBringInListResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.playerHistoryInfo && m.playerHistoryInfo.length))
                    m.playerHistoryInfo = [];
                m.playerHistoryInfo.push($root.PlayerHistoryInfo.decode(r, r.uint32()));
                break;
            case 4:
                m.page = r.int32();
                break;
            case 5:
                m.pageSize = r.int32();
                break;
            case 6:
                m.totalMember = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonGetBringInListResp;
})();

$root.S2CCommonRefreshResp = (function() {

    /**
     * Properties of a S2CCommonRefreshResp.
     * @exports IS2CCommonRefreshResp
     * @interface IS2CCommonRefreshResp
     * @property {ICommonResult|null} [result] S2CCommonRefreshResp result
     * @property {string|null} [gameId] S2CCommonRefreshResp gameId
     * @property {ITexasDynamicData|null} [gameDynamic] S2CCommonRefreshResp gameDynamic
     */

    /**
     * Constructs a new S2CCommonRefreshResp.
     * @exports S2CCommonRefreshResp
     * @classdesc Represents a S2CCommonRefreshResp.
     * @implements IS2CCommonRefreshResp
     * @constructor
     * @param {IS2CCommonRefreshResp=} [p] Properties to set
     */
    function S2CCommonRefreshResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonRefreshResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonRefreshResp
     * @instance
     */
    S2CCommonRefreshResp.prototype.result = null;

    /**
     * S2CCommonRefreshResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonRefreshResp
     * @instance
     */
    S2CCommonRefreshResp.prototype.gameId = "";

    /**
     * S2CCommonRefreshResp gameDynamic.
     * @member {ITexasDynamicData|null|undefined} gameDynamic
     * @memberof S2CCommonRefreshResp
     * @instance
     */
    S2CCommonRefreshResp.prototype.gameDynamic = null;

    /**
     * Encodes the specified S2CCommonRefreshResp message. Does not implicitly {@link S2CCommonRefreshResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonRefreshResp
     * @static
     * @param {IS2CCommonRefreshResp} m S2CCommonRefreshResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonRefreshResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.gameDynamic != null && Object.hasOwnProperty.call(m, "gameDynamic"))
            $root.TexasDynamicData.encode(m.gameDynamic, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonRefreshResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonRefreshResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonRefreshResp} S2CCommonRefreshResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonRefreshResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonRefreshResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.gameDynamic = $root.TexasDynamicData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonRefreshResp;
})();

$root.S2CCommonExaminePublicCardResp = (function() {

    /**
     * Properties of a S2CCommonExaminePublicCardResp.
     * @exports IS2CCommonExaminePublicCardResp
     * @interface IS2CCommonExaminePublicCardResp
     * @property {ICommonResult|null} [result] S2CCommonExaminePublicCardResp result
     * @property {string|null} [gameId] S2CCommonExaminePublicCardResp gameId
     * @property {Array.<ICardInfo>|null} [publicCardList] S2CCommonExaminePublicCardResp publicCardList
     */

    /**
     * Constructs a new S2CCommonExaminePublicCardResp.
     * @exports S2CCommonExaminePublicCardResp
     * @classdesc Represents a S2CCommonExaminePublicCardResp.
     * @implements IS2CCommonExaminePublicCardResp
     * @constructor
     * @param {IS2CCommonExaminePublicCardResp=} [p] Properties to set
     */
    function S2CCommonExaminePublicCardResp(p) {
        this.publicCardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonExaminePublicCardResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonExaminePublicCardResp
     * @instance
     */
    S2CCommonExaminePublicCardResp.prototype.result = null;

    /**
     * S2CCommonExaminePublicCardResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonExaminePublicCardResp
     * @instance
     */
    S2CCommonExaminePublicCardResp.prototype.gameId = "";

    /**
     * S2CCommonExaminePublicCardResp publicCardList.
     * @member {Array.<ICardInfo>} publicCardList
     * @memberof S2CCommonExaminePublicCardResp
     * @instance
     */
    S2CCommonExaminePublicCardResp.prototype.publicCardList = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonExaminePublicCardResp message. Does not implicitly {@link S2CCommonExaminePublicCardResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonExaminePublicCardResp
     * @static
     * @param {IS2CCommonExaminePublicCardResp} m S2CCommonExaminePublicCardResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonExaminePublicCardResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.publicCardList != null && m.publicCardList.length) {
            for (var i = 0; i < m.publicCardList.length; ++i)
                $root.CardInfo.encode(m.publicCardList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonExaminePublicCardResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonExaminePublicCardResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonExaminePublicCardResp} S2CCommonExaminePublicCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonExaminePublicCardResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonExaminePublicCardResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.publicCardList && m.publicCardList.length))
                    m.publicCardList = [];
                m.publicCardList.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonExaminePublicCardResp;
})();

$root.S2CCommonExaminePrivateCardResp = (function() {

    /**
     * Properties of a S2CCommonExaminePrivateCardResp.
     * @exports IS2CCommonExaminePrivateCardResp
     * @interface IS2CCommonExaminePrivateCardResp
     * @property {ICommonResult|null} [result] S2CCommonExaminePrivateCardResp result
     * @property {string|null} [gameId] S2CCommonExaminePrivateCardResp gameId
     * @property {Array.<IPlayerInfo>|null} [playerList] S2CCommonExaminePrivateCardResp playerList
     */

    /**
     * Constructs a new S2CCommonExaminePrivateCardResp.
     * @exports S2CCommonExaminePrivateCardResp
     * @classdesc Represents a S2CCommonExaminePrivateCardResp.
     * @implements IS2CCommonExaminePrivateCardResp
     * @constructor
     * @param {IS2CCommonExaminePrivateCardResp=} [p] Properties to set
     */
    function S2CCommonExaminePrivateCardResp(p) {
        this.playerList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonExaminePrivateCardResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonExaminePrivateCardResp
     * @instance
     */
    S2CCommonExaminePrivateCardResp.prototype.result = null;

    /**
     * S2CCommonExaminePrivateCardResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonExaminePrivateCardResp
     * @instance
     */
    S2CCommonExaminePrivateCardResp.prototype.gameId = "";

    /**
     * S2CCommonExaminePrivateCardResp playerList.
     * @member {Array.<IPlayerInfo>} playerList
     * @memberof S2CCommonExaminePrivateCardResp
     * @instance
     */
    S2CCommonExaminePrivateCardResp.prototype.playerList = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonExaminePrivateCardResp message. Does not implicitly {@link S2CCommonExaminePrivateCardResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonExaminePrivateCardResp
     * @static
     * @param {IS2CCommonExaminePrivateCardResp} m S2CCommonExaminePrivateCardResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonExaminePrivateCardResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.playerList != null && m.playerList.length) {
            for (var i = 0; i < m.playerList.length; ++i)
                $root.PlayerInfo.encode(m.playerList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonExaminePrivateCardResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonExaminePrivateCardResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonExaminePrivateCardResp} S2CCommonExaminePrivateCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonExaminePrivateCardResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonExaminePrivateCardResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.playerList && m.playerList.length))
                    m.playerList = [];
                m.playerList.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonExaminePrivateCardResp;
})();

$root.S2CCommonExtraThinkResp = (function() {

    /**
     * Properties of a S2CCommonExtraThinkResp.
     * @exports IS2CCommonExtraThinkResp
     * @interface IS2CCommonExtraThinkResp
     * @property {ICommonResult|null} [result] S2CCommonExtraThinkResp result
     * @property {string|null} [gameId] S2CCommonExtraThinkResp gameId
     * @property {number|null} [extraTime] S2CCommonExtraThinkResp extraTime
     * @property {number|null} [totalTime] S2CCommonExtraThinkResp totalTime
     */

    /**
     * Constructs a new S2CCommonExtraThinkResp.
     * @exports S2CCommonExtraThinkResp
     * @classdesc Represents a S2CCommonExtraThinkResp.
     * @implements IS2CCommonExtraThinkResp
     * @constructor
     * @param {IS2CCommonExtraThinkResp=} [p] Properties to set
     */
    function S2CCommonExtraThinkResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonExtraThinkResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonExtraThinkResp
     * @instance
     */
    S2CCommonExtraThinkResp.prototype.result = null;

    /**
     * S2CCommonExtraThinkResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonExtraThinkResp
     * @instance
     */
    S2CCommonExtraThinkResp.prototype.gameId = "";

    /**
     * S2CCommonExtraThinkResp extraTime.
     * @member {number} extraTime
     * @memberof S2CCommonExtraThinkResp
     * @instance
     */
    S2CCommonExtraThinkResp.prototype.extraTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonExtraThinkResp totalTime.
     * @member {number} totalTime
     * @memberof S2CCommonExtraThinkResp
     * @instance
     */
    S2CCommonExtraThinkResp.prototype.totalTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonExtraThinkResp message. Does not implicitly {@link S2CCommonExtraThinkResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonExtraThinkResp
     * @static
     * @param {IS2CCommonExtraThinkResp} m S2CCommonExtraThinkResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonExtraThinkResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.extraTime != null && Object.hasOwnProperty.call(m, "extraTime"))
            w.uint32(24).int64(m.extraTime);
        if (m.totalTime != null && Object.hasOwnProperty.call(m, "totalTime"))
            w.uint32(32).int64(m.totalTime);
        return w;
    };

    /**
     * Decodes a S2CCommonExtraThinkResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonExtraThinkResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonExtraThinkResp} S2CCommonExtraThinkResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonExtraThinkResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonExtraThinkResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.extraTime = r.int64();
                break;
            case 4:
                m.totalTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonExtraThinkResp;
})();

$root.S2CCommonSqueezeStartResp = (function() {

    /**
     * Properties of a S2CCommonSqueezeStartResp.
     * @exports IS2CCommonSqueezeStartResp
     * @interface IS2CCommonSqueezeStartResp
     * @property {ICommonResult|null} [result] S2CCommonSqueezeStartResp result
     * @property {string|null} [gameId] S2CCommonSqueezeStartResp gameId
     * @property {ICardInfo|null} [cardInfo] S2CCommonSqueezeStartResp cardInfo
     * @property {number|null} [leftTime] S2CCommonSqueezeStartResp leftTime
     */

    /**
     * Constructs a new S2CCommonSqueezeStartResp.
     * @exports S2CCommonSqueezeStartResp
     * @classdesc Represents a S2CCommonSqueezeStartResp.
     * @implements IS2CCommonSqueezeStartResp
     * @constructor
     * @param {IS2CCommonSqueezeStartResp=} [p] Properties to set
     */
    function S2CCommonSqueezeStartResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSqueezeStartResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonSqueezeStartResp
     * @instance
     */
    S2CCommonSqueezeStartResp.prototype.result = null;

    /**
     * S2CCommonSqueezeStartResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonSqueezeStartResp
     * @instance
     */
    S2CCommonSqueezeStartResp.prototype.gameId = "";

    /**
     * S2CCommonSqueezeStartResp cardInfo.
     * @member {ICardInfo|null|undefined} cardInfo
     * @memberof S2CCommonSqueezeStartResp
     * @instance
     */
    S2CCommonSqueezeStartResp.prototype.cardInfo = null;

    /**
     * S2CCommonSqueezeStartResp leftTime.
     * @member {number} leftTime
     * @memberof S2CCommonSqueezeStartResp
     * @instance
     */
    S2CCommonSqueezeStartResp.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonSqueezeStartResp message. Does not implicitly {@link S2CCommonSqueezeStartResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSqueezeStartResp
     * @static
     * @param {IS2CCommonSqueezeStartResp} m S2CCommonSqueezeStartResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSqueezeStartResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.cardInfo != null && Object.hasOwnProperty.call(m, "cardInfo"))
            $root.CardInfo.encode(m.cardInfo, w.uint32(26).fork()).ldelim();
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(32).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a S2CCommonSqueezeStartResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSqueezeStartResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSqueezeStartResp} S2CCommonSqueezeStartResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSqueezeStartResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSqueezeStartResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.cardInfo = $root.CardInfo.decode(r, r.uint32());
                break;
            case 4:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSqueezeStartResp;
})();

$root.S2CCommonSqueezeFinishResp = (function() {

    /**
     * Properties of a S2CCommonSqueezeFinishResp.
     * @exports IS2CCommonSqueezeFinishResp
     * @interface IS2CCommonSqueezeFinishResp
     * @property {ICommonResult|null} [result] S2CCommonSqueezeFinishResp result
     * @property {string|null} [gameId] S2CCommonSqueezeFinishResp gameId
     * @property {ICardInfo|null} [cardInfo] S2CCommonSqueezeFinishResp cardInfo
     * @property {number|null} [leftTime] S2CCommonSqueezeFinishResp leftTime
     */

    /**
     * Constructs a new S2CCommonSqueezeFinishResp.
     * @exports S2CCommonSqueezeFinishResp
     * @classdesc Represents a S2CCommonSqueezeFinishResp.
     * @implements IS2CCommonSqueezeFinishResp
     * @constructor
     * @param {IS2CCommonSqueezeFinishResp=} [p] Properties to set
     */
    function S2CCommonSqueezeFinishResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSqueezeFinishResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonSqueezeFinishResp
     * @instance
     */
    S2CCommonSqueezeFinishResp.prototype.result = null;

    /**
     * S2CCommonSqueezeFinishResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonSqueezeFinishResp
     * @instance
     */
    S2CCommonSqueezeFinishResp.prototype.gameId = "";

    /**
     * S2CCommonSqueezeFinishResp cardInfo.
     * @member {ICardInfo|null|undefined} cardInfo
     * @memberof S2CCommonSqueezeFinishResp
     * @instance
     */
    S2CCommonSqueezeFinishResp.prototype.cardInfo = null;

    /**
     * S2CCommonSqueezeFinishResp leftTime.
     * @member {number} leftTime
     * @memberof S2CCommonSqueezeFinishResp
     * @instance
     */
    S2CCommonSqueezeFinishResp.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonSqueezeFinishResp message. Does not implicitly {@link S2CCommonSqueezeFinishResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSqueezeFinishResp
     * @static
     * @param {IS2CCommonSqueezeFinishResp} m S2CCommonSqueezeFinishResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSqueezeFinishResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.cardInfo != null && Object.hasOwnProperty.call(m, "cardInfo"))
            $root.CardInfo.encode(m.cardInfo, w.uint32(26).fork()).ldelim();
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(32).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a S2CCommonSqueezeFinishResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSqueezeFinishResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSqueezeFinishResp} S2CCommonSqueezeFinishResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSqueezeFinishResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSqueezeFinishResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.cardInfo = $root.CardInfo.decode(r, r.uint32());
                break;
            case 4:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSqueezeFinishResp;
})();

$root.S2CCommonPlayerRecordResp = (function() {

    /**
     * Properties of a S2CCommonPlayerRecordResp.
     * @exports IS2CCommonPlayerRecordResp
     * @interface IS2CCommonPlayerRecordResp
     * @property {ICommonResult|null} [result] S2CCommonPlayerRecordResp result
     * @property {string|null} [gameId] S2CCommonPlayerRecordResp gameId
     * @property {number|null} [insuranceWinlose] S2CCommonPlayerRecordResp insuranceWinlose
     * @property {number|null} [jackpotWinlose] S2CCommonPlayerRecordResp jackpotWinlose
     * @property {Array.<IRecordPlayer>|null} [list] S2CCommonPlayerRecordResp list
     */

    /**
     * Constructs a new S2CCommonPlayerRecordResp.
     * @exports S2CCommonPlayerRecordResp
     * @classdesc Represents a S2CCommonPlayerRecordResp.
     * @implements IS2CCommonPlayerRecordResp
     * @constructor
     * @param {IS2CCommonPlayerRecordResp=} [p] Properties to set
     */
    function S2CCommonPlayerRecordResp(p) {
        this.list = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonPlayerRecordResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonPlayerRecordResp
     * @instance
     */
    S2CCommonPlayerRecordResp.prototype.result = null;

    /**
     * S2CCommonPlayerRecordResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonPlayerRecordResp
     * @instance
     */
    S2CCommonPlayerRecordResp.prototype.gameId = "";

    /**
     * S2CCommonPlayerRecordResp insuranceWinlose.
     * @member {number} insuranceWinlose
     * @memberof S2CCommonPlayerRecordResp
     * @instance
     */
    S2CCommonPlayerRecordResp.prototype.insuranceWinlose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonPlayerRecordResp jackpotWinlose.
     * @member {number} jackpotWinlose
     * @memberof S2CCommonPlayerRecordResp
     * @instance
     */
    S2CCommonPlayerRecordResp.prototype.jackpotWinlose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonPlayerRecordResp list.
     * @member {Array.<IRecordPlayer>} list
     * @memberof S2CCommonPlayerRecordResp
     * @instance
     */
    S2CCommonPlayerRecordResp.prototype.list = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonPlayerRecordResp message. Does not implicitly {@link S2CCommonPlayerRecordResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonPlayerRecordResp
     * @static
     * @param {IS2CCommonPlayerRecordResp} m S2CCommonPlayerRecordResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonPlayerRecordResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.insuranceWinlose != null && Object.hasOwnProperty.call(m, "insuranceWinlose"))
            w.uint32(24).int64(m.insuranceWinlose);
        if (m.jackpotWinlose != null && Object.hasOwnProperty.call(m, "jackpotWinlose"))
            w.uint32(32).int64(m.jackpotWinlose);
        if (m.list != null && m.list.length) {
            for (var i = 0; i < m.list.length; ++i)
                $root.RecordPlayer.encode(m.list[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonPlayerRecordResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonPlayerRecordResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonPlayerRecordResp} S2CCommonPlayerRecordResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonPlayerRecordResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonPlayerRecordResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.insuranceWinlose = r.int64();
                break;
            case 4:
                m.jackpotWinlose = r.int64();
                break;
            case 5:
                if (!(m.list && m.list.length))
                    m.list = [];
                m.list.push($root.RecordPlayer.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonPlayerRecordResp;
})();

$root.S2CCommonReplayListResp = (function() {

    /**
     * Properties of a S2CCommonReplayListResp.
     * @exports IS2CCommonReplayListResp
     * @interface IS2CCommonReplayListResp
     * @property {ICommonResult|null} [result] S2CCommonReplayListResp result
     * @property {string|null} [gameId] S2CCommonReplayListResp gameId
     * @property {ISimpleReplayData|null} [data] S2CCommonReplayListResp data
     */

    /**
     * Constructs a new S2CCommonReplayListResp.
     * @exports S2CCommonReplayListResp
     * @classdesc Represents a S2CCommonReplayListResp.
     * @implements IS2CCommonReplayListResp
     * @constructor
     * @param {IS2CCommonReplayListResp=} [p] Properties to set
     */
    function S2CCommonReplayListResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonReplayListResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonReplayListResp
     * @instance
     */
    S2CCommonReplayListResp.prototype.result = null;

    /**
     * S2CCommonReplayListResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonReplayListResp
     * @instance
     */
    S2CCommonReplayListResp.prototype.gameId = "";

    /**
     * S2CCommonReplayListResp data.
     * @member {ISimpleReplayData|null|undefined} data
     * @memberof S2CCommonReplayListResp
     * @instance
     */
    S2CCommonReplayListResp.prototype.data = null;

    /**
     * Encodes the specified S2CCommonReplayListResp message. Does not implicitly {@link S2CCommonReplayListResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonReplayListResp
     * @static
     * @param {IS2CCommonReplayListResp} m S2CCommonReplayListResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonReplayListResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.data != null && Object.hasOwnProperty.call(m, "data"))
            $root.SimpleReplayData.encode(m.data, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonReplayListResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonReplayListResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonReplayListResp} S2CCommonReplayListResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonReplayListResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonReplayListResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.data = $root.SimpleReplayData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonReplayListResp;
})();

$root.S2CCommonReplayDetailsResp = (function() {

    /**
     * Properties of a S2CCommonReplayDetailsResp.
     * @exports IS2CCommonReplayDetailsResp
     * @interface IS2CCommonReplayDetailsResp
     * @property {ICommonResult|null} [result] S2CCommonReplayDetailsResp result
     * @property {string|null} [gameId] S2CCommonReplayDetailsResp gameId
     * @property {IReplayData|null} [data] S2CCommonReplayDetailsResp data
     */

    /**
     * Constructs a new S2CCommonReplayDetailsResp.
     * @exports S2CCommonReplayDetailsResp
     * @classdesc Represents a S2CCommonReplayDetailsResp.
     * @implements IS2CCommonReplayDetailsResp
     * @constructor
     * @param {IS2CCommonReplayDetailsResp=} [p] Properties to set
     */
    function S2CCommonReplayDetailsResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonReplayDetailsResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonReplayDetailsResp
     * @instance
     */
    S2CCommonReplayDetailsResp.prototype.result = null;

    /**
     * S2CCommonReplayDetailsResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonReplayDetailsResp
     * @instance
     */
    S2CCommonReplayDetailsResp.prototype.gameId = "";

    /**
     * S2CCommonReplayDetailsResp data.
     * @member {IReplayData|null|undefined} data
     * @memberof S2CCommonReplayDetailsResp
     * @instance
     */
    S2CCommonReplayDetailsResp.prototype.data = null;

    /**
     * Encodes the specified S2CCommonReplayDetailsResp message. Does not implicitly {@link S2CCommonReplayDetailsResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonReplayDetailsResp
     * @static
     * @param {IS2CCommonReplayDetailsResp} m S2CCommonReplayDetailsResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonReplayDetailsResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.data != null && Object.hasOwnProperty.call(m, "data"))
            $root.ReplayData.encode(m.data, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonReplayDetailsResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonReplayDetailsResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonReplayDetailsResp} S2CCommonReplayDetailsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonReplayDetailsResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonReplayDetailsResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.data = $root.ReplayData.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonReplayDetailsResp;
})();

$root.S2CCommonCancelAutoOperatorResp = (function() {

    /**
     * Properties of a S2CCommonCancelAutoOperatorResp.
     * @exports IS2CCommonCancelAutoOperatorResp
     * @interface IS2CCommonCancelAutoOperatorResp
     * @property {ICommonResult|null} [result] S2CCommonCancelAutoOperatorResp result
     * @property {string|null} [gameId] S2CCommonCancelAutoOperatorResp gameId
     */

    /**
     * Constructs a new S2CCommonCancelAutoOperatorResp.
     * @exports S2CCommonCancelAutoOperatorResp
     * @classdesc Represents a S2CCommonCancelAutoOperatorResp.
     * @implements IS2CCommonCancelAutoOperatorResp
     * @constructor
     * @param {IS2CCommonCancelAutoOperatorResp=} [p] Properties to set
     */
    function S2CCommonCancelAutoOperatorResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonCancelAutoOperatorResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonCancelAutoOperatorResp
     * @instance
     */
    S2CCommonCancelAutoOperatorResp.prototype.result = null;

    /**
     * S2CCommonCancelAutoOperatorResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonCancelAutoOperatorResp
     * @instance
     */
    S2CCommonCancelAutoOperatorResp.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonCancelAutoOperatorResp message. Does not implicitly {@link S2CCommonCancelAutoOperatorResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonCancelAutoOperatorResp
     * @static
     * @param {IS2CCommonCancelAutoOperatorResp} m S2CCommonCancelAutoOperatorResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonCancelAutoOperatorResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonCancelAutoOperatorResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonCancelAutoOperatorResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonCancelAutoOperatorResp} S2CCommonCancelAutoOperatorResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonCancelAutoOperatorResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonCancelAutoOperatorResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonCancelAutoOperatorResp;
})();

$root.S2CCommonBringInTimerNotify = (function() {

    /**
     * Properties of a S2CCommonBringInTimerNotify.
     * @exports IS2CCommonBringInTimerNotify
     * @interface IS2CCommonBringInTimerNotify
     * @property {string|null} [gameId] S2CCommonBringInTimerNotify gameId
     * @property {string|null} [actionUid] S2CCommonBringInTimerNotify actionUid
     * @property {number|null} [leftTime] S2CCommonBringInTimerNotify leftTime
     */

    /**
     * Constructs a new S2CCommonBringInTimerNotify.
     * @exports S2CCommonBringInTimerNotify
     * @classdesc Represents a S2CCommonBringInTimerNotify.
     * @implements IS2CCommonBringInTimerNotify
     * @constructor
     * @param {IS2CCommonBringInTimerNotify=} [p] Properties to set
     */
    function S2CCommonBringInTimerNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBringInTimerNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonBringInTimerNotify
     * @instance
     */
    S2CCommonBringInTimerNotify.prototype.gameId = "";

    /**
     * S2CCommonBringInTimerNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonBringInTimerNotify
     * @instance
     */
    S2CCommonBringInTimerNotify.prototype.actionUid = "";

    /**
     * S2CCommonBringInTimerNotify leftTime.
     * @member {number} leftTime
     * @memberof S2CCommonBringInTimerNotify
     * @instance
     */
    S2CCommonBringInTimerNotify.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonBringInTimerNotify message. Does not implicitly {@link S2CCommonBringInTimerNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBringInTimerNotify
     * @static
     * @param {IS2CCommonBringInTimerNotify} m S2CCommonBringInTimerNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBringInTimerNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(24).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a S2CCommonBringInTimerNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBringInTimerNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBringInTimerNotify} S2CCommonBringInTimerNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBringInTimerNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBringInTimerNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBringInTimerNotify;
})();

$root.S2CCommonBringInNotify = (function() {

    /**
     * Properties of a S2CCommonBringInNotify.
     * @exports IS2CCommonBringInNotify
     * @interface IS2CCommonBringInNotify
     * @property {string|null} [gameId] S2CCommonBringInNotify gameId
     * @property {string|null} [uid] S2CCommonBringInNotify uid
     * @property {number|null} [bringInNum] S2CCommonBringInNotify bringInNum
     * @property {number|null} [totalBringInNum] S2CCommonBringInNotify totalBringInNum
     * @property {number|null} [currencyNum] S2CCommonBringInNotify currencyNum
     */

    /**
     * Constructs a new S2CCommonBringInNotify.
     * @exports S2CCommonBringInNotify
     * @classdesc Represents a S2CCommonBringInNotify.
     * @implements IS2CCommonBringInNotify
     * @constructor
     * @param {IS2CCommonBringInNotify=} [p] Properties to set
     */
    function S2CCommonBringInNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBringInNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonBringInNotify
     * @instance
     */
    S2CCommonBringInNotify.prototype.gameId = "";

    /**
     * S2CCommonBringInNotify uid.
     * @member {string} uid
     * @memberof S2CCommonBringInNotify
     * @instance
     */
    S2CCommonBringInNotify.prototype.uid = "";

    /**
     * S2CCommonBringInNotify bringInNum.
     * @member {number} bringInNum
     * @memberof S2CCommonBringInNotify
     * @instance
     */
    S2CCommonBringInNotify.prototype.bringInNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonBringInNotify totalBringInNum.
     * @member {number} totalBringInNum
     * @memberof S2CCommonBringInNotify
     * @instance
     */
    S2CCommonBringInNotify.prototype.totalBringInNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonBringInNotify currencyNum.
     * @member {number} currencyNum
     * @memberof S2CCommonBringInNotify
     * @instance
     */
    S2CCommonBringInNotify.prototype.currencyNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonBringInNotify message. Does not implicitly {@link S2CCommonBringInNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBringInNotify
     * @static
     * @param {IS2CCommonBringInNotify} m S2CCommonBringInNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBringInNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(26).string(m.uid);
        if (m.bringInNum != null && Object.hasOwnProperty.call(m, "bringInNum"))
            w.uint32(32).int64(m.bringInNum);
        if (m.totalBringInNum != null && Object.hasOwnProperty.call(m, "totalBringInNum"))
            w.uint32(40).int64(m.totalBringInNum);
        if (m.currencyNum != null && Object.hasOwnProperty.call(m, "currencyNum"))
            w.uint32(48).int64(m.currencyNum);
        return w;
    };

    /**
     * Decodes a S2CCommonBringInNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBringInNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBringInNotify} S2CCommonBringInNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBringInNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBringInNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.uid = r.string();
                break;
            case 4:
                m.bringInNum = r.int64();
                break;
            case 5:
                m.totalBringInNum = r.int64();
                break;
            case 6:
                m.currencyNum = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBringInNotify;
})();

$root.S2CCommonSitDownNotify = (function() {

    /**
     * Properties of a S2CCommonSitDownNotify.
     * @exports IS2CCommonSitDownNotify
     * @interface IS2CCommonSitDownNotify
     * @property {string|null} [gameId] S2CCommonSitDownNotify gameId
     * @property {IPlayerInfo|null} [seatPlayerInfo] S2CCommonSitDownNotify seatPlayerInfo
     */

    /**
     * Constructs a new S2CCommonSitDownNotify.
     * @exports S2CCommonSitDownNotify
     * @classdesc Represents a S2CCommonSitDownNotify.
     * @implements IS2CCommonSitDownNotify
     * @constructor
     * @param {IS2CCommonSitDownNotify=} [p] Properties to set
     */
    function S2CCommonSitDownNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSitDownNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonSitDownNotify
     * @instance
     */
    S2CCommonSitDownNotify.prototype.gameId = "";

    /**
     * S2CCommonSitDownNotify seatPlayerInfo.
     * @member {IPlayerInfo|null|undefined} seatPlayerInfo
     * @memberof S2CCommonSitDownNotify
     * @instance
     */
    S2CCommonSitDownNotify.prototype.seatPlayerInfo = null;

    /**
     * Encodes the specified S2CCommonSitDownNotify message. Does not implicitly {@link S2CCommonSitDownNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSitDownNotify
     * @static
     * @param {IS2CCommonSitDownNotify} m S2CCommonSitDownNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSitDownNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.seatPlayerInfo != null && Object.hasOwnProperty.call(m, "seatPlayerInfo"))
            $root.PlayerInfo.encode(m.seatPlayerInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonSitDownNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSitDownNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSitDownNotify} S2CCommonSitDownNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSitDownNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSitDownNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.seatPlayerInfo = $root.PlayerInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSitDownNotify;
})();

$root.S2CCommonStandUpNotify = (function() {

    /**
     * Properties of a S2CCommonStandUpNotify.
     * @exports IS2CCommonStandUpNotify
     * @interface IS2CCommonStandUpNotify
     * @property {string|null} [gameId] S2CCommonStandUpNotify gameId
     * @property {number|null} [actionSeat] S2CCommonStandUpNotify actionSeat
     * @property {string|null} [actionUid] S2CCommonStandUpNotify actionUid
     */

    /**
     * Constructs a new S2CCommonStandUpNotify.
     * @exports S2CCommonStandUpNotify
     * @classdesc Represents a S2CCommonStandUpNotify.
     * @implements IS2CCommonStandUpNotify
     * @constructor
     * @param {IS2CCommonStandUpNotify=} [p] Properties to set
     */
    function S2CCommonStandUpNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonStandUpNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonStandUpNotify
     * @instance
     */
    S2CCommonStandUpNotify.prototype.gameId = "";

    /**
     * S2CCommonStandUpNotify actionSeat.
     * @member {number} actionSeat
     * @memberof S2CCommonStandUpNotify
     * @instance
     */
    S2CCommonStandUpNotify.prototype.actionSeat = 0;

    /**
     * S2CCommonStandUpNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonStandUpNotify
     * @instance
     */
    S2CCommonStandUpNotify.prototype.actionUid = "";

    /**
     * Encodes the specified S2CCommonStandUpNotify message. Does not implicitly {@link S2CCommonStandUpNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonStandUpNotify
     * @static
     * @param {IS2CCommonStandUpNotify} m S2CCommonStandUpNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonStandUpNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionSeat != null && Object.hasOwnProperty.call(m, "actionSeat"))
            w.uint32(16).int32(m.actionSeat);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(26).string(m.actionUid);
        return w;
    };

    /**
     * Decodes a S2CCommonStandUpNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonStandUpNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonStandUpNotify} S2CCommonStandUpNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonStandUpNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonStandUpNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionSeat = r.int32();
                break;
            case 3:
                m.actionUid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonStandUpNotify;
})();

$root.S2CCommonOpenNotify = (function() {

    /**
     * Properties of a S2CCommonOpenNotify.
     * @exports IS2CCommonOpenNotify
     * @interface IS2CCommonOpenNotify
     * @property {string|null} [gameId] S2CCommonOpenNotify gameId
     */

    /**
     * Constructs a new S2CCommonOpenNotify.
     * @exports S2CCommonOpenNotify
     * @classdesc Represents a S2CCommonOpenNotify.
     * @implements IS2CCommonOpenNotify
     * @constructor
     * @param {IS2CCommonOpenNotify=} [p] Properties to set
     */
    function S2CCommonOpenNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonOpenNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonOpenNotify
     * @instance
     */
    S2CCommonOpenNotify.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonOpenNotify message. Does not implicitly {@link S2CCommonOpenNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonOpenNotify
     * @static
     * @param {IS2CCommonOpenNotify} m S2CCommonOpenNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonOpenNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonOpenNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonOpenNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonOpenNotify} S2CCommonOpenNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonOpenNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonOpenNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonOpenNotify;
})();

$root.S2CCommonRoundStartNotify = (function() {

    /**
     * Properties of a S2CCommonRoundStartNotify.
     * @exports IS2CCommonRoundStartNotify
     * @interface IS2CCommonRoundStartNotify
     * @property {string|null} [gameId] S2CCommonRoundStartNotify gameId
     * @property {Array.<IPlayerInfo>|null} [players] S2CCommonRoundStartNotify players
     * @property {string|null} [dealerUid] S2CCommonRoundStartNotify dealerUid
     * @property {number|null} [antes] S2CCommonRoundStartNotify antes
     * @property {Array.<IActionInfo>|null} [actionInfo] S2CCommonRoundStartNotify actionInfo
     * @property {number|null} [totalPot] S2CCommonRoundStartNotify totalPot
     */

    /**
     * Constructs a new S2CCommonRoundStartNotify.
     * @exports S2CCommonRoundStartNotify
     * @classdesc Represents a S2CCommonRoundStartNotify.
     * @implements IS2CCommonRoundStartNotify
     * @constructor
     * @param {IS2CCommonRoundStartNotify=} [p] Properties to set
     */
    function S2CCommonRoundStartNotify(p) {
        this.players = [];
        this.actionInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonRoundStartNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.gameId = "";

    /**
     * S2CCommonRoundStartNotify players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.players = $util.emptyArray;

    /**
     * S2CCommonRoundStartNotify dealerUid.
     * @member {string} dealerUid
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.dealerUid = "";

    /**
     * S2CCommonRoundStartNotify antes.
     * @member {number} antes
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.antes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonRoundStartNotify actionInfo.
     * @member {Array.<IActionInfo>} actionInfo
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.actionInfo = $util.emptyArray;

    /**
     * S2CCommonRoundStartNotify totalPot.
     * @member {number} totalPot
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.totalPot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonRoundStartNotify message. Does not implicitly {@link S2CCommonRoundStartNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonRoundStartNotify
     * @static
     * @param {IS2CCommonRoundStartNotify} m S2CCommonRoundStartNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonRoundStartNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(18).fork()).ldelim();
        }
        if (m.dealerUid != null && Object.hasOwnProperty.call(m, "dealerUid"))
            w.uint32(26).string(m.dealerUid);
        if (m.antes != null && Object.hasOwnProperty.call(m, "antes"))
            w.uint32(32).int64(m.antes);
        if (m.actionInfo != null && m.actionInfo.length) {
            for (var i = 0; i < m.actionInfo.length; ++i)
                $root.ActionInfo.encode(m.actionInfo[i], w.uint32(42).fork()).ldelim();
        }
        if (m.totalPot != null && Object.hasOwnProperty.call(m, "totalPot"))
            w.uint32(48).int64(m.totalPot);
        return w;
    };

    /**
     * Decodes a S2CCommonRoundStartNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonRoundStartNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonRoundStartNotify} S2CCommonRoundStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonRoundStartNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonRoundStartNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.dealerUid = r.string();
                break;
            case 4:
                m.antes = r.int64();
                break;
            case 5:
                if (!(m.actionInfo && m.actionInfo.length))
                    m.actionInfo = [];
                m.actionInfo.push($root.ActionInfo.decode(r, r.uint32()));
                break;
            case 6:
                m.totalPot = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonRoundStartNotify;
})();

$root.S2CCommonActionNotify = (function() {

    /**
     * Properties of a S2CCommonActionNotify.
     * @exports IS2CCommonActionNotify
     * @interface IS2CCommonActionNotify
     * @property {string|null} [gameId] S2CCommonActionNotify gameId
     * @property {IActionInfo|null} [actionInfo] S2CCommonActionNotify actionInfo
     * @property {number|null} [totalPot] S2CCommonActionNotify totalPot
     */

    /**
     * Constructs a new S2CCommonActionNotify.
     * @exports S2CCommonActionNotify
     * @classdesc Represents a S2CCommonActionNotify.
     * @implements IS2CCommonActionNotify
     * @constructor
     * @param {IS2CCommonActionNotify=} [p] Properties to set
     */
    function S2CCommonActionNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonActionNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonActionNotify
     * @instance
     */
    S2CCommonActionNotify.prototype.gameId = "";

    /**
     * S2CCommonActionNotify actionInfo.
     * @member {IActionInfo|null|undefined} actionInfo
     * @memberof S2CCommonActionNotify
     * @instance
     */
    S2CCommonActionNotify.prototype.actionInfo = null;

    /**
     * S2CCommonActionNotify totalPot.
     * @member {number} totalPot
     * @memberof S2CCommonActionNotify
     * @instance
     */
    S2CCommonActionNotify.prototype.totalPot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonActionNotify message. Does not implicitly {@link S2CCommonActionNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonActionNotify
     * @static
     * @param {IS2CCommonActionNotify} m S2CCommonActionNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonActionNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionInfo != null && Object.hasOwnProperty.call(m, "actionInfo"))
            $root.ActionInfo.encode(m.actionInfo, w.uint32(18).fork()).ldelim();
        if (m.totalPot != null && Object.hasOwnProperty.call(m, "totalPot"))
            w.uint32(24).int64(m.totalPot);
        return w;
    };

    /**
     * Decodes a S2CCommonActionNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonActionNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonActionNotify} S2CCommonActionNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonActionNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonActionNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionInfo = $root.ActionInfo.decode(r, r.uint32());
                break;
            case 3:
                m.totalPot = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonActionNotify;
})();

$root.S2CCommonBuyInsuranceTurnNotify = (function() {

    /**
     * Properties of a S2CCommonBuyInsuranceTurnNotify.
     * @exports IS2CCommonBuyInsuranceTurnNotify
     * @interface IS2CCommonBuyInsuranceTurnNotify
     * @property {IBuyInsuranceTurn|null} [buyInsuranceTurn] S2CCommonBuyInsuranceTurnNotify buyInsuranceTurn
     */

    /**
     * Constructs a new S2CCommonBuyInsuranceTurnNotify.
     * @exports S2CCommonBuyInsuranceTurnNotify
     * @classdesc Represents a S2CCommonBuyInsuranceTurnNotify.
     * @implements IS2CCommonBuyInsuranceTurnNotify
     * @constructor
     * @param {IS2CCommonBuyInsuranceTurnNotify=} [p] Properties to set
     */
    function S2CCommonBuyInsuranceTurnNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBuyInsuranceTurnNotify buyInsuranceTurn.
     * @member {IBuyInsuranceTurn|null|undefined} buyInsuranceTurn
     * @memberof S2CCommonBuyInsuranceTurnNotify
     * @instance
     */
    S2CCommonBuyInsuranceTurnNotify.prototype.buyInsuranceTurn = null;

    /**
     * Encodes the specified S2CCommonBuyInsuranceTurnNotify message. Does not implicitly {@link S2CCommonBuyInsuranceTurnNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBuyInsuranceTurnNotify
     * @static
     * @param {IS2CCommonBuyInsuranceTurnNotify} m S2CCommonBuyInsuranceTurnNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBuyInsuranceTurnNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.buyInsuranceTurn != null && Object.hasOwnProperty.call(m, "buyInsuranceTurn"))
            $root.BuyInsuranceTurn.encode(m.buyInsuranceTurn, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonBuyInsuranceTurnNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBuyInsuranceTurnNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBuyInsuranceTurnNotify} S2CCommonBuyInsuranceTurnNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBuyInsuranceTurnNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBuyInsuranceTurnNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.buyInsuranceTurn = $root.BuyInsuranceTurn.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBuyInsuranceTurnNotify;
})();

$root.S2CCommonBuyInsuranceTurnRespNotify = (function() {

    /**
     * Properties of a S2CCommonBuyInsuranceTurnRespNotify.
     * @exports IS2CCommonBuyInsuranceTurnRespNotify
     * @interface IS2CCommonBuyInsuranceTurnRespNotify
     * @property {string|null} [gameId] S2CCommonBuyInsuranceTurnRespNotify gameId
     * @property {string|null} [actionUid] S2CCommonBuyInsuranceTurnRespNotify actionUid
     * @property {number|null} [amount] S2CCommonBuyInsuranceTurnRespNotify amount
     */

    /**
     * Constructs a new S2CCommonBuyInsuranceTurnRespNotify.
     * @exports S2CCommonBuyInsuranceTurnRespNotify
     * @classdesc Represents a S2CCommonBuyInsuranceTurnRespNotify.
     * @implements IS2CCommonBuyInsuranceTurnRespNotify
     * @constructor
     * @param {IS2CCommonBuyInsuranceTurnRespNotify=} [p] Properties to set
     */
    function S2CCommonBuyInsuranceTurnRespNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBuyInsuranceTurnRespNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonBuyInsuranceTurnRespNotify
     * @instance
     */
    S2CCommonBuyInsuranceTurnRespNotify.prototype.gameId = "";

    /**
     * S2CCommonBuyInsuranceTurnRespNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonBuyInsuranceTurnRespNotify
     * @instance
     */
    S2CCommonBuyInsuranceTurnRespNotify.prototype.actionUid = "";

    /**
     * S2CCommonBuyInsuranceTurnRespNotify amount.
     * @member {number} amount
     * @memberof S2CCommonBuyInsuranceTurnRespNotify
     * @instance
     */
    S2CCommonBuyInsuranceTurnRespNotify.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonBuyInsuranceTurnRespNotify message. Does not implicitly {@link S2CCommonBuyInsuranceTurnRespNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBuyInsuranceTurnRespNotify
     * @static
     * @param {IS2CCommonBuyInsuranceTurnRespNotify} m S2CCommonBuyInsuranceTurnRespNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBuyInsuranceTurnRespNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        return w;
    };

    /**
     * Decodes a S2CCommonBuyInsuranceTurnRespNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBuyInsuranceTurnRespNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBuyInsuranceTurnRespNotify} S2CCommonBuyInsuranceTurnRespNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBuyInsuranceTurnRespNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBuyInsuranceTurnRespNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                m.amount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBuyInsuranceTurnRespNotify;
})();

$root.S2CCommonInsuranceLotteryNotify = (function() {

    /**
     * Properties of a S2CCommonInsuranceLotteryNotify.
     * @exports IS2CCommonInsuranceLotteryNotify
     * @interface IS2CCommonInsuranceLotteryNotify
     * @property {string|null} [gameId] S2CCommonInsuranceLotteryNotify gameId
     * @property {string|null} [actionUid] S2CCommonInsuranceLotteryNotify actionUid
     * @property {number|null} [amount] S2CCommonInsuranceLotteryNotify amount
     * @property {number|null} [restAmount] S2CCommonInsuranceLotteryNotify restAmount
     */

    /**
     * Constructs a new S2CCommonInsuranceLotteryNotify.
     * @exports S2CCommonInsuranceLotteryNotify
     * @classdesc Represents a S2CCommonInsuranceLotteryNotify.
     * @implements IS2CCommonInsuranceLotteryNotify
     * @constructor
     * @param {IS2CCommonInsuranceLotteryNotify=} [p] Properties to set
     */
    function S2CCommonInsuranceLotteryNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonInsuranceLotteryNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonInsuranceLotteryNotify
     * @instance
     */
    S2CCommonInsuranceLotteryNotify.prototype.gameId = "";

    /**
     * S2CCommonInsuranceLotteryNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonInsuranceLotteryNotify
     * @instance
     */
    S2CCommonInsuranceLotteryNotify.prototype.actionUid = "";

    /**
     * S2CCommonInsuranceLotteryNotify amount.
     * @member {number} amount
     * @memberof S2CCommonInsuranceLotteryNotify
     * @instance
     */
    S2CCommonInsuranceLotteryNotify.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonInsuranceLotteryNotify restAmount.
     * @member {number} restAmount
     * @memberof S2CCommonInsuranceLotteryNotify
     * @instance
     */
    S2CCommonInsuranceLotteryNotify.prototype.restAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonInsuranceLotteryNotify message. Does not implicitly {@link S2CCommonInsuranceLotteryNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonInsuranceLotteryNotify
     * @static
     * @param {IS2CCommonInsuranceLotteryNotify} m S2CCommonInsuranceLotteryNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonInsuranceLotteryNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        if (m.restAmount != null && Object.hasOwnProperty.call(m, "restAmount"))
            w.uint32(32).int64(m.restAmount);
        return w;
    };

    /**
     * Decodes a S2CCommonInsuranceLotteryNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonInsuranceLotteryNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonInsuranceLotteryNotify} S2CCommonInsuranceLotteryNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonInsuranceLotteryNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonInsuranceLotteryNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                m.amount = r.int64();
                break;
            case 4:
                m.restAmount = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonInsuranceLotteryNotify;
})();

$root.S2CCommonChatNotify = (function() {

    /**
     * Properties of a S2CCommonChatNotify.
     * @exports IS2CCommonChatNotify
     * @interface IS2CCommonChatNotify
     * @property {string|null} [gameId] S2CCommonChatNotify gameId
     * @property {string|null} [actionUid] S2CCommonChatNotify actionUid
     * @property {string|null} [content] S2CCommonChatNotify content
     * @property {string|null} [playerName] S2CCommonChatNotify playerName
     * @property {string|null} [head] S2CCommonChatNotify head
     */

    /**
     * Constructs a new S2CCommonChatNotify.
     * @exports S2CCommonChatNotify
     * @classdesc Represents a S2CCommonChatNotify.
     * @implements IS2CCommonChatNotify
     * @constructor
     * @param {IS2CCommonChatNotify=} [p] Properties to set
     */
    function S2CCommonChatNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonChatNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonChatNotify
     * @instance
     */
    S2CCommonChatNotify.prototype.gameId = "";

    /**
     * S2CCommonChatNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonChatNotify
     * @instance
     */
    S2CCommonChatNotify.prototype.actionUid = "";

    /**
     * S2CCommonChatNotify content.
     * @member {string} content
     * @memberof S2CCommonChatNotify
     * @instance
     */
    S2CCommonChatNotify.prototype.content = "";

    /**
     * S2CCommonChatNotify playerName.
     * @member {string} playerName
     * @memberof S2CCommonChatNotify
     * @instance
     */
    S2CCommonChatNotify.prototype.playerName = "";

    /**
     * S2CCommonChatNotify head.
     * @member {string} head
     * @memberof S2CCommonChatNotify
     * @instance
     */
    S2CCommonChatNotify.prototype.head = "";

    /**
     * Encodes the specified S2CCommonChatNotify message. Does not implicitly {@link S2CCommonChatNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonChatNotify
     * @static
     * @param {IS2CCommonChatNotify} m S2CCommonChatNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonChatNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.content != null && Object.hasOwnProperty.call(m, "content"))
            w.uint32(26).string(m.content);
        if (m.playerName != null && Object.hasOwnProperty.call(m, "playerName"))
            w.uint32(34).string(m.playerName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(42).string(m.head);
        return w;
    };

    /**
     * Decodes a S2CCommonChatNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonChatNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonChatNotify} S2CCommonChatNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonChatNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonChatNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                m.content = r.string();
                break;
            case 4:
                m.playerName = r.string();
                break;
            case 5:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonChatNotify;
})();

$root.S2CCommonExtraThinkNotify = (function() {

    /**
     * Properties of a S2CCommonExtraThinkNotify.
     * @exports IS2CCommonExtraThinkNotify
     * @interface IS2CCommonExtraThinkNotify
     * @property {string|null} [gameId] S2CCommonExtraThinkNotify gameId
     * @property {string|null} [actionUid] S2CCommonExtraThinkNotify actionUid
     * @property {number|null} [extraTime] S2CCommonExtraThinkNotify extraTime
     * @property {number|null} [totalTime] S2CCommonExtraThinkNotify totalTime
     */

    /**
     * Constructs a new S2CCommonExtraThinkNotify.
     * @exports S2CCommonExtraThinkNotify
     * @classdesc Represents a S2CCommonExtraThinkNotify.
     * @implements IS2CCommonExtraThinkNotify
     * @constructor
     * @param {IS2CCommonExtraThinkNotify=} [p] Properties to set
     */
    function S2CCommonExtraThinkNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonExtraThinkNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonExtraThinkNotify
     * @instance
     */
    S2CCommonExtraThinkNotify.prototype.gameId = "";

    /**
     * S2CCommonExtraThinkNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonExtraThinkNotify
     * @instance
     */
    S2CCommonExtraThinkNotify.prototype.actionUid = "";

    /**
     * S2CCommonExtraThinkNotify extraTime.
     * @member {number} extraTime
     * @memberof S2CCommonExtraThinkNotify
     * @instance
     */
    S2CCommonExtraThinkNotify.prototype.extraTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonExtraThinkNotify totalTime.
     * @member {number} totalTime
     * @memberof S2CCommonExtraThinkNotify
     * @instance
     */
    S2CCommonExtraThinkNotify.prototype.totalTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonExtraThinkNotify message. Does not implicitly {@link S2CCommonExtraThinkNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonExtraThinkNotify
     * @static
     * @param {IS2CCommonExtraThinkNotify} m S2CCommonExtraThinkNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonExtraThinkNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        if (m.extraTime != null && Object.hasOwnProperty.call(m, "extraTime"))
            w.uint32(24).int64(m.extraTime);
        if (m.totalTime != null && Object.hasOwnProperty.call(m, "totalTime"))
            w.uint32(32).int64(m.totalTime);
        return w;
    };

    /**
     * Decodes a S2CCommonExtraThinkNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonExtraThinkNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonExtraThinkNotify} S2CCommonExtraThinkNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonExtraThinkNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonExtraThinkNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            case 3:
                m.extraTime = r.int64();
                break;
            case 4:
                m.totalTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonExtraThinkNotify;
})();

$root.S2CCommonPreFlopRoundNotify = (function() {

    /**
     * Properties of a S2CCommonPreFlopRoundNotify.
     * @exports IS2CCommonPreFlopRoundNotify
     * @interface IS2CCommonPreFlopRoundNotify
     * @property {string|null} [gameId] S2CCommonPreFlopRoundNotify gameId
     * @property {Array.<ICardInfo>|null} [cards] S2CCommonPreFlopRoundNotify cards
     */

    /**
     * Constructs a new S2CCommonPreFlopRoundNotify.
     * @exports S2CCommonPreFlopRoundNotify
     * @classdesc Represents a S2CCommonPreFlopRoundNotify.
     * @implements IS2CCommonPreFlopRoundNotify
     * @constructor
     * @param {IS2CCommonPreFlopRoundNotify=} [p] Properties to set
     */
    function S2CCommonPreFlopRoundNotify(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonPreFlopRoundNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonPreFlopRoundNotify
     * @instance
     */
    S2CCommonPreFlopRoundNotify.prototype.gameId = "";

    /**
     * S2CCommonPreFlopRoundNotify cards.
     * @member {Array.<ICardInfo>} cards
     * @memberof S2CCommonPreFlopRoundNotify
     * @instance
     */
    S2CCommonPreFlopRoundNotify.prototype.cards = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonPreFlopRoundNotify message. Does not implicitly {@link S2CCommonPreFlopRoundNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonPreFlopRoundNotify
     * @static
     * @param {IS2CCommonPreFlopRoundNotify} m S2CCommonPreFlopRoundNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonPreFlopRoundNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                $root.CardInfo.encode(m.cards[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonPreFlopRoundNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonPreFlopRoundNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonPreFlopRoundNotify} S2CCommonPreFlopRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonPreFlopRoundNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonPreFlopRoundNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                m.cards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonPreFlopRoundNotify;
})();

$root.S2CCommonFlopRoundNotify = (function() {

    /**
     * Properties of a S2CCommonFlopRoundNotify.
     * @exports IS2CCommonFlopRoundNotify
     * @interface IS2CCommonFlopRoundNotify
     * @property {string|null} [gameId] S2CCommonFlopRoundNotify gameId
     * @property {Array.<ICardInfo>|null} [cards] S2CCommonFlopRoundNotify cards
     */

    /**
     * Constructs a new S2CCommonFlopRoundNotify.
     * @exports S2CCommonFlopRoundNotify
     * @classdesc Represents a S2CCommonFlopRoundNotify.
     * @implements IS2CCommonFlopRoundNotify
     * @constructor
     * @param {IS2CCommonFlopRoundNotify=} [p] Properties to set
     */
    function S2CCommonFlopRoundNotify(p) {
        this.cards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonFlopRoundNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonFlopRoundNotify
     * @instance
     */
    S2CCommonFlopRoundNotify.prototype.gameId = "";

    /**
     * S2CCommonFlopRoundNotify cards.
     * @member {Array.<ICardInfo>} cards
     * @memberof S2CCommonFlopRoundNotify
     * @instance
     */
    S2CCommonFlopRoundNotify.prototype.cards = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonFlopRoundNotify message. Does not implicitly {@link S2CCommonFlopRoundNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonFlopRoundNotify
     * @static
     * @param {IS2CCommonFlopRoundNotify} m S2CCommonFlopRoundNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonFlopRoundNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.cards != null && m.cards.length) {
            for (var i = 0; i < m.cards.length; ++i)
                $root.CardInfo.encode(m.cards[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonFlopRoundNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonFlopRoundNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonFlopRoundNotify} S2CCommonFlopRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonFlopRoundNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonFlopRoundNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.cards && m.cards.length))
                    m.cards = [];
                m.cards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonFlopRoundNotify;
})();

$root.S2CCommonTurnRoundNotify = (function() {

    /**
     * Properties of a S2CCommonTurnRoundNotify.
     * @exports IS2CCommonTurnRoundNotify
     * @interface IS2CCommonTurnRoundNotify
     * @property {string|null} [gameId] S2CCommonTurnRoundNotify gameId
     * @property {ICardInfo|null} [card] S2CCommonTurnRoundNotify card
     */

    /**
     * Constructs a new S2CCommonTurnRoundNotify.
     * @exports S2CCommonTurnRoundNotify
     * @classdesc Represents a S2CCommonTurnRoundNotify.
     * @implements IS2CCommonTurnRoundNotify
     * @constructor
     * @param {IS2CCommonTurnRoundNotify=} [p] Properties to set
     */
    function S2CCommonTurnRoundNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonTurnRoundNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonTurnRoundNotify
     * @instance
     */
    S2CCommonTurnRoundNotify.prototype.gameId = "";

    /**
     * S2CCommonTurnRoundNotify card.
     * @member {ICardInfo|null|undefined} card
     * @memberof S2CCommonTurnRoundNotify
     * @instance
     */
    S2CCommonTurnRoundNotify.prototype.card = null;

    /**
     * Encodes the specified S2CCommonTurnRoundNotify message. Does not implicitly {@link S2CCommonTurnRoundNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonTurnRoundNotify
     * @static
     * @param {IS2CCommonTurnRoundNotify} m S2CCommonTurnRoundNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonTurnRoundNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.card != null && Object.hasOwnProperty.call(m, "card"))
            $root.CardInfo.encode(m.card, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonTurnRoundNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonTurnRoundNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonTurnRoundNotify} S2CCommonTurnRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonTurnRoundNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonTurnRoundNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.card = $root.CardInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonTurnRoundNotify;
})();

$root.S2CCommonRiverRoundNotify = (function() {

    /**
     * Properties of a S2CCommonRiverRoundNotify.
     * @exports IS2CCommonRiverRoundNotify
     * @interface IS2CCommonRiverRoundNotify
     * @property {string|null} [gameId] S2CCommonRiverRoundNotify gameId
     * @property {ICardInfo|null} [card] S2CCommonRiverRoundNotify card
     */

    /**
     * Constructs a new S2CCommonRiverRoundNotify.
     * @exports S2CCommonRiverRoundNotify
     * @classdesc Represents a S2CCommonRiverRoundNotify.
     * @implements IS2CCommonRiverRoundNotify
     * @constructor
     * @param {IS2CCommonRiverRoundNotify=} [p] Properties to set
     */
    function S2CCommonRiverRoundNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonRiverRoundNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonRiverRoundNotify
     * @instance
     */
    S2CCommonRiverRoundNotify.prototype.gameId = "";

    /**
     * S2CCommonRiverRoundNotify card.
     * @member {ICardInfo|null|undefined} card
     * @memberof S2CCommonRiverRoundNotify
     * @instance
     */
    S2CCommonRiverRoundNotify.prototype.card = null;

    /**
     * Encodes the specified S2CCommonRiverRoundNotify message. Does not implicitly {@link S2CCommonRiverRoundNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonRiverRoundNotify
     * @static
     * @param {IS2CCommonRiverRoundNotify} m S2CCommonRiverRoundNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonRiverRoundNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.card != null && Object.hasOwnProperty.call(m, "card"))
            $root.CardInfo.encode(m.card, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonRiverRoundNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonRiverRoundNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonRiverRoundNotify} S2CCommonRiverRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonRiverRoundNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonRiverRoundNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.card = $root.CardInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonRiverRoundNotify;
})();

$root.S2CCommonPotsNotify = (function() {

    /**
     * Properties of a S2CCommonPotsNotify.
     * @exports IS2CCommonPotsNotify
     * @interface IS2CCommonPotsNotify
     * @property {string|null} [gameId] S2CCommonPotsNotify gameId
     * @property {Array.<IPotInfo>|null} [potInfo] S2CCommonPotsNotify potInfo
     */

    /**
     * Constructs a new S2CCommonPotsNotify.
     * @exports S2CCommonPotsNotify
     * @classdesc Represents a S2CCommonPotsNotify.
     * @implements IS2CCommonPotsNotify
     * @constructor
     * @param {IS2CCommonPotsNotify=} [p] Properties to set
     */
    function S2CCommonPotsNotify(p) {
        this.potInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonPotsNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonPotsNotify
     * @instance
     */
    S2CCommonPotsNotify.prototype.gameId = "";

    /**
     * S2CCommonPotsNotify potInfo.
     * @member {Array.<IPotInfo>} potInfo
     * @memberof S2CCommonPotsNotify
     * @instance
     */
    S2CCommonPotsNotify.prototype.potInfo = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonPotsNotify message. Does not implicitly {@link S2CCommonPotsNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonPotsNotify
     * @static
     * @param {IS2CCommonPotsNotify} m S2CCommonPotsNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonPotsNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.potInfo != null && m.potInfo.length) {
            for (var i = 0; i < m.potInfo.length; ++i)
                $root.PotInfo.encode(m.potInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonPotsNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonPotsNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonPotsNotify} S2CCommonPotsNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonPotsNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonPotsNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.potInfo && m.potInfo.length))
                    m.potInfo = [];
                m.potInfo.push($root.PotInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonPotsNotify;
})();

$root.S2CCommonCurrentActionNotify = (function() {

    /**
     * Properties of a S2CCommonCurrentActionNotify.
     * @exports IS2CCommonCurrentActionNotify
     * @interface IS2CCommonCurrentActionNotify
     * @property {string|null} [gameId] S2CCommonCurrentActionNotify gameId
     * @property {number|null} [letTime] S2CCommonCurrentActionNotify letTime
     * @property {string|null} [actionUid] S2CCommonCurrentActionNotify actionUid
     */

    /**
     * Constructs a new S2CCommonCurrentActionNotify.
     * @exports S2CCommonCurrentActionNotify
     * @classdesc Represents a S2CCommonCurrentActionNotify.
     * @implements IS2CCommonCurrentActionNotify
     * @constructor
     * @param {IS2CCommonCurrentActionNotify=} [p] Properties to set
     */
    function S2CCommonCurrentActionNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonCurrentActionNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonCurrentActionNotify
     * @instance
     */
    S2CCommonCurrentActionNotify.prototype.gameId = "";

    /**
     * S2CCommonCurrentActionNotify letTime.
     * @member {number} letTime
     * @memberof S2CCommonCurrentActionNotify
     * @instance
     */
    S2CCommonCurrentActionNotify.prototype.letTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonCurrentActionNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonCurrentActionNotify
     * @instance
     */
    S2CCommonCurrentActionNotify.prototype.actionUid = "";

    /**
     * Encodes the specified S2CCommonCurrentActionNotify message. Does not implicitly {@link S2CCommonCurrentActionNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonCurrentActionNotify
     * @static
     * @param {IS2CCommonCurrentActionNotify} m S2CCommonCurrentActionNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonCurrentActionNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.letTime != null && Object.hasOwnProperty.call(m, "letTime"))
            w.uint32(16).int64(m.letTime);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(26).string(m.actionUid);
        return w;
    };

    /**
     * Decodes a S2CCommonCurrentActionNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonCurrentActionNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonCurrentActionNotify} S2CCommonCurrentActionNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonCurrentActionNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonCurrentActionNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.letTime = r.int64();
                break;
            case 3:
                m.actionUid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonCurrentActionNotify;
})();

$root.S2CCommonSettlementNotify = (function() {

    /**
     * Properties of a S2CCommonSettlementNotify.
     * @exports IS2CCommonSettlementNotify
     * @interface IS2CCommonSettlementNotify
     * @property {string|null} [gameId] S2CCommonSettlementNotify gameId
     * @property {Array.<IPlayerWinLose>|null} [result] S2CCommonSettlementNotify result
     */

    /**
     * Constructs a new S2CCommonSettlementNotify.
     * @exports S2CCommonSettlementNotify
     * @classdesc Represents a S2CCommonSettlementNotify.
     * @implements IS2CCommonSettlementNotify
     * @constructor
     * @param {IS2CCommonSettlementNotify=} [p] Properties to set
     */
    function S2CCommonSettlementNotify(p) {
        this.result = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSettlementNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonSettlementNotify
     * @instance
     */
    S2CCommonSettlementNotify.prototype.gameId = "";

    /**
     * S2CCommonSettlementNotify result.
     * @member {Array.<IPlayerWinLose>} result
     * @memberof S2CCommonSettlementNotify
     * @instance
     */
    S2CCommonSettlementNotify.prototype.result = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonSettlementNotify message. Does not implicitly {@link S2CCommonSettlementNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSettlementNotify
     * @static
     * @param {IS2CCommonSettlementNotify} m S2CCommonSettlementNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSettlementNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.result != null && m.result.length) {
            for (var i = 0; i < m.result.length; ++i)
                $root.PlayerWinLose.encode(m.result[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonSettlementNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSettlementNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSettlementNotify} S2CCommonSettlementNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSettlementNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSettlementNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.result && m.result.length))
                    m.result = [];
                m.result.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSettlementNotify;
})();

$root.S2CCommonIntervalTimeNotify = (function() {

    /**
     * Properties of a S2CCommonIntervalTimeNotify.
     * @exports IS2CCommonIntervalTimeNotify
     * @interface IS2CCommonIntervalTimeNotify
     * @property {string|null} [gameId] S2CCommonIntervalTimeNotify gameId
     * @property {number|null} [intervalTime] S2CCommonIntervalTimeNotify intervalTime
     */

    /**
     * Constructs a new S2CCommonIntervalTimeNotify.
     * @exports S2CCommonIntervalTimeNotify
     * @classdesc Represents a S2CCommonIntervalTimeNotify.
     * @implements IS2CCommonIntervalTimeNotify
     * @constructor
     * @param {IS2CCommonIntervalTimeNotify=} [p] Properties to set
     */
    function S2CCommonIntervalTimeNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonIntervalTimeNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonIntervalTimeNotify
     * @instance
     */
    S2CCommonIntervalTimeNotify.prototype.gameId = "";

    /**
     * S2CCommonIntervalTimeNotify intervalTime.
     * @member {number} intervalTime
     * @memberof S2CCommonIntervalTimeNotify
     * @instance
     */
    S2CCommonIntervalTimeNotify.prototype.intervalTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonIntervalTimeNotify message. Does not implicitly {@link S2CCommonIntervalTimeNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonIntervalTimeNotify
     * @static
     * @param {IS2CCommonIntervalTimeNotify} m S2CCommonIntervalTimeNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonIntervalTimeNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.intervalTime != null && Object.hasOwnProperty.call(m, "intervalTime"))
            w.uint32(16).int64(m.intervalTime);
        return w;
    };

    /**
     * Decodes a S2CCommonIntervalTimeNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonIntervalTimeNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonIntervalTimeNotify} S2CCommonIntervalTimeNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonIntervalTimeNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonIntervalTimeNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.intervalTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonIntervalTimeNotify;
})();

$root.S2CCommonOpenCardNotify = (function() {

    /**
     * Properties of a S2CCommonOpenCardNotify.
     * @exports IS2CCommonOpenCardNotify
     * @interface IS2CCommonOpenCardNotify
     * @property {string|null} [gameId] S2CCommonOpenCardNotify gameId
     * @property {Array.<IPlayerInfo>|null} [players] S2CCommonOpenCardNotify players
     */

    /**
     * Constructs a new S2CCommonOpenCardNotify.
     * @exports S2CCommonOpenCardNotify
     * @classdesc Represents a S2CCommonOpenCardNotify.
     * @implements IS2CCommonOpenCardNotify
     * @constructor
     * @param {IS2CCommonOpenCardNotify=} [p] Properties to set
     */
    function S2CCommonOpenCardNotify(p) {
        this.players = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonOpenCardNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonOpenCardNotify
     * @instance
     */
    S2CCommonOpenCardNotify.prototype.gameId = "";

    /**
     * S2CCommonOpenCardNotify players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof S2CCommonOpenCardNotify
     * @instance
     */
    S2CCommonOpenCardNotify.prototype.players = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonOpenCardNotify message. Does not implicitly {@link S2CCommonOpenCardNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonOpenCardNotify
     * @static
     * @param {IS2CCommonOpenCardNotify} m S2CCommonOpenCardNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonOpenCardNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonOpenCardNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonOpenCardNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonOpenCardNotify} S2CCommonOpenCardNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonOpenCardNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonOpenCardNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonOpenCardNotify;
})();

$root.S2CCommonWaitStartNotify = (function() {

    /**
     * Properties of a S2CCommonWaitStartNotify.
     * @exports IS2CCommonWaitStartNotify
     * @interface IS2CCommonWaitStartNotify
     * @property {string|null} [gameId] S2CCommonWaitStartNotify gameId
     */

    /**
     * Constructs a new S2CCommonWaitStartNotify.
     * @exports S2CCommonWaitStartNotify
     * @classdesc Represents a S2CCommonWaitStartNotify.
     * @implements IS2CCommonWaitStartNotify
     * @constructor
     * @param {IS2CCommonWaitStartNotify=} [p] Properties to set
     */
    function S2CCommonWaitStartNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonWaitStartNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonWaitStartNotify
     * @instance
     */
    S2CCommonWaitStartNotify.prototype.gameId = "";

    /**
     * Encodes the specified S2CCommonWaitStartNotify message. Does not implicitly {@link S2CCommonWaitStartNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonWaitStartNotify
     * @static
     * @param {IS2CCommonWaitStartNotify} m S2CCommonWaitStartNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonWaitStartNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CCommonWaitStartNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonWaitStartNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonWaitStartNotify} S2CCommonWaitStartNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonWaitStartNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonWaitStartNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonWaitStartNotify;
})();

$root.S2CCommonJackpotLotteryNotify = (function() {

    /**
     * Properties of a S2CCommonJackpotLotteryNotify.
     * @exports IS2CCommonJackpotLotteryNotify
     * @interface IS2CCommonJackpotLotteryNotify
     * @property {string|null} [gameId] S2CCommonJackpotLotteryNotify gameId
     * @property {Array.<ICardInfo>|null} [jackpotCards] S2CCommonJackpotLotteryNotify jackpotCards
     * @property {number|null} [lotteryNum] S2CCommonJackpotLotteryNotify lotteryNum
     * @property {number|null} [currencyNum] S2CCommonJackpotLotteryNotify currencyNum
     * @property {string|null} [uid] S2CCommonJackpotLotteryNotify uid
     */

    /**
     * Constructs a new S2CCommonJackpotLotteryNotify.
     * @exports S2CCommonJackpotLotteryNotify
     * @classdesc Represents a S2CCommonJackpotLotteryNotify.
     * @implements IS2CCommonJackpotLotteryNotify
     * @constructor
     * @param {IS2CCommonJackpotLotteryNotify=} [p] Properties to set
     */
    function S2CCommonJackpotLotteryNotify(p) {
        this.jackpotCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonJackpotLotteryNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonJackpotLotteryNotify
     * @instance
     */
    S2CCommonJackpotLotteryNotify.prototype.gameId = "";

    /**
     * S2CCommonJackpotLotteryNotify jackpotCards.
     * @member {Array.<ICardInfo>} jackpotCards
     * @memberof S2CCommonJackpotLotteryNotify
     * @instance
     */
    S2CCommonJackpotLotteryNotify.prototype.jackpotCards = $util.emptyArray;

    /**
     * S2CCommonJackpotLotteryNotify lotteryNum.
     * @member {number} lotteryNum
     * @memberof S2CCommonJackpotLotteryNotify
     * @instance
     */
    S2CCommonJackpotLotteryNotify.prototype.lotteryNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonJackpotLotteryNotify currencyNum.
     * @member {number} currencyNum
     * @memberof S2CCommonJackpotLotteryNotify
     * @instance
     */
    S2CCommonJackpotLotteryNotify.prototype.currencyNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonJackpotLotteryNotify uid.
     * @member {string} uid
     * @memberof S2CCommonJackpotLotteryNotify
     * @instance
     */
    S2CCommonJackpotLotteryNotify.prototype.uid = "";

    /**
     * Encodes the specified S2CCommonJackpotLotteryNotify message. Does not implicitly {@link S2CCommonJackpotLotteryNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonJackpotLotteryNotify
     * @static
     * @param {IS2CCommonJackpotLotteryNotify} m S2CCommonJackpotLotteryNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonJackpotLotteryNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.jackpotCards != null && m.jackpotCards.length) {
            for (var i = 0; i < m.jackpotCards.length; ++i)
                $root.CardInfo.encode(m.jackpotCards[i], w.uint32(18).fork()).ldelim();
        }
        if (m.lotteryNum != null && Object.hasOwnProperty.call(m, "lotteryNum"))
            w.uint32(24).int64(m.lotteryNum);
        if (m.currencyNum != null && Object.hasOwnProperty.call(m, "currencyNum"))
            w.uint32(32).int64(m.currencyNum);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(42).string(m.uid);
        return w;
    };

    /**
     * Decodes a S2CCommonJackpotLotteryNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonJackpotLotteryNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonJackpotLotteryNotify} S2CCommonJackpotLotteryNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonJackpotLotteryNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonJackpotLotteryNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                if (!(m.jackpotCards && m.jackpotCards.length))
                    m.jackpotCards = [];
                m.jackpotCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 3:
                m.lotteryNum = r.int64();
                break;
            case 4:
                m.currencyNum = r.int64();
                break;
            case 5:
                m.uid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonJackpotLotteryNotify;
})();

$root.S2CCommonSqueezeRoundNotify = (function() {

    /**
     * Properties of a S2CCommonSqueezeRoundNotify.
     * @exports IS2CCommonSqueezeRoundNotify
     * @interface IS2CCommonSqueezeRoundNotify
     * @property {string|null} [gameId] S2CCommonSqueezeRoundNotify gameId
     * @property {number|null} [leftTime] S2CCommonSqueezeRoundNotify leftTime
     */

    /**
     * Constructs a new S2CCommonSqueezeRoundNotify.
     * @exports S2CCommonSqueezeRoundNotify
     * @classdesc Represents a S2CCommonSqueezeRoundNotify.
     * @implements IS2CCommonSqueezeRoundNotify
     * @constructor
     * @param {IS2CCommonSqueezeRoundNotify=} [p] Properties to set
     */
    function S2CCommonSqueezeRoundNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSqueezeRoundNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonSqueezeRoundNotify
     * @instance
     */
    S2CCommonSqueezeRoundNotify.prototype.gameId = "";

    /**
     * S2CCommonSqueezeRoundNotify leftTime.
     * @member {number} leftTime
     * @memberof S2CCommonSqueezeRoundNotify
     * @instance
     */
    S2CCommonSqueezeRoundNotify.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonSqueezeRoundNotify message. Does not implicitly {@link S2CCommonSqueezeRoundNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSqueezeRoundNotify
     * @static
     * @param {IS2CCommonSqueezeRoundNotify} m S2CCommonSqueezeRoundNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSqueezeRoundNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(16).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a S2CCommonSqueezeRoundNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSqueezeRoundNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSqueezeRoundNotify} S2CCommonSqueezeRoundNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSqueezeRoundNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSqueezeRoundNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSqueezeRoundNotify;
})();

$root.S2CCommonAutoOperatorNotify = (function() {

    /**
     * Properties of a S2CCommonAutoOperatorNotify.
     * @exports IS2CCommonAutoOperatorNotify
     * @interface IS2CCommonAutoOperatorNotify
     * @property {string|null} [uid] S2CCommonAutoOperatorNotify uid
     * @property {string|null} [gameId] S2CCommonAutoOperatorNotify gameId
     * @property {boolean|null} [auto] S2CCommonAutoOperatorNotify auto
     * @property {number|null} [leftTime] S2CCommonAutoOperatorNotify leftTime
     */

    /**
     * Constructs a new S2CCommonAutoOperatorNotify.
     * @exports S2CCommonAutoOperatorNotify
     * @classdesc Represents a S2CCommonAutoOperatorNotify.
     * @implements IS2CCommonAutoOperatorNotify
     * @constructor
     * @param {IS2CCommonAutoOperatorNotify=} [p] Properties to set
     */
    function S2CCommonAutoOperatorNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonAutoOperatorNotify uid.
     * @member {string} uid
     * @memberof S2CCommonAutoOperatorNotify
     * @instance
     */
    S2CCommonAutoOperatorNotify.prototype.uid = "";

    /**
     * S2CCommonAutoOperatorNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonAutoOperatorNotify
     * @instance
     */
    S2CCommonAutoOperatorNotify.prototype.gameId = "";

    /**
     * S2CCommonAutoOperatorNotify auto.
     * @member {boolean} auto
     * @memberof S2CCommonAutoOperatorNotify
     * @instance
     */
    S2CCommonAutoOperatorNotify.prototype.auto = false;

    /**
     * S2CCommonAutoOperatorNotify leftTime.
     * @member {number} leftTime
     * @memberof S2CCommonAutoOperatorNotify
     * @instance
     */
    S2CCommonAutoOperatorNotify.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CCommonAutoOperatorNotify message. Does not implicitly {@link S2CCommonAutoOperatorNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonAutoOperatorNotify
     * @static
     * @param {IS2CCommonAutoOperatorNotify} m S2CCommonAutoOperatorNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonAutoOperatorNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(10).string(m.uid);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.auto != null && Object.hasOwnProperty.call(m, "auto"))
            w.uint32(24).bool(m.auto);
        if (m.leftTime != null && Object.hasOwnProperty.call(m, "leftTime"))
            w.uint32(32).int64(m.leftTime);
        return w;
    };

    /**
     * Decodes a S2CCommonAutoOperatorNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonAutoOperatorNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonAutoOperatorNotify} S2CCommonAutoOperatorNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonAutoOperatorNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonAutoOperatorNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.auto = r.bool();
                break;
            case 4:
                m.leftTime = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonAutoOperatorNotify;
})();