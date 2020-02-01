import { Document } from 'mongoose';

export interface IPatientformdetails extends Document {
    _id : String;
    orguid: String;
    patientvisituid: String;
    patientuid: String;
}

