import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { ITriagedetails } from '../document/triagedetails.interface';
import { ObjectID } from 'bson';
import { STATTRAUMAReq } from '../../models/stattraumareq';
import { from } from 'rxjs';


@Injectable()
export class STATTRAUMAReportService implements STATTRAUMAReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('triagedetails') private readonly TriagedetailsModel: Model<ITriagedetails>,        
    ) { }

    //Referal Report
    async findSTATTRAUMA(req: STATTRAUMAReq): Promise<any> {
        let result = [];
        try {
            const resultfindSTATTRAUMA = await this.TriagedetailsModel.aggregate([
            {
                $match: {
                    statusflag: "A",
                    orguid: new Types.ObjectId(req.organisationuid),
                }
            },
                {
                    $lookup: {
                        from: "organisations",
                        localField: "orguid",
                        foreignField: "_id",
                        as: "organisations"
                    }
                },
                {
                    $unwind: { path: "$organisations", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "patients",
                        localField: "patientuid",
                        foreignField: "_id",
                        as: "patients"
                    }
                },
                {
                    $unwind: { path: "$patients", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "patientvisits",
                        localField: "patientvisituid",
                        foreignField: "_id",
                        as: "patientvisits"
                    }
                },
                {
                    $unwind: { path: "$patientvisits", preserveNullAndEmptyArrays: true }
                },
                {
                    $match: {
                        "patientvisits.startdate": { 
                        $gte: DateUtils.convertGMTtoUTC(new Date(req.fromdate)),
                        $lte: DateUtils.convertGMTtoUTC(new Date(req.todate))
                            // $gte: new Date(req.fromdate), $lte: new Date(req.todate)
                        }
                    }
                },
                {
                    $lookup: {
                        from: "wards",
                        localField: "patientvisits.bedoccupancy.warduid",
                        foreignField: "_id",
                        as: "wards"
                    }
                },
                {
                    $unwind: { path: "$wards", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "beds",
                        localField: "patientvisits.bedoccupancy.beduid",
                        foreignField: "_id",
                        as: "beds"
                    }
                },
                {
                    $unwind: { path: "$beds", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "patientvisits.visitstatusuid",
                        foreignField: "_id",
                        as: "status"
                    }
                },
                {
                    $unwind: { path: "$status", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "departments",
                        localField: "departmentuid",
                        foreignField: "_id",
                        as: "triagedepartments"
                    }
                },
                {
                    $unwind: { path: "$triagedepartments", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "cchpis",
                        localField: "cchpiuid",
                        foreignField: "_id",
                        as: "cchpis"
                    }
                },
                {
                    $unwind: { path: "$cchpis", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "triagedby",
                        foreignField: "_id",
                        as: "triageusers"
                    }
                },
                {
                    $unwind: { path: "$triageusers", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "conciousnessuid",
                        foreignField: "_id",
                        as: "conciousness"
                    }
                },
                {
                    $unwind: { path: "$conciousness", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "emergencyleveluid",
                        foreignField: "_id",
                        as: "emergencylevel"
                    }
                },
                {
                    $unwind: { path: "$emergencylevel", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "gcseyemovementuid",
                        foreignField: "_id",
                        as: "gcseyemovement"
                    }
                },
                {
                    $unwind: { path: "$gcseyemovement", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "gcsmotoruid",
                        foreignField: "_id",
                        as: "gcsmotor"
                    }
                },
                {
                    $unwind: { path: "$gcsmotor", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "gcsverbaluid",
                        foreignField: "_id",
                        as: "gcsverbal"
                    }
                },
                {
                    $unwind: { path: "$gcsverbal", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "traumatypeuid",
                        foreignField: "_id",
                        as: "traumatype"
                    }
                },
                {
                    $unwind: { path: "$traumatype", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "diagnoses",
                        localField: "patientvisituid",
                        foreignField: "patientvisituid",
                        as: "diagnoses"
                    }
                },
                {
                    $unwind: { path: "$diagnoses", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "problems",
                        localField: "diagnoses.diagnosis.problemuid",
                        foreignField: "_id",
                        as: "problems"
                    }
                },
                {
                    $unwind: { path: "$problems", preserveNullAndEmptyArrays: true }
                },
                //-------
                {
                    $group: {
                        _id: { patientvisituid: "$patientvisituid" },
                        HN: { "$push": "$patients.mrn" },
                        EN: { "$push": "$patientvisits.visitid" },
                        isAdmit: { "$push": "$patientvisits.isconvertedfromopd" },
                        WARD: { "$push": "$wards.name" },
                        BED: { "$push": "$beds.name" },
                        STATUS: { "$push": "$status.valuedescription" },
                        visitDate: {
                            "$push":
                            {
                                "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$patientvisits.startdate", timezone: "+07:00" }
                            }
                        },
                        triageDept: { "$push": "$triagedepartments.name" },
                        CCHPI: { "$push": "$cchpis" },
                        triageby: { "$push": "$triageusers.name" },
                        conciousness: { "$push": "$conciousness.valuedescription" },
                        ESI: { "$push": "$emergencylevel.valuedescription" },
                        gcseyemovement: { "$push": "$gcseyemovement.valuedescription" },
                        gcsmotor: { "$push": "$gcsmotor.valuedescription" },
                        gcsverbal: { "$push": "$gcsverbal.valuedescription" },
                        traumatype: { "$push": "$traumatype.valuedescription" },
                        ICD10CODE: { "$push": "$problems.code" },
                        ICD10NAME: { "$push": "$problems.name" }
                    }
                },
                //-------    
                {
                    $project: {
                        HN: { $arrayElemAt: ["$HN", -1] },
                        EN: { $arrayElemAt: ["$EN", -1] },
                        isAdmit: { $arrayElemAt: ["$isAdmit", -1] },
                        WARD: { $arrayElemAt: ["$WARD", -1] },
                        BED: { $arrayElemAt: ["$BED", -1] },
                        STATUS: { $arrayElemAt: ["$STATUS", -1] },
                        visitDate: { $arrayElemAt: ["$visitDate", -1] },
                        triageDept: { $arrayElemAt: ["$triageDept", -1] },
                        CCHPI: { $arrayElemAt: ["$CCHPI", -1] },
                        triageby: { $arrayElemAt: ["$triageby", -1] },
                        conciousness: { $arrayElemAt: ["$conciousness", -1] },
                        ESI: { $arrayElemAt: ["$ESI", -1] },
                        gcseyemovement: { $arrayElemAt: ["$gcseyemovement", -1] },
                        gcsmotor: { $arrayElemAt: ["$gcsmotor", -1] },
                        gcsverbal: { $arrayElemAt: ["$gcsverbal", -1] },
                        traumatype: { $arrayElemAt: ["$traumatype", -1] },
                        ICD10CODE: { $arrayElemAt: ["$ICD10CODE", -1] },
                        ICD10NAME: { $arrayElemAt: ["$ICD10NAME", -1] }
                    }
                }
        ]).exec()
            result = resultfindSTATTRAUMA
        } catch (error) {
            this.logger.error('findSTATTRAUMA error:', error);
        }
        return result;
    }
}
