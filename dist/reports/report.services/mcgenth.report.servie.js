"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const logger_1 = require("../../service/logger");
let MCGENTHReportService = class MCGENTHReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCGENTH(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMCGENTH = yield this.PatientformdetailsModel.aggregate([
                    {
                        $match: {
                            statusflag: "A",
                            orguid: new mongoose_1.Types.ObjectId(req.organisationuid),
                            patientformuid: new mongoose_1.Types.ObjectId(req.searchcriteria),
                            patientuid: new mongoose_1.Types.ObjectId(req.patientuid),
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
                            "formtemplates.code": "MEDICAL_CERTIFICATE_TH"
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
                            "patientforms.orguid": new mongoose_1.Types.ObjectId(req.organisationuid),
                            "patientforms._id": new mongoose_1.Types.ObjectId(req.searchcriteria),
                            "patientforms.patientuid": new mongoose_1.Types.ObjectId(req.patientuid),
                        }
                    },
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
                            "reportconfigurations.orguid": new mongoose_1.Types.ObjectId(req.organisationuid),
                            "reportconfigurations.reporttemplateuid": new mongoose_1.Types.ObjectId(req.reporttemplateuid)
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientTitleName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientTitleName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHMRN: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHMRN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientVisitDate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHVisitDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHBirthday: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientBirthday"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientAge: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientAge"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHGender: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientGender"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientDep: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientDep"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHBED: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientBed"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPhysicianName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPhysicianName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHLicenseNo: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHLicenseNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHAllergies: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHAllergies"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADERSIDEEFFECT: {
                                $arrayElemAt: [{
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
                            MCGenTHTitleAddress: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHTitleAddress"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            DRNANE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHCareThai"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            DRLIC: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHSpace1"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHPatientName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTMRN: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHPTHN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTENTypeO: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHTypeofPatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTEN: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTVisitid"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTOPDDate: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTdate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTTypeI: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHINVisitEncounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTVN: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHANINpatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTOPDDateFrom: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHdateIPD"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTOPDDateTo: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHdatetoIPD"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            TREATMENT1: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHTreatmentChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            TREATMENT2: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHProcedurthChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsRECOMMENDATION1: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecomChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsRECOMMENDATION2: { $arrayElemAt: [{
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
                            MCGenTHMoreDetail: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHMoreDetail"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            RECOMMENDATIONDAY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHNumberDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            RECOMMENDATIONDATEFROM: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecStartDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            RECOMMENDATIONDATETO: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecEndDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsEXTTH: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHContinueChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTTHDAY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecNumDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTTHDATEFROM: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecDateFrom"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTTHDATETO: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHRecDateTo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            CONTINUETREATMENT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHPatientNeedContinued"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            CANNOTTRAVEL: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHPatientCannotTravel"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PHYSIGNNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHSignatureCareName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PHYSIGNLIC: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHSpace13"] }
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
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            HEADmcTHDEPTCODE: { "$push": "$departments.code" },
                            HEADmcTHDEPTNAME: { "$push": "$departments.name" },
                            HEADmcTHDRCODE: { "$push": "$careproviders.code" },
                            HEADmcTHDRNAME: { "$push": "$careproviders.name" },
                            HEADmcTHREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                            HEADmcTHREPORTFM: { "$push": "$reportconfigurations.documentno" },
                            HEADmcTHPatientTitle: { "$push": "$HEADmcTHPatientTitleName.textvalue" },
                            HEADmcTHPatientName: { "$push": "$HEADmcTHPatientName.textvalue" },
                            HEADmcTHMRN: { "$push": "$HEADmcTHMRN.textvalue" },
                            HEADmcTHVisitDate: { "$push": "$HEADmcTHPatientVisitDate.textvalue" },
                            HEADmcTHPatientBirthday: { "$push": "$HEADmcTHBirthday.textvalue" },
                            HEADmcTHPatientAge: { "$push": "$HEADmcTHPatientAge.textvalue" },
                            HEADmcTHPatientGender: { "$push": "$HEADmcTHGender.textvalue" },
                            HEADmcTHPatientDep: { "$push": "$HEADmcTHPatientDep.textvalue" },
                            HEADmcTHPatientBed: { "$push": "$HEADmcTHBED.textvalue" },
                            HEADmcTHPhysicianName: { "$push": "$HEADmcTHPhysicianName.textvalue" },
                            HEADmcTHLicenseNo: { "$push": "$HEADmcTHLicenseNo.textvalue" },
                            HEADmcTHAllergies: { "$push": "$HEADmcTHAllergies.textvalue" },
                            HEADERSIDEEFFECT: { "$push": "$HEADERSIDEEFFECT.textvalue" },
                            MCGenTHTitleAddress: { "$push": "$MCGenTHTitleAddress.textvalue" },
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
                            TREATMENT2: { "$push": "$TREATMENT2.textvalue" },
                            TREATMENT21: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 0] } },
                            TREATMENT22: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 1] } },
                            TREATMENT23: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 2] } },
                            IsRECOMMENDATION1: { "$push": "$IsRECOMMENDATION1.textvalue" },
                            IsRECOMMENDATION2: { "$push": "$IsRECOMMENDATION2.textvalue" },
                            MCGenTHMoreDetail: { "$push": "$MCGenTHMoreDetail.textvalue" },
                            RECOMMENDATIONDAY: { "$push": "$RECOMMENDATIONDAY.textvalue" },
                            RECOMMENDATIONDATEFROM: { "$push": "$RECOMMENDATIONDATEFROM.textvalue" },
                            RECOMMENDATIONDATETO: { "$push": "$RECOMMENDATIONDATETO.textvalue" },
                            IsEXTTH: { "$push": "$IsEXTTH.textvalue" },
                            EXTTHDAY: { "$push": "$EXTTHDAY.textvalue" },
                            EXTTHDATEFROM: { "$push": "$EXTTHDATEFROM.textvalue" },
                            EXTTHDATETO: { "$push": "$EXTTHDATETO.textvalue" },
                            CONTINUETREATMENT: { "$push": "$CONTINUETREATMENT.textvalue" },
                            CONTINUETREATMENTDETAIL: { "$push": { $arrayElemAt: ["$CONTINUETREATMENT.actualvalue.additionalvalue", -1] } },
                            CANNOTTRAVEL: { "$push": "$CANNOTTRAVEL.textvalue" },
                            CANNOTTRAVELDETAIL: { "$push": { $arrayElemAt: ["$CANNOTTRAVEL.actualvalue.additionalvalue", 0] } },
                            ACCOMPANYDETAIL: { "$push": { $arrayElemAt: ["$CANNOTTRAVEL.actualvalue.additionalvalue", 1] } },
                            PHYSIGNNAME: { "$push": "$PHYSIGNNAME.textvalue" },
                            PHYSIGNLIC: { "$push": "$PHYSIGNLIC.textvalue" },
                            CHIEFCOMPLAINTS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$CHIEFCOMPLAINTS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "5"] }
                                            }
                                        }, -1]
                                } },
                            DIAGNOSIS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DIAGNOSIS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "6"] }
                                            }
                                        }, -1]
                                } },
                            DOCTORRECOMMENDATION: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DOCTORRECOMMENDATION",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "9"] }
                                            }
                                        }, -1]
                                } },
                        }
                    },
                    {
                        $project: {
                            HEADmcTHDEPTCODE: { $arrayElemAt: ["$HEADmcTHDEPTCODE", -1] },
                            HEADmcTHDEPTNAME: { $arrayElemAt: ["$HEADmcTHDEPTNAME", -1] },
                            HEADmcTHDRCODE: { $arrayElemAt: ["$HEADmcTHDRCODE", -1] },
                            HEADmcTHDRNAME: { $arrayElemAt: ["$HEADmcTHDRNAME", -1] },
                            HEADmcTHREPORTTYPE: { $arrayElemAt: ["$HEADmcTHREPORTTYPE", -1] },
                            HEADmcTHREPORTFM: { $arrayElemAt: ["$HEADmcTHREPORTFM", -1] },
                            HEADmcTHPatientTitle: { $arrayElemAt: ["$HEADmcTHPatientTitle", -1] },
                            HEADmcTHPatientName: { $arrayElemAt: ["$HEADmcTHPatientName", -1] },
                            HEADmcTHMRN: { $arrayElemAt: ["$HEADmcTHMRN", -1] },
                            HEADmcTHVisitDate: { $arrayElemAt: ["$HEADmcTHVisitDate", -1] },
                            HEADmcTHPatientBirthday: { $arrayElemAt: ["$HEADmcTHPatientBirthday", -1] },
                            HEADmcTHPatientAge: { $arrayElemAt: ["$HEADmcTHPatientAge", -1] },
                            HEADmcTHPatientGender: { $arrayElemAt: ["$HEADmcTHPatientGender", -1] },
                            HEADmcTHPatientDep: { $arrayElemAt: ["$HEADmcTHPatientDep", -1] },
                            HEADmcTHPatientBed: { $arrayElemAt: ["$HEADmcTHPatientBed", -1] },
                            HEADmcTHPhysicianName: { $arrayElemAt: ["$HEADmcTHPhysicianName", -1] },
                            HEADmcTHLicenseNo: { $arrayElemAt: ["$HEADmcTHLicenseNo", -1] },
                            HEADmcTHAllergies: { $arrayElemAt: ["$HEADmcTHAllergies", -1] },
                            HEADERSIDEEFFECT: { $arrayElemAt: ["$HEADERSIDEEFFECT", -1] },
                            MCGenTHTitleAddress: { $arrayElemAt: ["$MCGenTHTitleAddress", -1] },
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
                            TREATMENT2: { $arrayElemAt: ["$TREATMENT2", -1] },
                            TREATMENT2Treatment: { $arrayElemAt: ["$TREATMENT21", -1] },
                            TREATMENT2OR: { $arrayElemAt: ["$TREATMENT22", -1] },
                            TREATMENT2Other: { $arrayElemAt: ["$TREATMENT23", -1] },
                            IsRECOMMENDATION1: { $arrayElemAt: ["$IsRECOMMENDATION1", -1] },
                            IsRECOMMENDATION2: { $arrayElemAt: ["$IsRECOMMENDATION2", -1] },
                            MCGenTHMoreDetail: { $arrayElemAt: ["$MCGenTHMoreDetail", -1] },
                            RECOMMENDATIONDAY: { $arrayElemAt: ["$RECOMMENDATIONDAY", -1] },
                            RECOMMENDATIONDATEFROM: { $arrayElemAt: ["$RECOMMENDATIONDATEFROM", -1] },
                            RECOMMENDATIONDATETO: { $arrayElemAt: ["$RECOMMENDATIONDATETO", -1] },
                            IsEXTTH: { $arrayElemAt: ["$IsEXTTH", -1] },
                            EXTTHDAY: { $arrayElemAt: ["$EXTTHDAY", -1] },
                            EXTTHDATEFROM: { $arrayElemAt: ["$EXTTHDATEFROM", -1] },
                            EXTTHDATETO: { $arrayElemAt: ["$EXTTHDATETO", -1] },
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
                ]).exec();
                result = resultfindMCGENTH;
            }
            catch (error) {
                this.logger.error('findMCEXTENTH error:', error);
            }
            return result;
        });
    }
};
MCGENTHReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCGENTHReportService);
exports.MCGENTHReportService = MCGENTHReportService;
//# sourceMappingURL=mcgenth.report.servie.js.map