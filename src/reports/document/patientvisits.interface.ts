import { Document } from 'mongoose';

export interface IPatientvisits extends Document {
    _id: String;
    visitid: String;
    patientuid: String;
    startdate : Date;
    enddate : Date;
    entypeuid: String;
    orguid: String;
    medicalDischargeDate : Date;
    createdate: Date;
    visitcareproviders: [{
        CareproviderCode : String;
        careprovideruid : String;
        departmentuid : String;
    }],
    visitpayors: [{
        tpauid : String;
        payoruid :String;
    }],
    bedoccupancy: [{
		warduid: String,
        beduid: String
	}];
}

