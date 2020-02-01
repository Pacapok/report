import * as mongoose from 'mongoose';

export const StockledgersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeuid: mongoose.Schema.Types.ObjectId,
    itemmasteruid: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    quantityuom: mongoose.Schema.Types.ObjectId,
    ledgerdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        wac:Number,
        vendoruid:mongoose.Schema.Types.ObjectId,
        patientuid:mongoose.Schema.Types.ObjectId
    }]
});

