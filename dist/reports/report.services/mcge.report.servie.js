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
let MCGEReportService = class MCGEReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findMCGE(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindMCGE = yield this.PatientformdetailsModel.aggregate([
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
                            "formtemplates.code": "129"
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
                            MCforGEname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEcaretitle: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEcaretitle"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEcarename: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEcarename"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElicenseno: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElicenseno"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEpatientname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEpatientname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEpatientage: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEpatientage"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEhn: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEhn"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEhospitaladd: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEhospitaladd"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEstartdate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEstartdate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEenddate: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEenddate"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEchiefcomplaint: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEchiefcomplaint"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEtreatedpatient: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEtreatedpatient"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEdiagnosis: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEdiagnosis"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEtreatment: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEtreatment"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGErecommendation: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGErecommendation"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel1: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel1"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGErecCheckbox: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGErecCheckbox"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElable2: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElable2"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEsign: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEsign"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel3: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel3"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEcaresign: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEcaresign"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEcarelicenseno: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEcarelicenseno"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel4: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel4"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEdatesign: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEdatesign"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            emp112: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "emp112"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEtitleconfirm: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEtitleconfirm"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEusername: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEusername"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEtext1: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEtext1"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEpatientnameconfirm: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEpatientnameconfirm"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEtext2: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEtext2"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel5: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel5"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEusersign: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEusersign"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel6: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel6"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEusersign2: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEusersign2"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel7: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel7"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEassignname: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEassignname"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGElabel8: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGElabel8"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $addFields: {
                            MCforGEdateusersign: { $arrayElemAt: [{
                                        $filter: {
                                            input: "$attributes",
                                            as: "vs",
                                            cond: { $eq: ["$$vs.attributename", "MCforGEdateusersign"] }
                                        }
                                    }, -1]
                            }
                        }
                    },
                    {
                        $group: {
                            _id: { patientvisituid: "$patientvisituid" },
                            MCforGEname: { "$push": "$MCforGEname.textvalue" },
                            MCforGEcaretitle: { "$push": "$MCforGEcaretitle.textvalue" },
                            MCforGEcarename: { "$push": "$MCforGEcarename.textvalue" },
                            MCforGElicenseno: { "$push": "$MCforGElicenseno.textvalue" },
                            MCforGEpatientname: { "$push": "$MCforGEpatientname.textvalue" },
                            MCforGEpatientage: { "$push": "$MCforGEpatientage.textvalue" },
                            MCforGEhn: { "$push": "$MCforGEhn.textvalue" },
                            MCforGEhospitaladd: { "$push": "$MCforGEhospitaladd.textvalue" },
                            MCforGEstartdate: { "$push": "$MCforGEstartdate.textvalue" },
                            MCforGEenddate: { "$push": "$MCforGEenddate.textvalue" },
                            MCforGEchiefcomplaint: { "$push": "$MCforGEchiefcomplaint.textvalue" },
                            MCforGEtreatedpatient: { "$push": "$MCforGEtreatedpatient.textvalue" },
                            MCforGEdiagnosis: { "$push": "$MCforGEdiagnosis.textvalue" },
                            MCforGEtreatment: { "$push": "$MCforGEtreatment.textvalue" },
                            MCforGErecommendation: { "$push": "$MCforGErecommendation.textvalue" },
                            MCforGElabel1: { "$push": "$MCforGElabel1.textvalue" },
                            MCforGErecCheckbox: { "$push": "$MCforGErecCheckbox.textvalue" },
                            MCforGElable2: { "$push": "$MCforGElable2.textvalue" },
                            MCforGEsign: { "$push": "$MCforGEsign.textvalue" },
                            MCforGElabel3: { "$push": "$MCforGElabel3.textvalue" },
                            MCforGEcaresign: { "$push": "$MCforGEcaresign.textvalue" },
                            MCforGEcarelicenseno: { "$push": "$MCforGEcarelicenseno.textvalue" },
                            MCforGElabel4: { "$push": "$MCforGElabel4.textvalue" },
                            MCforGEdatesign: { "$push": "$MCforGEdatesign.textvalue" },
                            emp112: { "$push": "$emp112.textvalue" },
                            MCforGEtitleconfirm: { "$push": "$MCforGEtitleconfirm.textvalue" },
                            MCforGEusername: { "$push": "$MCforGEusername.textvalue" },
                            MCforGEtext1: { "$push": "$MCforGEtext1.textvalue" },
                            MCforGEpatientnameconfirm: { "$push": "$MCforGEpatientnameconfirm.textvalue" },
                            MCforGEtext2: { "$push": "$MCforGEtext2.textvalue" },
                            MCforGElabel5: { "$push": "$MCforGElabel5.textvalue" },
                            MCforGEusersign: { "$push": "$MCforGEusersign.textvalue" },
                            MCforGElabel6: { "$push": "$MCforGElabel6.textvalue" },
                            MCforGEusersign2: { "$push": "$MCforGEusersign2.textvalue" },
                            MCforGElabel7: { "$push": "$MCforGElabel7.textvalue" },
                            MCforGEassignname: { "$push": "$MCforGEassignname.textvalue" },
                            MCforGElabel8: { "$push": "$MCforGElabel8.textvalue" },
                            MCforGEdateusersign: { "$push": "$MCforGEdateusersign.textvalue" },
                        }
                    },
                    {
                        $project: {
                            MCforGEname: { $arrayElemAt: ["$MCforGEname", -1] },
                            MCforGEcaretitle: { $arrayElemAt: ["$MCforGEcaretitle", -1] },
                            MCforGEcarename: { $arrayElemAt: ["$MCforGEcarename", -1] },
                            MCforGElicenseno: { $arrayElemAt: ["$MCforGElicenseno", -1] },
                            MCforGEpatientname: { $arrayElemAt: ["$MCforGEpatientname", -1] },
                            MCforGEpatientage: { $arrayElemAt: ["$MCforGEpatientage", -1] },
                            MCforGEhn: { $arrayElemAt: ["$MCforGEhn", -1] },
                            MCforGEhospitaladd: { $arrayElemAt: ["$MCforGEhospitaladd", -1] },
                            MCforGEstartdate: { $arrayElemAt: ["$MCforGEstartdate", -1] },
                            MCforGEenddate: { $arrayElemAt: ["$MCforGEenddate", -1] },
                            MCforGEchiefcomplaint: { $arrayElemAt: ["$MCforGEchiefcomplaint", -1] },
                            MCforGEtreatedpatient: { $arrayElemAt: ["$MCforGEtreatedpatient", -1] },
                            MCforGEdiagnosis: { $arrayElemAt: ["$MCforGEdiagnosis", -1] },
                            MCforGEtreatment: { $arrayElemAt: ["$MCforGEtreatment", -1] },
                            MCforGErecommendation: { $arrayElemAt: ["$MCforGErecommendation", -1] },
                            MCforGElabel1: { $arrayElemAt: ["$MCforGElabel1", -1] },
                            MCforGErecCheckbox: { $arrayElemAt: ["$MCforGErecCheckbox", -1] },
                            MCforGElable2: { $arrayElemAt: ["$MCforGElable2", -1] },
                            MCforGEsign: { $arrayElemAt: ["$MCforGEsign", -1] },
                            MCforGElabel3: { $arrayElemAt: ["$MCforGElabel3", -1] },
                            MCforGEcaresign: { $arrayElemAt: ["$MCforGEcaresign", -1] },
                            MCforGEcarelicenseno: { $arrayElemAt: ["$MCforGEcarelicenseno", -1] },
                            MCforGElabel4: { $arrayElemAt: ["$MCforGElabel4", -1] },
                            MCforGEdatesign: { $arrayElemAt: ["$MCforGEdatesign", -1] },
                            emp112: { $arrayElemAt: ["$emp112", -1] },
                            MCforGEtitleconfirm: { $arrayElemAt: ["$MCforGEtitleconfirm", -1] },
                            MCforGEusername: { $arrayElemAt: ["$MCforGEusername", -1] },
                            MCforGEtext1: { $arrayElemAt: ["$MCforGEtext1", -1] },
                            MCforGEpatientnameconfirm: { $arrayElemAt: ["$MCforGEpatientnameconfirm", -1] },
                            MCforGEtext2: { $arrayElemAt: ["$MCforGEtext2", -1] },
                            MCforGElabel5: { $arrayElemAt: ["$MCforGElabel5", -1] },
                            MCforGEusersign: { $arrayElemAt: ["$MCforGEusersign", -1] },
                            MCforGElabel6: { $arrayElemAt: ["$MCforGElabel6", -1] },
                            MCforGEusersign2: { $arrayElemAt: ["$MCforGEusersign2", -1] },
                            MCforGElabel7: { $arrayElemAt: ["$MCforGElabel7", -1] },
                            MCforGEassignname: { $arrayElemAt: ["$MCforGEassignname", -1] },
                            MCforGElabel8: { $arrayElemAt: ["$MCforGElabel8", -1] },
                            MCforGEdateusersign: { $arrayElemAt: ["$MCforGEdateusersign", -1] },
                        }
                    }
                ]).exec();
                result = resultfindMCGE;
            }
            catch (error) {
                this.logger.error('findMCGE error:', error);
            }
            return result;
        });
    }
};
MCGEReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], MCGEReportService);
exports.MCGEReportService = MCGEReportService;
//# sourceMappingURL=mcge.report.servie.js.map