import * as mongoose from 'mongoose';

export const MrdcodingsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // code: String,
    name: String
});

