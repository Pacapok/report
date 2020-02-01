import { Document } from 'mongoose';

export interface IAllergies extends Document {
    _id : String;
    patientvisituid : String;
    // code: String;
    // name: String;
    drugallergies : [{
        allergenname : String;
    }];

}

