import { Document } from 'mongoose';

export interface IWards extends Document {
    _id : String;
    code: String;
    name: String;
}

