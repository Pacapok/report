import * as mongoose from 'mongoose';

export const ReportconfigurationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orguid: mongoose.Schema.Types.ObjectId,
    documentno: String,
    reporttemplateuid: mongoose.Schema.Types.ObjectId
});

