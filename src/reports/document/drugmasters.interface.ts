import { Document } from 'mongoose';

export interface IDrugmasters extends Document {
    _id: String,
    orderitemuid: String,
    code: String,
    name: String,
    activefrom : Date,
    activeto : Date, 
    formuid: String,
    instructionuid: String,
    defaultfrequencyuid: String,
    genericdruguid: String,
    defaultdosage : Number,
    prescibeuomuid : String,
    druggroups: [{
        
    }]
}

