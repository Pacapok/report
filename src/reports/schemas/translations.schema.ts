import * as mongoose from 'mongoose';

export const TranslationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    externaltablename : String,
    description : String,
    locallangdesc : String,
    name : String
});

