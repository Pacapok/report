"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StockdispensesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fromstoreuid: mongoose.Schema.Types.ObjectId,
    patientorderuid: mongoose.Schema.Types.ObjectId,
    dispensedate: Date,
    patientuid: mongoose.Schema.Types.ObjectId,
    itemdetails: [{
            _id: mongoose.Schema.Types.ObjectId,
            itemmasteruid: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            batchid: String
        }]
});
//# sourceMappingURL=stockdispenses.schema.js.map