"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.WelfaresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    businessunitempid: String,
    nationalid: String,
    status: String,
    departmentcodefull: String,
    relationship: String,
    firstname: String,
    lastname: String,
    dateofbirth: Date,
    worktype: String,
    plancode: String,
    passportnumber: String,
    gender: String
});
//# sourceMappingURL=welfares.schema.js.map