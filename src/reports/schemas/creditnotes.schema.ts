import * as mongoose from 'mongoose';

export const CreditnotesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sequencenumber: String
});