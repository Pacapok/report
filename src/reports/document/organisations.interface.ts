import { Document } from 'mongoose';

export interface IOrganisations extends Document {
    organisationimageuid: String;
    companyname: String;
}

