import * as mongoose from 'mongoose';

export const PayorsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

