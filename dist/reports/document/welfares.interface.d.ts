import { Document } from 'mongoose';
export interface IWelfares extends Document {
    _id: String;
    businessunitempid: String;
    nationalid: String;
    status: String;
    departmentcodefull: String;
    relationship: String;
    firstname: String;
    lastname: String;
    dateofbirth: Date;
    worktype: String;
    plancode: String;
    passportnumber: String;
    gender: String;
}
