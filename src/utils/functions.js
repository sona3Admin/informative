import  i18n  from 'i18next';
export const convertToArabicNumeral = (number) => {
    const arabicNumerals = {
        '0': '٠',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
    };

    const lang = i18n.language;

    if (lang === 'ar') {
        return number.toString().split('').map(digit => arabicNumerals[digit]).join('');
    } else {
        return number.toString();
    }
};