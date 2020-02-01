import { Document } from 'mongoose';

export interface IStockledgers extends Document {
    _id: String,
    storeuid: String,
    itemmasteruid: String,
    quantity: Number,
    quantityuom: String,
    ledgerdetails: [{
        _id: String,
        quantity: Number,
        wac:Number,
        vendoruid:String,
        patientuid:String
    }]
}

