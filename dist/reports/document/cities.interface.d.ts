import { Document } from 'mongoose';
export interface ICities extends Document {
    _id: String;
    name: String;
}
