"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrdercategoriesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom: Date,
    activeto: Date,
    ordercattype: String,
    description: String,
    billingtype: String
});
//# sourceMappingURL=ordercategories.schema.js.map