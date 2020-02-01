import * as mongoose from 'mongoose';

export const ProblemsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
	createdby: String,
	createdat: Date,
	modifiedat: Date,
	statusflag: String,
	orguid: String,
	bodysites: Array,
	aliasnames: Array,
	code: String,
	name: String,
	description: String,
	activefrom: Date,
	activeto: Date,
	isnotifiable: Boolean,
	ischapter: Boolean,
	modifiedby: String,
	parentproblemuid: String
});

