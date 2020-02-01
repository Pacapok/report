import { Document } from 'mongoose';
export interface IDiagnoses extends Document {
    _id: String;
    patientvisituid: String;
    patientuid: String;
    statusflag: String;
    orguid: String;
    diagnosis: [{
        problemuid: string;
    }];
}
