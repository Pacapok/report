import * as mongoose from 'mongoose';

export const OrganisationsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organisationimageuid: {type: mongoose.Schema.Types.ObjectId, ref: 'organisationimages' },
    companyname: String
});

