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
const reports_service_1 = require("../reports.service");
let PrinterListReportService = class PrinterListReportService {
    constructor(reportsService, logger, printerconfigurationsModel) {
        this.reportsService = reportsService;
        this.logger = logger;
        this.printerconfigurationsModel = printerconfigurationsModel;
    }
    findPrinterlist(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                const _user = yield this.reportsService.findOrgByLoginId(req.loginuid);
                const resultPrinterLists = yield this.printerconfigurationsModel.aggregate([
                    { $match: {
                            'orguid': new mongoose_1.Types.ObjectId(req.organisationuid)
                        }
                    },
                    {
                        $lookup: {
                            from: "departments",
                            localField: "departmentuid",
                            foreignField: "_id",
                            as: "deptname"
                        }
                    },
                    {
                        $unwind: { path: "$deptname", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $project: {
                            Computername: "$devicename",
                            Departmentuid: "$departmentuid",
                            Deptname: "$deptname.name",
                            STATUS: "$statusflag",
                            ActiveFrom: "$activefrom",
                            ActiveTo: "$activeto",
                            Reportdetails: "$reportdetails"
                        }
                    },
                    {
                        $unwind: { path: "$Reportdetails", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $project: {
                            Computername: 1,
                            Departmentuid: 1,
                            Deptname: 1,
                            STATUS: 1,
                            ActiveFrom: 1,
                            ActiveTo: 1,
                            Reportuid: "$Reportdetails.reporttemplateuid",
                            Reportpath: "$Reportdetails.printerpath"
                        }
                    },
                    {
                        $unwind: { path: "$Result1", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $project: {
                            Computername: "$Computername",
                            Departmentuid: "$Departmentuid",
                            Deptname: "$Deptname",
                            STATUS: 1,
                            ActiveFrom: 1,
                            ActiveTo: 1,
                            Reportuid: "$Reportuid",
                            Reportpath: "$Reportpath"
                        }
                    },
                    {
                        $lookup: {
                            from: "reporttemplates",
                            localField: "Reportuid",
                            foreignField: "_id",
                            as: "reportinfo"
                        }
                    },
                    {
                        $unwind: { path: "$reportinfo", preserveNullAndEmptyArrays: true }
                    },
                    {
                        $project: {
                            Computername2: "$Computername",
                            Departmentuid2: "$Departmentuid",
                            Deptname2: "$Deptname",
                            STATUS2: "$STATUS",
                            ActiveFrom2: {
                                "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$ActiveFrom", timezone: "+07:00" }
                            },
                            ActiveTo2: {
                                "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$ActiveTo", timezone: "+07:00" }
                            },
                            Reportuid2: "$Reportuid",
                            Reportpath2: "$Reportpath",
                            Reportname2: "$reportinfo.name",
                            ReportParamType2: "$reportinfo.paramtype"
                        }
                    }
                ]).exec();
                result = resultPrinterLists;
            }
            catch (error) {
                this.logger.error('findPrinterlist error:', error);
            }
            return result;
        });
    }
};
PrinterListReportService = __decorate([
    common_1.Injectable(),
    __param(2, mongoose_2.InjectModel('printerconfigurations')),
    __metadata("design:paramtypes", [reports_service_1.ReportsService,
        logger_1.ConsoleLogger,
        mongoose_1.Model])
], PrinterListReportService);
exports.PrinterListReportService = PrinterListReportService;
//# sourceMappingURL=printerlist.report.servie.js.map