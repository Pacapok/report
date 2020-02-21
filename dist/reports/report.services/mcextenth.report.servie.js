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
let MCEXTENTHReportService = class MCEXTENTHReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCEXTENTH(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMCEXTENTH = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RTCOMMON130TH"
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
                            HEADmcTHVisitDate: { $arrayElemAt: [{
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
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHBED"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHTitleEN: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHTitleEN"] }
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
                            DRNANE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHCareThai"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHSpace1"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCVisaTHTitleAddress: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHTitleAddress"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHPatientName"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHPTHN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsOPD: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHEN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsOPDDATE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHDateOPD"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsIPD: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHTextEN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsIPDDATEFROM: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHDateNowIPD"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsIPDDATETO: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHDateToCalendar"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCGenTHTypeofPatient: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHTypeofPatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    }, {
                        $addFields: {
                            MCGenTHOUTENcounter: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTENcounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    }, {
                        $addFields: {
                            MCGenTHOUTVisitid: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTVisitid"] }
                                        }
                                    }, -1]
                            }
                        }
                    }, {
                        $addFields: {
                            MCGenTHOUTdate: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTdate"] }
                                        }
                                    }, -1]
                            }
                        }
                    }, {
                        $addFields: {
                            MCGenTHINVisitEncounter: {
                                $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHINVisitEncounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    }, {
                        $addFields: {
                            MCGenTHANINpatient: {
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
                            MCGenTHdateIPD: {
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
                            MCGenTHdatetoIPD: {
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHTreatmentChkBox"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHProcedurthChkBox"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecomChkBox"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCVisaTHMoreDetail: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHMoreDetail"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHNumberDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            RECOMMTHDATIONDAY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHNumberDate"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecStartDate"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecEndDate"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHContinueChkBox"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecNumDate"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecDateFrom"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHRecDateTo"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHPatientNeedContinued"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHPatientCannotTravel"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHSignatureCareName"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaTHSpace13"] }
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
                            HEADmcDEPTCODE: { "$push": "$departments.code" },
                            HEADmcDEPTNAME: { "$push": "$departments.name" },
                            HEADmcDRCODE: { "$push": "$careproviders.code" },
                            HEADmcDRNAME: { "$push": "$careproviders.name" },
                            HEADmcREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                            HEADmcREPORTFM: { "$push": "$reportconfigurations.documentno" },
                            HEADmcTHPatientTitle: { "$push": "$HEADmcTHPatientTitleName.textvalue" },
                            HEADmcTHPatientName: { "$push": "$HEADmcTHPatientName.textvalue" },
                            HEADmcTHMRN: { "$push": "$HEADmcTHMRN.textvalue" },
                            HEADmcTHVisitDate: { "$push": "$HEADmcTHVisitDate.textvalue" },
                            HEADmcTHPatientBirthday: { "$push": "$HEADmcTHBirthday.textvalue" },
                            HEADmcTHPatientAge: { "$push": "$HEADmcTHPatientAge.textvalue" },
                            HEADmcTHPatientGender: { "$push": "$HEADmcTHGender.textvalue" },
                            HEADmcTHPatientDep: { "$push": "$HEADmcTHPatientDep.textvalue" },
                            HEADmcTHPatientBed: { "$push": "$HEADmcTHBED.textvalue" },
                            HEADmcTHTitleEN: { "$push": "$HEADmcTHTitleEN.textvalue" },
                            HEADmcTHPhysicianName: { "$push": "$HEADmcTHPhysicianName.textvalue" },
                            HEADmcTHLicenseNo: { "$push": "$HEADmcTHLicenseNo.textvalue" },
                            HEADmcTHAllergies: { "$push": "$HEADmcTHAllergies.textvalue" },
                            HEADERSIDEEFFECT: { "$push": "$HEADERSIDEEFFECT.textvalue" },
                            DRNANE: { "$push": "$DRNANE.textvalue" },
                            DRLIC: { "$push": "$DRLIC.textvalue" },
                            MCVisaTHTitleAddress: { "$push": "$MCVisaTHTitleAddress.textvalue" },
                            PTNAME: { "$push": "$PTNAME.textvalue" },
                            PTMRN: { "$push": "$PTMRN.textvalue" },
                            IsOPD: { "$push": "$IsOPD.textvalue" },
                            IsOPDDATE: { "$push": "$IsOPDDATE.textvalue" },
                            IsIPD: { "$push": "$IsIPD.textvalue" },
                            IsIPDDATE: { "$push": "$IsIPDDATE.textvalue" },
                            IsIPDDATEFROM: { "$push": "$IsIPDDATEFROM.textvalue" },
                            IsIPDDATETO: { "$push": "$IsIPDDATETO.textvalue" },
                            MCGenTHTypeofPatient: { "$push": "$MCGenTHTypeofPatient.textvalue" },
                            MCGenTHOUTENcounter: { "$push": "$MCGenTHOUTENcounter.textvalue" },
                            MCGenTHOUTVisitid: { "$push": "$MCGenTHOUTVisitid.textvalue" },
                            MCGenTHOUTdate: { "$push": "$MCGenTHOUTdate.textvalue" },
                            MCGenTHINVisitEncounter: { "$push": "$MCGenTHINVisitEncounter.textvalue" },
                            MCGenTHANINpatient: { "$push": "$MCGenTHANINpatient.textvalue" },
                            MCGenTHdateIPD: { "$push": "$MCGenTHdateIPD.textvalue" },
                            MCGenTHdatetoIPD: { "$push": "$MCGenTHdatetoIPD.textvalue" },
                            TREATMENT1: { "$push": "$TREATMENT1.textvalue" },
                            TREATMENT2: { "$push": "$TREATMENT2.textvalue" },
                            TREATMENT21: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 0] } },
                            TREATMENT22: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 1] } },
                            TREATMENT23: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", 2] } },
                            IsRECOMMENDATION1: { "$push": "$IsRECOMMENDATION1.textvalue" },
                            IsRECOMMENDATION2: { "$push": "$IsRECOMMENDATION2.textvalue" },
                            MCVisaTHMoreDetail: { "$push": "$MCVisaTHMoreDetail.textvalue" },
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
                                                cond: { $eq: ["$$vs.sectionname", "8"] }
                                            }
                                        }, -1]
                                } },
                        }
                    },
                    {
                        $project: {
                            HEADmcDEPTCODE: { $arrayElemAt: ["$HEADmcDEPTCODE", -1] },
                            HEADmcDEPTNAME: { $arrayElemAt: ["$HEADmcDEPTNAME", -1] },
                            HEADmcDRCODE: { $arrayElemAt: ["$HEADmcDRCODE", -1] },
                            HEADmcDRNAME: { $arrayElemAt: ["$HEADmcDRNAME", -1] },
                            HEADmcREPORTTYPE: { $arrayElemAt: ["$HEADmcREPORTTYPE", -1] },
                            HEADmcREPORTFM: { $arrayElemAt: ["$HEADmcREPORTFM", -1] },
                            HEADmcTHPatientTitle: { $arrayElemAt: ["$HEADmcTHPatientTitle", -1] },
                            HEADmcTHPatientName: { $arrayElemAt: ["$HEADmcTHPatientName", -1] },
                            HEADmcTHMRN: { $arrayElemAt: ["$HEADmcTHMRN", -1] },
                            HEADmcTHVisitDate: { $arrayElemAt: ["$HEADmcTHVisitDate", -1] },
                            HEADmcTHPatientBirthday: { $arrayElemAt: ["$HEADmcTHPatientBirthday", -1] },
                            HEADmcTHPatientAge: { $arrayElemAt: ["$HEADmcTHPatientAge", -1] },
                            HEADmcTHPatientGender: { $arrayElemAt: ["$HEADmcTHPatientGender", -1] },
                            HEADmcTHPatientDep: { $arrayElemAt: ["$HEADmcTHPatientDep", -1] },
                            HEADmcTHPatientBed: { $arrayElemAt: ["$HEADmcTHPatientBed", -1] },
                            HEADmcTHTitleEN: { $arrayElemAt: ["$HEADmcTHTitleEN", -1] },
                            HEADmcTHPhysicianName: { $arrayElemAt: ["$HEADmcTHPhysicianName", -1] },
                            HEADERSIDEEFFECT: { $arrayElemAt: ["$HEADERSIDEEFFECT", -1] },
                            HEADmcTHLicenseNo: { $arrayElemAt: ["$HEADmcTHLicenseNo", -1] },
                            HEADmcTHAllergies: { $arrayElemAt: ["$HEADmcTHAllergies", -1] },
                            DRNANE: { $arrayElemAt: ["$DRNANE", -1] },
                            DRLIC: { $arrayElemAt: ["$DRLIC", -1] },
                            MCVisaTHTitleAddress: { $arrayElemAt: ["$MCVisaTHTitleAddress", -1] },
                            PTNAME: { $arrayElemAt: ["$PTNAME", -1] },
                            PTMRN: { $arrayElemAt: ["$PTMRN", -1] },
                            IsOPD: { $arrayElemAt: ["$IsOPD", -1] },
                            IsOPDDATE: { $arrayElemAt: ["$IsOPDDATE", -1] },
                            IsIPD: { $arrayElemAt: ["$IsIPD", -1] },
                            IsIPDDATE: { $arrayElemAt: ["$IsIPDDATE", -1] },
                            IsIPDDATEFROM: { $arrayElemAt: ["$IsIPDDATEFROM", -1] },
                            IsIPDDATETO: { $arrayElemAt: ["$IsIPDDATETO", -1] },
                            MCGenTHTypeofPatient: { $arrayElemAt: ["$MCGenTHTypeofPatient", -1] },
                            MCGenTHOUTENcounter: { $arrayElemAt: ["$MCGenTHOUTENcounter", -1] },
                            MCGenTHOUTVisitid: { $arrayElemAt: ["$MCGenTHOUTVisitid", -1] },
                            MCGenTHOUTdate: { $arrayElemAt: ["$MCGenTHOUTdate", -1] },
                            MCGenTHINVisitEncounter: { $arrayElemAt: ["$MCGenTHINVisitEncounter", -1] },
                            MCGenTHANINpatient: { $arrayElemAt: ["$MCGenTHANINpatient", -1] },
                            MCGenTHdateIPD: { $arrayElemAt: ["$MCGenTHdateIPD", -1] },
                            MCGenTHdatetoIPD: { $arrayElemAt: ["$MCGenTHdatetoIPD", -1] },
                            TREATMENT1: { $arrayElemAt: ["$TREATMENT1", -1] },
                            TREATMENT2: { $arrayElemAt: ["$TREATMENT2", -1] },
                            TREATMENT2Treatment: { $arrayElemAt: ["$TREATMENT21", -1] },
                            TREATMENT2OR: { $arrayElemAt: ["$TREATMENT22", -1] },
                            TREATMENT2Other: { $arrayElemAt: ["$TREATMENT23", -1] },
                            IsRECOMMENDATION1: { $arrayElemAt: ["$IsRECOMMENDATION1", -1] },
                            IsRECOMMENDATION2: { $arrayElemAt: ["$IsRECOMMENDATION2", -1] },
                            MCVisaTHMoreDetail: { $arrayElemAt: ["$MCVisaTHMoreDetail", -1] },
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
                            DIAGNOSIS: { $arrayElemAt: ["$DIAGNOSIS.tabledata", -1] },
                            DIAGNOSIS2: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                            DOCTORRECOMMENDATION: { $arrayElemAt: ["$DOCTORRECOMMENDATION.richtextdata", -1] },
                        }
                    }
                ]).exec();
                result = resultfindMCEXTENTH;
            }
            catch (error) {
                this.logger.error('findMCEXTENTH error:', error);
            }
            return result;
        });
    }
};
MCEXTENTHReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCEXTENTHReportService);
exports.MCEXTENTHReportService = MCEXTENTHReportService;
//# sourceMappingURL=mcextenth.report.servie.js.map