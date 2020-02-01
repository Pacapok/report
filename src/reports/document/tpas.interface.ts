import { Document } from 'mongoose';

export interface ITpas extends Document {
    _id : String;
    name: String;
    description : String;
    code : String;
    arcategoryuid : String;
}

