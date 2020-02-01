import { Document } from 'mongoose';
export interface IStockadjusts extends Document {
    _id: String;
    storeuid: String;
    statusflag: String;
    orguid: String;
    stockadjustnumber: String;
    adjustedby: String;
    adjusteddate: Date;
    itemdetails: [{
        _id: String;
        itemmasteruid: String;
        beforequantity: Number;
        adjustquantity: Number;
        balancequantity: Number;
        quantityuom: String;
        wac: Number;
        totalcost: Number;
        comments: String;
    }];
}
