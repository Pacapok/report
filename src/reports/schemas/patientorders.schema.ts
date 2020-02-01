import * as mongoose from 'mongoose';

export const PatientordersSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	orguid:  mongoose.Schema.Types.ObjectId,
	patientuid: mongoose.Schema.Types.ObjectId,
	patientvisituid : mongoose.Schema.Types.ObjectId,
	ordertodepartmentuid : mongoose.Schema.Types.ObjectId,
	orderdate : Date,
	orderdepartmentuid: String,
	ordernumber : String,
	ordercattype : String,
	statusflag : String,
	createdat : Date,
	orderinguseruid : mongoose.Schema.Types.ObjectId,
	patientorderitems: [{
		orderitemuid : mongoose.Schema.Types.ObjectId,
		ordersubcatuid : mongoose.Schema.Types.ObjectId,
		ordercatuid: mongoose.Schema.Types.ObjectId,
		orderitemname : String,
		payordiscount : Number,
		chargecode : String,
		statusuid : String,
		startdate : Date,
		enddate : Date,
		quantity : Number,
        unitprice : Number,
        totalprice : Number
	}]
});

