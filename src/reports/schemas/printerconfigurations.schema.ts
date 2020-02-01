import * as mongoose from 'mongoose';

export const PrinterconfiguraitonsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reportdetail:[{
        reporttemplateuid: String,
        printerpath: String,
        _id: mongoose.Schema.Types.ObjectId,
    }],
    devicename: String,
    locationuid: String,
    activefrom: Date,
    activeto: Date,
    modifiedby: String,
    modifiedat: Date,
    createdby: String,
    createdat: Date,
    statusflag: Boolean,
    orguid: mongoose.Schema.Types.ObjectId
});

