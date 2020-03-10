import * as mongoose from 'mongoose';

export const DeathrecordsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    description: String,
    departmentcode: String
});

