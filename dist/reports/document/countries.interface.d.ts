import { Document } from 'mongoose';
export interface ICountries extends Document {
    _id: String;
    name: String;
}
