import { Document } from 'mongoose';

export interface IUsers extends Document {
    code: String;
    name: String;
    lastname: String;
    description: String;
    printname: String;
    loginid: String;
    statusflag: String;
    orguid: String;
}

