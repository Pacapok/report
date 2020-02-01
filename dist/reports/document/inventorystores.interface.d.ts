import { Document } from 'mongoose';
export interface IInventorystores extends Document {
    _id: String;
    orguid: String;
    statusflag: String;
    code: String;
    name: String;
    description: String;
    departmentuid: String;
    storebins: [{
        _id: String;
        name: String;
    }];
}
