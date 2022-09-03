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

    PokerLife.common = (function() {

        /**
         * Namespace common.
         * @memberof PokerLife
         * @namespace
         */
        var common = {};

        common.MessageHeader = (function() {

            /**
             * Properties of a MessageHeader.
             * @memberof PokerLife.common
             * @interface IMessageHeader
             * @property {PokerLife.common.MsgStatus} msgStatus MessageHeader msgStatus
             * @property {PokerLife.common.ErrorCode|null} [errorCode] MessageHeader errorCode
             * @property {string|null} [errorContent] MessageHeader errorContent
             */

            /**
             * Constructs a new MessageHeader.
             * @memberof PokerLife.common
             * @classdesc Represents a MessageHeader.
             * @implements IMessageHeader
             * @constructor
             * @param {PokerLife.common.IMessageHeader=} [p] Properties to set
             */
            function MessageHeader(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * MessageHeader msgStatus.
             * @member {PokerLife.common.MsgStatus} msgStatus
             * @memberof PokerLife.common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.msgStatus = 0;

            /**
             * MessageHeader errorCode.
             * @member {PokerLife.common.ErrorCode} errorCode
             * @memberof PokerLife.common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.errorCode = 0;

            /**
             * MessageHeader errorContent.
             * @member {string} errorContent
             * @memberof PokerLife.common.MessageHeader
             * @instance
             */
            MessageHeader.prototype.errorContent = "";

            /**
             * Encodes the specified MessageHeader message. Does not implicitly {@link PokerLife.common.MessageHeader.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.common.MessageHeader
             * @static
             * @param {PokerLife.common.IMessageHeader} m MessageHeader message or plain object to encode
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
             * @memberof PokerLife.common.MessageHeader
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.common.MessageHeader} MessageHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            MessageHeader.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.common.MessageHeader();
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
         * @name PokerLife.common.MsgStatus
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Failed=1 Failed value
         */
        common.MsgStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Failed"] = 1;
            return values;
        })();

        /**
         * ErrorCode enum.
         * @name PokerLife.common.ErrorCode
         * @enum {number}
         * @property {number} Unknow=0 Unknow value
         */
        common.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknow"] = 0;
            return values;
        })();

        return common;
    })();

    PokerLife.msgId = (function() {

        /**
         * Namespace msgId.
         * @memberof PokerLife
         * @namespace
         */
        var msgId = {};

        /**
         * MsgId enum.
         * @name PokerLife.msgId.MsgId
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
         * @property {number} C2S_GetUserBaseInfo=10 C2S_GetUserBaseInfo value
         * @property {number} S2C_GetUserBaseInfo=11 S2C_GetUserBaseInfo value
         * @property {number} C2S_GetUserAssets=12 C2S_GetUserAssets value
         * @property {number} S2C_GetUserAssets=13 S2C_GetUserAssets value
         * @property {number} C2S_UserAccountInfo=14 C2S_UserAccountInfo value
         * @property {number} S2C_UserAccountInfo=15 S2C_UserAccountInfo value
         * @property {number} C2S_ResetPassword=16 C2S_ResetPassword value
         * @property {number} S2C_ResetPassword=17 S2C_ResetPassword value
         */
        msgId.MsgId = (function() {
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
            values[valuesById[10] = "C2S_GetUserBaseInfo"] = 10;
            values[valuesById[11] = "S2C_GetUserBaseInfo"] = 11;
            values[valuesById[12] = "C2S_GetUserAssets"] = 12;
            values[valuesById[13] = "S2C_GetUserAssets"] = 13;
            values[valuesById[14] = "C2S_UserAccountInfo"] = 14;
            values[valuesById[15] = "S2C_UserAccountInfo"] = 15;
            values[valuesById[16] = "C2S_ResetPassword"] = 16;
            values[valuesById[17] = "S2C_ResetPassword"] = 17;
            return values;
        })();

        return msgId;
    })();

    PokerLife.register = (function() {

        /**
         * Namespace register.
         * @memberof PokerLife
         * @namespace
         */
        var register = {};

        register.C2S_Register = (function() {

            /**
             * Properties of a C2S_Register.
             * @memberof PokerLife.register
             * @interface IC2S_Register
             * @property {PokerLife.userInfo.IUserBaseInfo} baseInfo C2S_Register baseInfo
             * @property {string} password C2S_Register password
             * @property {string} smsCode C2S_Register smsCode
             */

            /**
             * Constructs a new C2S_Register.
             * @memberof PokerLife.register
             * @classdesc Represents a C2S_Register.
             * @implements IC2S_Register
             * @constructor
             * @param {PokerLife.register.IC2S_Register=} [p] Properties to set
             */
            function C2S_Register(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_Register baseInfo.
             * @member {PokerLife.userInfo.IUserBaseInfo} baseInfo
             * @memberof PokerLife.register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.baseInfo = null;

            /**
             * C2S_Register password.
             * @member {string} password
             * @memberof PokerLife.register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.password = "";

            /**
             * C2S_Register smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.register.C2S_Register
             * @instance
             */
            C2S_Register.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_Register message. Does not implicitly {@link PokerLife.register.C2S_Register.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.C2S_Register
             * @static
             * @param {PokerLife.register.IC2S_Register} m C2S_Register message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_Register.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.userInfo.UserBaseInfo.encode(m.baseInfo, w.uint32(10).fork()).ldelim();
                w.uint32(18).string(m.password);
                w.uint32(26).string(m.smsCode);
                return w;
            };

            /**
             * Decodes a C2S_Register message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.register.C2S_Register
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.C2S_Register} C2S_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_Register.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.C2S_Register();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.baseInfo = $root.PokerLife.userInfo.UserBaseInfo.decode(r, r.uint32());
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

        register.S2C_Register = (function() {

            /**
             * Properties of a S2C_Register.
             * @memberof PokerLife.register
             * @interface IS2C_Register
             * @property {boolean} result S2C_Register result
             */

            /**
             * Constructs a new S2C_Register.
             * @memberof PokerLife.register
             * @classdesc Represents a S2C_Register.
             * @implements IS2C_Register
             * @constructor
             * @param {PokerLife.register.IS2C_Register=} [p] Properties to set
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
             * @memberof PokerLife.register.S2C_Register
             * @instance
             */
            S2C_Register.prototype.result = false;

            /**
             * Encodes the specified S2C_Register message. Does not implicitly {@link PokerLife.register.S2C_Register.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.S2C_Register
             * @static
             * @param {PokerLife.register.IS2C_Register} m S2C_Register message or plain object to encode
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
             * @memberof PokerLife.register.S2C_Register
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.S2C_Register} S2C_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_Register.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.S2C_Register();
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

        register.C2S_GetSmsCode = (function() {

            /**
             * Properties of a C2S_GetSmsCode.
             * @memberof PokerLife.register
             * @interface IC2S_GetSmsCode
             * @property {PokerLife.register.SmsCodeType} smsCodeType C2S_GetSmsCode smsCodeType
             */

            /**
             * Constructs a new C2S_GetSmsCode.
             * @memberof PokerLife.register
             * @classdesc Represents a C2S_GetSmsCode.
             * @implements IC2S_GetSmsCode
             * @constructor
             * @param {PokerLife.register.IC2S_GetSmsCode=} [p] Properties to set
             */
            function C2S_GetSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_GetSmsCode smsCodeType.
             * @member {PokerLife.register.SmsCodeType} smsCodeType
             * @memberof PokerLife.register.C2S_GetSmsCode
             * @instance
             */
            C2S_GetSmsCode.prototype.smsCodeType = 0;

            /**
             * Encodes the specified C2S_GetSmsCode message. Does not implicitly {@link PokerLife.register.C2S_GetSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.C2S_GetSmsCode
             * @static
             * @param {PokerLife.register.IC2S_GetSmsCode} m C2S_GetSmsCode message or plain object to encode
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
             * @memberof PokerLife.register.C2S_GetSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.C2S_GetSmsCode} C2S_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.C2S_GetSmsCode();
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

        register.S2C_GetSmsCode = (function() {

            /**
             * Properties of a S2C_GetSmsCode.
             * @memberof PokerLife.register
             * @interface IS2C_GetSmsCode
             * @property {PokerLife.register.SmsCodeType} smsCodeType S2C_GetSmsCode smsCodeType
             * @property {number} smsCode S2C_GetSmsCode smsCode
             */

            /**
             * Constructs a new S2C_GetSmsCode.
             * @memberof PokerLife.register
             * @classdesc Represents a S2C_GetSmsCode.
             * @implements IS2C_GetSmsCode
             * @constructor
             * @param {PokerLife.register.IS2C_GetSmsCode=} [p] Properties to set
             */
            function S2C_GetSmsCode(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetSmsCode smsCodeType.
             * @member {PokerLife.register.SmsCodeType} smsCodeType
             * @memberof PokerLife.register.S2C_GetSmsCode
             * @instance
             */
            S2C_GetSmsCode.prototype.smsCodeType = 0;

            /**
             * S2C_GetSmsCode smsCode.
             * @member {number} smsCode
             * @memberof PokerLife.register.S2C_GetSmsCode
             * @instance
             */
            S2C_GetSmsCode.prototype.smsCode = 0;

            /**
             * Encodes the specified S2C_GetSmsCode message. Does not implicitly {@link PokerLife.register.S2C_GetSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.S2C_GetSmsCode
             * @static
             * @param {PokerLife.register.IS2C_GetSmsCode} m S2C_GetSmsCode message or plain object to encode
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
             * @memberof PokerLife.register.S2C_GetSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.S2C_GetSmsCode} S2C_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.S2C_GetSmsCode();
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

        register.C2S_LoginWithSmsCode = (function() {

            /**
             * Properties of a C2S_LoginWithSmsCode.
             * @memberof PokerLife.register
             * @interface IC2S_LoginWithSmsCode
             * @property {string} phoneNum C2S_LoginWithSmsCode phoneNum
             * @property {string} smsCode C2S_LoginWithSmsCode smsCode
             */

            /**
             * Constructs a new C2S_LoginWithSmsCode.
             * @memberof PokerLife.register
             * @classdesc Represents a C2S_LoginWithSmsCode.
             * @implements IC2S_LoginWithSmsCode
             * @constructor
             * @param {PokerLife.register.IC2S_LoginWithSmsCode=} [p] Properties to set
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
             * @memberof PokerLife.register.C2S_LoginWithSmsCode
             * @instance
             */
            C2S_LoginWithSmsCode.prototype.phoneNum = "";

            /**
             * C2S_LoginWithSmsCode smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.register.C2S_LoginWithSmsCode
             * @instance
             */
            C2S_LoginWithSmsCode.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_LoginWithSmsCode message. Does not implicitly {@link PokerLife.register.C2S_LoginWithSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.C2S_LoginWithSmsCode
             * @static
             * @param {PokerLife.register.IC2S_LoginWithSmsCode} m C2S_LoginWithSmsCode message or plain object to encode
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
             * @memberof PokerLife.register.C2S_LoginWithSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.C2S_LoginWithSmsCode} C2S_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_LoginWithSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.C2S_LoginWithSmsCode();
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

        register.S2C_LoginWithSmsCode = (function() {

            /**
             * Properties of a S2C_LoginWithSmsCode.
             * @memberof PokerLife.register
             * @interface IS2C_LoginWithSmsCode
             * @property {boolean} result S2C_LoginWithSmsCode result
             */

            /**
             * Constructs a new S2C_LoginWithSmsCode.
             * @memberof PokerLife.register
             * @classdesc Represents a S2C_LoginWithSmsCode.
             * @implements IS2C_LoginWithSmsCode
             * @constructor
             * @param {PokerLife.register.IS2C_LoginWithSmsCode=} [p] Properties to set
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
             * @memberof PokerLife.register.S2C_LoginWithSmsCode
             * @instance
             */
            S2C_LoginWithSmsCode.prototype.result = false;

            /**
             * Encodes the specified S2C_LoginWithSmsCode message. Does not implicitly {@link PokerLife.register.S2C_LoginWithSmsCode.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.S2C_LoginWithSmsCode
             * @static
             * @param {PokerLife.register.IS2C_LoginWithSmsCode} m S2C_LoginWithSmsCode message or plain object to encode
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
             * @memberof PokerLife.register.S2C_LoginWithSmsCode
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.S2C_LoginWithSmsCode} S2C_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_LoginWithSmsCode.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.S2C_LoginWithSmsCode();
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

        register.C2S_LoginWithPwd = (function() {

            /**
             * Properties of a C2S_LoginWithPwd.
             * @memberof PokerLife.register
             * @interface IC2S_LoginWithPwd
             * @property {string} phoneNum C2S_LoginWithPwd phoneNum
             * @property {string} password C2S_LoginWithPwd password
             */

            /**
             * Constructs a new C2S_LoginWithPwd.
             * @memberof PokerLife.register
             * @classdesc Represents a C2S_LoginWithPwd.
             * @implements IC2S_LoginWithPwd
             * @constructor
             * @param {PokerLife.register.IC2S_LoginWithPwd=} [p] Properties to set
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
             * @memberof PokerLife.register.C2S_LoginWithPwd
             * @instance
             */
            C2S_LoginWithPwd.prototype.phoneNum = "";

            /**
             * C2S_LoginWithPwd password.
             * @member {string} password
             * @memberof PokerLife.register.C2S_LoginWithPwd
             * @instance
             */
            C2S_LoginWithPwd.prototype.password = "";

            /**
             * Encodes the specified C2S_LoginWithPwd message. Does not implicitly {@link PokerLife.register.C2S_LoginWithPwd.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.C2S_LoginWithPwd
             * @static
             * @param {PokerLife.register.IC2S_LoginWithPwd} m C2S_LoginWithPwd message or plain object to encode
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
             * @memberof PokerLife.register.C2S_LoginWithPwd
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.C2S_LoginWithPwd} C2S_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_LoginWithPwd.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.C2S_LoginWithPwd();
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

        register.S2C_LoginWithPwd = (function() {

            /**
             * Properties of a S2C_LoginWithPwd.
             * @memberof PokerLife.register
             * @interface IS2C_LoginWithPwd
             * @property {boolean} result S2C_LoginWithPwd result
             */

            /**
             * Constructs a new S2C_LoginWithPwd.
             * @memberof PokerLife.register
             * @classdesc Represents a S2C_LoginWithPwd.
             * @implements IS2C_LoginWithPwd
             * @constructor
             * @param {PokerLife.register.IS2C_LoginWithPwd=} [p] Properties to set
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
             * @memberof PokerLife.register.S2C_LoginWithPwd
             * @instance
             */
            S2C_LoginWithPwd.prototype.result = false;

            /**
             * Encodes the specified S2C_LoginWithPwd message. Does not implicitly {@link PokerLife.register.S2C_LoginWithPwd.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.S2C_LoginWithPwd
             * @static
             * @param {PokerLife.register.IS2C_LoginWithPwd} m S2C_LoginWithPwd message or plain object to encode
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
             * @memberof PokerLife.register.S2C_LoginWithPwd
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.S2C_LoginWithPwd} S2C_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_LoginWithPwd.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.S2C_LoginWithPwd();
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

        register.C2S_ResetPassword = (function() {

            /**
             * Properties of a C2S_ResetPassword.
             * @memberof PokerLife.register
             * @interface IC2S_ResetPassword
             * @property {string} phoneNum C2S_ResetPassword phoneNum
             * @property {string} password C2S_ResetPassword password
             * @property {string} smsCode C2S_ResetPassword smsCode
             */

            /**
             * Constructs a new C2S_ResetPassword.
             * @memberof PokerLife.register
             * @classdesc Represents a C2S_ResetPassword.
             * @implements IC2S_ResetPassword
             * @constructor
             * @param {PokerLife.register.IC2S_ResetPassword=} [p] Properties to set
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
             * @memberof PokerLife.register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.phoneNum = "";

            /**
             * C2S_ResetPassword password.
             * @member {string} password
             * @memberof PokerLife.register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.password = "";

            /**
             * C2S_ResetPassword smsCode.
             * @member {string} smsCode
             * @memberof PokerLife.register.C2S_ResetPassword
             * @instance
             */
            C2S_ResetPassword.prototype.smsCode = "";

            /**
             * Encodes the specified C2S_ResetPassword message. Does not implicitly {@link PokerLife.register.C2S_ResetPassword.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.C2S_ResetPassword
             * @static
             * @param {PokerLife.register.IC2S_ResetPassword} m C2S_ResetPassword message or plain object to encode
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
             * @memberof PokerLife.register.C2S_ResetPassword
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.C2S_ResetPassword} C2S_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_ResetPassword.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.C2S_ResetPassword();
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

        register.S2C_ResetPassword = (function() {

            /**
             * Properties of a S2C_ResetPassword.
             * @memberof PokerLife.register
             * @interface IS2C_ResetPassword
             * @property {boolean} result S2C_ResetPassword result
             */

            /**
             * Constructs a new S2C_ResetPassword.
             * @memberof PokerLife.register
             * @classdesc Represents a S2C_ResetPassword.
             * @implements IS2C_ResetPassword
             * @constructor
             * @param {PokerLife.register.IS2C_ResetPassword=} [p] Properties to set
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
             * @memberof PokerLife.register.S2C_ResetPassword
             * @instance
             */
            S2C_ResetPassword.prototype.result = false;

            /**
             * Encodes the specified S2C_ResetPassword message. Does not implicitly {@link PokerLife.register.S2C_ResetPassword.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.register.S2C_ResetPassword
             * @static
             * @param {PokerLife.register.IS2C_ResetPassword} m S2C_ResetPassword message or plain object to encode
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
             * @memberof PokerLife.register.S2C_ResetPassword
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.register.S2C_ResetPassword} S2C_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_ResetPassword.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.register.S2C_ResetPassword();
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
         * @name PokerLife.register.SmsCodeType
         * @enum {number}
         * @property {number} Register=0 Register value
         * @property {number} Login=1 Login value
         * @property {number} ResetPassword=2 ResetPassword value
         */
        register.SmsCodeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Register"] = 0;
            values[valuesById[1] = "Login"] = 1;
            values[valuesById[2] = "ResetPassword"] = 2;
            return values;
        })();

        return register;
    })();

    PokerLife.userInfo = (function() {

        /**
         * Namespace userInfo.
         * @memberof PokerLife
         * @namespace
         */
        var userInfo = {};

        userInfo.C2S_GetUserInfo = (function() {

            /**
             * Properties of a C2S_GetUserInfo.
             * @memberof PokerLife.userInfo
             * @interface IC2S_GetUserInfo
             * @property {number} uid C2S_GetUserInfo uid
             */

            /**
             * Constructs a new C2S_GetUserInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a C2S_GetUserInfo.
             * @implements IC2S_GetUserInfo
             * @constructor
             * @param {PokerLife.userInfo.IC2S_GetUserInfo=} [p] Properties to set
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
             * @memberof PokerLife.userInfo.C2S_GetUserInfo
             * @instance
             */
            C2S_GetUserInfo.prototype.uid = 0;

            /**
             * Encodes the specified C2S_GetUserInfo message. Does not implicitly {@link PokerLife.userInfo.C2S_GetUserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.C2S_GetUserInfo
             * @static
             * @param {PokerLife.userInfo.IC2S_GetUserInfo} m C2S_GetUserInfo message or plain object to encode
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
             * @memberof PokerLife.userInfo.C2S_GetUserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.C2S_GetUserInfo} C2S_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetUserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.C2S_GetUserInfo();
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

        userInfo.S2C_GetUserInfo = (function() {

            /**
             * Properties of a S2C_GetUserInfo.
             * @memberof PokerLife.userInfo
             * @interface IS2C_GetUserInfo
             * @property {PokerLife.userInfo.IUserInfo} userInfo S2C_GetUserInfo userInfo
             */

            /**
             * Constructs a new S2C_GetUserInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a S2C_GetUserInfo.
             * @implements IS2C_GetUserInfo
             * @constructor
             * @param {PokerLife.userInfo.IS2C_GetUserInfo=} [p] Properties to set
             */
            function S2C_GetUserInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetUserInfo userInfo.
             * @member {PokerLife.userInfo.IUserInfo} userInfo
             * @memberof PokerLife.userInfo.S2C_GetUserInfo
             * @instance
             */
            S2C_GetUserInfo.prototype.userInfo = null;

            /**
             * Encodes the specified S2C_GetUserInfo message. Does not implicitly {@link PokerLife.userInfo.S2C_GetUserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.S2C_GetUserInfo
             * @static
             * @param {PokerLife.userInfo.IS2C_GetUserInfo} m S2C_GetUserInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_GetUserInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.userInfo.UserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a S2C_GetUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.S2C_GetUserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.S2C_GetUserInfo} S2C_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetUserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.S2C_GetUserInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.userInfo = $root.PokerLife.userInfo.UserInfo.decode(r, r.uint32());
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

        userInfo.C2S_GetUserBaseInfo = (function() {

            /**
             * Properties of a C2S_GetUserBaseInfo.
             * @memberof PokerLife.userInfo
             * @interface IC2S_GetUserBaseInfo
             * @property {number} uid C2S_GetUserBaseInfo uid
             */

            /**
             * Constructs a new C2S_GetUserBaseInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a C2S_GetUserBaseInfo.
             * @implements IC2S_GetUserBaseInfo
             * @constructor
             * @param {PokerLife.userInfo.IC2S_GetUserBaseInfo=} [p] Properties to set
             */
            function C2S_GetUserBaseInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_GetUserBaseInfo uid.
             * @member {number} uid
             * @memberof PokerLife.userInfo.C2S_GetUserBaseInfo
             * @instance
             */
            C2S_GetUserBaseInfo.prototype.uid = 0;

            /**
             * Encodes the specified C2S_GetUserBaseInfo message. Does not implicitly {@link PokerLife.userInfo.C2S_GetUserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.C2S_GetUserBaseInfo
             * @static
             * @param {PokerLife.userInfo.IC2S_GetUserBaseInfo} m C2S_GetUserBaseInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_GetUserBaseInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                return w;
            };

            /**
             * Decodes a C2S_GetUserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.C2S_GetUserBaseInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.C2S_GetUserBaseInfo} C2S_GetUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetUserBaseInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.C2S_GetUserBaseInfo();
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

            return C2S_GetUserBaseInfo;
        })();

        userInfo.S2C_GetUserBaseInfo = (function() {

            /**
             * Properties of a S2C_GetUserBaseInfo.
             * @memberof PokerLife.userInfo
             * @interface IS2C_GetUserBaseInfo
             * @property {PokerLife.userInfo.IUserBaseInfo} userBaseInfo S2C_GetUserBaseInfo userBaseInfo
             */

            /**
             * Constructs a new S2C_GetUserBaseInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a S2C_GetUserBaseInfo.
             * @implements IS2C_GetUserBaseInfo
             * @constructor
             * @param {PokerLife.userInfo.IS2C_GetUserBaseInfo=} [p] Properties to set
             */
            function S2C_GetUserBaseInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetUserBaseInfo userBaseInfo.
             * @member {PokerLife.userInfo.IUserBaseInfo} userBaseInfo
             * @memberof PokerLife.userInfo.S2C_GetUserBaseInfo
             * @instance
             */
            S2C_GetUserBaseInfo.prototype.userBaseInfo = null;

            /**
             * Encodes the specified S2C_GetUserBaseInfo message. Does not implicitly {@link PokerLife.userInfo.S2C_GetUserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.S2C_GetUserBaseInfo
             * @static
             * @param {PokerLife.userInfo.IS2C_GetUserBaseInfo} m S2C_GetUserBaseInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_GetUserBaseInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.userInfo.UserBaseInfo.encode(m.userBaseInfo, w.uint32(10).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a S2C_GetUserBaseInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.S2C_GetUserBaseInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.S2C_GetUserBaseInfo} S2C_GetUserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetUserBaseInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.S2C_GetUserBaseInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.userBaseInfo = $root.PokerLife.userInfo.UserBaseInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("userBaseInfo"))
                    throw $util.ProtocolError("missing required 'userBaseInfo'", { instance: m });
                return m;
            };

            return S2C_GetUserBaseInfo;
        })();

        userInfo.C2S_GetUserAssets = (function() {

            /**
             * Properties of a C2S_GetUserAssets.
             * @memberof PokerLife.userInfo
             * @interface IC2S_GetUserAssets
             * @property {number} uid C2S_GetUserAssets uid
             */

            /**
             * Constructs a new C2S_GetUserAssets.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a C2S_GetUserAssets.
             * @implements IC2S_GetUserAssets
             * @constructor
             * @param {PokerLife.userInfo.IC2S_GetUserAssets=} [p] Properties to set
             */
            function C2S_GetUserAssets(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_GetUserAssets uid.
             * @member {number} uid
             * @memberof PokerLife.userInfo.C2S_GetUserAssets
             * @instance
             */
            C2S_GetUserAssets.prototype.uid = 0;

            /**
             * Encodes the specified C2S_GetUserAssets message. Does not implicitly {@link PokerLife.userInfo.C2S_GetUserAssets.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.C2S_GetUserAssets
             * @static
             * @param {PokerLife.userInfo.IC2S_GetUserAssets} m C2S_GetUserAssets message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_GetUserAssets.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                return w;
            };

            /**
             * Decodes a C2S_GetUserAssets message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.C2S_GetUserAssets
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.C2S_GetUserAssets} C2S_GetUserAssets
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_GetUserAssets.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.C2S_GetUserAssets();
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

            return C2S_GetUserAssets;
        })();

        userInfo.S2C_GetUserAssets = (function() {

            /**
             * Properties of a S2C_GetUserAssets.
             * @memberof PokerLife.userInfo
             * @interface IS2C_GetUserAssets
             * @property {PokerLife.userInfo.IUserAssets} userAssets S2C_GetUserAssets userAssets
             */

            /**
             * Constructs a new S2C_GetUserAssets.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a S2C_GetUserAssets.
             * @implements IS2C_GetUserAssets
             * @constructor
             * @param {PokerLife.userInfo.IS2C_GetUserAssets=} [p] Properties to set
             */
            function S2C_GetUserAssets(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_GetUserAssets userAssets.
             * @member {PokerLife.userInfo.IUserAssets} userAssets
             * @memberof PokerLife.userInfo.S2C_GetUserAssets
             * @instance
             */
            S2C_GetUserAssets.prototype.userAssets = null;

            /**
             * Encodes the specified S2C_GetUserAssets message. Does not implicitly {@link PokerLife.userInfo.S2C_GetUserAssets.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.S2C_GetUserAssets
             * @static
             * @param {PokerLife.userInfo.IS2C_GetUserAssets} m S2C_GetUserAssets message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_GetUserAssets.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.userInfo.UserAssets.encode(m.userAssets, w.uint32(10).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a S2C_GetUserAssets message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.S2C_GetUserAssets
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.S2C_GetUserAssets} S2C_GetUserAssets
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_GetUserAssets.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.S2C_GetUserAssets();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.userAssets = $root.PokerLife.userInfo.UserAssets.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("userAssets"))
                    throw $util.ProtocolError("missing required 'userAssets'", { instance: m });
                return m;
            };

            return S2C_GetUserAssets;
        })();

        userInfo.C2S_UserAccountInfo = (function() {

            /**
             * Properties of a C2S_UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @interface IC2S_UserAccountInfo
             * @property {number} uid C2S_UserAccountInfo uid
             */

            /**
             * Constructs a new C2S_UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a C2S_UserAccountInfo.
             * @implements IC2S_UserAccountInfo
             * @constructor
             * @param {PokerLife.userInfo.IC2S_UserAccountInfo=} [p] Properties to set
             */
            function C2S_UserAccountInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * C2S_UserAccountInfo uid.
             * @member {number} uid
             * @memberof PokerLife.userInfo.C2S_UserAccountInfo
             * @instance
             */
            C2S_UserAccountInfo.prototype.uid = 0;

            /**
             * Encodes the specified C2S_UserAccountInfo message. Does not implicitly {@link PokerLife.userInfo.C2S_UserAccountInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.C2S_UserAccountInfo
             * @static
             * @param {PokerLife.userInfo.IC2S_UserAccountInfo} m C2S_UserAccountInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            C2S_UserAccountInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                return w;
            };

            /**
             * Decodes a C2S_UserAccountInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.C2S_UserAccountInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.C2S_UserAccountInfo} C2S_UserAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            C2S_UserAccountInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.C2S_UserAccountInfo();
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

            return C2S_UserAccountInfo;
        })();

        userInfo.S2C_UserAccountInfo = (function() {

            /**
             * Properties of a S2C_UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @interface IS2C_UserAccountInfo
             * @property {PokerLife.userInfo.IUserAccountInfo} userAccountInfo S2C_UserAccountInfo userAccountInfo
             */

            /**
             * Constructs a new S2C_UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a S2C_UserAccountInfo.
             * @implements IS2C_UserAccountInfo
             * @constructor
             * @param {PokerLife.userInfo.IS2C_UserAccountInfo=} [p] Properties to set
             */
            function S2C_UserAccountInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * S2C_UserAccountInfo userAccountInfo.
             * @member {PokerLife.userInfo.IUserAccountInfo} userAccountInfo
             * @memberof PokerLife.userInfo.S2C_UserAccountInfo
             * @instance
             */
            S2C_UserAccountInfo.prototype.userAccountInfo = null;

            /**
             * Encodes the specified S2C_UserAccountInfo message. Does not implicitly {@link PokerLife.userInfo.S2C_UserAccountInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.S2C_UserAccountInfo
             * @static
             * @param {PokerLife.userInfo.IS2C_UserAccountInfo} m S2C_UserAccountInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            S2C_UserAccountInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                $root.PokerLife.userInfo.UserAccountInfo.encode(m.userAccountInfo, w.uint32(10).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a S2C_UserAccountInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.S2C_UserAccountInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.S2C_UserAccountInfo} S2C_UserAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            S2C_UserAccountInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.S2C_UserAccountInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.userAccountInfo = $root.PokerLife.userInfo.UserAccountInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("userAccountInfo"))
                    throw $util.ProtocolError("missing required 'userAccountInfo'", { instance: m });
                return m;
            };

            return S2C_UserAccountInfo;
        })();

        userInfo.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof PokerLife.userInfo
             * @interface IUserInfo
             * @property {number} uid UserInfo uid
             * @property {PokerLife.userInfo.IUserBaseInfo} baseInfo UserInfo baseInfo
             * @property {PokerLife.userInfo.IUserAssets} userAssets UserInfo userAssets
             * @property {PokerLife.userInfo.IUserAccountInfo} userAccountInfo UserInfo userAccountInfo
             */

            /**
             * Constructs a new UserInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {PokerLife.userInfo.IUserInfo=} [p] Properties to set
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
             * @memberof PokerLife.userInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.uid = 0;

            /**
             * UserInfo baseInfo.
             * @member {PokerLife.userInfo.IUserBaseInfo} baseInfo
             * @memberof PokerLife.userInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.baseInfo = null;

            /**
             * UserInfo userAssets.
             * @member {PokerLife.userInfo.IUserAssets} userAssets
             * @memberof PokerLife.userInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.userAssets = null;

            /**
             * UserInfo userAccountInfo.
             * @member {PokerLife.userInfo.IUserAccountInfo} userAccountInfo
             * @memberof PokerLife.userInfo.UserInfo
             * @instance
             */
            UserInfo.prototype.userAccountInfo = null;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link PokerLife.userInfo.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.UserInfo
             * @static
             * @param {PokerLife.userInfo.IUserInfo} m UserInfo message or plain object to encode
             * @param {protobuf.Writer} [w] Writer to encode to
             * @returns {protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                w.uint32(8).int32(m.uid);
                $root.PokerLife.userInfo.UserBaseInfo.encode(m.baseInfo, w.uint32(18).fork()).ldelim();
                $root.PokerLife.userInfo.UserAssets.encode(m.userAssets, w.uint32(26).fork()).ldelim();
                $root.PokerLife.userInfo.UserAccountInfo.encode(m.userAccountInfo, w.uint32(34).fork()).ldelim();
                return w;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof PokerLife.userInfo.UserInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.UserInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.uid = r.int32();
                        break;
                    case 2:
                        m.baseInfo = $root.PokerLife.userInfo.UserBaseInfo.decode(r, r.uint32());
                        break;
                    case 3:
                        m.userAssets = $root.PokerLife.userInfo.UserAssets.decode(r, r.uint32());
                        break;
                    case 4:
                        m.userAccountInfo = $root.PokerLife.userInfo.UserAccountInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                if (!m.hasOwnProperty("uid"))
                    throw $util.ProtocolError("missing required 'uid'", { instance: m });
                if (!m.hasOwnProperty("baseInfo"))
                    throw $util.ProtocolError("missing required 'baseInfo'", { instance: m });
                if (!m.hasOwnProperty("userAssets"))
                    throw $util.ProtocolError("missing required 'userAssets'", { instance: m });
                if (!m.hasOwnProperty("userAccountInfo"))
                    throw $util.ProtocolError("missing required 'userAccountInfo'", { instance: m });
                return m;
            };

            return UserInfo;
        })();

        userInfo.UserBaseInfo = (function() {

            /**
             * Properties of a UserBaseInfo.
             * @memberof PokerLife.userInfo
             * @interface IUserBaseInfo
             * @property {string} nickName UserBaseInfo nickName
             * @property {string} phoneNum UserBaseInfo phoneNum
             * @property {string} head UserBaseInfo head
             */

            /**
             * Constructs a new UserBaseInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a UserBaseInfo.
             * @implements IUserBaseInfo
             * @constructor
             * @param {PokerLife.userInfo.IUserBaseInfo=} [p] Properties to set
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
             * @memberof PokerLife.userInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.nickName = "";

            /**
             * UserBaseInfo phoneNum.
             * @member {string} phoneNum
             * @memberof PokerLife.userInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.phoneNum = "";

            /**
             * UserBaseInfo head.
             * @member {string} head
             * @memberof PokerLife.userInfo.UserBaseInfo
             * @instance
             */
            UserBaseInfo.prototype.head = "";

            /**
             * Encodes the specified UserBaseInfo message. Does not implicitly {@link PokerLife.userInfo.UserBaseInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.UserBaseInfo
             * @static
             * @param {PokerLife.userInfo.IUserBaseInfo} m UserBaseInfo message or plain object to encode
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
             * @memberof PokerLife.userInfo.UserBaseInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.UserBaseInfo} UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserBaseInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.UserBaseInfo();
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

        userInfo.UserAssets = (function() {

            /**
             * Properties of a UserAssets.
             * @memberof PokerLife.userInfo
             * @interface IUserAssets
             * @property {number} coin UserAssets coin
             * @property {number} diamond UserAssets diamond
             * @property {number} clubPoint UserAssets clubPoint
             * @property {number} unionCoin UserAssets unionCoin
             */

            /**
             * Constructs a new UserAssets.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a UserAssets.
             * @implements IUserAssets
             * @constructor
             * @param {PokerLife.userInfo.IUserAssets=} [p] Properties to set
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
             * @memberof PokerLife.userInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets diamond.
             * @member {number} diamond
             * @memberof PokerLife.userInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets clubPoint.
             * @member {number} clubPoint
             * @memberof PokerLife.userInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.clubPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UserAssets unionCoin.
             * @member {number} unionCoin
             * @memberof PokerLife.userInfo.UserAssets
             * @instance
             */
            UserAssets.prototype.unionCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Encodes the specified UserAssets message. Does not implicitly {@link PokerLife.userInfo.UserAssets.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.UserAssets
             * @static
             * @param {PokerLife.userInfo.IUserAssets} m UserAssets message or plain object to encode
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
             * @memberof PokerLife.userInfo.UserAssets
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.UserAssets} UserAssets
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserAssets.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.UserAssets();
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

        userInfo.UserAccountInfo = (function() {

            /**
             * Properties of a UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @interface IUserAccountInfo
             * @property {PokerLife.userInfo.AccountLevel} accountLevel UserAccountInfo accountLevel
             * @property {PokerLife.userInfo.AccountStauts} accountStatus UserAccountInfo accountStatus
             */

            /**
             * Constructs a new UserAccountInfo.
             * @memberof PokerLife.userInfo
             * @classdesc Represents a UserAccountInfo.
             * @implements IUserAccountInfo
             * @constructor
             * @param {PokerLife.userInfo.IUserAccountInfo=} [p] Properties to set
             */
            function UserAccountInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserAccountInfo accountLevel.
             * @member {PokerLife.userInfo.AccountLevel} accountLevel
             * @memberof PokerLife.userInfo.UserAccountInfo
             * @instance
             */
            UserAccountInfo.prototype.accountLevel = 0;

            /**
             * UserAccountInfo accountStatus.
             * @member {PokerLife.userInfo.AccountStauts} accountStatus
             * @memberof PokerLife.userInfo.UserAccountInfo
             * @instance
             */
            UserAccountInfo.prototype.accountStatus = 0;

            /**
             * Encodes the specified UserAccountInfo message. Does not implicitly {@link PokerLife.userInfo.UserAccountInfo.verify|verify} messages.
             * @function encode
             * @memberof PokerLife.userInfo.UserAccountInfo
             * @static
             * @param {PokerLife.userInfo.IUserAccountInfo} m UserAccountInfo message or plain object to encode
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
             * @memberof PokerLife.userInfo.UserAccountInfo
             * @static
             * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {PokerLife.userInfo.UserAccountInfo} UserAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            UserAccountInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.PokerLife.userInfo.UserAccountInfo();
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
         * @name PokerLife.userInfo.AccountLevel
         * @enum {number}
         * @property {number} Norma=0 Norma value
         * @property {number} Agent=1 Agent value
         * @property {number} Boss=2 Boss value
         */
        userInfo.AccountLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Norma"] = 0;
            values[valuesById[1] = "Agent"] = 1;
            values[valuesById[2] = "Boss"] = 2;
            return values;
        })();

        /**
         * AccountStauts enum.
         * @name PokerLife.userInfo.AccountStauts
         * @enum {number}
         * @property {number} Normal=0 Normal value
         * @property {number} Frozen=1 Frozen value
         */
        userInfo.AccountStauts = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Normal"] = 0;
            values[valuesById[1] = "Frozen"] = 1;
            return values;
        })();

        return userInfo;
    })();

    return PokerLife;
})();