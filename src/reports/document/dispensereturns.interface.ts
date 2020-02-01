import { Document } from 'mongoose';

export interface IDispensereturns extends Document {
    _id: String,
    statusuid: String,
    patientuid: String,
    patientvisituid: String,
    dispensereturnnumber: String,
    returndate: Date,
    itemdetails: [{
        _id: String,
        itemmasteruid: String,
        quantity: Number,
        wac: Number,
        quantityuom: String
    }];
}

