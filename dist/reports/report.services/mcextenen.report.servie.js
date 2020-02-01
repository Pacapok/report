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
let MCEXTENENReportService = class MCEXTENENReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCEXTENEN(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMCEXTENEN = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RTCOMMON130EN"
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
                        $addFields: {
                            HEADmcENPatientTitleName: { $arrayElemAt: [{
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
                            HEADmcENPatientName: { $arrayElemAt: [{
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
                            HEADmcENMRN: { $arrayElemAt: [{
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
                            HEADmcENPatientVisitDate: { $arrayElemAt: [{
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
                            HEADmcENBirthday: { $arrayElemAt: [{
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
                            HEADmcENPatientAge: { $arrayElemAt: [{
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
                            HEADmcENGender: { $arrayElemAt: [{
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
                            HEADmcENPatientDep: { $arrayElemAt: [{
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
                            HEADmcENBED: { $arrayElemAt: [{
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
                            HEADmcENPhysicianName: { $arrayElemAt: [{
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
                            HEADmcENLicenseNo: { $arrayElemAt: [{
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
                            HEADmcENAllergies: { $arrayElemAt: [{
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
                            DRNANE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDrName"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENCareID"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENPTname"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENPTHN"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENEN"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateTO"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENAN"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateTo2"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateFrom3"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENMed"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENProcedure"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            TREATMENT3: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENSurgery"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            TREATMENT4: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENOther"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDrChRec"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENReccommen"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCVisaENMoreDetail: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENMoreDetail"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateFromTo"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateFromTo"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateFrom4"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDateTo4"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsEXTEN: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENTraetmentFor"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTENDAY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENSelectDay"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTENDATEFROM: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENFrom5"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            EXTENDATETO: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENTo5"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENConMed"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENCannotTravel"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENprintname"] }
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
                                            cond: { $eq: ["$$vs.attributename", "MCVisaENDoclic"] }
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
                            HEADmcENPatientTitle: { "$push": "$HEADmcENPatientTitleName.textvalue" },
                            HEADmcENPatientName: { "$push": "$HEADmcENPatientName.textvalue" },
                            HEADmcENMRN: { "$push": "$HEADmcENMRN.textvalue" },
                            HEADmcENVisitDate: { "$push": "$HEADmcENPatientVisitDate.textvalue" },
                            HEADmcENPatientBirENday: { "$push": "$HEADmcENBirthday.textvalue" },
                            HEADmcENPatientAge: { "$push": "$HEADmcENPatientAge.textvalue" },
                            HEADmcENPatientGender: { "$push": "$HEADmcENGender.textvalue" },
                            HEADmcENPatientDep: { "$push": "$HEADmcENPatientDep.textvalue" },
                            HEADmcENPatientBed: { "$push": "$HEADmcENBED.textvalue" },
                            HEADmcENPhysicianName: { "$push": "$HEADmcENPhysicianName.textvalue" },
                            HEADmcENLicenseNo: { "$push": "$HEADmcENLicenseNo.textvalue" },
                            HEADmcENAllergies: { "$push": "$HEADmcENAllergies.textvalue" },
                            DRNANE: { "$push": "$DRNANE.textvalue" },
                            DRLIC: { "$push": "$DRLIC.textvalue" },
                            PTNAME: { "$push": "$PTNAME.textvalue" },
                            PTMRN: { "$push": "$PTMRN.textvalue" },
                            IsOPD: { "$push": "$IsOPD.textvalue" },
                            IsOPDDATE: { "$push": "$IsOPDDATE.textvalue" },
                            IsIPD: { "$push": "$IsIPD.textvalue" },
                            IsIPDDATE: { "$push": "$IsIPDDATE.textvalue" },
                            IsIPDDATEFROM: { "$push": "$IsIPDDATEFROM.textvalue" },
                            IsIPDDATETO: { "$push": "$IsIPDDATETO.textvalue" },
                            TREATMENT1: { "$push": "$TREATMENT1.textvalue" },
                            TREATMENT2: { "$push": "$TREATMENT2.textvalue" },
                            TREATMENT2DETAIL: { "$push": { $arrayElemAt: ["$TREATMENT2.actualvalue.additionalvalue", -1] } },
                            TREATMENT3: { "$push": "$TREATMENT3.textvalue" },
                            TREATMENT3DETAIL: { "$push": { $arrayElemAt: ["$TREATMENT3.actualvalue.additionalvalue", -1] } },
                            TREATMENT4: { "$push": "$TREATMENT4.textvalue" },
                            TREATMENT4DETAIL: { "$push": { $arrayElemAt: ["$TREATMENT4.actualvalue.additionalvalue", -1] } },
                            IsRECOMMENDATION1: { "$push": "$IsRECOMMENDATION1.textvalue" },
                            IsRECOMMENDATION2: { "$push": "$IsRECOMMENDATION2.textvalue" },
                            MCVisaENMoreDetail: { "$push": "$MCVisaENMoreDetail.textvalue" },
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
                            CHIEFCOMPLAINTS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$CHIEFCOMPLAINTS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "5"] }
                                            }
                                        }, -1]
                                }
                            },
                            DIAGNOSIS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DIAGNOSIS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "6"] }
                                            }
                                        }, -1]
                                }
                            },
                            DOCTORRECOMMENDATION: { "$push": { $arrayElemAt: [{
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
                    {
                        $project: {
                            HEADmcENPatientTitle: { $arrayElemAt: ["$HEADmcENPatientTitle", -1] },
                            HEADmcENPatientName: { $arrayElemAt: ["$HEADmcENPatientName", -1] },
                            HEADmcENMRN: { $arrayElemAt: ["$HEADmcENMRN", -1] },
                            HEADmcENVisitDate: { $arrayElemAt: ["$HEADmcENVisitDate", -1] },
                            HEADmcENPatientBirENday: { $arrayElemAt: ["$HEADmcENPatientBirENday", -1] },
                            HEADmcENPatientAge: { $arrayElemAt: ["$HEADmcENPatientAge", -1] },
                            HEADmcENPatientGender: { $arrayElemAt: ["$HEADmcENPatientGender", -1] },
                            HEADmcENPatientDep: { $arrayElemAt: ["$HEADmcENPatientDep", -1] },
                            HEADmcENPatientBed: { $arrayElemAt: ["$HEADmcENPatientBed", -1] },
                            HEADmcENPhysicianName: { $arrayElemAt: ["$HEADmcENPhysicianName", -1] },
                            HEADmcENLicenseNo: { $arrayElemAt: ["$HEADmcENLicenseNo", -1] },
                            HEADmcENAllergies: { $arrayElemAt: ["$HEADmcENAllergies", -1] },
                            DRNANE: { $arrayElemAt: ["$DRNANE", -1] },
                            DRLIC: { $arrayElemAt: ["$DRLIC", -1] },
                            PTNAME: { $arrayElemAt: ["$PTNAME", -1] },
                            PTMRN: { $arrayElemAt: ["$PTMRN", -1] },
                            IsOPD: { $arrayElemAt: ["$IsOPD", -1] },
                            IsOPDDATE: { $arrayElemAt: ["$IsOPDDATE", -1] },
                            IsIPD: { $arrayElemAt: ["$IsIPD", -1] },
                            IsIPDDATE: { $arrayElemAt: ["$IsIPDDATE", -1] },
                            IsIPDDATEFROM: { $arrayElemAt: ["$IsIPDDATEFROM", -1] },
                            IsIPDDATETO: { $arrayElemAt: ["$IsIPDDATETO", -1] },
                            TREATMENT1: { $arrayElemAt: ["$TREATMENT1", -1] },
                            TREATMENT2: { $arrayElemAt: ["$TREATMENT2", -1] },
                            TREATMENT2DETAIL: { $arrayElemAt: ["$TREATMENT2DETAIL", -1] },
                            TREATMENT3: { $arrayElemAt: ["$TREATMENT3", -1] },
                            TREATMENT3DETAIL: { $arrayElemAt: ["$TREATMENT3DETAIL", -1] },
                            TREATMENT4: { $arrayElemAt: ["$TREATMENT4", -1] },
                            TREATMENT4DETAIL: { $arrayElemAt: ["$TREATMENT4DETAIL", -1] },
                            IsRECOMMENDATION1: { $arrayElemAt: ["$IsRECOMMENDATION1", -1] },
                            IsRECOMMENDATION2: { $arrayElemAt: ["$IsRECOMMENDATION2", -1] },
                            MCVisaENMoreDetail: { $arrayElemAt: ["$MCVisaENMoreDetail", -1] },
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
                            DIAGNOSISVALUE: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                            DIAGNOSISTB: { $arrayElemAt: ["$DIAGNOSIS.tabledata", -1] },
                            DOCTORRECOMMENDATION: { $arrayElemAt: ["$DOCTORRECOMMENDATION.richtextdata", -1] },
                        }
                    }
                ]).exec();
                result = resultfindMCEXTENEN;
            }
            catch (error) {
                this.logger.error('findMCEXTENEN error:', error);
            }
            return result;
        });
    }
};
MCEXTENENReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCEXTENENReportService);
exports.MCEXTENENReportService = MCEXTENENReportService;
//# sourceMappingURL=mcextenen.report.servie.js.map