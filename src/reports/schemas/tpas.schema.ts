import * as mongoose from 'mongoose';

export const TpasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    code : String,
    description : String,
    arcategoryuid : mongoose.Schema.Types.ObjectId
});

