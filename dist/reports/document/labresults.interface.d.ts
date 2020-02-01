import { Document } from 'mongoose';
export interface ILabresults extends Document {
    _id: String;
    patientuid: String;
    patientvisituid: String;
    resultdate: Date;
    resultvalues: [{
        name: String;
        normalrange: String;
        resultvalue: String;
    }];
}
