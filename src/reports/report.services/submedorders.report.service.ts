import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {SUBMEDORDERReq} from '../../models/submedorderreq';
import { from } from 'rxjs';


@Injectable()
export class SUBMEDORDERReportService implements SUBMEDORDERReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

    //Referal Report
    async findSUBMEDORDER(req: SUBMEDORDERReq): Promise<any> {
        let result = [];
        try {
            const resultfindSUBMEDORDER = await this.PatientformdetailsModel.aggregate([
            {
                $match: {
                    statusflag: "A",
                    orguid: new Types.ObjectId(req.organisationuid),
                    patientformuid: new Types.ObjectId(req.searchcriteria),
                    patientuid: new Types.ObjectId(req.patientuid),
                }
            },
            {
                $lookup: {
                    from: "patientforms",
                    localField: "patientformuid",
                    foreignField: "_id",
                    as: "patientforms"
                }
            },
            {
                $unwind: { path: "$patientforms", preserveNullAndEmptyArrays: true }
            },
            {
                $match: {
                    "patientforms.statusflag": "A",
                    "patientforms.orguid": new Types.ObjectId(req.organisationuid),
                    "patientforms._id": new Types.ObjectId(req.searchcriteria),
                    "patientforms.patientuid": new Types.ObjectId(req.patientuid),
                }
            },
            //AddFileds สร้างชื่อ field ใหม่
                {
                    $addFields: {
                        MEDICINEORDERS: {
                            $filter: {
                                input: "$predefineddatas",
                                as: "vs",
                                cond: { $eq: ["$$vs.dataset", "MEDICINEORDERS"] }
                            }

                        }
                    }
                },
                { $unwind: { path: "$MEDICINEORDERS", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    patientformuid: "$patientformuid",
                    MEDICINEORDERSTB: "$MEDICINEORDERS.tabledata",
                }
            },
                { $unwind: { path: "$MEDICINEORDERSTB", preserveNullAndEmptyArrays: true } },
        ]).exec()
            result = resultfindSUBMEDORDER
        } catch (error) {
            this.logger.error('findSUBMEDORDER error:', error);
        }
        return result;
    }
}
