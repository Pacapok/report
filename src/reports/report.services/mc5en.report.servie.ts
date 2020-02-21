import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {MC5ENReq} from '../../models/mc5enreq';
import { from } from 'rxjs';


@Injectable()
export class MC5ENReportService implements MC5ENReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//Medical Certificate for Certifying The Health (5) English
async findMC5EN(req: MC5ENReq): Promise<any> {
    let result = [];
    try {
        const resultfindMC5EN = await this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code":"RT_COMMON_117EN"
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
                {
                    $addFields:{
                                    MC5ENPTName:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5NPTName"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENPTadd:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENPTadd"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENIDnumber:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENIDnumber"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENpassport:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENpassport"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENNOYESSPECIFY:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENNOYESSPECIFY"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENInput1:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENInput1"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENAcciSurg:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENAcciSurg"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENInput2:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENInput2"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENHisAdmis:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENHisAdmis"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENInput3:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENInput3"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENInput4OtherMed:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENInput4OtherMed"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENRequestName:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENRequestName"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENDateSign:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDateSign"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENlocation:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENlocation"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENDate:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDate"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENDrName:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDrName"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENDrLic:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDrLic"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENHaveExam:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENHaveExam"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENdatevisit:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENdatevisit"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENbw:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENbw"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENHt:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENHt"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENbmi:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENbmi"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENsbp:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENsbp"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENdbp:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENdbp"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENPulse:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENPulse"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENoverall:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENoverall"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENText:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENText"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5EN4Blank:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5EN4Blank"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    additionalPhysicianSum:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","additionalPhysicianSum"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENTextArea:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENTextArea"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENDrName2:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDrName2"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    MC5ENDrLic2:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENDrLic2"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                        MC5ENWorkPlaceAdd:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENWorkPlaceAdd"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                 {
                    $addFields:{
                                    MC5ENReqName:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","MC5ENReqName"]}
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
                            MC5ENPTName:{"$push":"$MC5ENPTName.textvalue"},
                            MC5ENPTadd:{"$push":"$MC5ENPTadd.textvalue"},
                            MC5ENNationalID:{"$push":"$MC5ENIDnumber.textvalue"},
                            MC5ENPassport:{"$push":"$MC5ENpassport.textvalue"},
                            MC5ENMedicalHistory:{"$push":"$MC5ENNOYESSPECIFY.textvalue"},
                            MC5ENMedicalHistoryText:{"$push":"$MC5ENInput1.textvalue"},
                            MC5ENAccident:{"$push":"$MC5ENAcciSurg.textvalue"},
                            MC5ENAccidentText:{"$push":"$MC5ENInput2.textvalue"},
                            MC5ENAdmis:{"$push":"$MC5ENHisAdmis.textvalue"},
                            MC5ENAdmisText:{"$push":"$MC5ENInput3.textvalue"},
                            MC5ENMedHistory:{"$push":"$MC5ENInput4OtherMed.textvalue"},
                            MC5ENRequestSignPT:{"$push":"$MC5ENRequestName.textvalue"},
                            MC5ENSignDate:{"$push":"$MC5ENDateSign.textvalue"},
                            MC5ENForPhysicianLocation:{"$push":"$MC5ENlocation.textvalue"},
                            MC5ENDate:{"$push":"$MC5ENDate.textvalue"},
                            MC5ENForPhysicianName:{"$push":"$MC5ENDrName.textvalue"},
                            MC5ENLicenseNo:{"$push":"$MC5ENDrLic.textvalue"},
                            MC5ENWorkPlaceAdd:{"$push":"$MC5ENWorkPlaceAdd.textvalue"},
                            MC5ENPTNameExam:{"$push":"$MC5ENHaveExam.textvalue"},
                            MC5ENPTExamDateVisit:{"$push":"$MC5ENdatevisit.textvalue"},
                            MC5ENWeight:{"$push":"$MC5ENbw.textvalue"},
                            MC5ENHeight:{"$push":"$MC5ENHt.textvalue"},
                            MC5ENBMI:{"$push":"$MC5ENbmi.textvalue"},
                            MC5ENsbp:{"$push":"$MC5ENsbp.textvalue"},
                            MC5ENdbp:{"$push":"$MC5ENdbp.textvalue"},
                            MC5ENpulse:{"$push":"$MC5ENPulse.textvalue"},
                            MC5ENGuarantee:{"$push":"$MC5ENoverall.textvalue"},
                            MC5ENGuaranteeText:{"$push":"$MC5ENText.textvalue"},
                            MC5ENGuaranteeNum4:{"$push":"$MC5EN4Blank.textvalue"},
                            MC5ENPhysicianSummary:{"$push":"$additionalPhysicianSum.textvalue"},
                            MC5ENTextArea:{"$push":"$MC5ENTextArea.textvalue"},
                            MC5ENCareExam:{"$push":"$MC5ENDrName2.textvalue"},
                            MC5ENCareLicenseNo:{"$push":"$MC5ENDrLic2.textvalue"},
                            MC5ENPTExamName:{"$push":"$MC5ENReqName.textvalue"},
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
                            MC5ENPTName:{$arrayElemAt:["$MC5ENPTName",-1]},
                            MC5ENPTadd:{$arrayElemAt:["$MC5ENPTadd",-1]},
                            MC5ENNationalID:{$arrayElemAt:["$MC5ENNationalID",-1]},
                            MC5ENPassport:{$arrayElemAt:["$MC5ENPassport",-1]},
                            MC5ENMedicalHistory:{$arrayElemAt:["$MC5ENMedicalHistory",-1]},
                            MC5ENMedicalHistoryText:{$arrayElemAt:["$MC5ENMedicalHistoryText",-1]},
                            MC5ENAccident:{$arrayElemAt:["$MC5ENAccident",-1]},
                            MC5ENAccidentText:{$arrayElemAt:["$MC5ENAccidentText",-1]},
                            MC5ENAdmis:{$arrayElemAt:["$MC5ENAdmis",-1]},
                            MC5ENAdmisText:{$arrayElemAt:["$MC5ENAdmisText",-1]},
                            MC5ENMedHistory:{$arrayElemAt:["$MC5ENMedHistory",-1]},
                            MC5ENRequestSignPT:{$arrayElemAt:["$MC5ENRequestSignPT",-1]},
                            MC5ENSignDate:{$arrayElemAt:["$MC5ENSignDate",-1]},
                            MC5ENForPhysicianLocation:{$arrayElemAt:["$MC5ENForPhysicianLocation",-1]},
                            MC5ENDate:{$arrayElemAt:["$MC5ENDate",-1]},
                            MC5ENForPhysicianName:{$arrayElemAt:["$MC5ENForPhysicianName",-1]},
                            MC5ENLicenseNo:{$arrayElemAt:["$MC5ENLicenseNo",-1]},
                            MC5ENWorkPlaceAdd:{$arrayElemAt:["$MC5ENWorkPlaceAdd",-1]},
                            MC5ENPTNameExam:{$arrayElemAt:["$MC5ENPTNameExam",-1]},
                            MC5ENPTExamDateVisit:{$arrayElemAt:["$MC5ENPTExamDateVisit",-1]},
                            MC5ENWeight:{$arrayElemAt:["$MC5ENWeight",-1]},
                            MC5ENHeight:{$arrayElemAt:["$MC5ENHeight",-1]},
                            MC5ENBMI:{$arrayElemAt:["$MC5ENBMI",-1]},
                            MC5ENsbp:{$arrayElemAt:["$MC5ENsbp",-1]},
                            MC5ENdbp:{$arrayElemAt:["$MC5ENdbp",-1]},
                            MC5ENpulse:{$arrayElemAt:["$MC5ENpulse",-1]},
                            MC5ENGuarantee:{$arrayElemAt:["$MC5ENGuarantee",-1]},
                            MC5ENGuaranteeText:{$arrayElemAt:["$MC5ENGuaranteeText",-1]},
                            MC5ENGuaranteeNum4:{$arrayElemAt:["$MC5ENGuaranteeNum4",-1]},
                            MC5ENPhysicianSummary:{$arrayElemAt:["$MC5ENPhysicianSummary",-1]},
                            MC5ENTextArea:{$arrayElemAt:["$MC5ENTextArea",-1]},
                            MC5ENCareExam:{$arrayElemAt:["$MC5ENCareExam",-1]},
                            MC5ENCareLicenseNo:{$arrayElemAt:["$MC5ENCareLicenseNo",-1]},
                            MC5ENPTExamName:{$arrayElemAt:["$MC5ENPTExamName",-1]}
                 }   
            }
        ]).exec()
        result = resultfindMC5EN
    } catch (error) {
        this.logger.error('findMC5EN error:', error);
    }
    return result;
}

}
