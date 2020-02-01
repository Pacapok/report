export default class DateUtils {
    static convertISOtoDatetime(date: Date): String;
    static convertUTCtoGMT(date: Date): Date;
    static convertGMTtoUTC(date: Date): Date;
    static Pkung(date: Date): Date;
    static convertISOtoDatetimeSlash(date: Date): String;
    static convertISOtoDatetimeDash(date: Date): String;
    static convertISOtoHourMin(date: Date): String;
    static setDateHourMinSecMilsecToZero(date: Date): Date;
    static convertISOtoDatetimeSlashPlusHourMin(date: Date): String;
    static convertISOtoDatetimeSlashPlusHourMinSecondsSemicolon(date: Date): String;
    static getAge(mill: number): String;
    static dateDiff(date1: any, date2: any): Number;
    static dateDiffNOW(date1: any): Number;
    static findAge(DOB: any): Number;
    static convertISOtoMonthTextUsingSpaceDatetime(date: Date): String;
    static subSTRdate(datefrom: String, dateto: String): Date;
}
