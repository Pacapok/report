import { Document } from 'mongoose';
export interface IReferencevalues extends Document {
    valuecode: String;
    valuedescription: String;
    locallanguagedesc: String;
}
