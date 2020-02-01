import { Document } from 'mongoose';

export interface IOrganisationimages extends Document {
    organisationphoto: String;
    organisationcode: String;
    comments: String;
}

