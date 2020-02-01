import * as mongoose from 'mongoose';

export const GoodsreceivesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    grnnumber: String,
    grntypeuid : mongoose.Schema.Types.ObjectId,
    statusflag: String,
    orguid: mongoose.Schema.Types.ObjectId,
    itemdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        itemmasteruid: mongoose.Schema.Types.ObjectId,
        quantityuom: mongoose.Schema.Types.ObjectId,
        quantity : Number,
        wac : Number,
        batchid : String,
        expirydate : Date
    }]
});

