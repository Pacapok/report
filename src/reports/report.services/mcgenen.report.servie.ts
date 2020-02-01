import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {MCGENReq} from '../../models/mcgenreq';
import { from } from 'rxjs';


@Injectable()
export class MCGENENReportService implements MCGENENReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//Medical Certificate for general (EN)
    async findMCGENEN(req: MCGENReq): Promise<any> {
    let result = [];
    try {
        const resultfindMCGENEN = await this.PatientformdetailsModel.aggregate([
            {
                $match: {
                    statusflag: "A",
                    orguid: new Types.ObjectId(req.organisationuid),
                    patientformuid: new Types.ObjectId(req.searchcriteria),
                    patientuid: new Types.ObjectId(req.patientuid),
                }
            },
        {
        $lookup:{
                    from: "formtemplates",
                    localField: "templateuid",
                    foreignField: "_id",
                    as: "formtemplates"
                }
    },
    {
        $unwind: { path: "$formtemplates", preserveNullAndEmptyArrays: true }
    },
    {
        $match:{
            "formtemplates.code":"MEDICAL_CERTIFICATE_EN" //#1 Form name ???
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
//-----
            {
                $lookup: {
                    from: "departments",
                    localField: "patientforms.departmentuid",
                    foreignField: "_id",
                    as: "departments"
                }
            },
            {
                $unwind: { path: "$departments", preserveNullAndEmptyArrays: true }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "patientforms.careprovideruid",
                    foreignField: "_id",
                    as: "careproviders"
                }
            },
            {
                $unwind: { path: "$careproviders", preserveNullAndEmptyArrays: true }
            },
            {
                $lookup: {
                    from: "reportconfigurations",
                    localField: "orguid",
                    foreignField: "orguid",
                    as: "reportconfigurations"
                }
            },
            {
                $unwind: { path: "$reportconfigurations", preserveNullAndEmptyArrays: true }
            },
            {
                $match: {
                    "reportconfigurations.statusflag": "A",
                    "reportconfigurations.orguid": new Types.ObjectId(req.organisationuid),
                    "reportconfigurations.reporttemplateuid": new Types.ObjectId(req.reporttemplateuid)
                }
            },
//-----
    //AddFileds สร้างชื่อ field ใหม่
            {
                $addFields: {
                    HEADmcENPatientTitleName: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPatientTitleName"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENPatientName: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPatientName"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENMRN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENMRN"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENPatientVisitDate: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPatientVisitDate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENBirthday: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENBirthday"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENPatientAge: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPatientAge"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENGender: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENGender"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENPatientDep: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPatientDep"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENBED: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENBED"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENPhysicianName: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENPhysicianName"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENLicenseNo: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENLicenseNo"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADmcENAllergies: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADmcENAllergies"] }
                                }
                            }, -1]
                    }
                }
            },
            { 
                $addFields: {
                    HEADERSIDEEFFECT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERSIDEEFFECT"] }
                                }
                            }, -1]
                    }
                }    
            },
            //end MC Header//
            {
                $addFields: {
                    MCGenENTitleAddress: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENAddr"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRNANE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENDrName"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRLIC: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENCareID"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENPTname"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTMRN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENPTHN"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTENTypeO: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENTypeofPatient"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTEN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENOUTVisitid"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTOPDDate: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENOUTdate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTTypeI: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENINVisitEncounter"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTVN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENANINpatient"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTOPDDateFrom: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENdateIPD"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PTOPDDateTo: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENdatetoIPD"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    TREATMENT1: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENMed"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PROCEDURE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENProcedure"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    SURGERY: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENSurgery"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    OTHER: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENOther"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    IsRECOMMENDATION1: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecomChkBox"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    IsRECOMMENDATION2: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DoctorRecommendation"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    MCGenENMoreDetail: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENMoreDetail"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    RECOMMENDATIONDAY: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENNumberDate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    RECOMMENDATIONDATEFROM: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecStartDate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    RECOMMENDATIONDATETO: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecEndDate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    IsEXTEN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENContinueChkBox"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    EXTENDAY: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecNumDate"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    EXTENDATEFROM: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecDateFrom"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    EXTENDATETO: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENRecDateTo"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    CONTINUETREATMENT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENPatientNeedContinued"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    CANNOTTRAVEL: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENPatientCannotTravel"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PHYSIGNNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENprintname"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PHYSIGNLIC: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "MCGenENSpace13"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    CHIEFCOMPLAINTS: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "CHIEFCOMPLAINTS"] }
                        }

                    }
                }
            },
            {
                $addFields: {
                    DIAGNOSIS: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "DIAGNOSIS"] }
                        }

                    }
                }
            },
            {
                $addFields: {
                    DOCTORRECOMMENDATION: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "DOCTORRECOMMENDATION"] }
                        }

                    }
                }
            },
            // //Group
            {
                $group: {
                    _id: { patientvisituid: "$patientvisituid" },
                    HEADmcENDEPTCODE: { "$push": "$departments.code" },
                    HEADmcENDEPTNAME: { "$push": "$departments.name" },
                    HEADmcENDRCODE: { "$push": "$careproviders.code" },
                    HEADmcENDRNAME: { "$push": "$careproviders.name" },
                    HEADmcENREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                    HEADmcENREPORTFM: { "$push": "$reportconfigurations.documentno" },
                    HEADmcENPatientTitle: { "$push": "$HEADmcENPatientTitleName.textvalue" },
                    HEADmcENPatientName: { "$push": "$HEADmcENPatientName.textvalue" },
                    HEADmcENMRN: { "$push": "$HEADmcENMRN.textvalue" },
                    HEADmcENVisitDate: { "$push": "$HEADmcENPatientVisitDate.textvalue" },
                    HEADmcENPatientBirthday: { "$push": "$HEADmcENBirthday.textvalue" },
                    HEADmcENPatientAge: { "$push": "$HEADmcENPatientAge.textvalue" },
                    HEADmcENPatientGender: { "$push": "$HEADmcENGender.textvalue" },
                    HEADmcENPatientDep: { "$push": "$HEADmcENPatientDep.textvalue" },
                    HEADmcENPatientBed: { "$push": "$HEADmcENBED.textvalue" },
                    HEADmcENPhysicianName: { "$push": "$HEADmcENPhysicianName.textvalue" },
                    HEADmcENLicenseNo: { "$push": "$HEADmcENLicenseNo.textvalue" },
                    HEADmcENAllergies: { "$push": "$HEADmcENAllergies.textvalue" },
                    HEADERSIDEEFFECT: { "$push": "$HEADERSIDEEFFECT.textvalue" },
                    //end MC Header//
                    MCGenENTitleAddress: { "$push": "$MCGenENTitleAddress.textvalue" },
                    DRNANE: { "$push": "$DRNANE.textvalue" },
                    DRLIC: { "$push": "$DRLIC.textvalue" },
                    PTNAME: { "$push": "$PTNAME.textvalue" },
                    PTMRN: { "$push": "$PTMRN.textvalue" },
                    PTENTypeO: { "$push": "$PTENTypeO.textvalue" },
                    PTEN: { "$push": "$PTEN.textvalue" },
                    PTOPDDate: { "$push": "$PTOPDDate.textvalue" },
                    PTTypeI: { "$push": "$PTTypeI.textvalue" },
                    PTVN: { "$push": "$PTVN.textvalue" },
                    PTOPDDateFrom: { "$push": "$PTOPDDateFrom.textvalue" },
                    PTOPDDateTo: { "$push": "$PTOPDDateTo.textvalue" },
                    TREATMENT1: { "$push": "$TREATMENT1.textvalue" },
                    PROCEDURE: { "$push": "$PROCEDURE.textvalue" },
                    PROCEDUREText: { "$push": { $arrayElemAt: ["$PROCEDURE.actualvalue.additionalvalue", -1] } },
                    SURGERY:{ "$push": "$SURGERY.textvalue" },
                    SURGERYText: { "$push": { $arrayElemAt: ["$SURGERY.actualvalue.additionalvalue", -1] } },
                    OTHER: { "$push": "$OTHER.textvalue" },
                    OTHERText: { "$push": { $arrayElemAt: ["$OTHER.actualvalue.additionalvalue", -1] } },
                    IsRECOMMENDATION1: { "$push": "$IsRECOMMENDATION1.textvalue" },
                    IsRECOMMENDATION2: { "$push": "$IsRECOMMENDATION2.textvalue" },
                    MCGenENMoreDetail: { "$push": "$MCGenENMoreDetail.textvalue" },
                    RECOMMENDATIONDAY: { "$push": "$RECOMMENDATIONDAY.textvalue" },
                    RECOMMENDATIONDATEFROM: { "$push": "$RECOMMENDATIONDATEFROM.textvalue" },
                    RECOMMENDATIONDATETO: { "$push": "$RECOMMENDATIONDATETO.textvalue" },
                    IsEXTEN: { "$push": "$IsEXTEN.textvalue" },
                    EXTENDAY: { "$push": "$EXTENDAY.textvalue" },
                    EXTENDATEFROM: { "$push": "$EXTENDATEFROM.textvalue" },
                    EXTENDATETO: { "$push": "$EXTENDATETO.textvalue" },
                    CONTINUETREATMENT: { "$push": "$CONTINUETREATMENT.textvalue" },
                    CONTINUETREATMENTDETAIL: { "$push": { $arrayElemAt: ["$CONTINUETREATMENT.actualvalue.additionalvalue", -1] } },
                    CANNOTTRAVEL: { "$push": "$CANNOTTRAVEL.textvalue" },
                    CANNOTTRAVELDETAIL: { "$push": { $arrayElemAt: ["$CANNOTTRAVEL.actualvalue.additionalvalue", 0] } },
                    ACCOMPANYDETAIL: { "$push": { $arrayElemAt: ["$CANNOTTRAVEL.actualvalue.additionalvalue", 1] } },
                    PHYSIGNNAME: { "$push": "$PHYSIGNNAME.textvalue" },
                    PHYSIGNLIC: { "$push": "$PHYSIGNLIC.textvalue" },
                    CHIEFCOMPLAINTS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$CHIEFCOMPLAINTS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "5"] }
                                    }
                                }, -1]
                        }
                    },
                    DIAGNOSIS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$DIAGNOSIS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "6"] }
                                    }
                                }, -1]
                        }
                    },
                    DOCTORRECOMMENDATION: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$DOCTORRECOMMENDATION",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "dr"] }
                                    }
                                }, -1]
                        }
                    },
                }
            },
            // //Project
            {
                $project: {
                    HEADmcENDEPTCODE: { $arrayElemAt: ["$HEADmcENDEPTCODE", -1] },
                    HEADmcENDEPTNAME: { $arrayElemAt: ["$HEADmcENDEPTNAME", -1] },
                    HEADmcENDRCODE: { $arrayElemAt: ["$HEADmcENDRCODE", -1] },
                    HEADmcENDRNAME: { $arrayElemAt: ["$HEADmcENDRNAME", -1] },
                    HEADmcENREPORTTYPE: { $arrayElemAt: ["$HEADmcENREPORTTYPE", -1] },
                    HEADmcENREPORTFM: { $arrayElemAt: ["$HEADmcENREPORTFM", -1] },
                    HEADmcENPatientTitle: { $arrayElemAt: ["$HEADmcENPatientTitle", -1] },
                    HEADmcENPatientName: { $arrayElemAt: ["$HEADmcENPatientName", -1] },
                    HEADmcENMRN: { $arrayElemAt: ["$HEADmcENMRN", -1] },
                    HEADmcENVisitDate: { $arrayElemAt: ["$HEADmcENVisitDate", -1] },
                    HEADmcENPatientBirthday: { $arrayElemAt: ["$HEADmcENPatientBirthday", -1] },
                    HEADmcENPatientAge: { $arrayElemAt: ["$HEADmcENPatientAge", -1] },
                    HEADmcENPatientGender: { $arrayElemAt: ["$HEADmcENPatientGender", -1] },
                    HEADmcENPatientDep: { $arrayElemAt: ["$HEADmcENPatientDep", -1] },
                    HEADmcENPatientBed: { $arrayElemAt: ["$HEADmcENPatientBed", -1] },
                    HEADmcENPhysicianName: { $arrayElemAt: ["$HEADmcENPhysicianName", -1] },
                    HEADmcENLicenseNo: { $arrayElemAt: ["$HEADmcENLicenseNo", -1] },
                    HEADmcENAllergies: { $arrayElemAt: ["$HEADmcENAllergies", -1] },
                    HEADERSIDEEFFECT: { $arrayElemAt: ["$HEADERSIDEEFFECT", -1] },
                    //end MC Header//
                    MCGenENTitleAddress: { $arrayElemAt: ["$MCGenENTitleAddress", -1] },
                    DRNANE: { $arrayElemAt: ["$DRNANE", -1] },
                    DRLIC: { $arrayElemAt: ["$DRLIC", -1] },
                    PTNAME: { $arrayElemAt: ["$PTNAME", -1] },
                    PTMRN: { $arrayElemAt: ["$PTMRN", -1] },
                    PTENTypeO: { $arrayElemAt: ["$PTENTypeO", -1] },
                    PTEN: { $arrayElemAt: ["$PTEN", -1] },
                    PTOPDDate: { $arrayElemAt: ["$PTOPDDate", -1] },
                    PTTypeI: { $arrayElemAt: ["$PTTypeI", -1] },
                    PTVN: { $arrayElemAt: ["$PTVN", -1] },
                    PTOPDDateFrom: { $arrayElemAt: ["$PTOPDDateFrom", -1] },
                    PTOPDDateTo: { $arrayElemAt: ["$PTOPDDateTo", -1] },
                    TREATMENT1: { $arrayElemAt: ["$TREATMENT1", -1] },
                    PROCEDURE: { $arrayElemAt: ["$PROCEDURE", -1] },
                    PROCEDUREText: { $arrayElemAt: ["$PROCEDUREText", -1] },
                    SURGERY: { $arrayElemAt: ["$SURGERY", -1] },
                    SURGERYText: { $arrayElemAt: ["$SURGERYText", -1] },
                    OTHER: { $arrayElemAt: ["$OTHER", -1] },
                    OTHERText: { $arrayElemAt: ["$OTHERText", -1] },
                    IsRECOMMENDATION1: { $arrayElemAt: ["$IsRECOMMENDATION1", -1] },
                    IsRECOMMENDATION2: { $arrayElemAt: ["$IsRECOMMENDATION2", -1] },
                    MCGenENMoreDetail: { $arrayElemAt: ["$MCGenENMoreDetail", -1] },
                    RECOMMENDATIONDAY: { $arrayElemAt: ["$RECOMMENDATIONDAY", -1] },
                    RECOMMENDATIONDATEFROM: { $arrayElemAt: ["$RECOMMENDATIONDATEFROM", -1] },
                    RECOMMENDATIONDATETO: { $arrayElemAt: ["$RECOMMENDATIONDATETO", -1] },
                    IsEXTEN: { $arrayElemAt: ["$IsEXTEN", -1] },
                    EXTENDAY: { $arrayElemAt: ["$EXTENDAY", -1] },
                    EXTENDATEFROM: { $arrayElemAt: ["$EXTENDATEFROM", -1] },
                    EXTENDATETO: { $arrayElemAt: ["$EXTENDATETO", -1] },
                    CONTINUETREATMENT: { $arrayElemAt: ["$CONTINUETREATMENT", -1] },
                    CONTINUETREATMENTDETAIL: { $arrayElemAt: ["$CONTINUETREATMENTDETAIL", -1] },
                    CANNOTTRAVEL: { $arrayElemAt: ["$CANNOTTRAVEL", -1] },
                    CANNOTTRAVELDETAIL: { $arrayElemAt: ["$CANNOTTRAVELDETAIL", -1] },
                    ACCOMPANYDETAIL: { $arrayElemAt: ["$ACCOMPANYDETAIL", -1] },
                    PHYSIGNNAME: { $arrayElemAt: ["$PHYSIGNNAME", -1] },
                    PHYSIGNLIC: { $arrayElemAt: ["$PHYSIGNLIC", -1] },
                    CHIEFCOMPLAINTS: { $arrayElemAt: ["$CHIEFCOMPLAINTS.htmldatavalue", -1] },
                    DIAGNOSISTB: { $arrayElemAt: ["$DIAGNOSIS.tabledata", -1] },
                    DIAGNOSIS2: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                    DOCTORRECOMMENDATION: { $arrayElemAt: ["$DOCTORRECOMMENDATION.richtextdata", -1] },
                }
            }
        ]).exec()
        result = resultfindMCGENEN
    } catch (error) {
        this.logger.error('findMCGENEN error:', error);
    }
    return result;
}

}
