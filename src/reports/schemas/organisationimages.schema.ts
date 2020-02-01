import * as mongoose from 'mongoose';

export const OrganisationimagesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    organisationphoto: String,
    organisationcode: String,
    comments: String
});

