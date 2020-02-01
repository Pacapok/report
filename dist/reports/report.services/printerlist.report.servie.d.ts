import { IPrinterconfigurations } from './../document/printerconfigurations.interface';
import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { PrinterlistReq } from '../../models/printerlistreq';
import { ReportsService } from '../reports.service';
export declare class PrinterListReportService implements PrinterListReportService {
    private readonly reportsService;
    private logger;
    private readonly printerconfigurationsModel;
    constructor(reportsService: ReportsService, logger: ConsoleLogger, printerconfigurationsModel: Model<IPrinterconfigurations>);
    findPrinterlist(req: PrinterlistReq): Promise<any>;
}
