"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LabresultsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    resultdate: Date,
    resultvalues: [{
            name: String,
            normalrange: String,
            resultvalue: String
        }]
});
//# sourceMappingURL=labresults.schema.js.map