declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace test. */
export namespace test {

    /** Properties of a Say. */
    interface ISay {

        /** Say i32 */
        i32?: (number|null);

        /** Say i64 */
        i64?: (number|null);

        /** Say str */
        str?: (string|null);
    }

    /** Represents a Say. */
    class Say implements ISay {

        /**
         * Constructs a new Say.
         * @param [p] Properties to set
         */
        constructor(p?: test.ISay);

        /** Say i32. */
        public i32: number;

        /** Say i64. */
        public i64: number;

        /** Say str. */
        public str: string;

        /**
         * Encodes the specified Say message. Does not implicitly {@link test.Say.verify|verify} messages.
         * @param m Say message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: test.ISay, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Say message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Say
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): test.Say;
    }
}
 
}
export {}