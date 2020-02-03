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
const statmrdfolderlastvisit_report_servie_1 = require("./report.services/statmrdfolderlastvisit.report.servie");
const sublabresults_report_servie_1 = require("./report.services/sublabresults.report.servie");
const subradio_report_servie_1 = require("./report.services/subradio.report.servie");
const printerlist_report_servie_1 = require("./report.services/printerlist.report.servie");
const mcworkth_report_servie_1 = require("./report.services/mcworkth.report.servie");
const mcworken_report_servie_1 = require("./report.services/mcworken.report.servie");
const mcge_report_servie_1 = require("./report.services/mcge.report.servie");
const mcgenen_report_servie_1 = require("./../reports/report.services/mcgenen.report.servie");
const mcgenth_report_servie_1 = require("./../reports/report.services/mcgenth.report.servie");
const mcextenth_report_servie_1 = require("./report.services/mcextenth.report.servie");
const mcextenen_report_servie_1 = require("./report.services/mcextenen.report.servie");
const mcairth_report_servie_1 = require("./report.services/mcairth.report.servie");
const mcairen_report_servie_1 = require("./report.services/mcairen.report.servie");
const mc5th_report_servie_1 = require("./report.services/mc5th.report.servie");
const mc5en_report_servie_1 = require("./report.services/mc5en.report.servie");
const referen_report_servie_1 = require("./report.services/referen.report.servie");
const referth_report_servie_1 = require("./report.services/referth.report.servie");
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const opdclaimform_report_servie_1 = require("./report.services/opdclaimform.report.servie");
const ipdclaimformpart1_report_servie_1 = require("./report.services/ipdclaimformpart1.report.servie");
const ipdclaimformpart2_report_servie_1 = require("./../reports/report.services/ipdclaimformpart2.report.servie");
const subdiagnosis_report_servie_1 = require("./../reports/report.services/subdiagnosis.report.servie");
const logger_1 = require("../service/logger");
const swagger_1 = require("@nestjs/swagger");
const rt319req_1 = require("../models/rt319req");
const rt292req_1 = require("../models/rt292req");
const rt286req_1 = require("../models/rt286req");
const rt291req_1 = require("../models/rt291req");
const rt192req_1 = require("../models/rt192req");
const rt168req_1 = require("../models/rt168req");
const rt167req_1 = require("../models/rt167req");
const rt166req_1 = require("../models/rt166req");
const rt18req_1 = require("../models/rt18req");
const rt17sub1req_1 = require("../models/rt17sub1req");
const rt8req_1 = require("../models/rt8req");
const rt3req_1 = require("../models/rt3req");
const rt2req_1 = require("../models/rt2req");
const rt19req_1 = require("../models/rt19req");
const rt20req_1 = require("../models/rt20req");
const rt23req_1 = require("../models/rt23req");
const rt287req_1 = require("../models/rt287req");
const rt408req_1 = require("../models/rt408req");
const rt409req_1 = require("../models/rt409req");
const rt410req_1 = require("../models/rt410req");
const rt411req_1 = require("../models/rt411req");
const rt412req_1 = require("../models/rt412req");
const rt413req_1 = require("../models/rt413req");
const rt414req_1 = require("../models/rt414req");
const rt429req_1 = require("../models/rt429req");
const rt430req_1 = require("../models/rt430req");
const logoreq_1 = require("../models/logoreq");
const rt294req_1 = require("../models/rt294req");
const rt295req_1 = require("../models/rt295req");
const rt330req_1 = require("../models/rt330req");
const rt331req_1 = require("../models/rt331req");
const rt353req_1 = require("../models/rt353req");
const rt354req_1 = require("../models/rt354req");
const rt359req_1 = require("../models/rt359req");
const rt185req_1 = require("../models/rt185req");
const rt186req_1 = require("../models/rt186req");
const rt423req_1 = require("../models/rt423req");
const rt424req_1 = require("../models/rt424req");
const rt425req_1 = require("../models/rt425req");
const rt426req_1 = require("../models/rt426req");
const rt427req_1 = require("../models/rt427req");
const rt428req_1 = require("../models/rt428req");
const rt432req_1 = require("../models/rt432req");
const rt433req_1 = require("../models/rt433req");
const rt435req_1 = require("../models/rt435req");
const rt36req_1 = require("../models/rt36req");
const rt37req_1 = require("../models/rt37req");
const rt31req_1 = require("../models/rt31req");
const rt30req_1 = require("../models/rt30req");
const rt170req_1 = require("../models/rt170req");
const rt171req_1 = require("../models/rt171req");
const rt183req_1 = require("../models/rt183req");
const rt184req_1 = require("../models/rt184req");
const rt253req_1 = require("../models/rt253req");
const rt256req_1 = require("../models/rt256req");
const rt257req_1 = require("../models/rt257req");
const rt258req_1 = require("../models/rt258req");
const rt259req_1 = require("../models/rt259req");
const rt290req_1 = require("../models/rt290req");
const rt300req_1 = require("../models/rt300req");
const rt303req_1 = require("../models/rt303req");
const rt304req_1 = require("../models/rt304req");
const rt306req_1 = require("../models/rt306req");
const rt308req_1 = require("../models/rt308req");
const rt311req_1 = require("../models/rt311req");
const rt316req_1 = require("../models/rt316req");
const rt317req_1 = require("../models/rt317req");
const rt320req_1 = require("../models/rt320req");
const rt285req_1 = require("../models/rt285req");
const rt298req_1 = require("../models/rt298req");
const rt299req_1 = require("../models/rt299req");
const rt301req_1 = require("../models/rt301req");
const rt302req_1 = require("../models/rt302req");
const rt305req_1 = require("../models/rt305req");
const rt313req_1 = require("../models/rt313req");
const rt328req_1 = require("../models/rt328req");
const rt321req_1 = require("../models/rt321req");
const rt26req_1 = require("../models/rt26req");
const rt42req_1 = require("../models/rt42req");
const rt322req_1 = require("../models/rt322req");
const rt323req_1 = require("../models/rt323req");
const rt164req_1 = require("../models/rt164req");
const rt165req_1 = require("../models/rt165req");
const rt172req_1 = require("../models/rt172req");
const rt169req_1 = require("../models/rt169req");
const rt173req_1 = require("../models/rt173req");
const rt174req_1 = require("../models/rt174req");
const rt175req_1 = require("../models/rt175req");
const rt176req_1 = require("../models/rt176req");
const rt324req_1 = require("../models/rt324req");
const rt325req_1 = require("../models/rt325req");
const rt327req_1 = require("../models/rt327req");
const rt329req_1 = require("../models/rt329req");
const rt178req_1 = require("../models/rt178req");
const rt182req_1 = require("../models/rt182req");
const rt181req_1 = require("../models/rt181req");
const rt180req_1 = require("../models/rt180req");
const rt32req_1 = require("../models/rt32req");
const rt339req_1 = require("../models/rt339req");
const rt17mainreq_1 = require("../models/rt17mainreq");
const rt355req_1 = require("../models/rt355req");
const rt357req_1 = require("../models/rt357req");
const rt434req_1 = require("../models/rt434req");
const rt17sub2req_1 = require("../models/rt17sub2req");
const rt17sub3req_1 = require("../models/rt17sub3req");
const rt344req_1 = require("../models/rt344req");
const rt356req_1 = require("../models/rt356req");
const rt358req_1 = require("../models/rt358req");
const rt179mainreq_1 = require("../models/rt179mainreq");
const rt179sub1req_1 = require("../models/rt179sub1req");
const rt179sub2req_1 = require("../models/rt179sub2req");
const rt267req_1 = require("../models/rt267req");
const rt21req_1 = require("../models/rt21req");
const rt289req_1 = require("../models/rt289req");
const rt334req_1 = require("../models/rt334req");
const rt335req_1 = require("../models/rt335req");
const rt336req_1 = require("../models/rt336req");
const rt35req_1 = require("../models/rt35req");
const rt342req_1 = require("../models/rt342req");
const rt343req_1 = require("../models/rt343req");
const rt265req_1 = require("../models/rt265req");
const rt717req_1 = require("../models/rt717req");
const rt409billedreq_1 = require("../models/rt409billedreq");
const rt429billedreq_1 = require("../models/rt429billedreq");
const rt250req_1 = require("../models/rt250req");
const rt999req_1 = require("../models/rt999req");
const Rt17sub4Req_1 = require("../models/Rt17sub4Req");
const rt822req_1 = require("../models/rt822req");
const rt823billedreq_1 = require("../models/rt823billedreq");
const rt827billedreq_1 = require("../models/rt827billedreq");
const rt801req_1 = require("../models/rt801req");
const rt831req_1 = require("../models/rt831req");
const rt832req_1 = require("../models/rt832req");
const rt834req_1 = require("../models/rt834req");
const rtorganisationreq_1 = require("../models/rtorganisationreq");
const opdclaimformreq_1 = require("../models/opdclaimformreq");
const ipdclaimformreq_1 = require("../models/ipdclaimformreq");
const countervisitbynationreq_1 = require("../models/countervisitbynationreq");
const printerlistreq_1 = require("../models/printerlistreq");
const footerdetailreq_1 = require("../models/footerdetailreq");
const mcairenreq_1 = require("../models/mcairenreq");
const mcairthreq_1 = require("../models/mcairthreq");
const mc5threq_1 = require("../models/mc5threq");
const mc5enreq_1 = require("../models/mc5enreq");
const mcgereq_1 = require("../models/mcgereq");
const mcgenreq_1 = require("../models/mcgenreq");
const mcextenenreq_1 = require("../models/mcextenenreq");
const mcextenthreq_1 = require("../models/mcextenthreq");
const mcworkenreq_1 = require("../models/mcworkenreq");
const mcworkthreq_1 = require("../models/mcworkthreq");
const referreq_1 = require("../models/referreq");
const subdiagreq_1 = require("../models/subdiagreq");
const subradiologyresultsreq_1 = require("../models/subradiologyresultsreq");
const sublabresultsreq_1 = require("../models/sublabresultsreq");
const statptvipreq_1 = require("../models/statptvipreq");
const ptrevisit2dayreq_1 = require("../models/ptrevisit2dayreq");
const statdiagnosisreq_1 = require("../models/statdiagnosisreq");
const statvipappointreq_1 = require("../models/statvipappointreq");
const statconsultdeptreq_1 = require("../models/statconsultdeptreq");
const statconsultbydeptreq_1 = require("../models/statconsultbydeptreq");
const statmrdfolderlastvisits_1 = require("../models/statmrdfolderlastvisits");
let ReportsController = class ReportsController {
    constructor(reportsService, OPDClaimFormreportsService, IPDClaimFormPart1reportsService, IPDClaimFormPart2reportsService, MC5ENReportService, MC5THReportService, MCAIRENReportService, MCAIRTHReportService, MCGENENReportService, MCGENTHReportService, MCEXTENENReportService, MCEXTENTHReportService, MCGEReportService, MCWORKENReportService, MCWORKTHReportService, REFERENReportService, REFERTHReportService, SUBDIAGReportService, SUBRADIOLOGYRESULTSReportService, SUBLABRESULTSReportService, PrinterListReportService, STATMRDFolderLastVisitReportService, logger) {
        this.reportsService = reportsService;
        this.OPDClaimFormreportsService = OPDClaimFormreportsService;
        this.IPDClaimFormPart1reportsService = IPDClaimFormPart1reportsService;
        this.IPDClaimFormPart2reportsService = IPDClaimFormPart2reportsService;
        this.MC5ENReportService = MC5ENReportService;
        this.MC5THReportService = MC5THReportService;
        this.MCAIRENReportService = MCAIRENReportService;
        this.MCAIRTHReportService = MCAIRTHReportService;
        this.MCGENENReportService = MCGENENReportService;
        this.MCGENTHReportService = MCGENTHReportService;
        this.MCEXTENENReportService = MCEXTENENReportService;
        this.MCEXTENTHReportService = MCEXTENTHReportService;
        this.MCGEReportService = MCGEReportService;
        this.MCWORKENReportService = MCWORKENReportService;
        this.MCWORKTHReportService = MCWORKTHReportService;
        this.REFERENReportService = REFERENReportService;
        this.REFERTHReportService = REFERTHReportService;
        this.SUBDIAGReportService = SUBDIAGReportService;
        this.SUBRADIOLOGYRESULTSReportService = SUBRADIOLOGYRESULTSReportService;
        this.SUBLABRESULTSReportService = SUBLABRESULTSReportService;
        this.PrinterListReportService = PrinterListReportService;
        this.STATMRDFolderLastVisitReportService = STATMRDFolderLastVisitReportService;
        this.logger = logger;
    }
    getReportMCGENEN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCGENEN");
            this.logger.debug('Req', req);
            const data = yield this.MCGENENReportService.findMCGENEN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCGENTH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCGENTH");
            this.logger.debug('Req', req);
            const data = yield this.MCGENTHReportService.findMCGENTH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportREFERTH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findREFERTH");
            this.logger.debug('Req', req);
            const data = yield this.REFERTHReportService.findREFERTH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportREFEREN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findREFEREN");
            this.logger.debug('Req', req);
            const data = yield this.REFERENReportService.findREFEREN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCGE(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCGE");
            this.logger.debug('Req', req);
            const data = yield this.MCGEReportService.findMCGE(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCAIREN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCAIREN");
            this.logger.debug('Req', req);
            const data = yield this.MCAIRENReportService.findMCAIREN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCAIRTH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCAIRTH");
            this.logger.debug('Req', req);
            const data = yield this.MCAIRTHReportService.findMCAIRTH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMC5TH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMC5TH");
            this.logger.debug('Req', req);
            const data = yield this.MC5THReportService.findMC5TH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMC5EN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMC5EN");
            this.logger.debug('Req', req);
            const data = yield this.MC5ENReportService.findMC5EN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCEXTENEN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCEXTENEN");
            this.logger.debug('Req', req);
            const data = yield this.MCEXTENENReportService.findMCEXTENEN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCEXTENTH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCEXTENTH");
            this.logger.debug('Req', req);
            const data = yield this.MCEXTENTHReportService.findMCEXTENTH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCWORKEN(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCWORKEN");
            this.logger.debug('Req', req);
            const data = yield this.MCWORKENReportService.findMCWORKEN(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportMCWORKTH(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start findMCWORKTH");
            this.logger.debug('Req', req);
            const data = yield this.MCWORKTHReportService.findMCWORKTH(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportPatientOPDClaimForms(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.OPDClaimFormreportsService.findOPDClaimForm(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportPatientIPDClaimForms(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.IPDClaimFormPart1reportsService.findIPDClaimFormP1(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportPatientIPDClaimFormsP2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.IPDClaimFormPart2reportsService.findIPDClaimFormP2(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportsubdiag(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.SUBDIAGReportService.findSUBDIAG(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportsubradiologyresults(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.SUBRADIOLOGYRESULTSReportService.findSUBRADIOLOGYRESULTS(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportsublabresults(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.SUBLABRESULTSReportService.findSUBLABRESULTS(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultSTATMRDFolderLastVisit(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.STATMRDFolderLastVisitReportService.findSTATMRDFolderLastVisit(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultSTATVIPAppointment(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findSTATVPIAppointment(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultConsultDept(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start STATConsultDept");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findSTATConsultDept(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultSTATConsultByDeptReq(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start STATConsultByDeptReq");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findSTATConsultByDept(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultCounterVisitbyNation(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findCounterVisitbyNation(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultPTRevisit2Day(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findPTRevisit2Day(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultSTATdiagnosis(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findSTATdiagnosis(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportresultSTATPTVIP(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Patientvisit");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findSTATPTVIP(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportprinterlists(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Printerlist");
            this.logger.debug('Req', req);
            const data = yield this.PrinterListReportService.findPrinterlist(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getFooterdetaillists(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Footerdetailslist");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findFooterdetails(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getlogo(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start getlogo");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findOrgByLoginId(req.loginuid);
            this.logger.debug('Res', data);
            this.logger.log('End getlogo');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportdept1(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_dept1");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommondept1(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportdept2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_dept2");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommondept2(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_2");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon2(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport3(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_3");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon3(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_3');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport8(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_8");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon8(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_8');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17sub1(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17sub1");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17sub1(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17sub1');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17sub2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17sub2");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17sub2(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17sub2');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17sub3(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17sub3");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17sub3(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17sub3');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17sub4(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17sub4");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17sub4(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17sub4');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17sub5(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17sub5");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17sub5(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17sub5');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport17main(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_17main");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon17main(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_17main');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport18(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_18");
            const data = yield this.reportsService.findRTCommon18(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_18');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport19(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_19");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon19(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_19');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport20(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_20");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon20(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_20');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport21(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_21");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon21(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_21');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport23(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_23");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon23(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_23');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport26(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_26");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon26(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_26');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport30(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_30");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon30(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_30');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport31(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_31");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon31(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_31');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport32(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_32");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon32(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_32');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport35(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_35");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon35(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_35');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport36(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_36");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon36(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_36');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport37(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_37");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon37(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_37');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport42(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_42");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon42(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_42');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport164(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_164");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon164(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_164');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport165(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_165");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon165(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_165');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport166(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_166");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon166(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_166');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport167(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_167");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon167(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_167');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport168(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_168");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon168(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_168');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport169(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_169");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon169(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_169');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport170(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_170");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon170(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_170');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport171(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_171");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon171(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_171');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport172(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_172");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon172(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_172');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport173(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_173");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon173(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_173');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport174(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_174");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon174(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_174');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport175(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_175");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon175(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_175');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport176(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_176");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon176(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_176');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport178(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_178");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon178(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_178');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport179main(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_179main");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon179main(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_179main');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport179sub1(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_179sub1");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon179sub1(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_179sub1');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport179sub2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_179sub2");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon179sub2(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_179sub2');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport180(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_180");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon180(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_180');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport181(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_181");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon181(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_181');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport182(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_182");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon182(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_182');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport183(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_183");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon183(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_183');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport184(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_184");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon184(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_184');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport185(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_185");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon185(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_185');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport186(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_186");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon186(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_186');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport192(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_192");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon192(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_192');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport249(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_249");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon249(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_249');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport250(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_250");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon250(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_250');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport253(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_253");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon253(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_253');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport256(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_256");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon256(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_256');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport257(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_257");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon257(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_257');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport258(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_258");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon258(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_258');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport259(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_259");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon259(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_259');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport265(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_265");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon265(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_265');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport267(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_267");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon267(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_267');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport285(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_285");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon285(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_285');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport286(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_286");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon286(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_286');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport287(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_287");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon287(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_287');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport287sub1(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_287sub1");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon287sub1(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_287sub1');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport289(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_289");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon289(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_289');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport290(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_290");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon290(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_290');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport291(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_291");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon291(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_291');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport292(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_292");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon292(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_292');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport294(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_294");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon294(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_294');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport295(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_295");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon295(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_295');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport298(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_298");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon298(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_298');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport299(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_299");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon299(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_299');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport300(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_300");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon300(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_300');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport301(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_301");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon301(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_301');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport302(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_302");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon302(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_302');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport303(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_303");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon303(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_303');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport304(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_304");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon304(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_304');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport305(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_305");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon305(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_305');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport306(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_306");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon306(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_306');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport308(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_308");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon308(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_308');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport311(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_311");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon311(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_311');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport313(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_313");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon313(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_313');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport316(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_316");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon316(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_316');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport317(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_317");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon317(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_317');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport319(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_319");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon319(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_319');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport819(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_819");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon819(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_819');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport320(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_320");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon320(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_320');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport321(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_321");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon321(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_321');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport322(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_322");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon322(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_322');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport323(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_323");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon323(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_323');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport324(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_324");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon324(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_324');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport325(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_325");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon325(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_325');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport327(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_327");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon327(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_327');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport328(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_328");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon328(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_328');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport329(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_329");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon329(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_329');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport330(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_330");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon330(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_330');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport331(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_331");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon331(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_331');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport334(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_334");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon334(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_334');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport335(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_335");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon335(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_335');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport336(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_336");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon336(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_336');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport339(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_339");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon339(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_339');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport342(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_342");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon342(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_342');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport343(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_343");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon343(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_343');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport344(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_344");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon344(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_344');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport353(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_353");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon353(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_353');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport354(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_354");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon354(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_354');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport355(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_355");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon355(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_355');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport356(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_356");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon356(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_356');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport357(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_357");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon357(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_357');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport358(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_358");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon358(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_358');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport359(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_359");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon359(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_359');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport408(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_408");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon408(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_408');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport409(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_409");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon409(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_409');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport410(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_410");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon410(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_410');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport411(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_411");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon411(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_411');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport412(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_412");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon412(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_412');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport413(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_413");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon413(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_413');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport414(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_414");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon414(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_414');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport423(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_423");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon423(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_423');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport424(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_424");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon424(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_424');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport425(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_425");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon425(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_425');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport426(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_426");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon426(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_426');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport427(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_427");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon427(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_427');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport428(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_428");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon428(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_428');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport429(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_429");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon429(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_429');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport430(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_430");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon430(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_430');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport432(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_432");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon432(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_432');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport433(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_433");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon433(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_433');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport434(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_434");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon434(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_434');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport435(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_435");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon435(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_435');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport409_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_409_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon409_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_409_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport409_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_409_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon409_billed_prov(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_409_billed_prov');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport429_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_429_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon429_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_429_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport429_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_429_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon429_billed_prov(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_429_billed_prov');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport425_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_425_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon425_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_425_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport425_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_425_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon425_billed_prov(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_425_billed_prov');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport424_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_424_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon424_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_424_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport424_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_424_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon424_billed_prov(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_424_billed_prov');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport423_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_423_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon423_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_423_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport286_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_286_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon286_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_286_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport717(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_717");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon717(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_717');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport811(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_811");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon811(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_811');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport815(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_815");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon815(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_815');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport816(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_816");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon816(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_816');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport817(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_817");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon817(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_817');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport818(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_818");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon818(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_818');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport820(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_820");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon820(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_820');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport802(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_802");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon802(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_802');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport822(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_822");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon822(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_822');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport28(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_28");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon28(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_28');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport28_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_28_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon28_billed(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_28_billed');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport823_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_823_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon823_billed(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport823_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_823_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon823_billed_prov(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport827_billed(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_827_billed");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon827_billed(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport827_billed_prov(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_827_billed_prov");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon827_billed_prov(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport801(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_801");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon801(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_801');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport831(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_831");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon831(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport832(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_832");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon832(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport833(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_833");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon833(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport834(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_834");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon834(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport835(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_835");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon835(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_835');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport836(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_836");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon836(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_836');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport837(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_837");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon837(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_837');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport839(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_839");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon839(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_839');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport840(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_840");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon840(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_840');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport841(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_841");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon841(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_841');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub1(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub1");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub1(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub1');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub2(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub2");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub2(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub2');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub3(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub3");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub3(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub3');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub4(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub4");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub4(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub4');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub5(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub5");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub5(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub5');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub6(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub6");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub6(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub6');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub7(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub7");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub7(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub7');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub8(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub8");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub8(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub8');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport842sub9(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_842sub9");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon842sub9(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_842sub9');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport843(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_843");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon843(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_843');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport844(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_844");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon844(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_844');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport845(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_845");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon845(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_845');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport846(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_846");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon846(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_846');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport847(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_847");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon847(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_847');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport848(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_848");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon848(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_848');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport849(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_849");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon849(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_849');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport850(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_850");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon850(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_850');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReport851(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start rt_common_851");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findRTCommon851(req);
            this.logger.debug('Res', data);
            this.logger.log('End rt_common_851');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    FnPatientbill(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start FnPatientbill");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.FnPatientbill(req);
            this.logger.debug('Res', data);
            this.logger.log('End FnPatientbill');
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    getReportOrganisation(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start Organisation");
            this.logger.debug('Req', req);
            const data = yield this.reportsService.findOrganisation(req);
            this.logger.debug('Res', data);
            return res.status(common_1.HttpStatus.OK).json(data);
        });
    }
    ping(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.log("Start ping");
            this.logger.log('End ping');
            return res.status(common_1.HttpStatus.OK).json('Success');
        });
    }
};
__decorate([
    common_1.Post('/mcgenen'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcgenreq_1.MCGENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCGENEN", null);
__decorate([
    common_1.Post('/mcgenth'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcgenreq_1.MCGENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCGENTH", null);
__decorate([
    common_1.Post('/referth'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, referreq_1.REFERReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportREFERTH", null);
__decorate([
    common_1.Post('/referen'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, referreq_1.REFERReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportREFEREN", null);
__decorate([
    common_1.Post('/mcge'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcgereq_1.MCGEReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCGE", null);
__decorate([
    common_1.Post('/mcairen'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcairenreq_1.MCAIRENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCAIREN", null);
__decorate([
    common_1.Post('/mcairth'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcairthreq_1.MCAIRTHReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCAIRTH", null);
__decorate([
    common_1.Post('/mc5th'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mc5threq_1.MC5THReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMC5TH", null);
__decorate([
    common_1.Post('/mc5en'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mc5enreq_1.MC5ENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMC5EN", null);
__decorate([
    common_1.Post('/mcextenen'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcextenenreq_1.MCEXTENENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCEXTENEN", null);
__decorate([
    common_1.Post('/mcextenth'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcextenthreq_1.MCEXTENTHReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCEXTENTH", null);
__decorate([
    common_1.Post('/mcworken'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcworkenreq_1.MCWORKENReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCWORKEN", null);
__decorate([
    common_1.Post('/mcworkth'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mcworkthreq_1.MCWORKTHReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportMCWORKTH", null);
__decorate([
    common_1.Post('/opdclaimform'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, opdclaimformreq_1.OPDClaimFormReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportPatientOPDClaimForms", null);
__decorate([
    common_1.Post('/ipdclaimform'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ipdclaimformreq_1.IPDClaimFormReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportPatientIPDClaimForms", null);
__decorate([
    common_1.Post('/ipdclaimformpart2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ipdclaimformreq_1.IPDClaimFormReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportPatientIPDClaimFormsP2", null);
__decorate([
    common_1.Post('/subdiag'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, subdiagreq_1.SUBDIAGReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsubdiag", null);
__decorate([
    common_1.Post('/subradiologyresults'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, subradiologyresultsreq_1.SUBRADIOLOGYRESULTSReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsubradiologyresults", null);
__decorate([
    common_1.Post('/sublabresults'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, sublabresultsreq_1.SUBLABRESULTSReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportsublabresults", null);
__decorate([
    common_1.Post('/statmrdfolderlastvisit'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statmrdfolderlastvisits_1.STATMRDFolderLastVisitReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultSTATMRDFolderLastVisit", null);
__decorate([
    common_1.Post('/statvipappointment'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statvipappointreq_1.STATVPIAppointmentReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultSTATVIPAppointment", null);
__decorate([
    common_1.Post('/consultdept'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statconsultdeptreq_1.STATConsultDeptReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultConsultDept", null);
__decorate([
    common_1.Post('/consultbydept'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statconsultbydeptreq_1.STATConsultByDeptReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultSTATConsultByDeptReq", null);
__decorate([
    common_1.Post('/countervisitbynation'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, countervisitbynationreq_1.CounterVisitbyNationReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultCounterVisitbyNation", null);
__decorate([
    common_1.Post('/ptrevisit2day'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ptrevisit2dayreq_1.PTRevisit2DayReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultPTRevisit2Day", null);
__decorate([
    common_1.Post('/statdiagnosisreport'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statdiagnosisreq_1.STATdiagnosisReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultSTATdiagnosis", null);
__decorate([
    common_1.Post('/statptvip'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, statptvipreq_1.STATPTVIPReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportresultSTATPTVIP", null);
__decorate([
    common_1.Post('/printerlist'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, printerlistreq_1.PrinterlistReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportprinterlists", null);
__decorate([
    common_1.Post('/footerdetails'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, footerdetailreq_1.FooterdetailReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getFooterdetaillists", null);
__decorate([
    common_1.Post('/logo'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, logoreq_1.LogoReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getlogo", null);
__decorate([
    common_1.Post('/rt_common_dept1'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportdept1", null);
__decorate([
    common_1.Post('/rt_common_dept2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportdept2", null);
__decorate([
    common_1.Post('/rt_common_2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt2req_1.Rt2Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport2", null);
__decorate([
    common_1.Post('/rt_common_3'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt3req_1.Rt3Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport3", null);
__decorate([
    common_1.Post('/rt_common_8'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt8req_1.Rt8Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport8", null);
__decorate([
    common_1.Post('/rt_common_17sub1'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt17sub1req_1.Rt17sub1Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17sub1", null);
__decorate([
    common_1.Post('/rt_common_17sub2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt17sub2req_1.Rt17sub2Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17sub2", null);
__decorate([
    common_1.Post('/rt_common_17sub3'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt17sub3req_1.Rt17sub3Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17sub3", null);
__decorate([
    common_1.Post('/rt_common_17sub4'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Rt17sub4Req_1.Rt17sub4Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17sub4", null);
__decorate([
    common_1.Post('/rt_common_17sub5'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Rt17sub4Req_1.Rt17sub4Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17sub5", null);
__decorate([
    common_1.Post('/rt_common_17main'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt17mainreq_1.Rt17mainReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport17main", null);
__decorate([
    common_1.Post('/rt_common_18'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt18req_1.Rt18Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport18", null);
__decorate([
    common_1.Post('/rt_common_19'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt19req_1.Rt19Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport19", null);
__decorate([
    common_1.Post('/rt_common_20'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt20req_1.Rt20Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport20", null);
__decorate([
    common_1.Post('/rt_common_21'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt21req_1.Rt21Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport21", null);
__decorate([
    common_1.Post('/rt_common_23'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt23req_1.Rt23Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport23", null);
__decorate([
    common_1.Post('/rt_common_26'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt26req_1.Rt26Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport26", null);
__decorate([
    common_1.Post('/rt_common_30'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt30req_1.Rt30Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport30", null);
__decorate([
    common_1.Post('/rt_common_31'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt31req_1.Rt31Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport31", null);
__decorate([
    common_1.Post('/rt_common_32'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt32req_1.Rt32Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport32", null);
__decorate([
    common_1.Post('/rt_common_35'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt35req_1.Rt35Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport35", null);
__decorate([
    common_1.Post('/rt_common_36'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt36req_1.Rt36Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport36", null);
__decorate([
    common_1.Post('/rt_common_37'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt37req_1.Rt37Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport37", null);
__decorate([
    common_1.Post('/rt_common_42'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt42req_1.Rt42Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport42", null);
__decorate([
    common_1.Post('/rt_common_164'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt164req_1.Rt164Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport164", null);
__decorate([
    common_1.Post('/rt_common_165'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt165req_1.Rt165Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport165", null);
__decorate([
    common_1.Post('/rt_common_166'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt166req_1.Rt166Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport166", null);
__decorate([
    common_1.Post('/rt_common_167'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt167req_1.Rt167Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport167", null);
__decorate([
    common_1.Post('/rt_common_168'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt168req_1.Rt168Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport168", null);
__decorate([
    common_1.Post('/rt_common_169'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt169req_1.Rt169Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport169", null);
__decorate([
    common_1.Post('/rt_common_170'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt170req_1.Rt170Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport170", null);
__decorate([
    common_1.Post('/rt_common_171'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt171req_1.Rt171Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport171", null);
__decorate([
    common_1.Post('/rt_common_172'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt172req_1.Rt172Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport172", null);
__decorate([
    common_1.Post('/rt_common_173'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt173req_1.Rt173Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport173", null);
__decorate([
    common_1.Post('/rt_common_174'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt174req_1.Rt174Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport174", null);
__decorate([
    common_1.Post('/rt_common_175'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt175req_1.Rt175Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport175", null);
__decorate([
    common_1.Post('/rt_common_176'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt176req_1.Rt176Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport176", null);
__decorate([
    common_1.Post('/rt_common_178'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt178req_1.Rt178Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport178", null);
__decorate([
    common_1.Post('/rt_common_179main'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt179mainreq_1.Rt179mainReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport179main", null);
__decorate([
    common_1.Post('/rt_common_179sub1'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt179sub1req_1.Rt179sub1Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport179sub1", null);
__decorate([
    common_1.Post('/rt_common_179sub2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt179sub2req_1.Rt179sub2Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport179sub2", null);
__decorate([
    common_1.Post('/rt_common_180'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt180req_1.Rt180Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport180", null);
__decorate([
    common_1.Post('/rt_common_181'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt181req_1.Rt181Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport181", null);
__decorate([
    common_1.Post('/rt_common_182'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt182req_1.Rt182Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport182", null);
__decorate([
    common_1.Post('/rt_common_183'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt183req_1.Rt183Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport183", null);
__decorate([
    common_1.Post('/rt_common_184'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt184req_1.Rt184Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport184", null);
__decorate([
    common_1.Post('/rt_common_185'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport185", null);
__decorate([
    common_1.Post('/rt_common_186'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt186req_1.Rt186Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport186", null);
__decorate([
    common_1.Post('/rt_common_192'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt192req_1.Rt192Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport192", null);
__decorate([
    common_1.Post('/rt_common_249'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt250req_1.Rt250Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport249", null);
__decorate([
    common_1.Post('/rt_common_250'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt250req_1.Rt250Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport250", null);
__decorate([
    common_1.Post('/rt_common_253'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt253req_1.Rt253Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport253", null);
__decorate([
    common_1.Post('/rt_common_256'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt256req_1.Rt256Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport256", null);
__decorate([
    common_1.Post('/rt_common_257'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt257req_1.Rt257Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport257", null);
__decorate([
    common_1.Post('/rt_common_258'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt258req_1.Rt258Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport258", null);
__decorate([
    common_1.Post('/rt_common_259'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt259req_1.Rt259Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport259", null);
__decorate([
    common_1.Post('/rt_common_265'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt265req_1.Rt265Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport265", null);
__decorate([
    common_1.Post('/rt_common_267'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt267req_1.Rt267Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport267", null);
__decorate([
    common_1.Post('/rt_common_285'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt285req_1.Rt285Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport285", null);
__decorate([
    common_1.Post('/rt_common_286'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt286req_1.Rt286Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport286", null);
__decorate([
    common_1.Post('/rt_common_287'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt287req_1.Rt287Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport287", null);
__decorate([
    common_1.Post('/rt_common_287sub1'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Rt17sub4Req_1.Rt17sub4Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport287sub1", null);
__decorate([
    common_1.Post('/rt_common_289'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt289req_1.Rt289Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport289", null);
__decorate([
    common_1.Post('/rt_common_290'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt290req_1.Rt290Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport290", null);
__decorate([
    common_1.Post('/rt_common_291'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt291req_1.Rt291Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport291", null);
__decorate([
    common_1.Post('/rt_common_292'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt292req_1.Rt292Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport292", null);
__decorate([
    common_1.Post('/rt_common_294'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt294req_1.Rt294Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport294", null);
__decorate([
    common_1.Post('/rt_common_295'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt295req_1.Rt295Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport295", null);
__decorate([
    common_1.Post('/rt_common_298'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt298req_1.Rt298Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport298", null);
__decorate([
    common_1.Post('/rt_common_299'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt299req_1.Rt299Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport299", null);
__decorate([
    common_1.Post('/rt_common_300'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt300req_1.Rt300Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport300", null);
__decorate([
    common_1.Post('/rt_common_301'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt301req_1.Rt301Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport301", null);
__decorate([
    common_1.Post('/rt_common_302'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt302req_1.Rt302Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport302", null);
__decorate([
    common_1.Post('/rt_common_303'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt303req_1.Rt303Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport303", null);
__decorate([
    common_1.Post('/rt_common_304'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt304req_1.Rt304Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport304", null);
__decorate([
    common_1.Post('/rt_common_305'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt305req_1.Rt305Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport305", null);
__decorate([
    common_1.Post('/rt_common_306'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt306req_1.Rt306Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport306", null);
__decorate([
    common_1.Post('/rt_common_308'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt308req_1.Rt308Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport308", null);
__decorate([
    common_1.Post('/rt_common_311'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt311req_1.Rt311Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport311", null);
__decorate([
    common_1.Post('/rt_common_313'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt313req_1.Rt313Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport313", null);
__decorate([
    common_1.Post('/rt_common_316'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt316req_1.Rt316Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport316", null);
__decorate([
    common_1.Post('/rt_common_317'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt317req_1.Rt317Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport317", null);
__decorate([
    common_1.Post('/rt_common_319'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt319req_1.Rt319Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport319", null);
__decorate([
    common_1.Post('/rt_common_819'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt319req_1.Rt319Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport819", null);
__decorate([
    common_1.Post('/rt_common_320'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt320req_1.Rt320Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport320", null);
__decorate([
    common_1.Post('/rt_common_321'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt321req_1.Rt321Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport321", null);
__decorate([
    common_1.Post('/rt_common_322'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt322req_1.Rt322Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport322", null);
__decorate([
    common_1.Post('/rt_common_323'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt323req_1.Rt323Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport323", null);
__decorate([
    common_1.Post('/rt_common_324'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt324req_1.Rt324Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport324", null);
__decorate([
    common_1.Post('/rt_common_325'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt325req_1.Rt325Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport325", null);
__decorate([
    common_1.Post('/rt_common_327'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt327req_1.Rt327Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport327", null);
__decorate([
    common_1.Post('/rt_common_328'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt328req_1.Rt328Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport328", null);
__decorate([
    common_1.Post('/rt_common_329'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt329req_1.Rt329Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport329", null);
__decorate([
    common_1.Post('/rt_common_330'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt330req_1.Rt330Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport330", null);
__decorate([
    common_1.Post('/rt_common_331'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt331req_1.Rt331Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport331", null);
__decorate([
    common_1.Post('/rt_common_334'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt334req_1.Rt334Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport334", null);
__decorate([
    common_1.Post('/rt_common_335'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt335req_1.Rt335Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport335", null);
__decorate([
    common_1.Post('/rt_common_336'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt336req_1.Rt336Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport336", null);
__decorate([
    common_1.Post('/rt_common_339'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt339req_1.Rt339Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport339", null);
__decorate([
    common_1.Post('/rt_common_342'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt342req_1.Rt342Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport342", null);
__decorate([
    common_1.Post('/rt_common_343'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt343req_1.Rt343Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport343", null);
__decorate([
    common_1.Post('/rt_common_344'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt344req_1.Rt344Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport344", null);
__decorate([
    common_1.Post('/rt_common_353'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt353req_1.Rt353Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport353", null);
__decorate([
    common_1.Post('/rt_common_354'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt354req_1.Rt354Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport354", null);
__decorate([
    common_1.Post('/rt_common_355'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt355req_1.Rt355Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport355", null);
__decorate([
    common_1.Post('/rt_common_356'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt356req_1.Rt356Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport356", null);
__decorate([
    common_1.Post('/rt_common_357'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt357req_1.Rt357Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport357", null);
__decorate([
    common_1.Post('/rt_common_358'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt358req_1.Rt358Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport358", null);
__decorate([
    common_1.Post('/rt_common_359'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt359req_1.Rt359Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport359", null);
__decorate([
    common_1.Post('/rt_common_408'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt408req_1.Rt408Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport408", null);
__decorate([
    common_1.Post('/rt_common_409'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt409req_1.Rt409Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport409", null);
__decorate([
    common_1.Post('/rt_common_410'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt410req_1.Rt410Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport410", null);
__decorate([
    common_1.Post('/rt_common_411'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt411req_1.Rt411Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport411", null);
__decorate([
    common_1.Post('/rt_common_412'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt412req_1.Rt412Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport412", null);
__decorate([
    common_1.Post('/rt_common_413'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt413req_1.Rt413Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport413", null);
__decorate([
    common_1.Post('/rt_common_414'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt414req_1.Rt414Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport414", null);
__decorate([
    common_1.Post('/rt_common_423'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt423req_1.Rt423Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport423", null);
__decorate([
    common_1.Post('/rt_common_424'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt424req_1.Rt424Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport424", null);
__decorate([
    common_1.Post('/rt_common_425'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt425req_1.Rt425Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport425", null);
__decorate([
    common_1.Post('/rt_common_426'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt426req_1.Rt426Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport426", null);
__decorate([
    common_1.Post('/rt_common_427'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt427req_1.Rt427Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport427", null);
__decorate([
    common_1.Post('/rt_common_428'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt428req_1.Rt428Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport428", null);
__decorate([
    common_1.Post('/rt_common_429'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt429req_1.Rt429Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport429", null);
__decorate([
    common_1.Post('/rt_common_430'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt430req_1.Rt430Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport430", null);
__decorate([
    common_1.Post('/rt_common_432'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt432req_1.Rt432Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport432", null);
__decorate([
    common_1.Post('/rt_common_433'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt433req_1.Rt433Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport433", null);
__decorate([
    common_1.Post('/rt_common_434'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt434req_1.Rt434Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport434", null);
__decorate([
    common_1.Post('/rt_common_435'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt435req_1.Rt435Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport435", null);
__decorate([
    common_1.Post('/rt_common_409_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt409billedreq_1.Rt409billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport409_billed", null);
__decorate([
    common_1.Post('/rt_common_409_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt409billedreq_1.Rt409billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport409_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_429_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt429billedreq_1.Rt429billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport429_billed", null);
__decorate([
    common_1.Post('/rt_common_429_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt429billedreq_1.Rt429billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport429_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_425_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt425req_1.Rt425Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport425_billed", null);
__decorate([
    common_1.Post('/rt_common_425_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt425req_1.Rt425Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport425_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_424_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt424req_1.Rt424Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport424_billed", null);
__decorate([
    common_1.Post('/rt_common_424_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt424req_1.Rt424Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport424_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_423_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt423req_1.Rt423Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport423_billed", null);
__decorate([
    common_1.Post('/rt_common_286_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt286req_1.Rt286Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport286_billed", null);
__decorate([
    common_1.Post('/rt_common_717'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt717req_1.Rt717Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport717", null);
__decorate([
    common_1.Post('/rt_common_811'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt8req_1.Rt8Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport811", null);
__decorate([
    common_1.Post('/rt_common_815'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt18req_1.Rt18Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport815", null);
__decorate([
    common_1.Post('/rt_common_816'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt18req_1.Rt18Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport816", null);
__decorate([
    common_1.Post('/rt_common_817'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt18req_1.Rt18Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport817", null);
__decorate([
    common_1.Post('/rt_common_818'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt18req_1.Rt18Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport818", null);
__decorate([
    common_1.Post('/rt_common_820'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt8req_1.Rt8Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport820", null);
__decorate([
    common_1.Post('/rt_common_802'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt425req_1.Rt425Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport802", null);
__decorate([
    common_1.Post('/rt_common_822'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt822req_1.Rt822Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport822", null);
__decorate([
    common_1.Post('/rt_common_28'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt409req_1.Rt409Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport28", null);
__decorate([
    common_1.Post('/rt_common_28_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt409billedreq_1.Rt409billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport28_billed", null);
__decorate([
    common_1.Post('/rt_common_823_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt823billedreq_1.Rt823billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport823_billed", null);
__decorate([
    common_1.Post('/rt_common_823_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt823billedreq_1.Rt823billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport823_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_827_billed'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt827billedreq_1.Rt827billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport827_billed", null);
__decorate([
    common_1.Post('/rt_common_827_billed_prov'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt827billedreq_1.Rt827billedReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport827_billed_prov", null);
__decorate([
    common_1.Post('/rt_common_801'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt801req_1.Rt801Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport801", null);
__decorate([
    common_1.Post('/rt_common_831'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt831req_1.Rt831Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport831", null);
__decorate([
    common_1.Post('/rt_common_832'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt832req_1.Rt832Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport832", null);
__decorate([
    common_1.Post('/rt_common_833'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt8req_1.Rt8Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport833", null);
__decorate([
    common_1.Post('/rt_common_834'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt834req_1.Rt834Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport834", null);
__decorate([
    common_1.Post('/rt_common_835'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport835", null);
__decorate([
    common_1.Post('/rt_common_836'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport836", null);
__decorate([
    common_1.Post('/rt_common_837'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt430req_1.Rt430Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport837", null);
__decorate([
    common_1.Post('/rt_common_839'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt430req_1.Rt430Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport839", null);
__decorate([
    common_1.Post('/rt_common_840'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt430req_1.Rt430Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport840", null);
__decorate([
    common_1.Post('/rt_common_841'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt430req_1.Rt430Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport841", null);
__decorate([
    common_1.Post('/rt_common_842sub1'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub1", null);
__decorate([
    common_1.Post('/rt_common_842sub2'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub2", null);
__decorate([
    common_1.Post('/rt_common_842sub3'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub3", null);
__decorate([
    common_1.Post('/rt_common_842sub4'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub4", null);
__decorate([
    common_1.Post('/rt_common_842sub5'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub5", null);
__decorate([
    common_1.Post('/rt_common_842sub6'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub6", null);
__decorate([
    common_1.Post('/rt_common_842sub7'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub7", null);
__decorate([
    common_1.Post('/rt_common_842sub8'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub8", null);
__decorate([
    common_1.Post('/rt_common_842sub9'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport842sub9", null);
__decorate([
    common_1.Post('/rt_common_843'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport843", null);
__decorate([
    common_1.Post('/rt_common_844'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport844", null);
__decorate([
    common_1.Post('/rt_common_845'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport845", null);
__decorate([
    common_1.Post('/rt_common_846'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport846", null);
__decorate([
    common_1.Post('/rt_common_847'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt185req_1.Rt185Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport847", null);
__decorate([
    common_1.Post('/rt_common_848'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport848", null);
__decorate([
    common_1.Post('/rt_common_849'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport849", null);
__decorate([
    common_1.Post('/rt_common_850'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport850", null);
__decorate([
    common_1.Post('/rt_common_851'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReport851", null);
__decorate([
    common_1.Post('/FnPatientbill'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rt999req_1.Rt999Req]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "FnPatientbill", null);
__decorate([
    common_1.Post('/rtorganisation'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "Missing info: parameter" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, rtorganisationreq_1.OrganisationReq]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getReportOrganisation", null);
__decorate([
    common_1.Post('/ping'),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    swagger_1.ApiResponse({ status: 400, description: "ERROR File does not exist" }),
    swagger_1.ApiResponse({ status: 200, description: "OK" }),
    __param(0, common_1.Response()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "ping", null);
ReportsController = __decorate([
    swagger_1.ApiUseTags('reports'),
    common_1.Controller('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService,
        opdclaimform_report_servie_1.OPDClaimFormReportService,
        ipdclaimformpart1_report_servie_1.IPDClaimFormPart1ReportService,
        ipdclaimformpart2_report_servie_1.IPDClaimFormPart2ReportService,
        mc5en_report_servie_1.MC5ENReportService,
        mc5th_report_servie_1.MC5THReportService,
        mcairen_report_servie_1.MCAIRENReportService,
        mcairth_report_servie_1.MCAIRTHReportService,
        mcgenen_report_servie_1.MCGENENReportService,
        mcgenth_report_servie_1.MCGENTHReportService,
        mcextenen_report_servie_1.MCEXTENENReportService,
        mcextenth_report_servie_1.MCEXTENTHReportService,
        mcge_report_servie_1.MCGEReportService,
        mcworken_report_servie_1.MCWORKENReportService,
        mcworkth_report_servie_1.MCWORKTHReportService,
        referen_report_servie_1.REFERENReportService,
        referth_report_servie_1.REFERTHReportService,
        subdiagnosis_report_servie_1.SUBDIAGReportService,
        subradio_report_servie_1.SUBRADIOLOGYRESULTSReportService,
        sublabresults_report_servie_1.SUBLABRESULTSReportService,
        printerlist_report_servie_1.PrinterListReportService,
        statmrdfolderlastvisit_report_servie_1.STATMRDFolderLastVisitReportService,
        logger_1.ConsoleLogger])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map