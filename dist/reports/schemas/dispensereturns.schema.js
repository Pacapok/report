"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.DispensereturnsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    statusuid: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    dispensereturnnumber: String,
    returndate: Date,
    itemdetails: [{
            _id: mongoose.Schema.Types.ObjectId,
            itemmasteruid: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            wac: Number,
            quantityuom: mongoose.Schema.Types.ObjectId
        }]
});
//# sourceMappingURL=dispensereturns.schema.js.map