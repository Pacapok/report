import { Document } from 'mongoose';
export interface IDeposits extends Document {
    _id: String;
    depositdate: Date;
    sequencenumber: String;
    orgdepositrefuid: String;
    amount: Number;
    patientuid: String;
    isadjusted: Boolean;
    isrefund: Boolean;
    iscancelled: Boolean;
    useruid: String;
    comments: String;
    diagnosis: [{
        _id: String;
        problemuid: String;
        isprimary: String;
        comments: String;
    }];
}
