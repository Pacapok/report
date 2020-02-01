import { Document } from 'mongoose';

export interface IAreas extends Document {
    _id : String;
    name: String;
}

