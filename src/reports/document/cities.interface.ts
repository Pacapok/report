import { Document } from 'mongoose';

export interface ICities extends Document {
    _id : String;
    // code: String;
    name: String;
}

