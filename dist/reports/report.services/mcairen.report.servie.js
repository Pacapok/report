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
let MCAIRENReportService = class MCAIRENReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCAIREN(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultMCAIREN = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RT_COMMON_131"
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
                            MCTravelEnCareprovider: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelEnCareprovider"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENMedLicensNo: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENMedLicensNo"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENAddr: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENAddr"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENPTname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENPTname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENTypeofPatient: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENTypeofPatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENOUTENcounter: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENOUTENcounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENOUTVisitid: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENOUTVisitid"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENOUTdate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENOUTdate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENINVisitEncounter: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENINVisitEncounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENANINpatient: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENANINpatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENdateIPD: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENdateIPD"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENMed: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENMed"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENOther: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENOther"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxPHYSICIANRECOM1: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxPHYSICIANRECOM1"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadioButtonEscortBy: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadioButtonEscortBy"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadioButtonSeatType: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadioButtonSeatType"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxWheelChairAssestance: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxWheelChairAssestance"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadioButtonWheelChairAssestanceDetail: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadioButtonWheelChairAssestanceDetail"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxOxygen: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxOxygen"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadiobuttonOxygenAt: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadiobuttonOxygenAt"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadiobuttonOxygenFlow: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadiobuttonOxygenFlow"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRadiobuttonOxygenType: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRadiobuttonOxygenType"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxGroundAm: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxGroundAm"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxGroundAmTrans: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxGroundAmTrans"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxGroundAmSpc: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxGroundAmSpc"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxDest: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxDest"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENRediobuttomDestAtHosp: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENRediobuttomDestAtHosp"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENCheckboxOth: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENCheckboxOth"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENFromOrigin: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENFromOrigin"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENToDestination: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENToDestination"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENNotFit: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENNotFit"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENMedLicen: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENMedLicen"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENDoctorsignDateTime: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENDoctorsignDateTime"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENDrPrintname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENDrPrintname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelENPatientName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelENPatientName"] }
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
                            PROCEDURES: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "PROCEDURES"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            SURGERYREQUEST: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "SURGERYREQUEST"] }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            HEADmcENPatientTitleName: { "$push": "$HEADmcENPatientTitleName.textvalue" },
                            HEADmcENPatientName: { "$push": "$HEADmcENPatientName.textvalue" },
                            HEADmcENMRN: { "$push": "$HEADmcENMRN.textvalue" },
                            HEADmcENPatientVisitDate: { "$push": "$HEADmcENPatientVisitDate.textvalue" },
                            HEADmcENBirthday: { "$push": "$HEADmcENBirthday.textvalue" },
                            HEADmcENPatientAge: { "$push": "$HEADmcENPatientAge.textvalue" },
                            HEADmcENGender: { "$push": "$HEADmcENGender.textvalue" },
                            HEADmcENPatientDep: { "$push": "$HEADmcENPatientDep.textvalue" },
                            HEADmcENBED: { "$push": "$HEADmcENBED.textvalue" },
                            HEADmcENPhysicianName: { "$push": "$HEADmcENPhysicianName.textvalue" },
                            HEADmcENLicenseNo: { "$push": "$HEADmcENLicenseNo.textvalue" },
                            HEADmcENAllergies: { "$push": "$HEADmcENAllergies.textvalue" },
                            MCTravelEnCareprovider: { "$push": "$MCTravelEnCareprovider.textvalue" },
                            MCTravelENMedLicensNo: { "$push": "$MCTravelENMedLicensNo.textvalue" },
                            MCTravelENAddr: { "$push": "$MCTravelENAddr.textvalue" },
                            MCTravelENPTname: { "$push": "$MCTravelENPTname.textvalue" },
                            MCTravelENTypeofPatient: { "$push": "$MCTravelENTypeofPatient.textvalue" },
                            MCTravelENOUTENcounter: { "$push": "$MCTravelENOUTENcounter.textvalue" },
                            MCTravelENOUTVisitid: { "$push": "$MCTravelENOUTVisitid.textvalue" },
                            MCTravelENOUTdate: { "$push": "$MCTravelENOUTdate.textvalue" },
                            MCTravelENINVisitEncounter: { "$push": "$MCTravelENINVisitEncounter.textvalue" },
                            MCTravelENANINpatient: { "$push": "$MCTravelENANINpatient.textvalue" },
                            MCTravelENdateIPD: { "$push": "$MCTravelENdateIPD.textvalue" },
                            MCTravelENMed: { "$push": "$MCTravelENMed.textvalue" },
                            MCTravelENOther: { "$push": "$MCTravelENOther.textvalue" },
                            MCTravelENOtherDetail: { "$push": "$MCTravelENOther.actualvalue.additionalvalue" },
                            MCTravelTHCheckboxPHYSICIANRECOM1: { "$push": "$MCTravelTHCheckboxPHYSICIANRECOM1.textvalue" },
                            MCTravelENRadioButtonEscortBy: { "$push": "$MCTravelENRadioButtonEscortBy.textvalue" },
                            MCTravelENRadioButtonSeatType: { "$push": "$MCTravelENRadioButtonSeatType.textvalue" },
                            MCTravelENCheckboxWheelChairAssestance: { "$push": "$MCTravelENCheckboxWheelChairAssestance.textvalue" },
                            MCTravelENRadioButtonWheelChairAssestanceDetail: { "$push": "$MCTravelENRadioButtonWheelChairAssestanceDetail.textvalue" },
                            MCTravelENCheckboxOxygen: { "$push": "$MCTravelENCheckboxOxygen.textvalue" },
                            MCTravelENRadiobuttonOxygenAt: { "$push": "$MCTravelENRadiobuttonOxygenAt.textvalue" },
                            MCTravelENRadiobuttonOxygenFlow: { "$push": "$MCTravelENRadiobuttonOxygenFlow.textvalue" },
                            MCTravelENRadiobuttonOxygenType: { "$push": "$MCTravelENRadiobuttonOxygenType.textvalue" },
                            MCTravelENCheckboxGroundAm: { "$push": "$MCTravelENCheckboxGroundAm.textvalue" },
                            MCTravelENCheckboxGroundAmTrans: { "$push": "$MCTravelENCheckboxGroundAmTrans.textvalue" },
                            MCTravelENCheckboxGroundAmSpc: { "$push": "$MCTravelENCheckboxGroundAmSpc.textvalue" },
                            MCTravelENCheckboxDest: { "$push": "$MCTravelENCheckboxDest.textvalue" },
                            MCTravelENRediobuttomDestAtHosp: { "$push": "$MCTravelENRediobuttomDestAtHosp.textvalue" },
                            MCTravelENCheckboxOth: { "$push": "$MCTravelENCheckboxOth.textvalue" },
                            MCTravelENCheckboxOthDetail: { "$push": "$MCTravelENCheckboxOth.actualvalue.additionalvalue" },
                            MCTravelENFromOrigin: { "$push": "$MCTravelENFromOrigin.textvalue" },
                            MCTravelENToDestination: { "$push": "$MCTravelENToDestination.textvalue" },
                            MCTravelENNotFit: { "$push": "$MCTravelENNotFit.textvalue" },
                            MCTravelENNotFitDetail: { "$push": "$MCTravelENNotFit.actualvalue.additionalvalue" },
                            MCTravelENMedLicen: { "$push": "$MCTravelENMedLicen.textvalue" },
                            MCTravelENDoctorsignDateTime: { "$push": "$MCTravelENDoctorsignDateTime.textvalue" },
                            MCTravelENDrPrintname: { "$push": "$MCTravelENDrPrintname.textvalue" },
                            MCTravelENPatientName: { "$push": "$MCTravelENPatientName.textvalue" },
                            CHIEFCOMPLAINTS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$CHIEFCOMPLAINTS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Chief Complaint"] }
                                            }
                                        }, -1]
                                } },
                            PRESENTILLNESS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PRESENTILLNESS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Chief Complaint"] }
                                            }
                                        }, -1]
                                } },
                            DIAGNOSIS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DIAGNOSIS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Diagnosis (In case of skin lesion specify the location)"] }
                                            }
                                        }, -1]
                                } },
                            PROCEDURESDIAG: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PROCEDURES",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Diagnosis (In case of skin lesion specify the location)"] }
                                            }
                                        }, -1]
                                } },
                            PROCEDURESTM: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PROCEDURES",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Treatment / Investigation"] }
                                            }
                                        }, -1]
                                } },
                            SURGERYREQUEST: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$SURGERYREQUEST",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Treatment / Investigation"] }
                                            }
                                        }, -1]
                                } },
                        }
                    },
                    {
                        $project: {
                            HEADmcENPatientTitleName: { $arrayElemAt: ["$HEADmcENPatientTitleName", -1] },
                            HEADmcENPatientName: { $arrayElemAt: ["$HEADmcENPatientName", -1] },
                            HEADmcENMRN: { $arrayElemAt: ["$HEADmcENMRN", -1] },
                            HEADmcENPatientVisitDate: { $arrayElemAt: ["$HEADmcENPatientVisitDate", -1] },
                            HEADmcENBirthday: { $arrayElemAt: ["$HEADmcENBirthday", -1] },
                            HEADmcENPatientAge: { $arrayElemAt: ["$HEADmcENPatientAge", -1] },
                            HEADmcENGender: { $arrayElemAt: ["$HEADmcENGender", -1] },
                            HEADmcENPatientDep: { $arrayElemAt: ["$HEADmcENPatientDep", -1] },
                            HEADmcENBED: { $arrayElemAt: ["$HEADmcENBED", -1] },
                            HEADmcENPhysicianName: { $arrayElemAt: ["$HEADmcENPhysicianName", -1] },
                            HEADmcENLicenseNo: { $arrayElemAt: ["$HEADmcENLicenseNo", -1] },
                            HEADmcENAllergies: { $arrayElemAt: ["$HEADmcENAllergies", -1] },
                            MCTravelEnCareprovider: { $arrayElemAt: ["$MCTravelEnCareprovider", -1] },
                            MCTravelENMedLicensNo: { $arrayElemAt: ["$MCTravelENMedLicensNo", -1] },
                            MCTravelENAddr: { $arrayElemAt: ["$MCTravelENAddr", -1] },
                            MCTravelENPTname: { $arrayElemAt: ["$MCTravelENPTname", -1] },
                            MCTravelENTypeofPatient: { $arrayElemAt: ["$MCTravelENTypeofPatient", -1] },
                            MCTravelENOUTENcounter: { $arrayElemAt: ["$MCTravelENOUTENcounter", -1] },
                            MCTravelENOUTVisitid: { $arrayElemAt: ["$MCTravelENOUTVisitid", -1] },
                            MCTravelENOUTdate: { $arrayElemAt: ["$MCTravelENOUTdate", -1] },
                            MCTravelENINVisitEncounter: { $arrayElemAt: ["$MCTravelENINVisitEncounter", -1] },
                            MCTravelENANINpatient: { $arrayElemAt: ["$MCTravelENANINpatient", -1] },
                            MCTravelENdateIPD: { $arrayElemAt: ["$MCTravelENdateIPD", -1] },
                            MCTravelENMed: { $arrayElemAt: ["$MCTravelENMed", -1] },
                            MCTravelENOther: { $arrayElemAt: ["$MCTravelENOther", -1] },
                            MCTravelENOtherDetail: { $arrayElemAt: ["$MCTravelENOtherDetail", -1] },
                            MCTravelTHCheckboxPHYSICIANRECOM1: { $arrayElemAt: ["$MCTravelTHCheckboxPHYSICIANRECOM1", -1] },
                            MCTravelENRadioButtonEscortBy: { $arrayElemAt: ["$MCTravelENRadioButtonEscortBy", -1] },
                            MCTravelENRadioButtonSeatType: { $arrayElemAt: ["$MCTravelENRadioButtonSeatType", -1] },
                            MCTravelENCheckboxWheelChairAssestance: { $arrayElemAt: ["$MCTravelENCheckboxWheelChairAssestance", -1] },
                            MCTravelENRadioButtonWheelChairAssestanceDetail: { $arrayElemAt: ["$MCTravelENRadioButtonWheelChairAssestanceDetail", -1] },
                            MCTravelENCheckboxOxygen: { $arrayElemAt: ["$MCTravelENCheckboxOxygen", -1] },
                            MCTravelENRadiobuttonOxygenAt: { $arrayElemAt: ["$MCTravelENRadiobuttonOxygenAt", -1] },
                            MCTravelENRadiobuttonOxygenFlow: { $arrayElemAt: ["$MCTravelENRadiobuttonOxygenFlow", -1] },
                            MCTravelENRadiobuttonOxygenType: { $arrayElemAt: ["$MCTravelENRadiobuttonOxygenType", -1] },
                            MCTravelENCheckboxGroundAm: { $arrayElemAt: ["$MCTravelENCheckboxGroundAm", -1] },
                            MCTravelENCheckboxGroundAmTrans: { $arrayElemAt: ["$MCTravelENCheckboxGroundAmTrans", -1] },
                            MCTravelENCheckboxGroundAmSpc: { $arrayElemAt: ["$MCTravelENCheckboxGroundAmSpc", -1] },
                            MCTravelENCheckboxDest: { $arrayElemAt: ["$MCTravelENCheckboxDest", -1] },
                            MCTravelENRediobuttomDestAtHosp: { $arrayElemAt: ["$MCTravelENRediobuttomDestAtHosp", -1] },
                            MCTravelENCheckboxOth: { $arrayElemAt: ["$MCTravelENCheckboxOth", -1] },
                            MCTravelENCheckboxOthDetail: { $arrayElemAt: ["$MCTravelENCheckboxOthDetail", -1] },
                            MCTravelENFromOrigin: { $arrayElemAt: ["$MCTravelENFromOrigin", -1] },
                            MCTravelENToDestination: { $arrayElemAt: ["$MCTravelENToDestination", -1] },
                            MCTravelENNotFit: { $arrayElemAt: ["$MCTravelENNotFit", -1] },
                            MCTravelENNotFitDetail: { $arrayElemAt: ["$MCTravelENNotFitDetail", -1] },
                            MCTravelENMedLicen: { $arrayElemAt: ["$MCTravelENMedLicen", -1] },
                            MCTravelENDoctorsignDateTime: { $arrayElemAt: ["$MCTravelENDoctorsignDateTime", -1] },
                            MCTravelENDrPrintname: { $arrayElemAt: ["$MCTravelENDrPrintname", -1] },
                            MCTravelENPatientName: { $arrayElemAt: ["$MCTravelENPatientName", -1] },
                            CHIEFCOMPLAINTS: { $arrayElemAt: ["$CHIEFCOMPLAINTS.htmldatavalue", -1] },
                            CHIEFCOMPLAINTSTB: { $arrayElemAt: ["$CHIEFCOMPLAINTS.tabledata", -1] },
                            CHIEFCOMPLAINTSRT: { $arrayElemAt: ["$CHIEFCOMPLAINTS.richtextdata", -1] },
                            PRESENTILLNESS: { $arrayElemAt: ["$PRESENTILLNESS.htmldatavalue", -1] },
                            PRESENTILLNESSTB: { $arrayElemAt: ["$PRESENTILLNESS.tabledata", -1] },
                            PRESENTILLNESSRT: { $arrayElemAt: ["$PRESENTILLNESS.richtextdata", -1] },
                            DIAGNOSIS: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                            DIAGNOSISTB: { $arrayElemAt: ["$DIAGNOSIS.tabledata", -1] },
                            DIAGNOSISRT: { $arrayElemAt: ["$DIAGNOSIS.richtextdata", -1] },
                            PROCEDURESDIAG: { $arrayElemAt: ["$PROCEDURESDIAG.htmldatavalue", -1] },
                            PROCEDURESDIAGTB: { $arrayElemAt: ["$PROCEDURESDIAG.tabledata", -1] },
                            PROCEDURESDIAGRT: { $arrayElemAt: ["$PROCEDURESDIAG.richtextdata", -1] },
                            PROCEDURESTM: { $arrayElemAt: ["$PROCEDURESTM.htmldatavalue", -1] },
                            PROCEDURESTMTB: { $arrayElemAt: ["$PROCEDURESTM.tabledata", -1] },
                            PROCEDURESTMRT: { $arrayElemAt: ["$PROCEDURESTM.richtextdata", -1] },
                            SURGERYREQUEST: { $arrayElemAt: ["$SURGERYREQUEST.htmldatavalue", -1] },
                            SURGERYREQUESTTB: { $arrayElemAt: ["$SURGERYREQUEST.tabledata", -1] },
                            SURGERYREQUESTRT: { $arrayElemAt: ["$SURGERYREQUEST.richtextdata", -1] }
                        }
                    }
                ]).exec();
                result = resultMCAIREN;
            }
            catch (error) {
                this.logger.error('findMCAIREN error:', error);
            }
            return result;
        });
    }
};
MCAIRENReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCAIRENReportService);
exports.MCAIRENReportService = MCAIRENReportService;
//# sourceMappingURL=mcairen.report.servie.js.map