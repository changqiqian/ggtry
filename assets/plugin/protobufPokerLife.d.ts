declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace PokerLife. */
export namespace PokerLife {

    /** Properties of a MessageHeader. */
    interface IMessageHeader {

        /** MessageHeader msgStatus */
        msgStatus: PokerLife.MsgStatus;

        /** MessageHeader errorCode */
        errorCode?: (PokerLife.ErrorCode|null);

        /** MessageHeader errorContent */
        errorContent?: (string|null);
    }

    /** Represents a MessageHeader. */
    class MessageHeader implements IMessageHeader {

        /**
         * Constructs a new MessageHeader.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IMessageHeader);

        /** MessageHeader msgStatus. */
        public msgStatus: PokerLife.MsgStatus;

        /** MessageHeader errorCode. */
        public errorCode: PokerLife.ErrorCode;

        /** MessageHeader errorContent. */
        public errorContent: string;

        /**
         * Encodes the specified MessageHeader message. Does not implicitly {@link PokerLife.MessageHeader.verify|verify} messages.
         * @param m MessageHeader message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IMessageHeader, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MessageHeader message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.MessageHeader;
    }

    /** MsgStatus enum. */
    enum MsgStatus {
        Success = 0,
        Failed = 1
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        Unknow = 0
    }

    /** MsgId enum. */
    enum MsgId {
        C2S_Register = 0,
        S2C_Register = 1,
        C2S_GetSmsCode = 2,
        S2C_GetSmsCode = 3,
        C2S_LoginWithSmsCode = 4,
        S2C_LoginWithSmsCode = 5,
        C2S_LoginWithPwd = 6,
        S2C_LoginWithPwd = 7,
        C2S_GetUserInfo = 8,
        S2C_GetUserInfo = 9,
        C2S_ResetPassword = 10,
        S2C_ResetPassword = 11
    }

    /** Namespace register. */
    namespace register {

        /** Properties of a C2S_Register. */
        interface IC2S_Register {

            /** C2S_Register baseInfo */
            baseInfo: PokerLife.IUserBaseInfo;

            /** C2S_Register password */
            password: string;

            /** C2S_Register smsCode */
            smsCode: string;
        }

        /** Represents a C2S_Register. */
        class C2S_Register implements IC2S_Register {

            /**
             * Constructs a new C2S_Register.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IC2S_Register);

            /** C2S_Register baseInfo. */
            public baseInfo: PokerLife.IUserBaseInfo;

            /** C2S_Register password. */
            public password: string;

            /** C2S_Register smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_Register message. Does not implicitly {@link PokerLife.register.C2S_Register.verify|verify} messages.
             * @param m C2S_Register message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IC2S_Register, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_Register message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.C2S_Register;
        }

        /** Properties of a S2C_Register. */
        interface IS2C_Register {

            /** S2C_Register result */
            result: boolean;
        }

        /** Represents a S2C_Register. */
        class S2C_Register implements IS2C_Register {

            /**
             * Constructs a new S2C_Register.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IS2C_Register);

            /** S2C_Register result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_Register message. Does not implicitly {@link PokerLife.register.S2C_Register.verify|verify} messages.
             * @param m S2C_Register message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IS2C_Register, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_Register message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.S2C_Register;
        }

        /** Properties of a C2S_GetSmsCode. */
        interface IC2S_GetSmsCode {

            /** C2S_GetSmsCode smsCodeType */
            smsCodeType: PokerLife.register.SmsCodeType;
        }

        /** Represents a C2S_GetSmsCode. */
        class C2S_GetSmsCode implements IC2S_GetSmsCode {

            /**
             * Constructs a new C2S_GetSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IC2S_GetSmsCode);

            /** C2S_GetSmsCode smsCodeType. */
            public smsCodeType: PokerLife.register.SmsCodeType;

            /**
             * Encodes the specified C2S_GetSmsCode message. Does not implicitly {@link PokerLife.register.C2S_GetSmsCode.verify|verify} messages.
             * @param m C2S_GetSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IC2S_GetSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_GetSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.C2S_GetSmsCode;
        }

        /** Properties of a S2C_GetSmsCode. */
        interface IS2C_GetSmsCode {

            /** S2C_GetSmsCode smsCodeType */
            smsCodeType: PokerLife.register.SmsCodeType;

            /** S2C_GetSmsCode smsCode */
            smsCode: number;
        }

        /** Represents a S2C_GetSmsCode. */
        class S2C_GetSmsCode implements IS2C_GetSmsCode {

            /**
             * Constructs a new S2C_GetSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IS2C_GetSmsCode);

            /** S2C_GetSmsCode smsCodeType. */
            public smsCodeType: PokerLife.register.SmsCodeType;

            /** S2C_GetSmsCode smsCode. */
            public smsCode: number;

            /**
             * Encodes the specified S2C_GetSmsCode message. Does not implicitly {@link PokerLife.register.S2C_GetSmsCode.verify|verify} messages.
             * @param m S2C_GetSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IS2C_GetSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_GetSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.S2C_GetSmsCode;
        }

        /** Properties of a C2S_LoginWithSmsCode. */
        interface IC2S_LoginWithSmsCode {

            /** C2S_LoginWithSmsCode phoneNum */
            phoneNum: string;

            /** C2S_LoginWithSmsCode smsCode */
            smsCode: string;
        }

        /** Represents a C2S_LoginWithSmsCode. */
        class C2S_LoginWithSmsCode implements IC2S_LoginWithSmsCode {

            /**
             * Constructs a new C2S_LoginWithSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IC2S_LoginWithSmsCode);

            /** C2S_LoginWithSmsCode phoneNum. */
            public phoneNum: string;

            /** C2S_LoginWithSmsCode smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_LoginWithSmsCode message. Does not implicitly {@link PokerLife.register.C2S_LoginWithSmsCode.verify|verify} messages.
             * @param m C2S_LoginWithSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IC2S_LoginWithSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_LoginWithSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.C2S_LoginWithSmsCode;
        }

        /** Properties of a S2C_LoginWithSmsCode. */
        interface IS2C_LoginWithSmsCode {

            /** S2C_LoginWithSmsCode result */
            result: boolean;
        }

        /** Represents a S2C_LoginWithSmsCode. */
        class S2C_LoginWithSmsCode implements IS2C_LoginWithSmsCode {

            /**
             * Constructs a new S2C_LoginWithSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IS2C_LoginWithSmsCode);

            /** S2C_LoginWithSmsCode result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_LoginWithSmsCode message. Does not implicitly {@link PokerLife.register.S2C_LoginWithSmsCode.verify|verify} messages.
             * @param m S2C_LoginWithSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IS2C_LoginWithSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_LoginWithSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.S2C_LoginWithSmsCode;
        }

        /** Properties of a C2S_LoginWithPwd. */
        interface IC2S_LoginWithPwd {

            /** C2S_LoginWithPwd phoneNum */
            phoneNum: string;

            /** C2S_LoginWithPwd password */
            password: string;
        }

        /** Represents a C2S_LoginWithPwd. */
        class C2S_LoginWithPwd implements IC2S_LoginWithPwd {

            /**
             * Constructs a new C2S_LoginWithPwd.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IC2S_LoginWithPwd);

            /** C2S_LoginWithPwd phoneNum. */
            public phoneNum: string;

            /** C2S_LoginWithPwd password. */
            public password: string;

            /**
             * Encodes the specified C2S_LoginWithPwd message. Does not implicitly {@link PokerLife.register.C2S_LoginWithPwd.verify|verify} messages.
             * @param m C2S_LoginWithPwd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IC2S_LoginWithPwd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_LoginWithPwd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.C2S_LoginWithPwd;
        }

        /** Properties of a S2C_LoginWithPwd. */
        interface IS2C_LoginWithPwd {

            /** S2C_LoginWithPwd result */
            result: boolean;
        }

        /** Represents a S2C_LoginWithPwd. */
        class S2C_LoginWithPwd implements IS2C_LoginWithPwd {

            /**
             * Constructs a new S2C_LoginWithPwd.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IS2C_LoginWithPwd);

            /** S2C_LoginWithPwd result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_LoginWithPwd message. Does not implicitly {@link PokerLife.register.S2C_LoginWithPwd.verify|verify} messages.
             * @param m S2C_LoginWithPwd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IS2C_LoginWithPwd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_LoginWithPwd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.S2C_LoginWithPwd;
        }

        /** Properties of a C2S_ResetPassword. */
        interface IC2S_ResetPassword {

            /** C2S_ResetPassword phoneNum */
            phoneNum: string;

            /** C2S_ResetPassword password */
            password: string;

            /** C2S_ResetPassword smsCode */
            smsCode: string;
        }

        /** Represents a C2S_ResetPassword. */
        class C2S_ResetPassword implements IC2S_ResetPassword {

            /**
             * Constructs a new C2S_ResetPassword.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IC2S_ResetPassword);

            /** C2S_ResetPassword phoneNum. */
            public phoneNum: string;

            /** C2S_ResetPassword password. */
            public password: string;

            /** C2S_ResetPassword smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_ResetPassword message. Does not implicitly {@link PokerLife.register.C2S_ResetPassword.verify|verify} messages.
             * @param m C2S_ResetPassword message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IC2S_ResetPassword, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_ResetPassword message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.C2S_ResetPassword;
        }

        /** Properties of a S2C_ResetPassword. */
        interface IS2C_ResetPassword {

            /** S2C_ResetPassword result */
            result: boolean;
        }

        /** Represents a S2C_ResetPassword. */
        class S2C_ResetPassword implements IS2C_ResetPassword {

            /**
             * Constructs a new S2C_ResetPassword.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.register.IS2C_ResetPassword);

            /** S2C_ResetPassword result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_ResetPassword message. Does not implicitly {@link PokerLife.register.S2C_ResetPassword.verify|verify} messages.
             * @param m S2C_ResetPassword message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.register.IS2C_ResetPassword, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_ResetPassword message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.register.S2C_ResetPassword;
        }

        /** SmsCodeType enum. */
        enum SmsCodeType {
            Register = 0,
            Login = 1,
            ResetPassword = 2
        }
    }

    /** Properties of a C2S_GetUserInfo. */
    interface IC2S_GetUserInfo {

        /** C2S_GetUserInfo uid */
        uid: number;
    }

    /** Represents a C2S_GetUserInfo. */
    class C2S_GetUserInfo implements IC2S_GetUserInfo {

        /**
         * Constructs a new C2S_GetUserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IC2S_GetUserInfo);

        /** C2S_GetUserInfo uid. */
        public uid: number;

        /**
         * Encodes the specified C2S_GetUserInfo message. Does not implicitly {@link PokerLife.C2S_GetUserInfo.verify|verify} messages.
         * @param m C2S_GetUserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IC2S_GetUserInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2S_GetUserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2S_GetUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.C2S_GetUserInfo;
    }

    /** Properties of a S2C_GetUserInfo. */
    interface IS2C_GetUserInfo {

        /** S2C_GetUserInfo userInfo */
        userInfo: PokerLife.IUserInfo;
    }

    /** Represents a S2C_GetUserInfo. */
    class S2C_GetUserInfo implements IS2C_GetUserInfo {

        /**
         * Constructs a new S2C_GetUserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IS2C_GetUserInfo);

        /** S2C_GetUserInfo userInfo. */
        public userInfo: PokerLife.IUserInfo;

        /**
         * Encodes the specified S2C_GetUserInfo message. Does not implicitly {@link PokerLife.S2C_GetUserInfo.verify|verify} messages.
         * @param m S2C_GetUserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IS2C_GetUserInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a S2C_GetUserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns S2C_GetUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.S2C_GetUserInfo;
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo uid */
        uid: number;

        /** UserInfo baseInfo */
        baseInfo: PokerLife.IUserBaseInfo;

        /** UserInfo userAssets */
        userAssets: PokerLife.IUserAssets;

        /** UserInfo userAccountInfo */
        userAccountInfo: PokerLife.IUserAccountInfo;
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IUserInfo);

        /** UserInfo uid. */
        public uid: number;

        /** UserInfo baseInfo. */
        public baseInfo: PokerLife.IUserBaseInfo;

        /** UserInfo userAssets. */
        public userAssets: PokerLife.IUserAssets;

        /** UserInfo userAccountInfo. */
        public userAccountInfo: PokerLife.IUserAccountInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PokerLife.UserInfo.verify|verify} messages.
         * @param m UserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IUserInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo;
    }

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo nickName */
        nickName: string;

        /** UserBaseInfo phoneNum */
        phoneNum: string;

        /** UserBaseInfo head */
        head: string;
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IUserBaseInfo);

        /** UserBaseInfo nickName. */
        public nickName: string;

        /** UserBaseInfo phoneNum. */
        public phoneNum: string;

        /** UserBaseInfo head. */
        public head: string;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link PokerLife.UserBaseInfo.verify|verify} messages.
         * @param m UserBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IUserBaseInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserBaseInfo;
    }

    /** Properties of a UserAssets. */
    interface IUserAssets {

        /** UserAssets coin */
        coin: number;

        /** UserAssets diamond */
        diamond: number;

        /** UserAssets clubPoint */
        clubPoint: number;

        /** UserAssets unionCoin */
        unionCoin: number;
    }

    /** Represents a UserAssets. */
    class UserAssets implements IUserAssets {

        /**
         * Constructs a new UserAssets.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IUserAssets);

        /** UserAssets coin. */
        public coin: number;

        /** UserAssets diamond. */
        public diamond: number;

        /** UserAssets clubPoint. */
        public clubPoint: number;

        /** UserAssets unionCoin. */
        public unionCoin: number;

        /**
         * Encodes the specified UserAssets message. Does not implicitly {@link PokerLife.UserAssets.verify|verify} messages.
         * @param m UserAssets message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IUserAssets, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAssets message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAssets
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserAssets;
    }

    /** Properties of a UserAccountInfo. */
    interface IUserAccountInfo {

        /** UserAccountInfo accountLevel */
        accountLevel: PokerLife.AccountLevel;

        /** UserAccountInfo accountStatus */
        accountStatus: PokerLife.AccountStauts;
    }

    /** Represents a UserAccountInfo. */
    class UserAccountInfo implements IUserAccountInfo {

        /**
         * Constructs a new UserAccountInfo.
         * @param [p] Properties to set
         */
        constructor(p?: PokerLife.IUserAccountInfo);

        /** UserAccountInfo accountLevel. */
        public accountLevel: PokerLife.AccountLevel;

        /** UserAccountInfo accountStatus. */
        public accountStatus: PokerLife.AccountStauts;

        /**
         * Encodes the specified UserAccountInfo message. Does not implicitly {@link PokerLife.UserAccountInfo.verify|verify} messages.
         * @param m UserAccountInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: PokerLife.IUserAccountInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UserAccountInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserAccountInfo;
    }

    /** AccountLevel enum. */
    enum AccountLevel {
        Norma = 0,
        Agent = 1,
        Boss = 2
    }

    /** AccountStauts enum. */
    enum AccountStauts {
        Normal = 0,
        Frozen = 1
    }
}
 
}
export {}