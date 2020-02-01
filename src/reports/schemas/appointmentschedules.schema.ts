import * as mongoose from 'mongoose';

export const AppointmentschedulesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    statusflag: String,
    orguid: mongoose.Schema.Types.ObjectId,
    careprovideruid: mongoose.Schema.Types.ObjectId,
    departmentuid: mongoose.Schema.Types.ObjectId,
    slots: [{
        _id: mongoose.Schema.Types.ObjectId,
        start: Date,
        patientuid: mongoose.Schema.Types.ObjectId,

    }]
});

