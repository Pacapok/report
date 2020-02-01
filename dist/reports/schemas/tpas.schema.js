"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TpasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    code: String,
    description: String,
    arcategoryuid: mongoose.Schema.Types.ObjectId
});
//# sourceMappingURL=tpas.schema.js.map