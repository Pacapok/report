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
let OPDClaimFormReportService = class OPDClaimFormReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findOPDClaimForm(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultOPDClaimforms = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "RT_COMMON_120"
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
                            "ToInsurance": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "to"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "InsuranceNumberHeader": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "To"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "hospitalname": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "namehosp"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "hn": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "hn1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "VisitDate": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "visit1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sendername": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "nameofsender"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HeaderCheckbox": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "hn123"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1PatientTitle": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "PTtitle"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1PatientName": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Name33"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "DoB": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "DOB"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Age": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "years33"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "NationalId": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Number"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Othercard": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Other3"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "CurrentAddress": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "adr"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "CurrentAddress": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "adr"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HomeNumber": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "phone1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "MobileNumber": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "phone"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "MobileNumber": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "phone"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1treatment": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "label"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2PatientTitle": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "titlept"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2PatientName": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "The"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "ReleatedAccident": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Is"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "ChiefComplaintHPI": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HPI1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "ChiefComplaintCC": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "CC1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "DateAccident": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "dateaccident"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "TimeAccident": {
                                $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "timeaccident"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "FirstSawInjury": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "dd"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "presentIllness": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "line13"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "PertinentClinicalFinding": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "physical"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "LevelConsciousness": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Conscious61"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Underlying": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "ud"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "UnderlyingDiag": { $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.sectionname", "Underlying conditions/disease"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "ICD10": { $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.sectionname", "4. Diagnosis ICD 10"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "TreatmentSture": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "sut11"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "WoundDressingTreatment": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "dressing11"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "PhysicalTherapyTreatment": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "phy11"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "MedicationTreatment": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "med11"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "OtherTreatmentSture": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Other1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Alcohol": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "injury"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SmellAlcohol": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "yes"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Pregnant": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Suspect0"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Pregnantweek": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "week"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "LMP": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "lmp2"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2OtherComment": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "re145"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2HospName": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "name147162"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2HospNumber": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "no148163"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2Physicianname": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Physician33"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2MedLicense": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "medlisen"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2Specialty": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Spe33"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec2SignDate": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "datt"] }
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
                    { $addFields: {
                            EXAMINATIONS: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "EXAMINATIONS"] }
                                }
                            }
                        }
                    },
                    { $addFields: {
                            DIAGNOSISUL: {
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
                            ORDERS: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "ORDERS"] }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            ToInsurance: { "$push": { $arrayElemAt: ["$ToInsurance.textvalue", -1] } },
                            FromHospitalDetail: { "$push": { $arrayElemAt: ["$hospitalname.textvalue", -1] } },
                            HN: { "$push": { $arrayElemAt: ["$hn.textvalue", -1] } },
                            InsuranceNumberHeader: { "$push": { $arrayElemAt: ["$InsuranceNumberHeader.textvalue", -1] } },
                            VisitDate: { "$push": { $arrayElemAt: ["$VisitDate.textvalue", -1] } },
                            Sendername: { "$push": { $arrayElemAt: ["$Sendername.textvalue", -1] } },
                            HeaderCheckbox: { "$push": { $arrayElemAt: ["$HeaderCheckbox.textvalue", -1] } },
                            Sec1PatientTitle: { "$push": { $arrayElemAt: ["$Sec1PatientTitle.textvalue", -1] } },
                            Sec1PatientName: { "$push": { $arrayElemAt: ["$Sec1PatientName.textvalue", -1] } },
                            DoB: { "$push": { $arrayElemAt: ["$DoB.textvalue", -1] } },
                            Age: { "$push": { $arrayElemAt: ["$Age.textvalue", -1] } },
                            NationalId: { "$push": { $arrayElemAt: ["$NationalId.textvalue", -1] } },
                            Othercard: { "$push": { $arrayElemAt: ["$Othercard.actualvalue.additionalvalue", -1] } },
                            CurrentAddress: { "$push": { $arrayElemAt: ["$CurrentAddress.textvalue", -1] } },
                            HomeNumber: { "$push": { $arrayElemAt: ["$HomeNumber.textvalue", -1] } },
                            MobileNumber: { "$push": { $arrayElemAt: ["$MobileNumber.textvalue", -1] } },
                            Sec1treatment: { "$push": { $arrayElemAt: ["$Sec1treatment.textvalue", -1] } },
                            Sec2PatientTitle: { "$push": { $arrayElemAt: ["$Sec2PatientTitle.textvalue", -1] } },
                            Sec2PatientName: { "$push": { $arrayElemAt: ["$Sec2PatientName.textvalue", -1] } },
                            ReleatedAccident: { "$push": { $arrayElemAt: ["$ReleatedAccident.textvalue", -1] } },
                            ChiefComplaintHPI: { "$push": { $arrayElemAt: ["$ChiefComplaintHPI.textvalue", -1] } },
                            ChiefComplaintCC: { "$push": { $arrayElemAt: ["$ChiefComplaintCC.textvalue", -1] } },
                            DateAccident: { "$push": { $arrayElemAt: ["$DateAccident.textvalue", -1] } },
                            TimeAccident: { "$push": { $arrayElemAt: ["$TimeAccident.textvalue", -1] } },
                            FirstSawInjury: { "$push": { $arrayElemAt: ["$FirstSawInjury.textvalue", -1] } },
                            presentIllness: { "$push": { $arrayElemAt: ["$presentIllness.textvalue", -1] } },
                            PertinentClinicalFinding: { "$push": { $arrayElemAt: ["$PertinentClinicalFinding.textvalue", -1] } },
                            LevelConsciousness: { "$push": { $arrayElemAt: ["$LevelConsciousness.textvalue", -1] } },
                            Underlying: { "$push": { $arrayElemAt: ["$Underlying.textvalue", -1] } },
                            UnderlyingDiag: { "$push": { $arrayElemAt: ["$UnderlyingDiag.tabledata", -1] } },
                            ICD10: { "$push": { $arrayElemAt: ["$ICD10.tabledata", -1] } },
                            TreatmentSture: { "$push": { $arrayElemAt: ["$TreatmentSture.textvalue", -1] } },
                            TreatmentStureDetail: { "$push": { $arrayElemAt: ["$TreatmentSture.actualvalue.additionalvalue", -1] } },
                            WoundDressingTreatment: { "$push": { $arrayElemAt: ["$WoundDressingTreatment.textvalue", -1] } },
                            WoundDressingTreatmentDetail: { "$push": { $arrayElemAt: ["$WoundDressingTreatment.actualvalue.additionalvalue", -1] } },
                            PhysicalTherapyTreatment: { "$push": { $arrayElemAt: ["$PhysicalTherapyTreatment.textvalue", -1] } },
                            PhysicalTherapyTreatmentDetail: { "$push": { $arrayElemAt: ["$PhysicalTherapyTreatment.actualvalue.additionalvalue", -1] } },
                            MedicationTreatment: { "$push": { $arrayElemAt: ["$MedicationTreatment.textvalue", -1] } },
                            MedicationTreatmentDetail: { "$push": { $arrayElemAt: ["$MedicationTreatment.actualvalue.additionalvalue", -1] } },
                            OtherTreatmentSture: { "$push": { $arrayElemAt: ["$OtherTreatmentSture.textvalue", -1] } },
                            OtherTreatmentStureDetail: { "$push": { $arrayElemAt: ["$OtherTreatmentSture.actualvalue.additionalvalue", -1] } },
                            Alcohol: { "$push": { $arrayElemAt: ["$Alcohol.textvalue", -1] } },
                            SmellAlcohol: { "$push": { $arrayElemAt: ["$SmellAlcohol.textvalue", -1] } },
                            Pregnant: { "$push": { $arrayElemAt: ["$Pregnant.textvalue", -1] } },
                            Pregnantweek: { "$push": { $arrayElemAt: ["$Pregnantweek.textvalue", -1] } },
                            LMP: { "$push": { $arrayElemAt: ["$LMP.textvalue", -1] } },
                            Sec2OtherComment: { "$push": { $arrayElemAt: ["$Sec2OtherComment.textvalue", -1] } },
                            Sec2HospName: { "$push": { $arrayElemAt: ["$Sec2HospName.textvalue", -1] } },
                            Sec2HospNumber: { "$push": { $arrayElemAt: ["$Sec2HospNumber.textvalue", -1] } },
                            Sec2Physicianname: { "$push": { $arrayElemAt: ["$Sec2Physicianname.textvalue", -1] } },
                            Sec2MedLicense: { "$push": { $arrayElemAt: ["$Sec2MedLicense.textvalue", -1] } },
                            Sec2Specialty: { "$push": { $arrayElemAt: ["$Sec2Specialty.textvalue", -1] } },
                            Sec2SignDate: { "$push": { $arrayElemAt: ["$Sec2SignDate.textvalue", -1] } },
                            PRESENTILLNESS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$PRESENTILLNESS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "1. Symptom/ Accident"] }
                                            }
                                        }, -1]
                                } },
                            EXAMINATIONS: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$EXAMINATIONS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "(B) Pertinent clinical findings (symptoms & sign)"] }
                                            }
                                        }, -1]
                                } },
                            DIAGNOSISUL: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DIAGNOSISUL",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Underlying conditions/disease"] }
                                            }
                                        }, -1]
                                } },
                            DIAGNOSISICD10: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$DIAGNOSISUL",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "4. Diagnosis ICD 10"] }
                                            }
                                        }, -1]
                                } },
                            MEDICINEORDERS: {
                                "$push": {
                                    $arrayElemAt: [{
                                            $filter: {
                                                input: "$ORDERS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Medicine"] }
                                            }
                                        }, -1]
                                }
                            },
                            LABORDERS: {
                                "$push": {
                                    $arrayElemAt: [{
                                            $filter: {
                                                input: "$ORDERS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Lab"] }
                                            }
                                        }, -1]
                                }
                            },
                            DIAGNOSTICORDERS: {
                                "$push": {
                                    $arrayElemAt: [{
                                            $filter: {
                                                input: "$ORDERS",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "Diagnostics"] }
                                            }
                                        }, -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            ToInsurance: { $arrayElemAt: ["$ToInsurance", -1] },
                            FromHospitalDetail: { $arrayElemAt: ["$FromHospitalDetail", -1] },
                            HN: { $arrayElemAt: ["$HN", -1] },
                            InsuranceNumberHeader: { $arrayElemAt: ["$InsuranceNumberHeader", -1] },
                            VisitDate: { $arrayElemAt: ["$VisitDate", -1] },
                            Sendername: { $arrayElemAt: ["$Sendername", -1] },
                            HeaderCheckbox: { $arrayElemAt: ["$HeaderCheckbox", -1] },
                            Sec1PatientTitle: { $arrayElemAt: ["$Sec1PatientTitle", -1] },
                            Sec1PatientName: { $arrayElemAt: ["$Sec1PatientName", -1] },
                            DoB: { $arrayElemAt: ["$DoB", -1] },
                            Age: { $arrayElemAt: ["$Age", -1] },
                            NationalId: { $arrayElemAt: ["$NationalId", -1] },
                            Othercard2: { $arrayElemAt: [{ $arrayElemAt: ["$Othercard", -1] }, -1] },
                            CurrentAddress: { $arrayElemAt: ["$CurrentAddress", -1] },
                            HomeNumber: { $arrayElemAt: ["$HomeNumber", -1] },
                            MobileNumber: { $arrayElemAt: ["$MobileNumber", -1] },
                            Sec1treatment: { $arrayElemAt: ["$Sec1treatment", -1] },
                            Sec2PatientTitle: { $arrayElemAt: ["$Sec2PatientTitle", -1] },
                            Sec2PatientName: { $arrayElemAt: ["$Sec2PatientName", -1] },
                            ReleatedAccident: { $arrayElemAt: ["$ReleatedAccident", -1] },
                            ChiefComplaintHPI: { $arrayElemAt: ["$ChiefComplaintHPI", -1] },
                            ChiefComplaintCC: { $arrayElemAt: ["$ChiefComplaintCC", -1] },
                            DateAccident: { $arrayElemAt: ["$DateAccident", -1] },
                            TimeAccident: { $arrayElemAt: ["$TimeAccident", -1] },
                            FirstSawInjury: { $arrayElemAt: ["$FirstSawInjury", -1] },
                            presentIllness: { $arrayElemAt: ["$presentIllness", -1] },
                            PertinentClinicalFinding: { $arrayElemAt: ["$PertinentClinicalFinding", -1] },
                            LevelConsciousness: { $ifNull: [{ $arrayElemAt: ["$LevelConsciousness", -1] }, ""] },
                            Underlying: { $arrayElemAt: ["$Underlying", -1] },
                            UnderlyingDiag: { $arrayElemAt: ["$UnderlyingDiag", -1] },
                            ICD10: { $arrayElemAt: ["$ICD10", -1] },
                            TreatmentSture: { $arrayElemAt: ["$TreatmentSture", -1] },
                            TreatmentStureDetail: { $arrayElemAt: ["$TreatmentStureDetail", -1] },
                            WoundDressingTreatment: { $arrayElemAt: ["$WoundDressingTreatment", -1] },
                            WoundDressingTreatmentDetail: { $arrayElemAt: ["$WoundDressingTreatmentDetail", -1] },
                            PhysicalTherapyTreatment: { $arrayElemAt: ["$PhysicalTherapyTreatment", -1] },
                            PhysicalTherapyTreatmentDetail: { $arrayElemAt: ["$PhysicalTherapyTreatmentDetail", -1] },
                            MedicationTreatment: { $arrayElemAt: ["$MedicationTreatment", -1] },
                            MedicationTreatmentDetail: { $arrayElemAt: ["$MedicationTreatmentDetail", -1] },
                            OtherTreatmentSture: { $arrayElemAt: ["$OtherTreatmentSture", -1] },
                            OtherTreatmentStureDetail: { $arrayElemAt: ["$OtherTreatmentStureDetail", -1] },
                            Alcohol: { $arrayElemAt: ["$Alcohol", -1] },
                            SmellAlcohol: { $arrayElemAt: ["$SmellAlcohol", -1] },
                            Pregnant: { $arrayElemAt: ["$Pregnant", -1] },
                            Pregnantweek: { $arrayElemAt: ["$Pregnantweek", -1] },
                            LMP: { $arrayElemAt: ["$LMP", -1] },
                            Sec2OtherComment: { $arrayElemAt: ["$Sec2OtherComment", -1] },
                            Sec2HospName: { $arrayElemAt: ["$Sec2HospName", -1] },
                            Sec2HospNumber: { $arrayElemAt: ["$Sec2HospNumber", -1] },
                            Sec2Physicianname: { $arrayElemAt: ["$Sec2Physicianname", -1] },
                            Sec2MedLicense: { $arrayElemAt: ["$Sec2MedLicense", -1] },
                            Sec2Specialty: { $arrayElemAt: ["$Sec2Specialty", -1] },
                            Sec2SignDate: { $arrayElemAt: ["$Sec2SignDate", -1] },
                            PRESENTILLNESS: { $arrayElemAt: ["$PRESENTILLNESS.htmldatavalue", -1] },
                            EXAMINATIONS: { $arrayElemAt: ["$EXAMINATIONS.htmldatavalue", -1] },
                            EXAMINATIONSTB: "$EXAMINATIONS.tabledata",
                            EXAMINATIONSRT: { $arrayElemAt: ["$EXAMINATIONS.richtextdata", -1] },
                            DIAGNOSISUL: { $arrayElemAt: ["$DIAGNOSISUL.htmldatavalue", -1] },
                            DIAGNOSISULTB: "$DIAGNOSISUL.tabledata",
                            DIAGNOSISICD10: { $arrayElemAt: ["$DIAGNOSISICD10.htmldatavalue", -1] },
                            DIAGNOSISICD10TB: { $arrayElemAt: ["$DIAGNOSISICD10.tabledata", -1] },
                            MEDICINEORDERS: { $arrayElemAt: ["$MEDICINEORDERS.htmldatavalue", -1] },
                            MEDICINEORDERSTB: { $arrayElemAt: ["$MEDICINEORDERS.tabledata", -1] },
                            MEDICINEORDERSRT: { $arrayElemAt: ["$MEDICINEORDERS.richtextdata", -1] },
                            LABORDERS: { $arrayElemAt: ["$LABORDERS.htmldatavalue", -1] },
                            LABORDERSTB: { $arrayElemAt: ["$LABORDERS.tabledata", -1] },
                            LABORDERSRT: { $arrayElemAt: ["$LABORDERS.richtextdata", -1] },
                            DIAGNOSTICORDERS: { $arrayElemAt: ["$DIAGNOSTICORDERS.htmldatavalue", -1] },
                            DIAGNOSTICORDERSTB: { $arrayElemAt: ["$DIAGNOSTICORDERS.tabledata", -1] },
                            DIAGNOSTICORDERSRT: { $arrayElemAt: ["$DIAGNOSTICORDERS.richtextdata", -1] },
                        }
                    }
                ]).exec();
                result = resultOPDClaimforms;
            }
            catch (error) {
                this.logger.error('findOPDClaimForm error:', error);
            }
            return result;
        });
    }
};
OPDClaimFormReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], OPDClaimFormReportService);
exports.OPDClaimFormReportService = OPDClaimFormReportService;
//# sourceMappingURL=opdclaimform.report.servie.js.map