import * as mongoose from 'mongoose';

export const StockrequestsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    stockreqnumber: String,
    requestdate: Date,
    fromdeptuid:mongoose.Schema.Types.ObjectId,
    tostoreuid:mongoose.Schema.Types.ObjectId,
    comments : String,
    itemdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        itemmasteruid: mongoose.Schema.Types.ObjectId,
        quantity: Number,
        quantityuom : String
    }]
});

