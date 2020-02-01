import * as mongoose from 'mongoose';

export const StockadjustsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeuid : mongoose.Schema.Types.ObjectId,
    statusflag: String,
    orguid: mongoose.Schema.Types.ObjectId,
    stockadjustnumber: String,
    adjustedby: mongoose.Schema.Types.ObjectId,
    adjusteddate : Date,
    itemdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        itemmasteruid: mongoose.Schema.Types.ObjectId,
        beforequantity: Number,
        adjustquantity : Number,
        balancequantity : Number,
        quantityuom : mongoose.Schema.Types.ObjectId,
        wac : Number,
        totalcost : Number,
        comments : String
    }]
});

