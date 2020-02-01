import { Document } from 'mongoose';

export interface IStockdispenses extends Document {
    _id: String,
    fromstoreuid: String,
    patientorderuid: String,
    dispensedate: Date,
    patientuid: String,
    itemdetails: [{
        _id: String,
        itemmasteruid: String,
        quantity: Number,
        batchid:String
    }];
}

