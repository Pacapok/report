"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.AllergiesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    drugallergies: [{
            allergenname: String
        }]
});
//# sourceMappingURL=allergies.schema.js.map