"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.AppointmentschedulesSchema = new mongoose.Schema({
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
//# sourceMappingURL=appointmentschedules.schema.js.map