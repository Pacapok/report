import { Document } from 'mongoose';

export interface IStocktransfers extends Document {
    _id: String,
    fromstoreuid : String,
    statusflag: String,
    orguid: String,
    stocktransfernumber: String,
    tostoreuid : String,
    transferdate : Date,
    stockrequesttype : String,
    itemdetails: [{
        _id: String,
        itemmasteruid: String,
        quantity : Number,
        quantityuom : String,
        batchid : String,
        expirydate : Date,
        fromstorestockinhand : Number,
        wac : Number,
        comments : String,
        tostorestockinhand : Number
    }];
}

