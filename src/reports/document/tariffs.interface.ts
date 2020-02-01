import { Document } from 'mongoose';

export interface ITariffs extends Document {
    _id: String;
    orguid: String;
    tarifftypeuid: String;
    unitprice : Number;
    statusflag : String;
    orderitemuid:String;
    ordersetuid:String;
}

