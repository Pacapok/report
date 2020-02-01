import { Document } from 'mongoose';

export interface IPatientorders extends Document {
    _id: String;
    orguid: String;
    patientuid: String;
    patientvisituid : String;
    ordertodepartmentuid : String;
    orderdate : Date;
    orderdepartmentuid: String;
    ordernumber : String;
    ordercattype : String;
    statusflag : String;
    createdat : Date;
    orderinguseruid : String;
    patientorderitems: [{
        orderitemuid : String,
        orderitemname : String,
        ordercatuid: String,
        ordersubcatuid : String,
        payordiscount : Number,
        chargecode : String,
        startdate : Date,
        statusuid : String,
        enddate : Date,
        quantity : Number,
        unitprice : Number,
        totalprice : Number
    }];
}

