export default class Utils {
    static checkString(val: any): String;
    static checkIsNotNull(val: object): Boolean;
    static checkIsNotNullDouble(val: Number): Number;
    static replaceSpecialCharacters(val: String): string;
    static sortAsc(object: any, inside: any): Object;
    static IPDorOPD(string: any): String;
    static convertThaiBaht(amount: number): String;
    static numberToWord(number: number): string;
    static numberToWordSatang(number: number): string;
}
