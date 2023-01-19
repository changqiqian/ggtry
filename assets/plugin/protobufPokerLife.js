// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.C2SCreateClub = (function() {

    /**
     * Properties of a C2SCreateClub.
     * @exports IC2SCreateClub
     * @interface IC2SCreateClub
     * @property {number|null} [logo] C2SCreateClub logo
     * @property {number|null} [stamp] C2SCreateClub stamp
     * @property {string|null} [name] C2SCreateClub name
     * @property {string|null} [brief] C2SCreateClub brief
     */

    /**
     * Constructs a new C2SCreateClub.
     * @exports C2SCreateClub
     * @classdesc Represents a C2SCreateClub.
     * @implements IC2SCreateClub
     * @constructor
     * @param {IC2SCreateClub=} [p] Properties to set
     */
    function C2SCreateClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SCreateClub logo.
     * @member {number} logo
     * @memberof C2SCreateClub
     * @instance
     */
    C2SCreateClub.prototype.logo = 0;

    /**
     * C2SCreateClub stamp.
     * @member {number} stamp
     * @memberof C2SCreateClub
     * @instance
     */
    C2SCreateClub.prototype.stamp = 0;

    /**
     * C2SCreateClub name.
     * @member {string} name
     * @memberof C2SCreateClub
     * @instance
     */
    C2SCreateClub.prototype.name = "";

    /**
     * C2SCreateClub brief.
     * @member {string} brief
     * @memberof C2SCreateClub
     * @instance
     */
    C2SCreateClub.prototype.brief = "";

    /**
     * Encodes the specified C2SCreateClub message. Does not implicitly {@link C2SCreateClub.verify|verify} messages.
     * @function encode
     * @memberof C2SCreateClub
     * @static
     * @param {IC2SCreateClub} m C2SCreateClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SCreateClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(8).int32(m.logo);
        if (m.stamp != null && Object.hasOwnProperty.call(m, "stamp"))
            w.uint32(16).int32(m.stamp);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.brief != null && Object.hasOwnProperty.call(m, "brief"))
            w.uint32(34).string(m.brief);
        return w;
    };

    /**
     * Decodes a C2SCreateClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCreateClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SCreateClub} C2SCreateClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCreateClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SCreateClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.logo = r.int32();
                break;
            case 2:
                m.stamp = r.int32();
                break;
            case 3:
                m.name = r.string();
                break;
            case 4:
                m.brief = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SCreateClub;
})();

$root.C2SGetClubInfos = (function() {

    /**
     * Properties of a C2SGetClubInfos.
     * @exports IC2SGetClubInfos
     * @interface IC2SGetClubInfos
     */

    /**
     * Constructs a new C2SGetClubInfos.
     * @exports C2SGetClubInfos
     * @classdesc Represents a C2SGetClubInfos.
     * @implements IC2SGetClubInfos
     * @constructor
     * @param {IC2SGetClubInfos=} [p] Properties to set
     */
    function C2SGetClubInfos(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SGetClubInfos message. Does not implicitly {@link C2SGetClubInfos.verify|verify} messages.
     * @function encode
     * @memberof C2SGetClubInfos
     * @static
     * @param {IC2SGetClubInfos} m C2SGetClubInfos message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetClubInfos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SGetClubInfos message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetClubInfos
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetClubInfos} C2SGetClubInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetClubInfos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetClubInfos();
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

    return C2SGetClubInfos;
})();

$root.C2SEnterClub = (function() {

    /**
     * Properties of a C2SEnterClub.
     * @exports IC2SEnterClub
     * @interface IC2SEnterClub
     * @property {string|null} [clubId] C2SEnterClub clubId
     */

    /**
     * Constructs a new C2SEnterClub.
     * @exports C2SEnterClub
     * @classdesc Represents a C2SEnterClub.
     * @implements IC2SEnterClub
     * @constructor
     * @param {IC2SEnterClub=} [p] Properties to set
     */
    function C2SEnterClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SEnterClub clubId.
     * @member {string} clubId
     * @memberof C2SEnterClub
     * @instance
     */
    C2SEnterClub.prototype.clubId = "";

    /**
     * Encodes the specified C2SEnterClub message. Does not implicitly {@link C2SEnterClub.verify|verify} messages.
     * @function encode
     * @memberof C2SEnterClub
     * @static
     * @param {IC2SEnterClub} m C2SEnterClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SEnterClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SEnterClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEnterClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SEnterClub} C2SEnterClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SEnterClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SEnterClub;
})();

$root.C2SSearchClub = (function() {

    /**
     * Properties of a C2SSearchClub.
     * @exports IC2SSearchClub
     * @interface IC2SSearchClub
     * @property {string|null} [clubId] C2SSearchClub clubId
     */

    /**
     * Constructs a new C2SSearchClub.
     * @exports C2SSearchClub
     * @classdesc Represents a C2SSearchClub.
     * @implements IC2SSearchClub
     * @constructor
     * @param {IC2SSearchClub=} [p] Properties to set
     */
    function C2SSearchClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SSearchClub clubId.
     * @member {string} clubId
     * @memberof C2SSearchClub
     * @instance
     */
    C2SSearchClub.prototype.clubId = "";

    /**
     * Encodes the specified C2SSearchClub message. Does not implicitly {@link C2SSearchClub.verify|verify} messages.
     * @function encode
     * @memberof C2SSearchClub
     * @static
     * @param {IC2SSearchClub} m C2SSearchClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SSearchClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SSearchClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSearchClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SSearchClub} C2SSearchClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSearchClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SSearchClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SSearchClub;
})();

$root.C2SJoinClub = (function() {

    /**
     * Properties of a C2SJoinClub.
     * @exports IC2SJoinClub
     * @interface IC2SJoinClub
     * @property {string|null} [clubId] C2SJoinClub clubId
     */

    /**
     * Constructs a new C2SJoinClub.
     * @exports C2SJoinClub
     * @classdesc Represents a C2SJoinClub.
     * @implements IC2SJoinClub
     * @constructor
     * @param {IC2SJoinClub=} [p] Properties to set
     */
    function C2SJoinClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SJoinClub clubId.
     * @member {string} clubId
     * @memberof C2SJoinClub
     * @instance
     */
    C2SJoinClub.prototype.clubId = "";

    /**
     * Encodes the specified C2SJoinClub message. Does not implicitly {@link C2SJoinClub.verify|verify} messages.
     * @function encode
     * @memberof C2SJoinClub
     * @static
     * @param {IC2SJoinClub} m C2SJoinClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SJoinClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SJoinClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SJoinClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SJoinClub} C2SJoinClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SJoinClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SJoinClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SJoinClub;
})();

$root.C2SGetClubMember = (function() {

    /**
     * Properties of a C2SGetClubMember.
     * @exports IC2SGetClubMember
     * @interface IC2SGetClubMember
     * @property {string|null} [clubId] C2SGetClubMember clubId
     * @property {number|null} [page] C2SGetClubMember page
     * @property {number|null} [pageSize] C2SGetClubMember pageSize
     */

    /**
     * Constructs a new C2SGetClubMember.
     * @exports C2SGetClubMember
     * @classdesc Represents a C2SGetClubMember.
     * @implements IC2SGetClubMember
     * @constructor
     * @param {IC2SGetClubMember=} [p] Properties to set
     */
    function C2SGetClubMember(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetClubMember clubId.
     * @member {string} clubId
     * @memberof C2SGetClubMember
     * @instance
     */
    C2SGetClubMember.prototype.clubId = "";

    /**
     * C2SGetClubMember page.
     * @member {number} page
     * @memberof C2SGetClubMember
     * @instance
     */
    C2SGetClubMember.prototype.page = 0;

    /**
     * C2SGetClubMember pageSize.
     * @member {number} pageSize
     * @memberof C2SGetClubMember
     * @instance
     */
    C2SGetClubMember.prototype.pageSize = 0;

    /**
     * Encodes the specified C2SGetClubMember message. Does not implicitly {@link C2SGetClubMember.verify|verify} messages.
     * @function encode
     * @memberof C2SGetClubMember
     * @static
     * @param {IC2SGetClubMember} m C2SGetClubMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetClubMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
            w.uint32(16).int32(m.page);
        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
            w.uint32(24).int32(m.pageSize);
        return w;
    };

    /**
     * Decodes a C2SGetClubMember message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetClubMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetClubMember} C2SGetClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetClubMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetClubMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
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

    return C2SGetClubMember;
})();

$root.C2SAddClubMember = (function() {

    /**
     * Properties of a C2SAddClubMember.
     * @exports IC2SAddClubMember
     * @interface IC2SAddClubMember
     * @property {string|null} [clubId] C2SAddClubMember clubId
     * @property {Array.<string>|null} [uids] C2SAddClubMember uids
     * @property {boolean|null} [agree] C2SAddClubMember agree
     */

    /**
     * Constructs a new C2SAddClubMember.
     * @exports C2SAddClubMember
     * @classdesc Represents a C2SAddClubMember.
     * @implements IC2SAddClubMember
     * @constructor
     * @param {IC2SAddClubMember=} [p] Properties to set
     */
    function C2SAddClubMember(p) {
        this.uids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SAddClubMember clubId.
     * @member {string} clubId
     * @memberof C2SAddClubMember
     * @instance
     */
    C2SAddClubMember.prototype.clubId = "";

    /**
     * C2SAddClubMember uids.
     * @member {Array.<string>} uids
     * @memberof C2SAddClubMember
     * @instance
     */
    C2SAddClubMember.prototype.uids = $util.emptyArray;

    /**
     * C2SAddClubMember agree.
     * @member {boolean} agree
     * @memberof C2SAddClubMember
     * @instance
     */
    C2SAddClubMember.prototype.agree = false;

    /**
     * Encodes the specified C2SAddClubMember message. Does not implicitly {@link C2SAddClubMember.verify|verify} messages.
     * @function encode
     * @memberof C2SAddClubMember
     * @static
     * @param {IC2SAddClubMember} m C2SAddClubMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SAddClubMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.uids != null && m.uids.length) {
            for (var i = 0; i < m.uids.length; ++i)
                w.uint32(18).string(m.uids[i]);
        }
        if (m.agree != null && Object.hasOwnProperty.call(m, "agree"))
            w.uint32(24).bool(m.agree);
        return w;
    };

    /**
     * Decodes a C2SAddClubMember message from the specified reader or buffer.
     * @function decode
     * @memberof C2SAddClubMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SAddClubMember} C2SAddClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SAddClubMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SAddClubMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                if (!(m.uids && m.uids.length))
                    m.uids = [];
                m.uids.push(r.string());
                break;
            case 3:
                m.agree = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SAddClubMember;
})();

$root.C2SDismissClub = (function() {

    /**
     * Properties of a C2SDismissClub.
     * @exports IC2SDismissClub
     * @interface IC2SDismissClub
     * @property {string|null} [clubId] C2SDismissClub clubId
     */

    /**
     * Constructs a new C2SDismissClub.
     * @exports C2SDismissClub
     * @classdesc Represents a C2SDismissClub.
     * @implements IC2SDismissClub
     * @constructor
     * @param {IC2SDismissClub=} [p] Properties to set
     */
    function C2SDismissClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SDismissClub clubId.
     * @member {string} clubId
     * @memberof C2SDismissClub
     * @instance
     */
    C2SDismissClub.prototype.clubId = "";

    /**
     * Encodes the specified C2SDismissClub message. Does not implicitly {@link C2SDismissClub.verify|verify} messages.
     * @function encode
     * @memberof C2SDismissClub
     * @static
     * @param {IC2SDismissClub} m C2SDismissClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SDismissClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SDismissClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SDismissClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SDismissClub} C2SDismissClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SDismissClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SDismissClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SDismissClub;
})();

$root.C2SQuitClub = (function() {

    /**
     * Properties of a C2SQuitClub.
     * @exports IC2SQuitClub
     * @interface IC2SQuitClub
     * @property {string|null} [clubId] C2SQuitClub clubId
     */

    /**
     * Constructs a new C2SQuitClub.
     * @exports C2SQuitClub
     * @classdesc Represents a C2SQuitClub.
     * @implements IC2SQuitClub
     * @constructor
     * @param {IC2SQuitClub=} [p] Properties to set
     */
    function C2SQuitClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SQuitClub clubId.
     * @member {string} clubId
     * @memberof C2SQuitClub
     * @instance
     */
    C2SQuitClub.prototype.clubId = "";

    /**
     * Encodes the specified C2SQuitClub message. Does not implicitly {@link C2SQuitClub.verify|verify} messages.
     * @function encode
     * @memberof C2SQuitClub
     * @static
     * @param {IC2SQuitClub} m C2SQuitClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SQuitClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SQuitClub message from the specified reader or buffer.
     * @function decode
     * @memberof C2SQuitClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SQuitClub} C2SQuitClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SQuitClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SQuitClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SQuitClub;
})();

$root.C2SRemoveMember = (function() {

    /**
     * Properties of a C2SRemoveMember.
     * @exports IC2SRemoveMember
     * @interface IC2SRemoveMember
     * @property {string|null} [clubId] C2SRemoveMember clubId
     * @property {Array.<string>|null} [uids] C2SRemoveMember uids
     */

    /**
     * Constructs a new C2SRemoveMember.
     * @exports C2SRemoveMember
     * @classdesc Represents a C2SRemoveMember.
     * @implements IC2SRemoveMember
     * @constructor
     * @param {IC2SRemoveMember=} [p] Properties to set
     */
    function C2SRemoveMember(p) {
        this.uids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SRemoveMember clubId.
     * @member {string} clubId
     * @memberof C2SRemoveMember
     * @instance
     */
    C2SRemoveMember.prototype.clubId = "";

    /**
     * C2SRemoveMember uids.
     * @member {Array.<string>} uids
     * @memberof C2SRemoveMember
     * @instance
     */
    C2SRemoveMember.prototype.uids = $util.emptyArray;

    /**
     * Encodes the specified C2SRemoveMember message. Does not implicitly {@link C2SRemoveMember.verify|verify} messages.
     * @function encode
     * @memberof C2SRemoveMember
     * @static
     * @param {IC2SRemoveMember} m C2SRemoveMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SRemoveMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.uids != null && m.uids.length) {
            for (var i = 0; i < m.uids.length; ++i)
                w.uint32(18).string(m.uids[i]);
        }
        return w;
    };

    /**
     * Decodes a C2SRemoveMember message from the specified reader or buffer.
     * @function decode
     * @memberof C2SRemoveMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SRemoveMember} C2SRemoveMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SRemoveMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SRemoveMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                if (!(m.uids && m.uids.length))
                    m.uids = [];
                m.uids.push(r.string());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SRemoveMember;
})();

$root.C2SModifyClubInfo = (function() {

    /**
     * Properties of a C2SModifyClubInfo.
     * @exports IC2SModifyClubInfo
     * @interface IC2SModifyClubInfo
     * @property {string|null} [clubId] C2SModifyClubInfo clubId
     * @property {string|null} [newName] C2SModifyClubInfo newName
     * @property {string|null} [newBrief] C2SModifyClubInfo newBrief
     * @property {number|null} [newLogo] C2SModifyClubInfo newLogo
     * @property {number|null} [newStamp] C2SModifyClubInfo newStamp
     */

    /**
     * Constructs a new C2SModifyClubInfo.
     * @exports C2SModifyClubInfo
     * @classdesc Represents a C2SModifyClubInfo.
     * @implements IC2SModifyClubInfo
     * @constructor
     * @param {IC2SModifyClubInfo=} [p] Properties to set
     */
    function C2SModifyClubInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SModifyClubInfo clubId.
     * @member {string} clubId
     * @memberof C2SModifyClubInfo
     * @instance
     */
    C2SModifyClubInfo.prototype.clubId = "";

    /**
     * C2SModifyClubInfo newName.
     * @member {string} newName
     * @memberof C2SModifyClubInfo
     * @instance
     */
    C2SModifyClubInfo.prototype.newName = "";

    /**
     * C2SModifyClubInfo newBrief.
     * @member {string} newBrief
     * @memberof C2SModifyClubInfo
     * @instance
     */
    C2SModifyClubInfo.prototype.newBrief = "";

    /**
     * C2SModifyClubInfo newLogo.
     * @member {number} newLogo
     * @memberof C2SModifyClubInfo
     * @instance
     */
    C2SModifyClubInfo.prototype.newLogo = 0;

    /**
     * C2SModifyClubInfo newStamp.
     * @member {number} newStamp
     * @memberof C2SModifyClubInfo
     * @instance
     */
    C2SModifyClubInfo.prototype.newStamp = 0;

    /**
     * Encodes the specified C2SModifyClubInfo message. Does not implicitly {@link C2SModifyClubInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SModifyClubInfo
     * @static
     * @param {IC2SModifyClubInfo} m C2SModifyClubInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SModifyClubInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.newName != null && Object.hasOwnProperty.call(m, "newName"))
            w.uint32(18).string(m.newName);
        if (m.newBrief != null && Object.hasOwnProperty.call(m, "newBrief"))
            w.uint32(26).string(m.newBrief);
        if (m.newLogo != null && Object.hasOwnProperty.call(m, "newLogo"))
            w.uint32(32).int32(m.newLogo);
        if (m.newStamp != null && Object.hasOwnProperty.call(m, "newStamp"))
            w.uint32(40).int32(m.newStamp);
        return w;
    };

    /**
     * Decodes a C2SModifyClubInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SModifyClubInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SModifyClubInfo} C2SModifyClubInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SModifyClubInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SModifyClubInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.newName = r.string();
                break;
            case 3:
                m.newBrief = r.string();
                break;
            case 4:
                m.newLogo = r.int32();
                break;
            case 5:
                m.newStamp = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SModifyClubInfo;
})();

$root.C2SShareClubScore = (function() {

    /**
     * Properties of a C2SShareClubScore.
     * @exports IC2SShareClubScore
     * @interface IC2SShareClubScore
     * @property {string|null} [clubId] C2SShareClubScore clubId
     * @property {string|null} [uid] C2SShareClubScore uid
     * @property {number|null} [amount] C2SShareClubScore amount
     */

    /**
     * Constructs a new C2SShareClubScore.
     * @exports C2SShareClubScore
     * @classdesc Represents a C2SShareClubScore.
     * @implements IC2SShareClubScore
     * @constructor
     * @param {IC2SShareClubScore=} [p] Properties to set
     */
    function C2SShareClubScore(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SShareClubScore clubId.
     * @member {string} clubId
     * @memberof C2SShareClubScore
     * @instance
     */
    C2SShareClubScore.prototype.clubId = "";

    /**
     * C2SShareClubScore uid.
     * @member {string} uid
     * @memberof C2SShareClubScore
     * @instance
     */
    C2SShareClubScore.prototype.uid = "";

    /**
     * C2SShareClubScore amount.
     * @member {number} amount
     * @memberof C2SShareClubScore
     * @instance
     */
    C2SShareClubScore.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified C2SShareClubScore message. Does not implicitly {@link C2SShareClubScore.verify|verify} messages.
     * @function encode
     * @memberof C2SShareClubScore
     * @static
     * @param {IC2SShareClubScore} m C2SShareClubScore message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SShareClubScore.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        return w;
    };

    /**
     * Decodes a C2SShareClubScore message from the specified reader or buffer.
     * @function decode
     * @memberof C2SShareClubScore
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SShareClubScore} C2SShareClubScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SShareClubScore.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SShareClubScore();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.uid = r.string();
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

    return C2SShareClubScore;
})();

$root.C2SModifyMemberRole = (function() {

    /**
     * Properties of a C2SModifyMemberRole.
     * @exports IC2SModifyMemberRole
     * @interface IC2SModifyMemberRole
     * @property {string|null} [clubId] C2SModifyMemberRole clubId
     * @property {string|null} [uid] C2SModifyMemberRole uid
     * @property {ClubMemberType|null} [memberType] C2SModifyMemberRole memberType
     */

    /**
     * Constructs a new C2SModifyMemberRole.
     * @exports C2SModifyMemberRole
     * @classdesc Represents a C2SModifyMemberRole.
     * @implements IC2SModifyMemberRole
     * @constructor
     * @param {IC2SModifyMemberRole=} [p] Properties to set
     */
    function C2SModifyMemberRole(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SModifyMemberRole clubId.
     * @member {string} clubId
     * @memberof C2SModifyMemberRole
     * @instance
     */
    C2SModifyMemberRole.prototype.clubId = "";

    /**
     * C2SModifyMemberRole uid.
     * @member {string} uid
     * @memberof C2SModifyMemberRole
     * @instance
     */
    C2SModifyMemberRole.prototype.uid = "";

    /**
     * C2SModifyMemberRole memberType.
     * @member {ClubMemberType} memberType
     * @memberof C2SModifyMemberRole
     * @instance
     */
    C2SModifyMemberRole.prototype.memberType = 0;

    /**
     * Encodes the specified C2SModifyMemberRole message. Does not implicitly {@link C2SModifyMemberRole.verify|verify} messages.
     * @function encode
     * @memberof C2SModifyMemberRole
     * @static
     * @param {IC2SModifyMemberRole} m C2SModifyMemberRole message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SModifyMemberRole.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        if (m.memberType != null && Object.hasOwnProperty.call(m, "memberType"))
            w.uint32(24).int32(m.memberType);
        return w;
    };

    /**
     * Decodes a C2SModifyMemberRole message from the specified reader or buffer.
     * @function decode
     * @memberof C2SModifyMemberRole
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SModifyMemberRole} C2SModifyMemberRole
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SModifyMemberRole.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SModifyMemberRole();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.uid = r.string();
                break;
            case 3:
                m.memberType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SModifyMemberRole;
})();

$root.C2SCreateClubGame = (function() {

    /**
     * Properties of a C2SCreateClubGame.
     * @exports IC2SCreateClubGame
     * @interface IC2SCreateClubGame
     * @property {string|null} [clubId] C2SCreateClubGame clubId
     * @property {IBasicTexasConfig|null} [texasConfig] C2SCreateClubGame texasConfig
     */

    /**
     * Constructs a new C2SCreateClubGame.
     * @exports C2SCreateClubGame
     * @classdesc Represents a C2SCreateClubGame.
     * @implements IC2SCreateClubGame
     * @constructor
     * @param {IC2SCreateClubGame=} [p] Properties to set
     */
    function C2SCreateClubGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SCreateClubGame clubId.
     * @member {string} clubId
     * @memberof C2SCreateClubGame
     * @instance
     */
    C2SCreateClubGame.prototype.clubId = "";

    /**
     * C2SCreateClubGame texasConfig.
     * @member {IBasicTexasConfig|null|undefined} texasConfig
     * @memberof C2SCreateClubGame
     * @instance
     */
    C2SCreateClubGame.prototype.texasConfig = null;

    /**
     * Encodes the specified C2SCreateClubGame message. Does not implicitly {@link C2SCreateClubGame.verify|verify} messages.
     * @function encode
     * @memberof C2SCreateClubGame
     * @static
     * @param {IC2SCreateClubGame} m C2SCreateClubGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SCreateClubGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.texasConfig != null && Object.hasOwnProperty.call(m, "texasConfig"))
            $root.BasicTexasConfig.encode(m.texasConfig, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a C2SCreateClubGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCreateClubGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SCreateClubGame} C2SCreateClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCreateClubGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SCreateClubGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.texasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SCreateClubGame;
})();

$root.C2SGetClubTexasGameInfo = (function() {

    /**
     * Properties of a C2SGetClubTexasGameInfo.
     * @exports IC2SGetClubTexasGameInfo
     * @interface IC2SGetClubTexasGameInfo
     * @property {string|null} [clubId] C2SGetClubTexasGameInfo clubId
     */

    /**
     * Constructs a new C2SGetClubTexasGameInfo.
     * @exports C2SGetClubTexasGameInfo
     * @classdesc Represents a C2SGetClubTexasGameInfo.
     * @implements IC2SGetClubTexasGameInfo
     * @constructor
     * @param {IC2SGetClubTexasGameInfo=} [p] Properties to set
     */
    function C2SGetClubTexasGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetClubTexasGameInfo clubId.
     * @member {string} clubId
     * @memberof C2SGetClubTexasGameInfo
     * @instance
     */
    C2SGetClubTexasGameInfo.prototype.clubId = "";

    /**
     * Encodes the specified C2SGetClubTexasGameInfo message. Does not implicitly {@link C2SGetClubTexasGameInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SGetClubTexasGameInfo
     * @static
     * @param {IC2SGetClubTexasGameInfo} m C2SGetClubTexasGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetClubTexasGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SGetClubTexasGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetClubTexasGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetClubTexasGameInfo} C2SGetClubTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetClubTexasGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetClubTexasGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGetClubTexasGameInfo;
})();

$root.C2SGetClubSubGameInfo = (function() {

    /**
     * Properties of a C2SGetClubSubGameInfo.
     * @exports IC2SGetClubSubGameInfo
     * @interface IC2SGetClubSubGameInfo
     * @property {string|null} [clubId] C2SGetClubSubGameInfo clubId
     */

    /**
     * Constructs a new C2SGetClubSubGameInfo.
     * @exports C2SGetClubSubGameInfo
     * @classdesc Represents a C2SGetClubSubGameInfo.
     * @implements IC2SGetClubSubGameInfo
     * @constructor
     * @param {IC2SGetClubSubGameInfo=} [p] Properties to set
     */
    function C2SGetClubSubGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SGetClubSubGameInfo clubId.
     * @member {string} clubId
     * @memberof C2SGetClubSubGameInfo
     * @instance
     */
    C2SGetClubSubGameInfo.prototype.clubId = "";

    /**
     * Encodes the specified C2SGetClubSubGameInfo message. Does not implicitly {@link C2SGetClubSubGameInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SGetClubSubGameInfo
     * @static
     * @param {IC2SGetClubSubGameInfo} m C2SGetClubSubGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetClubSubGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a C2SGetClubSubGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetClubSubGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetClubSubGameInfo} C2SGetClubSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetClubSubGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetClubSubGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SGetClubSubGameInfo;
})();

$root.C2SDismissClubGame = (function() {

    /**
     * Properties of a C2SDismissClubGame.
     * @exports IC2SDismissClubGame
     * @interface IC2SDismissClubGame
     * @property {string|null} [clubId] C2SDismissClubGame clubId
     * @property {string|null} [gameId] C2SDismissClubGame gameId
     */

    /**
     * Constructs a new C2SDismissClubGame.
     * @exports C2SDismissClubGame
     * @classdesc Represents a C2SDismissClubGame.
     * @implements IC2SDismissClubGame
     * @constructor
     * @param {IC2SDismissClubGame=} [p] Properties to set
     */
    function C2SDismissClubGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SDismissClubGame clubId.
     * @member {string} clubId
     * @memberof C2SDismissClubGame
     * @instance
     */
    C2SDismissClubGame.prototype.clubId = "";

    /**
     * C2SDismissClubGame gameId.
     * @member {string} gameId
     * @memberof C2SDismissClubGame
     * @instance
     */
    C2SDismissClubGame.prototype.gameId = "";

    /**
     * Encodes the specified C2SDismissClubGame message. Does not implicitly {@link C2SDismissClubGame.verify|verify} messages.
     * @function encode
     * @memberof C2SDismissClubGame
     * @static
     * @param {IC2SDismissClubGame} m C2SDismissClubGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SDismissClubGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a C2SDismissClubGame message from the specified reader or buffer.
     * @function decode
     * @memberof C2SDismissClubGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SDismissClubGame} C2SDismissClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SDismissClubGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SDismissClubGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
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

    return C2SDismissClubGame;
})();

/**
 * ClubMemberType enum.
 * @exports ClubMemberType
 * @enum {number}
 * @property {number} ClubAccountType_Normal=0 ClubAccountType_Normal value
 * @property {number} ClubAccountType_Manager=1 ClubAccountType_Manager value
 * @property {number} ClubAccountType_Owner=2 ClubAccountType_Owner value
 */
$root.ClubMemberType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ClubAccountType_Normal"] = 0;
    values[valuesById[1] = "ClubAccountType_Manager"] = 1;
    values[valuesById[2] = "ClubAccountType_Owner"] = 2;
    return values;
})();

$root.ClubDetailsInfo = (function() {

    /**
     * Properties of a ClubDetailsInfo.
     * @exports IClubDetailsInfo
     * @interface IClubDetailsInfo
     * @property {number|null} [logo] ClubDetailsInfo logo
     * @property {number|null} [stamp] ClubDetailsInfo stamp
     * @property {string|null} [name] ClubDetailsInfo name
     * @property {string|null} [brief] ClubDetailsInfo brief
     * @property {string|null} [id] ClubDetailsInfo id
     * @property {string|null} [ownerId] ClubDetailsInfo ownerId
     * @property {number|null} [memberCount] ClubDetailsInfo memberCount
     * @property {number|null} [tableCount] ClubDetailsInfo tableCount
     * @property {number|null} [totalClubPoint] ClubDetailsInfo totalClubPoint
     */

    /**
     * Constructs a new ClubDetailsInfo.
     * @exports ClubDetailsInfo
     * @classdesc Represents a ClubDetailsInfo.
     * @implements IClubDetailsInfo
     * @constructor
     * @param {IClubDetailsInfo=} [p] Properties to set
     */
    function ClubDetailsInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubDetailsInfo logo.
     * @member {number} logo
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.logo = 0;

    /**
     * ClubDetailsInfo stamp.
     * @member {number} stamp
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.stamp = 0;

    /**
     * ClubDetailsInfo name.
     * @member {string} name
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.name = "";

    /**
     * ClubDetailsInfo brief.
     * @member {string} brief
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.brief = "";

    /**
     * ClubDetailsInfo id.
     * @member {string} id
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.id = "";

    /**
     * ClubDetailsInfo ownerId.
     * @member {string} ownerId
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.ownerId = "";

    /**
     * ClubDetailsInfo memberCount.
     * @member {number} memberCount
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.memberCount = 0;

    /**
     * ClubDetailsInfo tableCount.
     * @member {number} tableCount
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.tableCount = 0;

    /**
     * ClubDetailsInfo totalClubPoint.
     * @member {number} totalClubPoint
     * @memberof ClubDetailsInfo
     * @instance
     */
    ClubDetailsInfo.prototype.totalClubPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ClubDetailsInfo message. Does not implicitly {@link ClubDetailsInfo.verify|verify} messages.
     * @function encode
     * @memberof ClubDetailsInfo
     * @static
     * @param {IClubDetailsInfo} m ClubDetailsInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubDetailsInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.logo != null && Object.hasOwnProperty.call(m, "logo"))
            w.uint32(8).int32(m.logo);
        if (m.stamp != null && Object.hasOwnProperty.call(m, "stamp"))
            w.uint32(16).int32(m.stamp);
        if (m.name != null && Object.hasOwnProperty.call(m, "name"))
            w.uint32(26).string(m.name);
        if (m.brief != null && Object.hasOwnProperty.call(m, "brief"))
            w.uint32(34).string(m.brief);
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(42).string(m.id);
        if (m.ownerId != null && Object.hasOwnProperty.call(m, "ownerId"))
            w.uint32(50).string(m.ownerId);
        if (m.memberCount != null && Object.hasOwnProperty.call(m, "memberCount"))
            w.uint32(56).int32(m.memberCount);
        if (m.tableCount != null && Object.hasOwnProperty.call(m, "tableCount"))
            w.uint32(64).int32(m.tableCount);
        if (m.totalClubPoint != null && Object.hasOwnProperty.call(m, "totalClubPoint"))
            w.uint32(72).int64(m.totalClubPoint);
        return w;
    };

    /**
     * Decodes a ClubDetailsInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ClubDetailsInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubDetailsInfo} ClubDetailsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubDetailsInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubDetailsInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.logo = r.int32();
                break;
            case 2:
                m.stamp = r.int32();
                break;
            case 3:
                m.name = r.string();
                break;
            case 4:
                m.brief = r.string();
                break;
            case 5:
                m.id = r.string();
                break;
            case 6:
                m.ownerId = r.string();
                break;
            case 7:
                m.memberCount = r.int32();
                break;
            case 8:
                m.tableCount = r.int32();
                break;
            case 9:
                m.totalClubPoint = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubDetailsInfo;
})();

$root.ClubMember = (function() {

    /**
     * Properties of a ClubMember.
     * @exports IClubMember
     * @interface IClubMember
     * @property {string|null} [id] ClubMember id
     * @property {string|null} [uid] ClubMember uid
     * @property {string|null} [nickName] ClubMember nickName
     * @property {string|null} [head] ClubMember head
     * @property {number|null} [clubPoint] ClubMember clubPoint
     * @property {ClubMemberType|null} [memberType] ClubMember memberType
     */

    /**
     * Constructs a new ClubMember.
     * @exports ClubMember
     * @classdesc Represents a ClubMember.
     * @implements IClubMember
     * @constructor
     * @param {IClubMember=} [p] Properties to set
     */
    function ClubMember(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubMember id.
     * @member {string} id
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.id = "";

    /**
     * ClubMember uid.
     * @member {string} uid
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.uid = "";

    /**
     * ClubMember nickName.
     * @member {string} nickName
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.nickName = "";

    /**
     * ClubMember head.
     * @member {string} head
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.head = "";

    /**
     * ClubMember clubPoint.
     * @member {number} clubPoint
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.clubPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClubMember memberType.
     * @member {ClubMemberType} memberType
     * @memberof ClubMember
     * @instance
     */
    ClubMember.prototype.memberType = 0;

    /**
     * Encodes the specified ClubMember message. Does not implicitly {@link ClubMember.verify|verify} messages.
     * @function encode
     * @memberof ClubMember
     * @static
     * @param {IClubMember} m ClubMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(26).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(34).string(m.head);
        if (m.clubPoint != null && Object.hasOwnProperty.call(m, "clubPoint"))
            w.uint32(40).int64(m.clubPoint);
        if (m.memberType != null && Object.hasOwnProperty.call(m, "memberType"))
            w.uint32(48).int32(m.memberType);
        return w;
    };

    /**
     * Decodes a ClubMember message from the specified reader or buffer.
     * @function decode
     * @memberof ClubMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubMember} ClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.uid = r.string();
                break;
            case 3:
                m.nickName = r.string();
                break;
            case 4:
                m.head = r.string();
                break;
            case 5:
                m.clubPoint = r.int64();
                break;
            case 6:
                m.memberType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubMember;
})();

$root.ClubBasicJoinRequest = (function() {

    /**
     * Properties of a ClubBasicJoinRequest.
     * @exports IClubBasicJoinRequest
     * @interface IClubBasicJoinRequest
     * @property {string|null} [id] ClubBasicJoinRequest id
     * @property {string|null} [uid] ClubBasicJoinRequest uid
     * @property {string|null} [nickName] ClubBasicJoinRequest nickName
     * @property {string|null} [head] ClubBasicJoinRequest head
     */

    /**
     * Constructs a new ClubBasicJoinRequest.
     * @exports ClubBasicJoinRequest
     * @classdesc Represents a ClubBasicJoinRequest.
     * @implements IClubBasicJoinRequest
     * @constructor
     * @param {IClubBasicJoinRequest=} [p] Properties to set
     */
    function ClubBasicJoinRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubBasicJoinRequest id.
     * @member {string} id
     * @memberof ClubBasicJoinRequest
     * @instance
     */
    ClubBasicJoinRequest.prototype.id = "";

    /**
     * ClubBasicJoinRequest uid.
     * @member {string} uid
     * @memberof ClubBasicJoinRequest
     * @instance
     */
    ClubBasicJoinRequest.prototype.uid = "";

    /**
     * ClubBasicJoinRequest nickName.
     * @member {string} nickName
     * @memberof ClubBasicJoinRequest
     * @instance
     */
    ClubBasicJoinRequest.prototype.nickName = "";

    /**
     * ClubBasicJoinRequest head.
     * @member {string} head
     * @memberof ClubBasicJoinRequest
     * @instance
     */
    ClubBasicJoinRequest.prototype.head = "";

    /**
     * Encodes the specified ClubBasicJoinRequest message. Does not implicitly {@link ClubBasicJoinRequest.verify|verify} messages.
     * @function encode
     * @memberof ClubBasicJoinRequest
     * @static
     * @param {IClubBasicJoinRequest} m ClubBasicJoinRequest message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubBasicJoinRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(18).string(m.uid);
        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
            w.uint32(26).string(m.nickName);
        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
            w.uint32(34).string(m.head);
        return w;
    };

    /**
     * Decodes a ClubBasicJoinRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClubBasicJoinRequest
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubBasicJoinRequest} ClubBasicJoinRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubBasicJoinRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubBasicJoinRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.uid = r.string();
                break;
            case 3:
                m.nickName = r.string();
                break;
            case 4:
                m.head = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubBasicJoinRequest;
})();

$root.ClubJoinRequest = (function() {

    /**
     * Properties of a ClubJoinRequest.
     * @exports IClubJoinRequest
     * @interface IClubJoinRequest
     * @property {Array.<IClubBasicJoinRequest>|null} [clubBasicJoinRequest] ClubJoinRequest clubBasicJoinRequest
     * @property {IClubDetailsInfo|null} [clubInfo] ClubJoinRequest clubInfo
     */

    /**
     * Constructs a new ClubJoinRequest.
     * @exports ClubJoinRequest
     * @classdesc Represents a ClubJoinRequest.
     * @implements IClubJoinRequest
     * @constructor
     * @param {IClubJoinRequest=} [p] Properties to set
     */
    function ClubJoinRequest(p) {
        this.clubBasicJoinRequest = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubJoinRequest clubBasicJoinRequest.
     * @member {Array.<IClubBasicJoinRequest>} clubBasicJoinRequest
     * @memberof ClubJoinRequest
     * @instance
     */
    ClubJoinRequest.prototype.clubBasicJoinRequest = $util.emptyArray;

    /**
     * ClubJoinRequest clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof ClubJoinRequest
     * @instance
     */
    ClubJoinRequest.prototype.clubInfo = null;

    /**
     * Encodes the specified ClubJoinRequest message. Does not implicitly {@link ClubJoinRequest.verify|verify} messages.
     * @function encode
     * @memberof ClubJoinRequest
     * @static
     * @param {IClubJoinRequest} m ClubJoinRequest message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubJoinRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubBasicJoinRequest != null && m.clubBasicJoinRequest.length) {
            for (var i = 0; i < m.clubBasicJoinRequest.length; ++i)
                $root.ClubBasicJoinRequest.encode(m.clubBasicJoinRequest[i], w.uint32(10).fork()).ldelim();
        }
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ClubJoinRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClubJoinRequest
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubJoinRequest} ClubJoinRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubJoinRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubJoinRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.clubBasicJoinRequest && m.clubBasicJoinRequest.length))
                    m.clubBasicJoinRequest = [];
                m.clubBasicJoinRequest.push($root.ClubBasicJoinRequest.decode(r, r.uint32()));
                break;
            case 2:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubJoinRequest;
})();

$root.ClubTexasGameInfo = (function() {

    /**
     * Properties of a ClubTexasGameInfo.
     * @exports IClubTexasGameInfo
     * @interface IClubTexasGameInfo
     * @property {string|null} [clubId] ClubTexasGameInfo clubId
     * @property {string|null} [gameId] ClubTexasGameInfo gameId
     * @property {IClubMember|null} [creatorInfo] ClubTexasGameInfo creatorInfo
     * @property {IAboutTexasGameInfo|null} [aboutGameInfo] ClubTexasGameInfo aboutGameInfo
     * @property {IBasicTexasConfig|null} [basicTexasConfig] ClubTexasGameInfo basicTexasConfig
     */

    /**
     * Constructs a new ClubTexasGameInfo.
     * @exports ClubTexasGameInfo
     * @classdesc Represents a ClubTexasGameInfo.
     * @implements IClubTexasGameInfo
     * @constructor
     * @param {IClubTexasGameInfo=} [p] Properties to set
     */
    function ClubTexasGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubTexasGameInfo clubId.
     * @member {string} clubId
     * @memberof ClubTexasGameInfo
     * @instance
     */
    ClubTexasGameInfo.prototype.clubId = "";

    /**
     * ClubTexasGameInfo gameId.
     * @member {string} gameId
     * @memberof ClubTexasGameInfo
     * @instance
     */
    ClubTexasGameInfo.prototype.gameId = "";

    /**
     * ClubTexasGameInfo creatorInfo.
     * @member {IClubMember|null|undefined} creatorInfo
     * @memberof ClubTexasGameInfo
     * @instance
     */
    ClubTexasGameInfo.prototype.creatorInfo = null;

    /**
     * ClubTexasGameInfo aboutGameInfo.
     * @member {IAboutTexasGameInfo|null|undefined} aboutGameInfo
     * @memberof ClubTexasGameInfo
     * @instance
     */
    ClubTexasGameInfo.prototype.aboutGameInfo = null;

    /**
     * ClubTexasGameInfo basicTexasConfig.
     * @member {IBasicTexasConfig|null|undefined} basicTexasConfig
     * @memberof ClubTexasGameInfo
     * @instance
     */
    ClubTexasGameInfo.prototype.basicTexasConfig = null;

    /**
     * Encodes the specified ClubTexasGameInfo message. Does not implicitly {@link ClubTexasGameInfo.verify|verify} messages.
     * @function encode
     * @memberof ClubTexasGameInfo
     * @static
     * @param {IClubTexasGameInfo} m ClubTexasGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubTexasGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.creatorInfo != null && Object.hasOwnProperty.call(m, "creatorInfo"))
            $root.ClubMember.encode(m.creatorInfo, w.uint32(26).fork()).ldelim();
        if (m.aboutGameInfo != null && Object.hasOwnProperty.call(m, "aboutGameInfo"))
            $root.AboutTexasGameInfo.encode(m.aboutGameInfo, w.uint32(34).fork()).ldelim();
        if (m.basicTexasConfig != null && Object.hasOwnProperty.call(m, "basicTexasConfig"))
            $root.BasicTexasConfig.encode(m.basicTexasConfig, w.uint32(42).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a ClubTexasGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ClubTexasGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubTexasGameInfo} ClubTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubTexasGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubTexasGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.creatorInfo = $root.ClubMember.decode(r, r.uint32());
                break;
            case 4:
                m.aboutGameInfo = $root.AboutTexasGameInfo.decode(r, r.uint32());
                break;
            case 5:
                m.basicTexasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubTexasGameInfo;
})();

$root.ClubSubGameInfo = (function() {

    /**
     * Properties of a ClubSubGameInfo.
     * @exports IClubSubGameInfo
     * @interface IClubSubGameInfo
     * @property {string|null} [clubId] ClubSubGameInfo clubId
     * @property {string|null} [gameId] ClubSubGameInfo gameId
     * @property {string|null} [gameName] ClubSubGameInfo gameName
     * @property {GameType|null} [gameType] ClubSubGameInfo gameType
     * @property {GameCurrencyType|null} [currencyType] ClubSubGameInfo currencyType
     */

    /**
     * Constructs a new ClubSubGameInfo.
     * @exports ClubSubGameInfo
     * @classdesc Represents a ClubSubGameInfo.
     * @implements IClubSubGameInfo
     * @constructor
     * @param {IClubSubGameInfo=} [p] Properties to set
     */
    function ClubSubGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ClubSubGameInfo clubId.
     * @member {string} clubId
     * @memberof ClubSubGameInfo
     * @instance
     */
    ClubSubGameInfo.prototype.clubId = "";

    /**
     * ClubSubGameInfo gameId.
     * @member {string} gameId
     * @memberof ClubSubGameInfo
     * @instance
     */
    ClubSubGameInfo.prototype.gameId = "";

    /**
     * ClubSubGameInfo gameName.
     * @member {string} gameName
     * @memberof ClubSubGameInfo
     * @instance
     */
    ClubSubGameInfo.prototype.gameName = "";

    /**
     * ClubSubGameInfo gameType.
     * @member {GameType} gameType
     * @memberof ClubSubGameInfo
     * @instance
     */
    ClubSubGameInfo.prototype.gameType = 0;

    /**
     * ClubSubGameInfo currencyType.
     * @member {GameCurrencyType} currencyType
     * @memberof ClubSubGameInfo
     * @instance
     */
    ClubSubGameInfo.prototype.currencyType = 0;

    /**
     * Encodes the specified ClubSubGameInfo message. Does not implicitly {@link ClubSubGameInfo.verify|verify} messages.
     * @function encode
     * @memberof ClubSubGameInfo
     * @static
     * @param {IClubSubGameInfo} m ClubSubGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    ClubSubGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        if (m.gameName != null && Object.hasOwnProperty.call(m, "gameName"))
            w.uint32(26).string(m.gameName);
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(32).int32(m.gameType);
        if (m.currencyType != null && Object.hasOwnProperty.call(m, "currencyType"))
            w.uint32(40).int32(m.currencyType);
        return w;
    };

    /**
     * Decodes a ClubSubGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ClubSubGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ClubSubGameInfo} ClubSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    ClubSubGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ClubSubGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.gameId = r.string();
                break;
            case 3:
                m.gameName = r.string();
                break;
            case 4:
                m.gameType = r.int32();
                break;
            case 5:
                m.currencyType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ClubSubGameInfo;
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
     * @property {boolean|null} [auto] PlayerInfo auto
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
     * PlayerInfo auto.
     * @member {boolean} auto
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.auto = false;

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
        if (m.auto != null && Object.hasOwnProperty.call(m, "auto"))
            w.uint32(96).bool(m.auto);
        if (m.autoLeftTime != null && Object.hasOwnProperty.call(m, "autoLeftTime"))
            w.uint32(104).int64(m.autoLeftTime);
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
                m.auto = r.bool();
                break;
            case 13:
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return TexasDynamicData;
})();

$root.SimpleReplayData = (function() {

    /**
     * Properties of a SimpleReplayData.
     * @exports ISimpleReplayData
     * @interface ISimpleReplayData
     * @property {string|null} [gameId] SimpleReplayData gameId
     * @property {number|null} [index] SimpleReplayData index
     * @property {Array.<ICardInfo>|null} [publicCards] SimpleReplayData publicCards
     * @property {Array.<ICardInfo>|null} [myCards] SimpleReplayData myCards
     * @property {number|null} [myResult] SimpleReplayData myResult
     * @property {Array.<ICardInfo>|null} [winnerCards] SimpleReplayData winnerCards
     * @property {string|null} [winnerName] SimpleReplayData winnerName
     * @property {string|null} [winnerHead] SimpleReplayData winnerHead
     * @property {number|null} [winnerResult] SimpleReplayData winnerResult
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
        this.publicCards = [];
        this.myCards = [];
        this.winnerCards = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SimpleReplayData gameId.
     * @member {string} gameId
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.gameId = "";

    /**
     * SimpleReplayData index.
     * @member {number} index
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplayData publicCards.
     * @member {Array.<ICardInfo>} publicCards
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.publicCards = $util.emptyArray;

    /**
     * SimpleReplayData myCards.
     * @member {Array.<ICardInfo>} myCards
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.myCards = $util.emptyArray;

    /**
     * SimpleReplayData myResult.
     * @member {number} myResult
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.myResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SimpleReplayData winnerCards.
     * @member {Array.<ICardInfo>} winnerCards
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.winnerCards = $util.emptyArray;

    /**
     * SimpleReplayData winnerName.
     * @member {string} winnerName
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.winnerName = "";

    /**
     * SimpleReplayData winnerHead.
     * @member {string} winnerHead
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.winnerHead = "";

    /**
     * SimpleReplayData winnerResult.
     * @member {number} winnerResult
     * @memberof SimpleReplayData
     * @instance
     */
    SimpleReplayData.prototype.winnerResult = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return SimpleReplayData;
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReplayData;
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

$root.S2CCreateClub = (function() {

    /**
     * Properties of a S2CCreateClub.
     * @exports IS2CCreateClub
     * @interface IS2CCreateClub
     * @property {ICommonResult|null} [result] S2CCreateClub result
     * @property {IClubDetailsInfo|null} [clubInfo] S2CCreateClub clubInfo
     */

    /**
     * Constructs a new S2CCreateClub.
     * @exports S2CCreateClub
     * @classdesc Represents a S2CCreateClub.
     * @implements IS2CCreateClub
     * @constructor
     * @param {IS2CCreateClub=} [p] Properties to set
     */
    function S2CCreateClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCreateClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCreateClub
     * @instance
     */
    S2CCreateClub.prototype.result = null;

    /**
     * S2CCreateClub clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CCreateClub
     * @instance
     */
    S2CCreateClub.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CCreateClub message. Does not implicitly {@link S2CCreateClub.verify|verify} messages.
     * @function encode
     * @memberof S2CCreateClub
     * @static
     * @param {IS2CCreateClub} m S2CCreateClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCreateClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCreateClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCreateClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCreateClub} S2CCreateClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCreateClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCreateClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCreateClub;
})();

$root.S2CGetClubInfos = (function() {

    /**
     * Properties of a S2CGetClubInfos.
     * @exports IS2CGetClubInfos
     * @interface IS2CGetClubInfos
     * @property {ICommonResult|null} [result] S2CGetClubInfos result
     * @property {Array.<IClubDetailsInfo>|null} [clubInfos] S2CGetClubInfos clubInfos
     */

    /**
     * Constructs a new S2CGetClubInfos.
     * @exports S2CGetClubInfos
     * @classdesc Represents a S2CGetClubInfos.
     * @implements IS2CGetClubInfos
     * @constructor
     * @param {IS2CGetClubInfos=} [p] Properties to set
     */
    function S2CGetClubInfos(p) {
        this.clubInfos = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetClubInfos result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetClubInfos
     * @instance
     */
    S2CGetClubInfos.prototype.result = null;

    /**
     * S2CGetClubInfos clubInfos.
     * @member {Array.<IClubDetailsInfo>} clubInfos
     * @memberof S2CGetClubInfos
     * @instance
     */
    S2CGetClubInfos.prototype.clubInfos = $util.emptyArray;

    /**
     * Encodes the specified S2CGetClubInfos message. Does not implicitly {@link S2CGetClubInfos.verify|verify} messages.
     * @function encode
     * @memberof S2CGetClubInfos
     * @static
     * @param {IS2CGetClubInfos} m S2CGetClubInfos message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetClubInfos.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfos != null && m.clubInfos.length) {
            for (var i = 0; i < m.clubInfos.length; ++i)
                $root.ClubDetailsInfo.encode(m.clubInfos[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CGetClubInfos message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetClubInfos
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetClubInfos} S2CGetClubInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetClubInfos.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetClubInfos();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.clubInfos && m.clubInfos.length))
                    m.clubInfos = [];
                m.clubInfos.push($root.ClubDetailsInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetClubInfos;
})();

$root.S2CEnterClub = (function() {

    /**
     * Properties of a S2CEnterClub.
     * @exports IS2CEnterClub
     * @interface IS2CEnterClub
     * @property {ICommonResult|null} [result] S2CEnterClub result
     * @property {IClubMember|null} [clubMember] S2CEnterClub clubMember
     * @property {IClubDetailsInfo|null} [clubInfo] S2CEnterClub clubInfo
     */

    /**
     * Constructs a new S2CEnterClub.
     * @exports S2CEnterClub
     * @classdesc Represents a S2CEnterClub.
     * @implements IS2CEnterClub
     * @constructor
     * @param {IS2CEnterClub=} [p] Properties to set
     */
    function S2CEnterClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CEnterClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CEnterClub
     * @instance
     */
    S2CEnterClub.prototype.result = null;

    /**
     * S2CEnterClub clubMember.
     * @member {IClubMember|null|undefined} clubMember
     * @memberof S2CEnterClub
     * @instance
     */
    S2CEnterClub.prototype.clubMember = null;

    /**
     * S2CEnterClub clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CEnterClub
     * @instance
     */
    S2CEnterClub.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CEnterClub message. Does not implicitly {@link S2CEnterClub.verify|verify} messages.
     * @function encode
     * @memberof S2CEnterClub
     * @static
     * @param {IS2CEnterClub} m S2CEnterClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CEnterClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubMember != null && Object.hasOwnProperty.call(m, "clubMember"))
            $root.ClubMember.encode(m.clubMember, w.uint32(18).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CEnterClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEnterClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CEnterClub} S2CEnterClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CEnterClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubMember = $root.ClubMember.decode(r, r.uint32());
                break;
            case 3:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CEnterClub;
})();

$root.S2CSearchClub = (function() {

    /**
     * Properties of a S2CSearchClub.
     * @exports IS2CSearchClub
     * @interface IS2CSearchClub
     * @property {ICommonResult|null} [result] S2CSearchClub result
     * @property {IClubDetailsInfo|null} [clubInfo] S2CSearchClub clubInfo
     */

    /**
     * Constructs a new S2CSearchClub.
     * @exports S2CSearchClub
     * @classdesc Represents a S2CSearchClub.
     * @implements IS2CSearchClub
     * @constructor
     * @param {IS2CSearchClub=} [p] Properties to set
     */
    function S2CSearchClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CSearchClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CSearchClub
     * @instance
     */
    S2CSearchClub.prototype.result = null;

    /**
     * S2CSearchClub clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CSearchClub
     * @instance
     */
    S2CSearchClub.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CSearchClub message. Does not implicitly {@link S2CSearchClub.verify|verify} messages.
     * @function encode
     * @memberof S2CSearchClub
     * @static
     * @param {IS2CSearchClub} m S2CSearchClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CSearchClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CSearchClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CSearchClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CSearchClub} S2CSearchClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CSearchClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CSearchClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CSearchClub;
})();

$root.S2CJoinClub = (function() {

    /**
     * Properties of a S2CJoinClub.
     * @exports IS2CJoinClub
     * @interface IS2CJoinClub
     * @property {ICommonResult|null} [result] S2CJoinClub result
     */

    /**
     * Constructs a new S2CJoinClub.
     * @exports S2CJoinClub
     * @classdesc Represents a S2CJoinClub.
     * @implements IS2CJoinClub
     * @constructor
     * @param {IS2CJoinClub=} [p] Properties to set
     */
    function S2CJoinClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CJoinClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CJoinClub
     * @instance
     */
    S2CJoinClub.prototype.result = null;

    /**
     * Encodes the specified S2CJoinClub message. Does not implicitly {@link S2CJoinClub.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinClub
     * @static
     * @param {IS2CJoinClub} m S2CJoinClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CJoinClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CJoinClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CJoinClub} S2CJoinClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CJoinClub();
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

    return S2CJoinClub;
})();

$root.S2CGetClubMember = (function() {

    /**
     * Properties of a S2CGetClubMember.
     * @exports IS2CGetClubMember
     * @interface IS2CGetClubMember
     * @property {ICommonResult|null} [result] S2CGetClubMember result
     * @property {string|null} [clubId] S2CGetClubMember clubId
     * @property {Array.<IClubMember>|null} [clubMembers] S2CGetClubMember clubMembers
     * @property {number|null} [page] S2CGetClubMember page
     * @property {number|null} [pageSize] S2CGetClubMember pageSize
     * @property {number|null} [totalMember] S2CGetClubMember totalMember
     */

    /**
     * Constructs a new S2CGetClubMember.
     * @exports S2CGetClubMember
     * @classdesc Represents a S2CGetClubMember.
     * @implements IS2CGetClubMember
     * @constructor
     * @param {IS2CGetClubMember=} [p] Properties to set
     */
    function S2CGetClubMember(p) {
        this.clubMembers = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetClubMember result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.result = null;

    /**
     * S2CGetClubMember clubId.
     * @member {string} clubId
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.clubId = "";

    /**
     * S2CGetClubMember clubMembers.
     * @member {Array.<IClubMember>} clubMembers
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.clubMembers = $util.emptyArray;

    /**
     * S2CGetClubMember page.
     * @member {number} page
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.page = 0;

    /**
     * S2CGetClubMember pageSize.
     * @member {number} pageSize
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.pageSize = 0;

    /**
     * S2CGetClubMember totalMember.
     * @member {number} totalMember
     * @memberof S2CGetClubMember
     * @instance
     */
    S2CGetClubMember.prototype.totalMember = 0;

    /**
     * Encodes the specified S2CGetClubMember message. Does not implicitly {@link S2CGetClubMember.verify|verify} messages.
     * @function encode
     * @memberof S2CGetClubMember
     * @static
     * @param {IS2CGetClubMember} m S2CGetClubMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetClubMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.clubMembers != null && m.clubMembers.length) {
            for (var i = 0; i < m.clubMembers.length; ++i)
                $root.ClubMember.encode(m.clubMembers[i], w.uint32(26).fork()).ldelim();
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
     * Decodes a S2CGetClubMember message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetClubMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetClubMember} S2CGetClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetClubMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetClubMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                if (!(m.clubMembers && m.clubMembers.length))
                    m.clubMembers = [];
                m.clubMembers.push($root.ClubMember.decode(r, r.uint32()));
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

    return S2CGetClubMember;
})();

$root.S2CAddClubMember = (function() {

    /**
     * Properties of a S2CAddClubMember.
     * @exports IS2CAddClubMember
     * @interface IS2CAddClubMember
     * @property {ICommonResult|null} [result] S2CAddClubMember result
     * @property {string|null} [clubId] S2CAddClubMember clubId
     * @property {Array.<string>|null} [uids] S2CAddClubMember uids
     * @property {boolean|null} [agree] S2CAddClubMember agree
     */

    /**
     * Constructs a new S2CAddClubMember.
     * @exports S2CAddClubMember
     * @classdesc Represents a S2CAddClubMember.
     * @implements IS2CAddClubMember
     * @constructor
     * @param {IS2CAddClubMember=} [p] Properties to set
     */
    function S2CAddClubMember(p) {
        this.uids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CAddClubMember result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CAddClubMember
     * @instance
     */
    S2CAddClubMember.prototype.result = null;

    /**
     * S2CAddClubMember clubId.
     * @member {string} clubId
     * @memberof S2CAddClubMember
     * @instance
     */
    S2CAddClubMember.prototype.clubId = "";

    /**
     * S2CAddClubMember uids.
     * @member {Array.<string>} uids
     * @memberof S2CAddClubMember
     * @instance
     */
    S2CAddClubMember.prototype.uids = $util.emptyArray;

    /**
     * S2CAddClubMember agree.
     * @member {boolean} agree
     * @memberof S2CAddClubMember
     * @instance
     */
    S2CAddClubMember.prototype.agree = false;

    /**
     * Encodes the specified S2CAddClubMember message. Does not implicitly {@link S2CAddClubMember.verify|verify} messages.
     * @function encode
     * @memberof S2CAddClubMember
     * @static
     * @param {IS2CAddClubMember} m S2CAddClubMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CAddClubMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.uids != null && m.uids.length) {
            for (var i = 0; i < m.uids.length; ++i)
                w.uint32(26).string(m.uids[i]);
        }
        if (m.agree != null && Object.hasOwnProperty.call(m, "agree"))
            w.uint32(32).bool(m.agree);
        return w;
    };

    /**
     * Decodes a S2CAddClubMember message from the specified reader or buffer.
     * @function decode
     * @memberof S2CAddClubMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CAddClubMember} S2CAddClubMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CAddClubMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CAddClubMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                if (!(m.uids && m.uids.length))
                    m.uids = [];
                m.uids.push(r.string());
                break;
            case 4:
                m.agree = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CAddClubMember;
})();

$root.S2CDismissClub = (function() {

    /**
     * Properties of a S2CDismissClub.
     * @exports IS2CDismissClub
     * @interface IS2CDismissClub
     * @property {ICommonResult|null} [result] S2CDismissClub result
     * @property {string|null} [clubId] S2CDismissClub clubId
     */

    /**
     * Constructs a new S2CDismissClub.
     * @exports S2CDismissClub
     * @classdesc Represents a S2CDismissClub.
     * @implements IS2CDismissClub
     * @constructor
     * @param {IS2CDismissClub=} [p] Properties to set
     */
    function S2CDismissClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CDismissClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CDismissClub
     * @instance
     */
    S2CDismissClub.prototype.result = null;

    /**
     * S2CDismissClub clubId.
     * @member {string} clubId
     * @memberof S2CDismissClub
     * @instance
     */
    S2CDismissClub.prototype.clubId = "";

    /**
     * Encodes the specified S2CDismissClub message. Does not implicitly {@link S2CDismissClub.verify|verify} messages.
     * @function encode
     * @memberof S2CDismissClub
     * @static
     * @param {IS2CDismissClub} m S2CDismissClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CDismissClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        return w;
    };

    /**
     * Decodes a S2CDismissClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDismissClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CDismissClub} S2CDismissClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDismissClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CDismissClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CDismissClub;
})();

$root.S2CQuitClub = (function() {

    /**
     * Properties of a S2CQuitClub.
     * @exports IS2CQuitClub
     * @interface IS2CQuitClub
     * @property {ICommonResult|null} [result] S2CQuitClub result
     * @property {string|null} [clubId] S2CQuitClub clubId
     */

    /**
     * Constructs a new S2CQuitClub.
     * @exports S2CQuitClub
     * @classdesc Represents a S2CQuitClub.
     * @implements IS2CQuitClub
     * @constructor
     * @param {IS2CQuitClub=} [p] Properties to set
     */
    function S2CQuitClub(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CQuitClub result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CQuitClub
     * @instance
     */
    S2CQuitClub.prototype.result = null;

    /**
     * S2CQuitClub clubId.
     * @member {string} clubId
     * @memberof S2CQuitClub
     * @instance
     */
    S2CQuitClub.prototype.clubId = "";

    /**
     * Encodes the specified S2CQuitClub message. Does not implicitly {@link S2CQuitClub.verify|verify} messages.
     * @function encode
     * @memberof S2CQuitClub
     * @static
     * @param {IS2CQuitClub} m S2CQuitClub message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CQuitClub.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        return w;
    };

    /**
     * Decodes a S2CQuitClub message from the specified reader or buffer.
     * @function decode
     * @memberof S2CQuitClub
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CQuitClub} S2CQuitClub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CQuitClub.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CQuitClub();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CQuitClub;
})();

$root.S2CRemoveMember = (function() {

    /**
     * Properties of a S2CRemoveMember.
     * @exports IS2CRemoveMember
     * @interface IS2CRemoveMember
     * @property {ICommonResult|null} [result] S2CRemoveMember result
     * @property {string|null} [clubId] S2CRemoveMember clubId
     * @property {Array.<string>|null} [uids] S2CRemoveMember uids
     */

    /**
     * Constructs a new S2CRemoveMember.
     * @exports S2CRemoveMember
     * @classdesc Represents a S2CRemoveMember.
     * @implements IS2CRemoveMember
     * @constructor
     * @param {IS2CRemoveMember=} [p] Properties to set
     */
    function S2CRemoveMember(p) {
        this.uids = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CRemoveMember result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CRemoveMember
     * @instance
     */
    S2CRemoveMember.prototype.result = null;

    /**
     * S2CRemoveMember clubId.
     * @member {string} clubId
     * @memberof S2CRemoveMember
     * @instance
     */
    S2CRemoveMember.prototype.clubId = "";

    /**
     * S2CRemoveMember uids.
     * @member {Array.<string>} uids
     * @memberof S2CRemoveMember
     * @instance
     */
    S2CRemoveMember.prototype.uids = $util.emptyArray;

    /**
     * Encodes the specified S2CRemoveMember message. Does not implicitly {@link S2CRemoveMember.verify|verify} messages.
     * @function encode
     * @memberof S2CRemoveMember
     * @static
     * @param {IS2CRemoveMember} m S2CRemoveMember message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CRemoveMember.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.uids != null && m.uids.length) {
            for (var i = 0; i < m.uids.length; ++i)
                w.uint32(26).string(m.uids[i]);
        }
        return w;
    };

    /**
     * Decodes a S2CRemoveMember message from the specified reader or buffer.
     * @function decode
     * @memberof S2CRemoveMember
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CRemoveMember} S2CRemoveMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CRemoveMember.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CRemoveMember();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                if (!(m.uids && m.uids.length))
                    m.uids = [];
                m.uids.push(r.string());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CRemoveMember;
})();

$root.S2CModifyClubInfo = (function() {

    /**
     * Properties of a S2CModifyClubInfo.
     * @exports IS2CModifyClubInfo
     * @interface IS2CModifyClubInfo
     * @property {ICommonResult|null} [result] S2CModifyClubInfo result
     * @property {IClubDetailsInfo|null} [clubInfo] S2CModifyClubInfo clubInfo
     */

    /**
     * Constructs a new S2CModifyClubInfo.
     * @exports S2CModifyClubInfo
     * @classdesc Represents a S2CModifyClubInfo.
     * @implements IS2CModifyClubInfo
     * @constructor
     * @param {IS2CModifyClubInfo=} [p] Properties to set
     */
    function S2CModifyClubInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CModifyClubInfo result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CModifyClubInfo
     * @instance
     */
    S2CModifyClubInfo.prototype.result = null;

    /**
     * S2CModifyClubInfo clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CModifyClubInfo
     * @instance
     */
    S2CModifyClubInfo.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CModifyClubInfo message. Does not implicitly {@link S2CModifyClubInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CModifyClubInfo
     * @static
     * @param {IS2CModifyClubInfo} m S2CModifyClubInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CModifyClubInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CModifyClubInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CModifyClubInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CModifyClubInfo} S2CModifyClubInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CModifyClubInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CModifyClubInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CModifyClubInfo;
})();

$root.S2CShareClubScore = (function() {

    /**
     * Properties of a S2CShareClubScore.
     * @exports IS2CShareClubScore
     * @interface IS2CShareClubScore
     * @property {ICommonResult|null} [result] S2CShareClubScore result
     * @property {string|null} [clubId] S2CShareClubScore clubId
     * @property {string|null} [uid] S2CShareClubScore uid
     * @property {number|null} [amount] S2CShareClubScore amount
     * @property {number|null} [playerRestPoint] S2CShareClubScore playerRestPoint
     * @property {number|null} [clubRestPoint] S2CShareClubScore clubRestPoint
     */

    /**
     * Constructs a new S2CShareClubScore.
     * @exports S2CShareClubScore
     * @classdesc Represents a S2CShareClubScore.
     * @implements IS2CShareClubScore
     * @constructor
     * @param {IS2CShareClubScore=} [p] Properties to set
     */
    function S2CShareClubScore(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CShareClubScore result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.result = null;

    /**
     * S2CShareClubScore clubId.
     * @member {string} clubId
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.clubId = "";

    /**
     * S2CShareClubScore uid.
     * @member {string} uid
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.uid = "";

    /**
     * S2CShareClubScore amount.
     * @member {number} amount
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CShareClubScore playerRestPoint.
     * @member {number} playerRestPoint
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.playerRestPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CShareClubScore clubRestPoint.
     * @member {number} clubRestPoint
     * @memberof S2CShareClubScore
     * @instance
     */
    S2CShareClubScore.prototype.clubRestPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CShareClubScore message. Does not implicitly {@link S2CShareClubScore.verify|verify} messages.
     * @function encode
     * @memberof S2CShareClubScore
     * @static
     * @param {IS2CShareClubScore} m S2CShareClubScore message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CShareClubScore.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(26).string(m.uid);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(32).int64(m.amount);
        if (m.playerRestPoint != null && Object.hasOwnProperty.call(m, "playerRestPoint"))
            w.uint32(40).int64(m.playerRestPoint);
        if (m.clubRestPoint != null && Object.hasOwnProperty.call(m, "clubRestPoint"))
            w.uint32(48).int64(m.clubRestPoint);
        return w;
    };

    /**
     * Decodes a S2CShareClubScore message from the specified reader or buffer.
     * @function decode
     * @memberof S2CShareClubScore
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CShareClubScore} S2CShareClubScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CShareClubScore.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CShareClubScore();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                m.uid = r.string();
                break;
            case 4:
                m.amount = r.int64();
                break;
            case 5:
                m.playerRestPoint = r.int64();
                break;
            case 6:
                m.clubRestPoint = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CShareClubScore;
})();

$root.S2CModifyMemberRole = (function() {

    /**
     * Properties of a S2CModifyMemberRole.
     * @exports IS2CModifyMemberRole
     * @interface IS2CModifyMemberRole
     * @property {ICommonResult|null} [result] S2CModifyMemberRole result
     * @property {string|null} [clubId] S2CModifyMemberRole clubId
     * @property {string|null} [uid] S2CModifyMemberRole uid
     * @property {ClubMemberType|null} [memberType] S2CModifyMemberRole memberType
     */

    /**
     * Constructs a new S2CModifyMemberRole.
     * @exports S2CModifyMemberRole
     * @classdesc Represents a S2CModifyMemberRole.
     * @implements IS2CModifyMemberRole
     * @constructor
     * @param {IS2CModifyMemberRole=} [p] Properties to set
     */
    function S2CModifyMemberRole(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CModifyMemberRole result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CModifyMemberRole
     * @instance
     */
    S2CModifyMemberRole.prototype.result = null;

    /**
     * S2CModifyMemberRole clubId.
     * @member {string} clubId
     * @memberof S2CModifyMemberRole
     * @instance
     */
    S2CModifyMemberRole.prototype.clubId = "";

    /**
     * S2CModifyMemberRole uid.
     * @member {string} uid
     * @memberof S2CModifyMemberRole
     * @instance
     */
    S2CModifyMemberRole.prototype.uid = "";

    /**
     * S2CModifyMemberRole memberType.
     * @member {ClubMemberType} memberType
     * @memberof S2CModifyMemberRole
     * @instance
     */
    S2CModifyMemberRole.prototype.memberType = 0;

    /**
     * Encodes the specified S2CModifyMemberRole message. Does not implicitly {@link S2CModifyMemberRole.verify|verify} messages.
     * @function encode
     * @memberof S2CModifyMemberRole
     * @static
     * @param {IS2CModifyMemberRole} m S2CModifyMemberRole message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CModifyMemberRole.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
            w.uint32(26).string(m.uid);
        if (m.memberType != null && Object.hasOwnProperty.call(m, "memberType"))
            w.uint32(32).int32(m.memberType);
        return w;
    };

    /**
     * Decodes a S2CModifyMemberRole message from the specified reader or buffer.
     * @function decode
     * @memberof S2CModifyMemberRole
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CModifyMemberRole} S2CModifyMemberRole
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CModifyMemberRole.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CModifyMemberRole();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                m.uid = r.string();
                break;
            case 4:
                m.memberType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CModifyMemberRole;
})();

$root.S2CCreateClubGame = (function() {

    /**
     * Properties of a S2CCreateClubGame.
     * @exports IS2CCreateClubGame
     * @interface IS2CCreateClubGame
     * @property {ICommonResult|null} [result] S2CCreateClubGame result
     * @property {string|null} [clubId] S2CCreateClubGame clubId
     * @property {IClubTexasGameInfo|null} [gameInfo] S2CCreateClubGame gameInfo
     */

    /**
     * Constructs a new S2CCreateClubGame.
     * @exports S2CCreateClubGame
     * @classdesc Represents a S2CCreateClubGame.
     * @implements IS2CCreateClubGame
     * @constructor
     * @param {IS2CCreateClubGame=} [p] Properties to set
     */
    function S2CCreateClubGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCreateClubGame result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CCreateClubGame
     * @instance
     */
    S2CCreateClubGame.prototype.result = null;

    /**
     * S2CCreateClubGame clubId.
     * @member {string} clubId
     * @memberof S2CCreateClubGame
     * @instance
     */
    S2CCreateClubGame.prototype.clubId = "";

    /**
     * S2CCreateClubGame gameInfo.
     * @member {IClubTexasGameInfo|null|undefined} gameInfo
     * @memberof S2CCreateClubGame
     * @instance
     */
    S2CCreateClubGame.prototype.gameInfo = null;

    /**
     * Encodes the specified S2CCreateClubGame message. Does not implicitly {@link S2CCreateClubGame.verify|verify} messages.
     * @function encode
     * @memberof S2CCreateClubGame
     * @static
     * @param {IS2CCreateClubGame} m S2CCreateClubGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCreateClubGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.gameInfo != null && Object.hasOwnProperty.call(m, "gameInfo"))
            $root.ClubTexasGameInfo.encode(m.gameInfo, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CCreateClubGame message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCreateClubGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCreateClubGame} S2CCreateClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCreateClubGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCreateClubGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                m.gameInfo = $root.ClubTexasGameInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCreateClubGame;
})();

$root.S2CGetClubTexasGameInfoResp = (function() {

    /**
     * Properties of a S2CGetClubTexasGameInfoResp.
     * @exports IS2CGetClubTexasGameInfoResp
     * @interface IS2CGetClubTexasGameInfoResp
     * @property {ICommonResult|null} [result] S2CGetClubTexasGameInfoResp result
     * @property {string|null} [clubId] S2CGetClubTexasGameInfoResp clubId
     * @property {Array.<IClubTexasGameInfo>|null} [gameInfo] S2CGetClubTexasGameInfoResp gameInfo
     */

    /**
     * Constructs a new S2CGetClubTexasGameInfoResp.
     * @exports S2CGetClubTexasGameInfoResp
     * @classdesc Represents a S2CGetClubTexasGameInfoResp.
     * @implements IS2CGetClubTexasGameInfoResp
     * @constructor
     * @param {IS2CGetClubTexasGameInfoResp=} [p] Properties to set
     */
    function S2CGetClubTexasGameInfoResp(p) {
        this.gameInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetClubTexasGameInfoResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetClubTexasGameInfoResp
     * @instance
     */
    S2CGetClubTexasGameInfoResp.prototype.result = null;

    /**
     * S2CGetClubTexasGameInfoResp clubId.
     * @member {string} clubId
     * @memberof S2CGetClubTexasGameInfoResp
     * @instance
     */
    S2CGetClubTexasGameInfoResp.prototype.clubId = "";

    /**
     * S2CGetClubTexasGameInfoResp gameInfo.
     * @member {Array.<IClubTexasGameInfo>} gameInfo
     * @memberof S2CGetClubTexasGameInfoResp
     * @instance
     */
    S2CGetClubTexasGameInfoResp.prototype.gameInfo = $util.emptyArray;

    /**
     * Encodes the specified S2CGetClubTexasGameInfoResp message. Does not implicitly {@link S2CGetClubTexasGameInfoResp.verify|verify} messages.
     * @function encode
     * @memberof S2CGetClubTexasGameInfoResp
     * @static
     * @param {IS2CGetClubTexasGameInfoResp} m S2CGetClubTexasGameInfoResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetClubTexasGameInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.gameInfo != null && m.gameInfo.length) {
            for (var i = 0; i < m.gameInfo.length; ++i)
                $root.ClubTexasGameInfo.encode(m.gameInfo[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CGetClubTexasGameInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetClubTexasGameInfoResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetClubTexasGameInfoResp} S2CGetClubTexasGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetClubTexasGameInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetClubTexasGameInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                if (!(m.gameInfo && m.gameInfo.length))
                    m.gameInfo = [];
                m.gameInfo.push($root.ClubTexasGameInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetClubTexasGameInfoResp;
})();

$root.S2CGetClubSubGameInfoResp = (function() {

    /**
     * Properties of a S2CGetClubSubGameInfoResp.
     * @exports IS2CGetClubSubGameInfoResp
     * @interface IS2CGetClubSubGameInfoResp
     * @property {ICommonResult|null} [result] S2CGetClubSubGameInfoResp result
     * @property {string|null} [clubId] S2CGetClubSubGameInfoResp clubId
     * @property {Array.<IClubSubGameInfo>|null} [gameInfo] S2CGetClubSubGameInfoResp gameInfo
     */

    /**
     * Constructs a new S2CGetClubSubGameInfoResp.
     * @exports S2CGetClubSubGameInfoResp
     * @classdesc Represents a S2CGetClubSubGameInfoResp.
     * @implements IS2CGetClubSubGameInfoResp
     * @constructor
     * @param {IS2CGetClubSubGameInfoResp=} [p] Properties to set
     */
    function S2CGetClubSubGameInfoResp(p) {
        this.gameInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetClubSubGameInfoResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetClubSubGameInfoResp
     * @instance
     */
    S2CGetClubSubGameInfoResp.prototype.result = null;

    /**
     * S2CGetClubSubGameInfoResp clubId.
     * @member {string} clubId
     * @memberof S2CGetClubSubGameInfoResp
     * @instance
     */
    S2CGetClubSubGameInfoResp.prototype.clubId = "";

    /**
     * S2CGetClubSubGameInfoResp gameInfo.
     * @member {Array.<IClubSubGameInfo>} gameInfo
     * @memberof S2CGetClubSubGameInfoResp
     * @instance
     */
    S2CGetClubSubGameInfoResp.prototype.gameInfo = $util.emptyArray;

    /**
     * Encodes the specified S2CGetClubSubGameInfoResp message. Does not implicitly {@link S2CGetClubSubGameInfoResp.verify|verify} messages.
     * @function encode
     * @memberof S2CGetClubSubGameInfoResp
     * @static
     * @param {IS2CGetClubSubGameInfoResp} m S2CGetClubSubGameInfoResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetClubSubGameInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.gameInfo != null && m.gameInfo.length) {
            for (var i = 0; i < m.gameInfo.length; ++i)
                $root.ClubSubGameInfo.encode(m.gameInfo[i], w.uint32(26).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CGetClubSubGameInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetClubSubGameInfoResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetClubSubGameInfoResp} S2CGetClubSubGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetClubSubGameInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetClubSubGameInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                if (!(m.gameInfo && m.gameInfo.length))
                    m.gameInfo = [];
                m.gameInfo.push($root.ClubSubGameInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetClubSubGameInfoResp;
})();

$root.S2CDismissClubGame = (function() {

    /**
     * Properties of a S2CDismissClubGame.
     * @exports IS2CDismissClubGame
     * @interface IS2CDismissClubGame
     * @property {ICommonResult|null} [result] S2CDismissClubGame result
     * @property {string|null} [clubId] S2CDismissClubGame clubId
     * @property {string|null} [gameId] S2CDismissClubGame gameId
     */

    /**
     * Constructs a new S2CDismissClubGame.
     * @exports S2CDismissClubGame
     * @classdesc Represents a S2CDismissClubGame.
     * @implements IS2CDismissClubGame
     * @constructor
     * @param {IS2CDismissClubGame=} [p] Properties to set
     */
    function S2CDismissClubGame(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CDismissClubGame result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CDismissClubGame
     * @instance
     */
    S2CDismissClubGame.prototype.result = null;

    /**
     * S2CDismissClubGame clubId.
     * @member {string} clubId
     * @memberof S2CDismissClubGame
     * @instance
     */
    S2CDismissClubGame.prototype.clubId = "";

    /**
     * S2CDismissClubGame gameId.
     * @member {string} gameId
     * @memberof S2CDismissClubGame
     * @instance
     */
    S2CDismissClubGame.prototype.gameId = "";

    /**
     * Encodes the specified S2CDismissClubGame message. Does not implicitly {@link S2CDismissClubGame.verify|verify} messages.
     * @function encode
     * @memberof S2CDismissClubGame
     * @static
     * @param {IS2CDismissClubGame} m S2CDismissClubGame message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CDismissClubGame.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(18).string(m.clubId);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(26).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CDismissClubGame message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDismissClubGame
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CDismissClubGame} S2CDismissClubGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDismissClubGame.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CDismissClubGame();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubId = r.string();
                break;
            case 3:
                m.gameId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CDismissClubGame;
})();

$root.S2CClubJoinNotify = (function() {

    /**
     * Properties of a S2CClubJoinNotify.
     * @exports IS2CClubJoinNotify
     * @interface IS2CClubJoinNotify
     * @property {Array.<IClubJoinRequest>|null} [request] S2CClubJoinNotify request
     */

    /**
     * Constructs a new S2CClubJoinNotify.
     * @exports S2CClubJoinNotify
     * @classdesc Represents a S2CClubJoinNotify.
     * @implements IS2CClubJoinNotify
     * @constructor
     * @param {IS2CClubJoinNotify=} [p] Properties to set
     */
    function S2CClubJoinNotify(p) {
        this.request = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CClubJoinNotify request.
     * @member {Array.<IClubJoinRequest>} request
     * @memberof S2CClubJoinNotify
     * @instance
     */
    S2CClubJoinNotify.prototype.request = $util.emptyArray;

    /**
     * Encodes the specified S2CClubJoinNotify message. Does not implicitly {@link S2CClubJoinNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CClubJoinNotify
     * @static
     * @param {IS2CClubJoinNotify} m S2CClubJoinNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CClubJoinNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.request != null && m.request.length) {
            for (var i = 0; i < m.request.length; ++i)
                $root.ClubJoinRequest.encode(m.request[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CClubJoinNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CClubJoinNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CClubJoinNotify} S2CClubJoinNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CClubJoinNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CClubJoinNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.request && m.request.length))
                    m.request = [];
                m.request.push($root.ClubJoinRequest.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CClubJoinNotify;
})();

$root.S2CJoinClubNotify = (function() {

    /**
     * Properties of a S2CJoinClubNotify.
     * @exports IS2CJoinClubNotify
     * @interface IS2CJoinClubNotify
     * @property {ICommonResult|null} [result] S2CJoinClubNotify result
     * @property {IClubDetailsInfo|null} [clubInfo] S2CJoinClubNotify clubInfo
     */

    /**
     * Constructs a new S2CJoinClubNotify.
     * @exports S2CJoinClubNotify
     * @classdesc Represents a S2CJoinClubNotify.
     * @implements IS2CJoinClubNotify
     * @constructor
     * @param {IS2CJoinClubNotify=} [p] Properties to set
     */
    function S2CJoinClubNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CJoinClubNotify result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CJoinClubNotify
     * @instance
     */
    S2CJoinClubNotify.prototype.result = null;

    /**
     * S2CJoinClubNotify clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CJoinClubNotify
     * @instance
     */
    S2CJoinClubNotify.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CJoinClubNotify message. Does not implicitly {@link S2CJoinClubNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinClubNotify
     * @static
     * @param {IS2CJoinClubNotify} m S2CJoinClubNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CJoinClubNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CJoinClubNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinClubNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CJoinClubNotify} S2CJoinClubNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinClubNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CJoinClubNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.clubInfo = $root.ClubDetailsInfo.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CJoinClubNotify;
})();

$root.S2CRemoveNotify = (function() {

    /**
     * Properties of a S2CRemoveNotify.
     * @exports IS2CRemoveNotify
     * @interface IS2CRemoveNotify
     * @property {string|null} [clubId] S2CRemoveNotify clubId
     */

    /**
     * Constructs a new S2CRemoveNotify.
     * @exports S2CRemoveNotify
     * @classdesc Represents a S2CRemoveNotify.
     * @implements IS2CRemoveNotify
     * @constructor
     * @param {IS2CRemoveNotify=} [p] Properties to set
     */
    function S2CRemoveNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CRemoveNotify clubId.
     * @member {string} clubId
     * @memberof S2CRemoveNotify
     * @instance
     */
    S2CRemoveNotify.prototype.clubId = "";

    /**
     * Encodes the specified S2CRemoveNotify message. Does not implicitly {@link S2CRemoveNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CRemoveNotify
     * @static
     * @param {IS2CRemoveNotify} m S2CRemoveNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CRemoveNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a S2CRemoveNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CRemoveNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CRemoveNotify} S2CRemoveNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CRemoveNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CRemoveNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CRemoveNotify;
})();

$root.S2CDismissClubNotify = (function() {

    /**
     * Properties of a S2CDismissClubNotify.
     * @exports IS2CDismissClubNotify
     * @interface IS2CDismissClubNotify
     * @property {string|null} [clubId] S2CDismissClubNotify clubId
     */

    /**
     * Constructs a new S2CDismissClubNotify.
     * @exports S2CDismissClubNotify
     * @classdesc Represents a S2CDismissClubNotify.
     * @implements IS2CDismissClubNotify
     * @constructor
     * @param {IS2CDismissClubNotify=} [p] Properties to set
     */
    function S2CDismissClubNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CDismissClubNotify clubId.
     * @member {string} clubId
     * @memberof S2CDismissClubNotify
     * @instance
     */
    S2CDismissClubNotify.prototype.clubId = "";

    /**
     * Encodes the specified S2CDismissClubNotify message. Does not implicitly {@link S2CDismissClubNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CDismissClubNotify
     * @static
     * @param {IS2CDismissClubNotify} m S2CDismissClubNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CDismissClubNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        return w;
    };

    /**
     * Decodes a S2CDismissClubNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDismissClubNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CDismissClubNotify} S2CDismissClubNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDismissClubNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CDismissClubNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CDismissClubNotify;
})();

$root.S2CClubTotalPointNotify = (function() {

    /**
     * Properties of a S2CClubTotalPointNotify.
     * @exports IS2CClubTotalPointNotify
     * @interface IS2CClubTotalPointNotify
     * @property {string|null} [clubId] S2CClubTotalPointNotify clubId
     * @property {number|null} [clubRestAmount] S2CClubTotalPointNotify clubRestAmount
     * @property {number|null} [amount] S2CClubTotalPointNotify amount
     */

    /**
     * Constructs a new S2CClubTotalPointNotify.
     * @exports S2CClubTotalPointNotify
     * @classdesc Represents a S2CClubTotalPointNotify.
     * @implements IS2CClubTotalPointNotify
     * @constructor
     * @param {IS2CClubTotalPointNotify=} [p] Properties to set
     */
    function S2CClubTotalPointNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CClubTotalPointNotify clubId.
     * @member {string} clubId
     * @memberof S2CClubTotalPointNotify
     * @instance
     */
    S2CClubTotalPointNotify.prototype.clubId = "";

    /**
     * S2CClubTotalPointNotify clubRestAmount.
     * @member {number} clubRestAmount
     * @memberof S2CClubTotalPointNotify
     * @instance
     */
    S2CClubTotalPointNotify.prototype.clubRestAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CClubTotalPointNotify amount.
     * @member {number} amount
     * @memberof S2CClubTotalPointNotify
     * @instance
     */
    S2CClubTotalPointNotify.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CClubTotalPointNotify message. Does not implicitly {@link S2CClubTotalPointNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CClubTotalPointNotify
     * @static
     * @param {IS2CClubTotalPointNotify} m S2CClubTotalPointNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CClubTotalPointNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.clubRestAmount != null && Object.hasOwnProperty.call(m, "clubRestAmount"))
            w.uint32(16).int64(m.clubRestAmount);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        return w;
    };

    /**
     * Decodes a S2CClubTotalPointNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CClubTotalPointNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CClubTotalPointNotify} S2CClubTotalPointNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CClubTotalPointNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CClubTotalPointNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.clubRestAmount = r.int64();
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

    return S2CClubTotalPointNotify;
})();

$root.S2CClubPlayerPointNotify = (function() {

    /**
     * Properties of a S2CClubPlayerPointNotify.
     * @exports IS2CClubPlayerPointNotify
     * @interface IS2CClubPlayerPointNotify
     * @property {string|null} [clubId] S2CClubPlayerPointNotify clubId
     * @property {number|null} [playerRestAmount] S2CClubPlayerPointNotify playerRestAmount
     * @property {number|null} [amount] S2CClubPlayerPointNotify amount
     */

    /**
     * Constructs a new S2CClubPlayerPointNotify.
     * @exports S2CClubPlayerPointNotify
     * @classdesc Represents a S2CClubPlayerPointNotify.
     * @implements IS2CClubPlayerPointNotify
     * @constructor
     * @param {IS2CClubPlayerPointNotify=} [p] Properties to set
     */
    function S2CClubPlayerPointNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CClubPlayerPointNotify clubId.
     * @member {string} clubId
     * @memberof S2CClubPlayerPointNotify
     * @instance
     */
    S2CClubPlayerPointNotify.prototype.clubId = "";

    /**
     * S2CClubPlayerPointNotify playerRestAmount.
     * @member {number} playerRestAmount
     * @memberof S2CClubPlayerPointNotify
     * @instance
     */
    S2CClubPlayerPointNotify.prototype.playerRestAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CClubPlayerPointNotify amount.
     * @member {number} amount
     * @memberof S2CClubPlayerPointNotify
     * @instance
     */
    S2CClubPlayerPointNotify.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified S2CClubPlayerPointNotify message. Does not implicitly {@link S2CClubPlayerPointNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CClubPlayerPointNotify
     * @static
     * @param {IS2CClubPlayerPointNotify} m S2CClubPlayerPointNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CClubPlayerPointNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.playerRestAmount != null && Object.hasOwnProperty.call(m, "playerRestAmount"))
            w.uint32(16).int64(m.playerRestAmount);
        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
            w.uint32(24).int64(m.amount);
        return w;
    };

    /**
     * Decodes a S2CClubPlayerPointNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CClubPlayerPointNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CClubPlayerPointNotify} S2CClubPlayerPointNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CClubPlayerPointNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CClubPlayerPointNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.playerRestAmount = r.int64();
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

    return S2CClubPlayerPointNotify;
})();

$root.S2CModifyMemberRoleNotify = (function() {

    /**
     * Properties of a S2CModifyMemberRoleNotify.
     * @exports IS2CModifyMemberRoleNotify
     * @interface IS2CModifyMemberRoleNotify
     * @property {string|null} [clubId] S2CModifyMemberRoleNotify clubId
     * @property {ClubMemberType|null} [memberType] S2CModifyMemberRoleNotify memberType
     */

    /**
     * Constructs a new S2CModifyMemberRoleNotify.
     * @exports S2CModifyMemberRoleNotify
     * @classdesc Represents a S2CModifyMemberRoleNotify.
     * @implements IS2CModifyMemberRoleNotify
     * @constructor
     * @param {IS2CModifyMemberRoleNotify=} [p] Properties to set
     */
    function S2CModifyMemberRoleNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CModifyMemberRoleNotify clubId.
     * @member {string} clubId
     * @memberof S2CModifyMemberRoleNotify
     * @instance
     */
    S2CModifyMemberRoleNotify.prototype.clubId = "";

    /**
     * S2CModifyMemberRoleNotify memberType.
     * @member {ClubMemberType} memberType
     * @memberof S2CModifyMemberRoleNotify
     * @instance
     */
    S2CModifyMemberRoleNotify.prototype.memberType = 0;

    /**
     * Encodes the specified S2CModifyMemberRoleNotify message. Does not implicitly {@link S2CModifyMemberRoleNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CModifyMemberRoleNotify
     * @static
     * @param {IS2CModifyMemberRoleNotify} m S2CModifyMemberRoleNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CModifyMemberRoleNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.memberType != null && Object.hasOwnProperty.call(m, "memberType"))
            w.uint32(16).int32(m.memberType);
        return w;
    };

    /**
     * Decodes a S2CModifyMemberRoleNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CModifyMemberRoleNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CModifyMemberRoleNotify} S2CModifyMemberRoleNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CModifyMemberRoleNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CModifyMemberRoleNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
                break;
            case 2:
                m.memberType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CModifyMemberRoleNotify;
})();

$root.S2CDismissClubGameNotify = (function() {

    /**
     * Properties of a S2CDismissClubGameNotify.
     * @exports IS2CDismissClubGameNotify
     * @interface IS2CDismissClubGameNotify
     * @property {string|null} [clubId] S2CDismissClubGameNotify clubId
     * @property {string|null} [gameId] S2CDismissClubGameNotify gameId
     */

    /**
     * Constructs a new S2CDismissClubGameNotify.
     * @exports S2CDismissClubGameNotify
     * @classdesc Represents a S2CDismissClubGameNotify.
     * @implements IS2CDismissClubGameNotify
     * @constructor
     * @param {IS2CDismissClubGameNotify=} [p] Properties to set
     */
    function S2CDismissClubGameNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CDismissClubGameNotify clubId.
     * @member {string} clubId
     * @memberof S2CDismissClubGameNotify
     * @instance
     */
    S2CDismissClubGameNotify.prototype.clubId = "";

    /**
     * S2CDismissClubGameNotify gameId.
     * @member {string} gameId
     * @memberof S2CDismissClubGameNotify
     * @instance
     */
    S2CDismissClubGameNotify.prototype.gameId = "";

    /**
     * Encodes the specified S2CDismissClubGameNotify message. Does not implicitly {@link S2CDismissClubGameNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CDismissClubGameNotify
     * @static
     * @param {IS2CDismissClubGameNotify} m S2CDismissClubGameNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CDismissClubGameNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.clubId != null && Object.hasOwnProperty.call(m, "clubId"))
            w.uint32(10).string(m.clubId);
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(18).string(m.gameId);
        return w;
    };

    /**
     * Decodes a S2CDismissClubGameNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDismissClubGameNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CDismissClubGameNotify} S2CDismissClubGameNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDismissClubGameNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CDismissClubGameNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.clubId = r.string();
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

    return S2CDismissClubGameNotify;
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
            w.uint32(34).fork();
            for (var i = 0; i < m.betAmount.length; ++i)
                w.int64(m.betAmount[i]);
            w.ldelim();
        }
        if (m.boyCards != null && m.boyCards.length) {
            for (var i = 0; i < m.boyCards.length; ++i)
                $root.CardInfo.encode(m.boyCards[i], w.uint32(42).fork()).ldelim();
        }
        if (m.girlCards != null && m.girlCards.length) {
            for (var i = 0; i < m.girlCards.length; ++i)
                $root.CardInfo.encode(m.girlCards[i], w.uint32(50).fork()).ldelim();
        }
        if (m.publicCards != null && m.publicCards.length) {
            for (var i = 0; i < m.publicCards.length; ++i)
                $root.CardInfo.encode(m.publicCards[i], w.uint32(58).fork()).ldelim();
        }
        if (m.gameCode != null && Object.hasOwnProperty.call(m, "gameCode"))
            w.uint32(66).string(m.gameCode);
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
            case 4:
                if (!(m.betAmount && m.betAmount.length))
                    m.betAmount = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.betAmount.push(r.int64());
                } else
                    m.betAmount.push(r.int64());
                break;
            case 5:
                if (!(m.boyCards && m.boyCards.length))
                    m.boyCards = [];
                m.boyCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 6:
                if (!(m.girlCards && m.girlCards.length))
                    m.girlCards = [];
                m.girlCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 7:
                if (!(m.publicCards && m.publicCards.length))
                    m.publicCards = [];
                m.publicCards.push($root.CardInfo.decode(r, r.uint32()));
                break;
            case 8:
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return CowboyWinLose;
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
     * @property {number|null} [restAmount] S2CTexasCowboyBringInResp restAmount
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
     * S2CTexasCowboyBringInResp restAmount.
     * @member {number} restAmount
     * @memberof S2CTexasCowboyBringInResp
     * @instance
     */
    S2CTexasCowboyBringInResp.prototype.restAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (m.restAmount != null && Object.hasOwnProperty.call(m, "restAmount"))
            w.uint32(40).int64(m.restAmount);
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
            case 5:
                m.restAmount = r.int64();
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
     * @property {number|null} [restAmount] S2CTexasCowboyBringOutResp restAmount
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
     * S2CTexasCowboyBringOutResp restAmount.
     * @member {number} restAmount
     * @memberof S2CTexasCowboyBringOutResp
     * @instance
     */
    S2CTexasCowboyBringOutResp.prototype.restAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (m.restAmount != null && Object.hasOwnProperty.call(m, "restAmount"))
            w.uint32(40).int64(m.restAmount);
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
            case 5:
                m.restAmount = r.int64();
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

$root.C2SGetUserInfo = (function() {

    /**
     * Properties of a C2SGetUserInfo.
     * @exports IC2SGetUserInfo
     * @interface IC2SGetUserInfo
     * @property {string|null} [token] C2SGetUserInfo token
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
     * C2SGetUserInfo token.
     * @member {string} token
     * @memberof C2SGetUserInfo
     * @instance
     */
    C2SGetUserInfo.prototype.token = "";

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
        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
            w.uint32(10).string(m.token);
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
            case 1:
                m.token = r.string();
                break;
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

$root.C2SGetHallTexasGameInfo = (function() {

    /**
     * Properties of a C2SGetHallTexasGameInfo.
     * @exports IC2SGetHallTexasGameInfo
     * @interface IC2SGetHallTexasGameInfo
     */

    /**
     * Constructs a new C2SGetHallTexasGameInfo.
     * @exports C2SGetHallTexasGameInfo
     * @classdesc Represents a C2SGetHallTexasGameInfo.
     * @implements IC2SGetHallTexasGameInfo
     * @constructor
     * @param {IC2SGetHallTexasGameInfo=} [p] Properties to set
     */
    function C2SGetHallTexasGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SGetHallTexasGameInfo message. Does not implicitly {@link C2SGetHallTexasGameInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SGetHallTexasGameInfo
     * @static
     * @param {IC2SGetHallTexasGameInfo} m C2SGetHallTexasGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetHallTexasGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SGetHallTexasGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetHallTexasGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetHallTexasGameInfo} C2SGetHallTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetHallTexasGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetHallTexasGameInfo();
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

    return C2SGetHallTexasGameInfo;
})();

$root.C2SGetHallSubGameInfo = (function() {

    /**
     * Properties of a C2SGetHallSubGameInfo.
     * @exports IC2SGetHallSubGameInfo
     * @interface IC2SGetHallSubGameInfo
     */

    /**
     * Constructs a new C2SGetHallSubGameInfo.
     * @exports C2SGetHallSubGameInfo
     * @classdesc Represents a C2SGetHallSubGameInfo.
     * @implements IC2SGetHallSubGameInfo
     * @constructor
     * @param {IC2SGetHallSubGameInfo=} [p] Properties to set
     */
    function C2SGetHallSubGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified C2SGetHallSubGameInfo message. Does not implicitly {@link C2SGetHallSubGameInfo.verify|verify} messages.
     * @function encode
     * @memberof C2SGetHallSubGameInfo
     * @static
     * @param {IC2SGetHallSubGameInfo} m C2SGetHallSubGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SGetHallSubGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a C2SGetHallSubGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetHallSubGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SGetHallSubGameInfo} C2SGetHallSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetHallSubGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SGetHallSubGameInfo();
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

    return C2SGetHallSubGameInfo;
})();

$root.HallTexasGameInfo = (function() {

    /**
     * Properties of a HallTexasGameInfo.
     * @exports IHallTexasGameInfo
     * @interface IHallTexasGameInfo
     * @property {string|null} [gameId] HallTexasGameInfo gameId
     * @property {IAboutTexasGameInfo|null} [aboutGameInfo] HallTexasGameInfo aboutGameInfo
     * @property {IBasicTexasConfig|null} [basicTexasConfig] HallTexasGameInfo basicTexasConfig
     */

    /**
     * Constructs a new HallTexasGameInfo.
     * @exports HallTexasGameInfo
     * @classdesc Represents a HallTexasGameInfo.
     * @implements IHallTexasGameInfo
     * @constructor
     * @param {IHallTexasGameInfo=} [p] Properties to set
     */
    function HallTexasGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HallTexasGameInfo gameId.
     * @member {string} gameId
     * @memberof HallTexasGameInfo
     * @instance
     */
    HallTexasGameInfo.prototype.gameId = "";

    /**
     * HallTexasGameInfo aboutGameInfo.
     * @member {IAboutTexasGameInfo|null|undefined} aboutGameInfo
     * @memberof HallTexasGameInfo
     * @instance
     */
    HallTexasGameInfo.prototype.aboutGameInfo = null;

    /**
     * HallTexasGameInfo basicTexasConfig.
     * @member {IBasicTexasConfig|null|undefined} basicTexasConfig
     * @memberof HallTexasGameInfo
     * @instance
     */
    HallTexasGameInfo.prototype.basicTexasConfig = null;

    /**
     * Encodes the specified HallTexasGameInfo message. Does not implicitly {@link HallTexasGameInfo.verify|verify} messages.
     * @function encode
     * @memberof HallTexasGameInfo
     * @static
     * @param {IHallTexasGameInfo} m HallTexasGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    HallTexasGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.aboutGameInfo != null && Object.hasOwnProperty.call(m, "aboutGameInfo"))
            $root.AboutTexasGameInfo.encode(m.aboutGameInfo, w.uint32(18).fork()).ldelim();
        if (m.basicTexasConfig != null && Object.hasOwnProperty.call(m, "basicTexasConfig"))
            $root.BasicTexasConfig.encode(m.basicTexasConfig, w.uint32(26).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a HallTexasGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HallTexasGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HallTexasGameInfo} HallTexasGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    HallTexasGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HallTexasGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.aboutGameInfo = $root.AboutTexasGameInfo.decode(r, r.uint32());
                break;
            case 3:
                m.basicTexasConfig = $root.BasicTexasConfig.decode(r, r.uint32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return HallTexasGameInfo;
})();

$root.HallSubGameInfo = (function() {

    /**
     * Properties of a HallSubGameInfo.
     * @exports IHallSubGameInfo
     * @interface IHallSubGameInfo
     * @property {string|null} [gameId] HallSubGameInfo gameId
     * @property {string|null} [gameName] HallSubGameInfo gameName
     * @property {GameType|null} [gameType] HallSubGameInfo gameType
     * @property {GameCurrencyType|null} [currencyType] HallSubGameInfo currencyType
     */

    /**
     * Constructs a new HallSubGameInfo.
     * @exports HallSubGameInfo
     * @classdesc Represents a HallSubGameInfo.
     * @implements IHallSubGameInfo
     * @constructor
     * @param {IHallSubGameInfo=} [p] Properties to set
     */
    function HallSubGameInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HallSubGameInfo gameId.
     * @member {string} gameId
     * @memberof HallSubGameInfo
     * @instance
     */
    HallSubGameInfo.prototype.gameId = "";

    /**
     * HallSubGameInfo gameName.
     * @member {string} gameName
     * @memberof HallSubGameInfo
     * @instance
     */
    HallSubGameInfo.prototype.gameName = "";

    /**
     * HallSubGameInfo gameType.
     * @member {GameType} gameType
     * @memberof HallSubGameInfo
     * @instance
     */
    HallSubGameInfo.prototype.gameType = 0;

    /**
     * HallSubGameInfo currencyType.
     * @member {GameCurrencyType} currencyType
     * @memberof HallSubGameInfo
     * @instance
     */
    HallSubGameInfo.prototype.currencyType = 0;

    /**
     * Encodes the specified HallSubGameInfo message. Does not implicitly {@link HallSubGameInfo.verify|verify} messages.
     * @function encode
     * @memberof HallSubGameInfo
     * @static
     * @param {IHallSubGameInfo} m HallSubGameInfo message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    HallSubGameInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.gameName != null && Object.hasOwnProperty.call(m, "gameName"))
            w.uint32(18).string(m.gameName);
        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
            w.uint32(24).int32(m.gameType);
        if (m.currencyType != null && Object.hasOwnProperty.call(m, "currencyType"))
            w.uint32(32).int32(m.currencyType);
        return w;
    };

    /**
     * Decodes a HallSubGameInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HallSubGameInfo
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HallSubGameInfo} HallSubGameInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    HallSubGameInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HallSubGameInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.gameName = r.string();
                break;
            case 3:
                m.gameType = r.int32();
                break;
            case 4:
                m.currencyType = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return HallSubGameInfo;
})();

$root.S2CGetUserInfo = (function() {

    /**
     * Properties of a S2CGetUserInfo.
     * @exports IS2CGetUserInfo
     * @interface IS2CGetUserInfo
     * @property {ICommonResult|null} [result] S2CGetUserInfo result
     * @property {IUserInfo|null} [userInfo] S2CGetUserInfo userInfo
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
     * S2CGetUserInfo result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.result = null;

    /**
     * S2CGetUserInfo userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof S2CGetUserInfo
     * @instance
     */
    S2CGetUserInfo.prototype.userInfo = null;

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
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
            $root.UserInfo.encode(m.userInfo, w.uint32(18).fork()).ldelim();
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
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                m.userInfo = $root.UserInfo.decode(r, r.uint32());
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
     * @property {IUserInfo|null} [userInfo] S2CChangeUserInfo userInfo
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
     * S2CChangeUserInfo userInfo.
     * @member {IUserInfo|null|undefined} userInfo
     * @memberof S2CChangeUserInfo
     * @instance
     */
    S2CChangeUserInfo.prototype.userInfo = null;

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
        if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
            $root.UserInfo.encode(m.userInfo, w.uint32(26).fork()).ldelim();
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
            case 3:
                m.userInfo = $root.UserInfo.decode(r, r.uint32());
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

$root.S2CHallTexasGameInfoResp = (function() {

    /**
     * Properties of a S2CHallTexasGameInfoResp.
     * @exports IS2CHallTexasGameInfoResp
     * @interface IS2CHallTexasGameInfoResp
     * @property {ICommonResult|null} [result] S2CHallTexasGameInfoResp result
     * @property {Array.<IHallTexasGameInfo>|null} [gameList] S2CHallTexasGameInfoResp gameList
     */

    /**
     * Constructs a new S2CHallTexasGameInfoResp.
     * @exports S2CHallTexasGameInfoResp
     * @classdesc Represents a S2CHallTexasGameInfoResp.
     * @implements IS2CHallTexasGameInfoResp
     * @constructor
     * @param {IS2CHallTexasGameInfoResp=} [p] Properties to set
     */
    function S2CHallTexasGameInfoResp(p) {
        this.gameList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CHallTexasGameInfoResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CHallTexasGameInfoResp
     * @instance
     */
    S2CHallTexasGameInfoResp.prototype.result = null;

    /**
     * S2CHallTexasGameInfoResp gameList.
     * @member {Array.<IHallTexasGameInfo>} gameList
     * @memberof S2CHallTexasGameInfoResp
     * @instance
     */
    S2CHallTexasGameInfoResp.prototype.gameList = $util.emptyArray;

    /**
     * Encodes the specified S2CHallTexasGameInfoResp message. Does not implicitly {@link S2CHallTexasGameInfoResp.verify|verify} messages.
     * @function encode
     * @memberof S2CHallTexasGameInfoResp
     * @static
     * @param {IS2CHallTexasGameInfoResp} m S2CHallTexasGameInfoResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CHallTexasGameInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameList != null && m.gameList.length) {
            for (var i = 0; i < m.gameList.length; ++i)
                $root.HallTexasGameInfo.encode(m.gameList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CHallTexasGameInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CHallTexasGameInfoResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CHallTexasGameInfoResp} S2CHallTexasGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CHallTexasGameInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CHallTexasGameInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.gameList && m.gameList.length))
                    m.gameList = [];
                m.gameList.push($root.HallTexasGameInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CHallTexasGameInfoResp;
})();

$root.S2CGetHallSubGameInfoResp = (function() {

    /**
     * Properties of a S2CGetHallSubGameInfoResp.
     * @exports IS2CGetHallSubGameInfoResp
     * @interface IS2CGetHallSubGameInfoResp
     * @property {ICommonResult|null} [result] S2CGetHallSubGameInfoResp result
     * @property {Array.<IHallSubGameInfo>|null} [gameList] S2CGetHallSubGameInfoResp gameList
     */

    /**
     * Constructs a new S2CGetHallSubGameInfoResp.
     * @exports S2CGetHallSubGameInfoResp
     * @classdesc Represents a S2CGetHallSubGameInfoResp.
     * @implements IS2CGetHallSubGameInfoResp
     * @constructor
     * @param {IS2CGetHallSubGameInfoResp=} [p] Properties to set
     */
    function S2CGetHallSubGameInfoResp(p) {
        this.gameList = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CGetHallSubGameInfoResp result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CGetHallSubGameInfoResp
     * @instance
     */
    S2CGetHallSubGameInfoResp.prototype.result = null;

    /**
     * S2CGetHallSubGameInfoResp gameList.
     * @member {Array.<IHallSubGameInfo>} gameList
     * @memberof S2CGetHallSubGameInfoResp
     * @instance
     */
    S2CGetHallSubGameInfoResp.prototype.gameList = $util.emptyArray;

    /**
     * Encodes the specified S2CGetHallSubGameInfoResp message. Does not implicitly {@link S2CGetHallSubGameInfoResp.verify|verify} messages.
     * @function encode
     * @memberof S2CGetHallSubGameInfoResp
     * @static
     * @param {IS2CGetHallSubGameInfoResp} m S2CGetHallSubGameInfoResp message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CGetHallSubGameInfoResp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.gameList != null && m.gameList.length) {
            for (var i = 0; i < m.gameList.length; ++i)
                $root.HallSubGameInfo.encode(m.gameList[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a S2CGetHallSubGameInfoResp message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetHallSubGameInfoResp
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CGetHallSubGameInfoResp} S2CGetHallSubGameInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetHallSubGameInfoResp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CGetHallSubGameInfoResp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.result = $root.CommonResult.decode(r, r.uint32());
                break;
            case 2:
                if (!(m.gameList && m.gameList.length))
                    m.gameList = [];
                m.gameList.push($root.HallSubGameInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CGetHallSubGameInfoResp;
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
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SLogin;
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

$root.C2SVerifyPhoneNumber = (function() {

    /**
     * Properties of a C2SVerifyPhoneNumber.
     * @exports IC2SVerifyPhoneNumber
     * @interface IC2SVerifyPhoneNumber
     * @property {string|null} [phoneNumber] C2SVerifyPhoneNumber phoneNumber
     */

    /**
     * Constructs a new C2SVerifyPhoneNumber.
     * @exports C2SVerifyPhoneNumber
     * @classdesc Represents a C2SVerifyPhoneNumber.
     * @implements IC2SVerifyPhoneNumber
     * @constructor
     * @param {IC2SVerifyPhoneNumber=} [p] Properties to set
     */
    function C2SVerifyPhoneNumber(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * C2SVerifyPhoneNumber phoneNumber.
     * @member {string} phoneNumber
     * @memberof C2SVerifyPhoneNumber
     * @instance
     */
    C2SVerifyPhoneNumber.prototype.phoneNumber = "";

    /**
     * Encodes the specified C2SVerifyPhoneNumber message. Does not implicitly {@link C2SVerifyPhoneNumber.verify|verify} messages.
     * @function encode
     * @memberof C2SVerifyPhoneNumber
     * @static
     * @param {IC2SVerifyPhoneNumber} m C2SVerifyPhoneNumber message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    C2SVerifyPhoneNumber.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.phoneNumber != null && Object.hasOwnProperty.call(m, "phoneNumber"))
            w.uint32(10).string(m.phoneNumber);
        return w;
    };

    /**
     * Decodes a C2SVerifyPhoneNumber message from the specified reader or buffer.
     * @function decode
     * @memberof C2SVerifyPhoneNumber
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {C2SVerifyPhoneNumber} C2SVerifyPhoneNumber
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    C2SVerifyPhoneNumber.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.C2SVerifyPhoneNumber();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.phoneNumber = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return C2SVerifyPhoneNumber;
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
 */
$root.LoginType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "LoginType_UnKnow"] = 0;
    values[valuesById[1] = "LoginType_PhoneCode"] = 1;
    values[valuesById[2] = "LoginType_PhonePsw"] = 2;
    return values;
})();

$root.S2CLogin = (function() {

    /**
     * Properties of a S2CLogin.
     * @exports IS2CLogin
     * @interface IS2CLogin
     * @property {ICommonResult|null} [result] S2CLogin result
     * @property {string|null} [token] S2CLogin token
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
     * S2CLogin token.
     * @member {string} token
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.token = "";

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
        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
            w.uint32(18).string(m.token);
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
            case 2:
                m.token = r.string();
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

$root.S2CVerifyPhoneNumber = (function() {

    /**
     * Properties of a S2CVerifyPhoneNumber.
     * @exports IS2CVerifyPhoneNumber
     * @interface IS2CVerifyPhoneNumber
     * @property {ICommonResult|null} [result] S2CVerifyPhoneNumber result
     */

    /**
     * Constructs a new S2CVerifyPhoneNumber.
     * @exports S2CVerifyPhoneNumber
     * @classdesc Represents a S2CVerifyPhoneNumber.
     * @implements IS2CVerifyPhoneNumber
     * @constructor
     * @param {IS2CVerifyPhoneNumber=} [p] Properties to set
     */
    function S2CVerifyPhoneNumber(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CVerifyPhoneNumber result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CVerifyPhoneNumber
     * @instance
     */
    S2CVerifyPhoneNumber.prototype.result = null;

    /**
     * Encodes the specified S2CVerifyPhoneNumber message. Does not implicitly {@link S2CVerifyPhoneNumber.verify|verify} messages.
     * @function encode
     * @memberof S2CVerifyPhoneNumber
     * @static
     * @param {IS2CVerifyPhoneNumber} m S2CVerifyPhoneNumber message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CVerifyPhoneNumber.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CVerifyPhoneNumber message from the specified reader or buffer.
     * @function decode
     * @memberof S2CVerifyPhoneNumber
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CVerifyPhoneNumber} S2CVerifyPhoneNumber
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CVerifyPhoneNumber.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CVerifyPhoneNumber();
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

    return S2CVerifyPhoneNumber;
})();

/**
 * MessageId enum.
 * @exports MessageId
 * @enum {number}
 * @property {number} MSG_UnKnow=0 MSG_UnKnow value
 * @property {number} C2S_HeartbeatPing=10 C2S_HeartbeatPing value
 * @property {number} S2C_HeartbeatPong=11 S2C_HeartbeatPong value
 * @property {number} S2C_Kick=20 S2C_Kick value
 * @property {number} MSG_LoginBegin=1001 MSG_LoginBegin value
 * @property {number} C2S_Login=1002 C2S_Login value
 * @property {number} C2S_Register=1004 C2S_Register value
 * @property {number} C2S_GetSmsCode=1005 C2S_GetSmsCode value
 * @property {number} C2S_VerifyPhoneNumber=1006 C2S_VerifyPhoneNumber value
 * @property {number} S2C_Login=1101 S2C_Login value
 * @property {number} S2C_Register=1102 S2C_Register value
 * @property {number} S2C_GetSmsCode=1103 S2C_GetSmsCode value
 * @property {number} S2C_VerifyPhoneNumber=1104 S2C_VerifyPhoneNumber value
 * @property {number} MSG_LoginEnd=2000 MSG_LoginEnd value
 * @property {number} MSG_HallBegin=2001 MSG_HallBegin value
 * @property {number} C2S_Logout=2002 C2S_Logout value
 * @property {number} C2S_GetUserInfo=2003 C2S_GetUserInfo value
 * @property {number} C2S_ChangeUserInfo=2004 C2S_ChangeUserInfo value
 * @property {number} C2S_GetHallTexasGameInfo=2005 C2S_GetHallTexasGameInfo value
 * @property {number} C2S_GetHallSubGameInfo=2006 C2S_GetHallSubGameInfo value
 * @property {number} S2C_GetUserInfo=3001 S2C_GetUserInfo value
 * @property {number} S2C_ChangeUserInfo=3002 S2C_ChangeUserInfo value
 * @property {number} S2C_GetHallTexasGameInfoResp=3003 S2C_GetHallTexasGameInfoResp value
 * @property {number} S2C_GetHallSubGameInfoResp=3004 S2C_GetHallSubGameInfoResp value
 * @property {number} MSG_HallEnd=3500 MSG_HallEnd value
 * @property {number} MSG_ClubBegin=4001 MSG_ClubBegin value
 * @property {number} C2S_CreateClub=4002 C2S_CreateClub value
 * @property {number} C2S_GetClubInfos=4003 C2S_GetClubInfos value
 * @property {number} C2S_EnterClub=4004 C2S_EnterClub value
 * @property {number} C2S_SearchClub=4005 C2S_SearchClub value
 * @property {number} C2S_JoinClub=4006 C2S_JoinClub value
 * @property {number} C2S_GetClubMember=4007 C2S_GetClubMember value
 * @property {number} C2S_AddClubMember=4008 C2S_AddClubMember value
 * @property {number} C2S_DismissClub=4009 C2S_DismissClub value
 * @property {number} C2S_QuitClub=4010 C2S_QuitClub value
 * @property {number} C2S_RemoveMember=4011 C2S_RemoveMember value
 * @property {number} C2S_ModifyClubInfo=4012 C2S_ModifyClubInfo value
 * @property {number} C2S_ShareClubScore=4013 C2S_ShareClubScore value
 * @property {number} C2S_ModifyMemberRole=4014 C2S_ModifyMemberRole value
 * @property {number} C2S_CreateClubGame=4015 C2S_CreateClubGame value
 * @property {number} C2S_GetClubTexasGameInfo=4016 C2S_GetClubTexasGameInfo value
 * @property {number} C2S_GetClubSubGameInfo=4017 C2S_GetClubSubGameInfo value
 * @property {number} C2S_DismissClubGame=4018 C2S_DismissClubGame value
 * @property {number} S2C_CreateClub=4501 S2C_CreateClub value
 * @property {number} S2C_GetClubInfos=4502 S2C_GetClubInfos value
 * @property {number} S2C_EnterClub=4503 S2C_EnterClub value
 * @property {number} S2C_SearchClub=4504 S2C_SearchClub value
 * @property {number} S2C_JoinClub=4505 S2C_JoinClub value
 * @property {number} S2C_GetClubMember=4506 S2C_GetClubMember value
 * @property {number} S2C_AddClubMember=4507 S2C_AddClubMember value
 * @property {number} S2C_DismissClub=4508 S2C_DismissClub value
 * @property {number} S2C_QuitClub=4509 S2C_QuitClub value
 * @property {number} S2C_RemoveMember=4510 S2C_RemoveMember value
 * @property {number} S2C_ModifyClubInfo=4511 S2C_ModifyClubInfo value
 * @property {number} S2C_ShareClubScore=4512 S2C_ShareClubScore value
 * @property {number} S2C_ModifyMemberRole=4513 S2C_ModifyMemberRole value
 * @property {number} S2C_CreateClubGame=4514 S2C_CreateClubGame value
 * @property {number} S2C_GetClubTexasGameInfoResp=4515 S2C_GetClubTexasGameInfoResp value
 * @property {number} S2C_GetClubSubGameInfoResp=4516 S2C_GetClubSubGameInfoResp value
 * @property {number} S2C_DismissClubGame=4517 S2C_DismissClubGame value
 * @property {number} S2C_ClubJoinNotify=4611 S2C_ClubJoinNotify value
 * @property {number} S2C_JoinClubNotify=4612 S2C_JoinClubNotify value
 * @property {number} S2C_RemoveNotify=4613 S2C_RemoveNotify value
 * @property {number} S2C_DismissClubNotify=4614 S2C_DismissClubNotify value
 * @property {number} S2C_ClubTotalPointNotify=4615 S2C_ClubTotalPointNotify value
 * @property {number} S2C_ClubPlayerPointNotify=4616 S2C_ClubPlayerPointNotify value
 * @property {number} S2C_ModifyMemberRoleNotify=4617 S2C_ModifyMemberRoleNotify value
 * @property {number} S2C_DismissClubGameNotify=4618 S2C_DismissClubGameNotify value
 * @property {number} MSG_ClubEnd=5000 MSG_ClubEnd value
 * @property {number} MSG_TexasCashBegin=5001 MSG_TexasCashBegin value
 * @property {number} C2S_TexasCashEnterGame=5002 C2S_TexasCashEnterGame value
 * @property {number} C2S_TexasCashExitGame=5003 C2S_TexasCashExitGame value
 * @property {number} C2S_TexasCashOpen=5004 C2S_TexasCashOpen value
 * @property {number} C2S_TexasCashSitDown=5005 C2S_TexasCashSitDown value
 * @property {number} C2S_TexasCashStandUp=5007 C2S_TexasCashStandUp value
 * @property {number} C2S_TexasCashBringIn=5008 C2S_TexasCashBringIn value
 * @property {number} C2S_TexasCashAction=5009 C2S_TexasCashAction value
 * @property {number} C2S_TexasCashBuyInsurance=5010 C2S_TexasCashBuyInsurance value
 * @property {number} C2S_TexasCashChat=5011 C2S_TexasCashChat value
 * @property {number} C2S_TexasCashGetObList=5012 C2S_TexasCashGetObList value
 * @property {number} CS2_TexasCashGetBringInList=5013 CS2_TexasCashGetBringInList value
 * @property {number} C2S_TexasCashRefresh=5014 C2S_TexasCashRefresh value
 * @property {number} C2S_TexasCashExaminePublicCard=5015 C2S_TexasCashExaminePublicCard value
 * @property {number} C2S_TexasCashExaminePrivateCard=5016 C2S_TexasCashExaminePrivateCard value
 * @property {number} C2S_TexasCashExtraThink=5017 C2S_TexasCashExtraThink value
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
 * @property {number} S2C_CommonBringInTimerNotify=8110 S2C_CommonBringInTimerNotify value
 * @property {number} S2C_CommonBringInNotify=8111 S2C_CommonBringInNotify value
 * @property {number} S2C_CommonSitDownNotify=8112 S2C_CommonSitDownNotify value
 * @property {number} S2C_CommonStandUpNotify=8113 S2C_CommonStandUpNotify value
 * @property {number} S2C_CommonActionNotify=8114 S2C_CommonActionNotify value
 * @property {number} S2C_CommonBuyInsuranceNotify=8115 S2C_CommonBuyInsuranceNotify value
 * @property {number} S2C_CommonChatNotify=8116 S2C_CommonChatNotify value
 * @property {number} S2C_CommonExtraThinkNotify=8117 S2C_CommonExtraThinkNotify value
 * @property {number} S2C_CommonOpenNotify=8250 S2C_CommonOpenNotify value
 * @property {number} S2C_CommonRoundStartNotify=8251 S2C_CommonRoundStartNotify value
 * @property {number} S2C_CommonPreFlopRoundNotify=8252 S2C_CommonPreFlopRoundNotify value
 * @property {number} S2C_CommonFlopRoundNotify=8253 S2C_CommonFlopRoundNotify value
 * @property {number} S2C_CommonTurnRoundNotify=8254 S2C_CommonTurnRoundNotify value
 * @property {number} S2C_CommonRiverRoundNotify=8255 S2C_CommonRiverRoundNotify value
 * @property {number} S2C_CommonCurrentActionNotify=8256 S2C_CommonCurrentActionNotify value
 * @property {number} S2C_CommonSettlementNotify=8257 S2C_CommonSettlementNotify value
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
    values[valuesById[1001] = "MSG_LoginBegin"] = 1001;
    values[valuesById[1002] = "C2S_Login"] = 1002;
    values[valuesById[1004] = "C2S_Register"] = 1004;
    values[valuesById[1005] = "C2S_GetSmsCode"] = 1005;
    values[valuesById[1006] = "C2S_VerifyPhoneNumber"] = 1006;
    values[valuesById[1101] = "S2C_Login"] = 1101;
    values[valuesById[1102] = "S2C_Register"] = 1102;
    values[valuesById[1103] = "S2C_GetSmsCode"] = 1103;
    values[valuesById[1104] = "S2C_VerifyPhoneNumber"] = 1104;
    values[valuesById[2000] = "MSG_LoginEnd"] = 2000;
    values[valuesById[2001] = "MSG_HallBegin"] = 2001;
    values[valuesById[2002] = "C2S_Logout"] = 2002;
    values[valuesById[2003] = "C2S_GetUserInfo"] = 2003;
    values[valuesById[2004] = "C2S_ChangeUserInfo"] = 2004;
    values[valuesById[2005] = "C2S_GetHallTexasGameInfo"] = 2005;
    values[valuesById[2006] = "C2S_GetHallSubGameInfo"] = 2006;
    values[valuesById[3001] = "S2C_GetUserInfo"] = 3001;
    values[valuesById[3002] = "S2C_ChangeUserInfo"] = 3002;
    values[valuesById[3003] = "S2C_GetHallTexasGameInfoResp"] = 3003;
    values[valuesById[3004] = "S2C_GetHallSubGameInfoResp"] = 3004;
    values[valuesById[3500] = "MSG_HallEnd"] = 3500;
    values[valuesById[4001] = "MSG_ClubBegin"] = 4001;
    values[valuesById[4002] = "C2S_CreateClub"] = 4002;
    values[valuesById[4003] = "C2S_GetClubInfos"] = 4003;
    values[valuesById[4004] = "C2S_EnterClub"] = 4004;
    values[valuesById[4005] = "C2S_SearchClub"] = 4005;
    values[valuesById[4006] = "C2S_JoinClub"] = 4006;
    values[valuesById[4007] = "C2S_GetClubMember"] = 4007;
    values[valuesById[4008] = "C2S_AddClubMember"] = 4008;
    values[valuesById[4009] = "C2S_DismissClub"] = 4009;
    values[valuesById[4010] = "C2S_QuitClub"] = 4010;
    values[valuesById[4011] = "C2S_RemoveMember"] = 4011;
    values[valuesById[4012] = "C2S_ModifyClubInfo"] = 4012;
    values[valuesById[4013] = "C2S_ShareClubScore"] = 4013;
    values[valuesById[4014] = "C2S_ModifyMemberRole"] = 4014;
    values[valuesById[4015] = "C2S_CreateClubGame"] = 4015;
    values[valuesById[4016] = "C2S_GetClubTexasGameInfo"] = 4016;
    values[valuesById[4017] = "C2S_GetClubSubGameInfo"] = 4017;
    values[valuesById[4018] = "C2S_DismissClubGame"] = 4018;
    values[valuesById[4501] = "S2C_CreateClub"] = 4501;
    values[valuesById[4502] = "S2C_GetClubInfos"] = 4502;
    values[valuesById[4503] = "S2C_EnterClub"] = 4503;
    values[valuesById[4504] = "S2C_SearchClub"] = 4504;
    values[valuesById[4505] = "S2C_JoinClub"] = 4505;
    values[valuesById[4506] = "S2C_GetClubMember"] = 4506;
    values[valuesById[4507] = "S2C_AddClubMember"] = 4507;
    values[valuesById[4508] = "S2C_DismissClub"] = 4508;
    values[valuesById[4509] = "S2C_QuitClub"] = 4509;
    values[valuesById[4510] = "S2C_RemoveMember"] = 4510;
    values[valuesById[4511] = "S2C_ModifyClubInfo"] = 4511;
    values[valuesById[4512] = "S2C_ShareClubScore"] = 4512;
    values[valuesById[4513] = "S2C_ModifyMemberRole"] = 4513;
    values[valuesById[4514] = "S2C_CreateClubGame"] = 4514;
    values[valuesById[4515] = "S2C_GetClubTexasGameInfoResp"] = 4515;
    values[valuesById[4516] = "S2C_GetClubSubGameInfoResp"] = 4516;
    values[valuesById[4517] = "S2C_DismissClubGame"] = 4517;
    values[valuesById[4611] = "S2C_ClubJoinNotify"] = 4611;
    values[valuesById[4612] = "S2C_JoinClubNotify"] = 4612;
    values[valuesById[4613] = "S2C_RemoveNotify"] = 4613;
    values[valuesById[4614] = "S2C_DismissClubNotify"] = 4614;
    values[valuesById[4615] = "S2C_ClubTotalPointNotify"] = 4615;
    values[valuesById[4616] = "S2C_ClubPlayerPointNotify"] = 4616;
    values[valuesById[4617] = "S2C_ModifyMemberRoleNotify"] = 4617;
    values[valuesById[4618] = "S2C_DismissClubGameNotify"] = 4618;
    values[valuesById[5000] = "MSG_ClubEnd"] = 5000;
    values[valuesById[5001] = "MSG_TexasCashBegin"] = 5001;
    values[valuesById[5002] = "C2S_TexasCashEnterGame"] = 5002;
    values[valuesById[5003] = "C2S_TexasCashExitGame"] = 5003;
    values[valuesById[5004] = "C2S_TexasCashOpen"] = 5004;
    values[valuesById[5005] = "C2S_TexasCashSitDown"] = 5005;
    values[valuesById[5007] = "C2S_TexasCashStandUp"] = 5007;
    values[valuesById[5008] = "C2S_TexasCashBringIn"] = 5008;
    values[valuesById[5009] = "C2S_TexasCashAction"] = 5009;
    values[valuesById[5010] = "C2S_TexasCashBuyInsurance"] = 5010;
    values[valuesById[5011] = "C2S_TexasCashChat"] = 5011;
    values[valuesById[5012] = "C2S_TexasCashGetObList"] = 5012;
    values[valuesById[5013] = "CS2_TexasCashGetBringInList"] = 5013;
    values[valuesById[5014] = "C2S_TexasCashRefresh"] = 5014;
    values[valuesById[5015] = "C2S_TexasCashExaminePublicCard"] = 5015;
    values[valuesById[5016] = "C2S_TexasCashExaminePrivateCard"] = 5016;
    values[valuesById[5017] = "C2S_TexasCashExtraThink"] = 5017;
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
    values[valuesById[8110] = "S2C_CommonBringInTimerNotify"] = 8110;
    values[valuesById[8111] = "S2C_CommonBringInNotify"] = 8111;
    values[valuesById[8112] = "S2C_CommonSitDownNotify"] = 8112;
    values[valuesById[8113] = "S2C_CommonStandUpNotify"] = 8113;
    values[valuesById[8114] = "S2C_CommonActionNotify"] = 8114;
    values[valuesById[8115] = "S2C_CommonBuyInsuranceNotify"] = 8115;
    values[valuesById[8116] = "S2C_CommonChatNotify"] = 8116;
    values[valuesById[8117] = "S2C_CommonExtraThinkNotify"] = 8117;
    values[valuesById[8250] = "S2C_CommonOpenNotify"] = 8250;
    values[valuesById[8251] = "S2C_CommonRoundStartNotify"] = 8251;
    values[valuesById[8252] = "S2C_CommonPreFlopRoundNotify"] = 8252;
    values[valuesById[8253] = "S2C_CommonFlopRoundNotify"] = 8253;
    values[valuesById[8254] = "S2C_CommonTurnRoundNotify"] = 8254;
    values[valuesById[8255] = "S2C_CommonRiverRoundNotify"] = 8255;
    values[valuesById[8256] = "S2C_CommonCurrentActionNotify"] = 8256;
    values[valuesById[8257] = "S2C_CommonSettlementNotify"] = 8257;
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
        if (m.publicCardList != null && m.publicCardList.length) {
            for (var i = 0; i < m.publicCardList.length; ++i)
                $root.CardInfo.encode(m.publicCardList[i], w.uint32(18).fork()).ldelim();
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
        if (m.playerList != null && m.playerList.length) {
            for (var i = 0; i < m.playerList.length; ++i)
                $root.PlayerInfo.encode(m.playerList[i], w.uint32(18).fork()).ldelim();
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
     * @property {number|null} [extraTime] S2CCommonExtraThinkResp extraTime
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
     * S2CCommonExtraThinkResp extraTime.
     * @member {number} extraTime
     * @memberof S2CCommonExtraThinkResp
     * @instance
     */
    S2CCommonExtraThinkResp.prototype.extraTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
        if (m.extraTime != null && Object.hasOwnProperty.call(m, "extraTime"))
            w.uint32(16).int64(m.extraTime);
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
                m.extraTime = r.int64();
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
     * @property {Array.<IPotInfo>|null} [potInfo] S2CCommonRoundStartNotify potInfo
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
        this.potInfo = [];
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
     * S2CCommonRoundStartNotify potInfo.
     * @member {Array.<IPotInfo>} potInfo
     * @memberof S2CCommonRoundStartNotify
     * @instance
     */
    S2CCommonRoundStartNotify.prototype.potInfo = $util.emptyArray;

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
        if (m.potInfo != null && m.potInfo.length) {
            for (var i = 0; i < m.potInfo.length; ++i)
                $root.PotInfo.encode(m.potInfo[i], w.uint32(50).fork()).ldelim();
        }
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

    return S2CCommonRoundStartNotify;
})();

$root.S2CCommonActionNotify = (function() {

    /**
     * Properties of a S2CCommonActionNotify.
     * @exports IS2CCommonActionNotify
     * @interface IS2CCommonActionNotify
     * @property {string|null} [gameId] S2CCommonActionNotify gameId
     * @property {IActionInfo|null} [actionInfo] S2CCommonActionNotify actionInfo
     * @property {Array.<IPotInfo>|null} [potInfo] S2CCommonActionNotify potInfo
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
        this.potInfo = [];
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
     * S2CCommonActionNotify potInfo.
     * @member {Array.<IPotInfo>} potInfo
     * @memberof S2CCommonActionNotify
     * @instance
     */
    S2CCommonActionNotify.prototype.potInfo = $util.emptyArray;

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
        if (m.potInfo != null && m.potInfo.length) {
            for (var i = 0; i < m.potInfo.length; ++i)
                $root.PotInfo.encode(m.potInfo[i], w.uint32(26).fork()).ldelim();
        }
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

    return S2CCommonActionNotify;
})();

$root.S2CCommonBuyInsuranceNotify = (function() {

    /**
     * Properties of a S2CCommonBuyInsuranceNotify.
     * @exports IS2CCommonBuyInsuranceNotify
     * @interface IS2CCommonBuyInsuranceNotify
     * @property {string|null} [gameId] S2CCommonBuyInsuranceNotify gameId
     * @property {string|null} [actionUid] S2CCommonBuyInsuranceNotify actionUid
     */

    /**
     * Constructs a new S2CCommonBuyInsuranceNotify.
     * @exports S2CCommonBuyInsuranceNotify
     * @classdesc Represents a S2CCommonBuyInsuranceNotify.
     * @implements IS2CCommonBuyInsuranceNotify
     * @constructor
     * @param {IS2CCommonBuyInsuranceNotify=} [p] Properties to set
     */
    function S2CCommonBuyInsuranceNotify(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CCommonBuyInsuranceNotify gameId.
     * @member {string} gameId
     * @memberof S2CCommonBuyInsuranceNotify
     * @instance
     */
    S2CCommonBuyInsuranceNotify.prototype.gameId = "";

    /**
     * S2CCommonBuyInsuranceNotify actionUid.
     * @member {string} actionUid
     * @memberof S2CCommonBuyInsuranceNotify
     * @instance
     */
    S2CCommonBuyInsuranceNotify.prototype.actionUid = "";

    /**
     * Encodes the specified S2CCommonBuyInsuranceNotify message. Does not implicitly {@link S2CCommonBuyInsuranceNotify.verify|verify} messages.
     * @function encode
     * @memberof S2CCommonBuyInsuranceNotify
     * @static
     * @param {IS2CCommonBuyInsuranceNotify} m S2CCommonBuyInsuranceNotify message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CCommonBuyInsuranceNotify.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.gameId != null && Object.hasOwnProperty.call(m, "gameId"))
            w.uint32(10).string(m.gameId);
        if (m.actionUid != null && Object.hasOwnProperty.call(m, "actionUid"))
            w.uint32(18).string(m.actionUid);
        return w;
    };

    /**
     * Decodes a S2CCommonBuyInsuranceNotify message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCommonBuyInsuranceNotify
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CCommonBuyInsuranceNotify} S2CCommonBuyInsuranceNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCommonBuyInsuranceNotify.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CCommonBuyInsuranceNotify();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.gameId = r.string();
                break;
            case 2:
                m.actionUid = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return S2CCommonBuyInsuranceNotify;
})();

$root.S2CCommonChatNotify = (function() {

    /**
     * Properties of a S2CCommonChatNotify.
     * @exports IS2CCommonChatNotify
     * @interface IS2CCommonChatNotify
     * @property {string|null} [gameId] S2CCommonChatNotify gameId
     * @property {string|null} [actionUid] S2CCommonChatNotify actionUid
     * @property {string|null} [content] S2CCommonChatNotify content
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