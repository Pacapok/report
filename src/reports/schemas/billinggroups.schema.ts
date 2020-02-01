import * as mongoose from 'mongoose';

export const BillinggroupsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: String
    // name: String
});

