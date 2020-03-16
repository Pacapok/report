import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import { SUBRADIOLOGYRESULTSReq } from '../../models/subradiologyresultsreq';
import { from } from 'rxjs';


@Injectable()
export class SUBRADIOLOGYRESULTSReportService implements SUBRADIOLOGYRESULTSReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

    //Referal Report
    async findSUBRADIOLOGYRESULTS(req: SUBRADIOLOGYRESULTSReq): Promise<any> {
        let result = [];
        try {
            const resultfindSUBRADIOLOGYRESULTS = await this.PatientformdetailsModel.aggregate([
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
                        RADIOLOGYRESULTS: {
                            $filter: {
                                input: "$predefineddatas",
                                as: "vs",
                                cond: { $eq: ["$$vs.dataset", "RADIOLOGYRESULTS"] }
                            }

                        }
                    }
                },
                { $unwind: { path: "$RADIOLOGYRESULTS", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    patientformuid: "$patientformuid",
                    RADIOLOGYRESULTSTB: "$RADIOLOGYRESULTS.tabledata",
                }
            },
                { $unwind: { path: "$RADIOLOGYRESULTSTB", preserveNullAndEmptyArrays: true } },
        ]).exec()
            result = resultfindSUBRADIOLOGYRESULTS
        } catch (error) {
            this.logger.error('findSUBRADIOLOGYRESULTS error:', error);
        }
        return result;
    }
}
