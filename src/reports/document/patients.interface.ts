import { Document } from 'mongoose';

export interface IPatients extends Document {
    _id: String,
    patientuid: String,
    mrn: String,
    notes: String,
    titlecode: String,
    titledesciption: String,
    titleuid: String,
    firstname: String,
    lastname: String,
    middlename: String,
    createdat : Date,
    dateofbirth : Date,
    gendercode : String,
    nationalitydescription : String,
    nationalityuid : String,
    nationalid : String,
    address : [{
        areauid: String,
        cityuid: String,
        stateuid: String,
        countryuid: String,
        zipcodecode: String
    }],
    contact : [{
        mobilephone: String
    }]
}

