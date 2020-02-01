"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.InventorystoresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    statusflag: String,
    code: String,
    name: String,
    description: String,
    departmentuid: String,
    storebins: [{
            _id: mongoose.Schema.Types.ObjectId,
            name: String
        }]
});
//# sourceMappingURL=inventorystores.schema.js.map