import { IPatientvisits } from '../document/patientvisits.interface';
import { IPatientprocedures } from '../document/patientprocedures.interface';
import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { ObjectID } from 'bson';
import { STATCODERICD9Req } from '../../models/statcodericd9req';
import { from } from 'rxjs';


@Injectable()
export class STATCODERICD9IPDReportService implements STATCODERICD9IPDReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientprocedures') private readonly PatientproceduresModel: Model<IPatientprocedures>,        
    ) { }

    async findSTATCODERICD9IPD(req: STATCODERICD9Req): Promise<any> {
        let result = [];
        try {
            const resultfindSTATCODERICD9IPD = await this.PatientproceduresModel.aggregate([
                {
                    $match: {
                        orguid: 
                            new Types.ObjectId(req.organisationuid),
                        // new Types.ObjectId("5b20f438d1202e29ce16f712"),
                            statusflag: "A",
                        "codedprocedures.procedurecode": { $exists: true, $ne: [] }
                    }
                },
                {
                    $lookup: {
                        from: "departments",
                        localField: "departmentuid",
                        foreignField: "_id",
                        as: "icd9depts"
                    }
                },
                {
                    $unwind: { path: "$icd9depts", preserveNullAndEmptyArrays: true }
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
                        from: "referencevalues",
                        localField: "patients.titleuid",
                        foreignField: "_id",
                        as: "titles"
                    }
                },
                {
                    $unwind: { path: "$titles", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup: {
                        from: "referencevalues",
                        localField: "patients.localnametitleuid",
                        foreignField: "_id",
                        as: "localnametitles"
                    }
                },
                {
                    $unwind: { path: "$localnametitles", preserveNullAndEmptyArrays: true }
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
                        "patientvisits.statusflag": "A",
                        "patientvisits.startdate": {
                            // $gte: new Date("2020-01-31T17:00:00.000Z"),
                            // $lte: new Date("2020-02-11T16:59:59.999Z")
                            $gte: new Date(req.fromdate), $lte: new Date(req.todate)
                        },
                        //"patientvisits.visitid": "I65-20-000485"
                        'patientvisits.visitid': { $regex: /^I/ }
                    }
                },
                {
                    $lookup: {
                        from: "patientbills",
                        localField: "patientvisituid",
                        foreignField: "patientvisituid",
                        as: "patientbills"
                    }
                },
                {
                    $unwind: { path: "$patientbills", preserveNullAndEmptyArrays: true }
                },
                {
                    $addFields: {
                        REICD9: "$codedprocedures"
                    }
                },
                {
                    $unwind: "$REICD9"

                },
                {
                    $project: {
                        HN: "$patients.mrn",
                        EN: "$patientvisits.visitid",
                        PTTITLE: "$titles.valuedescription",
                        PTFIRSTNAME: "$patients.firstname",
                        PTMIDDLENAME: "$patients.middlename",
                        PTLASTNAME: "$patients.lastname",
                        PTLOCALTITLE: "$localtitle.valuedescription",
                        PTLOCALFIRSTNAME: "$patients.localfirstname",
                        PTLOCALMIDDLENAME: "$patients.localmiddlename",
                        PTLOCALLASTNAME: "$patients.locallastname",
                        ICD9DEPT: "$icd9depts.name",
                        REICD9CODE: "$REICD9.procedurecode",
                        REICD9NAME: "$REICD9.procedurename",
                        TOTALBILLS: "$patientbills.totalbillamount",
                        formDate: 
                        { $dateToString: { format: "%d", date: new Date(req.fromdate), timezone: "+07:00", onNull: "-" } },
                        formMonth:
                            { $dateToString: { format: "%m", date: new Date(req.fromdate), timezone: "+07:00", onNull: "-" } },
                        formYear:
                        { $dateToString: { format: "%Y", date: new Date(req.fromdate), timezone: "+07:00", onNull: "-" } },
                        toDate:
                            { $dateToString: { format: "%d", date: new Date(req.todate), timezone: "+07:00", onNull: "-" } },
                        toMonth:
                            { $dateToString: { format: "%m", date: new Date(req.todate), timezone: "+07:00", onNull: "-" } },
                        toYear:
                            { $dateToString: { format: "%Y", date: new Date(req.todate), timezone: "+07:00", onNull: "-" } },
                    }
                },
                {
                    $group: {
                        _id: {
                            formDate: "$formDate",
                            formMonth: "$formMonth",
                            formYear: "$formYear",
                            toDate: "$toDate",
                            toMonth: "$toMonth",
                            toYear: "$toYear",
                            HN: "$HN",
                            EN: "$EN",
                            PTTITLE: "$PTTITLE",
                            PTFIRSTNAME: "$PTFIRSTNAME",
                            PTMIDDLENAME: "$PTMIDDLENAME",
                            PTLASTNAME: "$PTLASTNAME",
                            PTLOCALTITLE: "$PTLOCALTITLE",
                            PTLOCALFIRSTNAME: "$PTLOCALFIRSTNAME",
                            PTLOCALMIDDLENAME: "$PTLOCALMIDDLENAME",
                            PTLOCALLASTNAME: "$PTLOCALLASTNAME",
                            ICD9DEPT: "$ICD9DEPT",
                            REICD9CODE: "$REICD9CODE",
                            REICD9NAME: "$REICD9NAME",
                            record: { $toInt: 1 }
                        },
                        TOTALBILLS: { $sum: "$TOTALBILLS" },
                    }
                },
                {
                    $project: {
                        formDate: "$_id.formDate",
                        formMonth: "$_id.formMonth",
                        formYear: "$_id.formYear",
                        toDate: "$_id.toDate",
                        toMonth: "$_id.toMonth",
                        toYear: "$_id.toYear",
                        HN: "$_id.HN",
                        EN: "$_id.EN",
                        PTTITLE: "$_id.PTTITLE",
                        PTFIRSTNAME: "$_id.PTFIRSTNAME",
                        PTMIDDLENAME: "$_id.PTMIDDLENAME",
                        PTLASTNAME: "$_id.PTLASTNAME",
                        PTLOCALTITLE: "$_id.PTLOCALTITLE",
                        PTLOCALFIRSTNAME: "$_id.PTLOCALFIRSTNAME",
                        PTLOCALMIDDLENAME: "$_id.PTLOCALMIDDLENAME",
                        PTLOCALLASTNAME: "$_id.PTLOCALLASTNAME",
                        ICD9DEPT: "$_id.ICD9DEPT",
                        REICD9CODE: "$_id.REICD9CODE",
                        REICD9NAME: "$_id.REICD9NAME",
                        TOTALBILLS: "$TOTALBILLS",
                        records: { $toInt: "$_id.record" },
                    }
                },
                {
                    $group: {
                        _id: {
                            formDate: "$formDate",
                            formMonth: "$formMonth",
                            formYear: "$formYear",
                            toDate: "$toDate",
                            toMonth: "$toMonth",
                            toYear: "$toYear",
                            ICD9DEPT: "$ICD9DEPT",
                            REICD9CODE: "$REICD9CODE",
                            REICD9NAME: "$REICD9NAME",
                        },
                        records: { $sum: "$records" },
                        TOTALBILLS1: { $sum: "$TOTALBILLS" },
                    }
                },
                {
                    $sort: { "_id.ICD9DEPT": 1, "records": -1,"TOTALBILLS1":-1 }
                }
        ]).exec()
            result = resultfindSTATCODERICD9IPD
        } catch (error) {
            this.logger.error('findSTATCODERICD9IPD error:', error);
        }
        return result;
    }
}
