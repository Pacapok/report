"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ReferencevaluesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    valuecode: String,
    valuedescription: String,
    activefrom: Date,
    domaincode: String,
    locallanguagedesc: String
});
//# sourceMappingURL=referencevalues.schema.js.map