"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.OrganisationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organisationimageuid: { type: mongoose.Schema.Types.ObjectId, ref: 'organisationimages' },
    companyname: String
});
//# sourceMappingURL=organisations.schema.js.map