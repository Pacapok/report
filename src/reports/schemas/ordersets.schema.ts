import * as mongoose from 'mongoose';

export const OrdersetsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    orguid: mongoose.Schema.Types.ObjectId,
    packagebilling: Boolean,
    isflexipackage: Boolean,
    orderitems: [{
        quantity: Number,
        unitprice : Number
    }]
});

