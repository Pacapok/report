"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TranslationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    externaltablename: String,
    description: String,
    locallangdesc: String,
    name: String
});
//# sourceMappingURL=translations.schema.js.map