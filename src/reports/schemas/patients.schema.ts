import * as mongoose from 'mongoose';

export const PatientsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patientuid: mongoose.Schema.Types.ObjectId,
    mrn: String,
    notes: String,
    titlecode: String,
    titledesciption: String,
    titleuid: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    middlename: String,
    createdat : Date,
    dateofbirth : Date,
    gendercode : String,
    nationalitydescription : String,
    nationalityuid : mongoose.Schema.Types.ObjectId,
    nationalid : String,
    address : [{
        areauid: mongoose.Schema.Types.ObjectId,
        cityuid: mongoose.Schema.Types.ObjectId,
        stateuid: mongoose.Schema.Types.ObjectId,
        countryuid: mongoose.Schema.Types.ObjectId,
        zipcodecode: String
    }],
    contact : [{
        mobilephone: String
    }]
});

