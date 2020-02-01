import { Document } from 'mongoose';

export interface IPatientprocedures extends Document {
    _id: String;
    patientuid: String;
    patientvisituid: String;
    orguid: String;
    procedures: [{
        procedureuid: string
    }];
}

