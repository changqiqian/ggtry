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

    public static LocationData =
    [
 

        { name: '00000', ch: '资源加载完成', en: 'load src finished' , korea :""},

    ];
}
