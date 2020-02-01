"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StockrequestsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    stockreqnumber: String,
    requestdate: Date,
    fromdeptuid: mongoose.Schema.Types.ObjectId,
    tostoreuid: mongoose.Schema.Types.ObjectId,
    comments: String,
    itemdetails: [{
            _id: mongoose.Schema.Types.ObjectId,
            itemmasteruid: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            quantityuom: String
        }]
});
//# sourceMappingURL=stockrequests.schema.js.map