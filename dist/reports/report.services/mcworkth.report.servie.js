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
let MCWORKTHReportService = class MCWORKTHReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCWORKTH(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMCWORKTH = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "FORM_MC_WORKPERMITTH"
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
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHPatientVisitDate"] }
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
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHBirthday"] }
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
                                            cond: { $eq: ["$$vs.attributename", "HEADmcTHGender"] }
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
                            PTNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHSpace2"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTADDRESS: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHPatientAdd"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTNATIONALID: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHThaiNationalid"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            PTPASSPORTID: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHPassportNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsMEDICALHISTORY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHMedicalHistoryTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MEDICALHISTORYDETAIL: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHMedicalHistory"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsACCIDENT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHAccidentTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            ACCIDENTDETAIL: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHAccidentDetail"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            IsADMIT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHospitalAdmisTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            ADMITDETAIL: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHospitalAdmis"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            OTHERHOSPITALHIS: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHRequestInput"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            REQUESTERNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHLabelSignCare"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            REQUESTDATE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHForChildDate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            DEPARTMENT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHLocationExam"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DATE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHDateExem"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DRNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHCareExamName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DRLIC: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHCareExemLicenseNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2MCWorkPermitTHWorkingPlaceAdd: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHWorkingPlaceAdd"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHHaveExamined"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTDATE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHExamDateVisit"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTBW: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHweight"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTHIGHT: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHheight"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTBMI: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHBMI"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTSBP: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHsbp"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTDBP: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHdbp"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTPLUSE: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHpulse"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTIMPRESSION: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHImpressionTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTIMPRESSIONDETAIL: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHImpressionText"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DRSUMMARY: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHPhysicianSum"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DRSIGNNAME: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHCareNameTitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2DRSIGLIC: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHCareName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC2PTREQUESTER: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCWorkPermitTHPTName"] }
                                        }
                                    }, -1]
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
                            HEADmcTHVisitDate: { "$push": "$HEADmcTHPatientVisitDate.textvalue" },
                            HEADmcTHPatientBirthday: { "$push": "$HEADmcTHBirthday.textvalue" },
                            HEADmcTHPatientAge: { "$push": "$HEADmcTHPatientAge.textvalue" },
                            HEADmcTHPatientGender: { "$push": "$HEADmcTHGender.textvalue" },
                            HEADmcTHPatientDep: { "$push": "$HEADmcTHPatientDep.textvalue" },
                            HEADmcTHPatientBed: { "$push": "$HEADmcTHBED.textvalue" },
                            HEADmcTHPhysicianName: { "$push": "$HEADmcTHPhysicianName.textvalue" },
                            HEADmcTHLicenseNo: { "$push": "$HEADmcTHLicenseNo.textvalue" },
                            HEADmcTHAllergies: { "$push": "$HEADmcTHAllergies.textvalue" },
                            PTNAME: { "$push": "$PTNAME.textvalue" },
                            PTADDRESS: { "$push": "$PTADDRESS.textvalue" },
                            PTNATIONALID: { "$push": "$PTNATIONALID.textvalue" },
                            PTPASSPORTID: { "$push": "$PTPASSPORTID.textvalue" },
                            IsMEDICALHISTORY: { "$push": "$IsMEDICALHISTORY.textvalue" },
                            MEDICALHISTORYDETAIL: { "$push": "$MEDICALHISTORYDETAIL.textvalue" },
                            IsACCIDENT: { "$push": "$IsACCIDENT.textvalue" },
                            ACCIDENTDETAIL: { "$push": "$ACCIDENTDETAIL.textvalue" },
                            IsADMIT: { "$push": "$IsADMIT.textvalue" },
                            ADMITDETAIL: { "$push": "$ADMITDETAIL.textvalue" },
                            OTHERHOSPITALHIS: { "$push": "$OTHERHOSPITALHIS.textvalue" },
                            REQUESTERNAME: { "$push": "$REQUESTERNAME.textvalue" },
                            REQUESTDATE: { "$push": "$REQUESTDATE.textvalue" },
                            SEC2DEPARTMENT: { "$push": "$SEC2DEPARTMENT.textvalue" },
                            SEC2DATE: { "$push": "$SEC2DATE.textvalue" },
                            SEC2DRNAME: { "$push": "$SEC2DRNAME.textvalue" },
                            SEC2DRLIC: { "$push": "$SEC2DRLIC.textvalue" },
                            SEC2MCWorkPermitTHWorkingPlaceAdd: { "$push": "$SEC2MCWorkPermitTHWorkingPlaceAdd.textvalue" },
                            SEC2PTNAME: { "$push": "$SEC2PTNAME.textvalue" },
                            SEC2PTDATE: { "$push": "$SEC2PTDATE.textvalue" },
                            SEC2PTBW: { "$push": "$SEC2PTBW.textvalue" },
                            SEC2PTHIGHT: { "$push": "$SEC2PTHIGHT.textvalue" },
                            SEC2PTBMI: { "$push": "$SEC2PTBMI.textvalue" },
                            SEC2PTSBP: { "$push": "$SEC2PTSBP.textvalue" },
                            SEC2PTDBP: { "$push": "$SEC2PTDBP.textvalue" },
                            SEC2PTPLUSE: { "$push": "$SEC2PTPLUSE.textvalue" },
                            SEC2PTIMPRESSION: { "$push": "$SEC2PTIMPRESSION.textvalue" },
                            SEC2PTIMPRESSIONDETAIL: { "$push": "$SEC2PTIMPRESSIONDETAIL.textvalue" },
                            SEC2DRSUMMARY: { "$push": "$SEC2DRSUMMARY.textvalue" },
                            SEC2DRSIGNNAME: { "$push": "$SEC2DRSIGNNAME.textvalue" },
                            SEC2DRSIGLIC: { "$push": "$SEC2DRSIGLIC.textvalue" },
                            SEC2PTREQUESTER: { "$push": "$SEC2PTREQUESTER.textvalue" },
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
                            HEADmcTHPhysicianName: { $arrayElemAt: ["$HEADmcTHPhysicianName", -1] },
                            HEADmcTHLicenseNo: { $arrayElemAt: ["$HEADmcTHLicenseNo", -1] },
                            HEADmcTHAllergies: { $arrayElemAt: ["$HEADmcTHAllergies", -1] },
                            PTNAME: { $arrayElemAt: ["$PTNAME", -1] },
                            PTADDRESS: { $arrayElemAt: ["$PTADDRESS", -1] },
                            PTNATIONALID: { $arrayElemAt: ["$PTNATIONALID", -1] },
                            PTPASSPORTID: { $arrayElemAt: ["$PTPASSPORTID", -1] },
                            IsMEDICALHISTORY: { $arrayElemAt: ["$IsMEDICALHISTORY", -1] },
                            MEDICALHISTORYDETAIL: { $arrayElemAt: ["$MEDICALHISTORYDETAIL", -1] },
                            IsACCIDENT: { $arrayElemAt: ["$IsACCIDENT", -1] },
                            ACCIDENTDETAIL: { $arrayElemAt: ["$ACCIDENTDETAIL", -1] },
                            IsADMIT: { $arrayElemAt: ["$IsADMIT", -1] },
                            ADMITDETAIL: { $arrayElemAt: ["$ADMITDETAIL", -1] },
                            OTHERHOSPITALHIS: { $arrayElemAt: ["$OTHERHOSPITALHIS", -1] },
                            REQUESTERNAME: { $arrayElemAt: ["$REQUESTERNAME", -1] },
                            REQUESTDATE: { $arrayElemAt: ["$REQUESTDATE", -1] },
                            SEC2DEPARTMENT: { $arrayElemAt: ["$SEC2DEPARTMENT", -1] },
                            SEC2DATE: { $arrayElemAt: ["$SEC2DATE", -1] },
                            SEC2DRNAME: { $arrayElemAt: ["$SEC2DRNAME", -1] },
                            SEC2DRLIC: { $arrayElemAt: ["$SEC2DRLIC", -1] },
                            SEC2MCWorkPermitTHWorkingPlaceAdd: { $arrayElemAt: ["$SEC2MCWorkPermitTHWorkingPlaceAdd", -1] },
                            SEC2PTNAME: { $arrayElemAt: ["$SEC2PTNAME", -1] },
                            SEC2PTDATE: { $arrayElemAt: ["$SEC2PTDATE", -1] },
                            SEC2PTBW: { $arrayElemAt: ["$SEC2PTBW", -1] },
                            SEC2PTHIGHT: { $arrayElemAt: ["$SEC2PTHIGHT", -1] },
                            SEC2PTBMI: { $arrayElemAt: ["$SEC2PTBMI", -1] },
                            SEC2PTSBP: { $arrayElemAt: ["$SEC2PTSBP", -1] },
                            SEC2PTDBP: { $arrayElemAt: ["$SEC2PTDBP", -1] },
                            SEC2PTPLUSE: { $arrayElemAt: ["$SEC2PTPLUSE", -1] },
                            SEC2PTIMPRESSION: { $arrayElemAt: ["$SEC2PTIMPRESSION", -1] },
                            SEC2PTIMPRESSIONDETAIL: { $arrayElemAt: ["$SEC2PTIMPRESSIONDETAIL", -1] },
                            SEC2DRSUMMARY: { $arrayElemAt: ["$SEC2DRSUMMARY", -1] },
                            SEC2DRSIGNNAME: { $arrayElemAt: ["$SEC2DRSIGNNAME", -1] },
                            SEC2DRSIGLIC: { $arrayElemAt: ["$SEC2DRSIGLIC", -1] },
                            SEC2PTREQUESTER: { $arrayElemAt: ["$SEC2PTREQUESTER", -1] },
                        }
                    }
                ]).exec();
                result = resultfindMCWORKTH;
            }
            catch (error) {
                this.logger.error('findMCWORKTH error:', error);
            }
            return result;
        });
    }
};
MCWORKTHReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCWORKTHReportService);
exports.MCWORKTHReportService = MCWORKTHReportService;
//# sourceMappingURL=mcworkth.report.servie.js.map