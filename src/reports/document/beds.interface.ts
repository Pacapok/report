import { Document } from 'mongoose';

export interface IBeds extends Document {
    _id : String;
    code: String;
    name: String;
}

