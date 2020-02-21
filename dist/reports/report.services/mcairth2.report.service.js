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
let MCAIRTH2ReportService = class MCAIRTH2ReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCAIRTH2(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultMCAIRTH2 = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RT_COMMON_131TH"
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
                            MCTravelTHCareprovider: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCareprovider"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHmedlicense: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHmedlicense"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHAddr: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHAddr"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHPatientName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHPatientName"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHPTHN: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHPTHN"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCGenTHTypeofPatient: { $arrayElemAt: [{
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
                            MCGenTHOUTENcounter: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCGenTHOUTENcounter"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCGenTHOUTVisitid: { $arrayElemAt: [{
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
                            MCGenTHOUTdate: { $arrayElemAt: [{
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
                            MCGenTHINVisitEncounter: { $arrayElemAt: [{
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
                            MCGenTHANINpatient: { $arrayElemAt: [{
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
                            MCGenTHdateIPD: { $arrayElemAt: [{
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
                            MCTravelTHTreatmentChkBox: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHTreatmentChkBox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHOthertChkBox: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHOthertChkBox"] }
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
                            MCTravelTHCheckboxPHYSICIANRECOM2: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxPHYSICIANRECOM2"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxPHYSICIANRECOM3: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxPHYSICIANRECOM3"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadioButtonEscortBy: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadioButtonEscortBy"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadioButtonSeatType: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadioButtonSeatType"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxWheelChairAssestance: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxWheelChairAssestance"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxWheelChairAssestance: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxWheelChairAssestance"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadioButtonWheelChairAssestanceDetail: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadioButtonWheelChairAssestanceDetail"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxOxygen: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxOxygen"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadiobuttonOxygenAt: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadiobuttonOxygenAt"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadiobuttonOxygenFlow: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadiobuttonOxygenFlow"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRadiobuttonOxygenType: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRadiobuttonOxygenType"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxGroundAm: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxGroundAm"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxGroundAmTrans: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxGroundAmTrans"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTraveltyTHCheckboxGroundAmSpc: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTraveltyTHCheckboxGroundAmSpc"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxDest: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxDest"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHRediobuttomDestAtHosp: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHRediobuttomDestAtHosp"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHCheckboxOth: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHCheckboxOth"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHFromOrigin: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHFromOrigin"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHToDestination: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHToDestination"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHNotFit: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHNotFit"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHMedLicen: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHMedLicen"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHDoctorsignDateTime: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHDoctorsignDateTime"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHDrPrintname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHDrPrintname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCTravelTHPatientName: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCTravelTHPatientName"] }
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
                            HEADmcDEPTCODE: { "$push": "$departments.code" },
                            HEADmcDEPTNAME: { "$push": "$departments.name" },
                            HEADmcDRCODE: { "$push": "$careproviders.code" },
                            HEADmcDRNAME: { "$push": "$careproviders.name" },
                            HEADmcREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                            HEADmcREPORTFM: { "$push": "$reportconfigurations.documentno" },
                            HEADmcTHPatientTitle: { "$push": "$HEADmcTHPatientTitle.textvalue" },
                            HEADmcTHPatientName: { "$push": "$HEADmcTHPatientName.textvalue" },
                            HEADmcTHMRN: { "$push": "$HEADmcTHMRN.textvalue" },
                            HEADmcTHVisitDate: { "$push": "$HEADmcTHVisitDate.textvalue" },
                            HEADmcTHPatientBirthday: { "$push": "$HEADmcTHPatientBirthday.textvalue" },
                            HEADmcTHPatientAge: { "$push": "$HEADmcTHPatientAge.textvalue" },
                            HEADmcTHPatientGender: { "$push": "$HEADmcTHPatientGender.textvalue" },
                            HEADmcTHPatientDep: { "$push": "$HEADmcTHPatientDep.textvalue" },
                            HEADmcTHPatientBed: { "$push": "$HEADmcTHPatientBed.textvalue" },
                            HEADmcTHTitleEN: { "$push": "$HEADmcTHTitleEN.textvalue" },
                            HEADmcTHPhysicianName: { "$push": "$HEADmcTHPhysicianName.textvalue" },
                            HEADmcTHLicenseNo: { "$push": "$HEADmcTHLicenseNo.textvalue" },
                            HEADmcTHAllergies: { "$push": "$HEADmcTHAllergies.textvalue" },
                            MCTravelTHCareprovider: { "$push": "$MCTravelTHCareprovider.textvalue" },
                            MCTravelTHmedlicense: { "$push": "$MCTravelTHmedlicense.textvalue" },
                            MCTravelTHAddr: { "$push": "$MCTravelTHAddr.textvalue" },
                            MCTravelTHPatientName: { "$push": "$MCTravelTHPatientName.textvalue" },
                            MCTravelTHPTHN: { "$push": "$MCTravelTHPTHN.textvalue" },
                            MCGenTHTypeofPatient: { "$push": "$MCGenTHTypeofPatient.textvalue" },
                            MCGenTHOUTENcounter: { "$push": "$MCGenTHOUTENcounter.textvalue" },
                            MCGenTHOUTVisitid: { "$push": "$MCGenTHOUTVisitid.textvalue" },
                            MCGenTHOUTdate: { "$push": "$MCGenTHOUTdate.textvalue" },
                            MCGenTHINVisitEncounter: { "$push": "$MCGenTHINVisitEncounter.textvalue" },
                            MCGenTHANINpatient: { "$push": "$MCGenTHANINpatient.textvalue" },
                            MCGenTHdateIPD: { "$push": "$MCGenTHdateIPD.textvalue" },
                            MCGenTHdatetoIPD: { "$push": "$MCGenTHdatetoIPD.textvalue" },
                            MCTravelTHTreatmentChkBox: { "$push": "$MCTravelTHTreatmentChkBox.textvalue" },
                            MCTravelTHOthertChkBox: { "$push": "$MCTravelTHOthertChkBox.textvalue" },
                            MCTravelTHOthertChkBoxDetail: { "$push": "$MCTravelTHOthertChkBox.actualvalue.additionalvalue" },
                            MCTravelTHCheckboxPHYSICIANRECOM1: { "$push": "$MCTravelTHCheckboxPHYSICIANRECOM1.textvalue" },
                            MCTravelTHCheckboxPHYSICIANRECOM2: { "$push": "$MCTravelTHCheckboxPHYSICIANRECOM2.textvalue" },
                            MCTravelTHCheckboxPHYSICIANRECOM3: { "$push": "$MCTravelTHCheckboxPHYSICIANRECOM3.textvalue" },
                            MCTravelTHRadioButtonEscortBy: { "$push": "$MCTravelTHRadioButtonEscortBy.textvalue" },
                            MCTravelTHRadioButtonSeatType: { "$push": "$MCTravelTHRadioButtonSeatType.textvalue" },
                            MCTravelTHCheckboxWheelChairAssestance: { "$push": "$MCTravelTHCheckboxWheelChairAssestance.textvalue" },
                            MCTravelTHRadioButtonWheelChairAssestanceDetail: { "$push": "$MCTravelTHRadioButtonWheelChairAssestanceDetail.textvalue" },
                            MCTravelTHCheckboxOxygen: { "$push": "$MCTravelTHCheckboxOxygen.textvalue" },
                            MCTravelTHRadiobuttonOxygenAt: { "$push": "$MCTravelTHRadiobuttonOxygenAt.textvalue" },
                            MCTravelTHRadiobuttonOxygenFlow: { "$push": "$MCTravelTHRadiobuttonOxygenFlow.textvalue" },
                            MCTravelTHRadiobuttonOxygenType: { "$push": "$MCTravelTHRadiobuttonOxygenType.textvalue" },
                            MCTravelTHCheckboxGroundAm: { "$push": "$MCTravelTHCheckboxGroundAm.textvalue" },
                            MCTravelTHCheckboxGroundAmTrans: { "$push": "$MCTravelTHCheckboxGroundAmTrans.textvalue" },
                            MCTraveltyTHCheckboxGroundAmSpc: { "$push": "$MCTraveltyTHCheckboxGroundAmSpc.textvalue" },
                            MCTravelTHCheckboxDest: { "$push": "$MCTravelTHCheckboxDest.textvalue" },
                            MCTravelTHRediobuttomDestAtHosp: { "$push": "$MCTravelTHRediobuttomDestAtHosp.textvalue" },
                            MCTravelTHCheckboxOth: { "$push": "$MCTravelTHCheckboxOth.textvalue" },
                            MCTravelTHCheckboxOthDetail: { "$push": "$MCTravelTHCheckboxOth.actualvalue.additionalvalue" },
                            MCTravelTHFromOrigin: { "$push": "$MCTravelTHFromOrigin.textvalue" },
                            MCTravelTHToDestination: { "$push": "$MCTravelTHToDestination.textvalue" },
                            MCTravelTHNotFit: { "$push": "$MCTravelTHNotFit.textvalue" },
                            MCTravelTHNotFitDetail: { "$push": "$MCTravelTHNotFit.actualvalue.additionalvalue" },
                            MCTravelTHMedLicen: { "$push": "$MCTravelTHMedLicen.textvalue" },
                            MCTravelTHDoctorsignDateTime: { "$push": "$MCTravelTHDoctorsignDateTime.textvalue" },
                            MCTravelTHDrPrintname: { "$push": "$MCTravelTHDrPrintname.textvalue" },
                            CHIEFCOMPLAINTS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$CHIEFCOMPLAINTS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "5"] }
                                            }
                                        }, -1]
                                } },
                            PRESENTILLNESS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PRESENTILLNESS",
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
                            PROCEDURES: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PROCEDURES",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "7"] }
                                            }
                                        }, -1]
                                } },
                            SURGERYREQUEST: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$SURGERYREQUEST",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "7"] }
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
                            HEADmcTHLicenseNo: { $arrayElemAt: ["$HEADmcTHLicenseNo", -1] },
                            HEADmcTHAllergies: { $arrayElemAt: ["$HEADmcTHAllergies", -1] },
                            MCTravelTHCareprovider: { $arrayElemAt: ["$MCTravelTHCareprovider", -1] },
                            MCTravelTHmedlicense: { $arrayElemAt: ["$MCTravelTHmedlicense", -1] },
                            MCTravelTHAddr: { $arrayElemAt: ["$MCTravelTHAddr", -1] },
                            MCTravelTHPatientName: { $arrayElemAt: ["$MCTravelTHPatientName", -1] },
                            MCTravelTHPTHN: { $arrayElemAt: ["$MCTravelTHPTHN", -1] },
                            MCGenTHTypeofPatient: { $arrayElemAt: ["$MCGenTHTypeofPatient", -1] },
                            MCGenTHOUTENcounter: { $arrayElemAt: ["$MCGenTHOUTENcounter", -1] },
                            MCGenTHOUTVisitid: { $arrayElemAt: ["$MCGenTHOUTVisitid", -1] },
                            MCGenTHOUTdate: { $arrayElemAt: ["$MCGenTHOUTdate", -1] },
                            MCGenTHINVisitEncounter: { $arrayElemAt: ["$MCGenTHINVisitEncounter", -1] },
                            MCGenTHANINpatient: { $arrayElemAt: ["$MCGenTHANINpatient", -1] },
                            MCGenTHdateIPD: { $arrayElemAt: ["$MCGenTHdateIPD", -1] },
                            MCGenTHdatetoIPD: { $arrayElemAt: ["$MCGenTHdatetoIPD", -1] },
                            MCTravelTHTreatmentChkBox: { $arrayElemAt: ["$MCTravelTHTreatmentChkBox", -1] },
                            MCTravelTHOthertChkBox: { $arrayElemAt: ["$MCTravelTHOthertChkBox", -1] },
                            MCTravelTHOthertChkBoxDetail: { $arrayElemAt: ["$MCTravelTHOthertChkBoxDetail", -1] },
                            MCTravelTHCheckboxPHYSICIANRECOM1: { $arrayElemAt: ["$MCTravelTHCheckboxPHYSICIANRECOM1", -1] },
                            MCTravelTHCheckboxPHYSICIANRECOM2: { $arrayElemAt: ["$MCTravelTHCheckboxPHYSICIANRECOM2", -1] },
                            MCTravelTHCheckboxPHYSICIANRECOM3: { $arrayElemAt: ["$MCTravelTHCheckboxPHYSICIANRECOM3", -1] },
                            MCTravelTHRadioButtonEscortBy: { $arrayElemAt: ["$MCTravelTHRadioButtonEscortBy", -1] },
                            MCTravelTHRadioButtonSeatType: { $arrayElemAt: ["$MCTravelTHRadioButtonSeatType", -1] },
                            MCTravelTHCheckboxWheelChairAssestance: { $arrayElemAt: ["$MCTravelTHCheckboxWheelChairAssestance", -1] },
                            MCTravelTHRadioButtonWheelChairAssestanceDetail: { $arrayElemAt: ["$MCTravelTHRadioButtonWheelChairAssestanceDetail", -1] },
                            MCTravelTHCheckboxOxygen: { $arrayElemAt: ["$MCTravelTHCheckboxOxygen", -1] },
                            MCTravelTHRadiobuttonOxygenAt: { $arrayElemAt: ["$MCTravelTHRadiobuttonOxygenAt", -1] },
                            MCTravelTHRadiobuttonOxygenFlow: { $arrayElemAt: ["$MCTravelTHRadiobuttonOxygenFlow", -1] },
                            MCTravelTHRadiobuttonOxygenType: { $arrayElemAt: ["$MCTravelTHRadiobuttonOxygenType", -1] },
                            MCTravelTHCheckboxGroundAm: { $arrayElemAt: ["$MCTravelTHCheckboxGroundAm", -1] },
                            MCTravelTHCheckboxGroundAmTrans: { $arrayElemAt: ["$MCTravelTHCheckboxGroundAmTrans", -1] },
                            MCTraveltyTHCheckboxGroundAmSpc: { $arrayElemAt: ["$MCTraveltyTHCheckboxGroundAmSpc", -1] },
                            MCTravelTHCheckboxDest: { $arrayElemAt: ["$MCTravelTHCheckboxDest", -1] },
                            MCTravelTHRediobuttomDestAtHosp: { $arrayElemAt: ["$MCTravelTHRediobuttomDestAtHosp", -1] },
                            MCTravelTHCheckboxOth: { $arrayElemAt: ["$MCTravelTHCheckboxOth", -1] },
                            MCTravelTHCheckboxOthDetail: { $arrayElemAt: ["$MCTravelTHCheckboxOthDetail", -1] },
                            MCTravelTHFromOrigin: { $arrayElemAt: ["$MCTravelTHFromOrigin", -1] },
                            MCTravelTHToDestination: { $arrayElemAt: ["$MCTravelTHToDestination", -1] },
                            MCTravelTHNotFit: { $arrayElemAt: ["$MCTravelTHNotFit", -1] },
                            MCTravelTHNotFitDetail: { $arrayElemAt: ["$MCTravelTHNotFitDetail", -1] },
                            MCTravelTHMedLicen: { $arrayElemAt: ["$MCTravelTHMedLicen", -1] },
                            MCTravelTHDoctorsignDateTime: { $arrayElemAt: ["$MCTravelTHDoctorsignDateTime", -1] },
                            MCTravelTHDrPrintname: { $arrayElemAt: ["$MCTravelTHDrPrintname", -1] },
                            CHIEFCOMPLAINTS: { $arrayElemAt: ["$CHIEFCOMPLAINTS.htmldatavalue", -1] },
                            CHIEFCOMPLAINTSTB: { $arrayElemAt: ["$CHIEFCOMPLAINTS.tabledata", -1] },
                            CHIEFCOMPLAINTSRT: { $arrayElemAt: ["$CHIEFCOMPLAINTS.richtextdata", -1] },
                            PRESENTILLNESS: { $arrayElemAt: ["$PRESENTILLNESS.htmldatavalue", -1] },
                            PRESENTILLNESSTB: { $arrayElemAt: ["$PRESENTILLNESS.tabledata", -1] },
                            PRESENTILLNESSRT: { $arrayElemAt: ["$PRESENTILLNESS.richtextdata", -1] },
                            DIAGNOSIS: { $arrayElemAt: ["$DIAGNOSIS.htmldatavalue", -1] },
                            DIAGNOSISTB: { $arrayElemAt: ["$DIAGNOSIS.tabledata", -1] },
                            DIAGNOSISRT: { $arrayElemAt: ["$DIAGNOSIS.richtextdata", -1] },
                            PROCEDURES: { $arrayElemAt: ["$PROCEDURES.htmldatavalue", -1] },
                            PROCEDURESTB: { $arrayElemAt: ["$PROCEDURES.tabledata", -1] },
                            PROCEDURESRT: { $arrayElemAt: ["$PROCEDURES.richtextdata", -1] },
                            SURGERYREQUEST: { $arrayElemAt: ["$SURGERYREQUEST.htmldatavalue", -1] },
                            SURGERYREQUESTTB: { $arrayElemAt: ["$SURGERYREQUEST.tabledata", -1] },
                            SURGERYREQUESTRT: { $arrayElemAt: ["$SURGERYREQUEST.richtextdata", -1] },
                        }
                    }
                ]).exec();
                result = resultMCAIRTH2;
            }
            catch (error) {
                this.logger.error('findMCAIRTH2 error:', error);
            }
            return result;
        });
    }
};
MCAIRTH2ReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCAIRTH2ReportService);
exports.MCAIRTH2ReportService = MCAIRTH2ReportService;
//# sourceMappingURL=mcairth2.report.service.js.map