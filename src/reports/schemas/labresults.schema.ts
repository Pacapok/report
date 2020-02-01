import * as mongoose from 'mongoose';

export const LabresultsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    resultdate : Date,
    resultvalues: [{
        name: String,
        normalrange : String,
        resultvalue : String
    }]
    // code: String,
    // name: String
});

