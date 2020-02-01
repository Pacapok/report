import * as mongoose from 'mongoose';

export const DrugmastersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderitemuid: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    activefrom : Date,
    activeto : Date, 
    formuid: mongoose.Schema.Types.ObjectId,
    instructionuid: mongoose.Schema.Types.ObjectId,
    defaultfrequencyuid: mongoose.Schema.Types.ObjectId,
    genericdruguid: mongoose.Schema.Types.ObjectId,
    defaultdosage : Number,
    prescibeuomuid : mongoose.Schema.Types.ObjectId,
    druggroups: [{
        
    }]
});

