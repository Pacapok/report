import { Document } from 'mongoose';
export interface IDepartments extends Document {
    _id: String;
    code: String;
    name: String;
    description: String;
    departmentcode: String;
}
