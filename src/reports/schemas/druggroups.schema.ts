import * as mongoose from 'mongoose';

export const DruggroupsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

