"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrganisationimagesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organisationphoto: String,
    organisationcode: String,
    comments: String
});
//# sourceMappingURL=organisationimages.schema.js.map