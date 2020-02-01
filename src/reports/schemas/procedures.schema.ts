import * as mongoose from 'mongoose';

export const ProceduresSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
	createdby: String,
	createdat: Date,
	modifiedat: Date,
	statusflag: String,
	orguid: String,
	code: String,
	name: String,
	description: String,
	activefrom: Date,
	activeto: Date,
	modifiedby: String,
	__v: Number,
	locallangdesc: String,
	codingschemeuid: String,
	templates: Array,
	planningtypeuid: String,
	criticalityuid: String,
	anaesthesiauid: String,
	bodysiteuid: String,
	lateralityuid: String,
	standardduration: String
});

