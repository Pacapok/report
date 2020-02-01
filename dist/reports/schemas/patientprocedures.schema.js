"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PatientproceduresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    procedures: [{
            _id: mongoose.Schema.Types.ObjectId,
            procedureuid: mongoose.Schema.Types.ObjectId
        }]
});
//# sourceMappingURL=patientprocedures.schema.js.map