"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TariffsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    tarifftypeuid: mongoose.Schema.Types.ObjectId,
    unitprice: Number,
    statusflag: String,
    orderitemuid: mongoose.Schema.Types.ObjectId,
    ordersetuid: mongoose.Schema.Types.ObjectId
});
//# sourceMappingURL=tariffs.schema.js.map