import { Document } from 'mongoose';
import { Double } from 'bson';

export interface IPatientbills extends Document {
    _id: String;
    patientuid: String;
    orguid: String;
    patientvisituid: String;
    billdate: Date;
    
    sequencenumber : String;
    totalbillamount : Number;
    patientbilleditems: [{
        orderitemname: String;
        quantity: Number;
        unitprice: Number;
        unitcost: Number;
        payordiscount: Number;
        netamount: Number;
        billinggroupuid: String;
        billingsubgroupuid: String;
    }];
    tpauid: String;
	payoruid: String;
	useruid: String;
}

