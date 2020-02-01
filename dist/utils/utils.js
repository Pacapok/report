"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static checkString(val) {
        if (val) {
            return val;
        }
        else {
            return '';
        }
    }
    static checkIsNotNull(val) {
        if (!val) {
            return false;
        }
        return true;
    }
    static checkIsNotNullDouble(val) {
        if (!val) {
            return 0;
        }
        return val;
    }
    static replaceSpecialCharacters(val) {
        val = val.replace('&', "&#38;");
        val = val.replace('<', "&#60;");
        val = val.replace(':', "&#58;");
        val = val.replace(',', "&#44;");
        return val.replace(/\n\r/g, "<br />");
    }
    static sortAsc(object, inside) {
        object.sort(function (a, b) {
            var nameA = a[inside];
            var nameB = b[inside];
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return object;
    }
    static IPDorOPD(string) {
        if (string[0] === 'I') {
            return 'IPD';
        }
        return 'OPD';
    }
    static convertThaiBaht(amount) {
        const txtNumArr = new Array('ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ');
        const txtDigitArr = new Array('', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน');
        let bahtText = '';
        if (isNaN(amount)) {
            return 'ข้อมูลนำเข้าไม่ถูกต้อง';
        }
        else {
            if ((amount - 0) > 999999999.9999) {
                return 'ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้';
            }
            else {
                const amountFloat = amount.toString().split('.');
                if (amountFloat.length > 1 && amountFloat[1].length > 0) {
                    amountFloat[1] = amountFloat[1].substring(0, 2);
                }
                const numberLen = amountFloat[0].length - 0;
                let oldTmp = 0;
                for (let i = 0; i < numberLen; i++) {
                    const tmp = Number(amountFloat[0].substring(i, i + 1)) - 0;
                    if (tmp !== 0) {
                        if ((i === (numberLen - 1) || i === (numberLen - 7)) && (tmp === 1) && oldTmp !== 0) {
                            bahtText += 'เอ็ด';
                        }
                        else if (((i === (numberLen - 2)) && (tmp === 2)) || ((i === (numberLen - 8)) && (tmp === 2))) {
                            bahtText += 'ยี่';
                        }
                        else if (((i === (numberLen - 2)) && (tmp === 1)) || ((i === (numberLen - 8)) && (tmp === 1))) {
                            bahtText += '';
                        }
                        else {
                            bahtText += txtNumArr[tmp];
                        }
                        bahtText += txtDigitArr[numberLen - i - 1];
                    }
                    else if ((i === (numberLen - 7)) && (tmp === 0)) {
                        bahtText += txtDigitArr[numberLen - i - 1];
                    }
                    oldTmp = tmp;
                }
                bahtText += 'บาท';
                oldTmp = 0;
                if ((amountFloat.length <= 1)) {
                    bahtText += 'ถ้วน';
                }
                else {
                    const decimalLen = amountFloat[1].length - 0;
                    for (let i = 0; i < decimalLen; i++) {
                        const tmp = Number(amountFloat[1].substring(i, i + 1)) - 0;
                        if (tmp !== 0) {
                            if ((i === (decimalLen - 1)) && (tmp === 1) && oldTmp !== 0) {
                                bahtText += 'เอ็ด';
                            }
                            else if ((i === (decimalLen - 2)) && (tmp === 2)) {
                                bahtText += 'ยี่';
                            }
                            else if ((i === (decimalLen - 2)) && (tmp === 1)) {
                                bahtText += '';
                            }
                            else {
                                bahtText += txtNumArr[tmp];
                            }
                            bahtText += txtDigitArr[decimalLen - i - 1];
                        }
                        oldTmp = tmp;
                    }
                    bahtText += 'สตางค์';
                }
                return bahtText;
            }
        }
    }
    static numberToWord(number) {
        const first = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
        let word = '';
        for (let i = 0; i < mad.length; i++) {
            let tempNumber = number % (100 * Math.pow(1000, i));
            if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
                if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                    word = first[Math.floor(tempNumber / Math.pow(1000, i))] + mad[i] + ' ' + word;
                }
                else {
                    word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + '-' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + mad[i] + ' ' + word;
                }
            }
            tempNumber = number % (Math.pow(1000, i + 1));
            if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) {
                word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'hunderd ' + word;
            }
        }
        return word;
    }
    static numberToWordSatang(number) {
        const first = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
        const unit = ['Baht', 'Satang'];
        let amountFloat = [];
        let word = '';
        for (let i = 0; i < mad.length; i++) {
            let tempNumber = number % (100 * Math.pow(1000, i));
            if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
                if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                    word = first[Math.floor(tempNumber / Math.pow(1000, i))] + mad[i] + ' ' + word;
                }
                else {
                    word = tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + '-' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + mad[i] + ' ' + word;
                }
            }
            tempNumber = number % (Math.pow(1000, i + 1));
            if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) {
                word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'hunderd ' + word;
            }
        }
        if (number % Math.floor(number) != 0) {
            amountFloat = (Math.round(number * 100) / 100).toFixed(2).split('.');
        }
        if ((amountFloat.length <= 1)) {
            word = word + unit[0];
        }
        else {
            word = word + unit[0] + ' ';
            for (let i = 0; i < 1; i++) {
                let tempNumber = parseInt(amountFloat[1]) % (100 * Math.pow(1000, i));
                if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                    word = word + first[Math.floor(tempNumber / Math.pow(1000, i))];
                }
                else {
                    word = word + tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] + '-' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10];
                }
            }
            word += ' Satang';
        }
        return word;
    }
}
exports.default = Utils;
//# sourceMappingURL=utils.js.map