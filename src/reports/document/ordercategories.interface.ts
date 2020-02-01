import { Document } from 'mongoose';

export interface IOrdercategories extends Document {
    code: String;
    name: String;
    ordercattype: String;
    billingtype: String;
    description : String;
}

