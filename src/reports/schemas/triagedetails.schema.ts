import * as mongoose from 'mongoose';

export const TriagedetailsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String
});

