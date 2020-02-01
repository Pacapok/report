import * as mongoose from 'mongoose';

export const DepositsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // code: String,
    // name: String,
    depositdate : Date,
    sequencenumber : String,
    orgdepositrefuid : mongoose.Schema.Types.ObjectId,
    amount :Number,
    patientuid : mongoose.Schema.Types.ObjectId,
    isadjusted : Boolean,
    isrefund : Boolean,
    iscancelled : Boolean,
    useruid : mongoose.Schema.Types.ObjectId,
    comments : String
});

