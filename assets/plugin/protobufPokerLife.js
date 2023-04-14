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
 * @property {number} AccountStatus_Lock=1 AccountStatus_Lock value
 */
$root.AccountStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "AccountStatus_Normal"] = 0;
    values[valuesById[1] = "AccountStatus_Lock"] = 1;
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
 * @property {number} C2S_TexasCashGetObSize=5013 C2S_TexasCashGetObSize value
 * @property {number} C2S_TexasCashGetBringInList=5014 C2S_TexasCashGetBringInList value
 * @property {number} C2S_TexasCashExaminePublicCard=5015 C2S_TexasCashExaminePublicCard value
 * @property {number} C2S_TexasCashExaminePrivateCard=5016 C2S_TexasCashExaminePrivateCard value
 * @property {number} C2S_TexasCashShowSelfCard=5017 C2S_TexasCashShowSelfCard value
 * @property {number} C2S_TexasCashExtraThink=5018 C2S_TexasCashExtraThink value
 * @property {number} C2S_TexasCashSqueezeStart=5019 C2S_TexasCashSqueezeStart value
 * @property {number} C2S_TexasCashSqueezeFinish=5020 C2S_TexasCashSqueezeFinish value
 * @property {number} C2S_TexasCashGetStatistics=5021 C2S_TexasCashGetStatistics value
 * @property {number} C2S_TexasCashSimpleReplay=5022 C2S_TexasCashSimpleReplay value
 * @property {number} C2S_TexasCashDetailReplay=5023 C2S_TexasCashDetailReplay value
 * @property {number} C2S_TexasCashCancelAutoOperator=5024 C2S_TexasCashCancelAutoOperator value
 * @property {number} C2S_TexasCashGetPlayerStatistics=5025 C2S_TexasCashGetPlayerStatistics value
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
 * @property {number} S2C_CommonGetObSizeResp=8011 S2C_CommonGetObSizeResp value
 * @property {number} S2C_CommonGetBringInListResp=8012 S2C_CommonGetBringInListResp value
 * @property {number} S2C_CommonRefreshResp=8013 S2C_CommonRefreshResp value
 * @property {number} S2C_CommonExaminePublicCardResp=8014 S2C_CommonExaminePublicCardResp value
 * @property {number} S2C_CommonExaminePrivateCardResp=8015 S2C_CommonExaminePrivateCardResp value
 * @property {number} S2C_CommonShowSelfCardResp=8016 S2C_CommonShowSelfCardResp value
 * @property {number} S2C_CommonExtraThinkResp=8017 S2C_CommonExtraThinkResp value
 * @property {number} S2C_CommonSqueezeStartResp=8018 S2C_CommonSqueezeStartResp value
 * @property {number} S2C_CommonSqueezeFinishResp=8019 S2C_CommonSqueezeFinishResp value
 * @property {number} S2C_CommonGetStatisticsResp=8020 S2C_CommonGetStatisticsResp value
 * @property {number} S2C_CommonSimpleReplayResp=8021 S2C_CommonSimpleReplayResp value
 * @property {number} S2C_CommonDetailReplayResp=8022 S2C_CommonDetailReplayResp value
 * @property {number} S2C_CommonCancelAutoOperatorResp=8023 S2C_CommonCancelAutoOperatorResp value
 * @property {number} S2C_CommonGetPlayerStatisticsResp=8024 S2C_CommonGetPlayerStatisticsResp value
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
 * @property {number} S2C_CommonShowSelfCardNotify=8270 S2C_CommonShowSelfCardNotify value
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
    values[valuesById[5013] = "C2S_TexasCashGetObSize"] = 5013;
    values[valuesById[5014] = "C2S_TexasCashGetBringInList"] = 5014;
    values[valuesById[5015] = "C2S_TexasCashExaminePublicCard"] = 5015;
    values[valuesById[5016] = "C2S_TexasCashExaminePrivateCard"] = 5016;
    values[valuesById[5017] = "C2S_TexasCashShowSelfCard"] = 5017;
    values[valuesById[5018] = "C2S_TexasCashExtraThink"] = 5018;
    values[valuesById[5019] = "C2S_TexasCashSqueezeStart"] = 5019;
    values[valuesById[5020] = "C2S_TexasCashSqueezeFinish"] = 5020;
    values[valuesById[5021] = "C2S_TexasCashGetStatistics"] = 5021;
    values[valuesById[5022] = "C2S_TexasCashSimpleReplay"] = 5022;
    values[valuesById[5023] = "C2S_TexasCashDetailReplay"] = 5023;
    values[valuesById[5024] = "C2S_TexasCashCancelAutoOperator"] = 5024;
    values[valuesById[5025] = "C2S_TexasCashGetPlayerStatistics"] = 5025;
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
    values[valuesById[8011] = "S2C_CommonGetObSizeResp"] = 8011;
    values[valuesById[8012] = "S2C_CommonGetBringInListResp"] = 8012;
    values[valuesById[8013] = "S2C_CommonRefreshResp"] = 8013;
    values[valuesById[8014] = "S2C_CommonExaminePublicCardResp"] = 8014;
    values[valuesById[8015] = "S2C_CommonExaminePrivateCardResp"] = 8015;
    values[valuesById[8016] = "S2C_CommonShowSelfCardResp"] = 8016;
    values[valuesById[8017] = "S2C_CommonExtraThinkResp"] = 8017;
    values[valuesById[8018] = "S2C_CommonSqueezeStartResp"] = 8018;
    values[valuesById[8019] = "S2C_CommonSqueezeFinishResp"] = 8019;
    values[valuesById[8020] = "S2C_CommonGetStatisticsResp"] = 8020;
    values[valuesById[8021] = "S2C_CommonSimpleReplayResp"] = 8021;
    values[valuesById[8022] = "S2C_CommonDetailReplayResp"] = 8022;
    values[valuesById[8023] = "S2C_CommonCancelAutoOperatorResp"] = 8023;
    values[valuesById[8024] = "S2C_CommonGetPlayerStatisticsResp"] = 8024;
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
    values[valuesById[8270] = "S2C_CommonShowSelfCardNotify"] = 8270;
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

$root.C2SGetObSize = (function() {

    /**
     * Properties of a C2SGetObSize.
     * @exports IC2SGetObSize
     * @interface IC2SGetObSize
     * @property {string|null} [gameId] C2SGetObSize gameId
     */

    /**
     * Constructs a new C2SGetObSize.
     * @exports C2SGetObSize
     * @classdesc Represents a C2SGetObSize.
     * @implements IC2SGetObSize
     * @constructor
     * @param {IC2SGetObSize=} [p] Properties to set
     */
    function C2SGetObSize(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetObSize gameId.
     * @member {string} gameId
     * @memberof C2SGetObSize
     * @instance
     */
    C2SGetObSize.prototype.gameId = "";

    /**
     * Encodes the specified C2SGetObSize message. Does not implicitly {@link C2SGetObSize.verify|verify} messages.
     * @function encode
     * @memberof C2SGetObSize
     * @static
     * @param {IC2SGetObSize} m C2SGetObSize message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetObSize.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SGetObSize message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetObSize
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetObSize} C2SGetObSize
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetObSize.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetObSize();
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

    return C2SGetObSize;
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

$root.C2SShowSelfCard = (function() {

    /**
     * Properties of a C2SShowSelfCard.
     * @exports IC2SShowSelfCard
     * @interface IC2SShowSelfCard
     * @property {string|null} [gameId] C2SShowSelfCard gameId
     * @property {Array.<ICardInfo>|null} [cardList] C2SShowSelfCard cardList
     */

    /**
     * Constructs a new C2SShowSelfCard.
     * @exports C2SShowSelfCard
     * @classdesc Represents a C2SShowSelfCard.
     * @implements IC2SShowSelfCard
     * @constructor
     * @param {IC2SShowSelfCard=} [p] Properties to set
     */
    function C2SShowSelfCard(p) {
        this.cardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SShowSelfCard gameId.
     * @member {string} gameId
     * @memberof C2SShowSelfCard
     * @instance
     */
    C2SShowSelfCard.prototype.gameId = "";

    /**
     * C2SShowSelfCard cardList.
     * @member {Array.<ICardInfo>} cardList
     * @memberof C2SShowSelfCard
     * @instance
     */
    C2SShowSelfCard.prototype.cardList = $util.emptyArray;

    /**
     * Encodes the specified C2SShowSelfCard message. Does not implicitly {@link C2SShowSelfCard.verify|verify} messages.
     * @function encode
     * @memberof C2SShowSelfCard
     * @static
     * @param {IC2SShowSelfCard} m C2SShowSelfCard message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SShowSelfCard.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.cardList != null && m.cardList.length) {
            for (var i = 0; i < m.cardList.length; ++i)
                $root.CardInfo.encode(m.cardList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a C2SShowSelfCard message from the specified reader or buffer.
     * @function decode
     * @memberof C2SShowSelfCard
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SShowSelfCard} C2SShowSelfCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SShowSelfCard.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SShowSelfCard();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 3:
                if (!(m.cardList && m.cardList.length))
                    m.cardList = [];
                m.cardList.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SShowSelfCard;
})();

$root.C2SExtraThink = (function() {

    /**
     * Properties of a C2SExtraThink.
     * @exports IC2SExtraThink
     * @interface IC2SExtraThink
     * @property {string|null} [gameId] C2SExtraThink gameId
     */

    /**
     * Constructs a new C2SExtraThink.
     * @exports C2SExtraThink
     * @classdesc Represents a C2SExtraThink.
     * @implements IC2SExtraThink
     * @constructor
     * @param {IC2SExtraThink=} [p] Properties to set
     */
    function C2SExtraThink(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SExtraThink gameId.
     * @member {string} gameId
     * @memberof C2SExtraThink
     * @instance
     */
    C2SExtraThink.prototype.gameId = "";

    /**
     * Encodes the specified C2SExtraThink message. Does not implicitly {@link C2SExtraThink.verify|verify} messages.
     * @function encode
     * @memberof C2SExtraThink
     * @static
     * @param {IC2SExtraThink} m C2SExtraThink message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SExtraThink.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SExtraThink message from the specified reader or buffer.
     * @function decode
     * @memberof C2SExtraThink
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SExtraThink} C2SExtraThink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SExtraThink.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SExtraThink();
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

    return C2SExtraThink;
})();

$root.C2SSqueezeStart = (function() {

    /**
     * Properties of a C2SSqueezeStart.
     * @exports IC2SSqueezeStart
     * @interface IC2SSqueezeStart
     * @property {string|null} [gameId] C2SSqueezeStart gameId
     */

    /**
     * Constructs a new C2SSqueezeStart.
     * @exports C2SSqueezeStart
     * @classdesc Represents a C2SSqueezeStart.
     * @implements IC2SSqueezeStart
     * @constructor
     * @param {IC2SSqueezeStart=} [p] Properties to set
     */
    function C2SSqueezeStart(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SSqueezeStart gameId.
     * @member {string} gameId
     * @memberof C2SSqueezeStart
     * @instance
     */
    C2SSqueezeStart.prototype.gameId = "";

    /**
     * Encodes the specified C2SSqueezeStart message. Does not implicitly {@link C2SSqueezeStart.verify|verify} messages.
     * @function encode
     * @memberof C2SSqueezeStart
     * @static
     * @param {IC2SSqueezeStart} m C2SSqueezeStart message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SSqueezeStart.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SSqueezeStart message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSqueezeStart
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SSqueezeStart} C2SSqueezeStart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSqueezeStart.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SSqueezeStart();
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

    return C2SSqueezeStart;
})();

$root.C2SSqueezeFinish = (function() {

    /**
     * Properties of a C2SSqueezeFinish.
     * @exports IC2SSqueezeFinish
     * @interface IC2SSqueezeFinish
     * @property {string|null} [gameId] C2SSqueezeFinish gameId
     */

    /**
     * Constructs a new C2SSqueezeFinish.
     * @exports C2SSqueezeFinish
     * @classdesc Represents a C2SSqueezeFinish.
     * @implements IC2SSqueezeFinish
     * @constructor
     * @param {IC2SSqueezeFinish=} [p] Properties to set
     */
    function C2SSqueezeFinish(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SSqueezeFinish gameId.
     * @member {string} gameId
     * @memberof C2SSqueezeFinish
     * @instance
     */
    C2SSqueezeFinish.prototype.gameId = "";

    /**
     * Encodes the specified C2SSqueezeFinish message. Does not implicitly {@link C2SSqueezeFinish.verify|verify} messages.
     * @function encode
     * @memberof C2SSqueezeFinish
     * @static
     * @param {IC2SSqueezeFinish} m C2SSqueezeFinish message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SSqueezeFinish.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SSqueezeFinish message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSqueezeFinish
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SSqueezeFinish} C2SSqueezeFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSqueezeFinish.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SSqueezeFinish();
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

    return C2SSqueezeFinish;
})();

$root.C2SGetStatistics = (function() {

    /**
     * Properties of a C2SGetStatistics.
     * @exports IC2SGetStatistics
     * @interface IC2SGetStatistics
     * @property {string|null} [gameId] C2SGetStatistics gameId
     */

    /**
     * Constructs a new C2SGetStatistics.
     * @exports C2SGetStatistics
     * @classdesc Represents a C2SGetStatistics.
     * @implements IC2SGetStatistics
     * @constructor
     * @param {IC2SGetStatistics=} [p] Properties to set
     */
    function C2SGetStatistics(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetStatistics gameId.
     * @member {string} gameId
     * @memberof C2SGetStatistics
     * @instance
     */
    C2SGetStatistics.prototype.gameId = "";

    /**
     * Encodes the specified C2SGetStatistics message. Does not implicitly {@link C2SGetStatistics.verify|verify} messages.
     * @function encode
     * @memberof C2SGetStatistics
     * @static
     * @param {IC2SGetStatistics} m C2SGetStatistics message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetStatistics.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SGetStatistics message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetStatistics
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetStatistics} C2SGetStatistics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetStatistics.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetStatistics();
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

    return C2SGetStatistics;
})();

$root.C2SSimpleReplay = (function() {

    /**
     * Properties of a C2SSimpleReplay.
     * @exports IC2SSimpleReplay
     * @interface IC2SSimpleReplay
     * @property {string|null} [gameId] C2SSimpleReplay gameId
     * @property {number|null} [page] C2SSimpleReplay page
     * @property {number|null} [pageSize] C2SSimpleReplay pageSize
     */

    /**
     * Constructs a new C2SSimpleReplay.
     * @exports C2SSimpleReplay
     * @classdesc Represents a C2SSimpleReplay.
     * @implements IC2SSimpleReplay
     * @constructor
     * @param {IC2SSimpleReplay=} [p] Properties to set
     */
    function C2SSimpleReplay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SSimpleReplay gameId.
     * @member {string} gameId
     * @memberof C2SSimpleReplay
     * @instance
     */
    C2SSimpleReplay.prototype.gameId = "";

    /**
     * C2SSimpleReplay page.
     * @member {number} page
     * @memberof C2SSimpleReplay
     * @instance
     */
    C2SSimpleReplay.prototype.page = 0;

    /**
     * C2SSimpleReplay pageSize.
     * @member {number} pageSize
     * @memberof C2SSimpleReplay
     * @instance
     */
    C2SSimpleReplay.prototype.pageSize = 0;

    /**
     * Encodes the specified C2SSimpleReplay message. Does not implicitly {@link C2SSimpleReplay.verify|verify} messages.
     * @function encode
     * @memberof C2SSimpleReplay
     * @static
     * @param {IC2SSimpleReplay} m C2SSimpleReplay message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SSimpleReplay.encode = function encode(m, w) {
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
     * Decodes a C2SSimpleReplay message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSimpleReplay
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SSimpleReplay} C2SSimpleReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSimpleReplay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SSimpleReplay();
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

    return C2SSimpleReplay;
})();

$root.C2SDetailReplay = (function() {

    /**
     * Properties of a C2SDetailReplay.
     * @exports IC2SDetailReplay
     * @interface IC2SDetailReplay
     * @property {string|null} [gameId] C2SDetailReplay gameId
     * @property {number|null} [index] C2SDetailReplay index
     */

    /**
     * Constructs a new C2SDetailReplay.
     * @exports C2SDetailReplay
     * @classdesc Represents a C2SDetailReplay.
     * @implements IC2SDetailReplay
     * @constructor
     * @param {IC2SDetailReplay=} [p] Properties to set
     */
    function C2SDetailReplay(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SDetailReplay gameId.
     * @member {string} gameId
     * @memberof C2SDetailReplay
     * @instance
     */
    C2SDetailReplay.prototype.gameId = "";

    /**
     * C2SDetailReplay index.
     * @member {number} index
     * @memberof C2SDetailReplay
     * @instance
     */
    C2SDetailReplay.prototype.index = 0;

    /**
     * Encodes the specified C2SDetailReplay message. Does not implicitly {@link C2SDetailReplay.verify|verify} messages.
     * @function encode
     * @memberof C2SDetailReplay
     * @static
     * @param {IC2SDetailReplay} m C2SDetailReplay message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SDetailReplay.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int32(m.index);
        return w;
    };

    /**
     * Decodes a C2SDetailReplay message from the specified reader or buffer.
     * @function decode
     * @memberof C2SDetailReplay
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SDetailReplay} C2SDetailReplay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SDetailReplay.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SDetailReplay();
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

    return C2SDetailReplay;
})();

$root.C2SCancelAutoOperator = (function() {

    /**
     * Properties of a C2SCancelAutoOperator.
     * @exports IC2SCancelAutoOperator
     * @interface IC2SCancelAutoOperator
     * @property {string|null} [gameId] C2SCancelAutoOperator gameId
     */

    /**
     * Constructs a new C2SCancelAutoOperator.
     * @exports C2SCancelAutoOperator
     * @classdesc Represents a C2SCancelAutoOperator.
     * @implements IC2SCancelAutoOperator
     * @constructor
     * @param {IC2SCancelAutoOperator=} [p] Properties to set
     */
    function C2SCancelAutoOperator(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SCancelAutoOperator gameId.
     * @member {string} gameId
     * @memberof C2SCancelAutoOperator
     * @instance
     */
    C2SCancelAutoOperator.prototype.gameId = "";

    /**
     * Encodes the specified C2SCancelAutoOperator message. Does not implicitly {@link C2SCancelAutoOperator.verify|verify} messages.
     * @function encode
     * @memberof C2SCancelAutoOperator
     * @static
     * @param {IC2SCancelAutoOperator} m C2SCancelAutoOperator message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SCancelAutoOperator.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SCancelAutoOperator message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCancelAutoOperator
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SCancelAutoOperator} C2SCancelAutoOperator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCancelAutoOperator.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SCancelAutoOperator();
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

    return C2SCancelAutoOperator;
})();

$root.C2SGetPlayerStatistics = (function() {

    /**
     * Properties of a C2SGetPlayerStatistics.
     * @exports IC2SGetPlayerStatistics
     * @interface IC2SGetPlayerStatistics
     * @property {string|null} [gameId] C2SGetPlayerStatistics gameId
     * @property {string|null} [uid] C2SGetPlayerStatistics uid
     */

    /**
     * Constructs a new C2SGetPlayerStatistics.
     * @exports C2SGetPlayerStatistics
     * @classdesc Represents a C2SGetPlayerStatistics.
     * @implements IC2SGetPlayerStatistics
     * @constructor
     * @param {IC2SGetPlayerStatistics=} [p] Properties to set
     */
    function C2SGetPlayerStatistics(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetPlayerStatistics gameId.
     * @member {string} gameId
     * @memberof C2SGetPlayerStatistics
     * @instance
     */
    C2SGetPlayerStatistics.prototype.gameId = "";

    /**
     * C2SGetPlayerStatistics uid.
     * @member {string} uid
     * @memberof C2SGetPlayerStatistics
     * @instance
     */
    C2SGetPlayerStatistics.prototype.uid = "";

    /**
     * Encodes the specified C2SGetPlayerStatistics message. Does not implicitly {@link C2SGetPlayerStatistics.verify|verify} messages.
     * @function encode
     * @memberof C2SGetPlayerStatistics
     * @static
     * @param {IC2SGetPlayerStatistics} m C2SGetPlayerStatistics message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetPlayerStatistics.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        return w;
    };

    /**
     * Decodes a C2SGetPlayerStatistics message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetPlayerStatistics
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetPlayerStatistics} C2SGetPlayerStatistics
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetPlayerStatistics.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetPlayerStatistics();
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

    return C2SGetPlayerStatistics;
})();

/**
 * ApprovalStatus enum.
 * @exports ApprovalStatus
 * @enum {number}
 * @property {number} ApprovalStatus_Wait=0 ApprovalStatus_Wait value
 * @property {number} ApprovalStatus_Success=1 ApprovalStatus_Success value
 * @property {number} ApprovalStatus_Fail=2 ApprovalStatus_Fail value
 */
$root.ApprovalStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ApprovalStatus_Wait"] = 0;
    values[valuesById[1] = "ApprovalStatus_Success"] = 1;
    values[valuesById[2] = "ApprovalStatus_Fail"] = 2;
    return values;
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
 * SettlementType enum.
 * @exports SettlementType
 * @enum {number}
 * @property {number} SettlementType_AdvanceFold=0 SettlementType_AdvanceFold value
 * @property {number} SettlementType_AdvanceSettlement=1 SettlementType_AdvanceSettlement value
 * @property {number} SettlementType_NormalSettlement=2 SettlementType_NormalSettlement value
 */
$root.SettlementType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SettlementType_AdvanceFold"] = 0;
    values[valuesById[1] = "SettlementType_AdvanceSettlement"] = 1;
    values[valuesById[2] = "SettlementType_NormalSettlement"] = 2;
    return values;
})();

/**
 * WinLoseType enum.
 * @exports WinLoseType
 * @enum {number}
 * @property {number} WinLoseType_Win=0 WinLoseType_Win value
 * @property {number} WinLoseType_Lose=1 WinLoseType_Lose value
 */
$root.WinLoseType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WinLoseType_Win"] = 0;
    values[valuesById[1] = "WinLoseType_Lose"] = 1;
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
     * @property {number|null} [taxLimitAmount] BasicTexasConfig taxLimitAmount
     * @property {number|null} [returnRatio] BasicTexasConfig returnRatio
     * @property {number|null} [smallBlind] BasicTexasConfig smallBlind
     * @property {boolean|null} [straddle] BasicTexasConfig straddle
     * @property {number|null} [ante] BasicTexasConfig ante
     * @property {number|null} [maxTotalBuyIn] BasicTexasConfig maxTotalBuyIn
     * @property {number|null} [minBringIn] BasicTexasConfig minBringIn
     * @property {number|null} [maxBringIn] BasicTexasConfig maxBringIn
     * @property {boolean|null} [allowBringOut] BasicTexasConfig allowBringOut
     * @property {number|null} [minScoreAfterBringOut] BasicTexasConfig minScoreAfterBringOut
     * @property {boolean|null} [insurance] BasicTexasConfig insurance
     * @property {number|null} [insuranceTaxRatio] BasicTexasConfig insuranceTaxRatio
     * @property {number|null} [insuranceSecurityAmount] BasicTexasConfig insuranceSecurityAmount
     * @property {number|null} [insuranceReturnRatio] BasicTexasConfig insuranceReturnRatio
     * @property {number|null} [gameDuration] BasicTexasConfig gameDuration
     * @property {number|null} [thinkingTime] BasicTexasConfig thinkingTime
     * @property {number|null} [seatNum] BasicTexasConfig seatNum
     * @property {number|null} [autoStartNum] BasicTexasConfig autoStartNum
     * @property {boolean|null} ["public"] BasicTexasConfig public
     * @property {boolean|null} [delayOpenHandCards] BasicTexasConfig delayOpenHandCards
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
     * BasicTexasConfig taxLimitAmount.
     * @member {number} taxLimitAmount
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.taxLimitAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig returnRatio.
     * @member {number} returnRatio
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.returnRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
     * BasicTexasConfig insuranceTaxRatio.
     * @member {number} insuranceTaxRatio
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.insuranceTaxRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig insuranceSecurityAmount.
     * @member {number} insuranceSecurityAmount
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.insuranceSecurityAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BasicTexasConfig insuranceReturnRatio.
     * @member {number} insuranceReturnRatio
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.insuranceReturnRatio = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
     * BasicTexasConfig public.
     * @member {boolean} public
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype["public"] = false;

    /**
     * BasicTexasConfig delayOpenHandCards.
     * @member {boolean} delayOpenHandCards
     * @memberof BasicTexasConfig
     * @instance
     */
    BasicTexasConfig.prototype.delayOpenHandCards = false;

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
        if (m.taxLimitAmount != null && Object.hasOwnProperty.call(m, "taxLimitAmount"))
            w.uint32(48).int64(m.taxLimitAmount);
        if (m.returnRatio != null && Object.hasOwnProperty.call(m, "returnRatio"))
            w.uint32(56).int64(m.returnRatio);
        if (m.smallBlind != null && Object.hasOwnProperty.call(m, "smallBlind"))
            w.uint32(64).int64(m.smallBlind);
        if (m.straddle != null && Object.hasOwnProperty.call(m, "straddle"))
            w.uint32(72).bool(m.straddle);
        if (m.ante != null && Object.hasOwnProperty.call(m, "ante"))
            w.uint32(80).int64(m.ante);
        if (m.maxTotalBuyIn != null && Object.hasOwnProperty.call(m, "maxTotalBuyIn"))
            w.uint32(88).int64(m.maxTotalBuyIn);
        if (m.minBringIn != null && Object.hasOwnProperty.call(m, "minBringIn"))
            w.uint32(96).int64(m.minBringIn);
        if (m.maxBringIn != null && Object.hasOwnProperty.call(m, "maxBringIn"))
            w.uint32(104).int64(m.maxBringIn);
        if (m.allowBringOut != null && Object.hasOwnProperty.call(m, "allowBringOut"))
            w.uint32(112).bool(m.allowBringOut);
        if (m.minScoreAfterBringOut != null && Object.hasOwnProperty.call(m, "minScoreAfterBringOut"))
            w.uint32(120).int64(m.minScoreAfterBringOut);
        if (m.insurance != null && Object.hasOwnProperty.call(m, "insurance"))
            w.uint32(128).bool(m.insurance);
        if (m.insuranceTaxRatio != null && Object.hasOwnProperty.call(m, "insuranceTaxRatio"))
            w.uint32(136).int64(m.insuranceTaxRatio);
        if (m.insuranceSecurityAmount != null && Object.hasOwnProperty.call(m, "insuranceSecurityAmount"))
            w.uint32(144).int64(m.insuranceSecurityAmount);
        if (m.insuranceReturnRatio != null && Object.hasOwnProperty.call(m, "insuranceReturnRatio"))
            w.uint32(152).int64(m.insuranceReturnRatio);
        if (m.gameDuration != null && Object.hasOwnProperty.call(m, "gameDuration"))
            w.uint32(160).int64(m.gameDuration);
        if (m.thinkingTime != null && Object.hasOwnProperty.call(m, "thinkingTime"))
            w.uint32(168).int64(m.thinkingTime);
        if (m.seatNum != null && Object.hasOwnProperty.call(m, "seatNum"))
            w.uint32(176).int64(m.seatNum);
        if (m.autoStartNum != null && Object.hasOwnProperty.call(m, "autoStartNum"))
            w.uint32(184).int64(m.autoStartNum);
        if (m["public"] != null && Object.hasOwnProperty.call(m, "public"))
            w.uint32(192).bool(m["public"]);
        if (m.delayOpenHandCards != null && Object.hasOwnProperty.call(m, "delayOpenHandCards"))
            w.uint32(200).bool(m.delayOpenHandCards);
        if (m.gpsLimit != null && Object.hasOwnProperty.call(m, "gpsLimit"))
            w.uint32(208).bool(m.gpsLimit);
        if (m.ipLimit != null && Object.hasOwnProperty.call(m, "ipLimit"))
            w.uint32(216).bool(m.ipLimit);
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
                m.taxLimitAmount = r.int64();
                break;
            case 7:
                m.returnRatio = r.int64();
                break;
            case 8:
                m.smallBlind = r.int64();
                break;
            case 9:
                m.straddle = r.bool();
                break;
            case 10:
                m.ante = r.int64();
                break;
            case 11:
                m.maxTotalBuyIn = r.int64();
                break;
            case 12:
                m.minBringIn = r.int64();
                break;
            case 13:
                m.maxBringIn = r.int64();
                break;
            case 14:
                m.allowBringOut = r.bool();
                break;
            case 15:
                m.minScoreAfterBringOut = r.int64();
                break;
            case 16:
                m.insurance = r.bool();
                break;
            case 17:
                m.insuranceTaxRatio = r.int64();
                break;
            case 18:
                m.insuranceSecurityAmount = r.int64();
                break;
            case 19:
                m.insuranceReturnRatio = r.int64();
                break;
            case 20:
                m.gameDuration = r.int64();
                break;
            case 21:
                m.thinkingTime = r.int64();
                break;
            case 22:
                m.seatNum = r.int64();
                break;
            case 23:
                m.autoStartNum = r.int64();
                break;
            case 24:
                m["public"] = r.bool();
                break;
            case 25:
                m.delayOpenHandCards = r.bool();
                break;
            case 26:
                m.gpsLimit = r.bool();
                break;
            case 27:
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
     * @property {string|null} [creatorUid] TexasDynamicData creatorUid
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
     * TexasDynamicData creatorUid.
     * @member {string} creatorUid
     * @memberof TexasDynamicData
     * @instance
     */
    TexasDynamicData.prototype.creatorUid = "";

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
        if (m.creatorUid != null && Object.hasOwnProperty.call(m, "creatorUid"))
            w.uint32(90).string(m.creatorUid);
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
            case 11:
                m.creatorUid = r.string();
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
     * @property {boolean|null} [auto] PlayerInfo auto
     * @property {number|null} [totalHands] PlayerInfo totalHands
     * @property {number|null} [totalFlopHands] PlayerInfo totalFlopHands
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
     * PlayerInfo auto.
     * @member {boolean} auto
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.auto = false;

    /**
     * PlayerInfo totalHands.
     * @member {number} totalHands
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.totalHands = 0;

    /**
     * PlayerInfo totalFlopHands.
     * @member {number} totalFlopHands
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.totalFlopHands = 0;

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
        if (m.auto != null && Object.hasOwnProperty.call(m, "auto"))
            w.uint32(104).bool(m.auto);
        if (m.totalHands != null && Object.hasOwnProperty.call(m, "totalHands"))
            w.uint32(112).int32(m.totalHands);
        if (m.totalFlopHands != null && Object.hasOwnProperty.call(m, "totalFlopHands"))
            w.uint32(120).int32(m.totalFlopHands);
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
            case 13:
                m.auto = r.bool();
                break;
            case 14:
                m.totalHands = r.int32();
                break;
            case 15:
                m.totalFlopHands = r.int32();
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
     * @property {string|null} [nickName] PlayerWinLose nickName
     * @property {string|null} [head] PlayerWinLose head
     * @property {SettlementType|null} [settlementType] PlayerWinLose settlementType
     * @property {WinLoseType|null} [winLoseType] PlayerWinLose winLoseType
     * @property {number|null} [winLose] PlayerWinLose winLose
     * @property {number|null} [amount] PlayerWinLose amount
     * @property {Array.<ICardInfo>|null} [cardInfo] PlayerWinLose cardInfo
     * @property {ICombinationResult|null} [combinationResult] PlayerWinLose combinationResult
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
     * PlayerWinLose nickName.
     * @member {string} nickName
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.nickName = "";

    /**
     * PlayerWinLose head.
     * @member {string} head
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.head = "";

    /**
     * PlayerWinLose settlementType.
     * @member {SettlementType} settlementType
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.settlementType = 0;

    /**
     * PlayerWinLose winLoseType.
     * @member {WinLoseType} winLoseType
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.winLoseType = 0;

    /**
     * PlayerWinLose winLose.
     * @member {number} winLose
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerWinLose amount.
     * @member {number} amount
     * @memberof PlayerWinLose
     * @instance
     */
    PlayerWinLose.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(18).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(26).string(m.head);
        if (m.settlementType != null && Object.hasOwnProperty.call(m, "settlementType"))
            w.uint32(32).int32(m.settlementType);
        if (m.winLoseType != null && Object.hasOwnProperty.call(m, "winLoseType"))
            w.uint32(40).int32(m.winLoseType);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(48).int64(m.winLose);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(56).int64(m.amount);
        if (m.cardInfo != null && m.cardInfo.length) {
            for (var i = 0; i < m.cardInfo.length; ++i)
                $root.CardInfo.encode(m.cardInfo[i], w.uint32(66).fork()).ldelim();
        }
        if (m.combinationResult != null && Object.hasOwnProperty.call(m, "combinationResult"))
            $root.CombinationResult.encode(m.combinationResult, w.uint32(74).fork()).ldelim();
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
                m.nickName = r.string();
                break;
            case 3:
                m.head = r.string();
                break;
            case 4:
                m.settlementType = r.int32();
                break;
            case 5:
                m.winLoseType = r.int32();
                break;
            case 6:
                m.winLose = r.int64();
                break;
            case 7:
                m.amount = r.int64();
                break;
            case 8:
                if (!(m.cardInfo && m.cardInfo.length))
                    m.cardInfo = [];
                m.cardInfo.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 9:
                m.combinationResult = $root.CombinationResult.decode(r, r.uint32());
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
     * @property {number|null} [totalNUm] ActionResult totalNUm
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
     * ActionResult totalNUm.
     * @member {number} totalNUm
     * @memberof ActionResult
     * @instance
     */
    ActionResult.prototype.totalNUm = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (m.totalNUm != null && Object.hasOwnProperty.call(m, "totalNUm"))
            w.uint32(24).int64(m.totalNUm);
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
            case 3:
                m.totalNUm = r.int64();
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

$root.PlayerStatistic = (function() {

    /**
     * Properties of a PlayerStatistic.
     * @exports IPlayerStatistic
     * @interface IPlayerStatistic
     * @property {string|null} [uid] PlayerStatistic uid
     * @property {string|null} [head] PlayerStatistic head
     * @property {string|null} [name] PlayerStatistic name
     * @property {number|null} [totalHands] PlayerStatistic totalHands
     * @property {number|null} [totalFlopHands] PlayerStatistic totalFlopHands
     * @property {number|null} [totalPreFlopRaiseCount] PlayerStatistic totalPreFlopRaiseCount
     * @property {number|null} [totalPreFlopAgainRaiseCount] PlayerStatistic totalPreFlopAgainRaiseCount
     * @property {number|null} [totalBringIn] PlayerStatistic totalBringIn
     * @property {number|null} [totalBringOut] PlayerStatistic totalBringOut
     * @property {number|null} [winLose] PlayerStatistic winLose
     */

    /**
     * Constructs a new PlayerStatistic.
     * @exports PlayerStatistic
     * @classdesc Represents a PlayerStatistic.
     * @implements IPlayerStatistic
     * @constructor
     * @param {IPlayerStatistic=} [p] Properties to set
     */
    function PlayerStatistic(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PlayerStatistic uid.
     * @member {string} uid
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.uid = "";

    /**
     * PlayerStatistic head.
     * @member {string} head
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.head = "";

    /**
     * PlayerStatistic name.
     * @member {string} name
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.name = "";

    /**
     * PlayerStatistic totalHands.
     * @member {number} totalHands
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalHands = 0;

    /**
     * PlayerStatistic totalFlopHands.
     * @member {number} totalFlopHands
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalFlopHands = 0;

    /**
     * PlayerStatistic totalPreFlopRaiseCount.
     * @member {number} totalPreFlopRaiseCount
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalPreFlopRaiseCount = 0;

    /**
     * PlayerStatistic totalPreFlopAgainRaiseCount.
     * @member {number} totalPreFlopAgainRaiseCount
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalPreFlopAgainRaiseCount = 0;

    /**
     * PlayerStatistic totalBringIn.
     * @member {number} totalBringIn
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalBringIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerStatistic totalBringOut.
     * @member {number} totalBringOut
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.totalBringOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerStatistic winLose.
     * @member {number} winLose
     * @memberof PlayerStatistic
     * @instance
     */
    PlayerStatistic.prototype.winLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified PlayerStatistic message. Does not implicitly {@link PlayerStatistic.verify|verify} messages.
     * @function encode
     * @memberof PlayerStatistic
     * @static
     * @param {IPlayerStatistic} m PlayerStatistic message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    PlayerStatistic.encode = function encode(m, w) {
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
        if (m.totalFlopHands != null && Object.hasOwnProperty.call(m, "totalFlopHands"))
            w.uint32(40).int32(m.totalFlopHands);
        if (m.totalPreFlopRaiseCount != null && Object.hasOwnProperty.call(m, "totalPreFlopRaiseCount"))
            w.uint32(48).int32(m.totalPreFlopRaiseCount);
        if (m.totalPreFlopAgainRaiseCount != null && Object.hasOwnProperty.call(m, "totalPreFlopAgainRaiseCount"))
            w.uint32(56).int32(m.totalPreFlopAgainRaiseCount);
        if (m.totalBringIn != null && Object.hasOwnProperty.call(m, "totalBringIn"))
            w.uint32(64).int64(m.totalBringIn);
        if (m.totalBringOut != null && Object.hasOwnProperty.call(m, "totalBringOut"))
            w.uint32(72).int64(m.totalBringOut);
        if (m.winLose != null && Object.hasOwnProperty.call(m, "winLose"))
            w.uint32(80).int64(m.winLose);
        return w;
    };

    /**
     * Decodes a PlayerStatistic message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerStatistic
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PlayerStatistic} PlayerStatistic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerStatistic.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PlayerStatistic();
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
                m.totalFlopHands = r.int32();
                break;
            case 6:
                m.totalPreFlopRaiseCount = r.int32();
                break;
            case 7:
                m.totalPreFlopAgainRaiseCount = r.int32();
                break;
            case 8:
                m.totalBringIn = r.int64();
                break;
            case 9:
                m.totalBringOut = r.int64();
                break;
            case 10:
                m.winLose = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return PlayerStatistic;
})();

$root.MySimpleInfo = (function() {

    /**
     * Properties of a MySimpleInfo.
     * @exports IMySimpleInfo
     * @interface IMySimpleInfo
     * @property {Array.<ICardInfo>|null} [myCards] MySimpleInfo myCards
     * @property {number|null} [myResult] MySimpleInfo myResult
     */

    /**
     * Constructs a new MySimpleInfo.
     * @exports MySimpleInfo
     * @classdesc Represents a MySimpleInfo.
     * @implements IMySimpleInfo
     * @constructor
     * @param {IMySimpleInfo=} [p] Properties to set
     */
    function MySimpleInfo(p) {
        this.myCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * MySimpleInfo myCards.
     * @member {Array.<ICardInfo>} myCards
     * @memberof MySimpleInfo
     * @instance
     */
    MySimpleInfo.prototype.myCards = $util.emptyArray;

    /**
     * MySimpleInfo myResult.
     * @member {number} myResult
     * @memberof MySimpleInfo
     * @instance
     */
    MySimpleInfo.prototype.myResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified MySimpleInfo message. Does not implicitly {@link MySimpleInfo.verify|verify} messages.
     * @function encode
     * @memberof MySimpleInfo
     * @static
     * @param {IMySimpleInfo} m MySimpleInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    MySimpleInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.myCards != null && m.myCards.length) {
            for (var i = 0; i < m.myCards.length; ++i)
                $root.CardInfo.encode(m.myCards[i], w.uint32(10).fork()).ldelim();
        }
        if (m.myResult != null && Object.hasOwnProperty.call(m, "myResult"))
            w.uint32(16).int64(m.myResult);
        return w;
    };

    /**
     * Decodes a MySimpleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MySimpleInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {MySimpleInfo} MySimpleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    MySimpleInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.MySimpleInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.myCards && m.myCards.length))
                    m.myCards = [];
                m.myCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 2:
                m.myResult = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return MySimpleInfo;
})();

$root.SimpleReplayRecord = (function() {

    /**
     * Properties of a SimpleReplayRecord.
     * @exports ISimpleReplayRecord
     * @interface ISimpleReplayRecord
     * @property {string|null} [gameId] SimpleReplayRecord gameId
     * @property {number|null} [index] SimpleReplayRecord index
     * @property {Array.<ICardInfo>|null} [publicCards] SimpleReplayRecord publicCards
     * @property {Array.<IPlayerWinLose>|null} [winnerSettlementResult] SimpleReplayRecord winnerSettlementResult
     * @property {IMySimpleInfo|null} [mySimpleInfo] SimpleReplayRecord mySimpleInfo
     * @property {string|null} [date] SimpleReplayRecord date
     * @property {Array.<IPlayerWinLose>|null} [intactSettlementResults] SimpleReplayRecord intactSettlementResults
     */

    /**
     * Constructs a new SimpleReplayRecord.
     * @exports SimpleReplayRecord
     * @classdesc Represents a SimpleReplayRecord.
     * @implements ISimpleReplayRecord
     * @constructor
     * @param {ISimpleReplayRecord=} [p] Properties to set
     */
    function SimpleReplayRecord(p) {
        this.publicCards = [];
        this.winnerSettlementResult = [];
        this.intactSettlementResults = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SimpleReplayRecord gameId.
     * @member {string} gameId
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.gameId = "";

    /**
     * SimpleReplayRecord index.
     * @member {number} index
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplayRecord publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.publicCards = $util.emptyArray;

    /**
     * SimpleReplayRecord winnerSettlementResult.
     * @member {Array.<IPlayerWinLose>} winnerSettlementResult
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.winnerSettlementResult = $util.emptyArray;

    /**
     * SimpleReplayRecord mySimpleInfo.
     * @member {IMySimpleInfo|null|undefined} mySimpleInfo
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.mySimpleInfo = null;

    /**
     * SimpleReplayRecord date.
     * @member {string} date
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.date = "";

    /**
     * SimpleReplayRecord intactSettlementResults.
     * @member {Array.<IPlayerWinLose>} intactSettlementResults
     * @memberof SimpleReplayRecord
     * @instance
     */
    SimpleReplayRecord.prototype.intactSettlementResults = $util.emptyArray;

    /**
     * Encodes the specified SimpleReplayRecord message. Does not implicitly {@link SimpleReplayRecord.verify|verify} messages.
     * @function encode
     * @memberof SimpleReplayRecord
     * @static
     * @param {ISimpleReplayRecord} m SimpleReplayRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    SimpleReplayRecord.encode = function encode(m, w) {
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
        if (m.winnerSettlementResult != null && m.winnerSettlementResult.length) {
            for (var i = 0; i < m.winnerSettlementResult.length; ++i)
                $root.PlayerWinLose.encode(m.winnerSettlementResult[i], w.uint32(34).fork()).ldelim();
        }
        if (m.mySimpleInfo != null && Object.hasOwnProperty.call(m, "mySimpleInfo"))
            $root.MySimpleInfo.encode(m.mySimpleInfo, w.uint32(42).fork()).ldelim();
        if (m.date != null && Object.hasOwnProperty.call(m, "date"))
            w.uint32(50).string(m.date);
        if (m.intactSettlementResults != null && m.intactSettlementResults.length) {
            for (var i = 0; i < m.intactSettlementResults.length; ++i)
                $root.PlayerWinLose.encode(m.intactSettlementResults[i], w.uint32(58).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a SimpleReplayRecord message from the specified reader or buffer.
     * @function decode
     * @memberof SimpleReplayRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SimpleReplayRecord} SimpleReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleReplayRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SimpleReplayRecord();
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
                if (!(m.winnerSettlementResult && m.winnerSettlementResult.length))
                    m.winnerSettlementResult = [];
                m.winnerSettlementResult.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            case 5:
                m.mySimpleInfo = $root.MySimpleInfo.decode(r, r.uint32());
                break;
            case 6:
                m.date = r.string();
                break;
            case 7:
                if (!(m.intactSettlementResults && m.intactSettlementResults.length))
                    m.intactSettlementResults = [];
                m.intactSettlementResults.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SimpleReplayRecord;
})();

$root.DetailReplayRecord = (function() {

    /**
     * Properties of a DetailReplayRecord.
     * @exports IDetailReplayRecord
     * @interface IDetailReplayRecord
     * @property {string|null} [gameId] DetailReplayRecord gameId
     * @property {number|null} [index] DetailReplayRecord index
     * @property {IBasicTexasConfig|null} [texasConfig] DetailReplayRecord texasConfig
     * @property {string|null} [dealerUid] DetailReplayRecord dealerUid
     * @property {Array.<IPlayerInfo>|null} [players] DetailReplayRecord players
     * @property {Array.<ICardInfo>|null} [publicCards] DetailReplayRecord publicCards
     * @property {Array.<IActionResult>|null} [roundStartActions] DetailReplayRecord roundStartActions
     * @property {Array.<IActionResult>|null} [preFlopActions] DetailReplayRecord preFlopActions
     * @property {Array.<IActionResult>|null} [flopActions] DetailReplayRecord flopActions
     * @property {Array.<IActionResult>|null} [turnActions] DetailReplayRecord turnActions
     * @property {Array.<IActionResult>|null} [riverActions] DetailReplayRecord riverActions
     * @property {Array.<IPlayerWinLose>|null} [correspondSettlementResult] DetailReplayRecord correspondSettlementResult
     * @property {Array.<IPotInfo>|null} [potInfoFlop] DetailReplayRecord potInfoFlop
     * @property {Array.<IPotInfo>|null} [potInfoTurn] DetailReplayRecord potInfoTurn
     * @property {Array.<IPotInfo>|null} [potInfoRiver] DetailReplayRecord potInfoRiver
     * @property {Array.<IPlayerWinLose>|null} [intactSettlementResults] DetailReplayRecord intactSettlementResults
     */

    /**
     * Constructs a new DetailReplayRecord.
     * @exports DetailReplayRecord
     * @classdesc Represents a DetailReplayRecord.
     * @implements IDetailReplayRecord
     * @constructor
     * @param {IDetailReplayRecord=} [p] Properties to set
     */
    function DetailReplayRecord(p) {
        this.players = [];
        this.publicCards = [];
        this.roundStartActions = [];
        this.preFlopActions = [];
        this.flopActions = [];
        this.turnActions = [];
        this.riverActions = [];
        this.correspondSettlementResult = [];
        this.potInfoFlop = [];
        this.potInfoTurn = [];
        this.potInfoRiver = [];
        this.intactSettlementResults = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * DetailReplayRecord gameId.
     * @member {string} gameId
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.gameId = "";

    /**
     * DetailReplayRecord index.
     * @member {number} index
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * DetailReplayRecord texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.texasConfig = null;

    /**
     * DetailReplayRecord dealerUid.
     * @member {string} dealerUid
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.dealerUid = "";

    /**
     * DetailReplayRecord players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.players = $util.emptyArray;

    /**
     * DetailReplayRecord publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.publicCards = $util.emptyArray;

    /**
     * DetailReplayRecord roundStartActions.
     * @member {Array.<IActionResult>} roundStartActions
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.roundStartActions = $util.emptyArray;

    /**
     * DetailReplayRecord preFlopActions.
     * @member {Array.<IActionResult>} preFlopActions
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.preFlopActions = $util.emptyArray;

    /**
     * DetailReplayRecord flopActions.
     * @member {Array.<IActionResult>} flopActions
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.flopActions = $util.emptyArray;

    /**
     * DetailReplayRecord turnActions.
     * @member {Array.<IActionResult>} turnActions
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.turnActions = $util.emptyArray;

    /**
     * DetailReplayRecord riverActions.
     * @member {Array.<IActionResult>} riverActions
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.riverActions = $util.emptyArray;

    /**
     * DetailReplayRecord correspondSettlementResult.
     * @member {Array.<IPlayerWinLose>} correspondSettlementResult
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.correspondSettlementResult = $util.emptyArray;

    /**
     * DetailReplayRecord potInfoFlop.
     * @member {Array.<IPotInfo>} potInfoFlop
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.potInfoFlop = $util.emptyArray;

    /**
     * DetailReplayRecord potInfoTurn.
     * @member {Array.<IPotInfo>} potInfoTurn
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.potInfoTurn = $util.emptyArray;

    /**
     * DetailReplayRecord potInfoRiver.
     * @member {Array.<IPotInfo>} potInfoRiver
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.potInfoRiver = $util.emptyArray;

    /**
     * DetailReplayRecord intactSettlementResults.
     * @member {Array.<IPlayerWinLose>} intactSettlementResults
     * @memberof DetailReplayRecord
     * @instance
     */
    DetailReplayRecord.prototype.intactSettlementResults = $util.emptyArray;

    /**
     * Encodes the specified DetailReplayRecord message. Does not implicitly {@link DetailReplayRecord.verify|verify} messages.
     * @function encode
     * @memberof DetailReplayRecord
     * @static
     * @param {IDetailReplayRecord} m DetailReplayRecord message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    DetailReplayRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
            w.uint32(16).int64(m.index);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(26).fork()).ldelim();
        if (m.dealerUid != null && Object.hasOwnProperty.call(m, "dealerUid"))
            w.uint32(34).string(m.dealerUid);
        if (m.players != null && m.players.length) {
            for (var i = 0; i < m.players.length; ++i)
                $root.PlayerInfo.encode(m.players[i], w.uint32(42).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(50).fork()).ldelim();
        }
        if (m.roundStartActions != null && m.roundStartActions.length) {
            for (var i = 0; i < m.roundStartActions.length; ++i)
                $root.ActionResult.encode(m.roundStartActions[i], w.uint32(58).fork()).ldelim();
        }
        if (m.preFlopActions != null && m.preFlopActions.length) {
            for (var i = 0; i < m.preFlopActions.length; ++i)
                $root.ActionResult.encode(m.preFlopActions[i], w.uint32(66).fork()).ldelim();
        }
        if (m.flopActions != null && m.flopActions.length) {
            for (var i = 0; i < m.flopActions.length; ++i)
                $root.ActionResult.encode(m.flopActions[i], w.uint32(74).fork()).ldelim();
        }
        if (m.turnActions != null && m.turnActions.length) {
            for (var i = 0; i < m.turnActions.length; ++i)
                $root.ActionResult.encode(m.turnActions[i], w.uint32(82).fork()).ldelim();
        }
        if (m.riverActions != null && m.riverActions.length) {
            for (var i = 0; i < m.riverActions.length; ++i)
                $root.ActionResult.encode(m.riverActions[i], w.uint32(90).fork()).ldelim();
        }
        if (m.correspondSettlementResult != null && m.correspondSettlementResult.length) {
            for (var i = 0; i < m.correspondSettlementResult.length; ++i)
                $root.PlayerWinLose.encode(m.correspondSettlementResult[i], w.uint32(98).fork()).ldelim();
        }
        if (m.potInfoFlop != null && m.potInfoFlop.length) {
            for (var i = 0; i < m.potInfoFlop.length; ++i)
                $root.PotInfo.encode(m.potInfoFlop[i], w.uint32(106).fork()).ldelim();
        }
        if (m.potInfoTurn != null && m.potInfoTurn.length) {
            for (var i = 0; i < m.potInfoTurn.length; ++i)
                $root.PotInfo.encode(m.potInfoTurn[i], w.uint32(114).fork()).ldelim();
        }
        if (m.potInfoRiver != null && m.potInfoRiver.length) {
            for (var i = 0; i < m.potInfoRiver.length; ++i)
                $root.PotInfo.encode(m.potInfoRiver[i], w.uint32(122).fork()).ldelim();
        }
        if (m.intactSettlementResults != null && m.intactSettlementResults.length) {
            for (var i = 0; i < m.intactSettlementResults.length; ++i)
                $root.PlayerWinLose.encode(m.intactSettlementResults[i], w.uint32(130).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a DetailReplayRecord message from the specified reader or buffer.
     * @function decode
     * @memberof DetailReplayRecord
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {DetailReplayRecord} DetailReplayRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    DetailReplayRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.DetailReplayRecord();
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
                m.dealerUid = r.string();
                break;
            case 5:
                if (!(m.players && m.players.length))
                    m.players = [];
                m.players.push($root.PlayerInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.roundStartActions && m.roundStartActions.length))
                    m.roundStartActions = [];
                m.roundStartActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 8:
                if (!(m.preFlopActions && m.preFlopActions.length))
                    m.preFlopActions = [];
                m.preFlopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 9:
                if (!(m.flopActions && m.flopActions.length))
                    m.flopActions = [];
                m.flopActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 10:
                if (!(m.turnActions && m.turnActions.length))
                    m.turnActions = [];
                m.turnActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 11:
                if (!(m.riverActions && m.riverActions.length))
                    m.riverActions = [];
                m.riverActions.push($root.ActionResult.decode(r, r.uint32()));
                break;
            case 12:
                if (!(m.correspondSettlementResult && m.correspondSettlementResult.length))
                    m.correspondSettlementResult = [];
                m.correspondSettlementResult.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            case 13:
                if (!(m.potInfoFlop && m.potInfoFlop.length))
                    m.potInfoFlop = [];
                m.potInfoFlop.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 14:
                if (!(m.potInfoTurn && m.potInfoTurn.length))
                    m.potInfoTurn = [];
                m.potInfoTurn.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 15:
                if (!(m.potInfoRiver && m.potInfoRiver.length))
                    m.potInfoRiver = [];
                m.potInfoRiver.push($root.PotInfo.decode(r, r.uint32()));
                break;
            case 16:
                if (!(m.intactSettlementResults && m.intactSettlementResults.length))
                    m.intactSettlementResults = [];
                m.intactSettlementResults.push($root.PlayerWinLose.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return DetailReplayRecord;
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
     * @property {Array.<IPlayerStatistic>|null} [playerStatisticList] RecordDetail playerStatisticList
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
        this.playerStatisticList = [];
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
     * RecordDetail playerStatisticList.
     * @member {Array.<IPlayerStatistic>} playerStatisticList
     * @memberof RecordDetail
     * @instance
     */
    RecordDetail.prototype.playerStatisticList = $util.emptyArray;

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
        if (m.playerStatisticList != null && m.playerStatisticList.length) {
            for (var i = 0; i < m.playerStatisticList.length; ++i)
                $root.PlayerStatistic.encode(m.playerStatisticList[i], w.uint32(74).fork()).ldelim();
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
                if (!(m.playerStatisticList && m.playerStatisticList.length))
                    m.playerStatisticList = [];
                m.playerStatisticList.push($root.PlayerStatistic.decode(r, r.uint32()));
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
     * @property {ApprovalStatus|null} [approvalStatus] S2CCommonBringInResp approvalStatus
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
     * S2CCommonBringInResp approvalStatus.
     * @member {ApprovalStatus} approvalStatus
     * @memberof S2CCommonBringInResp
     * @instance
     */
    S2CCommonBringInResp.prototype.approvalStatus = 0;

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
        if (m.approvalStatus != null && Object.hasOwnProperty.call(m, "approvalStatus"))
            w.uint32(24).int32(m.approvalStatus);
        if (m.bringInNum != null && Object.hasOwnProperty.call(m, "bringInNum"))
            w.uint32(32).int64(m.bringInNum);
        if (m.totalBringInNum != null && Object.hasOwnProperty.call(m, "totalBringInNum"))
            w.uint32(40).int64(m.totalBringInNum);
        if (m.currencyNum != null && Object.hasOwnProperty.call(m, "currencyNum"))
            w.uint32(48).int64(m.currencyNum);
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
                m.approvalStatus = r.int32();
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

$root.S2CCommonGetObSizeResp = (function() {

    /**
     * Properties of a S2CCommonGetObSizeResp.
     * @exports IS2CCommonGetObSizeResp
     * @interface IS2CCommonGetObSizeResp
     * @property {ICommonResult|null} [result] S2CCommonGetObSizeResp result
     * @property {string|null} [gameId] S2CCommonGetObSizeResp gameId
     * @property {number|null} [obSize] S2CCommonGetObSizeResp obSize
     */

    /**
     * Constructs a new S2CCommonGetObSizeResp.
     * @exports S2CCommonGetObSizeResp
     * @classdesc Represents a S2CCommonGetObSizeResp.
     * @implements IS2CCommonGetObSizeResp
     * @constructor
     * @param {IS2CCommonGetObSizeResp=} [p] Properties to set
     */
    function S2CCommonGetObSizeResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonGetObSizeResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonGetObSizeResp
     * @instance
     */
    S2CCommonGetObSizeResp.prototype.result = null;

    /**
     * S2CCommonGetObSizeResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonGetObSizeResp
     * @instance
     */
    S2CCommonGetObSizeResp.prototype.gameId = "";

    /**
     * S2CCommonGetObSizeResp obSize.
     * @member {number} obSize
     * @memberof S2CCommonGetObSizeResp
     * @instance
     */
    S2CCommonGetObSizeResp.prototype.obSize = 0;

    /**
     * Encodes the specified S2CCommonGetObSizeResp message. Does not implicitly {@link S2CCommonGetObSizeResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonGetObSizeResp
     * @static
     * @param {IS2CCommonGetObSizeResp} m S2CCommonGetObSizeResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonGetObSizeResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.obSize != null && Object.hasOwnProperty.call(m, "obSize"))
            w.uint32(24).int32(m.obSize);
        return w;
    };

    /**
     * Decodes a S2CCommonGetObSizeResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonGetObSizeResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonGetObSizeResp} S2CCommonGetObSizeResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonGetObSizeResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonGetObSizeResp();
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
                m.obSize = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonGetObSizeResp;
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

$root.S2CCommonShowSelfCardResp = (function() {

    /**
     * Properties of a S2CCommonShowSelfCardResp.
     * @exports IS2CCommonShowSelfCardResp
     * @interface IS2CCommonShowSelfCardResp
     * @property {ICommonResult|null} [result] S2CCommonShowSelfCardResp result
     * @property {string|null} [gameId] S2CCommonShowSelfCardResp gameId
     * @property {Array.<ICardInfo>|null} [cardList] S2CCommonShowSelfCardResp cardList
     */

    /**
     * Constructs a new S2CCommonShowSelfCardResp.
     * @exports S2CCommonShowSelfCardResp
     * @classdesc Represents a S2CCommonShowSelfCardResp.
     * @implements IS2CCommonShowSelfCardResp
     * @constructor
     * @param {IS2CCommonShowSelfCardResp=} [p] Properties to set
     */
    function S2CCommonShowSelfCardResp(p) {
        this.cardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonShowSelfCardResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonShowSelfCardResp
     * @instance
     */
    S2CCommonShowSelfCardResp.prototype.result = null;

    /**
     * S2CCommonShowSelfCardResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonShowSelfCardResp
     * @instance
     */
    S2CCommonShowSelfCardResp.prototype.gameId = "";

    /**
     * S2CCommonShowSelfCardResp cardList.
     * @member {Array.<ICardInfo>} cardList
     * @memberof S2CCommonShowSelfCardResp
     * @instance
     */
    S2CCommonShowSelfCardResp.prototype.cardList = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonShowSelfCardResp message. Does not implicitly {@link S2CCommonShowSelfCardResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonShowSelfCardResp
     * @static
     * @param {IS2CCommonShowSelfCardResp} m S2CCommonShowSelfCardResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonShowSelfCardResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.cardList != null && m.cardList.length) {
            for (var i = 0; i < m.cardList.length; ++i)
                $root.CardInfo.encode(m.cardList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonShowSelfCardResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonShowSelfCardResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonShowSelfCardResp} S2CCommonShowSelfCardResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonShowSelfCardResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonShowSelfCardResp();
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
                if (!(m.cardList && m.cardList.length))
                    m.cardList = [];
                m.cardList.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonShowSelfCardResp;
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

$root.S2CCommonGetStatisticsResp = (function() {

    /**
     * Properties of a S2CCommonGetStatisticsResp.
     * @exports IS2CCommonGetStatisticsResp
     * @interface IS2CCommonGetStatisticsResp
     * @property {ICommonResult|null} [result] S2CCommonGetStatisticsResp result
     * @property {string|null} [gameId] S2CCommonGetStatisticsResp gameId
     * @property {number|null} [insuranceWinlose] S2CCommonGetStatisticsResp insuranceWinlose
     * @property {number|null} [jackpotWinlose] S2CCommonGetStatisticsResp jackpotWinlose
     * @property {Array.<IPlayerStatistic>|null} [playerStatisticList] S2CCommonGetStatisticsResp playerStatisticList
     */

    /**
     * Constructs a new S2CCommonGetStatisticsResp.
     * @exports S2CCommonGetStatisticsResp
     * @classdesc Represents a S2CCommonGetStatisticsResp.
     * @implements IS2CCommonGetStatisticsResp
     * @constructor
     * @param {IS2CCommonGetStatisticsResp=} [p] Properties to set
     */
    function S2CCommonGetStatisticsResp(p) {
        this.playerStatisticList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonGetStatisticsResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonGetStatisticsResp
     * @instance
     */
    S2CCommonGetStatisticsResp.prototype.result = null;

    /**
     * S2CCommonGetStatisticsResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonGetStatisticsResp
     * @instance
     */
    S2CCommonGetStatisticsResp.prototype.gameId = "";

    /**
     * S2CCommonGetStatisticsResp insuranceWinlose.
     * @member {number} insuranceWinlose
     * @memberof S2CCommonGetStatisticsResp
     * @instance
     */
    S2CCommonGetStatisticsResp.prototype.insuranceWinlose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonGetStatisticsResp jackpotWinlose.
     * @member {number} jackpotWinlose
     * @memberof S2CCommonGetStatisticsResp
     * @instance
     */
    S2CCommonGetStatisticsResp.prototype.jackpotWinlose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CCommonGetStatisticsResp playerStatisticList.
     * @member {Array.<IPlayerStatistic>} playerStatisticList
     * @memberof S2CCommonGetStatisticsResp
     * @instance
     */
    S2CCommonGetStatisticsResp.prototype.playerStatisticList = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonGetStatisticsResp message. Does not implicitly {@link S2CCommonGetStatisticsResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonGetStatisticsResp
     * @static
     * @param {IS2CCommonGetStatisticsResp} m S2CCommonGetStatisticsResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonGetStatisticsResp.encode = function encode(m, w) {
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
        if (m.playerStatisticList != null && m.playerStatisticList.length) {
            for (var i = 0; i < m.playerStatisticList.length; ++i)
                $root.PlayerStatistic.encode(m.playerStatisticList[i], w.uint32(42).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonGetStatisticsResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonGetStatisticsResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonGetStatisticsResp} S2CCommonGetStatisticsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonGetStatisticsResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonGetStatisticsResp();
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
                if (!(m.playerStatisticList && m.playerStatisticList.length))
                    m.playerStatisticList = [];
                m.playerStatisticList.push($root.PlayerStatistic.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonGetStatisticsResp;
})();

$root.S2CCommonSimpleReplayResp = (function() {

    /**
     * Properties of a S2CCommonSimpleReplayResp.
     * @exports IS2CCommonSimpleReplayResp
     * @interface IS2CCommonSimpleReplayResp
     * @property {ICommonResult|null} [result] S2CCommonSimpleReplayResp result
     * @property {string|null} [gameId] S2CCommonSimpleReplayResp gameId
     * @property {Array.<ISimpleReplayRecord>|null} [simpleReplayRecord] S2CCommonSimpleReplayResp simpleReplayRecord
     * @property {number|null} [page] S2CCommonSimpleReplayResp page
     * @property {number|null} [pageSize] S2CCommonSimpleReplayResp pageSize
     * @property {number|null} [totalNum] S2CCommonSimpleReplayResp totalNum
     */

    /**
     * Constructs a new S2CCommonSimpleReplayResp.
     * @exports S2CCommonSimpleReplayResp
     * @classdesc Represents a S2CCommonSimpleReplayResp.
     * @implements IS2CCommonSimpleReplayResp
     * @constructor
     * @param {IS2CCommonSimpleReplayResp=} [p] Properties to set
     */
    function S2CCommonSimpleReplayResp(p) {
        this.simpleReplayRecord = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonSimpleReplayResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.result = null;

    /**
     * S2CCommonSimpleReplayResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.gameId = "";

    /**
     * S2CCommonSimpleReplayResp simpleReplayRecord.
     * @member {Array.<ISimpleReplayRecord>} simpleReplayRecord
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.simpleReplayRecord = $util.emptyArray;

    /**
     * S2CCommonSimpleReplayResp page.
     * @member {number} page
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.page = 0;

    /**
     * S2CCommonSimpleReplayResp pageSize.
     * @member {number} pageSize
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.pageSize = 0;

    /**
     * S2CCommonSimpleReplayResp totalNum.
     * @member {number} totalNum
     * @memberof S2CCommonSimpleReplayResp
     * @instance
     */
    S2CCommonSimpleReplayResp.prototype.totalNum = 0;

    /**
     * Encodes the specified S2CCommonSimpleReplayResp message. Does not implicitly {@link S2CCommonSimpleReplayResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonSimpleReplayResp
     * @static
     * @param {IS2CCommonSimpleReplayResp} m S2CCommonSimpleReplayResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonSimpleReplayResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.simpleReplayRecord != null && m.simpleReplayRecord.length) {
            for (var i = 0; i < m.simpleReplayRecord.length; ++i)
                $root.SimpleReplayRecord.encode(m.simpleReplayRecord[i], w.uint32(26).fork()).ldelim();
        }
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(32).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(40).int32(m.pageSize);
        if (m.totalNum != null && Object.hasOwnProperty.call(m, "totalNum"))
            w.uint32(48).int32(m.totalNum);
        return w;
    };

    /**
     * Decodes a S2CCommonSimpleReplayResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonSimpleReplayResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonSimpleReplayResp} S2CCommonSimpleReplayResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonSimpleReplayResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonSimpleReplayResp();
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
                if (!(m.simpleReplayRecord && m.simpleReplayRecord.length))
                    m.simpleReplayRecord = [];
                m.simpleReplayRecord.push($root.SimpleReplayRecord.decode(r, r.uint32()));
                break;
            case 4:
                m.page = r.int32();
                break;
            case 5:
                m.pageSize = r.int32();
                break;
            case 6:
                m.totalNum = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonSimpleReplayResp;
})();

$root.S2CCommonDetailReplayResp = (function() {

    /**
     * Properties of a S2CCommonDetailReplayResp.
     * @exports IS2CCommonDetailReplayResp
     * @interface IS2CCommonDetailReplayResp
     * @property {ICommonResult|null} [result] S2CCommonDetailReplayResp result
     * @property {string|null} [gameId] S2CCommonDetailReplayResp gameId
     * @property {IDetailReplayRecord|null} [detailReplayRecord] S2CCommonDetailReplayResp detailReplayRecord
     */

    /**
     * Constructs a new S2CCommonDetailReplayResp.
     * @exports S2CCommonDetailReplayResp
     * @classdesc Represents a S2CCommonDetailReplayResp.
     * @implements IS2CCommonDetailReplayResp
     * @constructor
     * @param {IS2CCommonDetailReplayResp=} [p] Properties to set
     */
    function S2CCommonDetailReplayResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonDetailReplayResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonDetailReplayResp
     * @instance
     */
    S2CCommonDetailReplayResp.prototype.result = null;

    /**
     * S2CCommonDetailReplayResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonDetailReplayResp
     * @instance
     */
    S2CCommonDetailReplayResp.prototype.gameId = "";

    /**
     * S2CCommonDetailReplayResp detailReplayRecord.
     * @member {IDetailReplayRecord|null|undefined} detailReplayRecord
     * @memberof S2CCommonDetailReplayResp
     * @instance
     */
    S2CCommonDetailReplayResp.prototype.detailReplayRecord = null;

    /**
     * Encodes the specified S2CCommonDetailReplayResp message. Does not implicitly {@link S2CCommonDetailReplayResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonDetailReplayResp
     * @static
     * @param {IS2CCommonDetailReplayResp} m S2CCommonDetailReplayResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonDetailReplayResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.detailReplayRecord != null && Object.hasOwnProperty.call(m, "detailReplayRecord"))
            $root.DetailReplayRecord.encode(m.detailReplayRecord, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonDetailReplayResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonDetailReplayResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonDetailReplayResp} S2CCommonDetailReplayResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonDetailReplayResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonDetailReplayResp();
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
                m.detailReplayRecord = $root.DetailReplayRecord.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonDetailReplayResp;
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

$root.S2CCommonGetPlayerStatisticsResp = (function() {

    /**
     * Properties of a S2CCommonGetPlayerStatisticsResp.
     * @exports IS2CCommonGetPlayerStatisticsResp
     * @interface IS2CCommonGetPlayerStatisticsResp
     * @property {ICommonResult|null} [result] S2CCommonGetPlayerStatisticsResp result
     * @property {string|null} [gameId] S2CCommonGetPlayerStatisticsResp gameId
     * @property {IPlayerStatistic|null} [playerStatistic] S2CCommonGetPlayerStatisticsResp playerStatistic
     */

    /**
     * Constructs a new S2CCommonGetPlayerStatisticsResp.
     * @exports S2CCommonGetPlayerStatisticsResp
     * @classdesc Represents a S2CCommonGetPlayerStatisticsResp.
     * @implements IS2CCommonGetPlayerStatisticsResp
     * @constructor
     * @param {IS2CCommonGetPlayerStatisticsResp=} [p] Properties to set
     */
    function S2CCommonGetPlayerStatisticsResp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonGetPlayerStatisticsResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCommonGetPlayerStatisticsResp
     * @instance
     */
    S2CCommonGetPlayerStatisticsResp.prototype.result = null;

    /**
     * S2CCommonGetPlayerStatisticsResp gameId.
     * @member {string} gameId
     * @memberof S2CCommonGetPlayerStatisticsResp
     * @instance
     */
    S2CCommonGetPlayerStatisticsResp.prototype.gameId = "";

    /**
     * S2CCommonGetPlayerStatisticsResp playerStatistic.
     * @member {IPlayerStatistic|null|undefined} playerStatistic
     * @memberof S2CCommonGetPlayerStatisticsResp
     * @instance
     */
    S2CCommonGetPlayerStatisticsResp.prototype.playerStatistic = null;

    /**
     * Encodes the specified S2CCommonGetPlayerStatisticsResp message. Does not implicitly {@link S2CCommonGetPlayerStatisticsResp.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonGetPlayerStatisticsResp
     * @static
     * @param {IS2CCommonGetPlayerStatisticsResp} m S2CCommonGetPlayerStatisticsResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonGetPlayerStatisticsResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.playerStatistic != null && Object.hasOwnProperty.call(m, "playerStatistic"))
            $root.PlayerStatistic.encode(m.playerStatistic, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCommonGetPlayerStatisticsResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonGetPlayerStatisticsResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonGetPlayerStatisticsResp} S2CCommonGetPlayerStatisticsResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonGetPlayerStatisticsResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonGetPlayerStatisticsResp();
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
                m.playerStatistic = $root.PlayerStatistic.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonGetPlayerStatisticsResp;
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

$root.S2CCommonShowSelfCardNotify = (function() {

    /**
     * Properties of a S2CCommonShowSelfCardNotify.
     * @exports IS2CCommonShowSelfCardNotify
     * @interface IS2CCommonShowSelfCardNotify
     * @property {string|null} [gameId] S2CCommonShowSelfCardNotify gameId
     * @property {string|null} [uid] S2CCommonShowSelfCardNotify uid
     * @property {Array.<ICardInfo>|null} [cardList] S2CCommonShowSelfCardNotify cardList
     */

    /**
     * Constructs a new S2CCommonShowSelfCardNotify.
     * @exports S2CCommonShowSelfCardNotify
     * @classdesc Represents a S2CCommonShowSelfCardNotify.
     * @implements IS2CCommonShowSelfCardNotify
     * @constructor
     * @param {IS2CCommonShowSelfCardNotify=} [p] Properties to set
     */
    function S2CCommonShowSelfCardNotify(p) {
        this.cardList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonShowSelfCardNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonShowSelfCardNotify
     * @instance
     */
    S2CCommonShowSelfCardNotify.prototype.gameId = "";

    /**
     * S2CCommonShowSelfCardNotify uid.
     * @member {string} uid
     * @memberof S2CCommonShowSelfCardNotify
     * @instance
     */
    S2CCommonShowSelfCardNotify.prototype.uid = "";

    /**
     * S2CCommonShowSelfCardNotify cardList.
     * @member {Array.<ICardInfo>} cardList
     * @memberof S2CCommonShowSelfCardNotify
     * @instance
     */
    S2CCommonShowSelfCardNotify.prototype.cardList = $util.emptyArray;

    /**
     * Encodes the specified S2CCommonShowSelfCardNotify message. Does not implicitly {@link S2CCommonShowSelfCardNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonShowSelfCardNotify
     * @static
     * @param {IS2CCommonShowSelfCardNotify} m S2CCommonShowSelfCardNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonShowSelfCardNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        if (m.cardList != null && m.cardList.length) {
            for (var i = 0; i < m.cardList.length; ++i)
                $root.CardInfo.encode(m.cardList[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CCommonShowSelfCardNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonShowSelfCardNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonShowSelfCardNotify} S2CCommonShowSelfCardNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonShowSelfCardNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonShowSelfCardNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.uid = r.string();
                break;
            case 3:
                if (!(m.cardList && m.cardList.length))
                    m.cardList = [];
                m.cardList.push($root.CardInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonShowSelfCardNotify;
})();