import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientvisits } from '../document/patientvisits.interface';
import { STATMRDFolderLastVisitReq } from '../../models/statmrdfolderlastvisits';
import { ObjectID } from 'bson';
import { from } from 'rxjs';


@Injectable()
export class STATMRDFolderLastVisitReportService implements STATMRDFolderLastVisitReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientvisits') private readonly PatientvisitsModel: Model<IPatientvisits>,        
    ) { }

    //Referal Report
    async findSTATMRDFolderLastVisit(req: STATMRDFolderLastVisitReq): Promise<any> {
        let result = [];
        try {
            const resultfindSTATMRDFolderLastVisit = await this.PatientvisitsModel.aggregate([
                {
                    $match: {
                        statusflag: "A",
                        orguid: new Types.ObjectId(req.organisationuid)
                    }
                },
                {
                    $lookup:
                    {
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
                    $match: {
                        "patients.statusflag": "A"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mrdfolders",
                        localField: "patients._id",
                        foreignField: "patientuid",
                        as: "mrdfolders"
                    }
                },
                {
                    $unwind: { path: "$mrdfolders", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup:
                    {
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
                    $lookup:
                    {
                        from: "referencevalues",
                        localField: "patients.localnametitleuid",
                        foreignField: "_id",
                        as: "titlesTH"
                    }
                },
                {
                    $unwind: { path: "$titlesTH", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup:
                    {
                        from: "referencevalues",
                        localField: "mrdfolders.foldertypeuid",
                        foreignField: "_id",
                        as: "foldertype"
                    }
                },
                {
                    $unwind: { path: "$foldertype", preserveNullAndEmptyArrays: true }
                },
                {
                    $lookup:
                    {
                        from: "referencevalues",
                        localField: "mrdfolders.statusuid",
                        foreignField: "_id",
                        as: "folderstatus"
                    }
                },
                {
                    $unwind: { path: "$folderstatus", preserveNullAndEmptyArrays: true }
                },
                {
                    $project: {
                        HN: "$patients.mrn",
                        EN: "$visitid",
                        LastVisit: "$startdate",
                        TitleName: "$titles.valuedescription",
                        FirstName: "$patients.firstname",
                        MiddleName: "$patients.middlename",
                        LastName: "$patients.lastname",
                        TitleNameTH: "$titlesTH.valuedescription",
                        FirstNameTH: "$patients.localfirstname",
                        MiddleNameTH: "$patients.localmiddlename",
                        LastNameTH: "$patients.locallastname",
                        FolderType: "$foldertype.valuedescription",
                        FolderStatus: "$folderstatus.valuedescription"
                    }
                }
        ]).exec()
            result = resultfindSTATMRDFolderLastVisit
        } catch (error) {
            this.logger.error('findSTATMRDFolderLastVisit error:', error);
        }
        return result;
    }
}
