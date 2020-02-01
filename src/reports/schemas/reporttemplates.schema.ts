import * as mongoose from 'mongoose';

export const ReporttemplatesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String
});

