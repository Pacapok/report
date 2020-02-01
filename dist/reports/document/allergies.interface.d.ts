import { Document } from 'mongoose';
export interface IAllergies extends Document {
    _id: String;
    patientvisituid: String;
    drugallergies: [{
        allergenname: String;
    }];
}
