declare global {
 // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace PokerLife. */
export namespace PokerLife {

    /** Namespace Club. */
    namespace Club {

        /** Properties of a GameConfig. */
        interface IGameConfig {

            /** GameConfig basicConfig */
            basicConfig: PokerLife.Club.IGameBasicConfig;

            /** GameConfig texasConfig */
            texasConfig: PokerLife.Club.ITexasConfig;

            /** GameConfig shortConfig */
            shortConfig?: (PokerLife.Club.IShortConfig|null);

            /** GameConfig matchingConfig */
            matchingConfig?: (PokerLife.Club.IMatchingConfig|null);
        }

        /** Represents a GameConfig. */
        class GameConfig implements IGameConfig {

            /**
             * Constructs a new GameConfig.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Club.IGameConfig);

            /** GameConfig basicConfig. */
            public basicConfig: PokerLife.Club.IGameBasicConfig;

            /** GameConfig texasConfig. */
            public texasConfig: PokerLife.Club.ITexasConfig;

            /** GameConfig shortConfig. */
            public shortConfig?: (PokerLife.Club.IShortConfig|null);

            /** GameConfig matchingConfig. */
            public matchingConfig?: (PokerLife.Club.IMatchingConfig|null);

            /**
             * Encodes the specified GameConfig message. Does not implicitly {@link PokerLife.Club.GameConfig.verify|verify} messages.
             * @param m GameConfig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Club.IGameConfig, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameConfig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Club.GameConfig;
        }

        /** Properties of a MatchingConfig. */
        interface IMatchingConfig {

            /** MatchingConfig currentPlayerNum */
            currentPlayerNum: number;

            /** MatchingConfig startTime */
            startTime: number;
        }

        /** Represents a MatchingConfig. */
        class MatchingConfig implements IMatchingConfig {

            /**
             * Constructs a new MatchingConfig.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Club.IMatchingConfig);

            /** MatchingConfig currentPlayerNum. */
            public currentPlayerNum: number;

            /** MatchingConfig startTime. */
            public startTime: number;

            /**
             * Encodes the specified MatchingConfig message. Does not implicitly {@link PokerLife.Club.MatchingConfig.verify|verify} messages.
             * @param m MatchingConfig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Club.IMatchingConfig, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MatchingConfig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MatchingConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Club.MatchingConfig;
        }

        /** Properties of a GameBasicConfig. */
        interface IGameBasicConfig {

            /** GameBasicConfig gameType */
            gameType: PokerLife.Club.GameType;

            /** GameBasicConfig gameName */
            gameName: string;

            /** GameBasicConfig currencyType */
            currencyType: PokerLife.Club.GameCurrencyType;

            /** GameBasicConfig taxType */
            taxType: PokerLife.Club.GameTaxType;

            /** GameBasicConfig taxRatio */
            taxRatio: number;
        }

        /** Represents a GameBasicConfig. */
        class GameBasicConfig implements IGameBasicConfig {

            /**
             * Constructs a new GameBasicConfig.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Club.IGameBasicConfig);

            /** GameBasicConfig gameType. */
            public gameType: PokerLife.Club.GameType;

            /** GameBasicConfig gameName. */
            public gameName: string;

            /** GameBasicConfig currencyType. */
            public currencyType: PokerLife.Club.GameCurrencyType;

            /** GameBasicConfig taxType. */
            public taxType: PokerLife.Club.GameTaxType;

            /** GameBasicConfig taxRatio. */
            public taxRatio: number;

            /**
             * Encodes the specified GameBasicConfig message. Does not implicitly {@link PokerLife.Club.GameBasicConfig.verify|verify} messages.
             * @param m GameBasicConfig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Club.IGameBasicConfig, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameBasicConfig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GameBasicConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Club.GameBasicConfig;
        }

        /** Properties of a TexasConfig. */
        interface ITexasConfig {

            /** TexasConfig smallBlind */
            smallBlind: number;

            /** TexasConfig straddle */
            straddle: boolean;

            /** TexasConfig ante */
            ante: number;

            /** TexasConfig maxTotalBuyIn */
            maxTotalBuyIn: number;

            /** TexasConfig minBringIn */
            minBringIn: number;

            /** TexasConfig maxBringIn */
            maxBringIn: number;

            /** TexasConfig allowBringOut */
            allowBringOut: boolean;

            /** TexasConfig minScoreAfterBringOut */
            minScoreAfterBringOut: number;

            /** TexasConfig insurance */
            insurance: boolean;

            /** TexasConfig gameDuration */
            gameDuration: number;

            /** TexasConfig thinkingTime */
            thinkingTime: number;

            /** TexasConfig seatNum */
            seatNum: number;

            /** TexasConfig autoStartNum */
            autoStartNum: number;

            /** TexasConfig gpsLimit */
            gpsLimit: boolean;

            /** TexasConfig ipLimit */
            ipLimit: boolean;
        }

        /** Represents a TexasConfig. */
        class TexasConfig implements ITexasConfig {

            /**
             * Constructs a new TexasConfig.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Club.ITexasConfig);

            /** TexasConfig smallBlind. */
            public smallBlind: number;

            /** TexasConfig straddle. */
            public straddle: boolean;

            /** TexasConfig ante. */
            public ante: number;

            /** TexasConfig maxTotalBuyIn. */
            public maxTotalBuyIn: number;

            /** TexasConfig minBringIn. */
            public minBringIn: number;

            /** TexasConfig maxBringIn. */
            public maxBringIn: number;

            /** TexasConfig allowBringOut. */
            public allowBringOut: boolean;

            /** TexasConfig minScoreAfterBringOut. */
            public minScoreAfterBringOut: number;

            /** TexasConfig insurance. */
            public insurance: boolean;

            /** TexasConfig gameDuration. */
            public gameDuration: number;

            /** TexasConfig thinkingTime. */
            public thinkingTime: number;

            /** TexasConfig seatNum. */
            public seatNum: number;

            /** TexasConfig autoStartNum. */
            public autoStartNum: number;

            /** TexasConfig gpsLimit. */
            public gpsLimit: boolean;

            /** TexasConfig ipLimit. */
            public ipLimit: boolean;

            /**
             * Encodes the specified TexasConfig message. Does not implicitly {@link PokerLife.Club.TexasConfig.verify|verify} messages.
             * @param m TexasConfig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Club.ITexasConfig, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a TexasConfig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns TexasConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Club.TexasConfig;
        }

        /** Properties of a ShortConfig. */
        interface IShortConfig {

            /** ShortConfig scoreMode */
            scoreMode: PokerLife.Club.ShortGameScoreMode;

            /** ShortConfig baseScore */
            baseScore: number;

            /** ShortConfig buttonDouble */
            buttonDouble: boolean;
        }

        /** Represents a ShortConfig. */
        class ShortConfig implements IShortConfig {

            /**
             * Constructs a new ShortConfig.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Club.IShortConfig);

            /** ShortConfig scoreMode. */
            public scoreMode: PokerLife.Club.ShortGameScoreMode;

            /** ShortConfig baseScore. */
            public baseScore: number;

            /** ShortConfig buttonDouble. */
            public buttonDouble: boolean;

            /**
             * Encodes the specified ShortConfig message. Does not implicitly {@link PokerLife.Club.ShortConfig.verify|verify} messages.
             * @param m ShortConfig message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Club.IShortConfig, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ShortConfig message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ShortConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Club.ShortConfig;
        }

        /** GameType enum. */
        enum GameType {
            TexasCash = 0,
            ShortCash = 1,
            Mtt = 2,
            Omh = 3
        }

        /** GameTaxType enum. */
        enum GameTaxType {
            EveryRound = 0,
            WholeGameEnd = 1
        }

        /** GameCurrencyType enum. */
        enum GameCurrencyType {
            Point = 0,
            Coin = 1
        }

        /** ShortGameScoreMode enum. */
        enum ShortGameScoreMode {
            AnteMode = 0,
            BlindMode = 1
        }

        /** RecordDateType enum. */
        enum RecordDateType {
            Today = 0,
            Week = 1,
            Month = 2
        }
    }

    /** Namespace Common. */
    namespace Common {

        /** Properties of a MessageHeader. */
        interface IMessageHeader {

            /** MessageHeader msgStatus */
            msgStatus: PokerLife.Common.MsgStatus;

            /** MessageHeader errorCode */
            errorCode?: (PokerLife.Common.ErrorCode|null);

            /** MessageHeader errorContent */
            errorContent?: (string|null);
        }

        /** Represents a MessageHeader. */
        class MessageHeader implements IMessageHeader {

            /**
             * Constructs a new MessageHeader.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Common.IMessageHeader);

            /** MessageHeader msgStatus. */
            public msgStatus: PokerLife.Common.MsgStatus;

            /** MessageHeader errorCode. */
            public errorCode: PokerLife.Common.ErrorCode;

            /** MessageHeader errorContent. */
            public errorContent: string;

            /**
             * Encodes the specified MessageHeader message. Does not implicitly {@link PokerLife.Common.MessageHeader.verify|verify} messages.
             * @param m MessageHeader message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Common.IMessageHeader, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MessageHeader message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns MessageHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Common.MessageHeader;
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
    }

    /** Namespace MsgId. */
    namespace MsgId {

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
    }

    /** Namespace Register. */
    namespace Register {

        /** Properties of a C2S_Register. */
        interface IC2S_Register {

            /** C2S_Register baseInfo */
            baseInfo: PokerLife.UserInfo.IUserBaseInfo;

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
            constructor(p?: PokerLife.Register.IC2S_Register);

            /** C2S_Register baseInfo. */
            public baseInfo: PokerLife.UserInfo.IUserBaseInfo;

            /** C2S_Register password. */
            public password: string;

            /** C2S_Register smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_Register message. Does not implicitly {@link PokerLife.Register.C2S_Register.verify|verify} messages.
             * @param m C2S_Register message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IC2S_Register, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_Register message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.C2S_Register;
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
            constructor(p?: PokerLife.Register.IS2C_Register);

            /** S2C_Register result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_Register message. Does not implicitly {@link PokerLife.Register.S2C_Register.verify|verify} messages.
             * @param m S2C_Register message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IS2C_Register, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_Register message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_Register
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.S2C_Register;
        }

        /** Properties of a C2S_GetSmsCode. */
        interface IC2S_GetSmsCode {

            /** C2S_GetSmsCode smsCodeType */
            smsCodeType: PokerLife.Register.SmsCodeType;
        }

        /** Represents a C2S_GetSmsCode. */
        class C2S_GetSmsCode implements IC2S_GetSmsCode {

            /**
             * Constructs a new C2S_GetSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Register.IC2S_GetSmsCode);

            /** C2S_GetSmsCode smsCodeType. */
            public smsCodeType: PokerLife.Register.SmsCodeType;

            /**
             * Encodes the specified C2S_GetSmsCode message. Does not implicitly {@link PokerLife.Register.C2S_GetSmsCode.verify|verify} messages.
             * @param m C2S_GetSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IC2S_GetSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_GetSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.C2S_GetSmsCode;
        }

        /** Properties of a S2C_GetSmsCode. */
        interface IS2C_GetSmsCode {

            /** S2C_GetSmsCode smsCodeType */
            smsCodeType: PokerLife.Register.SmsCodeType;

            /** S2C_GetSmsCode smsCode */
            smsCode: number;
        }

        /** Represents a S2C_GetSmsCode. */
        class S2C_GetSmsCode implements IS2C_GetSmsCode {

            /**
             * Constructs a new S2C_GetSmsCode.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.Register.IS2C_GetSmsCode);

            /** S2C_GetSmsCode smsCodeType. */
            public smsCodeType: PokerLife.Register.SmsCodeType;

            /** S2C_GetSmsCode smsCode. */
            public smsCode: number;

            /**
             * Encodes the specified S2C_GetSmsCode message. Does not implicitly {@link PokerLife.Register.S2C_GetSmsCode.verify|verify} messages.
             * @param m S2C_GetSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IS2C_GetSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_GetSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_GetSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.S2C_GetSmsCode;
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
            constructor(p?: PokerLife.Register.IC2S_LoginWithSmsCode);

            /** C2S_LoginWithSmsCode phoneNum. */
            public phoneNum: string;

            /** C2S_LoginWithSmsCode smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_LoginWithSmsCode message. Does not implicitly {@link PokerLife.Register.C2S_LoginWithSmsCode.verify|verify} messages.
             * @param m C2S_LoginWithSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IC2S_LoginWithSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_LoginWithSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.C2S_LoginWithSmsCode;
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
            constructor(p?: PokerLife.Register.IS2C_LoginWithSmsCode);

            /** S2C_LoginWithSmsCode result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_LoginWithSmsCode message. Does not implicitly {@link PokerLife.Register.S2C_LoginWithSmsCode.verify|verify} messages.
             * @param m S2C_LoginWithSmsCode message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IS2C_LoginWithSmsCode, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_LoginWithSmsCode message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_LoginWithSmsCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.S2C_LoginWithSmsCode;
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
            constructor(p?: PokerLife.Register.IC2S_LoginWithPwd);

            /** C2S_LoginWithPwd phoneNum. */
            public phoneNum: string;

            /** C2S_LoginWithPwd password. */
            public password: string;

            /**
             * Encodes the specified C2S_LoginWithPwd message. Does not implicitly {@link PokerLife.Register.C2S_LoginWithPwd.verify|verify} messages.
             * @param m C2S_LoginWithPwd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IC2S_LoginWithPwd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_LoginWithPwd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.C2S_LoginWithPwd;
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
            constructor(p?: PokerLife.Register.IS2C_LoginWithPwd);

            /** S2C_LoginWithPwd result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_LoginWithPwd message. Does not implicitly {@link PokerLife.Register.S2C_LoginWithPwd.verify|verify} messages.
             * @param m S2C_LoginWithPwd message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IS2C_LoginWithPwd, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_LoginWithPwd message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_LoginWithPwd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.S2C_LoginWithPwd;
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
            constructor(p?: PokerLife.Register.IC2S_ResetPassword);

            /** C2S_ResetPassword phoneNum. */
            public phoneNum: string;

            /** C2S_ResetPassword password. */
            public password: string;

            /** C2S_ResetPassword smsCode. */
            public smsCode: string;

            /**
             * Encodes the specified C2S_ResetPassword message. Does not implicitly {@link PokerLife.Register.C2S_ResetPassword.verify|verify} messages.
             * @param m C2S_ResetPassword message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IC2S_ResetPassword, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_ResetPassword message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.C2S_ResetPassword;
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
            constructor(p?: PokerLife.Register.IS2C_ResetPassword);

            /** S2C_ResetPassword result. */
            public result: boolean;

            /**
             * Encodes the specified S2C_ResetPassword message. Does not implicitly {@link PokerLife.Register.S2C_ResetPassword.verify|verify} messages.
             * @param m S2C_ResetPassword message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.Register.IS2C_ResetPassword, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_ResetPassword message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_ResetPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.Register.S2C_ResetPassword;
        }

        /** SmsCodeType enum. */
        enum SmsCodeType {
            Register = 0,
            Login = 1,
            ResetPassword = 2
        }
    }

    /** Namespace UserInfo. */
    namespace UserInfo {

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
            constructor(p?: PokerLife.UserInfo.IC2S_GetUserInfo);

            /** C2S_GetUserInfo uid. */
            public uid: number;

            /**
             * Encodes the specified C2S_GetUserInfo message. Does not implicitly {@link PokerLife.UserInfo.C2S_GetUserInfo.verify|verify} messages.
             * @param m C2S_GetUserInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IC2S_GetUserInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a C2S_GetUserInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns C2S_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.C2S_GetUserInfo;
        }

        /** Properties of a S2C_GetUserInfo. */
        interface IS2C_GetUserInfo {

            /** S2C_GetUserInfo userInfo */
            userInfo: PokerLife.UserInfo.IUserInfo;
        }

        /** Represents a S2C_GetUserInfo. */
        class S2C_GetUserInfo implements IS2C_GetUserInfo {

            /**
             * Constructs a new S2C_GetUserInfo.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.UserInfo.IS2C_GetUserInfo);

            /** S2C_GetUserInfo userInfo. */
            public userInfo: PokerLife.UserInfo.IUserInfo;

            /**
             * Encodes the specified S2C_GetUserInfo message. Does not implicitly {@link PokerLife.UserInfo.S2C_GetUserInfo.verify|verify} messages.
             * @param m S2C_GetUserInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IS2C_GetUserInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a S2C_GetUserInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns S2C_GetUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.S2C_GetUserInfo;
        }

        /** Properties of a UserInfo. */
        interface IUserInfo {

            /** UserInfo uid */
            uid: number;

            /** UserInfo userBaseInfo */
            userBaseInfo: PokerLife.UserInfo.IUserBaseInfo;

            /** UserInfo userAssets */
            userAssets: PokerLife.UserInfo.IUserAssets;

            /** UserInfo userAccountInfo */
            userAccountInfo: PokerLife.UserInfo.IUserAccountInfo;
        }

        /** Represents a UserInfo. */
        class UserInfo implements IUserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.UserInfo.IUserInfo);

            /** UserInfo uid. */
            public uid: number;

            /** UserInfo userBaseInfo. */
            public userBaseInfo: PokerLife.UserInfo.IUserBaseInfo;

            /** UserInfo userAssets. */
            public userAssets: PokerLife.UserInfo.IUserAssets;

            /** UserInfo userAccountInfo. */
            public userAccountInfo: PokerLife.UserInfo.IUserAccountInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link PokerLife.UserInfo.UserInfo.verify|verify} messages.
             * @param m UserInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IUserInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.UserInfo;
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
            constructor(p?: PokerLife.UserInfo.IUserBaseInfo);

            /** UserBaseInfo nickName. */
            public nickName: string;

            /** UserBaseInfo phoneNum. */
            public phoneNum: string;

            /** UserBaseInfo head. */
            public head: string;

            /**
             * Encodes the specified UserBaseInfo message. Does not implicitly {@link PokerLife.UserInfo.UserBaseInfo.verify|verify} messages.
             * @param m UserBaseInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IUserBaseInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserBaseInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserBaseInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.UserBaseInfo;
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
            constructor(p?: PokerLife.UserInfo.IUserAssets);

            /** UserAssets coin. */
            public coin: number;

            /** UserAssets diamond. */
            public diamond: number;

            /** UserAssets clubPoint. */
            public clubPoint: number;

            /** UserAssets unionCoin. */
            public unionCoin: number;

            /**
             * Encodes the specified UserAssets message. Does not implicitly {@link PokerLife.UserInfo.UserAssets.verify|verify} messages.
             * @param m UserAssets message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IUserAssets, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserAssets message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserAssets
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.UserAssets;
        }

        /** Properties of a UserAccountInfo. */
        interface IUserAccountInfo {

            /** UserAccountInfo accountLevel */
            accountLevel: PokerLife.UserInfo.AccountLevel;

            /** UserAccountInfo accountStatus */
            accountStatus: PokerLife.UserInfo.AccountStauts;
        }

        /** Represents a UserAccountInfo. */
        class UserAccountInfo implements IUserAccountInfo {

            /**
             * Constructs a new UserAccountInfo.
             * @param [p] Properties to set
             */
            constructor(p?: PokerLife.UserInfo.IUserAccountInfo);

            /** UserAccountInfo accountLevel. */
            public accountLevel: PokerLife.UserInfo.AccountLevel;

            /** UserAccountInfo accountStatus. */
            public accountStatus: PokerLife.UserInfo.AccountStauts;

            /**
             * Encodes the specified UserAccountInfo message. Does not implicitly {@link PokerLife.UserInfo.UserAccountInfo.verify|verify} messages.
             * @param m UserAccountInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: PokerLife.UserInfo.IUserAccountInfo, w?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserAccountInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: (protobuf.Reader|Uint8Array), l?: number): PokerLife.UserInfo.UserAccountInfo;
        }

        /** AccountLevel enum. */
        enum AccountLevel {
            Normal = 0,
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
 
}
export {}