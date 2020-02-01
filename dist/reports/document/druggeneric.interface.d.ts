import { Document } from 'mongoose';
export interface IDruggeneric extends Document {
    _id: String;
    description: String;
}
