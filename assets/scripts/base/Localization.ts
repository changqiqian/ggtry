export enum LanguageType {
    EN = 0, //英文
    HK = 1, //繁体中文
    CN = 2, //简体中文
}

export class Localization {
    public static CurrentLanguage;
    public static CurrentLanguageType: LanguageType = LanguageType.CN;

    public static SetLanguage(_languageType: LanguageType) {
        this.CurrentLanguageType = _languageType;
        switch (this.CurrentLanguageType) {
            case LanguageType.EN:
                Localization.CurrentLanguage = 'en';
                break;
            case LanguageType.HK:
                Localization.CurrentLanguage = 'ch';
                break;
            case LanguageType.CN:
                Localization.CurrentLanguage = 'ch';
                break;
        }
    }

    public static GetString(_key: string) {
        let index = this.LocationData.findIndex((_item) => _item.name === _key);
        if (index >= 0) {
            return this.LocationData[index][this.CurrentLanguage];
        } else {
            console.log('没有找到对应的多语言 key====' + _key);
        }

        return "";
    }

    public static LocationData = [
        { name: 'CountryName0', ch: '香港', en: 'Hong Kong' },
        { name: 'CountryName1', ch: '菲律宾', en: 'Philippines' },
        { name: 'CountryName2', ch: '台湾', en: 'Taiwan' },
        { name: 'CountryName3', ch: '泰国', en: 'Thailand' },
        { name: 'CountryName4', ch: '马来西亚', en: 'Malaysia' },
        { name: 'CountryName5', ch: '澳门', en: 'Macao' },
        { name: 'CountryName6', ch: '老挝', en: 'Laos' },
        { name: 'CountryName7', ch: '意大利', en: 'Italy' },
        { name: 'CountryName8', ch: '美国', en: 'USA' },
        { name: 'CountryName9', ch: '日本', en: 'Japan' },
        { name: 'CountryName10', ch: '英国', en: 'UK' },
        { name: 'CountryName11', ch: '法国', en: 'France' },
        { name: 'CountryName12', ch: '韩国', en: 'Korea' },
        { name: 'CountryName13', ch: '澳大利亚', en: 'Australia' },
        { name: 'CountryName14', ch: '加拿大', en: 'Canada' },
        { name: 'CountryName15', ch: '缅甸', en: 'Myanmar' },
        { name: 'CountryName16', ch: '新加坡', en: 'Singapore' },
        { name: 'CountryName17', ch: '印尼', en: 'Indonesia' },
        { name: 'CountryName17', ch: '朝鲜', en: 'North Korea' },
        { name: 'CountryName18', ch: '俄罗斯', en: 'Russia' },
        { name: 'CountryName19', ch: '白俄罗斯', en: 'Belarus' },
        { name: 'CountryName20', ch: '阿根廷', en: 'Argentina' },
        { name: 'CountryName21', ch: '巴拉圭', en: 'Paraguay' },
        { name: 'CountryName22', ch: '巴西', en: 'Brazil' },
        { name: 'CountryName23', ch: '比利时', en: 'Belgium' },
        { name: 'CountryName24', ch: '波兰', en: 'Poland' },
        { name: 'CountryName25', ch: '德国', en: 'Germany' },
        { name: 'CountryName26', ch: '芬兰', en: 'Finland' },
        { name: 'CountryName27', ch: '柬埔寨', en: 'Cambodia' },
        { name: 'CountryName28', ch: '埃及', en: 'Egypt' },
        { name: 'CountryName29', ch: '荷兰', en: 'Holland' },
        { name: 'CountryName30', ch: '瑞典', en: 'Sweden' },
        { name: 'CountryName31', ch: '瑞士', en: 'Switzerland' },
        { name: 'CountryName32', ch: '新西兰', en: 'New Zealand' },
        { name: 'CountryName33', ch: '印度', en: 'India' },
        { name: 'CountryName34', ch: '以色列', en: 'Israel' },
        { name: 'CountryName35', ch: '约旦', en: 'Jordan' },
        { name: 'CountryName36', ch: '智利', en: 'Chile' },
        { name: 'CountryName37', ch: '葡萄牙', en: 'Portugal' },
        { name: 'CountryName38', ch: '萨特阿拉伯', en: 'Saudi Arabia' },
        { name: 'CountryName39', ch: '土耳其', en: 'turkey' },
        { name: 'CountryName40', ch: '丹麦', en: 'Denmark' },
        { name: 'CountryName41', ch: '越南', en: 'Vietnam' },
        { name: 'CountryName42', ch: '阿联酋', en: 'United Arab Emirates' },

        {"name":"00001", "ch": "本应用软件在该地区无法使用，造成不便请见谅。" , "en": "This application is not available in your region.Sorry for the inconvenience."},
        {"name":"00002", "ch": "无效的电话号码！" , "en": "Invalid Phone Number!"},
        {"name":"00003", "ch": "操作无法完成。（错误代码：" , "en": "The operation couldn't be completed.(Error code:"},
        {"name":"00004", "ch": "请输入密码", "en": "Please input password"},
        {"name":"00005", "ch": "请输入验证码", "en": "Please input sms-code"},
        {"name":"00006", "ch": "验证码无效", "en": "Invalid Confirmation Code!"},
        {"name":"00007", "ch": "输入的两个密码不一致！", "en": "The two passwords entered are inconsistent!"},
        {"name":"00008", "ch": "密码重置失败！", "en": "Password reset failed!"},
        {"name":"00009", "ch": "密码重置成功！", "en": "Password reset successfully!"},
        {"name":"00010", "ch": "注册失败!", "en": "Registration failed!"},
        {"name":"00011", "ch": "请输入昵称!", "en": "Please input nickname"},
        {"name":"00012", "ch": "请选择头像!", "en": "Please choose an avatar!"},
        {"name":"00013", "ch": "个人信息设置成功！", "en": "Complete personal information success!"},
        {"name":"00014", "ch": "操作無法完成。（錯誤代碼：", "en": "The operation couldn't be completed.(Error code:"},
        {"name":"00015", "ch": "输入内容不能包含空格", "en": "Input can not contain charactor \"space\""},
        {"name":"00016", "ch": "请打开Cyber官网，扫描二维码", "en": "Please access Cyber website and scan"},
        {"name":"00017", "ch": "免费", "en": "Freeroll"},
        {"name":"00018", "ch": "手动开始", "en": "Manual Start"},
        {"name":"00019", "ch": "报名中", "en": "Registering"},
        {"name":"00020", "ch": "比赛结束", "en": "Match End"},
        {"name":"00021", "ch": "延迟报名", "en": "Delay Reg"},
        {"name":"00022", "ch": "休息中", "en": "Breaking time"},
        {"name":"00023", "ch": "进行中", "en": "Started"},
        {"name":"00024", "ch": "即将开始", "en": "Start Soon"},
        {"name":"00025", "ch": "赛事信息", "en": "Info"},
        {"name":"00026", "ch": "玩家信息", "en": "Players"},
        {"name":"00027", "ch": "奖励", "en": "Prize"},
        {"name":"00028", "ch": "牌桌", "en": "Table"},
        {"name":"00029", "ch": "获取比赛信息失败", "en": "Get mtt info failed"},
        {"name":"00030", "ch": "已破保", "en": "Smashed"},
        {"name":"00031", "ch": "报名", "en": "Register"},
        {"name":"00032", "ch": "审核中", "en": "Waiting for review"},
        {"name":"00033", "ch": "取消报名", "en": "Unregister"},
        {"name":"00034", "ch": "回到比赛", "en": "Back to game"},
        {"name":"00035", "ch": "开始时间", "en": "Start time"},
        {"name":"00036", "ch": "免费", "en": "Free"},
        {"name":"00037", "ch": "比赛还没开始,", "en": "Registering"},
        {"name":"00038", "ch": "比赛进行中", "en": "Runing"},
        {"name":"00039", "ch": "钱圈", "en": "Reward range"},
        {"name":"00040", "ch": "分钟", "en": "mins"},
        {"name":"00041", "ch": "重购", "en": "Confirm Rebuy"},
        {"name":"00042", "ch": "报名", "en": "Confirm Registration"},
        {"name":"00043", "ch": "请选择支付方式", "en": "Please select the payment"},
        {"name":"00044", "ch": "没有可用门票", "en": "No Tickets Useable"},
        {"name":"00045", "ch": "mtt开赛失败", "en": "Start mtt failed"},
        {"name":"00046", "ch": "确定解散比赛吗？\n报名费将退还给用户", "en": "Confirm to dismiss? \n Fees will be returned to registered player"},
        {"name":"00047", "ch": "确定开始比赛吗？", "en": "Start match now?"},
        {"name":"00048", "ch": "Season", "en": "Season"},
        {"name":"00049", "ch": "Month", "en": "Month"},
        {"name":"00050", "ch": "Week", "en": "Week"},
        {"name":"00051", "ch": "All", "en": "All"},
        {"name":"00052", "ch": "暂无数据", "en": "No data"},
        {"name":"00053", "ch": "进入游戏失败", "en": "Enter game failed"},
        {"name":"00054", "ch": "当前级别", "en": "Now Level"},
        {"name":"00055", "ch": "下一级别", "en": "Next Level"},
        {"name":"00056", "ch": "桌号", "en": "Table No."},
        {"name":"00057", "ch": "您没有足够的钻石", "en": "Not enough diamond"},
        {"name":"00058", "ch": "莊位2倍前注", "en": "Dealer double score"},
        {"name":"00059", "ch": "最小保留記分牌數", "en": "Min score keep"},
        {"name":"00060", "ch": "保险", "en": "Insurance"},
        {"name":"00061", "ch": "剩余时间", "en": "Left time"},
        {"name":"00062", "ch": "排名", "en": "Rank"},
        {"name":"00063", "ch": "涨盲通知：当前盲注级别为", "en": "Level up:Current level:"},
        {"name":"00064", "ch": "底池", "en": "Pot"},
        {"name":"00065", "ch": "弃牌", "en": "Fold"},
        {"name":"00066", "ch": "过牌", "en": "Check"},
        {"name":"00067", "ch": "更注", "en": "Call"},
        {"name":"00068", "ch": "加注", "en": "Raise"},
        {"name":"00069", "ch": "全下", "en": "All in"},
        {"name":"00070", "ch": "抓头", "en": "Straddle"},
        {"name":"00071", "ch": "高牌", "en": "High"},
        {"name":"00072", "ch": "一对", "en": "One pair"},
        {"name":"00073", "ch": "两对", "en": "Two pair"},
        {"name":"00074", "ch": "三条", "en": "Three of kind"},
        {"name":"00075", "ch": "顺子", "en": "Straight"},
        {"name":"00076", "ch": "同花", "en": "Flush"},
        {"name":"00077", "ch": "葫芦", "en": "Full house"},
        {"name":"00078", "ch": "四条", "en": "Four of kind"},
        {"name":"00079", "ch": "同花顺", "en": "Flush straight"},
        {"name":"00080", "ch": "皇家同花顺", "en": "Royal flush straight"},
        {"name":"00081", "ch": "您报名的mtt比赛已经开始，请前往参加", "en": "Mtt match started,join now~"},

        { name: '01000', ch: '公告', en: 'Notification' },
        { name: '01001', ch: '消息', en: 'MESSAGES' },
        //服务器发过来的key
        { name: 'key10925', ch: '比赛不存在', en: 'Tournament does not exist' },
        { name: 'key10141', ch: '免费', en: 'Free' },
        
    ];
}
