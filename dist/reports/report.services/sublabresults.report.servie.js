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
let SUBLABRESULTSReportService = class SUBLABRESULTSReportService {
    constructor(logger, PatientformdetailsModel) {
        this.logger = logger;
        this.PatientformdetailsModel = PatientformdetailsModel;
    }
    findSUBLABRESULTS(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const resultfindSUBLABRESULTS = yield this.PatientformdetailsModel.aggregate([
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
                            LABRESULTS: {
                                $filter: {
                                    input: "$predefineddatas",
                                    as: "vs",
                                    cond: { $eq: ["$$vs.dataset", "LABRESULTS"] }
                                }
                            }
                        }
                    },
                    { $unwind: { path: "$LABRESULTS", preserveNullAndEmptyArrays: true } },
                    {
                        $project: {
                            patientformuid: "$patientformuid",
                            LABRESULTSTB: "$LABRESULTS.tabledata",
                        }
                    },
                    { $unwind: { path: "$LABRESULTSTB", preserveNullAndEmptyArrays: true } },
                ]).exec();
                result = resultfindSUBLABRESULTS;
            }
            catch (error) {
                this.logger.error('findSUBLABRESULTS error:', error);
            }
            return result;
        });
    }
};
SUBLABRESULTSReportService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('patientformdetails')),
    __metadata("design:paramtypes", [logger_1.ConsoleLogger,
        mongoose_1.Model])
], SUBLABRESULTSReportService);
exports.SUBLABRESULTSReportService = SUBLABRESULTSReportService;
//# sourceMappingURL=sublabresults.report.servie.js.map