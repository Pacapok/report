import * as mongoose from 'mongoose';

export const ItemmastersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    baseuomuid: String,
    orderitemuid: String,
    isnoninventoryitem: Boolean,
    productcategoryuid : String,
    stockauditgroup : String,
    reorderdetails:[{
        _id: mongoose.Schema.Types.ObjectId,
        storeuid: String,
        minstocklevel: String,
        maxstocklevel: String,
        reorderlevel: String,
        reorderquantity: String
    }]
});

