import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    lastname: String,
    description: String,
    printname: String,
    loginid: String,
    statusflag: String,
    orguid: {type: mongoose.Schema.Types.ObjectId, ref: 'organisations' }
});

