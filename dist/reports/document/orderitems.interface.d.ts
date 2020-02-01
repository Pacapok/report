import { Document } from 'mongoose';
export interface IOrderitems extends Document {
    code: String;
    name: String;
    activefrom: Date;
    activeto: Date;
    orguid: String;
    ordercatuid: String;
    ordersubcatuid: String;
}
