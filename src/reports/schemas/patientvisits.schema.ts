import * as mongoose from 'mongoose';

export const PatientvisitsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
	createdby: String,
	createdat: Date,
	modifiedat: Date,
	statusflag: String,
	orguid: mongoose.Schema.Types.ObjectId,
	visitcareproviders: [{
		careprovideruid : String,
		departmentuid : String,
		CareproviderCode : String
	}],
	visitpayors : [{
		tpauid : String,
		payoruid : String
	}],
	entypeuid: String,
	encounterTypecode: String,
	startdate : Date,
	enddate : Date,
	ismedicolegalcase: Boolean,
	ORG: String,
	Tablename: String,
	externaluid: Number,
	visitid: String,
	patientuid: String,
	bedoccupancy: [{
		warduid: String,
        beduid: String
	}],
	medicalDischargeDate : Date
});

