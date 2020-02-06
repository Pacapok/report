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
const dateutils_1 = require("../../utils/dateutils");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const logger_1 = require("../../service/logger");
let STATTRAUMAReportService = class STATTRAUMAReportService {
    constructor(logger, TriagedetailsModel) {
        this.logger = logger;
        this.TriagedetailsModel = TriagedetailsModel;
    }
    findSTATTRAUMA(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindSTATTRAUMA = yield this.TriagedetailsModel.aggregate([
                    {
                        $match: {
                            statusflag: "A",
                            orguid: new mongoose_1.Types.ObjectId(req.organisationuid),
                        }
                    },
                    {
                        $lookup: {
                            from: "organisations",
                            localField: "orguid",
                            foreignField: "_id",
                            as: "organisations"
                        }
                    },
                    {
                        $unwind: { path: "$organisations", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "patients",
                            localField: "patientuid",
                            foreignField: "_id",
                            as: "patients"
                        }
                    },
                    {
                        $unwind: { path: "$patients", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "patientvisits",
                            localField: "patientvisituid",
                            foreignField: "_id",
                            as: "patientvisits"
                        }
                    },
                    {
                        $unwind: { path: "$patientvisits", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $match: {
                            "patientvisits.startdate": {
                                $gte: dateutils_1.default.convertGMTtoUTC(new Date(req.fromdate)),
                                $lte: dateutils_1.default.convertGMTtoUTC(new Date(req.todate))
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: "wards",
                            localField: "patientvisits.bedoccupancy.warduid",
                            foreignField: "_id",
                            as: "wards"
                        }
                    },
                    {
                        $unwind: { path: "$wards", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "beds",
                            localField: "patientvisits.bedoccupancy.beduid",
                            foreignField: "_id",
                            as: "beds"
                        }
                    },
                    {
                        $unwind: { path: "$beds", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "patientvisits.visitstatusuid",
                            foreignField: "_id",
                            as: "status"
                        }
                    },
                    {
                        $unwind: { path: "$status", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "departments",
                            localField: "departmentuid",
                            foreignField: "_id",
                            as: "triagedepartments"
                        }
                    },
                    {
                        $unwind: { path: "$triagedepartments", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "cchpis",
                            localField: "cchpiuid",
                            foreignField: "_id",
                            as: "cchpis"
                        }
                    },
                    {
                        $unwind: { path: "$cchpis", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "triagedby",
                            foreignField: "_id",
                            as: "triageusers"
                        }
                    },
                    {
                        $unwind: { path: "$triageusers", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "conciousnessuid",
                            foreignField: "_id",
                            as: "conciousness"
                        }
                    },
                    {
                        $unwind: { path: "$conciousness", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "emergencyleveluid",
                            foreignField: "_id",
                            as: "emergencylevel"
                        }
                    },
                    {
                        $unwind: { path: "$emergencylevel", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "gcseyemovementuid",
                            foreignField: "_id",
                            as: "gcseyemovement"
                        }
                    },
                    {
                        $unwind: { path: "$gcseyemovement", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "gcsmotoruid",
                            foreignField: "_id",
                            as: "gcsmotor"
                        }
                    },
                    {
                        $unwind: { path: "$gcsmotor", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "gcsverbaluid",
                            foreignField: "_id",
                            as: "gcsverbal"
                        }
                    },
                    {
                        $unwind: { path: "$gcsverbal", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "traumatypeuid",
                            foreignField: "_id",
                            as: "traumatype"
                        }
                    },
                    {
                        $unwind: { path: "$traumatype", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "diagnoses",
                            localField: "patientvisituid",
                            foreignField: "patientvisituid",
                            as: "diagnoses"
                        }
                    },
                    {
                        $unwind: { path: "$diagnoses", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "problems",
                            localField: "diagnoses.diagnosis.problemuid",
                            foreignField: "_id",
                            as: "problems"
                        }
                    },
                    {
                        $unwind: { path: "$problems", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            HN: { "$push": "$patients.mrn" },
                            EN: { "$push": "$patientvisits.visitid" },
                            isAdmit: { "$push": "$patientvisits.isconvertedfromopd" },
                            WARD: { "$push": "$wards.name" },
                            BED: { "$push": "$beds.name" },
                            STATUS: { "$push": "$status.valuedescription" },
                            visitDate: {
                                "$push": {
                                    "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$patientvisits.startdate", timezone: "+07:00" }
                                }
                            },
                            triageDept: { "$push": "$triagedepartments.name" },
                            CCHPI: { "$push": "$cchpis" },
                            triageby: { "$push": "$triageusers.name" },
                            conciousness: { "$push": "$conciousness.valuedescription" },
                            ESI: { "$push": "$emergencylevel.valuedescription" },
                            gcseyemovement: { "$push": "$gcseyemovement.valuedescription" },
                            gcsmotor: { "$push": "$gcsmotor.valuedescription" },
                            gcsverbal: { "$push": "$gcsverbal.valuedescription" },
                            traumatype: { "$push": "$traumatype.valuedescription" },
                            ICD10CODE: { "$push": "$problems.code" },
                            ICD10NAME: { "$push": "$problems.name" }
                        }
                    },
                    {
                        $project: {
                            HN: { $arrayElemAt: ["$HN", -1] },
                            EN: { $arrayElemAt: ["$EN", -1] },
                            isAdmit: { $arrayElemAt: ["$isAdmit", -1] },
                            WARD: { $arrayElemAt: ["$WARD", -1] },
                            BED: { $arrayElemAt: ["$BED", -1] },
                            STATUS: { $arrayElemAt: ["$STATUS", -1] },
                            visitDate: { $arrayElemAt: ["$visitDate", -1] },
                            triageDept: { $arrayElemAt: ["$triageDept", -1] },
                            CCHPI: { $arrayElemAt: ["$CCHPI", -1] },
                            triageby: { $arrayElemAt: ["$triageby", -1] },
                            conciousness: { $arrayElemAt: ["$conciousness", -1] },
                            ESI: { $arrayElemAt: ["$ESI", -1] },
                            gcseyemovement: { $arrayElemAt: ["$gcseyemovement", -1] },
                            gcsmotor: { $arrayElemAt: ["$gcsmotor", -1] },
                            gcsverbal: { $arrayElemAt: ["$gcsverbal", -1] },
                            traumatype: { $arrayElemAt: ["$traumatype", -1] },
                            ICD10CODE: { $arrayElemAt: ["$ICD10CODE", -1] },
                            ICD10NAME: { $arrayElemAt: ["$ICD10NAME", -1] }
                        }
                    }
                ]).exec();
                result = resultfindSTATTRAUMA;
            }
            catch (error) {
                this.logger.error('findSTATTRAUMA error:', error);
            }
            return result;
        });
    }
};
STATTRAUMAReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('triagedetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], STATTRAUMAReportService);
exports.STATTRAUMAReportService = STATTRAUMAReportService;
//# sourceMappingURL=stattraume.report.servie.js.map