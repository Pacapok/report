import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {MCWORKENReq} from '../../models/mcworkenreq';
import { from } from 'rxjs';


@Injectable()
export class MCWORKENReportService implements MCWORKENReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//Medical Certificate for Work Permit (ENG)
async findMCWORKEN(req: MCWORKENReq): Promise<any> {
    let result = [];
    try {
        const resultfindMCWORKEN = await this.PatientformdetailsModel.aggregate([
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
                    "formtemplates.code":"FORM_MC_WORKPERMITEN" //#1 Form name ???
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
            $addFields:{
                            HEADmcENPatientTitleName:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPatientTitleName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
    {
            $addFields:{
                            HEADmcENPatientName:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPatientName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
          {
            $addFields:{
                            HEADmcENMRN:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENMRN"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            HEADmcENPatientVisitDate:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPatientVisitDate"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            HEADmcENBirthday:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENBirthday"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
         {
            $addFields:{
                            HEADmcENPatientAge:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPatientAge"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
         {
            $addFields:{
                            HEADmcENGender:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENGender"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
         {
            $addFields:{
                            HEADmcENPatientDep:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPatientDep"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            HEADmcENBED:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENBED"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            HEADmcENPhysicianName:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENPhysicianName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
         {
            $addFields:{
                            HEADmcENLicenseNo:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENLicenseNo"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            HEADmcENAllergies:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","HEADmcENAllergies"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        //end MC Header//
        {
            $addFields:{
                            PTNAME:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENForPatientName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            PTADDRESS:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENForPatientAdd"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            PTNATIONALID:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENThaiNationalID"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            PTPASSPORTID:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENPassportNo"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            IsMEDICALHISTORY:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENMedicalHistoryTitle"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            MEDICALHISTORYDETAIL:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENMedHistory"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            IsACCIDENT:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENAccidentTitle"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            ACCIDENTDETAIL:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENAccidentDetail"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            IsADMIT:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHospitalAdmisTitle"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            ADMITDETAIL:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHospitalAdmis"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            ADMITDETAIL:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHospitalAdmis"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            OTHERHOSPITALHIS:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENOther"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            REQUESTERNAME:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENRequestName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            REQUESTDATE:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENForChildDate"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            DEPARTMENT:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENLocationExam"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DATE:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENExamDate"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DRNAME:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENCareNameExam"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DRLIC:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENCareLicenseNoExam"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2MCWorkPermitENWorkPlaceAdd:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENWorkPlaceAdd"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTNAME:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHaveExam"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTDATE:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHaveExamDate"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTBW:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENBodyWeight"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTHIGHT:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENHeight"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTBMI:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENbmi"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTSBP:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENsbp"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTDBP:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENdbp"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTPLUSE:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENPulse"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTIMPRESSION:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENOverallText"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTIMPRESSIONDETAIL:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENAbnormal"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DRSUMMARY:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENPhysicianSum"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DRSIGNNAME:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENCareName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2DRSIGLIC:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENCareLicenseNo"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        {
            $addFields:{
                            SEC2PTREQUESTER:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCWorkPermitENPTRequestName"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
        
    // //Group
    {
        $group:{
                    _id:{patientvisituid:"$patientvisituid"},
            HEADmcDEPTCODE: { "$push": "$departments.code" },
            HEADmcDEPTNAME: { "$push": "$departments.name" },
            HEADmcDRCODE: { "$push": "$careproviders.code" },
            HEADmcDRNAME: { "$push": "$careproviders.name" },
            HEADmcREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
            HEADmcREPORTFM: { "$push": "$reportconfigurations.documentno" },
                    HEADmcENPatientTitle:{"$push":"$HEADmcENPatientTitleName.textvalue"},
                    HEADmcENPatientName:{"$push":"$HEADmcENPatientName.textvalue"},
                    HEADmcENMRN:{"$push":"$HEADmcENMRN.textvalue"},
                    HEADmcENVisitDate:{"$push":"$HEADmcENPatientVisitDate.textvalue"},
                    HEADmcENPatientBirENday:{"$push":"$HEADmcENBirthday.textvalue"},
                    HEADmcENPatientAge:{"$push":"$HEADmcENPatientAge.textvalue"},
                    HEADmcENPatientGender:{"$push":"$HEADmcENGender.textvalue"},
                    HEADmcENPatientDep:{"$push":"$HEADmcENPatientDep.textvalue"},
                    HEADmcENPatientBed:{"$push":"$HEADmcENBED.textvalue"},
                    HEADmcENPhysicianName:{"$push":"$HEADmcENPhysicianName.textvalue"},
                    HEADmcENLicenseNo:{"$push":"$HEADmcENLicenseNo.textvalue"},
                    HEADmcENAllergies:{"$push":"$HEADmcENAllergies.textvalue"},
                    //end MC Header//
                    PTNAME:{"$push":"$PTNAME.textvalue"},
                    PTADDRESS:{"$push":"$PTADDRESS.textvalue"},
                    PTNATIONALID:{"$push":"$PTNATIONALID.textvalue"},
                    PTPASSPORTID:{"$push":"$PTPASSPORTID.textvalue"},
                    IsMEDICALHISTORY:{"$push":"$IsMEDICALHISTORY.textvalue"},
                    MEDICALHISTORYDETAIL:{"$push":"$MEDICALHISTORYDETAIL.textvalue"},
                    IsACCIDENT:{"$push":"$IsACCIDENT.textvalue"},
                    ACCIDENTDETAIL:{"$push":"$ACCIDENTDETAIL.textvalue"},
                    IsADMIT:{"$push":"$IsADMIT.textvalue"},
                    ADMITDETAIL:{"$push":"$ADMITDETAIL.textvalue"},
                    OTHERHOSPITALHIS:{"$push":"$OTHERHOSPITALHIS.textvalue"},
                    REQUESTERNAME:{"$push":"$REQUESTERNAME.textvalue"},
                    REQUESTDATE:{"$push":"$REQUESTDATE.textvalue"},
                    SEC2DEPARTMENT:{"$push":"$SEC2DEPARTMENT.textvalue"},
                    SEC2DATE:{"$push":"$SEC2DATE.textvalue"},
                    SEC2DRNAME:{"$push":"$SEC2DRNAME.textvalue"},
                    SEC2DRLIC:{"$push":"$SEC2DRLIC.textvalue"},
                    SEC2MCWorkPermitENWorkPlaceAdd:{"$push":"$SEC2MCWorkPermitENWorkPlaceAdd.textvalue"},
                    SEC2PTNAME:{"$push":"$SEC2PTNAME.textvalue"},
                    SEC2PTDATE:{"$push":"$SEC2PTDATE.textvalue"},
                    SEC2PTBW:{"$push":"$SEC2PTBW.textvalue"},
                    SEC2PTHIGHT:{"$push":"$SEC2PTHIGHT.textvalue"},
                    SEC2PTBMI:{"$push":"$SEC2PTBMI.textvalue"},
                    SEC2PTSBP:{"$push":"$SEC2PTSBP.textvalue"},
                    SEC2PTDBP:{"$push":"$SEC2PTDBP.textvalue"},
                    SEC2PTPLUSE:{"$push":"$SEC2PTPLUSE.textvalue"},
                    SEC2PTIMPRESSION:{"$push":"$SEC2PTIMPRESSION.textvalue"},
                    SEC2PTIMPRESSIONDETAIL:{"$push":"$SEC2PTIMPRESSIONDETAIL.textvalue"},
                    SEC2DRSUMMARY:{"$push":"$SEC2DRSUMMARY.textvalue"},
                    SEC2DRSIGNNAME:{"$push":"$SEC2DRSIGNNAME.textvalue"},
                    SEC2DRSIGLIC:{"$push":"$SEC2DRSIGLIC.textvalue"},
                    SEC2PTREQUESTER:{"$push":"$SEC2PTREQUESTER.textvalue"},  
        }
    },
    // //Project
    {
        $project:{
            HEADmcDEPTCODE: { $arrayElemAt: ["$HEADmcDEPTCODE", -1] },
            HEADmcDEPTNAME: { $arrayElemAt: ["$HEADmcDEPTNAME", -1] },
            HEADmcDRCODE: { $arrayElemAt: ["$HEADmcDRCODE", -1] },
            HEADmcDRNAME: { $arrayElemAt: ["$HEADmcDRNAME", -1] },
            HEADmcREPORTTYPE: { $arrayElemAt: ["$HEADmcREPORTTYPE", -1] },
            HEADmcREPORTFM: { $arrayElemAt: ["$HEADmcREPORTFM", -1] },
                    HEADmcENPatientTitle:{$arrayElemAt:["$HEADmcENPatientTitle",-1]},
                    HEADmcENPatientName:{$arrayElemAt:["$HEADmcENPatientName",-1]},
                    HEADmcENMRN:{$arrayElemAt:["$HEADmcENMRN",-1]},
                    HEADmcENVisitDate:{$arrayElemAt:["$HEADmcENVisitDate",-1]},
                    HEADmcENPatientBirENday:{$arrayElemAt:["$HEADmcENPatientBirENday",-1]},
                    HEADmcENPatientAge:{$arrayElemAt:["$HEADmcENPatientAge",-1]},
                    HEADmcENPatientGender:{$arrayElemAt:["$HEADmcENPatientGender",-1]},
                    HEADmcENPatientDep:{$arrayElemAt:["$HEADmcENPatientDep",-1]},
                    HEADmcENPatientBed:{$arrayElemAt:["$HEADmcENPatientBed",-1]},
                    HEADmcENPhysicianName:{$arrayElemAt:["$HEADmcENPhysicianName",-1]},
                    HEADmcENLicenseNo:{$arrayElemAt:["$HEADmcENLicenseNo",-1]},
                    HEADmcENAllergies:{$arrayElemAt:["$HEADmcENAllergies",-1]},
                    //end MC Header//
                    PTNAME:{$arrayElemAt:["$PTNAME",-1]},
                    PTADDRESS:{$arrayElemAt:["$PTADDRESS",-1]},
                    PTNATIONALID:{$arrayElemAt:["$PTNATIONALID",-1]},
                    PTPASSPORTID:{$arrayElemAt:["$PTPASSPORTID",-1]},
                    IsMEDICALHISTORY:{$arrayElemAt:["$IsMEDICALHISTORY",-1]},
                    MEDICALHISTORYDETAIL:{$arrayElemAt:["$MEDICALHISTORYDETAIL",-1]},
                    IsACCIDENT:{$arrayElemAt:["$IsACCIDENT",-1]},
                    ACCIDENTDETAIL:{$arrayElemAt:["$ACCIDENTDETAIL",-1]},
                    IsADMIT:{$arrayElemAt:["$IsADMIT",-1]},
                    ADMITDETAIL:{$arrayElemAt:["$ADMITDETAIL",-1]},
                    OTHERHOSPITALHIS:{$arrayElemAt:["$OTHERHOSPITALHIS",-1]},
                    REQUESTERNAME:{$arrayElemAt:["$REQUESTERNAME",-1]},
                    REQUESTDATE:{$arrayElemAt:["$REQUESTDATE",-1]},
                    SEC2DEPARTMENT:{$arrayElemAt:["$SEC2DEPARTMENT",-1]},
                    SEC2DATE:{$arrayElemAt:["$SEC2DATE",-1]},
                    SEC2DRNAME:{$arrayElemAt:["$SEC2DRNAME",-1]},
                    SEC2DRLIC:{$arrayElemAt:["$SEC2DRLIC",-1]},
                    SEC2MCWorkPermitENWorkPlaceAdd:{$arrayElemAt:["$SEC2MCWorkPermitENWorkPlaceAdd",-1]},
                    SEC2PTNAME:{$arrayElemAt:["$SEC2PTNAME",-1]},
                    SEC2PTDATE:{$arrayElemAt:["$SEC2PTDATE",-1]},
                    SEC2PTBW:{$arrayElemAt:["$SEC2PTBW",-1]},
                    SEC2PTHIGHT:{$arrayElemAt:["$SEC2PTHIGHT",-1]},
                    SEC2PTBMI:{$arrayElemAt:["$SEC2PTBMI",-1]},
                    SEC2PTSBP:{$arrayElemAt:["$SEC2PTSBP",-1]},
                    SEC2PTDBP:{$arrayElemAt:["$SEC2PTDBP",-1]},
                    SEC2PTPLUSE:{$arrayElemAt:["$SEC2PTPLUSE",-1]},
                    SEC2PTIMPRESSION:{$arrayElemAt:["$SEC2PTIMPRESSION",-1]},
                    SEC2PTIMPRESSIONDETAIL:{$arrayElemAt:["$SEC2PTIMPRESSIONDETAIL",-1]},
                    SEC2DRSUMMARY:{$arrayElemAt:["$SEC2DRSUMMARY",-1]},
                    SEC2DRSIGNNAME:{$arrayElemAt:["$SEC2DRSIGNNAME",-1]},
                    SEC2DRSIGLIC:{$arrayElemAt:["$SEC2DRSIGLIC",-1]},
                    SEC2PTREQUESTER:{$arrayElemAt:["$SEC2PTREQUESTER",-1]},
         }   
    }
 ]).exec()
        result = resultfindMCWORKEN
    } catch (error) {
        this.logger.error('findMCWORKEN error:', error);
    }
    return result;
}

}
