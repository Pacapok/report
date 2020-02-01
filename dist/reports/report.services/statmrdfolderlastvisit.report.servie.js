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
let STATMRDFolderLastVisitReportService = class STATMRDFolderLastVisitReportService {
    constructor(logger, PatientvisitsModel) {
        this.logger = logger;
        this.PatientvisitsModel = PatientvisitsModel;
    }
    findSTATMRDFolderLastVisit(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindSTATMRDFolderLastVisit = yield this.PatientvisitsModel.aggregate([
                    {
                        $match: {
                            statusflag: "A",
                            orguid: new mongoose_1.Types.ObjectId(req.organisationuid)
                        }
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
                        $match: {
                            "patients.statusflag": "A"
                        }
                    },
                    {
                        $lookup: {
                            from: "mrdfolders",
                            localField: "patients._id",
                            foreignField: "patientuid",
                            as: "mrdfolders"
                        }
                    },
                    {
                        $unwind: { path: "$mrdfolders", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "patients.titleuid",
                            foreignField: "_id",
                            as: "titles"
                        }
                    },
                    {
                        $unwind: { path: "$titles", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "patients.localnametitleuid",
                            foreignField: "_id",
                            as: "titlesTH"
                        }
                    },
                    {
                        $unwind: { path: "$titlesTH", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "mrdfolders.foldertypeuid",
                            foreignField: "_id",
                            as: "foldertype"
                        }
                    },
                    {
                        $unwind: { path: "$foldertype", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: "referencevalues",
                            localField: "mrdfolders.statusuid",
                            foreignField: "_id",
                            as: "folderstatus"
                        }
                    },
                    {
                        $unwind: { path: "$folderstatus", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $project: {
                            HN: "$patients.mrn",
                            EN: "$visitid",
                            LastVisit: "$startdate",
                            TitleName: "$titles.valuedescription",
                            FirstName: "$patients.firstname",
                            MiddleName: "$patients.middlename",
                            LastName: "$patients.lastname",
                            TitleNameTH: "$titlesTH.valuedescription",
                            FirstNameTH: "$patients.localfirstname",
                            MiddleNameTH: "$patients.localmiddlename",
                            LastNameTH: "$patients.locallastname",
                            FolderType: "$foldertype.valuedescription",
                            FolderStatus: "$folderstatus.valuedescription"
                        }
                    }
                ]).exec();
                result = resultfindSTATMRDFolderLastVisit;
            }
            catch (error) {
                this.logger.error('findSTATMRDFolderLastVisit error:', error);
            }
            return result;
        });
    }
};
STATMRDFolderLastVisitReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientvisits')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], STATMRDFolderLastVisitReportService);
exports.STATMRDFolderLastVisitReportService = STATMRDFolderLastVisitReportService;
//# sourceMappingURL=statmrdfolderlastvisit.report.servie.js.map