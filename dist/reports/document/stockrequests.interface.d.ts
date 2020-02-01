import { Document } from 'mongoose';
export interface IStockrequests extends Document {
    _id: String;
    stockreqnumber: String;
    requestdate: Date;
    fromdeptuid: String;
    tostoreuid: String;
    comments: String;
    itemdetails: [{
        _id: String;
        itemmasteruid: String;
        quantity: Number;
        quantityuom: String;
    }];
}
