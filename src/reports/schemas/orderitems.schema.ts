import * as mongoose from 'mongoose';

export const OrderitemsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    orguid: mongoose.Schema.Types.ObjectId,
    ordercatuid : String,
    ordersubcatuid : String
});

