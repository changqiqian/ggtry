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

$root.HeartbeatPing = (function() {

    /**
     * Properties of a HeartbeatPing.
     * @exports IHeartbeatPing
     * @interface IHeartbeatPing
     */

    /**
     * Constructs a new HeartbeatPing.
     * @exports HeartbeatPing
     * @classdesc Represents a HeartbeatPing.
     * @implements IHeartbeatPing
     * @constructor
     * @param {IHeartbeatPing=} [p] Properties to set
     */
    function HeartbeatPing(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified HeartbeatPing message. Does not implicitly {@link HeartbeatPing.verify|verify} messages.
     * @function encode
     * @memberof HeartbeatPing
     * @static
     * @param {IHeartbeatPing} m HeartbeatPing message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    HeartbeatPing.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a HeartbeatPing message from the specified reader or buffer.
     * @function decode
     * @memberof HeartbeatPing
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HeartbeatPing} HeartbeatPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatPing.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HeartbeatPing();
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

    return HeartbeatPing;
})();

$root.HeartbeatPong = (function() {

    /**
     * Properties of a HeartbeatPong.
     * @exports IHeartbeatPong
     * @interface IHeartbeatPong
     */

    /**
     * Constructs a new HeartbeatPong.
     * @exports HeartbeatPong
     * @classdesc Represents a HeartbeatPong.
     * @implements IHeartbeatPong
     * @constructor
     * @param {IHeartbeatPong=} [p] Properties to set
     */
    function HeartbeatPong(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Encodes the specified HeartbeatPong message. Does not implicitly {@link HeartbeatPong.verify|verify} messages.
     * @function encode
     * @memberof HeartbeatPong
     * @static
     * @param {IHeartbeatPong} m HeartbeatPong message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    HeartbeatPong.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a HeartbeatPong message from the specified reader or buffer.
     * @function decode
     * @memberof HeartbeatPong
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HeartbeatPong} HeartbeatPong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    HeartbeatPong.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HeartbeatPong();
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

    return HeartbeatPong;
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

$root.S2CJoinClubResult = (function() {

    /**
     * Properties of a S2CJoinClubResult.
     * @exports IS2CJoinClubResult
     * @interface IS2CJoinClubResult
     * @property {ICommonResult|null} [result] S2CJoinClubResult result
     * @property {IClubDetailsInfo|null} [clubInfo] S2CJoinClubResult clubInfo
     */

    /**
     * Constructs a new S2CJoinClubResult.
     * @exports S2CJoinClubResult
     * @classdesc Represents a S2CJoinClubResult.
     * @implements IS2CJoinClubResult
     * @constructor
     * @param {IS2CJoinClubResult=} [p] Properties to set
     */
    function S2CJoinClubResult(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * S2CJoinClubResult result.
     * @member {ICommonResult|null|undefined} result
     * @memberof S2CJoinClubResult
     * @instance
     */
    S2CJoinClubResult.prototype.result = null;

    /**
     * S2CJoinClubResult clubInfo.
     * @member {IClubDetailsInfo|null|undefined} clubInfo
     * @memberof S2CJoinClubResult
     * @instance
     */
    S2CJoinClubResult.prototype.clubInfo = null;

    /**
     * Encodes the specified S2CJoinClubResult message. Does not implicitly {@link S2CJoinClubResult.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinClubResult
     * @static
     * @param {IS2CJoinClubResult} m S2CJoinClubResult message or plain object to encode
     * @param {protobuf.Writer} [w] Writer to encode to
     * @returns {protobuf.Writer} Writer
     */
    S2CJoinClubResult.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
            $root.CommonResult.encode(m.result, w.uint32(10).fork()).ldelim();
        if (m.clubInfo != null && Object.hasOwnProperty.call(m, "clubInfo"))
            $root.ClubDetailsInfo.encode(m.clubInfo, w.uint32(18).fork()).ldelim();
        return w;
    };

    /**
     * Decodes a S2CJoinClubResult message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinClubResult
     * @static
     * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {S2CJoinClubResult} S2CJoinClubResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinClubResult.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.S2CJoinClubResult();
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

    return S2CJoinClubResult;
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
 * @property {number} MSG_LoginBegin=1001 MSG_LoginBegin value
 * @property {number} C2S_Login=1002 C2S_Login value
 * @property {number} C2S_Register=1004 C2S_Register value
 * @property {number} C2S_GetSmsCode=1005 C2S_GetSmsCode value
 * @property {number} C2S_VerifyPhoneNumber=1006 C2S_VerifyPhoneNumber value
 * @property {number} S2C_Login=1100 S2C_Login value
 * @property {number} S2C_Register=1102 S2C_Register value
 * @property {number} S2C_GetSmsCode=1103 S2C_GetSmsCode value
 * @property {number} S2C_VerifyPhoneNumber=1104 S2C_VerifyPhoneNumber value
 * @property {number} MSG_LoginEnd=2000 MSG_LoginEnd value
 * @property {number} MSG_HallBegin=2001 MSG_HallBegin value
 * @property {number} C2S_Logout=2002 C2S_Logout value
 * @property {number} C2S_GetUserInfo=2003 C2S_GetUserInfo value
 * @property {number} S2C_GetUserInfo=3000 S2C_GetUserInfo value
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
 * @property {number} S2C_CreateClub=4502 S2C_CreateClub value
 * @property {number} S2C_GetClubInfos=4503 S2C_GetClubInfos value
 * @property {number} S2C_EnterClub=4504 S2C_EnterClub value
 * @property {number} S2C_SearchClub=4505 S2C_SearchClub value
 * @property {number} S2C_JoinClub=4506 S2C_JoinClub value
 * @property {number} S2C_GetClubMember=4507 S2C_GetClubMember value
 * @property {number} S2C_AddClubMember=4508 S2C_AddClubMember value
 * @property {number} S2C_DismissClub=4509 S2C_DismissClub value
 * @property {number} S2C_QuitClub=4510 S2C_QuitClub value
 * @property {number} S2C_RemoveMember=4511 S2C_RemoveMember value
 * @property {number} S2C_ClubJoinNotify=4610 S2C_ClubJoinNotify value
 * @property {number} S2C_JoinClubResult=4611 S2C_JoinClubResult value
 * @property {number} S2C_RemoveNotify=46112 S2C_RemoveNotify value
 * @property {number} MSG_ClubEnd=5000 MSG_ClubEnd value
 */
$root.MessageId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MSG_UnKnow"] = 0;
    values[valuesById[10] = "C2S_HeartbeatPing"] = 10;
    values[valuesById[11] = "S2C_HeartbeatPong"] = 11;
    values[valuesById[1001] = "MSG_LoginBegin"] = 1001;
    values[valuesById[1002] = "C2S_Login"] = 1002;
    values[valuesById[1004] = "C2S_Register"] = 1004;
    values[valuesById[1005] = "C2S_GetSmsCode"] = 1005;
    values[valuesById[1006] = "C2S_VerifyPhoneNumber"] = 1006;
    values[valuesById[1100] = "S2C_Login"] = 1100;
    values[valuesById[1102] = "S2C_Register"] = 1102;
    values[valuesById[1103] = "S2C_GetSmsCode"] = 1103;
    values[valuesById[1104] = "S2C_VerifyPhoneNumber"] = 1104;
    values[valuesById[2000] = "MSG_LoginEnd"] = 2000;
    values[valuesById[2001] = "MSG_HallBegin"] = 2001;
    values[valuesById[2002] = "C2S_Logout"] = 2002;
    values[valuesById[2003] = "C2S_GetUserInfo"] = 2003;
    values[valuesById[3000] = "S2C_GetUserInfo"] = 3000;
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
    values[valuesById[4502] = "S2C_CreateClub"] = 4502;
    values[valuesById[4503] = "S2C_GetClubInfos"] = 4503;
    values[valuesById[4504] = "S2C_EnterClub"] = 4504;
    values[valuesById[4505] = "S2C_SearchClub"] = 4505;
    values[valuesById[4506] = "S2C_JoinClub"] = 4506;
    values[valuesById[4507] = "S2C_GetClubMember"] = 4507;
    values[valuesById[4508] = "S2C_AddClubMember"] = 4508;
    values[valuesById[4509] = "S2C_DismissClub"] = 4509;
    values[valuesById[4510] = "S2C_QuitClub"] = 4510;
    values[valuesById[4511] = "S2C_RemoveMember"] = 4511;
    values[valuesById[4610] = "S2C_ClubJoinNotify"] = 4610;
    values[valuesById[4611] = "S2C_JoinClubResult"] = 4611;
    values[valuesById[46112] = "S2C_RemoveNotify"] = 46112;
    values[valuesById[5000] = "MSG_ClubEnd"] = 5000;
    return values;
})();