import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {IPDClaimFormReq} from '../../models/ipdclaimformreq';
import { from } from 'rxjs';


@Injectable()
export class IPDClaimFormPart2ReportService implements IPDClaimFormPart2ReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//IPD Claim FormP2
    async findIPDClaimFormP2(req: IPDClaimFormReq): Promise<any> {
        let result = [];
        try {
            const resultIPDClaimformsP2 = await this.PatientformdetailsModel.aggregate([
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
                        "formtemplates.code":"IPD CLAIM FORM PART 2/1"
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
                //AddFileds
                {
                    $addFields:{
                                    IsDaycase:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","daycase"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                        ToInsurance:{ $filter:{
                                                    input:"$attributes",
                                                    as:"vs",
                                                    cond:{$eq:["$$vs.attributename","SEC4ToInsurance"]}
                                                }
                                        }
                                }
                },
                {
                    $addFields:{
                        Company:{ $filter:{
                                                    input:"$attributes",
                                                    as:"vs",
                                                    cond:{$eq:["$$vs.attributename","SEC4Company"]}
                                                }
                                        }
                                }
                },
                {
                    $addFields:{
                        HospitalAddress:{ $filter:{
                                                    input:"$attributes",
                                                    as:"vs",
                                                    cond:{$eq:["$$vs.attributename","SEC4HospitalAddress"]}
                                                }
                                        }
                                }
                },
                {
                    $addFields:{
                        "HEADERADMITDATEDETAIL":{ $filter:{
                                                    input:"$attributes",
                                                    as:"vs",
                                                    cond:{$eq:["$$vs.attributename","HEADERADMITDATEDETAIL"]}
                                                }
                                        }
                                }
                },
                {
                    $addFields:{
                        "HEADERADMITTIMEDETAIL":{ $filter:{
                                                    input:"$attributes",
                                                    as:"vs",
                                                    cond:{$eq:["$$vs.attributename","HEADERADMITTIMEDETAIL"]}
                                                    }
                                                }
                                }
                },
                {
                    $addFields: {
                        "HEADERDISCHARGE": {
                            $filter: {
                                input: "$attributes",
                                as: "vs",
                                cond: { $eq: ["$$vs.attributename", "HEADERDISCHARGE"] } //Add Discharge Date and Time
                            }
                        }
                    }
                },
                {
                    $addFields:{
                                    SEC4PTNAMEDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTNAMEDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4HEADERHNDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4HEADERHNDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4HEADERENDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4HEADERENDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4FORILLNESSDATE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4FORILLNESSDATE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4FORILLNESSDATE2:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4FORILLNESSDATE2"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4OPINIONDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4OPINIONDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4ACCIDENTDATE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4ACCIDENTDATE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4SAWACCIDENTDATE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4SAWACCIDENTDATE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4CAUSE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4CAUSE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4IsALCOHOL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4IsALCOHOL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4ALCOHOLDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4ALCOHOLDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4STUDY:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4STUDY"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4TREATMENT:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4TREATMENT"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4RESULT:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4RESULT"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4ALCOHOLADDICT:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4ALCOHOLADDICT"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4ALCOHOLADDICTSPECDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4ALCOHOLADDICTSPECDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PREGNANCY:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PREGNANCY"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PREGNANCYDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PREGNANCYDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4INFERTILITY:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4INFERTILITY"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4INFERTILITYDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4INFERTILITYDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4HIV:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4HIV"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4HIVDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4HIVDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PATIENTSIGNDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PATIENTSIGNDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4TREATMENTDR:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4TREATMENTDR"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTADDRESS:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTADDRESS"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTMEDHISTORYDATEDETAIL:{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTMEDHISTORYDATEDETAIL"]}
                                                            }
                                                        }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTMEDHISTORYSYMPTOMDETAIL:{
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTMEDHISTORYSYMPTOMDETAIL"]}
                                                            }
                                                        }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTMEDHISTORYDIAGDETAIL:{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTMEDHISTORYDIAGDETAIL"]}
                                                            }
                                                        }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTMEDHISTORYTREATMENTDETAIL:{
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTMEDHISTORYTREATMENTDETAIL"]}
                                                            }
                                                        }
                                }
                },
                {
                    $addFields:{
                                    SEC4PTMEDHISTORYPHYNAMEDETAIL:{
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PTMEDHISTORYPHYNAMEDETAIL"]}
                                                            }
                                                        }
                                }
                },
                {
                    $addFields:{
                                    SEC4ESTIMATEFORRECOVDETAIL:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4ESTIMATEFORRECOVDETAIL"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4OTHER:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4OTHER"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PHYSPECIALTY:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PHYSPECIALTY"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PHYLIC:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PHYLIC"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PHYSIGNDATE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.attributename","SEC4PHYSIGNDATE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4CHIEFCOMPLAINTS:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","CHIEFCOMPLAINTS"]}
                                                            }
                                                        
                                                    }
                                }
                },   
                {
                    $addFields:{
                                    SEC4PRESENTILLNESS:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","PRESENTILLNESS"]}
                                                            }
                                                        
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4DIAGNOSIS:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","DIAGNOSIS"]}
                                                            }
                                                        
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4MEDICINEORDERS:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","MEDICINEORDERS"]}
                                                            }
                                                        
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4ORDERS:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","ORDERS"]}
                                                            }
                                                        
                                                    }
                                }
                },
                {
                    $addFields:{
                                    SEC4PROCEDURES:{ 
                                                            $filter:{
                                                                input:"$predefineddatas",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.dataset","PROCEDURES"]}
                                                            }
                                                        
                                                    }
                                }
                },
            //Add new
            {
                $addFields:{
                                SEC4DRSIGN:{$arrayElemAt:
                                                    [{ 
                                                        $filter:{
                                                            input:"$attributes",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.attributename","SEC4DRSIGN"]}
                                                        }
                                                    },-1]
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4EXAMINATIONS:{ 
                                                        $filter:{
                                                            input:"$predefineddatas",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.dataset","EXAMINATIONS"]}
                                                        }
                                                    
                                                }
                            }
            },
            {
                $addFields:{
                    LABRESULTS:{ 
                                                        $filter:{
                                                            input:"$predefineddatas",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.dataset","LABRESULTS"]}
                                                        }
                                                    
                                                }
                            }
            },
            {
                $addFields:{
                    MEDICATIONHISTORY:{ 
                                                        $filter:{
                                                            input:"$predefineddatas",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.dataset","MEDICATIONHISTORY"]}
                                                        }
                                                    
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4RADIOLOGYRESULTS:{ 
                                                        $filter:{
                                                            input:"$predefineddatas",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.dataset","RADIOLOGYRESULTS"]}
                                                        }
                                                    
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4PHYRECORD:{$arrayElemAt:
                                                    [{ 
                                                        $filter:{
                                                            input:"$attributes",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.attributename","SEC4PHYRECORD"]}
                                                        }
                                                    },-1]
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4ULDISEASE:{$arrayElemAt:
                                                    [{ 
                                                        $filter:{
                                                            input:"$attributes",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.attributename","SEC4ULDISEASE"]}
                                                        }
                                                    },-1]
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4DX:{$arrayElemAt:
                                                    [{ 
                                                        $filter:{
                                                            input:"$attributes",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.attributename","SEC4DX"]}
                                                        }
                                                    },-1]
                                                }
                            }
            },
            {
                $addFields:{
                    SEC4ICD9DETAIL:{$arrayElemAt:
                                                    [{ 
                                                        $filter:{
                                                            input:"$attributes",
                                                            as:"vs",
                                                            cond:{$eq:["$$vs.attributename","SEC4ICD9DETAIL"]}
                                                        }
                                                    },-1]
                                                }
                            }
            },
            //Group
            {
                $group:{
                            _id: { patientvisituid: "$patientvisituid" }, 
                            HEADDEPTCODE: { "$push": "$departments.code" },
                            HEADDEPTNAME: { "$push": "$departments.name" },
                            HEADDRCODE: { "$push": "$careproviders.code" },
                            HEADDRNAME: { "$push": "$careproviders.name" },
                            HEADREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                            HEADREPORTFM: { "$push": "$reportconfigurations.documentno" },
                            IsDaycase:{"$push":"$IsDaycase.textvalue"},
                            ToInsurance:{"$push":"$ToInsurance.textvalue"},
                            Company:{"$push":"$Company.textvalue"},
                            HospitalAddress:{"$push":"$HospitalAddress.textvalue"},
                            HEADERADMITDATEDETAIL:{"$push":"$HEADERADMITDATEDETAIL.textvalue"},
                            HEADERADMITTIMEDETAIL:{"$push":"$HEADERADMITTIMEDETAIL.textvalue"},
                            HEADERDISCHARGE: { "$push": "$HEADERDISCHARGE.textvalue" },
                            SEC4PTNAMEDETAIL:{"$push":"$SEC4PTNAMEDETAIL.textvalue"},
                            SEC4HEADERHNDETAIL:{"$push":"$SEC4HEADERHNDETAIL.textvalue"},
                            SEC4HEADERENDETAIL:{"$push":"$SEC4HEADERENDETAIL.textvalue"},
                            SEC4FORILLNESSDATE:{"$push":"$SEC4FORILLNESSDATE.textvalue"},
                            SEC4FORILLNESSDATE2:{"$push":"$SEC4FORILLNESSDATE2.textvalue"},
                            SEC4OPINIONDETAIL:{"$push":"$SEC4OPINIONDETAIL.textvalue"},
                            SEC4PHYRECORD:{"$push":"$SEC4PHYRECORD.textvalue"},
                            SEC4ACCIDENTDATE:{"$push":"$SEC4ACCIDENTDATE.textvalue"},
                            SEC4SAWACCIDENTDATE:{"$push":"$SEC4SAWACCIDENTDATE.textvalue"},
                            SEC4CAUSE:{"$push":"$SEC4CAUSE.textvalue"},
                            SEC4IsALCOHOL:{"$push":"$SEC4IsALCOHOL.textvalue"},
                            SEC4ALCOHOLDETAIL:{"$push":"$SEC4ALCOHOLDETAIL.textvalue"},
                            SEC4STUDY:{"$push":"$SEC4STUDY.textvalue"},
                            SEC4TREATMENT:{"$push":"$SEC4TREATMENT.textvalue"},
                            SEC4RESULT:{"$push":"$SEC4RESULT.textvalue"},
                            SEC4ALCOHOLADDICT:{"$push":"$SEC4ALCOHOLADDICT.textvalue"},
                            SEC4ALCOHOLADDICTSPECDETAIL:{"$push":"$SEC4ALCOHOLADDICTSPECDETAIL.textvalue"},
                            SEC4PREGNANCY:{"$push":"$SEC4PREGNANCY.textvalue"},
                            SEC4PREGNANCYDETAIL:{"$push":"$SEC4PREGNANCYDETAIL.textvalue"},
                            SEC4INFERTILITY:{"$push":"$SEC4INFERTILITY.textvalue"},
                            SEC4INFERTILITYDETAIL:{"$push":"$SEC4INFERTILITYDETAIL.textvalue"},
                            SEC4HIV:{"$push":"$SEC4HIV.textvalue"},
                            SEC4HIVDETAIL:{"$push":"$SEC4HIVDETAIL.textvalue"},
                            SEC4PATIENTSIGNDETAIL:{"$push":"$SEC4PATIENTSIGNDETAIL.textvalue"},
                            SEC4TREATMENTDR:{"$push":"$SEC4TREATMENTDR.textvalue"},
                            SEC4PTADDRESS:{"$push":"$SEC4PTADDRESS.textvalue"},
                            SEC4PTMEDHISTORYDATEDETAIL:{"$push":"$SEC4PTMEDHISTORYDATEDETAIL.textvalue"},
                            SEC4PTMEDHISTORYSYMPTOMDETAIL:{"$push":"$SEC4PTMEDHISTORYSYMPTOMDETAIL.textvalue"},
                            SEC4PTMEDHISTORYDIAGDETAIL:{"$push":"$SEC4PTMEDHISTORYDIAGDETAIL.textvalue"},
                            SEC4PTMEDHISTORYTREATMENTDETAIL:{"$push":"$SEC4PTMEDHISTORYTREATMENTDETAIL.textvalue"},
                            SEC4PTMEDHISTORYPHYNAMEDETAIL:{"$push":"$SEC4PTMEDHISTORYPHYNAMEDETAIL.textvalue"},
                            SEC4ESTIMATEFORRECOVDETAIL:{"$push":"$SEC4ESTIMATEFORRECOVDETAIL.textvalue"},
                            SEC4OTHER:{"$push":"$SEC4OTHER.textvalue"},
                            SEC4PHYLIC:{"$push":"$SEC4PHYLIC.textvalue"},
                            SEC4DRSIGN:{"$push":"$SEC4DRSIGN.textvalue"},
                            SEC4PHYSPECIALTY:{"$push":"$SEC4PHYSPECIALTY.textvalue"},
                            SEC4PHYSIGNDATE:{"$push":"$SEC4PHYSIGNDATE.textvalue"},
                            SEC4ULDISEASE:{"$push":"$SEC4ULDISEASE.textvalue"},
                            SEC4DX:{"$push":"$SEC4DX.textvalue"},
                            SEC4ICD9DETAIL:{"$push":"$SEC4ICD9DETAIL.textvalue"},
                            SEC4HPIDUSYMPTOM:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4CHIEFCOMPLAINTS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","2.Chief complaint and duration of symptoms :"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4HPIFINDING:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4CHIEFCOMPLAINTS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Patient clinical finding (Symptom & signs) :"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4PRESENTILLNESS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4PRESENTILLNESS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Present illness"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4UL:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4DIAGNOSIS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Underlying disease"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ULTB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4DIAGNOSIS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Underlying disease"]}
                                                            }
                                                        },-1]
                                                    }},
                            LABRESULTS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$LABRESULTS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Investigations/pathological studies"]}
                                                            }
                                                        },-1]
                                                    }},
                            LABRESULTSTB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$LABRESULTS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Investigations/pathological studies"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ICD10:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4DIAGNOSIS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Diagnosis  ICD (10)"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ICD10TB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4DIAGNOSIS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Diagnosis  ICD (10)"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4MEDICINEORDERS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4MEDICINEORDERS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Treatment"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ORDERS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4ORDERS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Treatment"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4MEDICINEORDERSTB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4MEDICINEORDERS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Treatment"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ICD9:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4PROCEDURES",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Surgery/Operation ICD9/CPT"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4ICD9TB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4PROCEDURES",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Surgery/Operation ICD9/CPT"]}
                                                            }
                                                        },-1]
                                                    }},
                            MEDICATIONHISTORY:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$MEDICATIONHISTORY",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","The Patient 's Medical History"]}
                                                            }
                                                        },-1]
                                                    }},
                            MEDICATIONHISTORYTB:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$MEDICATIONHISTORY",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","The Patient 's Medical History"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4EXAMINATIONS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4EXAMINATIONS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Patient clinical finding (Symptom & signs) :"]}
                                                            }
                                                        },-1]
                                                    }},
                            SEC4RADIOLOGYRESULTS:{"$push":
                                                    {$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$SEC4RADIOLOGYRESULTS",
                                                                as:"vs",
                                                                cond:{$eq:["$$vs.sectionname","Investigations/pathological studies"]}
                                                            }
                                                        },-1]
                                                    }},
                                                }
            },
            //Project
            {
                $project:{
                    HEADDEPTCODE: { $arrayElemAt: ["$HEADDEPTCODE", -1] },
                    HEADDEPTNAME: { $arrayElemAt: ["$HEADDEPTNAME", -1] },
                    HEADDRCODE: { $arrayElemAt: ["$HEADDRCODE", -1] },
                    HEADDRNAME: { $arrayElemAt: ["$HEADDRNAME", -1] },
                    HEADREPORTTYPE: { $arrayElemAt: ["$HEADREPORTTYPE", -1] },
                    HEADREPORTFM: { $arrayElemAt: ["$HEADREPORTFM", -1] },
                    IsDaycase: { $arrayElemAt: ["$IsDaycase", -1]},
                    ToInsurance: { $arrayElemAt: ["$ToInsurance", -1]},
                    Company: { $arrayElemAt: ["$Company", -1]},
                            HospitalAddress: {
                                $arrayElemAt: [{ $arrayElemAt: ["$HospitalAddress", -1] }, -1]
                            },
                            HEADERADMITDATEDETAIL: {
                                $arrayElemAt: [{ $arrayElemAt: ["$HEADERADMITDATEDETAIL", -1] }, -1]
                            },
                            HEADERADMITTIMEDETAIL: {
                                $arrayElemAt: [{ $arrayElemAt: ["$HEADERADMITTIMEDETAIL", -1] }, -1]
                            },
                            HEADERDISCHARGE: {
                                $arrayElemAt: [{ $arrayElemAt: ["$HEADERDISCHARGE", -1] }, -1]
                            },
                            SEC4PTNAMEDETAIL:{$arrayElemAt:["$SEC4PTNAMEDETAIL",-1]},
                            SEC4HEADERHNDETAIL:{$arrayElemAt:["$SEC4HEADERHNDETAIL",-1]},
                            SEC4HEADERENDETAIL:{$arrayElemAt:["$SEC4HEADERENDETAIL",-1]},
                            SEC4FORILLNESSDATE:{$arrayElemAt:["$SEC4FORILLNESSDATE",-1]},
                            SEC4FORILLNESSDATE2:{$arrayElemAt:["$SEC4FORILLNESSDATE2",-1]},
                            SEC4OPINIONDETAIL:{$arrayElemAt:["$SEC4OPINIONDETAIL",-1]},
                            SEC4ACCIDENTDATE:{$arrayElemAt:["$SEC4ACCIDENTDATE",-1]},
                            SEC4SAWACCIDENTDATE:{$arrayElemAt:["$SEC4SAWACCIDENTDATE",-1]},
                            SEC4CAUSE:{$arrayElemAt:["$SEC4CAUSE",-1]},
                            SEC4IsALCOHOL:{$arrayElemAt:["$SEC4IsALCOHOL",-1]},
                            SEC4ALCOHOLDETAIL:{$arrayElemAt:["$SEC4ALCOHOLDETAIL",-1]},
                            SEC4STUDY:{$arrayElemAt:["$SEC4STUDY",-1]},
                            SEC4TREATMENT:{$arrayElemAt:["$SEC4TREATMENT",-1]},
                            SEC4RESULT:{$arrayElemAt:["$SEC4RESULT",-1]},
                            SEC4ALCOHOLADDICT:{$arrayElemAt:["$SEC4ALCOHOLADDICT",-1]},
                            SEC4ALCOHOLADDICTSPECDETAIL:{$arrayElemAt:["$SEC4ALCOHOLADDICTSPECDETAIL",-1]},
                            SEC4PREGNANCY:{$arrayElemAt:["$SEC4PREGNANCY",-1]},
                            SEC4PREGNANCYDETAIL:{$arrayElemAt:["$SEC4PREGNANCYDETAIL",-1]},
                            SEC4INFERTILITY:{$arrayElemAt:["$SEC4INFERTILITY",-1]},
                            SEC4INFERTILITYDETAIL:{$arrayElemAt:["$SEC4INFERTILITYDETAIL",-1]},
                            SEC4HIV:{$arrayElemAt:["$SEC4HIV",-1]},
                            SEC4HIVDETAIL:{$arrayElemAt:["$SEC4HIVDETAIL",-1]},
                            SEC4PATIENTSIGNDETAIL:{$arrayElemAt:["$SEC4PATIENTSIGNDETAIL",-1]},
                            SEC4TREATMENTDR:{$arrayElemAt:["$SEC4TREATMENTDR",-1]},
                            SEC4PTADDRESS:{$arrayElemAt:["$SEC4PTADDRESS",-1]},
                            SEC4PTMEDHISTORYDATEDETAIL:"$SEC4PTMEDHISTORYDATEDETAIL",
                            SEC4PTMEDHISTORYSYMPTOMDETAIL:{$arrayElemAt:["$SEC4PTMEDHISTORYSYMPTOMDETAIL",-1]},
                            SEC4PTMEDHISTORYDIAGDETAIL:{$arrayElemAt:["$SEC4PTMEDHISTORYDIAGDETAIL",-1]},
                            SEC4PTMEDHISTORYTREATMENTDETAIL:{$arrayElemAt:["$SEC4PTMEDHISTORYTREATMENTDETAIL",-1]},
                            SEC4PTMEDHISTORYPHYNAMEDETAIL:{$arrayElemAt:["$SEC4PTMEDHISTORYPHYNAMEDETAIL",-1]},
                            SEC4ESTIMATEFORRECOVDETAIL:{$arrayElemAt:["$SEC4ESTIMATEFORRECOVDETAIL",-1]},
                            SEC4OTHER:{$arrayElemAt:["$SEC4OTHER",-1]},
                            SEC4PHYRECORD:{$arrayElemAt:["$SEC4PHYRECORD",-1]},
                            SEC4PHYLIC:{$arrayElemAt:["$SEC4PHYLIC",-1]},
                            SEC4PHYSPECIALTY:{$arrayElemAt:["$SEC4PHYSPECIALTY",-1]},
                            SEC4PHYSIGNDATE:{$arrayElemAt:["$SEC4PHYSIGNDATE",-1]},
                            SEC4DRSIGN:{$arrayElemAt:["$SEC4DRSIGN",-1]},
                            SEC4HPIDUSYMPTOM:{$arrayElemAt:["$SEC4HPIDUSYMPTOM.htmldatavalue",-1]},
                            SEC4HPIFINDING:{$arrayElemAt:["$SEC4HPIFINDING.htmldatavalue",-1]},
                            SEC4PRESENTILLNESS:{$arrayElemAt:["$SEC4PRESENTILLNESS.htmldatavalue",-1]},
                            SEC4ULDISEASE:{$arrayElemAt:["$SEC4ULDISEASE",-1]},
                            SEC4UL:{$arrayElemAt:["$SEC4UL.htmldatavalue",-1]},
                            SEC4ULTB:"$SEC4ULTB.tabledata",
                            SEC4ULTBNAME:{$arrayElemAt:["$SEC4ULTB.tabledata.name",-1]},
                            SEC4ICD10:{$arrayElemAt:["$SEC4ICD10.htmldatavalue",-1]},
                            SEC4ICD10TB:"$SEC4ICD10TB.tabledata",
                            SEC4ICD10TBNAME:{$arrayElemAt:["$SEC4ICD10TB.tabledata.name",-1]},
                            SEC4MEDICINEORDERS:{$arrayElemAt:["$SEC4MEDICINEORDERS.htmldatavalue",-1]},
                            SEC4MEDICINEORDERSTB:"$SEC4MEDICINEORDERSTB.tabledata",
                            SEC4MEDICINEORDERSTBNAME:{$arrayElemAt:["$SEC4MEDICINEORDERS.tabledata.name",-1]},
                            SEC4ICD9:{$arrayElemAt:["$SEC4ICD9.htmldatavalue",-1]},
                            SEC4ICD9TB:"$SEC4ICD9TB.tabledata",
                            SEC4ICD9TBNAME:{$arrayElemAt:["$SEC4ICD9TB.tabledata.name",-1]},
                            SEC4EXAMINATIONSRT:{$arrayElemAt:["$SEC4EXAMINATIONS.richtextdata",-1]},
                            SEC4EXAMINATIONSTB:{$arrayElemAt:["$SEC4EXAMINATIONS.tabledata",-1]},
                            SEC4ICD9DETAIL:{$arrayElemAt:["$SEC4ICD9DETAIL",-1]},
                            SEC4DX:{$arrayElemAt:["$SEC4DX",-1]},
                            MEDICATIONHISTORY:{$arrayElemAt:["$MEDICATIONHISTORY.htmldatavalue",-1]},
                            MEDICATIONHISTORYTB:"$MEDICATIONHISTORYTB.tabledata",
                            LABRESULTS:{$arrayElemAt:["$LABRESULTS.htmldatavalue",-1]},
                            LABRESULTSTB:{$arrayElemAt:["$LABRESULTSTB.tabledata",-1]},
                            SEC4RADIOLOGYRESULTS:{$arrayElemAt:["$SEC4RADIOLOGYRESULTS.htmldatavalue",-1]},
                            SEC4RADIOLOGYRESULTSTB:{$arrayElemAt:["$SEC4RADIOLOGYRESULTS.tabledata",-1]},
                            SEC4RADIOLOGYRESULTSRT:{$arrayElemAt:["$SEC4RADIOLOGYRESULTS.richtextdata",-1]},
                            SEC4ORDERS:{$arrayElemAt:["$SEC4ORDERS.htmldatavalue",-1]},
                            SEC4ORDERSTB:{$arrayElemAt:["$SEC4ORDERS.tabledata",-1]},
                            SEC4ORDERRT:{$arrayElemAt:["$SEC4ORDERS.richtextdata",-1]},
                }   
            }
    ]).exec()
            result = resultIPDClaimformsP2
        } catch (error) {
            this.logger.error('findIPDClaimFormP2 error:', error);
        }
        return result;
    }
}
