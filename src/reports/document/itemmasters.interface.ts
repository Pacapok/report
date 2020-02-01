import { Document } from 'mongoose';

export interface IItemmasters extends Document {
    code: String;
    name: String;
    baseuomuid: String;
    orderitemuid : String;
    productcategoryuid : String;
    stockauditgroup : String;
    isnoninventoryitem : Boolean;
    reorderdetails:[{
        minstocklevel: String,
        maxstocklevel: String,
        reorderlevel: String,
        reorderquantity: String,
        storeuid: String
    }]
}

