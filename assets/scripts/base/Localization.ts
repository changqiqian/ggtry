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

        { name: '00000', ch: '资源加载完成', en: 'load src finished' },
        { name: '00001', ch: '本应用软件在该地区无法使用，造成不便请见谅。', en: 'This application is not available in your region.Sorry for the inconvenience.' },
        { name: '00002', ch: '无效的电话号码！', en: 'Invalid Phone Number!' },
        { name: '00003', ch: '操作无法完成。（错误代码：', en: "The operation couldn't be completed.(Error code:" },
        { name: '00004', ch: '请输入密码', en: 'Please input password' },
        { name: '00005', ch: '请输入验证码', en: 'Please input sms-code' },
        { name: '00006', ch: '验证码无效', en: 'Invalid Confirmation Code!' },
        { name: '00007', ch: '输入的两个密码不一致！', en: 'The two passwords entered are inconsistent!' },
        { name: '00008', ch: '密码重置失败！', en: 'Password reset failed!' },
        { name: '00009', ch: '密码重置成功！', en: 'Password reset successfully!' },
        { name: '00010', ch: '注册失败!', en: 'Registration failed!' },
        { name: '00011', ch: '请输入昵称!', en: 'Please input nickname' },
        { name: '00012', ch: '请选择头像!', en: 'Please choose an avatar!' },
        { name: '00013', ch: '个人信息设置成功！', en: 'Complete personal information success!' },
        { name: '00014', ch: '操作無法完成。（錯誤代碼：', en: "The operation couldn't be completed.(Error code:" },
        { name: '00015', ch: '输入内容不能包含空格', en: 'Input can not contain charactor "space"' },
        { name: '00016', ch: '请打开Cyber官网，扫描二维码', en: 'Please access Cyber website and scan' },
        { name: '00017', ch: '免费', en: 'Free' },
        { name: '00018', ch: '手动开始', en: 'Manual Start' },
        { name: '00019', ch: '报名中', en: 'Registering' },
        { name: '00020', ch: '比赛结束', en: 'Match End' },
        { name: '00021', ch: '延迟报名', en: 'Delay Reg' },
        { name: '00022', ch: '休息中', en: 'Breaking time' },
        { name: '00023', ch: '进行中', en: 'Started' },
        { name: '00024', ch: '即将开始', en: 'Start Soon' },
        { name: '00025', ch: '赛事信息', en: 'Info' },
        { name: '00026', ch: '玩家信息', en: 'Players' },
        { name: '00027', ch: '奖励', en: 'Prize' },
        { name: '00028', ch: '牌桌', en: 'Table' },
        { name: '00029', ch: '获取比赛信息失败', en: 'Get mtt info failed' },
        { name: '00030', ch: '已破保', en: 'Smashed' },
        { name: '00031', ch: '报名', en: 'Register' },
        { name: '00032', ch: '审核中', en: 'Waiting for review' },
        { name: '00033', ch: '取消报名', en: 'Unregister' },
        { name: '00034', ch: '回到比赛', en: 'Back to game' },
        { name: '00035', ch: '开始时间', en: 'Start time' },
        { name: '00036', ch: '免费', en: 'Free' },
        { name: '00037', ch: '比赛还没开始,', en: 'Registering' },
        { name: '00038', ch: '比赛进行中', en: 'Runing' },
        { name: '00039', ch: '钱圈', en: 'Reward range' },
        { name: '00040', ch: '分钟', en: 'mins' },
        { name: '00041', ch: '重购', en: 'Confirm Rebuy' },
        { name: '00042', ch: '报名', en: 'Confirm Registration' },
        { name: '00043', ch: '请选择支付方式', en: 'Please select the payment' },
        { name: '00044', ch: '没有可用门票', en: 'No Tickets Useable' },
        { name: '00045', ch: 'mtt开赛失败', en: 'Start mtt failed' },
        { name: '00046', ch: '确定解散比赛吗？\n报名费将退还给用户', en: 'Confirm to dismiss? \n Fees will be returned to registered player' },
        { name: '00047', ch: '确定开始比赛吗？', en: 'Start match now?' },
        { name: '00048', ch: 'Season', en: 'Season' },
        { name: '00049', ch: 'Month', en: 'Month' },
        { name: '00050', ch: 'Week', en: 'Week' },
        { name: '00051', ch: 'All', en: 'All' },
        { name: '00052', ch: '暂无数据', en: 'No data' },
        { name: '00053', ch: '进入游戏失败', en: 'Enter game failed' },
        { name: '00054', ch: '当前级别', en: 'Now Level' },
        { name: '00055', ch: '下一级别', en: 'Next Level' },
        { name: '00056', ch: '桌号', en: 'Table No.' },
        { name: '00057', ch: '您没有足够的钻石', en: 'Not enough diamond' },
        { name: '00058', ch: '莊位2倍前注', en: 'Dealer double score' },
        { name: '00059', ch: '最小保留記分牌數', en: 'Min score keep' },
        { name: '00060', ch: '保险', en: 'Insurance' },
        { name: '00061', ch: '剩余时间', en: 'Left time' },
        { name: '00062', ch: '排名', en: 'Rank' },
        { name: '00063', ch: '涨盲通知：当前盲注级别为', en: 'Level up:Current level:' },
        { name: '00064', ch: '底池', en: 'Pot' },
        { name: '00065', ch: '弃牌', en: 'Fold' },
        { name: '00066', ch: '过牌', en: 'Check' },
        { name: '00067', ch: '跟注', en: 'Call' },
        { name: '00068', ch: '加注', en: 'Raise' },
        { name: '00069', ch: '全下', en: 'All in' },
        { name: '00070', ch: '抓头', en: 'Straddle' },
        { name: '00071', ch: '高牌', en: 'High' },
        { name: '00072', ch: '一对', en: 'One pair' },
        { name: '00073', ch: '两对', en: 'Two pair' },
        { name: '00074', ch: '三条', en: 'Three of kind' },
        { name: '00075', ch: '顺子', en: 'Straight' },
        { name: '00076', ch: '同花', en: 'Flush' },
        { name: '00077', ch: '葫芦', en: 'Full house' },
        { name: '00078', ch: '四条', en: 'Four of kind' },
        { name: '00079', ch: '同花顺', en: 'Flush straight' },
        { name: '00080', ch: '皇家同花顺', en: 'Royal flush straight' },
        { name: '00081', ch: '您报名的mtt比赛已经开始，请前往参加', en: 'Mtt match started,join now~' },
        { name: '00082', ch: '钻石不足', en: 'No diamonds' },
        { name: '00083', ch: '恭喜', en: 'Congratulations' },
        { name: '00084', ch: '比赛结束', en: 'Match End' },
        { name: '00085', ch: '您获得了第xxx名', en: 'You are the xxx place' },
        { name: '00086', ch: '无缘前三，再接再厉', en: 'Out of top 3,try harder next time' },
        { name: '00087', ch: '持续时间', en: 'Duration' },
        { name: '00088', ch: '每xxx分钟休息5分钟', en: 'after every xxx mins rest 5 mins' },
        { name: '00089', ch: '关闭', en: 'close' },
        { name: '00090', ch: '每手牌获胜的玩家都会被抽取服务费', en: 'Collect tax from winner in every hands' },
        { name: '00091', ch: '游戏结束后，针对赢家收取服务费', en: 'Collect tax from winner when game end' },
        { name: '00092', ch: '金币场', en: 'Cash' },
        { name: '00093', ch: '积分场', en: 'Point' },
        { name: '00094', ch: '保存模版成功', en: 'Save success' },
        { name: '00095', ch: '保存模版失败', en: 'Save failed' },
        { name: '00096', ch: '您确定要删除模版吗？', en: 'Are you sure to delete?' },
        { name: '00097', ch: '本地资源加载中', en: 'Loading resource...' },
        { name: '00098', ch: '手机号已注册', en: 'This phone number registed already' },
        { name: '00099', ch: '您没有权限', en: 'you have no rights' },
        { name: '00100', ch: '请输入id', en: 'Please input id' },
        { name: '00101', ch: '俱乐部已解散', en: 'Club dismissed' },
        { name: '00102', ch: '确定要解散当前俱乐部吗？', en: 'Are you sure you wanna dismiss current club?' },
        { name: '00103', ch: '确定要退出当前俱乐部吗？', en: 'Are you sure you wanna quit current club?' },
        { name: '00104', ch: '已退出俱乐部', en: 'Quit Club success' },
        { name: '00105', ch: '申请已发送', en: 'applying' },
        { name: '00106', ch: '您已成功俱乐部xxx', en: 'you already join club xxx' },
        { name: '00107', ch: '已通过', en: 'member added' },
        { name: '00108', ch: '已拒绝', en: 'member reject' },
        { name: '00109', ch: '密码只能由数字和字母组成', en: '密码只能由数字和字母组成' },
        { name: '00110', ch: 'ID只能由数字组成', en: 'ID只能由数字组成' },
        { name: '00111', ch: '请输入账号', en: 'Please input account' },
        { name: '00112', ch: '邀请码只能由7位数字组成', en: '邀请码只能由7位数字组成' },
        { name: '00113', ch: '与服务器失去连接', en: 'Disconnected with server' },
        { name: '00114', ch: '已经没有申请了', en: 'No applying now' },
        { name: '00115', ch: '请选择玩家', en: 'Select user first' },
        { name: '00116', ch: '回收积分', en: 'Take back' },
        { name: '00117', ch: '发放积分', en: 'Share point' },
        { name: '00118', ch: '您确定要把玩家xxx踢出俱乐部吗？', en: 'Are you sure you wanna remove user xxx?' },
        { name: '00119', ch: '俱乐部信息修改成功', en: 'Club info saved' },
        { name: '00120', ch: '修改成功', en: 'Club point modifyd' },
        { name: '00121', ch: '修改俱乐部名称', en: 'Edit club name' },
        { name: '00122', ch: '修改俱乐部简介', en: 'Edit club brief' },
        { name: '00123', ch: '俱乐部简介', en: 'Club brief' },
        { name: '00124', ch: '请输入金额', en: 'Please input amount' },
        { name: '00125', ch: '输入不合法！', en: 'Invalid input!' },
        { name: '00126', ch: '设为管理员', en: 'Set manager' },
        { name: '00127', ch: '取消管理员', en: 'Cancel manager' },
        { name: '00128', ch: '管理员', en: 'Manager' },
        { name: '00129', ch: '创建者', en: 'Owner' },
        { name: '00130', ch: '修改昵称', en: 'Change name' },
        { name: '00131', ch: '登录', en: 'Login' },
        { name: '00132', ch: '注册', en: 'Sign' },
        { name: '00133', ch: '使用<color=#01FEA4>Cyber Poker</color>账号登录', en: 'Login with <color=#01FEA4>Cyber Poker</color> account' },
        { name: '00134', ch: '请输入您的手机号', en: 'Plz input phone number' },
        { name: '00135', ch: '下一步', en: 'Next' },
        { name: '00136', ch: '完善用户资料', en: 'User info' },
        { name: '00137', ch: '编辑', en: 'Edit' },
        { name: '00138', ch: '输入您的昵称', en: 'Plz input nickname' },
        { name: '00139', ch: '确定', en: 'Confirm' },
        { name: '00140', ch: '邀请码(选填)', en: 'Invite code(optional)' },
        { name: '00141', ch: '请输入邀请码', en: 'Plz input invite code' },
        { name: '00142', ch: '密码登录', en: 'Password login' },
        { name: '00143', ch: '输入您的密码', en: 'Plz input password' },
        { name: '00144', ch: '忘记密码？', en: 'forget？' },
        { name: '00145', ch: '验证码登录', en: 'Login with SMS' },
        { name: '00146', ch: 'Mtt', en: 'Mtt' },
        { name: '00147', ch: '现金桌', en: 'Cash' },
        { name: '00148', ch: '俱乐部', en: 'Club' },
        { name: '00149', ch: '活动', en: 'Activity' },
        { name: '00150', ch: '我的', en: 'Mine' },
        { name: '00151', ch: '选择您的国家或地区', en: 'Chose country' },
        { name: '00152', ch: '搜索国家电话代码或姓名', en: 'Search' },
        { name: '00153', ch: '找回密码', en: 'Find password' },
        { name: '00154', ch: '点击选择头像', en: 'Click to Chose head' },
        { name: '00155', ch: '取消', en: 'Cancel' },
        { name: '00156', ch: '设置密码', en: 'Password setting' },
        { name: '00157', ch: '请再次输入密码', en: 'Plz input password again' },
        { name: '00158', ch: '验证码', en: 'SMS code' },
        { name: '00159', ch: '重新发送', en: 'Re-send' },
        { name: '00160', ch: '通过', en: 'Accept' },
        { name: '00161', ch: '拒绝', en: 'Reject' },
        { name: '00162', ch: '积分管理', en: 'Management' },
        { name: '00163', ch: '搜索用户ID', en: 'Search user id' },
        { name: '00164', ch: '回收', en: 'Take back' },
        { name: '00165', ch: '发放', en: 'Give' },
        { name: '00167', ch: '玩家余额:', en: 'Player amount:' },
        { name: '00168', ch: '俱乐部余额:', en: 'Club amount:' },
        { name: '00169', ch: '积分纪录', en: 'Point records' },
        { name: '00170', ch: '基础设置', en: 'Basic setting' },
        { name: '00171', ch: '游戏模式', en: 'Game mode' },
        { name: '00172', ch: '积分场', en: 'Point' },
        { name: '00173', ch: '金币场', en: 'Cash' },
        { name: '00174', ch: '按把设定', en: 'Every round' },
        { name: '00175', ch: '按局设定', en: 'Every game' },
        { name: '00176', ch: '抽水设定', en: 'Tax setting' },
        { name: '00177', ch: '买入设定', en: 'Buy-in setting' },
        { name: '00178', ch: '买入总上限设定:', en: 'Buy-in limit:' },
        { name: '00179', ch: '带入范围设定:', en: 'Buy-in range:' },
        { name: '00180', ch: '允许带出记分牌', en: 'Allowed bring back' },
        { name: '00181', ch: '最小保留积分牌:', en: 'min score remain' },
        { name: '00182', ch: '带入限制', en: 'Buy-in limit' },
        { name: '00183', ch: '保险', en: 'Ins' },
        { name: '00184', ch: 'IP限制', en: 'IP' },
        { name: '00185', ch: '删除', en: 'Delete' },
        { name: '00186', ch: '牌局模版', en: 'Module' },
        { name: '00187', ch: '无限注德州扑克', en: 'Unlimited texas' },
        { name: '00188', ch: '短牌', en: 'Short' },
        { name: '00189', ch: '创建俱乐部', en: 'Create club' },
        { name: '00190', ch: '俱乐部LOGO', en: 'Club logo' },
        { name: '00191', ch: '俱乐部封面', en: 'Club stamp' },
        { name: '00192', ch: '俱乐部名称', en: 'Club name' },
        { name: '00193', ch: '俱乐部简介', en: 'Club brief' },
        { name: '00194', ch: '创建短牌', en: 'Create short' },
        { name: '00195', ch: '请输入房间名字', en: 'Input room name' },
        { name: '00196', ch: '保存模版', en: 'Save module' },
        { name: '00197', ch: '创建牌局', en: 'Create room' },
        { name: '00198', ch: '底分设置', en: 'Score setting' },
        { name: '00199', ch: '底分', en: 'Base score' },
        { name: '00200', ch: '庄位2倍前注', en: 'Btn double' },
        { name: '00201', ch: '游戏设置', en: 'Game setting' },
        { name: '00202', ch: '牌局时长', en: 'Game duration' },
        { name: '00203', ch: '思考时间', en: 'thinking duration' },
        { name: '00204', ch: '人数设置', en: 'Seats num' },
        { name: '00205', ch: '自动开始人数', en: 'Auto start' },
        { name: '00206', ch: 'GPS限制', en: 'GPS limit' },
        { name: '00207', ch: 'IP限制', en: 'IP limit' },
        { name: '00208', ch: '创建德州', en: 'Create texas' },
        { name: '00209', ch: '盲注设置', en: 'Blind setting' },
        { name: '00210', ch: '抓头', en: 'Straddle' },
        { name: '00211', ch: '前注', en: 'Ante' },
        { name: '00212', ch: '俱乐部成员', en: 'Club members' },
        { name: '00213', ch: '俱乐部申请', en: 'Club applys' },
        { name: '00214', ch: '全部拒绝', en: 'Reject all' },
        { name: '00215', ch: '全部通过', en: 'Accept all' },
        { name: '00216', ch: '个人资产', en: 'Assets' },
        { name: '00217', ch: '战绩', en: 'Records' },
        { name: '00218', ch: '数据', en: 'Data' },
        { name: '00219', ch: '创建牌桌', en: 'Create table' },
        { name: '00220', ch: '搜索俱乐部', en: 'Search club' },
        { name: '00221', ch: '请输入俱乐部ID', en: 'Input club id' },
        { name: '00222', ch: '加入俱乐部', en: 'Join club' },
        { name: '00223', ch: '加入', en: 'Join' },
        { name: '00224', ch: '俱乐部详情', en: 'Club details' },
        { name: '00225', ch: '发币记录', en: 'Point records' },
        { name: '00226', ch: '成员', en: 'Member' },
        { name: '00227', ch: '查看更多', en: 'More' },
        { name: '00228', ch: '俱乐部ID', en: 'Club id' },
        { name: '00229', ch: '联盟', en: 'Union' },
        { name: '00230', ch: '退出俱乐部', en: 'Exit club' },
        { name: '00231', ch: '解散俱乐部', en: 'Dismiss club' },
        { name: '00232', ch: '玩法选择', en: 'Game play' },
        { name: '00233', ch: '前注玩法', en: 'Ante mode' },
        { name: '00234', ch: '盲注玩法', en: 'Bliind mode' },
        { name: '00235', ch: '输入个性签名', en: 'Input signature' },
        { name: '00236', ch: '连接成功', en: 'Server connected' },
        { name: '00237', ch: '创建成功', en: 'Create success' },
        { name: '00238', ch: '奥马哈', en: 'Omh' },
        { name: '00239', ch: '最多只能同时加入4个游戏', en: 'Max Game' },
        { name: '00240', ch: '游戏xxx已经被解散', en: 'room xxx dismiss' },
        { name: '00241', ch: '暂离', en: 'Leave' },
        { name: '00242', ch: '倒计时:', en: 'Left time:' },
        { name: '00243', ch: '最小', en: 'Min' },
        { name: '00244', ch: '最大', en: 'Max' },
        { name: '00245', ch: '带入成功', en: 'Buy-in success' },
        { name: '00246', ch: '等待开局', en: 'Wating' },
        { name: '00247', ch: '结算中', en: 'Settlement' },
        { name: '00248', ch: '买入中', en: 'Buying' },
        { name: '00249', ch: '带出记分牌', en: 'Cash-Out' },
        { name: '00250', ch: '带出将在下一手开始前生效', en: 'Will cash out next round' },
        { name: '00251', ch: '带出成功', en: 'Cash out success' },
        { name: '00252', ch: '小盲', en: 'SB' },
        { name: '00253', ch: '大盲', en: 'BB' },
        { name: '00254', ch: '下注', en: 'Bet' },
        { name: '00255', ch: '买入', en: 'BuyIn' },
        { name: '00256', ch: '提示', en: 'Tips' },
        { name: '00257', ch: '买入将在下一手开始前生效', en: 'Will buy in next round' },
        { name: '00258', ch: '余额:', en: 'Balance:' },
        { name: '00259', ch: '游戏中:', en: 'In game:' },
        { name: '00260', ch: '游戏中', en: 'In game' },
        { name: '00261', ch: '玩家数据', en: 'detail' },
        { name: '00262', ch: '局数', en: 'Games' },
        { name: '00263', ch: '手数', en: 'Hands' },
        { name: '00264', ch: '入池率', en: 'VPIP' },
        { name: '00265', ch: '翻前加注率', en: 'PFR' },
        { name: '00266', ch: '用户不存在', en: 'No result' },
        { name: '00267', ch: '公厅游戏', en: 'Public Game' },
        { name: '00268', ch: '实时战绩', en: 'Details' },
        { name: '00269', ch: '昵称', en: 'Name' },
        { name: '00270', ch: '退出结算', en: 'Settlement' },
        { name: '00271', ch: '编号:', en: 'No.' },
        { name: '00272', ch: '开始播放', en: 'Auto play' },
        { name: '00273', ch: '停止播放', en: 'Stop play' },
        { name: '00274', ch: '重置', en: 'Reset' },
        { name: '00275', ch: '退出', en: 'Exit' },
        { name: '00276', ch: '暂停播放', en: 'Stop' },
        { name: '00277', ch: '自动播放', en: 'Auto Play' },
        { name: '00278', ch: '下局游戏开始前自动站起', en: 'Auto stand up next game' },
        { name: '00279', ch: '音效', en: 'Music' },
        { name: '00280', ch: '聊天', en: 'Chat' },
        { name: '00281', ch: '牛仔胜', en: 'Cowboy win' },
        { name: '00282', ch: '平局', en: 'Tie' },
        { name: '00283', ch: '美女赢', en: 'Girl win' },
        { name: '00284', ch: '任一人手牌', en: 'Hands' },
        { name: '00285', ch: '同花/连牌/同花连张', en: 'Flush/Straight/FlushAndStraight' },
        { name: '00286', ch: '对子', en: 'Pocket pair' },
        { name: '00287', ch: '对A', en: 'Pocket Ace' },
        { name: '00288', ch: '高牌/对子', en: 'High/Pair' },
        { name: '00289', ch: '总计', en: 'Summary' },
        { name: '00290', ch: '获胜牌型', en: 'Winner conbination' },
        { name: '00291', ch: '三条/顺子/同花', en: 'Trible/Straight/Flush' },
        { name: '00292', ch: '公共牌', en: 'Public cards' },
        { name: '00293', ch: '金刚/同花顺', en: 'Quads/StraightFlush' },
        { name: '00294', ch: '未出', en: 'not yet' },
        { name: '00295', ch: '余额不足', en: 'not enough coin' },
        { name: '00296', ch: '结算', en: 'Cash out' },
        { name: '00298', ch: '牌局统计', en: 'Statics' },
        { name: '00299', ch: '总局数', en: 'Game count' },
        { name: '00300', ch: '牛仔', en: 'Boy' },
        { name: '00301', ch: '美女', en: 'Girl' },
        { name: '00302', ch: '胜负平:', en: 'WinLose:' },
        { name: '00303', ch: '牌局回顾', en: 'Record' },
        { name: '00304', ch: '现金', en: 'Cash' },
        { name: '00305', ch: '我的金币', en: 'Balance' },
        { name: '00306', ch: '德州', en: 'Texas' },
        { name: '00307', ch: '下拉刷新', en: 'Drag down' },
        { name: '00308', ch: '下注中', en: 'Beting time' },
        { name: '00309', ch: '开奖中', en: 'Breaking time' },
        { name: '00310', ch: '购买保险', en: 'Insurance' },
        { name: '00311', ch: '反超outs', en: 'Outs' },
        { name: '00312', ch: '追平outs', en: 'Tie' },
        { name: '00313', ch: '出张', en: 'Outs' },
        { name: '00314', ch: '赔率', en: 'Ratio' },
        { name: '00315', ch: '赔付', en: 'pay' },
        { name: '00316', ch: '1/4池', en: '1/4 pots' },
        { name: '00317', ch: '1/2池', en: '1/2 pots' },
        { name: '00318', ch: '满池', en: 'full pots' },
        { name: '00319', ch: '本次购买需要带回: xxx', en: 'You need buy back: xxx' },
        { name: '00320', ch: '发发看', en: 'Deal' },
        { name: '00321', ch: '看手牌', en: 'Show hands' },
        { name: '00322', ch: '操作成功', en: 'Success' },
        { name: '00323', ch: '捐赠', en: 'Donate' },
        { name: '00324', ch: '请输入内容', en: 'Click to input ' },
        { name: '00325', ch: '收到转账，您的余额变为:xxx', en: 'Balance change:xxx' },
        { name: '00326', ch: '5秒只能发一次消息', en: 'one msg only in 5s' },
        { name: '00327', ch: '返回大厅', en: 'Exit' },
        { name: '00328', ch: '哥们我劝你还是弃牌吧', en: 'I suggest you fold' },
        { name: '00329', ch: '我是AA，就问你怕不怕', en: 'Im Aces' },
        { name: '00330', ch: '你敢加注，我就敢推', en: 'If you raise,i will all in' },
        { name: '00331', ch: '你们怕不是打伙牌哦', en: 'I think you guys set me up' },
        { name: '00332', ch: '大侠，手下留情', en: 'Show mercy plz' },
        { name: '00333', ch: '你给我等着!', en: 'I Will revenge!' },
        { name: '00334', ch: '风水轮流转！', en: 'It is my turn now!' },
        { name: '00335', ch: '一看你就是条鱼', en: 'Catch fish now' },
        { name: '00336', ch: '对手手牌', en: 'Hands' },
        { name: '00337', ch: '购买:', en: 'buy insurance:' },
        { name: '00338', ch: '击中保险:', en: 'insurance reward:' },

        { name: '01000', ch: '公告', en: 'Notification' },
        { name: '01001', ch: '消息', en: 'MESSAGES' },
        { name: '01002', ch: '收支记录', en: 'Bill' },
        { name: '01003', ch: '游戏战绩', en: 'Game records' },

        


        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////                      热更     
        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        { name: '10001', ch: '检测是否有更新版本', en: 'Checking update' },
        { name: '10002', ch: '本地没有找到manifest文件，跳过热更新', en: ' Can not find manifest file,skip update' },
        { name: '10003', ch: '下载远端manifest文件失败，跳过热更新', en: 'Download manifest file failed,skip update' },
        { name: '10004', ch: '已是最新版本', en: 'No need update' },
        { name: '10005', ch: '发现新版本，准备更新', en: 'Ready to update' },
        { name: '10006', ch: '本地没有找到manifest文件', en: 'Load manifest file failed' },
        { name: '10007', ch: '更新中', en: 'Updating' },
        { name: '10008', ch: '更新完毕', en: 'Update finished' },
        { name: '10009', ch: '更新失败', en: 'Update failed' },
        { name: '10010', ch: '下载更新失败的资源', en: 'Redownload' },
    ];
}
