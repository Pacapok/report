import { Document } from 'mongoose';

export interface IReportconfigurations extends Document {
    _id: String,
    documentno: String,
    orguid: String,
    reporttemplateuid: String,
    instructionline1: String,
    instructionline2: String,
    comments: String,
    remarks: String
}

