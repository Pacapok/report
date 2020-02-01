import { Document } from 'mongoose';

export interface IProblems extends Document {
    code: String;
	name: String;
    description:String;
}

