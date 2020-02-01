"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrderitemsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    orguid: mongoose.Schema.Types.ObjectId,
    ordercatuid: String,
    ordersubcatuid: String
});
//# sourceMappingURL=orderitems.schema.js.map