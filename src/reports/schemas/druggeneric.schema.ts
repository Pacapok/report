import * as mongoose from 'mongoose';

export const DruggenericSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description : String
});

