import { Document } from 'mongoose';

export interface IOrdersets extends Document {
    _id: String,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    orguid: String,
    packagebilling: Boolean,
    isflexipackage: Boolean,
    orderitems: [{
        quantity: Number,
        unitprice : Number
    }]
}

