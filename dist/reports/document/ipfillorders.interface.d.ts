import { Document } from 'mongoose';
export interface IIpfillorders extends Document {
    _id: String;
    patientvisituid: String;
    drugallergies: [{
        allergenname: String;
    }];
}
