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
let MC5THReportService = class MC5THReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMC5TH(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMC5TH = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RT_COMMON_117"
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
                            HEADmcTHPatientTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientTitle"] }
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
                            HEADmcTHDateVisitTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHDateVisitTitle"] }
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
                            HEADmcTHBirthdateTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHBirthdateTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientBirthday: { $arrayElemAt: [{
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
                            HEADmcTHAgeTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHAgeTitle"] }
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
                            HEADmcTHGenderTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHGenderTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientGender: { $arrayElemAt: [{
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
                            HEADmcTHDepartmentTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHDepartmentTitle"] }
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
                            HEADmcTHBedTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHBedTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            HEADmcTHPatientBed: { $arrayElemAt: [{
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
                            HEADmcTHTitleEN: { $arrayElemAt: [{
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
                            HEADmcTHPhysicianTitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPhysicianTitle"] }
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
                            MC5THPTName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPTadd: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTadd"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THNationalID: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THNationalID"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THThaiNationalID: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THThaiNationalID"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPassport: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPassport"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THMedicalHistory: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THMedicalHistory"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THMedicalHistoryText: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THMedicalHistoryText"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THAccident: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THAccident"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THAccidentText: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THAccidentText"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THAdmis: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THAdmis"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THAdmisText: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THAdmisText"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THMedHistory: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THMedHistory"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THRequestSignPT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THRequestSignPT"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THSignDate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THSignDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THForPhysicianLocation: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THForPhysicianLocation"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THDate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THForPhysicianName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THForPhysicianName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THLicenseNo: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THLicenseNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPTNameExam: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTNameExam"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPTExamDateVisit: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTExamDateVisit"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THWeight: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THWeight"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THHeight: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THHeight"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THBMI: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THBMI"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THsbp: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THsbp"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THSpace8: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THSpace8"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THpulse: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THpulse"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THGuarantee: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THGuarantee"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THGuaranteeText: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THGuaranteeText"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THGuaranteeNum4: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THGuaranteeNum4"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPhysicianSummary: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPhysicianSummary"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THCareExam: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPhysicianSummary"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THCareLicenseNo: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THCareLicenseNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THWorkPlaceAdd: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THWorkPlaceAdd"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPTExamName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTExamName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MC5THPTExamName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MC5THPTExamName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            HEADmcTHPatientTitle: { "$push": "$HEADmcTHPatientTitle.textvalue" },
                            HEADmcTHPatientName: { "$push": "$HEADmcTHPatientName.textvalue" },
                            HEADmcTHMRN: { "$push": "$HEADmcTHMRN.textvalue" },
                            HEADmcTHDateVisitTitle: { "$push": "$HEADmcTHDateVisitTitle.textvalue" },
                            HEADmcTHVisitDate: { "$push": "$HEADmcTHVisitDate.textvalue" },
                            HEADmcTHBirthdateTitle: { "$push": "$HEADmcTHBirthdateTitle.textvalue" },
                            HEADmcTHPatientBirthday: { "$push": "$HEADmcTHPatientBirthday.textvalue" },
                            HEADmcTHAgeTitle: { "$push": "$HEADmcTHAgeTitle.textvalue" },
                            HEADmcTHPatientAge: { "$push": "$HEADmcTHPatientAge.textvalue" },
                            HEADmcTHGenderTitle: { "$push": "$HEADmcTHGenderTitle.textvalue" },
                            HEADmcTHPatientGender: { "$push": "$HEADmcTHPatientGender.textvalue" },
                            HEADmcTHDepartmentTitle: { "$push": "$HEADmcTHDepartmentTitle.textvalue" },
                            HEADmcTHPatientDep: { "$push": "$HEADmcTHPatientDep.textvalue" },
                            HEADmcTHBedTitle: { "$push": "$HEADmcTHBedTitle.textvalue" },
                            HEADmcTHPatientBed: { "$push": "$HEADmcTHPatientBed.textvalue" },
                            HEADmcTHTitleEN: { "$push": "$HEADmcTHTitleEN.textvalue" },
                            HEADmcTHPhysicianTitle: { "$push": "$HEADmcTHPhysicianTitle.textvalue" },
                            HEADmcTHPhysicianName: { "$push": "$HEADmcTHPhysicianName.textvalue" },
                            HEADmcTHLicenseNo: { "$push": "$HEADmcTHLicenseNo.textvalue" },
                            HEADmcTHAllergies: { "$push": "$HEADmcTHAllergies.textvalue" },
                            MC5THPTName: { "$push": "$MC5THPTName.textvalue" },
                            MC5THPTadd: { "$push": "$MC5THPTadd.textvalue" },
                            MC5THNationalID: { "$push": "$MC5THNationalID.textvalue" },
                            MC5THThaiNationalID: { "$push": "$MC5THThaiNationalID.textvalue" },
                            MC5THPassport: { "$push": "$MC5THPassport.textvalue" },
                            MC5THMedicalHistory: { "$push": "$MC5THMedicalHistory.textvalue" },
                            MC5THMedicalHistoryText: { "$push": "$MC5THMedicalHistoryText.textvalue" },
                            MC5THAccident: { "$push": "$MC5THAccident.textvalue" },
                            MC5THAccidentText: { "$push": "$MC5THAccidentText.textvalue" },
                            MC5THAdmis: { "$push": "$MC5THAdmis.textvalue" },
                            MC5THAdmisText: { "$push": "$MC5THAdmisText.textvalue" },
                            MC5THMedHistory: { "$push": "$MC5THMedHistory.textvalue" },
                            MC5THRequestSignPT: { "$push": "$MC5THRequestSignPT.textvalue" },
                            MC5THSignDate: { "$push": "$MC5THSignDate.textvalue" },
                            MC5THForPhysicianLocation: { "$push": "$MC5THForPhysicianLocation.textvalue" },
                            MC5THDate: { "$push": "$MC5THDate.textvalue" },
                            MC5THForPhysicianName: { "$push": "$MC5THForPhysicianName.textvalue" },
                            MC5THLicenseNo: { "$push": "$MC5THLicenseNo.textvalue" },
                            MC5THWorkPlaceAdd: { "$push": "$MC5THWorkPlaceAdd.textvalue" },
                            MC5THPTNameExam: { "$push": "$MC5THPTNameExam.textvalue" },
                            MC5THPTExamDateVisit: { "$push": "$MC5THPTExamDateVisit.textvalue" },
                            MC5THWeight: { "$push": "$MC5THWeight.textvalue" },
                            MC5THHeight: { "$push": "$MC5THHeight.textvalue" },
                            MC5THBMI: { "$push": "$MC5THBMI.textvalue" },
                            MC5THsbp: { "$push": "$MC5THsbp.textvalue" },
                            MC5THSpace8: { "$push": "$MC5THSpace8.textvalue" },
                            MC5THpulse: { "$push": "$MC5THpulse.textvalue" },
                            MC5THGuarantee: { "$push": "$MC5THGuarantee.textvalue" },
                            MC5THGuaranteeText: { "$push": "$MC5THGuaranteeText.textvalue" },
                            MC5THGuaranteeNum4: { "$push": "$MC5THGuaranteeNum4.textvalue" },
                            MC5THPhysicianSummary: { "$push": "$MC5THPhysicianSummary.textvalue" },
                            MC5THCareExam: { "$push": "$MC5THCareExam.textvalue" },
                            MC5THCareLicenseNo: { "$push": "$MC5THCareLicenseNo.textvalue" },
                            MC5THPTExamName: { "$push": "$MC5THPTExamName.textvalue" },
                        }
                    },
                    {
                        $project: {
                            HEADmcTHPatientTitle: { $arrayElemAt: ["$HEADmcTHPatientTitle", -1] },
                            HEADmcTHPatientName: { $arrayElemAt: ["$HEADmcTHPatientName", -1] },
                            HEADmcTHMRN: { $arrayElemAt: ["$HEADmcTHMRN", -1] },
                            HEADmcTHDateVisitTitle: { $arrayElemAt: ["$HEADmcTHDateVisitTitle", -1] },
                            HEADmcTHVisitDate: { $arrayElemAt: ["$HEADmcTHVisitDate", -1] },
                            HEADmcTHBirthdateTitle: { $arrayElemAt: ["$HEADmcTHBirthdateTitle", -1] },
                            HEADmcTHPatientBirthday: { $arrayElemAt: ["$HEADmcTHPatientBirthday", -1] },
                            HEADmcTHAgeTitle: { $arrayElemAt: ["$HEADmcTHAgeTitle", -1] },
                            HEADmcTHPatientAge: { $arrayElemAt: ["$HEADmcTHPatientAge", -1] },
                            HEADmcTHGenderTitle: { $arrayElemAt: ["$HEADmcTHGenderTitle", -1] },
                            HEADmcTHPatientGender: { $arrayElemAt: ["$HEADmcTHPatientGender", -1] },
                            HEADmcTHDepartmentTitle: { $arrayElemAt: ["$HEADmcTHDepartmentTitle", -1] },
                            HEADmcTHPatientDep: { $arrayElemAt: ["$HEADmcTHPatientDep", -1] },
                            HEADmcTHBedTitle: { $arrayElemAt: ["$HEADmcTHBedTitle", -1] },
                            HEADmcTHPatientBed: { $arrayElemAt: ["$HEADmcTHPatientBed", -1] },
                            HEADmcTHTitleEN: { $arrayElemAt: ["$HEADmcTHTitleEN", -1] },
                            HEADmcTHPhysicianTitle: { $arrayElemAt: ["$HEADmcTHPhysicianTitle", -1] },
                            HEADmcTHPhysicianName: { $arrayElemAt: ["$HEADmcTHPhysicianName", -1] },
                            HEADmcTHLicenseNo: { $arrayElemAt: ["$HEADmcTHLicenseNo", -1] },
                            HEADmcTHAllergies: { $arrayElemAt: ["$HEADmcTHAllergies", -1] },
                            MC5THPTName: { $arrayElemAt: ["$MC5THPTName", -1] },
                            MC5THPTadd: { $arrayElemAt: ["$MC5THPTadd", -1] },
                            MC5THNationalID: { $arrayElemAt: ["$MC5THNationalID", -1] },
                            MC5THThaiNationalID: { $arrayElemAt: ["$MC5THThaiNationalID", -1] },
                            MC5THPassport: { $arrayElemAt: ["$MC5THPassport", -1] },
                            MC5THMedicalHistory: { $arrayElemAt: ["$MC5THMedicalHistory", -1] },
                            MC5THMedicalHistoryText: { $arrayElemAt: ["$MC5THMedicalHistoryText", -1] },
                            MC5THAccident: { $arrayElemAt: ["$MC5THAccident", -1] },
                            MC5THAccidentText: { $arrayElemAt: ["$MC5THAccidentText", -1] },
                            MC5THAdmis: { $arrayElemAt: ["$MC5THAdmis", -1] },
                            MC5THAdmisText: { $arrayElemAt: ["$MC5THAdmisText", -1] },
                            MC5THMedHistory: { $arrayElemAt: ["$MC5THMedHistory", -1] },
                            MC5THRequestSignPT: { $arrayElemAt: ["$MC5THRequestSignPT", -1] },
                            MC5THSignDate: { $arrayElemAt: ["$MC5THSignDate", -1] },
                            MC5THForPhysicianLocation: { $arrayElemAt: ["$MC5THForPhysicianLocation", -1] },
                            MC5THDate: { $arrayElemAt: ["$MC5THDate", -1] },
                            MC5THForPhysicianName: { $arrayElemAt: ["$MC5THForPhysicianName", -1] },
                            MC5THLicenseNo: { $arrayElemAt: ["$MC5THLicenseNo", -1] },
                            MC5THWorkPlaceAdd: { $arrayElemAt: ["$MC5THWorkPlaceAdd", -1] },
                            MC5THPTNameExam: { $arrayElemAt: ["$MC5THPTNameExam", -1] },
                            MC5THPTExamDateVisit: { $arrayElemAt: ["$MC5THPTExamDateVisit", -1] },
                            MC5THWeight: { $arrayElemAt: ["$MC5THWeight", -1] },
                            MC5THHeight: { $arrayElemAt: ["$MC5THHeight", -1] },
                            MC5THBMI: { $arrayElemAt: ["$MC5THBMI", -1] },
                            MC5THsbp: { $arrayElemAt: ["$MC5THsbp", -1] },
                            MC5THSpace8: { $arrayElemAt: ["$MC5THSpace8", -1] },
                            MC5THpulse: { $arrayElemAt: ["$MC5THpulse", -1] },
                            MC5THGuarantee: { $arrayElemAt: ["$MC5THGuarantee", -1] },
                            MC5THGuaranteeText: { $arrayElemAt: ["$MC5THGuaranteeText", -1] },
                            MC5THGuaranteeNum4: { $arrayElemAt: ["$MC5THGuaranteeNum4", -1] },
                            MC5THPhysicianSummary: { $arrayElemAt: ["$MC5THPhysicianSummary", -1] },
                            MC5THCareExam: { $arrayElemAt: ["$MC5THCareExam", -1] },
                            MC5THCareLicenseNo: { $arrayElemAt: ["$MC5THCareLicenseNo", -1] },
                            MC5THPTExamName: { $arrayElemAt: ["$MC5THPTExamName", -1] }
                        }
                    },
                ]).exec();
                result = resultfindMC5TH;
            }
            catch (error) {
                this.logger.error('findMC5TH error:', error);
            }
            return result;
        });
    }
};
MC5THReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MC5THReportService);
exports.MC5THReportService = MC5THReportService;
//# sourceMappingURL=mc5th.report.servie.js.map