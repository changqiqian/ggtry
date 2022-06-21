// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.Say = (function() {

        /**
         * Properties of a Say.
         * @memberof test
         * @interface ISay
         * @property {number|null} [i32] Say i32
         * @property {number|null} [i64] Say i64
         * @property {string|null} [str] Say str
         */

        /**
         * Constructs a new Say.
         * @memberof test
         * @classdesc Represents a Say.
         * @implements ISay
         * @constructor
         * @param {test.ISay=} [p] Properties to set
         */
        function Say(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Say i32.
         * @member {number} i32
         * @memberof test.Say
         * @instance
         */
        Say.prototype.i32 = 0;

        /**
         * Say i64.
         * @member {number} i64
         * @memberof test.Say
         * @instance
         */
        Say.prototype.i64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Say str.
         * @member {string} str
         * @memberof test.Say
         * @instance
         */
        Say.prototype.str = "";

        /**
         * Encodes the specified Say message. Does not implicitly {@link test.Say.verify|verify} messages.
         * @function encode
         * @memberof test.Say
         * @static
         * @param {test.ISay} m Say message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        Say.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.i32 != null && Object.hasOwnProperty.call(m, "i32"))
                w.uint32(8).int32(m.i32);
            if (m.i64 != null && Object.hasOwnProperty.call(m, "i64"))
                w.uint32(16).int64(m.i64);
            if (m.str != null && Object.hasOwnProperty.call(m, "str"))
                w.uint32(26).string(m.str);
            return w;
        };

        /**
         * Decodes a Say message from the specified reader or buffer.
         * @function decode
         * @memberof test.Say
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {test.Say} Say
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        Say.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.test.Say();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.i32 = r.int32();
                    break;
                case 2:
                    m.i64 = r.int64();
                    break;
                case 3:
                    m.str = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Say;
    })();

    return test;
})();