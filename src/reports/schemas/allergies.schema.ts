import * as mongoose from 'mongoose';

export const AllergiesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientvisituid: mongoose.Schema.Types.ObjectId,
    drugallergies : [{
        allergenname : String
    }]
});

