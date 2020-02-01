"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ItemmastersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    baseuomuid: String,
    orderitemuid: String,
    isnoninventoryitem: Boolean,
    productcategoryuid: String,
    stockauditgroup: String,
    reorderdetails: [{
            _id: mongoose.Schema.Types.ObjectId,
            storeuid: String,
            minstocklevel: String,
            maxstocklevel: String,
            reorderlevel: String,
            reorderquantity: String
        }]
});
//# sourceMappingURL=itemmasters.schema.js.map