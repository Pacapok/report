import * as mongoose from 'mongoose';

export const ReferencevaluesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    valuecode: String,
    valuedescription: String,
    activefrom: Date,
    domaincode: String,
    locallanguagedesc: String
});

