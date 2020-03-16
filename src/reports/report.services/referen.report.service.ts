import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {REFERReq} from '../../models/referreq';
import { from } from 'rxjs';


@Injectable()
export class REFERENReportService implements REFERENReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//Referal Report
    async findREFEREN(req: REFERReq): Promise<any> {
    let result = [];
    try {
        const resultfindREFEREN = await this.PatientformdetailsModel.aggregate([
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
                $match: {
                    "formtemplates.code": "FM_REFER_EN"
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
                $addFields:
                {
                    FormSection: "$patientformsformsections"
                }
            },
            {
                $addFields:
                {
                    FormSection2: { $arrayElemAt: ["$FormSection", 0] }
                }
            },
            {
                $addFields: {
                    HEADERPTPIC: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$FormSection2.attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.patientdataset", "Patient.Patient Image"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                    $addFields:{
                    HEADERPTTITLE:{$arrayElemAt:
                                                        [{ 
                                                            $filter:{
                                                                input:"$attributes",
                                                                as:"vs",
                                                                cond: { $eq: ["$$vs.attributename","HEADERPTTITLE"]}
                                                            }
                                                        },-1]
                                                    }
                                }
                },
            {
                $addFields: {
                    HEADERPTNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERPTNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERPTNATIONALITY: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERPTNATIONALITY"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERDOB: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERDOB"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERHN: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERHN"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERPTAGE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERPTAGE"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERPTGENDER: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERPTGENDER"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERDEPT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERDEPT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERWARD: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERWARD"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERROOM: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERROOM"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERPTVISITDATE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERPTVISITDATE"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERDRNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERDRNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERDRLIC: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERDRLIC"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HEADERALLERGY: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERALLERGY"] }
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
            {
                $addFields: {
                    REFERTODRNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "REFERTODRNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    TRANSFERHOSPNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "TRANSFERHOSPNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HOSPCONTACTPERSONNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HOSPCONTACTPERSONNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    HOSPCONTACTPERSONPOSITION: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HOSPCONTACTPERSONPOSITION"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    CCFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "CCFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PRESENTILLNESSFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "PRESENTILLNESSFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    PASTMEDHISTORYFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "PASTMEDHISTORYFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSTEMP: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSTEMP"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSPR: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSPR"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSSBP: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSSBP"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSDBP: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSDBP"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSRR: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSRR"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSO2: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSO2"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSPAINTOOL: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSPAINTOOL"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    VSPAINSCORE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "VSPAINSCORE"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    EXAMINATIONFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "EXAMINATIONFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    INVESTIGATIONFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "INVESTIGATIONFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DIAGNOSTICFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DIAGNOSTICFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    TREATMENTFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "TREATMENTFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    RECOMMENTFREETEXT: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "RECOMMENTFREETEXT"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    REASONTRANSFER1: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "REASON1"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    REASONTRANSFER2: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "REASON2"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    REASONTRANSFER3: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "REASON3"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRSIGNNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DRSIGNNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRSIGNPRINTNAME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DRSIGNPRINTNAME"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRSIGNLIC: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DRSIGNLIC"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRSIGNDATE: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DRSIGNDATE"] }
                                }
                            }, -1]
                    }
                }
            },
            {
                $addFields: {
                    DRSIGNTME: {
                        $arrayElemAt:
                            [{
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DRSIGNTME"] }
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
                    PRESENTILLNESS: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "PRESENTILLNESS"] }
                        }

                    }
                }
            },
            {
                $addFields: {
                    PASTHISTORY: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "PASTHISTORY"] }
                        }

                    }
                }
            },
            {
                $addFields: {
                    EXAMINATIONS: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "EXAMINATIONS"] }
                        }

                    }
                }
            },
            {
                $addFields: {
                    LABRESULTS: {
                        $filter: {
                            input: "$predefineddatas",
                            as: "vs",
                            cond: { $eq: ["$$vs.dataset", "LABRESULTS"] }
                        }

                    }
                }
            },
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
                $group:{
                    _id:{patientvisituid:"$patientvisituid"},
                    HEADERPTPIC: { "$push": "$HEADERPTPIC.datavalue" },
                    HEADERPTTITLE: { "$push": "$HEADERPTTITLE.textvalue" },
                    HEADERPTNAME: { "$push": "$HEADERPTNAME.textvalue" },
                    HEADERPTNATIONALITY: { "$push": "$HEADERPTNATIONALITY.textvalue" },
                    HEADERDOB: { "$push": "$HEADERDOB.textvalue" },
                    HEADERHN: { "$push": "$HEADERHN.textvalue" },
                    HEADERPTAGE: { "$push": "$HEADERPTAGE.textvalue" },
                    HEADERPTGENDER: { "$push": "$HEADERPTGENDER.textvalue" },
                    HEADERDEPT: { "$push": "$HEADERDEPT.textvalue" },
                    HEADERWARD: { "$push": "$HEADERWARD.textvalue" },
                    HEADERROOM: { "$push": "$HEADERROOM.textvalue" },
                    HEADERPTVISITDATE: { "$push": "$HEADERPTVISITDATE.textvalue" },
                    HEADERDRNAME: { "$push": "$HEADERDRNAME.textvalue" },
                    HEADERDRLIC: { "$push": "$HEADERDRLIC.textvalue" },
                    HEADERALLERGY: { "$push": "$HEADERALLERGY.textvalue" },
                    HEADERSIDEEFFECT: { "$push": "$HEADERSIDEEFFECT.textvalue" },
                    REFERTODRNAME: { "$push": "$REFERTODRNAME.textvalue" },
                    TRANSFERHOSPNAME: { "$push": "$TRANSFERHOSPNAME.textvalue" },
                    HOSPCONTACTPERSONNAME: { "$push": "$HOSPCONTACTPERSONNAME.textvalue" },
                    HOSPCONTACTPERSONPOSITION: { "$push": "$HOSPCONTACTPERSONPOSITION.textvalue" },
                    CCFREETEXT: { "$push": "$CCFREETEXT.textvalue" },
                    PRESENTILLNESSFREETEXT: { "$push": "$PRESENTILLNESSFREETEXT.textvalue" },
                    PASTMEDHISTORYFREETEXT: { "$push": "$PASTMEDHISTORYFREETEXT.textvalue" },
                    VSTEMP: { "$push": "$VSTEMP.textvalue" },
                    VSPR: { "$push": "$VSPR.textvalue" },
                    VSSBP: { "$push": "$VSSBP.textvalue" },
                    VSDBP: { "$push": "$VSDBP.textvalue" },
                    VSRR: { "$push": "$VSRR.textvalue" },
                    VSO2: { "$push": "$VSO2.textvalue" },
                    VSPAINTOOL: { "$push": "$VSPAINTOOL.textvalue" },
                    VSPAINSCORE: { "$push": "$VSPAINSCORE.textvalue" },
                    EXAMINATIONFREETEXT: { "$push": "$EXAMINATIONFREETEXT.textvalue" },
                    INVESTIGATIONFREETEXT: { "$push": "$INVESTIGATIONFREETEXT.textvalue" },
                    DIAGNOSTICFREETEXT: { "$push": "$DIAGNOSTICFREETEXT.textvalue" },
                    TREATMENTFREETEXT: { "$push": "$TREATMENTFREETEXT.textvalue" },
                    RECOMMENTFREETEXT: { "$push": "$RECOMMENTFREETEXT.textvalue" },
                    REASONTRANSFER1: { "$push": "$REASONTRANSFER1.textvalue" },
                    REASONTRANSFER2: { "$push": "$REASONTRANSFER2.textvalue" },
                    REASONTRANSFER3: { "$push": "$REASONTRANSFER3.textvalue" },
                    REASONTRANSFER1text: { "$push": { $arrayElemAt: ["$REASONTRANSFER1.actualvalue.additionalvalue", -1] } },
                    REASONTRANSFER2text: { "$push": { $arrayElemAt: ["$REASONTRANSFER2.actualvalue.additionalvalue", -1] } },
                    REASONTRANSFER3text: {"$push": { $arrayElemAt: ["$REASONTRANSFER3.actualvalue.additionalvalue", -1] } },
                    ANOTHERHOSP: { "$push": { $arrayElemAt: ["$REASONTRANSFER.actualvalue.additionalvalue", 0] } },
                    MEDICINEBENEFITS: { "$push": { $arrayElemAt: ["$REASONTRANSFER.actualvalue.additionalvalue", 1] } },
                    OTHERSPECIFY: { "$push": { $arrayElemAt: ["$REASONTRANSFER.actualvalue.additionalvalue", 2] } },
                    DRSIGNNAME: { "$push": "$DRSIGNNAME.textvalue" },
                    DRSIGNPRINTNAME: { "$push": "$DRSIGNPRINTNAME.textvalue" },
                    DRSIGNLIC: { "$push": "$DRSIGNLIC.textvalue" },
                    DRSIGNDATE: { "$push": "$DRSIGNDATE.textvalue" },
                    DRSIGNTME: { "$push": "$DRSIGNTME.textvalue" },
                    CHIEFCOMPLAINTS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$CHIEFCOMPLAINTS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Chief Complaints"] }
                                    }
                                }, -1]
                        }
                    },
                    PRESENTILLNESS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$PRESENTILLNESS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Present and Past History"] }
                                    }
                                }, -1]
                        }
                    },
                    PASTHISTORY: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$PASTHISTORY",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Past Medical History"] }
                                    }
                                }, -1]
                        }
                    },
                    EXAMINATIONS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$EXAMINATIONS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Physician Examination"] }
                                    }
                                }, -1]
                        }
                    },
                    LABRESULTS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$LABRESULTS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Laboratory and Other Investigations:"] }
                                    }
                                }, -1]
                        }
                    },
                    RADIOLOGYRESULTS: {
                        "$push":
                        {
                            $arrayElemAt:
                                [{
                                    $filter: {
                                        input: "$RADIOLOGYRESULTS",
                                        as: "vs",
                                        cond: { $eq: ["$$vs.sectionname", "Diagnostics results"] }
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
                                        cond: { $eq: ["$$vs.sectionname", "Diagnosis"] }
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
                                        cond: { $eq: ["$$vs.sectionname", "DiagRecommendations/Further Plannosis"] }
                                    }
                                }, -1]
                        }
                    },
                }
            },
            // //Project
            {
                $project:{
                    HEADERPTPIC: { $arrayElemAt: ["$HEADERPTPIC", -1] },
                    HEADERPTTITLE: { $arrayElemAt: ["$HEADERPTTITLE",-1]},
                    HEADERPTNAME: { $arrayElemAt: ["$HEADERPTNAME", -1] },
                    HEADERPTNATIONALITY: { $arrayElemAt: ["$HEADERPTNATIONALITY", -1] },
                    HEADERDOB: { $arrayElemAt: ["$HEADERDOB", -1] },
                    HEADERHN: { $arrayElemAt: ["$HEADERHN", -1] },
                    HEADERPTAGE: { $arrayElemAt: ["$HEADERPTAGE", -1] },
                    HEADERPTGENDER: { $arrayElemAt: ["$HEADERPTGENDER", -1] },
                    HEADERDEPT: { $arrayElemAt: ["$HEADERDEPT", -1] },
                    HEADERWARD: { $arrayElemAt: ["$HEADERWARD", -1] },
                    HEADERROOM: { $arrayElemAt: ["$HEADERROOM", -1] },
                    HEADERPTVISITDATE: { $arrayElemAt: ["$HEADERPTVISITDATE", -1] },
                    HEADERDRNAME: { $arrayElemAt: ["$HEADERDRNAME", -1] },
                    HEADERDRLIC: { $arrayElemAt: ["$HEADERDRLIC", -1] },
                    HEADERALLERGY: { $arrayElemAt: ["$HEADERALLERGY", -1] },
                    HEADERSIDEEFFECT: { $arrayElemAt: ["$HEADERSIDEEFFECT", -1] },
                    REFERTODRNAME: { $arrayElemAt: ["$REFERTODRNAME", -1] },
                    TRANSFERHOSPNAME: { $arrayElemAt: ["$TRANSFERHOSPNAME", -1] },
                    HOSPCONTACTPERSONNAME: { $arrayElemAt: ["$HOSPCONTACTPERSONNAME", -1] },
                    HOSPCONTACTPERSONPOSITION: { $arrayElemAt: ["$HOSPCONTACTPERSONPOSITION", -1] },
                    CCFREETEXT: { $arrayElemAt: ["$CCFREETEXT", -1] },
                    PRESENTILLNESSFREETEXT: { $arrayElemAt: ["$PRESENTILLNESSFREETEXT", -1] },
                    PASTMEDHISTORYFREETEXT: { $arrayElemAt: ["$PASTMEDHISTORYFREETEXT", -1] },
                    VSTEMP: { $arrayElemAt: ["$VSTEMP", -1] },
                    VSPR: { $arrayElemAt: ["$VSPR", -1] },
                    VSSBP: { $arrayElemAt: ["$VSSBP", -1] },
                    VSDBP: { $arrayElemAt: ["$VSDBP", -1] },
                    VSRR: { $arrayElemAt: ["$VSRR", -1] },
                    VSO2: { $arrayElemAt: ["$VSO2", -1] },
                    VSPAINTOOL: { $arrayElemAt: ["$VSPAINTOOL", -1] },
                    VSPAINSCORE: { $arrayElemAt: ["$VSPAINSCORE", -1] },
                    EXAMINATIONFREETEXT: { $arrayElemAt: ["$EXAMINATIONFREETEXT", -1] },
                    INVESTIGATIONFREETEXT: { $arrayElemAt: ["$INVESTIGATIONFREETEXT", -1] },
                    DIAGNOSTICFREETEXT: { $arrayElemAt: ["$DIAGNOSTICFREETEXT", -1] },
                    TREATMENTFREETEXT: { $arrayElemAt: ["$TREATMENTFREETEXT", -1] },
                    RECOMMENTFREETEXT: { $arrayElemAt: ["$RECOMMENTFREETEXT", -1] },
                    REASONTRANSFER1: { $arrayElemAt: ["$REASONTRANSFER1", -1] },
                    REASONTRANSFER2: { $arrayElemAt: ["$REASONTRANSFER2", -1] },
                    REASONTRANSFER3: { $arrayElemAt: ["$REASONTRANSFER3", -1] },
                    REASONTRANSFER1text: { $arrayElemAt: ["$REASONTRANSFER1text", -1] },
                    REASONTRANSFER2text: { $arrayElemAt: ["$REASONTRANSFER2text", -1] },
                    REASONTRANSFER3text: { $arrayElemAt: ["$REASONTRANSFER3text", -1] },
                    ANOTHERHOSP: { $arrayElemAt: ["$ANOTHERHOSP", -1] },
                    MEDICINEBENEFITS: { $arrayElemAt: ["$MEDICINEBENEFITS", -1] },
                    OTHERSPECIFY: { $arrayElemAt: ["$OTHERSPECIFY", -1] },
                    DRSIGNNAME: { $arrayElemAt: ["$DRSIGNNAME", -1] },
                    DRSIGNPRINTNAME: { $arrayElemAt: ["$DRSIGNPRINTNAME", -1] },
                    DRSIGNLIC: { $arrayElemAt: ["$DRSIGNLIC", -1] },
                    DRSIGNDATE: { $arrayElemAt: ["$DRSIGNDATE", -1] },
                    DRSIGNTME: { $arrayElemAt: ["$DRSIGNTME", -1] },
                    CHIEFCOMPLAINTS: { $arrayElemAt: ["$CHIEFCOMPLAINTS.htmldatavalue", -1] },
                    CHIEFCOMPLAINTSTB: "$CHIEFCOMPLAINTS.tabledata",
                    CHIEFCOMPLAINTSRT: { $arrayElemAt: ["$CHIEFCOMPLAINTS.richtextdata", -1] },
                    PRESENTILLNESS: { $arrayElemAt: ["$PRESENTILLNESS.htmldatavalue", -1] },
                    PRESENTILLNESSTB: "$PRESENTILLNESS.tabledata",
                    PRESENTILLNESSRT: { $arrayElemAt: ["$PRESENTILLNESS.richtextdata", -1] },
                    PASTHISTORY: { $arrayElemAt: ["$PASTHISTORY.htmldatavalue", -1] },
                    PASTHISTORYTB: "$PASTHISTORY.tabledata",
                    PASTHISTORYRT: { $arrayElemAt: ["$PASTHISTORY.richtextdata", -1] },
                    EXAMINATIONS: { $arrayElemAt: ["$EXAMINATIONS.htmldatavalue", -1] },
                    EXAMINATIONSTB: "$EXAMINATIONS.tabledata",
                    EXAMINATIONSRT: { $arrayElemAt: ["$EXAMINATIONS.richtextdata", -1] },
                    LABRESULTS: { $arrayElemAt: ["$LABRESULTS.htmldatavalue", -1] },
                    LABRESULTSTB: {$arrayElemAt: ["$LABRESULTS.tabledata", -1]},
                    LABRESULTSRT: { $arrayElemAt: ["$LABRESULTS.richtextdata", -1] },
                    RADIOLOGYRESULTS: { $arrayElemAt: ["$RADIOLOGYRESULTS.htmldatavalue", -1] },
                    RADIOLOGYRESULTSTB: "$RADIOLOGYRESULTS.tabledata",
                    RADIOLOGYRESULTSRT: { $arrayElemAt: ["$RADIOLOGYRESULTS.richtextdata", -1] },
                    DIAGNOSIS: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                    DIAGNOSISTB: {$arrayElemAt: ["$DIAGNOSIS.tabledata", -1]},
                    DIAGNOSISRT: { $arrayElemAt: ["$DIAGNOSIS.richtextdata", -1] },
                    // DIAGNOSIS: "$DIAGNOSIS",
                    DOCTORRECOMMENDATION: { $arrayElemAt: ["$DOCTORRECOMMENDATION.htmldatavalue", -1] },
                    DOCTORRECOMMENDATIONTB: "$DOCTORRECOMMENDATION.tabledata",
                    DOCTORRECOMMENDATIONRT: { $arrayElemAt: ["$DOCTORRECOMMENDATION.richtextdata", -1] },

                 }   
            }
        ]).exec()
        result = resultfindREFEREN
    } catch (error) {
        this.logger.error('findREFEREN error:', error);
    }
    return result;
}

}
