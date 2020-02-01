"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    lastname: String,
    description: String,
    printname: String,
    loginid: String,
    statusflag: String,
    orguid: { type: mongoose.Schema.Types.ObjectId, ref: 'organisations' }
});
//# sourceMappingURL=users.schema.js.map