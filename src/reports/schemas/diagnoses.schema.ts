import * as mongoose from 'mongoose';

export const DiagnosesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    statusflag: String,
    orguid: mongoose.Schema.Types.ObjectId,
    diagnosis: [{
        _id: mongoose.Schema.Types.ObjectId,
        problemuid: String,
        isprimary: String,
        comments: String
    }]
});

