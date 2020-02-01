import * as mongoose from 'mongoose';

export const OrdercategoriesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    ordercattype: String,
    description : String,
    billingtype: String
});

