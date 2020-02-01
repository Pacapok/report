import { Document } from 'mongoose';
export interface IAppointmentschedules extends Document {
    _id: String;
    statusflag: String;
    orguid: String;
    careprovideruid: String;
    departmentuid: String;
    slots: [{
        _id: String;
        start: Date;
        patientuid: String;
    }];
}
