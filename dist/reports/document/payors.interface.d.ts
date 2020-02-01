import { Document } from 'mongoose';
export interface IPayors extends Document {
    _id: String;
    name: String;
}
