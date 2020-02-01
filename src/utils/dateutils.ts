export default class DateUtils {

    static convertISOtoDatetime(date: Date): String {
        if (!date) {
            return null;
        }
        //let date = new Date('2013-08-03T02:00:00Z');
        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let dt: any = date.getDate();
        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        result = year + '-' + month + '-' + dt;

        return result;
    }

    static convertUTCtoGMT(date: Date): Date {
        console.log('convertUTCtoGMT before=>',date);
        if (!date) {
            return null;
        }
        date.setHours(date.getHours() + 7);
        console.log('convertUTCtoGMT before=>',date);
        return date;
    }

    static convertGMTtoUTC(date: Date): Date {
        console.log('convertGMTtoUTC before=>',date);
        if (!date) {
            return null;
        }
        //date.setHours(date.getHours() - 7);
        date.setHours(date.getHours());
        console.log('convertGMTtoUTC after=>',date);
        return date;
    }

    static Pkung(date: Date): Date {
        console.log('convertGMTtoUTC before=>',date);
        if (!date) {
            return null;
        }
        //date.setHours(date.getHours() - 7);
        date.setHours(date.getHours()-date.getHours());
        date.setMinutes(date.getMinutes()-date.getMinutes());
        date.setSeconds(date.getSeconds()-date.getSeconds());
        date.setMilliseconds(date.getMilliseconds()-date.getMilliseconds());
        console.log('ChangTime 0 to P kung=>',date);
        return date;
    }

    static convertISOtoDatetimeSlash(date: Date): String {
        if (!date) {
            return null;
        }
        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let dt: any = date.getDate();
        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        result = dt + '/' + month + '/' + year;

        return result;
    }
    static convertISOtoDatetimeDash(date: Date): String {
        if (!date) {
            return null;
        }
        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let dt: any = date.getDate();
        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        result = year + '-' + month + '-' + dt;

        return result;
    }

    static convertISOtoHourMin(date: Date): String {
        if (!date) {
            return null;
        }
        let hour: any = date.getUTCHours();
        let min: any = date.getUTCMinutes();
        let result = '';
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (min < 10) {
            min = '0' + min;
        }
        result = +hour+':'+min;

        return result;
    }

    static setDateHourMinSecMilsecToZero(date: Date): Date {
        if (!date) {
            return null;
        }
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        // date.setDate(1);
        let newDate = new Date(date);
        return newDate;
    }

    static convertISOtoDatetimeSlashPlusHourMin(date: Date): String {
        if (!date) {
            return null;
        }
        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let dt: any = date.getDate();
        let hour: any = date.getUTCHours();
        let min: any = date.getUTCMinutes();
        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (min < 10) {
            min = '0' + min;
        }
        result = dt + '/' + month + '/' + year+ ' '+hour+':'+min;

        return result;
    }

    static convertISOtoDatetimeSlashPlusHourMinSecondsSemicolon(date: Date): String {
        if (!date) {
            return null;
        }
        let year = date.getFullYear();
        let month: any = date.getMonth() + 1;
        let dt: any = date.getDate();
        let hour: any = date.getUTCHours();
        let min: any = date.getUTCMinutes();
        let sec: any = date.getUTCSeconds();
        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        result = dt + '/' + month + '/' + year+ ' '+hour+':'+min+':'+sec;

        return result;
    }
    static getAge(mill: number): String {
        if (!mill) {
            return null;
        }
        console.log(mill)

        let year = Math.floor(mill/86400000/365);
        let month = Math.floor((mill%86400000%365)/30);
        let date = mill = (mill%86400000)%30;
        console.log(year)

        return year + 'Y' + month + 'M' + date + 'D';
    }


    static dateDiff(date1, date2): Number {
        if (!date1 && !date2) {
            return 0;
        }
        var diff = Math.abs(date1.getTime() - date2.getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
    }

    static dateDiffNOW(date1): Number {
        if (!date1 && !Date.now()) {
            return 0;
        }

        var diff = Math.abs(Date.now() - date1.getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
    }

    static findAge(DOB): Number {
        var agedif = Date.now() - DOB.getTime();
        var ageDate = new Date(agedif);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    static convertISOtoMonthTextUsingSpaceDatetime(date : Date): String {
        if (!date) {
            return null;
        }

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = monthNames[date.getMonth()];
        let year = date.getFullYear();
        let dt: any = date.getDate();

        let result = '';
        if (dt < 10) {
            dt = '0' + dt;
        }

        result = dt + ' ' + month + ' ' + year;

        return result;
    }
    
    static subSTRdate(datefrom : String,dateto : String ): Date {
        if (!datefrom && dateto) {
            return null;
        }
        let Ddate : any;
        let result = '';
        let from = datefrom.substring(0,10)
        let to  = dateto.substring(10,30)
        result = from+to
        Ddate = Date.parse(result)
        return Ddate;
    }

    
}