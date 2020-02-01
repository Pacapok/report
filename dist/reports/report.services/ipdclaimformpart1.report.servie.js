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
let IPDClaimFormPart1ReportService = class IPDClaimFormPart1ReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findIPDClaimFormP1(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultIPDClaimformsP1 = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "IPD_CLAIM_FORM_PART1"
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
                            "IsDaycase": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "daycase"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "ToInsurance": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "ToInsurance"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Company": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Company"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HospitalAddress": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HospitalAddress"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "InsuranceMember": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "InsuranceMember"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "TimeSent": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "TimeSent"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "PTNAMEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "PTNAMEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HEADERHNDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERHNDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HEADERENDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERENDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HEADERADMITDATEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERADMITDATEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HEADERADMITTIMEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERADMITTIMEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "HEADERDISCHARGE": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "HEADERDISCHARGE"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1PTTITLEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1PTTITLEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1PTNAME": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1PTNAME"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1DOBDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1DOBDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1AGEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1AGEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1IsPERSONALID": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1IsPERSONALID"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1PERSONALID": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1PERSONALID"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1IsOTHER": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1IsOTHER"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1CURRENTADDDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1CURRENTADDDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1TELEPHONENUMBER": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1TELEPHONENUMBER"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1MOBILENUMBER": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1MOBILENUMBER"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "Sec1IsTREATMENT": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "Sec1IsTREATMENT"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PHYDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PHYDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2MEDSPECIALDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2MEDSPECIALDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2MEDLICDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2MEDLICDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ADMITDATE": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ADMITDATE"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2HNDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2HNDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ENDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ENDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2TEMP": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2TEMP"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2BP": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2BP"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2DBP": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2DBP"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PR": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PR"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2RR": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2RR"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2HPI": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2HPI"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PTILLNESSDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PTILLNESSDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2TREATMENTDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2TREATMENTDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2OTHER1": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2OTHER1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ILLTOACCIDENT": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ILLTOACCIDENT"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ALCOHOLADDICTSPEC": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ALCOHOLADDICTSPEC"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ALCOHOLADDICTSPECDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ALCOHOLADDICTSPECDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ALCOHOLADDICT": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ALCOHOLADDICT"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ILLTOACCIDENTDATE": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ILLTOACCIDENTDATE"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ILLTOACCIDENTTIME": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ILLTOACCIDENTTIME"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2ULDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2ULDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2DXDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2DXDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2INDICATIONADMITDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2INDICATIONADMITDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2REASONADMIT": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2REASONADMIT"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PLANTREATMENTDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PLANTREATMENTDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2LOSDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2LOSDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2OTHER2": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2OTHER2"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2CASETYPE": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2CASETYPE"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PRIVATECASEDETAIL": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PRIVATECASEDETAIL"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC2PHYSIGNDATE": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC2PHYSIGNDATE"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC3ADMIT1": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC3ADMIT1"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC3ADMIT2": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC3ADMIT2"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC3ADMIT3": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC3ADMIT3"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC3ADMIT4": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC3ADMIT4"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            "SEC3ADMIT5": { $filter: {
                                    input: "$attributes",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.attributename", "SEC3ADMIT5"] }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            SEC3ULCONDITION: {
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
                            SEC3PRODIAG: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "DIAGNOSIS"] }
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            HEADDEPTCODE: { "$push": "$departments.code" },
                            HEADDEPTNAME: { "$push": "$departments.name" },
                            HEADDRCODE: { "$push": "$careproviders.code" },
                            HEADDRNAME: { "$push": "$careproviders.name" },
                            HEADREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
                            HEADREPORTFM: { "$push": "$reportconfigurations.documentno" },
                            IsDaycase: { "$push": "$IsDaycase.textvalue" },
                            ToInsurance: { "$push": "$ToInsurance.textvalue" },
                            Company: { "$push": "$Company.textvalue" },
                            HospitalAddress: { "$push": "$HospitalAddress.textvalue" },
                            InsuranceMember: { "$push": "$InsuranceMember.textvalue" },
                            TimeSent: { "$push": "$TimeSent.textvalue" },
                            PTNAMEDETAIL: { "$push": "$PTNAMEDETAIL.textvalue" },
                            HEADERHNDETAIL: { "$push": "$HEADERHNDETAIL.textvalue" },
                            HEADERENDETAIL: { "$push": "$HEADERENDETAIL.textvalue" },
                            HEADERADMITDATEDETAIL: { "$push": "$HEADERADMITDATEDETAIL.textvalue" },
                            HEADERADMITTIMEDETAIL: { "$push": "$HEADERADMITTIMEDETAIL.textvalue" },
                            HEADERDISCHARGE: { "$push": "$HEADERDISCHARGE.textvalue" },
                            Sec1PTTITLEDETAIL: { "$push": "$Sec1PTTITLEDETAIL.textvalue" },
                            Sec1PTNAME: { "$push": "$Sec1PTNAME.textvalue" },
                            Sec1DOBDETAIL: { "$push": "$Sec1DOBDETAIL.textvalue" },
                            Sec1AGEDETAIL: { "$push": "$Sec1AGEDETAIL.textvalue" },
                            Sec1IsPERSONALID: { "$push": "$Sec1IsPERSONALID.textvalue" },
                            Sec1PERSONALID: { "$push": "$Sec1PERSONALID.textvalue" },
                            Sec1IsOTHER: { "$push": "$Sec1IsOTHER.textvalue" },
                            Sec1IsOTHERDETAIL: { "$push": "$Sec1IsOTHER.actualvalue.additionalvalue" },
                            Sec1CURRENTADDDETAIL: { "$push": "$Sec1CURRENTADDDETAIL.textvalue" },
                            Sec1TELEPHONENUMBER: { "$push": "$Sec1TELEPHONENUMBER.textvalue" },
                            Sec1MOBILENUMBER: { "$push": "$Sec1MOBILENUMBER.textvalue" },
                            Sec1IsTREATMENT: { "$push": "$Sec1IsTREATMENT.textvalue" },
                            SEC2PHYDETAIL: { "$push": "$SEC2PHYDETAIL.textvalue" },
                            SEC2MEDSPECIALDETAIL: { "$push": "$SEC2MEDSPECIALDETAIL.textvalue" },
                            SEC2MEDLICDETAIL: { "$push": "$SEC2MEDLICDETAIL.textvalue" },
                            SEC2ADMITDATE: { "$push": "$SEC2ADMITDATE.textvalue" },
                            SEC2HNDETAIL: { "$push": "$SEC2HNDETAIL.textvalue" },
                            SEC2ENDETAIL: { "$push": "$SEC2ENDETAIL.textvalue" },
                            SEC2TEMP: { "$push": "$SEC2TEMP.textvalue" },
                            SEC2BP: { "$push": "$SEC2BP.textvalue" },
                            SEC2DBP: { "$push": "$SEC2DBP.textvalue" },
                            SEC2PR: { "$push": "$SEC2PR.textvalue" },
                            SEC2RR: { "$push": "$SEC2RR.textvalue" },
                            SEC2HPI: { "$push": "$SEC2HPI.textvalue" },
                            SEC2PTILLNESSDETAIL: { "$push": "$SEC2PTILLNESSDETAIL.textvalue" },
                            SEC2TREATMENTDETAIL: { "$push": "$SEC2TREATMENTDETAIL.textvalue" },
                            SEC2OTHER1: { "$push": "$SEC2OTHER1.textvalue" },
                            SEC2ILLTOACCIDENT: { "$push": "$SEC2ILLTOACCIDENT.textvalue" },
                            SEC2ILLTOACCIDENTDATE: { "$push": "$SEC2ILLTOACCIDENTDATE.textvalue" },
                            SEC2ILLTOACCIDENTTIME: { "$push": "$SEC2ILLTOACCIDENTTIME.textvalue" },
                            SEC2ALCOHOLADDICT: { "$push": "$SEC2ALCOHOLADDICT.textvalue" },
                            SEC2ALCOHOLADDICTSPEC: { "$push": "$SEC2ALCOHOLADDICTSPEC.textvalue" },
                            SEC2ALCOHOLADDICTSPECDETAIL: { "$push": "$SEC2ALCOHOLADDICTSPECDETAIL.textvalue" },
                            SEC2ULDETAIL: { "$push": "$SEC2ULDETAIL.textvalue" },
                            SEC2DXDETAIL: { "$push": "$SEC2DXDETAIL.textvalue" },
                            SEC2INDICATIONADMITDETAIL: { "$push": "$SEC2INDICATIONADMITDETAIL.textvalue" },
                            SEC2REASONADMIT: { "$push": "$SEC2REASONADMIT.textvalue" },
                            SEC2PLANTREATMENTDETAIL: { "$push": "$SEC2PLANTREATMENTDETAIL.textvalue" },
                            SEC2LOSDETAIL: { "$push": "$SEC2LOSDETAIL.textvalue" },
                            SEC2OTHER2: { "$push": "$SEC2OTHER2.actualvalue.additionalvalue" },
                            SEC2CASETYPE: { "$push": "$SEC2CASETYPE.textvalue" },
                            SEC2PRIVATECASEDETAIL: { "$push": "$SEC2PRIVATECASEDETAIL.textvalue" },
                            SEC2PHYSIGNDATE: { "$push": "$SEC2PHYSIGNDATE.textvalue" },
                            SEC3ADMIT1: { "$push": "$SEC3ADMIT1.textvalue" },
                            SEC3ADMIT2: { "$push": "$SEC3ADMIT2.textvalue" },
                            SEC3ADMIT2COMMENT: { "$push": "$SEC3ADMIT2.actualvalue.additionalvalue" },
                            SEC3ADMIT3: { "$push": "$SEC3ADMIT3.textvalue" },
                            SEC3ADMIT4: { "$push": "$SEC3ADMIT4.textvalue" },
                            SEC3ADMIT5: { "$push": "$SEC3ADMIT5.textvalue" },
                            SEC3ADMIT5COMMENT: { "$push": "$SEC3ADMIT5.actualvalue.additionalvalue" },
                            SEC3ULCONDITION: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$SEC3ULCONDITION",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "SEC3ULCONDITION"] }
                                            }
                                        }, -1]
                                }
                            },
                            SEC3PRODIAG: { "$push": { $arrayElemAt: [{
                                            $filter: {
                                                input: "$SEC3PRODIAG",
                                                as: "vs",
                                                cond: { $eq: ["$$vs.sectionname", "SEC3PRODIAG"] }
                                            }
                                        }, -1]
                                }
                            },
                        }
                    },
                    {
                        $project: {
                            HEADDEPTCODE: { $arrayElemAt: ["$HEADDEPTCODE", -1] },
                            HEADDEPTNAME: { $arrayElemAt: ["$HEADDEPTNAME", -1] },
                            HEADDRCODE: { $arrayElemAt: ["$HEADDRCODE", -1] },
                            HEADDRNAME: { $arrayElemAt: ["$HEADDRNAME", -1] },
                            HEADREPORTTYPE: { $arrayElemAt: ["$HEADREPORTTYPE", -1] },
                            HEADREPORTFM: { $arrayElemAt: ["$HEADREPORTFM", -1] },
                            IsDaycase: { $arrayElemAt: ["$IsDaycase", -1] },
                            ToInsurance: { $arrayElemAt: ["$ToInsurance", -1] },
                            Company: { $arrayElemAt: ["$Company", -1] },
                            HospitalAddress: { $arrayElemAt: ["$HospitalAddress", -1] },
                            InsuranceMember: { $arrayElemAt: ["$InsuranceMember", -1] },
                            TimeSent: { $arrayElemAt: ["$TimeSent", -1] },
                            PTNAMEDETAIL: { $arrayElemAt: ["$PTNAMEDETAIL", -1] },
                            HEADERHNDETAIL: { $arrayElemAt: ["$HEADERHNDETAIL", -1] },
                            HEADERENDETAIL: { $arrayElemAt: ["$HEADERENDETAIL", -1] },
                            HEADERADMITDATEDETAIL: { $arrayElemAt: ["$HEADERADMITDATEDETAIL", -1] },
                            HEADERADMITTIMEDETAIL: { $arrayElemAt: ["$HEADERADMITTIMEDETAIL", -1] },
                            HEADERDISCHARGE: { $arrayElemAt: ["$HEADERDISCHARGE", -1] },
                            Sec1PTTITLEDETAIL: { $arrayElemAt: ["$Sec1PTTITLEDETAIL", -1] },
                            Sec1PTNAME: { $arrayElemAt: ["$Sec1PTNAME", -1] },
                            Sec1DOBDETAIL: { $arrayElemAt: ["$Sec1DOBDETAIL", -1] },
                            Sec1AGEDETAIL: { $arrayElemAt: ["$Sec1AGEDETAIL", -1] },
                            Sec1IsPERSONALID: { $arrayElemAt: ["$Sec1IsPERSONALID", -1] },
                            Sec1PERSONALID: { $arrayElemAt: ["$Sec1PERSONALID", -1] },
                            Sec1IsOTHER: { $arrayElemAt: ["$Sec1IsOTHER", -1] },
                            Sec1IsOTHERDETAIL: { $arrayElemAt: ["$Sec1IsOTHERDETAIL", -1] },
                            Sec1CURRENTADDDETAIL: { $arrayElemAt: ["$Sec1CURRENTADDDETAIL", -1] },
                            Sec1TELEPHONENUMBER: { $arrayElemAt: ["$Sec1TELEPHONENUMBER", -1] },
                            Sec1MOBILENUMBER: { $arrayElemAt: ["$Sec1MOBILENUMBER", -1] },
                            Sec1IsTREATMENT: { $arrayElemAt: ["$Sec1IsTREATMENT", -1] },
                            SEC2PHYDETAIL: { $arrayElemAt: ["$SEC2PHYDETAIL", -1] },
                            SEC2MEDSPECIALDETAIL: { $arrayElemAt: ["$SEC2MEDSPECIALDETAIL", -1] },
                            SEC2MEDLICDETAIL: { $arrayElemAt: ["$SEC2MEDLICDETAIL", -1] },
                            SEC2ADMITDATE: { $arrayElemAt: ["$SEC2ADMITDATE", -1] },
                            SEC2HNDETAIL: { $arrayElemAt: ["$SEC2HNDETAIL", -1] },
                            SEC2ENDETAIL: { $arrayElemAt: ["$SEC2ENDETAIL", -1] },
                            SEC2TEMP: { $arrayElemAt: ["$SEC2TEMP", -1] },
                            SEC2BP: { $arrayElemAt: ["$SEC2BP", -1] },
                            SEC2DBP: { $arrayElemAt: ["$SEC2DBP", -1] },
                            SEC2PR: { $arrayElemAt: ["$SEC2PR", -1] },
                            SEC2RR: { $arrayElemAt: ["$SEC2RR", -1] },
                            SEC2HPI: { $arrayElemAt: ["$SEC2HPI", -1] },
                            SEC2PTILLNESSDETAIL: { $arrayElemAt: ["$SEC2PTILLNESSDETAIL", -1] },
                            SEC2TREATMENTDETAIL: { $arrayElemAt: ["$SEC2TREATMENTDETAIL", -1] },
                            SEC2OTHER1: { $arrayElemAt: ["$SEC2OTHER1", -1] },
                            SEC2ILLTOACCIDENT: { $arrayElemAt: ["$SEC2ILLTOACCIDENT", -1] },
                            SEC2ILLTOACCIDENTDATE: { $arrayElemAt: ["$SEC2ILLTOACCIDENTDATE", -1] },
                            SEC2ILLTOACCIDENTTIME: { $arrayElemAt: ["$SEC2ILLTOACCIDENTTIME", -1] },
                            SEC2ALCOHOLADDICT: { $arrayElemAt: ["$SEC2ALCOHOLADDICT", -1] },
                            SEC2ALCOHOLADDICTSPEC: { $arrayElemAt: ["$SEC2ALCOHOLADDICTSPEC", -1] },
                            SEC2ALCOHOLADDICTSPECDETAIL: { $arrayElemAt: ["$SEC2ALCOHOLADDICTSPECDETAIL", -1] },
                            SEC2ULDETAIL: { $arrayElemAt: ["$SEC2ULDETAIL", -1] },
                            SEC2DXDETAIL: { $arrayElemAt: ["$SEC2DXDETAIL", -1] },
                            SEC2INDICATIONADMITDETAIL: { $arrayElemAt: ["$SEC2INDICATIONADMITDETAIL", -1] },
                            SEC2REASONADMIT: { $arrayElemAt: ["$SEC2REASONADMIT", -1] },
                            SEC2PLANTREATMENTDETAIL: { $arrayElemAt: ["$SEC2PLANTREATMENTDETAIL", -1] },
                            SEC2LOSDETAIL: { $arrayElemAt: ["$SEC2LOSDETAIL", -1] },
                            SEC2OTHER2: { $arrayElemAt: ["$SEC2OTHER2", -1] },
                            SEC2CASETYPE: { $arrayElemAt: ["$SEC2CASETYPE", -1] },
                            SEC2PRIVATECASEDETAIL: { $arrayElemAt: ["$SEC2PRIVATECASEDETAIL", -1] },
                            SEC2PHYSIGNDATE: { $arrayElemAt: ["$SEC2PHYSIGNDATE", -1] },
                            SEC3ADMIT1: { $arrayElemAt: ["$SEC3ADMIT1", -1] },
                            SEC3ADMIT2: { $arrayElemAt: ["$SEC3ADMIT2", -1] },
                            SEC3ADMIT2COMMENT: { $arrayElemAt: ["$SEC3ADMIT2COMMENT", -1] },
                            SEC3ADMIT3: { $arrayElemAt: ["$SEC3ADMIT3", -1] },
                            SEC3ADMIT4: { $arrayElemAt: ["$SEC3ADMIT4", -1] },
                            SEC3ADMIT5: { $arrayElemAt: ["$SEC3ADMIT5", -1] },
                            SEC3ADMIT5COMMENT: { $arrayElemAt: ["$SEC3ADMIT5COMMENT", -1] },
                            SEC3ULCONDITION: { $arrayElemAt: ["$SEC3ULCONDITION.htmldatavalue", -1] },
                            SEC3ULCONDITIONTB: { $arrayElemAt: ["$SEC3ULCONDITION.tabledata", -1] },
                            SEC3ULCONDITIONRT: { $arrayElemAt: ["$SEC3ULCONDITION.richtextdata", -1] },
                            SEC3PRODIAG: { $arrayElemAt: ["$SEC3PRODIAG.htmldatavalue", -1] },
                            SEC3PRODIAGTB: { $arrayElemAt: ["$SEC3PRODIAG.tabledata", -1] },
                            SEC3PRODIAGRT: { $arrayElemAt: ["$SEC3PRODIAG.richtextdata", -1] }
                        }
                    }
                ]).exec();
                result = resultIPDClaimformsP1;
            }
            catch (error) {
                this.logger.error('findIPDClaimFormP1 error:', error);
            }
            return result;
        });
    }
};
IPDClaimFormPart1ReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], IPDClaimFormPart1ReportService);
exports.IPDClaimFormPart1ReportService = IPDClaimFormPart1ReportService;
//# sourceMappingURL=ipdclaimformpart1.report.servie.js.map