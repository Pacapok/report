import * as mongoose from 'mongoose';

export const CountriesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // code: String,
    name: String
});

