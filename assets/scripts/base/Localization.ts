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

        return '';
    }

    public static ReplaceString(_target: string, _to: string): string {
        let origin = Localization.GetString(_target);
        var newstr = origin.replace('xxx', _to);
        return newstr;
    }

    public static LocationData = [
        { name: 'CountryName0', ch: '香港', en: 'Hong Kong' , korea :"" },
        { name: 'CountryName1', ch: '菲律宾', en: 'Philippines' , korea :""},
        { name: 'CountryName2', ch: '台湾', en: 'Taiwan' , korea :""},
        { name: 'CountryName3', ch: '泰国', en: 'Thailand' , korea :""},
        { name: 'CountryName4', ch: '马来西亚', en: 'Malaysia' , korea :""},
        { name: 'CountryName5', ch: '澳门', en: 'Macao' , korea :""},
        { name: 'CountryName6', ch: '老挝', en: 'Laos' , korea :""},
        { name: 'CountryName7', ch: '意大利', en: 'Italy' , korea :""},
        { name: 'CountryName8', ch: '美国', en: 'USA' , korea :""},
        { name: 'CountryName9', ch: '日本', en: 'Japan' , korea :""},
        { name: 'CountryName10', ch: '英国', en: 'UK' , korea :""},
        { name: 'CountryName11', ch: '法国', en: 'France' , korea :""},
        { name: 'CountryName12', ch: '韩国', en: 'Korea' , korea :""},
        { name: 'CountryName13', ch: '澳大利亚', en: 'Australia' , korea :""},
        { name: 'CountryName14', ch: '加拿大', en: 'Canada' , korea :""},
        { name: 'CountryName15', ch: '缅甸', en: 'Myanmar' , korea :""},
        { name: 'CountryName16', ch: '新加坡', en: 'Singapore' , korea :""},
        { name: 'CountryName17', ch: '印尼', en: 'Indonesia' , korea :""},
        { name: 'CountryName17', ch: '朝鲜', en: 'North Korea' , korea :""},
        { name: 'CountryName18', ch: '俄罗斯', en: 'Russia' , korea :""},
        { name: 'CountryName19', ch: '白俄罗斯', en: 'Belarus' , korea :""},
        { name: 'CountryName20', ch: '阿根廷', en: 'Argentina' , korea :""},
        { name: 'CountryName21', ch: '巴拉圭', en: 'Paraguay' , korea :""},
        { name: 'CountryName22', ch: '巴西', en: 'Brazil' , korea :""},
        { name: 'CountryName23', ch: '比利时', en: 'Belgium' , korea :""},
        { name: 'CountryName24', ch: '波兰', en: 'Poland' , korea :""},
        { name: 'CountryName25', ch: '德国', en: 'Germany' , korea :""},
        { name: 'CountryName26', ch: '芬兰', en: 'Finland' , korea :""},
        { name: 'CountryName27', ch: '柬埔寨', en: 'Cambodia' , korea :""},
        { name: 'CountryName28', ch: '埃及', en: 'Egypt' , korea :""},
        { name: 'CountryName29', ch: '荷兰', en: 'Holland' , korea :""},
        { name: 'CountryName30', ch: '瑞典', en: 'Sweden' , korea :""},
        { name: 'CountryName31', ch: '瑞士', en: 'Switzerland' , korea :""},
        { name: 'CountryName32', ch: '新西兰', en: 'New Zealand' , korea :""},
        { name: 'CountryName33', ch: '印度', en: 'India' , korea :""},
        { name: 'CountryName34', ch: '以色列', en: 'Israel' , korea :""},
        { name: 'CountryName35', ch: '约旦', en: 'Jordan' , korea :""},
        { name: 'CountryName36', ch: '智利', en: 'Chile' , korea :""},
        { name: 'CountryName37', ch: '葡萄牙', en: 'Portugal' , korea :""},
        { name: 'CountryName38', ch: '萨特阿拉伯', en: 'Saudi Arabia' , korea :""},
        { name: 'CountryName39', ch: '土耳其', en: 'turkey' , korea :""},
        { name: 'CountryName40', ch: '丹麦', en: 'Denmark' , korea :""},
        { name: 'CountryName41', ch: '越南', en: 'Vietnam' , korea :""},
        { name: 'CountryName42', ch: '阿联酋', en: 'United Arab Emirates' , korea :""},

        { name: '00000', ch: '资源加载完成', en: 'load src finished' , korea :""},
        { name: '00001', ch: '本应用软件在该地区无法使用，造成不便请见谅。', en: 'This application is not available in your region.Sorry for the inconvenience.' , korea :""},
        { name: '00002', ch: '无效的电话号码！', en: 'Invalid Phone Number!' , korea :""},
        { name: '00003', ch: '操作无法完成。（错误代码：', en: "The operation couldn't be completed.(Error code:" , korea :""},
        { name: '00004', ch: '请输入密码', en: 'Please input password' , korea :""},
        { name: '00005', ch: '请输入验证码', en: 'Please input sms-code' , korea :""},
        { name: '00006', ch: '验证码无效', en: 'Invalid Confirmation Code!' , korea :""},
        { name: '00007', ch: '输入的两个密码不一致！', en: 'The two passwords entered are inconsistent!' , korea :""},
        { name: '00008', ch: '密码重置失败！', en: 'Password reset failed!' , korea :""},
        { name: '00009', ch: '密码重置成功！', en: 'Password reset successfully!' , korea :""},
        { name: '00010', ch: '注册失败!', en: 'Registration failed!' , korea :""},
        { name: '00011', ch: '请输入昵称!', en: 'Please input nickname' , korea :""},
        { name: '00012', ch: '请选择头像!', en: 'Please choose an avatar!' , korea :""},
        { name: '00013', ch: '个人信息设置成功！', en: 'Complete personal information success!' , korea :""},
        { name: '00014', ch: '操作無法完成。（錯誤代碼：', en: "The operation couldn't be completed.(Error code:" , korea :""},
        { name: '00015', ch: '输入内容不能包含空格', en: 'Input can not contain charactor "space"' , korea :""},
        { name: '00016', ch: '请打开Cyber官网，扫描二维码', en: 'Please access Cyber website and scan' , korea :""},
        { name: '00017', ch: '免费', en: 'Free' , korea :""},
        { name: '00018', ch: '手动开始', en: 'Manual Start' , korea :""},
        { name: '00019', ch: '报名中', en: 'Registering' , korea :""},
        { name: '00020', ch: '比赛结束', en: 'Match End' , korea :""},
        { name: '00021', ch: '延迟报名', en: 'Delay Reg' , korea :""},
        { name: '00022', ch: '休息中', en: 'Breaking time' , korea :""},
        { name: '00023', ch: '进行中', en: 'Started' , korea :""},
        { name: '00024', ch: '即将开始', en: 'Start Soon' , korea :""},
        { name: '00025', ch: '赛事信息', en: 'Info' , korea :""},
        { name: '00026', ch: '玩家信息', en: 'Players' , korea :""},
        { name: '00027', ch: '奖励', en: 'Prize' , korea :""},
        { name: '00028', ch: '牌桌', en: 'Table' , korea :""},
        { name: '00029', ch: '获取比赛信息失败', en: 'Get mtt info failed' , korea :""},
        { name: '00030', ch: '已破保', en: 'Smashed' , korea :""},
        { name: '00031', ch: '报名', en: 'Register' , korea :""},
        { name: '00032', ch: '审核中', en: 'Waiting for review' , korea :""},
        { name: '00033', ch: '取消报名', en: 'Unregister' , korea :""},
        { name: '00034', ch: '回到比赛', en: 'Back to game' , korea :""},
        { name: '00035', ch: '开始时间', en: 'Start time' , korea :""},
        { name: '00036', ch: '免费', en: 'Free' , korea :""},
        { name: '00037', ch: '比赛还没开始,', en: 'Registering' , korea :""},
        { name: '00038', ch: '比赛进行中', en: 'Runing' , korea :""},
        { name: '00039', ch: '钱圈', en: 'Reward range' , korea :""},
        { name: '00040', ch: '分钟', en: 'mins' , korea :""},
        { name: '00041', ch: '重购', en: 'Confirm Rebuy' , korea :""},
        { name: '00042', ch: '报名', en: 'Confirm Registration' , korea :""},
        { name: '00043', ch: '请选择支付方式', en: 'Please select the payment' , korea :""},
        { name: '00044', ch: '没有可用门票', en: 'No Tickets Useable' , korea :""},
        { name: '00045', ch: 'mtt开赛失败', en: 'Start mtt failed' , korea :""},
        { name: '00046', ch: '确定解散比赛吗？\n报名费将退还给用户', en: 'Confirm to dismiss? \n Fees will be returned to registered player' , korea :""},
        { name: '00047', ch: '确定开始比赛吗？', en: 'Start match now?' , korea :""},
        { name: '00048', ch: 'Season', en: 'Season' , korea :""},
        { name: '00049', ch: 'Month', en: 'Month' , korea :""},
        { name: '00050', ch: 'Week', en: 'Week' , korea :""},
        { name: '00051', ch: 'All', en: 'All' , korea :""},
        { name: '00052', ch: '暂无数据', en: 'No data' , korea :""},
        { name: '00053', ch: '进入游戏失败', en: 'Enter game failed' , korea :""},
        { name: '00054', ch: '当前级别', en: 'Now Level' , korea :""},
        { name: '00055', ch: '下一级别', en: 'Next Level' , korea :""},
        { name: '00056', ch: '桌号', en: 'Table No.' , korea :""},
        { name: '00057', ch: '您没有足够的钻石', en: 'Not enough diamond' , korea :""},
        { name: '00058', ch: '莊位2倍前注', en: 'Dealer double score' , korea :""},
        { name: '00059', ch: '最小保留記分牌數', en: 'Min score keep' , korea :""},
        { name: '00060', ch: '保险', en: 'Insurance' , korea :""},
        { name: '00061', ch: '剩余时间', en: 'Left time' , korea :""},
        { name: '00062', ch: '排名', en: 'Rank' , korea :""},
        { name: '00063', ch: '涨盲通知：当前盲注级别为', en: 'Level up:Current level:' , korea :""},
        { name: '00064', ch: '底池', en: 'Pot' , korea :""},
        { name: '00065', ch: '弃牌', en: 'Fold' , korea :""},
        { name: '00066', ch: '过牌', en: 'Check' , korea :""},
        { name: '00067', ch: '跟注', en: 'Call' , korea :""},
        { name: '00068', ch: '加注', en: 'Raise' , korea :""},
        { name: '00069', ch: '全下', en: 'All in' , korea :""},
        { name: '00070', ch: '抓头', en: 'Straddle' , korea :""},
        { name: '00071', ch: '高牌', en: 'High' , korea :""},
        { name: '00072', ch: '一对', en: 'One pair' , korea :""},
        { name: '00073', ch: '两对', en: 'Two pair' , korea :""},
        { name: '00074', ch: '三条', en: 'Three of kind' , korea :""},
        { name: '00075', ch: '顺子', en: 'Straight' , korea :""},
        { name: '00076', ch: '同花', en: 'Flush' , korea :""},
        { name: '00077', ch: '葫芦', en: 'Full house' , korea :""},
        { name: '00078', ch: '四条', en: 'Four of kind' , korea :""},
        { name: '00079', ch: '同花顺', en: 'Flush straight' , korea :""},
        { name: '00080', ch: '皇家同花顺', en: 'Royal flush straight' , korea :""},
        { name: '00081', ch: '您报名的mtt比赛已经开始，请前往参加', en: 'Mtt match started,join now~' , korea :""},
        { name: '00082', ch: '钻石不足', en: 'No diamonds' , korea :""},
        { name: '00083', ch: '恭喜', en: 'Congratulations' , korea :""},
        { name: '00084', ch: '比赛结束', en: 'Match End' , korea :""},
        { name: '00085', ch: '您获得了第xxx名', en: 'You are the xxx place' , korea :""},
        { name: '00086', ch: '无缘前三，再接再厉', en: 'Out of top 3,try harder next time' , korea :""},
        { name: '00087', ch: '持续时间', en: 'Duration' , korea :""},
        { name: '00088', ch: '每xxx分钟休息5分钟', en: 'after every xxx mins rest 5 mins' , korea :""},
        { name: '00089', ch: '关闭', en: 'close' , korea :""},
        { name: '00090', ch: '每手牌获胜的玩家都会被抽取服务费', en: 'Collect tax from winner in every hands' , korea :""},
        { name: '00091', ch: '游戏结束后，针对赢家收取服务费', en: 'Collect tax from winner when game end' , korea :""},
        { name: '00092', ch: '金币场', en: 'Cash' , korea :""},
        { name: '00093', ch: '积分场', en: 'Point' , korea :""},
        { name: '00094', ch: '保存模版成功', en: 'Save success' , korea :""},
        { name: '00095', ch: '保存模版失败', en: 'Save failed' , korea :""},
        { name: '00096', ch: '您确定要删除模版吗？', en: 'Are you sure to delete?' , korea :""},
        { name: '00097', ch: '本地资源加载中', en: 'Loading resource...' , korea :""},
        { name: '00098', ch: '手机号已注册', en: 'This phone number registed already' , korea :""},
        { name: '00099', ch: '您没有权限', en: 'you have no rights' , korea :""},
        { name: '00100', ch: '请输入id', en: 'Please input id' , korea :""},
        { name: '00101', ch: '俱乐部已解散', en: 'Club dismissed' , korea :""},
        { name: '00102', ch: '确定要解散当前俱乐部吗？', en: 'Are you sure you wanna dismiss current club?' , korea :""},
        { name: '00103', ch: '确定要退出当前俱乐部吗？', en: 'Are you sure you wanna quit current club?' , korea :""},
        { name: '00104', ch: '已退出俱乐部', en: 'Quit Club success' , korea :""},
        { name: '00105', ch: '申请已发送', en: 'applying' , korea :""},
        { name: '00106', ch: '您已成功俱乐部xxx', en: 'you already join club xxx' , korea :""},
        { name: '00107', ch: '已通过', en: 'member added' , korea :""},
        { name: '00108', ch: '已拒绝', en: 'member reject' , korea :""},
        { name: '00109', ch: '密码只能由数字和字母组成', en: '密码只能由数字和字母组成' , korea :""},
        { name: '00110', ch: 'ID只能由数字组成', en: 'ID只能由数字组成' , korea :""},
        { name: '00111', ch: '请输入账号', en: 'Please input account' , korea :""},
        { name: '00112', ch: '邀请码只能由7位数字组成', en: '邀请码只能由7位数字组成' , korea :""},
        { name: '00113', ch: '与服务器失去连接', en: 'Disconnected with server' , korea :""},
        { name: '00114', ch: '已经没有申请了', en: 'No applying now' , korea :""},
        { name: '00115', ch: '请选择玩家', en: 'Select user first' , korea :""},
        { name: '00116', ch: '回收积分', en: 'Take back' , korea :""},
        { name: '00117', ch: '发放积分', en: 'Share point' , korea :""},
        { name: '00118', ch: '您确定要把玩家xxx踢出俱乐部吗？', en: 'Are you sure you wanna remove user xxx?' , korea :""},
        { name: '00119', ch: '俱乐部信息修改成功', en: 'Club info saved' , korea :""},
        { name: '00120', ch: '修改成功', en: 'Club point modifyd' , korea :""},
        { name: '00121', ch: '修改俱乐部名称', en: 'Edit club name' , korea :""},
        { name: '00122', ch: '修改俱乐部简介', en: 'Edit club brief' , korea :""},
        { name: '00123', ch: '俱乐部简介', en: 'Club brief' , korea :""},
        { name: '00124', ch: '请输入金额', en: 'Please input amount' , korea :""},
        { name: '00125', ch: '输入不合法！', en: 'Invalid input!' , korea :""},
        { name: '00126', ch: '设为管理员', en: 'Set manager' , korea :""},
        { name: '00127', ch: '取消管理员', en: 'Cancel manager' , korea :""},
        { name: '00128', ch: '管理员', en: 'Manager' , korea :""},
        { name: '00129', ch: '创建者', en: 'Owner' , korea :""},
        { name: '00130', ch: '修改昵称', en: 'Change name' , korea :""},
        { name: '00131', ch: '登录', en: 'Login' , korea :""},
        { name: '00132', ch: '注册', en: 'Sign' , korea :""},
        { name: '00133', ch: '使用<color=#01FEA4>Cyber Poker</color>账号登录', en: 'Login with <color=#01FEA4>Cyber Poker</color> account' , korea :""},
        { name: '00134', ch: '请输入您的手机号', en: 'Plz input phone number' , korea :""},
        { name: '00135', ch: '下一步', en: 'Next' , korea :""},
        { name: '00136', ch: '完善用户资料', en: 'User info' , korea :""},
        { name: '00137', ch: '编辑', en: 'Edit' , korea :""},
        { name: '00138', ch: '输入您的昵称', en: 'Plz input nickname' , korea :""},
        { name: '00139', ch: '确定', en: 'Confirm' , korea :""},
        { name: '00140', ch: '邀请码(选填)', en: 'Invite code(optional)' , korea :""},
        { name: '00141', ch: '请输入邀请码', en: 'Plz input invite code' , korea :""},
        { name: '00142', ch: '密码登录', en: 'Password login' , korea :""},
        { name: '00143', ch: '输入您的密码', en: 'Plz input password' , korea :""},
        { name: '00144', ch: '忘记密码？', en: 'forget？' , korea :""},
        { name: '00145', ch: '验证码登录', en: 'Login with SMS' , korea :""},
        { name: '00146', ch: 'Mtt', en: 'Mtt' , korea :""},
        { name: '00147', ch: '现金桌', en: 'Cash' , korea :""},
        { name: '00148', ch: '俱乐部', en: 'Club' , korea :""},
        { name: '00149', ch: '活动', en: 'Activity' , korea :""},
        { name: '00150', ch: '我的', en: 'Mine' , korea :""},
        { name: '00151', ch: '选择您的国家或地区', en: 'Chose country' , korea :""},
        { name: '00152', ch: '搜索国家电话代码或姓名', en: 'Search' , korea :""},
        { name: '00153', ch: '找回密码', en: 'Find password' , korea :""},
        { name: '00154', ch: '点击选择头像', en: 'Click to Chose head' , korea :""},
        { name: '00155', ch: '取消', en: 'Cancel' , korea :""},
        { name: '00156', ch: '设置密码', en: 'Password setting' , korea :""},
        { name: '00157', ch: '请再次输入密码', en: 'Plz input password again', korea :"" },
        { name: '00158', ch: '验证码', en: 'SMS code' , korea :""},
        { name: '00159', ch: '重新发送', en: 'Re-send' , korea :""},
        { name: '00160', ch: '通过', en: 'Accept' , korea :""},
        { name: '00161', ch: '拒绝', en: 'Reject' , korea :""},
        { name: '00162', ch: '积分管理', en: 'Management' , korea :""},
        { name: '00163', ch: '搜索用户ID', en: 'Search user id' , korea :""},
        { name: '00164', ch: '回收', en: 'Take back' , korea :""},
        { name: '00165', ch: '发放', en: 'Give' , korea :""},
        { name: '00167', ch: '玩家余额:', en: 'Player amount:' , korea :""},
        { name: '00168', ch: '俱乐部余额:', en: 'Club amount:' , korea :""},
        { name: '00169', ch: '积分纪录', en: 'Point records' , korea :""},
        { name: '00170', ch: '基础设置', en: 'Basic setting' , korea :""},
        { name: '00171', ch: '游戏模式', en: 'Game mode' , korea :""},
        { name: '00172', ch: '积分场', en: 'Point' , korea :""},
        { name: '00173', ch: '金币场', en: 'Cash' , korea :""},
        { name: '00174', ch: '按把设定', en: 'Every round' , korea :""},
        { name: '00175', ch: '按局设定', en: 'Every game' , korea :""},
        { name: '00176', ch: '抽水设定', en: 'Tax setting' , korea :""},
        { name: '00177', ch: '买入设定', en: 'Buy-in setting' , korea :""},
        { name: '00178', ch: '买入总上限设定:', en: 'Buy-in limit:' , korea :""},
        { name: '00179', ch: '带入范围设定:', en: 'Buy-in range:' , korea :""},
        { name: '00180', ch: '允许带出记分牌', en: 'Allowed bring back' , korea :""},
        { name: '00181', ch: '最小保留积分牌:', en: 'min score remain' , korea :""},
        { name: '00182', ch: '带入限制', en: 'Buy-in limit' , korea :""},
        { name: '00183', ch: '保险', en: 'Ins' , korea :""},
        { name: '00184', ch: 'IP限制', en: 'IP' , korea :""},
        { name: '00185', ch: '删除', en: 'Delete' , korea :""},
        { name: '00186', ch: '牌局模版', en: 'Module' , korea :""},
        { name: '00187', ch: '无限注德州扑克', en: 'Unlimited texas' , korea :""},
        { name: '00188', ch: '短牌', en: 'Short' , korea :""},
        { name: '00189', ch: '创建俱乐部', en: 'Create club' , korea :""},
        { name: '00190', ch: '俱乐部LOGO', en: 'Club logo' , korea :""},
        { name: '00191', ch: '俱乐部封面', en: 'Club stamp' , korea :""},
        { name: '00192', ch: '俱乐部名称', en: 'Club name' , korea :""},
        { name: '00193', ch: '俱乐部简介', en: 'Club brief' , korea :""},
        { name: '00194', ch: '创建短牌', en: 'Create short' , korea :""},
        { name: '00195', ch: '请输入房间名字', en: 'Input room name' , korea :""},
        { name: '00196', ch: '保存模版', en: 'Save module' , korea :""},
        { name: '00197', ch: '创建牌局', en: 'Create room' , korea :""},
        { name: '00198', ch: '底分设置', en: 'Score setting' , korea :""},
        { name: '00199', ch: '底分', en: 'Base score' , korea :""},
        { name: '00200', ch: '庄位2倍前注', en: 'Btn double' , korea :""},
        { name: '00201', ch: '游戏设置', en: 'Game setting' , korea :""},
        { name: '00202', ch: '牌局时长', en: 'Game duration' , korea :""},
        { name: '00203', ch: '思考时间', en: 'thinking duration' , korea :""},
        { name: '00204', ch: '人数设置', en: 'Seats num' , korea :""},
        { name: '00205', ch: '自动开始人数', en: 'Auto start' , korea :""},
        { name: '00206', ch: 'GPS限制', en: 'GPS limit' , korea :""},
        { name: '00207', ch: 'IP限制', en: 'IP limit' , korea :""},
        { name: '00208', ch: '创建德州', en: 'Create texas' , korea :""},
        { name: '00209', ch: '盲注设置', en: 'Blind setting' , korea :""},
        { name: '00210', ch: '抓头', en: 'Straddle' , korea :""},
        { name: '00211', ch: '前注', en: 'Ante' , korea :""},
        { name: '00212', ch: '俱乐部成员', en: 'Club members', korea :"" },
        { name: '00213', ch: '俱乐部申请', en: 'Club applys' , korea :""},
        { name: '00214', ch: '全部拒绝', en: 'Reject all' , korea :""},
        { name: '00215', ch: '全部通过', en: 'Accept all' , korea :""},
        { name: '00216', ch: '个人资产', en: 'Assets' , korea :""},
        { name: '00217', ch: '战绩', en: 'Records' , korea :""},
        { name: '00218', ch: '数据', en: 'Data' , korea :""},
        { name: '00219', ch: '创建牌桌', en: 'Create table', korea :"" },
        { name: '00220', ch: '搜索俱乐部', en: 'Search club' , korea :""},
        { name: '00221', ch: '请输入俱乐部ID', en: 'Input club id' , korea :""},
        { name: '00222', ch: '加入俱乐部', en: 'Join club' , korea :""},
        { name: '00223', ch: '加入', en: 'Join' , korea :""},
        { name: '00224', ch: '俱乐部详情', en: 'Club details', korea :"" },
        { name: '00225', ch: '发币记录', en: 'Point records' , korea :""},
        { name: '00226', ch: '成员', en: 'Member' , korea :""},
        { name: '00227', ch: '查看更多', en: 'More' , korea :""},
        { name: '00228', ch: '俱乐部ID', en: 'Club id' , korea :""},
        { name: '00229', ch: '联盟', en: 'Union' , korea :""},
        { name: '00230', ch: '退出俱乐部', en: 'Exit club' , korea :""},
        { name: '00231', ch: '解散俱乐部', en: 'Dismiss club' , korea :""},
        { name: '00232', ch: '玩法选择', en: 'Game play' , korea :""},
        { name: '00233', ch: '前注玩法', en: 'Ante mode' , korea :""},
        { name: '00234', ch: '盲注玩法', en: 'Bliind mode' , korea :""},
        { name: '00235', ch: '输入个性签名', en: 'Input signature' , korea :""},
        { name: '00236', ch: '连接成功', en: 'Server connected' , korea :""},
        { name: '00237', ch: '创建成功', en: 'Create success' , korea :""},
        { name: '00238', ch: '奥马哈', en: 'Omh' , korea :""},
        { name: '00239', ch: '最多只能同时加入4个游戏', en: 'Max Game' , korea :""},
        { name: '00240', ch: '游戏xxx已经被解散', en: 'room xxx dismiss' , korea :""},
        { name: '00241', ch: '暂离', en: 'Leave' , korea :""},
        { name: '00242', ch: '倒计时:', en: 'Left time:' , korea :""},
        { name: '00243', ch: '最小', en: 'Min' , korea :""},
        { name: '00244', ch: '最大', en: 'Max' , korea :""},
        { name: '00245', ch: '带入成功', en: 'Buy-in success', korea :"" },
        { name: '00246', ch: '等待开局', en: 'Wating' , korea :""},
        { name: '00247', ch: '结算中', en: 'Settlement' , korea :""},
        { name: '00248', ch: '买入中', en: 'Buying' , korea :""},
        { name: '00249', ch: '带出记分牌', en: 'Cash-Out' , korea :""},
        { name: '00250', ch: '带出将在下一手开始前生效', en: 'Will cash out next round', korea :"" },
        { name: '00251', ch: '带出成功', en: 'Cash out success' , korea :""},
        { name: '00252', ch: '小盲', en: 'SB' , korea :""},
        { name: '00253', ch: '大盲', en: 'BB' , korea :""},
        { name: '00254', ch: '下注', en: 'Bet' , korea :""},
        { name: '00255', ch: '买入', en: 'BuyIn' , korea :""},
        { name: '00256', ch: '提示', en: 'Tips' , korea :""},
        { name: '00257', ch: '买入将在下一手开始前生效', en: 'Will buy in next round' , korea :""},
        { name: '00258', ch: '余额:', en: 'Balance:' , korea :""},
        { name: '00259', ch: '游戏中:', en: 'In game:' , korea :""},
        { name: '00260', ch: '游戏中', en: 'In game' , korea :""},
        { name: '00261', ch: '玩家数据', en: 'detail' , korea :""},
        { name: '00262', ch: '局数', en: 'Games' , korea :""},
        { name: '00263', ch: '手数', en: 'Hands' , korea :""},
        { name: '00264', ch: '入池率', en: 'VPIP' , korea :""},
        { name: '00265', ch: '翻前加注率', en: 'PFR' , korea :""},
        { name: '00266', ch: '用户不存在', en: 'No result' , korea :""},
        { name: '00267', ch: '公厅游戏', en: 'Public Game' , korea :""},
        { name: '00268', ch: '实时战绩', en: 'Details' , korea :""},
        { name: '00269', ch: '昵称', en: 'Name' , korea :""},
        { name: '00270', ch: '退出游戏', en: 'Exit' , korea :""},
        { name: '00271', ch: '编号.', en: 'No.' , korea :""},
        { name: '00272', ch: '开始播放', en: 'Auto play' , korea :""},
        { name: '00273', ch: '停止播放', en: 'Stop play' , korea :""},
        { name: '00274', ch: '重置', en: 'Reset' , korea :""},
        { name: '00275', ch: '退出', en: 'Exit' , korea :""},
        { name: '00276', ch: '暂停播放', en: 'Stop' , korea :""},
        { name: '00277', ch: '自动播放', en: 'Auto Play' , korea :""},
        { name: '00278', ch: '下局游戏开始前自动站起', en: 'Auto stand up next game' , korea :""},
        { name: '00279', ch: '音效', en: 'Music' , korea :""},
        { name: '00280', ch: '聊天', en: 'Chat' , korea :""},
        { name: '00281', ch: '牛仔胜', en: 'Cowboy win' , korea :""},
        { name: '00282', ch: '平局', en: 'Tie' , korea :""},
        { name: '00283', ch: '美女赢', en: 'Girl win' , korea :""},
        { name: '00284', ch: '任一人手牌', en: 'Hands' , korea :""},
        { name: '00285', ch: '同花/连牌/同花连张', en: 'Flush/Straight/FlushAndStraight' , korea :""},
        { name: '00286', ch: '对子', en: 'Pocket pair' , korea :""},
        { name: '00287', ch: '对A', en: 'Pocket Ace' , korea :""},
        { name: '00288', ch: '高牌/对子', en: 'High/Pair' , korea :""},
        { name: '00289', ch: '总计', en: 'Summary' , korea :""},
        { name: '00290', ch: '获胜牌型', en: 'Winner conbination' , korea :""},
        { name: '00291', ch: '三条/顺子/同花', en: 'Trible/Straight/Flush' , korea :""},
        { name: '00292', ch: '公共牌', en: 'Public cards' , korea :""},
        { name: '00293', ch: '金刚/同花顺', en: 'Quads/StraightFlush' , korea :""},
        { name: '00294', ch: '未出', en: 'not yet' , korea :""},
        { name: '00295', ch: '余额不足', en: 'not enough coin' , korea :""},
        { name: '00296', ch: '结算', en: 'Cash out' , korea :""},
        { name: '00298', ch: '牌局统计', en: 'Statics' , korea :""},
        { name: '00299', ch: '总局数', en: 'Game count' , korea :""},
        { name: '00300', ch: '牛仔', en: 'Boy' , korea :""},
        { name: '00301', ch: '美女', en: 'Girl' , korea :""},
        { name: '00302', ch: '胜负平:', en: 'WinLose:' , korea :""},
        { name: '00303', ch: '牌局回顾', en: 'Record' , korea :""},
        { name: '00304', ch: '现金', en: 'Cash' , korea :""},
        { name: '00305', ch: '我的金币', en: 'Balance' , korea :""},
        { name: '00306', ch: '德州', en: 'Texas' , korea :""},
        { name: '00307', ch: '下拉刷新', en: 'Drag down' , korea :""},
        { name: '00308', ch: '下注中', en: 'Beting time' , korea :""},
        { name: '00309', ch: '开奖中', en: 'Breaking time' , korea :""},
        { name: '00310', ch: '购买保险', en: 'Insurance' , korea :""},
        { name: '00311', ch: '反超outs', en: 'Outs' , korea :""},
        { name: '00312', ch: '追平outs', en: 'Tie' , korea :""},
        { name: '00313', ch: '出张', en: 'Outs' , korea :""},
        { name: '00314', ch: '赔率', en: 'Ratio' , korea :""},
        { name: '00315', ch: '赔付', en: 'pay' , korea :""},
        { name: '00316', ch: '1/3池', en: '1/3 pots' , korea :""},
        { name: '00317', ch: '1/2池', en: '1/2 pots' , korea :""},
        { name: '00318', ch: '满池', en: 'full pots' , korea :""},
        { name: '00319', ch: '本次购买需要带回: xxx', en: 'You need buy back: xxx' , korea :""},
        { name: '00320', ch: '发发看', en: 'Deal' , korea :""},
        { name: '00321', ch: '看手牌', en: 'Show hands' , korea :""},
        { name: '00322', ch: '操作成功', en: 'Success' , korea :""},
        { name: '00323', ch: '捐赠', en: 'Donate' , korea :""},
        { name: '00324', ch: '请输入内容', en: 'Click to input ' , korea :""},
        { name: '00325', ch: '收到转账，您的余额变为:xxx', en: 'Balance change:xxx' , korea :""},
        { name: '00326', ch: '5秒只能发一次消息', en: 'one msg only in 5s' , korea :""},
        { name: '00327', ch: '返回大厅', en: 'Exit' , korea :""},
        { name: '00328', ch: '哥们我劝你还是弃牌吧', en: 'I suggest you fold' , korea :""},
        { name: '00329', ch: '我是AA，就问你怕不怕', en: 'Im Aces' , korea :""},
        { name: '00330', ch: '你敢加注，我就敢推', en: 'If you raise,i will all in' , korea :""},
        { name: '00331', ch: '你们怕不是打伙牌哦', en: 'I think you guys set me up' , korea :""},
        { name: '00332', ch: '大侠，手下留情', en: 'Show mercy plz' , korea :""},
        { name: '00333', ch: '你给我等着!', en: 'I Will revenge!' , korea :""},
        { name: '00334', ch: '风水轮流转！', en: 'It is my turn now!' , korea :""},
        { name: '00335', ch: '一看你就是条鱼', en: 'Catch fish now' , korea :""},
        { name: '00336', ch: '对手手牌', en: 'Hands' , korea :""},
        { name: '00337', ch: '购买:', en: 'buy insurance:' , korea :""},
        { name: '00338', ch: '击中保险:', en: 'insurance reward:' , korea :""},
        { name: '00339', ch: '购买保险中', en: 'buying insurance' , korea :""},
        { name: '00340', ch: '规则说明', en: 'Rules' , korea :""},
        { name: '00341', ch: '牌型', en: 'Combination' , korea :""},
        { name: '00342', ch: '保险赔率', en: 'Insurance' , korea :""},
        { name: '00343', ch: '击中Jackpot:', en: 'hit jackpot:' , korea :""},
        { name: '00344', ch: '玩家搓牌中:', en: 'Player sneaking card' , korea :""},
        { name: '00345', ch: '直接显示', en: 'Show directly' , korea :""},
        { name: '00346', ch: '搓牌', en: 'Sneak card' , korea :""},
        { name: '00347', ch: '想要花费1金币体验搓牌吗？其乐无穷哦～', en: 'cost 1 coin to Sneak card?you will enjoy it' , korea :""},
        { name: '00348', ch: '今日', en: 'Today' , korea :""},
        { name: '00349', ch: '7日', en: '7 days' , korea :""},
        { name: '00350', ch: '30日', en: '30 days' , korea :""},
        { name: '00351', ch: '盈亏', en: 'Profit' , korea :""},
        { name: '00352', ch: '牌局编号', en: 'Game code' , korea :""},
        { name: '00353', ch: '房间名称', en: 'Room name' , korea :""},
        { name: '00354', ch: '游戏类型', en: 'Game type' , korea :""},
        { name: '00355', ch: '座位数', en: 'Seats' , korea :""},
        { name: '00356', ch: '盲注', en: 'Blind' , korea :""},
        { name: '00357', ch: '总手数', en: 'Total Hands' , korea :""},
        { name: '00358', ch: '总带入', en: 'Total Chips' , korea :""},
        { name: '00359', ch: '玩家', en: 'Player' , korea :""},
        { name: '00360', ch: '输赢', en: 'Result' , korea :""},
        { name: '00361', ch: '牌局概述', en: 'Genera infos', korea :"" },
        { name: '00362', ch: '牌谱', en: 'Recipes' , korea :""},
        { name: '00363', ch: '战绩详情', en: 'Details' , korea :""},
        { name: '00364', ch: '获胜玩家', en: 'Winner' , korea :""},
        { name: '00365', ch: '我的手牌', en: 'My cards' , korea :""},
        { name: '00366', ch: '已断线', en: 'Disconnected' , korea :""},
        { name: '00367', ch: '返回游戏', en: 'Back game' , korea :""},
        { name: '00368', ch: '下局站起', en: 'Stand soon' , korea :""},
        { name: '00369', ch: '请先站起', en: 'Stand first' , korea :""},
        { name: '00370', ch: '托管中无法站起', en: 'Back to game first' , korea :""},
        { name: '00371', ch: '桌面设置', en: 'BG setting' , korea :""},
        { name: '00372', ch: '扑克设置', en: 'Poker setting' , korea :""},
        { name: '00373', ch: '快捷投注(2-4个)', en: 'Bet setting(2-4)' , korea :""},
        { name: '00374', ch: '个人设置', en: 'Setting' , korea :""},
        { name: '00375', ch: '拉杆确认', en: 'Slider Comfirm' , korea :""},
        { name: '00376', ch: '显示bb', en: 'BB MODE' , korea :""},
        { name: '00377', ch: '牌局进行中', en: 'Processing' , korea :""},
        { name: '00378', ch: '踢出', en: 'Kick' , korea :""},
        { name: '00379', ch: '加好友', en: 'Add' , korea :""},
        { name: '00380', ch: '牌局回放', en: 'Replay' , korea :""},
        { name: '00381', ch: '补充保险池', en: 'Buy Insurance' , korea :""},
        { name: '00382', ch: '保险池', en: 'Pool' , korea :""},
        { name: '00383', ch: '充入', en: 'Charge' , korea :""},
        { name: '00384', ch: '占成', en: 'Ratio' , korea :""},
        { name: '00385', ch: '充入保险池后自下一手牌生效', en: 'Will valid in next hands' , korea :""},
        { name: '00386', ch: '立即补充', en: 'Buy now' , korea :""},
        { name: '00387', ch: '带入', en: 'Buy in' , korea :""},
        { name: '00388', ch: '联系客服', en: 'Help' , korea :""},
        { name: '00389', ch: '站起围观', en: 'Stand up' , korea :""},
        { name: '00390', ch: '赢取', en: 'Win' , korea :""},
        { name: '00391', ch: '3 Bet', en: '3 Bet' , korea :"3 Bet"},
        { name: '00392', ch: '请先取消已选中', en: 'Unselected first' , korea :""},
        { name: '00393', ch: '至少设置2个快捷按钮', en: 'the minimum Shortcut setting is 2' , korea :""},
        { name: '00394', ch: '投保额度：', en: 'Insurance:' , korea :""},
        { name: '00395', ch: '邀请分享', en: 'Invite' , korea :""},
        { name: '00396', ch: '亮牌', en: 'Show' , korea :""},
        { name: '00397', ch: '买入申请', en: 'Buyin request' , korea :""},
        { name: '00398', ch: '同意', en: 'Agree' , korea :""},
        { name: '00399', ch: '好友申请', en: 'New friends' , korea :""},
        { name: '00400', ch: '申请成为好友', en: 'Friend request' , korea :""},
        { name: '00401', ch: '保险战绩', en: 'Insurance profit' , korea :""},
        

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////                      热更     
        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        { name: '10001', ch: '检测是否有更新版本', en: 'Checking update' , korea :""},
        { name: '10002', ch: '本地没有找到manifest文件，跳过热更新', en: ' Can not find manifest file,skip update' , korea :""},
        { name: '10003', ch: '下载远端manifest文件失败，跳过热更新', en: 'Download manifest file failed,skip update' , korea :""},
        { name: '10004', ch: '已是最新版本', en: 'No need update' , korea :""},
        { name: '10005', ch: '发现新版本，准备更新', en: 'Ready to update' , korea :""},
        { name: '10006', ch: '本地没有找到manifest文件', en: 'Load manifest file failed' , korea :""},
        { name: '10007', ch: '更新中', en: 'Updating' , korea :""},
        { name: '10008', ch: '更新完毕', en: 'Update finished' , korea :""},
        { name: '10009', ch: '更新失败', en: 'Update failed' , korea :""},
        { name: '10010', ch: '下载更新失败的资源', en: 'Redownload' , korea :""},
    ];
}
