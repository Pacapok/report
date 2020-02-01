import { Document } from 'mongoose';
export interface IGoodsreceives extends Document {
    _id: String;
    grnnumber: String;
    grntypeuid: String;
    statusflag: String;
    orguid: String;
    itemdetails: [{
        _id: String;
        itemmasteruid: String;
        quantityuom: String;
        quantity: Number;
        wac: Number;
        batchid: String;
        expirydate: Date;
    }];
}
