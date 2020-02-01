import * as mongoose from 'mongoose';

export const PatientproceduresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    procedures: [{
        _id: mongoose.Schema.Types.ObjectId,
        procedureuid: mongoose.Schema.Types.ObjectId
    }]
});