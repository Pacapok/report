import * as mongoose from 'mongoose';
import { Double } from 'bson';

export const PatientbillsSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	patientuid: mongoose.Schema.Types.ObjectId,
	patientvisituid: mongoose.Schema.Types.ObjectId,
	orguid: mongoose.Schema.Types.ObjectId,
	billdate: Date,

	sequencenumber : String,
	totalbillamount : Number,
	patientbilleditems : [{
		billinggroupuid: mongoose.Schema.Types.ObjectId,
        billingsubgroupuid: mongoose.Schema.Types.ObjectId,
		orderitemname: String,
		quantity: Number,
		unitprice: Number,
		unitcost: Number,
		payordiscount: Number,
		netamount: Number
	}],
	tpauid: String,
	payoruid: String,
	useruid: String
	// statusflag: String
});

