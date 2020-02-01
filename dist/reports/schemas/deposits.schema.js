"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.DepositsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    depositdate: Date,
    sequencenumber: String,
    orgdepositrefuid: mongoose.Schema.Types.ObjectId,
    amount: Number,
    patientuid: mongoose.Schema.Types.ObjectId,
    isadjusted: Boolean,
    isrefund: Boolean,
    iscancelled: Boolean,
    useruid: mongoose.Schema.Types.ObjectId,
    comments: String
});
//# sourceMappingURL=deposits.schema.js.map