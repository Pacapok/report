"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ReportconfigurationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    documentno: String,
    reporttemplateuid: mongoose.Schema.Types.ObjectId
});
//# sourceMappingURL=reportconfigurations.schema.js.map