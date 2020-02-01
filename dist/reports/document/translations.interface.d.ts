import { Document } from 'mongoose';
export interface ITranslations extends Document {
    _id: String;
    externaltablename: String;
    description: String;
    locallangdesc: String;
    name: String;
}
