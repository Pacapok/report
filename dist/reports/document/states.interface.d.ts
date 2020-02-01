import { Document } from 'mongoose';
export interface IStates extends Document {
    _id: String;
    name: String;
}
