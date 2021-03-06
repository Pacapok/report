import * as mongoose from 'mongoose';

export const StocktransfersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fromstoreuid : mongoose.Schema.Types.ObjectId,
    statusflag: String,
    orguid: mongoose.Schema.Types.ObjectId,
    stocktransfernumber: String,
    tostoreuid : mongoose.Schema.Types.ObjectId,
    transferdate : Date,
    stockrequesttype : String,
    itemdetails: [{
        _id: mongoose.Schema.Types.ObjectId,
        itemmasteruid: mongoose.Schema.Types.ObjectId,
        quantity : Number,
        quantityuom : mongoose.Schema.Types.ObjectId,
        batchid : String,
        expirydate : Date,
        fromstorestockinhand : Number,
        wac : Number,
        comments : String,
        tostorestockinhand : Number
    }]
});

