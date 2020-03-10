import { STATMRDFolderLastVisitReportService } from './report.services/statmrdfolderlastvisit.report.servie';
import { STATTRAUMAReportService } from './report.services/stattraume.report.servie';
import { SUBLABRESULTSReportService } from './report.services/sublabresults.report.servie';
import { SUBRADIOLOGYRESULTSReportService } from './report.services/subradio.report.servie';
import { PrinterListReportService } from './report.services/printerlist.report.servie';
import { PrinterconfiguraitonsSchema } from './schemas/printerconfigurations.schema';
import { MCWORKTHReportService } from './report.services/mcworkth.report.servie';
import { MCWORKENReportService } from './report.services/mcworken.report.servie';
import { MCGEReportService } from './report.services/mcge.report.servie';
import { MCGENENReportService } from './../reports/report.services/mcgenen.report.servie';
import { MCGENTHReportService } from './../reports/report.services/mcgenth.report.servie';
import { MCEXTENTHReportService } from './report.services/mcextenth.report.servie';
import { MCEXTENENReportService } from './report.services/mcextenen.report.servie';
import { MCAIRTHReportService } from './report.services/mcairth.report.servie';
import { MCAIRTH2ReportService } from './report.services/mcairth2.report.service';
import { MCAIRENReportService } from './report.services/mcairen.report.servie';
import { MC5THReportService } from './report.services/mc5th.report.servie';
import { MC5ENReportService } from './report.services/mc5en.report.servie';
import { REFERENReportService } from './report.services/referen.report.servie';
import { REFERTHReportService } from './report.services/referth.report.servie';
import { Controller, Get, Response, HttpStatus, Post, Body, Header, Request } from '@nestjs/common';

import { ReportsService } from './reports.service';
import {OPDClaimFormReportService} from './report.services/opdclaimform.report.servie';
import {IPDClaimFormPart1ReportService} from './report.services/ipdclaimformpart1.report.servie';
import {IPDClaimFormPart2ReportService} from './../reports/report.services/ipdclaimformpart2.report.servie';
import { SUBDIAGReportService } from './../reports/report.services/subdiagnosis.report.servie';

import { ConsoleLogger } from '../service/logger';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

import { Rt319Req } from '../models/rt319req';
import { Rt292Req } from '../models/rt292req';
import { Rt286Req } from '../models/rt286req';

import { Rt291Req } from '../models/rt291req';
import { Rt192Req } from '../models/rt192req';
import { RtResponse } from '../models/rtresponse';
import { Rt168Req } from '../models/rt168req';
import { Rt167Req } from '../models/rt167req';
import { Rt166Req } from '../models/rt166req';
import { Rt18Req } from '../models/rt18req';
import { Rt17sub1Req } from '../models/rt17sub1req';
import { Rt8Req } from '../models/rt8req';
import { Rt3Req } from '../models/rt3req';
import { Rt2Req } from '../models/rt2req';
import { Rt19Req } from '../models/rt19req';
import { Rt20Req } from '../models/rt20req';
import { Rt23Req } from '../models/rt23req';
import { Rt287Req } from '../models/rt287req';
import { RptParameter } from '../models/rptparam';
import { Rt408Req } from '../models/rt408req';
import { Rt409Req } from '../models/rt409req';
import { Rt410Req } from '../models/rt410req';
import { Rt411Req } from '../models/rt411req';
import { Rt412Req } from '../models/rt412req';
import { Rt413Req } from '../models/rt413req';
import { Rt414Req } from '../models/rt414req';
import { Rt429Req } from '../models/rt429req';
import { Rt430Req } from '../models/rt430req';
import { LogoReq } from '../models/logoreq';
import { Rt294Req } from '../models/rt294req';
import { Rt295Req } from '../models/rt295req';
import { Rt330Req } from '../models/rt330req';
import { Rt331Req } from '../models/rt331req';
import { Rt353Req } from '../models/rt353req';
import { Rt354Req } from '../models/rt354req';
import { Rt359Req } from '../models/rt359req';
import { Rt185Req } from '../models/rt185req';
import { Rt186Req } from '../models/rt186req';
import { Rt423Req } from '../models/rt423req';
import { Rt424Req } from '../models/rt424req';
import { Rt425Req } from '../models/rt425req';
import { Rt426Req } from '../models/rt426req';
import { Rt427Req } from '../models/rt427req';
import { Rt428Req } from '../models/rt428req';
import { Rt432Req } from '../models/rt432req';
import { Rt433Req } from '../models/rt433req';
import { Rt435Req } from '../models/rt435req';
import { Rt36Req } from '../models/rt36req';
import { Rt37Req } from '../models/rt37req';
import { Rt31Req } from '../models/rt31req';
import { Rt30Req } from '../models/rt30req';
import { Rt170Req } from '../models/rt170req';
import { Rt171Req } from '../models/rt171req';
import { Rt183Req } from '../models/rt183req';
import { Rt184Req } from '../models/rt184req';
import { Rt253Req } from '../models/rt253req';
import { Rt256Req } from '../models/rt256req';
import { Rt257Req } from '../models/rt257req';
import { Rt258Req } from '../models/rt258req';
import { Rt259Req } from '../models/rt259req';
import { Rt290Req } from '../models/rt290req';
import { Rt300Req } from '../models/rt300req';
import { Rt303Req } from '../models/rt303req';
import { Rt304Req } from '../models/rt304req';
import { Rt306Req } from '../models/rt306req';
import { Rt308Req } from '../models/rt308req';
import { Rt311Req } from '../models/rt311req';
import { Rt316Req } from '../models/rt316req';
import { Rt317Req } from '../models/rt317req';
import { Rt320Req } from '../models/rt320req';
import { Rt285Req } from '../models/rt285req';
import { Rt298Req } from '../models/rt298req';
import { Rt299Req } from '../models/rt299req';
import { Rt301Req } from '../models/rt301req';
import { Rt302Req } from '../models/rt302req';
import { Rt305Req } from '../models/rt305req';
import { Rt313Req } from '../models/rt313req';
import { Rt328Req } from '../models/rt328req';
import { Rt321Req } from '../models/rt321req';
import { Rt26Req } from '../models/rt26req';
import { Rt42Req } from '../models/rt42req';
import { Rt322Req } from '../models/rt322req';
import { Rt323Req } from '../models/rt323req';
import { Rt164Req } from '../models/rt164req';
import { Rt165Req } from '../models/rt165req';
import { Rt172Req } from '../models/rt172req';
import { Rt169Req } from '../models/rt169req';
import { Rt173Req } from '../models/rt173req';
import { Rt174Req } from '../models/rt174req';
import { Rt175Req } from '../models/rt175req';
import { Rt176Req } from '../models/rt176req';
import { Rt324Req } from '../models/rt324req';
import { Rt325Req } from '../models/rt325req';
import { Rt327Req } from '../models/rt327req';
import { Rt329Req } from '../models/rt329req';
import { Rt178Req } from '../models/rt178req';
import { Rt182Req } from '../models/rt182req';
import { Rt181Req } from '../models/rt181req';
import { Rt180Req } from '../models/rt180req';
import { Rt32Req } from '../models/rt32req';
import { Rt339Req } from '../models/rt339req';
import { Rt17mainReq } from '../models/rt17mainreq';
import { Rt355Req } from '../models/rt355req';
import { Rt357Req } from '../models/rt357req';
import { Rt434Req } from '../models/rt434req';
import { Rt17sub2Req } from '../models/rt17sub2req';
import { Rt17sub3Req } from '../models/rt17sub3req';
import { Rt344Req } from '../models/rt344req';
import { Rt356Req } from '../models/rt356req';
import { Rt358Req } from '../models/rt358req';
import { Rt179mainReq } from '../models/rt179mainreq';
import { Rt179sub1Req } from '../models/rt179sub1req';
import { Rt179sub2Req } from '../models/rt179sub2req';
import { Rt267Req } from '../models/rt267req';
import { Rt21Req } from '../models/rt21req';
import { Rt289Req } from '../models/rt289req';
import { Rt334Req } from '../models/rt334req';
import { Rt335Req } from '../models/rt335req';
import { Rt336Req } from '../models/rt336req';
import { Rt35Req } from '../models/rt35req';
import { Rt342Req } from '../models/rt342req';
import { Rt343Req } from '../models/rt343req';
import { Rt265Req } from '../models/rt265req';
import { Rt717Req } from '../models/rt717req';
import { Rt409billedReq } from '../models/rt409billedreq';
import { Rt429billedReq } from '../models/rt429billedreq';
import { Rt250Req } from '../models/rt250req';
import { Rt999Req } from '../models/rt999req';
import { Rt17sub4Req } from '../models/Rt17sub4Req';
import { BaseReq } from 'models/basereq';
import { Rt822Req } from '../models/rt822req';
import { Rt823billedReq } from '../models/rt823billedreq';
import { Rt827billedReq } from '../models/rt827billedreq';
import { Rt801Req } from '../models/rt801req';
import { Rt831Req } from '../models/rt831req';
import { Rt832Req } from '../models/rt832req';
import { Rt834Req } from '../models/rt834req';
import { OrganisationReq } from '../models/rtorganisationreq';
import {OPDClaimFormReq} from '../models/opdclaimformreq';
import {IPDClaimFormReq} from '../models/ipdclaimformreq';
import {CounterVisitbyNationReq} from '../models/countervisitbynationreq';
import {PrinterlistReq} from '../models/printerlistreq';
import {FooterdetailReq} from '../models/footerdetailreq';
import {MCAIRENReq} from '../models/mcairenreq';
import {MCAIRTHReq} from '../models/mcairthreq';
import {MC5THReq} from '../models/mc5threq';
import {MC5ENReq} from '../models/mc5enreq';
import {MCGEReq} from '../models/mcgereq';
import {MCGENReq} from '../models/mcgenreq';
import {MCEXTENENReq} from '../models/mcextenenreq';
import {MCEXTENTHReq} from '../models/mcextenthreq';
import {MCWORKENReq} from '../models/mcworkenreq';
import {MCWORKTHReq} from '../models/mcworkthreq';
import {REFERReq} from '../models/referreq';
import { SUBDIAGReq } from '../models/subdiagreq';
import { SUBRADIOLOGYRESULTSReq } from '../models/subradiologyresultsreq';
import { SUBLABRESULTSReq } from '../models/sublabresultsreq';

import {STATPTVIPReq} from '../models/statptvipreq';
import {PTRevisit2DayReq} from '../models/ptrevisit2dayreq';
import {STATdiagnosisReq} from '../models/statdiagnosisreq';
import {STATVPIAppointmentReq} from '../models/statvipappointreq';
import {STATPTConsultReq} from '../models/statptconsultreq';
import {STATConsultDeptReq} from '../models/statconsultdeptreq';
import {STATConsultByDeptReq} from '../models/statconsultbydeptreq';
import {STATMRDFolderLastVisitReq} from '../models/statmrdfolderlastvisits'
import { STATTRAUMAReq } from '../models/stattraumareq'

import { from } from 'rxjs';

@ApiUseTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(
        private readonly reportsService: ReportsService,
        private readonly OPDClaimFormreportsService: OPDClaimFormReportService,
        private readonly IPDClaimFormPart1reportsService: IPDClaimFormPart1ReportService,
        private readonly IPDClaimFormPart2reportsService: IPDClaimFormPart2ReportService,
        private readonly MC5ENReportService: MC5ENReportService,
        private readonly MC5THReportService: MC5THReportService,
        private readonly MCAIRENReportService: MCAIRENReportService,
        private readonly MCAIRTHReportService: MCAIRTHReportService,
        private readonly MCAIRTH2ReportService: MCAIRTH2ReportService,
        private readonly MCGENENReportService: MCGENENReportService,
        private readonly MCGENTHReportService: MCGENTHReportService,
        private readonly MCEXTENENReportService: MCEXTENENReportService,
        private readonly MCEXTENTHReportService: MCEXTENTHReportService,
        private readonly MCGEReportService: MCGEReportService,
        private readonly MCWORKENReportService: MCWORKENReportService,
        private readonly MCWORKTHReportService: MCWORKTHReportService,
        private readonly REFERENReportService: REFERENReportService,
        private readonly REFERTHReportService: REFERTHReportService,
        private readonly SUBDIAGReportService: SUBDIAGReportService,
        private readonly SUBRADIOLOGYRESULTSReportService: SUBRADIOLOGYRESULTSReportService,
        private readonly SUBLABRESULTSReportService: SUBLABRESULTSReportService,
        private readonly PrinterListReportService: PrinterListReportService,
        private readonly STATMRDFolderLastVisitReportService: STATMRDFolderLastVisitReportService,
        private readonly STATTraumaReportService: STATTRAUMAReportService,
        private logger: ConsoleLogger,
        // private jasper: JasperService
    ) {
    }

    @Post('/mcgenen')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCGENEN(@Response() res, @Body() req: MCGENReq) {
        this.logger.log("Start findMCGENEN");
        this.logger.debug('Req', req);
        const data = await this.MCGENENReportService.findMCGENEN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcgenth')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCGENTH(@Response() res, @Body() req: MCGENReq) {
        this.logger.log("Start findMCGENTH");
        this.logger.debug('Req', req);
        const data = await this.MCGENTHReportService.findMCGENTH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/referth')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportREFERTH(@Response() res, @Body() req: REFERReq) {
        this.logger.log("Start findREFERTH");
        this.logger.debug('Req', req);
        const data = await this.REFERTHReportService.findREFERTH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/referen')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportREFEREN(@Response() res, @Body() req: REFERReq) {
        this.logger.log("Start findREFEREN");
        this.logger.debug('Req', req);
        const data = await this.REFERENReportService.findREFEREN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcge')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCGE(@Response() res, @Body() req: MCGEReq) {
        this.logger.log("Start findMCGE");
        this.logger.debug('Req', req);
        const data = await this.MCGEReportService.findMCGE(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcairen')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCAIREN(@Response() res, @Body() req: MCAIRENReq) {
        this.logger.log("Start findMCAIREN");
        this.logger.debug('Req', req);
        const data = await this.MCAIRENReportService.findMCAIREN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcairth')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCAIRTH(@Response() res, @Body() req: MCAIRTHReq) {
        this.logger.log("Start findMCAIRTH");
        this.logger.debug('Req', req);
        const data = await this.MCAIRTHReportService.findMCAIRTH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/mcairth2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCAIRTH2(@Response() res, @Body() req: MCAIRTHReq) {
        this.logger.log("Start findMCAIRTH2");
        this.logger.debug('Req', req);
        const data = await this.MCAIRTH2ReportService.findMCAIRTH2(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mc5th')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMC5TH(@Response() res, @Body() req: MC5THReq) {
        this.logger.log("Start findMC5TH");
        this.logger.debug('Req', req);
        const data = await this.MC5THReportService.findMC5TH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mc5en')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMC5EN(@Response() res, @Body() req: MC5ENReq) {
        this.logger.log("Start findMC5EN");
        this.logger.debug('Req', req);
        const data = await this.MC5ENReportService.findMC5EN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcextenen')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCEXTENEN(@Response() res, @Body() req: MCEXTENENReq) {
        this.logger.log("Start findMCEXTENEN");
        this.logger.debug('Req', req);
        const data = await this.MCEXTENENReportService.findMCEXTENEN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcextenth')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCEXTENTH(@Response() res, @Body() req: MCEXTENTHReq) {
        this.logger.log("Start findMCEXTENTH");
        this.logger.debug('Req', req);
        const data = await this.MCEXTENTHReportService.findMCEXTENTH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcworken')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCWORKEN(@Response() res, @Body() req: MCWORKENReq) {
        this.logger.log("Start findMCWORKEN");
        this.logger.debug('Req', req);
        const data = await this.MCWORKENReportService.findMCWORKEN(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/mcworkth')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportMCWORKTH(@Response() res, @Body() req: MCWORKTHReq) {
        this.logger.log("Start findMCWORKTH");
        this.logger.debug('Req', req);
        const data = await this.MCWORKTHReportService.findMCWORKTH(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/opdclaimform')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportPatientOPDClaimForms(@Response() res, @Body() req: OPDClaimFormReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.OPDClaimFormreportsService.findOPDClaimForm(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/ipdclaimform')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportPatientIPDClaimForms(@Response() res, @Body() req: IPDClaimFormReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.IPDClaimFormPart1reportsService.findIPDClaimFormP1(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/ipdclaimformpart2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportPatientIPDClaimFormsP2(@Response() res, @Body() req: IPDClaimFormReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.IPDClaimFormPart2reportsService.findIPDClaimFormP2(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/subdiag')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportsubdiag(@Response() res, @Body() req: SUBDIAGReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.SUBDIAGReportService.findSUBDIAG(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/subradiologyresults')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportsubradiologyresults(@Response() res, @Body() req: SUBRADIOLOGYRESULTSReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.SUBRADIOLOGYRESULTSReportService.findSUBRADIOLOGYRESULTS(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/sublabresults')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportsublabresults(@Response() res, @Body() req: SUBLABRESULTSReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.SUBLABRESULTSReportService.findSUBLABRESULTS(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/statmrdfolderlastvisit')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultSTATMRDFolderLastVisit(@Response() res, @Body() req: STATMRDFolderLastVisitReq) {
        this.logger.log("Start Patientvisit");
        this.logger.debug('Req', req);
        const data = await this.STATMRDFolderLastVisitReportService.findSTATMRDFolderLastVisit(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/stattrauma')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultSTATTrauma(@Response() res, @Body() req: STATTRAUMAReq) {
        this.logger.log("Start Triagedetails");
        this.logger.debug('Req', req);
        const data = await this.STATTraumaReportService.findSTATTRAUMA(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/consultdept')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultConsultDept(@Response() res, @Body() req: STATConsultDeptReq) {
        this.logger.log("Start STATConsultDept");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findSTATConsultDept(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/consultbydept')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultSTATConsultByDeptReq(@Response() res, @Body() req: STATConsultByDeptReq) {
        this.logger.log("Start STATConsultByDeptReq");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findSTATConsultByDept(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }


    @Post('/countervisitbynation')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultCounterVisitbyNation(@Response() res, @Body() req: CounterVisitbyNationReq) {
        this.logger.log("Start Patientvisit");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findCounterVisitbyNation(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/ptrevisit2day')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultPTRevisit2Day(@Response() res, @Body() req: PTRevisit2DayReq) {
        this.logger.log("Start Patientvisit");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findPTRevisit2Day(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/statdiagnosisreport')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultSTATdiagnosis(@Response() res, @Body() req: STATdiagnosisReq) {
        this.logger.log("Start Patientvisit");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findSTATdiagnosis(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/statptvip')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportresultSTATPTVIP(@Response() res, @Body() req: STATPTVIPReq) {
        this.logger.log("Start Patientvisit");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findSTATPTVIP(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/printerlist')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportprinterlists(@Response() res, @Body() req: PrinterlistReq) {
        this.logger.log("Start Printerlist");
        this.logger.debug('Req', req);
        const data = await this.PrinterListReportService.findPrinterlist(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/footerdetails')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getFooterdetaillists(@Response() res, @Body() req: FooterdetailReq) {
        this.logger.log("Start Footerdetailslist");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findFooterdetails(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/logo')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getlogo(@Response() res, @Body() req: LogoReq) {
        this.logger.log("Start getlogo");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findOrgByLoginId(req.loginuid);
        this.logger.debug('Res', data);
        this.logger.log('End getlogo');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_dept1')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportdept1(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_dept1");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommondept1(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }
    @Post('/rt_common_dept2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportdept2(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_dept2");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommondept2(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }
    //start
    @Post('/rt_common_2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport2(@Response() res, @Body() req: Rt2Req) {
        this.logger.log("Start rt_common_2");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon2(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_3')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport3(@Response() res, @Body() req: Rt3Req) {
        this.logger.log("Start rt_common_3");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon3(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_3');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_8')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport8(@Response() res, @Body() req: Rt8Req) {
        this.logger.log("Start rt_common_8");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon8(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_8');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17sub1')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17sub1(@Response() res, @Body() req: Rt17sub1Req) {
        this.logger.log("Start rt_common_17sub1");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17sub1(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17sub1');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17sub2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17sub2(@Response() res, @Body() req: Rt17sub2Req) {
        this.logger.log("Start rt_common_17sub2");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17sub2(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17sub2');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17sub3')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17sub3(@Response() res, @Body() req: Rt17sub3Req) {
        this.logger.log("Start rt_common_17sub3");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17sub3(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17sub3');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17sub4')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17sub4(@Response() res, @Body() req: Rt17sub4Req) {
        this.logger.log("Start rt_common_17sub4");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17sub4(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17sub4');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17sub5')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17sub5(@Response() res, @Body() req: Rt17sub4Req) {
        this.logger.log("Start rt_common_17sub5");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17sub5(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17sub5');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_17main')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport17main(@Response() res, @Body() req: Rt17mainReq) {
        this.logger.log("Start rt_common_17main");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon17main(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_17main');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_18')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport18(@Response() res, @Body() req: Rt18Req) {
        this.logger.log("Start rt_common_18");
        // this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon18(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_18');
        return res.status(HttpStatus.OK).json(data);
    }


    @Post('/rt_common_19')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport19(@Response() res, @Body() req: Rt19Req) {
        this.logger.log("Start rt_common_19");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon19(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_19');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_20')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport20(@Response() res, @Body() req: Rt20Req) {
        this.logger.log("Start rt_common_20");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon20(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_20');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_21')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport21(@Response() res, @Body() req: Rt21Req) {
        this.logger.log("Start rt_common_21");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon21(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_21');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_23')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport23(@Response() res, @Body() req: Rt23Req) {
        this.logger.log("Start rt_common_23");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon23(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_23');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_26')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport26(@Response() res, @Body() req: Rt26Req) {
        this.logger.log("Start rt_common_26");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon26(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_26');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_30')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport30(@Response() res, @Body() req: Rt30Req) {
        this.logger.log("Start rt_common_30");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon30(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_30');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_31')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport31(@Response() res, @Body() req: Rt31Req) {
        this.logger.log("Start rt_common_31");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon31(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_31');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_32')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport32(@Response() res, @Body() req: Rt32Req) {
        this.logger.log("Start rt_common_32");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon32(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_32');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_35')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport35(@Response() res, @Body() req: Rt35Req) {
        this.logger.log("Start rt_common_35");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon35(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_35');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_36')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport36(@Response() res, @Body() req: Rt36Req) {
        this.logger.log("Start rt_common_36");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon36(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_36');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_37')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport37(@Response() res, @Body() req: Rt37Req) {
        this.logger.log("Start rt_common_37");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon37(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_37');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_42')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport42(@Response() res, @Body() req: Rt42Req) {
        this.logger.log("Start rt_common_42");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon42(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_42');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_164')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport164(@Response() res, @Body() req: Rt164Req) {
        this.logger.log("Start rt_common_164");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon164(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_164');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_165')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport165(@Response() res, @Body() req: Rt165Req) {
        this.logger.log("Start rt_common_165");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon165(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_165');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_166')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport166(@Response() res, @Body() req: Rt166Req) {
        this.logger.log("Start rt_common_166");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon166(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_166');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_167')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport167(@Response() res, @Body() req: Rt167Req) {
        this.logger.log("Start rt_common_167");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon167(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_167');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_168')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport168(@Response() res, @Body() req: Rt168Req) {
        this.logger.log("Start rt_common_168");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon168(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_168');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_169')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport169(@Response() res, @Body() req: Rt169Req) {
        this.logger.log("Start rt_common_169");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon169(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_169');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_170')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport170(@Response() res, @Body() req: Rt170Req) {
        this.logger.log("Start rt_common_170");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon170(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_170');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_171')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport171(@Response() res, @Body() req: Rt171Req) {
        this.logger.log("Start rt_common_171");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon171(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_171');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_172')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport172(@Response() res, @Body() req: Rt172Req) {
        this.logger.log("Start rt_common_172");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon172(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_172');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_173')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport173(@Response() res, @Body() req: Rt173Req) {
        this.logger.log("Start rt_common_173");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon173(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_173');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_174')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport174(@Response() res, @Body() req: Rt174Req) {
        this.logger.log("Start rt_common_174");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon174(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_174');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_175')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport175(@Response() res, @Body() req: Rt175Req) {
        this.logger.log("Start rt_common_175");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon175(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_175');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_176')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport176(@Response() res, @Body() req: Rt176Req) {
        this.logger.log("Start rt_common_176");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon176(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_176');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_178')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport178(@Response() res, @Body() req: Rt178Req) {
        this.logger.log("Start rt_common_178");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon178(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_178');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_179main')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport179main(@Response() res, @Body() req: Rt179mainReq) {
        this.logger.log("Start rt_common_179main");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon179main(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_179main');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_179sub1')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport179sub1(@Response() res, @Body() req: Rt179sub1Req) {
        this.logger.log("Start rt_common_179sub1");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon179sub1(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_179sub1');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_179sub2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport179sub2(@Response() res, @Body() req: Rt179sub2Req) {
        this.logger.log("Start rt_common_179sub2");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon179sub2(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_179sub2');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_180')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport180(@Response() res, @Body() req: Rt180Req) {
        this.logger.log("Start rt_common_180");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon180(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_180');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_181')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport181(@Response() res, @Body() req: Rt181Req) {
        this.logger.log("Start rt_common_181");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon181(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_181');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_182')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport182(@Response() res, @Body() req: Rt182Req) {
        this.logger.log("Start rt_common_182");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon182(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_182');
        return res.status(HttpStatus.OK).json(data);
    }


    @Post('/rt_common_183')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport183(@Response() res, @Body() req: Rt183Req) {
        this.logger.log("Start rt_common_183");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon183(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_183');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_184')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport184(@Response() res, @Body() req: Rt184Req) {
        this.logger.log("Start rt_common_184");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon184(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_184');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_185')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport185(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_185");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon185(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_185');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_186')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport186(@Response() res, @Body() req: Rt186Req) {
        this.logger.log("Start rt_common_186");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon186(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_186')
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_192')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport192(@Response() res, @Body() req: Rt192Req) {
        this.logger.log("Start rt_common_192");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon192(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_192');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_249')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport249(@Response() res, @Body() req: Rt250Req) {
        this.logger.log("Start rt_common_249");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon249(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_249');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_250')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport250(@Response() res, @Body() req: Rt250Req) {
        this.logger.log("Start rt_common_250");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon250(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_250');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_253')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport253(@Response() res, @Body() req: Rt253Req) {
        this.logger.log("Start rt_common_253");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon253(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_253');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_256')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport256(@Response() res, @Body() req: Rt256Req) {
        this.logger.log("Start rt_common_256");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon256(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_256');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_257')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport257(@Response() res, @Body() req: Rt257Req) {
        this.logger.log("Start rt_common_257");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon257(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_257');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_258')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport258(@Response() res, @Body() req: Rt258Req) {
        this.logger.log("Start rt_common_258");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon258(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_258');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_259')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport259(@Response() res, @Body() req: Rt259Req) {
        this.logger.log("Start rt_common_259");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon259(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_259');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_265')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport265(@Response() res, @Body() req: Rt265Req) {
        this.logger.log("Start rt_common_265");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon265(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_265');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_267')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport267(@Response() res, @Body() req: Rt267Req) {
        this.logger.log("Start rt_common_267");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon267(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_267');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_285')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport285(@Response() res, @Body() req: Rt285Req) {
        this.logger.log("Start rt_common_285");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon285(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_285');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_286')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport286(@Response() res, @Body() req: Rt286Req) {
        this.logger.log("Start rt_common_286");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon286(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_286');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_287')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport287(@Response() res, @Body() req: Rt287Req) {
        this.logger.log("Start rt_common_287");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon287(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_287');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_287sub1')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport287sub1(@Response() res, @Body() req: Rt17sub4Req) {
        this.logger.log("Start rt_common_287sub1");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon287sub1(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_287sub1');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_289')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport289(@Response() res, @Body() req: Rt289Req) {
        this.logger.log("Start rt_common_289");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon289(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_289');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_290')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport290(@Response() res, @Body() req: Rt290Req) {
        this.logger.log("Start rt_common_290");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon290(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_290');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_291')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport291(@Response() res, @Body() req: Rt291Req) {
        this.logger.log("Start rt_common_291");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon291(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_291');
        return res.status(HttpStatus.OK).json(data);
    }


    @Post('/rt_common_292')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport292(@Response() res, @Body() req: Rt292Req) {
        this.logger.log("Start rt_common_292");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon292(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_292');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_294')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport294(@Response() res, @Body() req: Rt294Req) {
        this.logger.log("Start rt_common_294");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon294(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_294');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_295')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport295(@Response() res, @Body() req: Rt295Req) {
        this.logger.log("Start rt_common_295");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon295(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_295');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_298')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport298(@Response() res, @Body() req: Rt298Req) {
        this.logger.log("Start rt_common_298");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon298(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_298');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_299')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport299(@Response() res, @Body() req: Rt299Req) {
        this.logger.log("Start rt_common_299");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon299(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_299');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_300')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport300(@Response() res, @Body() req: Rt300Req) {
        this.logger.log("Start rt_common_300");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon300(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_300');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_301')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport301(@Response() res, @Body() req: Rt301Req) {
        this.logger.log("Start rt_common_301");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon301(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_301');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_302')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport302(@Response() res, @Body() req: Rt302Req) {
        this.logger.log("Start rt_common_302");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon302(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_302');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_303')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport303(@Response() res, @Body() req: Rt303Req) {
        this.logger.log("Start rt_common_303");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon303(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_303');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_304')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport304(@Response() res, @Body() req: Rt304Req) {
        this.logger.log("Start rt_common_304");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon304(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_304');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_305')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport305(@Response() res, @Body() req: Rt305Req) {
        this.logger.log("Start rt_common_305");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon305(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_305');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_306')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport306(@Response() res, @Body() req: Rt306Req) {
        this.logger.log("Start rt_common_306");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon306(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_306');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_308')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport308(@Response() res, @Body() req: Rt308Req) {
        this.logger.log("Start rt_common_308");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon308(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_308');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_310')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport310(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_310");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon310(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_310');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_311')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport311(@Response() res, @Body() req: Rt311Req) {
        this.logger.log("Start rt_common_311");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon311(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_311');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_313')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport313(@Response() res, @Body() req: Rt313Req) {
        this.logger.log("Start rt_common_313");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon313(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_313');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_316')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport316(@Response() res, @Body() req: Rt316Req) {
        this.logger.log("Start rt_common_316");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon316(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_316');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_317')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport317(@Response() res, @Body() req: Rt317Req) {
        this.logger.log("Start rt_common_317");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon317(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_317');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_319')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport319(@Response() res, @Body() req: Rt319Req) {
        this.logger.log("Start rt_common_319");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon319(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_319');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_819')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport819(@Response() res, @Body() req: Rt319Req) {
        this.logger.log("Start rt_common_819");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon819(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_819');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_320')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport320(@Response() res, @Body() req: Rt320Req) {
        this.logger.log("Start rt_common_320");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon320(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_320');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_321')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport321(@Response() res, @Body() req: Rt321Req) {
        this.logger.log("Start rt_common_321");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon321(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_321');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_322')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport322(@Response() res, @Body() req: Rt322Req) {
        this.logger.log("Start rt_common_322");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon322(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_322');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_323')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport323(@Response() res, @Body() req: Rt323Req) {
        this.logger.log("Start rt_common_323");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon323(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_323');
        return res.status(HttpStatus.OK).json(data);
    }


    @Post('/rt_common_324')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport324(@Response() res, @Body() req: Rt324Req) {
        this.logger.log("Start rt_common_324");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon324(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_324');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_325')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport325(@Response() res, @Body() req: Rt325Req) {
        this.logger.log("Start rt_common_325");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon325(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_325');
        return res.status(HttpStatus.OK).json(data);
    }
    @Post('/rt_common_327')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport327(@Response() res, @Body() req: Rt327Req) {
        this.logger.log("Start rt_common_327");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon327(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_327');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_328')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport328(@Response() res, @Body() req: Rt328Req) {
        this.logger.log("Start rt_common_328");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon328(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_328');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_329')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport329(@Response() res, @Body() req: Rt329Req) {
        this.logger.log("Start rt_common_329");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon329(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_329');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_330')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport330(@Response() res, @Body() req: Rt330Req) {
        this.logger.log("Start rt_common_330");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon330(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_330');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_331')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport331(@Response() res, @Body() req: Rt331Req) {
        this.logger.log("Start rt_common_331");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon331(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_331');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_334')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport334(@Response() res, @Body() req: Rt334Req) {
        this.logger.log("Start rt_common_334");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon334(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_334');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_335')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport335(@Response() res, @Body() req: Rt335Req) {
        this.logger.log("Start rt_common_335");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon335(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_335');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_336')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport336(@Response() res, @Body() req: Rt336Req) {
        this.logger.log("Start rt_common_336");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon336(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_336');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_339')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport339(@Response() res, @Body() req: Rt339Req) {
        this.logger.log("Start rt_common_339");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon339(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_339');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_342')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport342(@Response() res, @Body() req: Rt342Req) {
        this.logger.log("Start rt_common_342");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon342(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_342');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_343')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport343(@Response() res, @Body() req: Rt343Req) {
        this.logger.log("Start rt_common_343");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon343(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_343');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_344')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport344(@Response() res, @Body() req: Rt344Req) {
        this.logger.log("Start rt_common_344");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon344(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_344');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_353')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport353(@Response() res, @Body() req: Rt353Req) {
        this.logger.log("Start rt_common_353");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon353(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_353');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_354')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport354(@Response() res, @Body() req: Rt354Req) {
        this.logger.log("Start rt_common_354");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon354(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_354');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_355')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport355(@Response() res, @Body() req: Rt355Req) {
        this.logger.log("Start rt_common_355");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon355(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_355');
        return res.status(HttpStatus.OK).json(data);
    }
    @Post('/rt_common_356')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport356(@Response() res, @Body() req: Rt356Req) {
        this.logger.log("Start rt_common_356");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon356(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_356');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_357')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport357(@Response() res, @Body() req: Rt357Req) {
        this.logger.log("Start rt_common_357");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon357(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_357');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_358')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport358(@Response() res, @Body() req: Rt358Req) {
        this.logger.log("Start rt_common_358");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon358(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_358');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_359')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport359(@Response() res, @Body() req: Rt359Req) {
        this.logger.log("Start rt_common_359");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon359(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_359');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_408')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport408(@Response() res, @Body() req: Rt408Req) {
        this.logger.log("Start rt_common_408");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon408(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_408');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_409')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport409(@Response() res, @Body() req: Rt409Req) {
        this.logger.log("Start rt_common_409");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon409(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_409');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_410')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport410(@Response() res, @Body() req: Rt410Req) {
        this.logger.log("Start rt_common_410");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon410(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_410');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_411')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport411(@Response() res, @Body() req: Rt411Req) {
        this.logger.log("Start rt_common_411");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon411(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_411');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_412')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport412(@Response() res, @Body() req: Rt412Req) {
        this.logger.log("Start rt_common_412");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon412(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_412');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_413')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport413(@Response() res, @Body() req: Rt413Req) {
        this.logger.log("Start rt_common_413");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon413(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_413');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_414')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport414(@Response() res, @Body() req: Rt414Req) {
        this.logger.log("Start rt_common_414");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon414(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_414');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_423')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport423(@Response() res, @Body() req: Rt423Req) {
        this.logger.log("Start rt_common_423");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon423(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_423');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_424')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport424(@Response() res, @Body() req: Rt424Req) {
        this.logger.log("Start rt_common_424");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon424(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_424');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_425')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport425(@Response() res, @Body() req: Rt425Req) {
        this.logger.log("Start rt_common_425");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon425(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_425');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_426')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport426(@Response() res, @Body() req: Rt426Req) {
        this.logger.log("Start rt_common_426");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon426(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_426');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_427')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport427(@Response() res, @Body() req: Rt427Req) {
        this.logger.log("Start rt_common_427");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon427(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_427');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_428')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport428(@Response() res, @Body() req: Rt428Req) {
        this.logger.log("Start rt_common_428");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon428(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_428');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_429')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport429(@Response() res, @Body() req: Rt429Req) {
        this.logger.log("Start rt_common_429");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon429(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_429');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_430')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport430(@Response() res, @Body() req: Rt430Req) {
        this.logger.log("Start rt_common_430");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon430(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_430');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_432')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport432(@Response() res, @Body() req: Rt432Req) {
        this.logger.log("Start rt_common_432");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon432(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_432');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_433')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport433(@Response() res, @Body() req: Rt433Req) {
        this.logger.log("Start rt_common_433");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon433(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_433');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_434')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport434(@Response() res, @Body() req: Rt434Req) {
        this.logger.log("Start rt_common_434");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon434(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_434');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_435')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport435(@Response() res, @Body() req: Rt435Req) {
        this.logger.log("Start rt_common_435");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon435(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_435');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_409_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport409_billed(@Response() res, @Body() req: Rt409billedReq) {
        this.logger.log("Start rt_common_409_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon409_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_409_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_409_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport409_billed_prov(@Response() res, @Body() req: Rt409billedReq) {
        this.logger.log("Start rt_common_409_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon409_billed_prov(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_409_billed_prov');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_429_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport429_billed(@Response() res, @Body() req: Rt429billedReq) {
        this.logger.log("Start rt_common_429_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon429_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_429_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_429_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport429_billed_prov(@Response() res, @Body() req: Rt429billedReq) {
        this.logger.log("Start rt_common_429_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon429_billed_prov(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_429_billed_prov');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_425_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport425_billed(@Response() res, @Body() req: Rt425Req) {
        this.logger.log("Start rt_common_425_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon425_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_425_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_425_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport425_billed_prov(@Response() res, @Body() req: Rt425Req) {
        this.logger.log("Start rt_common_425_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon425_billed_prov(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_425_billed_prov');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_424_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport424_billed(@Response() res, @Body() req: Rt424Req) {
        this.logger.log("Start rt_common_424_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon424_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_424_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_424_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport424_billed_prov(@Response() res, @Body() req: Rt424Req) {
        this.logger.log("Start rt_common_424_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon424_billed_prov(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_424_billed_prov');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_423_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport423_billed(@Response() res, @Body() req: Rt423Req) {
        this.logger.log("Start rt_common_423_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon423_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_423_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_286_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport286_billed(@Response() res, @Body() req: Rt286Req) {
        this.logger.log("Start rt_common_286_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon286_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_286_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_717')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport717(@Response() res, @Body() req: Rt717Req) {
        this.logger.log("Start rt_common_717");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon717(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_717');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_810')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport810(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_810");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon810(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_810');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_811')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport811(@Response() res, @Body() req: Rt8Req) {
        this.logger.log("Start rt_common_811");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon811(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_811');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_812')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport812(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_812");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon812(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_812');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_813')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport813(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_813");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon813(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_813');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_815')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport815(@Response() res, @Body() req: Rt18Req) {
        this.logger.log("Start rt_common_815");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon815(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_815');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_816')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport816(@Response() res, @Body() req: Rt18Req) {
        this.logger.log("Start rt_common_816");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon816(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_816');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_817')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport817(@Response() res, @Body() req: Rt18Req) {
        this.logger.log("Start rt_common_817");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon817(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_817');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_818')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport818(@Response() res, @Body() req: Rt18Req) {
        this.logger.log("Start rt_common_818");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon818(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_818');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_820')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport820(@Response() res, @Body() req: Rt8Req) {
        this.logger.log("Start rt_common_820");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon820(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_820');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_802')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport802(@Response() res, @Body() req: Rt425Req) {
        this.logger.log("Start rt_common_802");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon802(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_802');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_822')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport822(@Response() res, @Body() req: Rt822Req) {
        this.logger.log("Start rt_common_822");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon822(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_822');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_28')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport28(@Response() res, @Body() req: Rt409Req) {
        this.logger.log("Start rt_common_28");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon28(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_28');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_28_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport28_billed(@Response() res, @Body() req: Rt409billedReq) {
        this.logger.log("Start rt_common_28_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon28_billed(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_28_billed');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_823_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport823_billed(@Response() res, @Body() req: Rt823billedReq) {
        this.logger.log("Start rt_common_823_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon823_billed(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_823_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport823_billed_prov(@Response() res, @Body() req: Rt823billedReq) {
        this.logger.log("Start rt_common_823_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon823_billed_prov(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_827_billed')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport827_billed(@Response() res, @Body() req: Rt827billedReq) {
        this.logger.log("Start rt_common_827_billed");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon827_billed(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_827_billed_prov')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport827_billed_prov(@Response() res, @Body() req: Rt827billedReq) {
        this.logger.log("Start rt_common_827_billed_prov");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon827_billed_prov(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_801')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport801(@Response() res, @Body() req: Rt801Req) {
        this.logger.log("Start rt_common_801");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon801(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_801');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_831')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport831(@Response() res, @Body() req: Rt831Req) {
        this.logger.log("Start rt_common_831");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon831(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_832')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport832(@Response() res, @Body() req: Rt832Req) {
        this.logger.log("Start rt_common_832");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon832(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_833')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport833(@Response() res, @Body() req: Rt8Req) {
        this.logger.log("Start rt_common_833");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon833(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_834')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport834(@Response() res, @Body() req: Rt834Req) {
        this.logger.log("Start rt_common_834");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon834(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_835')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport835(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_835");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon835(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_835');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_836')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport836(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_836");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon836(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_836');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_837')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport837(@Response() res, @Body() req: Rt430Req) {
        this.logger.log("Start rt_common_837");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon837(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_837');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_839')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport839(@Response() res, @Body() req: Rt430Req) {
        this.logger.log("Start rt_common_839");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon839(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_839');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_840')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport840(@Response() res, @Body() req: Rt430Req) {
        this.logger.log("Start rt_common_840");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon840(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_840');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_841')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport841(@Response() res, @Body() req: Rt430Req) {
        this.logger.log("Start rt_common_841");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon841(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_841');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_842sub1')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub1(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub1");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub1(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub1');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub2')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub2(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub2");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub2(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub2');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub3')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub3(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub3");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub3(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub3');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub4')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub4(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub4");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub4(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub4');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub5')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub5(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub5");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub5(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub5');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub6')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub6(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub6");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub6(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub6');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub7')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub7(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub7");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub7(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub7');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub8')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub8(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub8");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub8(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub8');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_842sub9')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport842sub9(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_842sub9");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon842sub9(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_842sub9');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_843')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport843(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_843");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon843(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_843');
        return res.status(HttpStatus.OK).json(data);
    }
 
    @Post('/rt_common_844')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport844(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_844");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon844(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_844');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_845')
	@ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport845(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_845");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon845(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_845');
        return res.status(HttpStatus.OK).json(data);
    }
        
    @Post('/rt_common_846')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport846(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_846");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon846(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_846');
        return res.status(HttpStatus.OK).json(data);
    }
    
    @Post('/rt_common_847')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport847(@Response() res, @Body() req: Rt185Req) {
        this.logger.log("Start rt_common_847");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon847(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_847');
        return res.status(HttpStatus.OK).json(data);
    }         

    @Post('/rt_common_848')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport848(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_848");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon848(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_848');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_849')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport849(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_849");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon849(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_849');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_850')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport850(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_850");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon850(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_850');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_851')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport851(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_851");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon851(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_851');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_854')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport854(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_854");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon854(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_854');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_855')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport855(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_855");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon855(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_855');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_856')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport856(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_856");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon856(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_856');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_857')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport857(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_857");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon857(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_857');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_858')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport858(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_858");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon858(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_858');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_859')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport859(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_859");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon859(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_859');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_860')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport860(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_860");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon860(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_860');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_861')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport861(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_861");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon861(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_861');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_862')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport862(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_862");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon862(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_862');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_863')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport863(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_863");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon863(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_863');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_864')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport864(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_864");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon864(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_864');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_865')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport865(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_865");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon865(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_865');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_866')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport866(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_866");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon866(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_866');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rt_common_867')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReport867(@Response() res, @Body() req: Rt999Req) {
        this.logger.log("Start rt_common_867");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findRTCommon867(req);
        this.logger.debug('Res', data);
        this.logger.log('End rt_common_867');
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/rtorganisation')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "Missing info: parameter" })
    @ApiResponse({ status: 200, description: "OK" })
    public async getReportOrganisation(@Response() res, @Body() req: OrganisationReq) {
        this.logger.log("Start Organisation");
        this.logger.debug('Req', req);
        const data = await this.reportsService.findOrganisation(req);
        this.logger.debug('Res', data)
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('/ping')
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 400, description: "ERROR File does not exist" })
    @ApiResponse({ status: 200, description: "OK" })
    public async ping(@Response() res, @Request() req) {
        this.logger.log("Start ping");
        this.logger.log('End ping');
        return res.status(HttpStatus.OK).json('Success');
    }
}
