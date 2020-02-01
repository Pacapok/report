import * as mongoose from 'mongoose';

export const StockdispensesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fromstoreuid: mongoose.Schema.Types.ObjectId,
    patientorderuid: mongoose.Schema.Types.ObjectId,
    dispensedate: Date,
    patientuid: mongoose.Schema.Types.ObjectId,
    itemdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        itemmasteruid: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        batchid:String
    }]
});

