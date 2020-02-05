import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { ITriagedetails } from '../document/triagedetails.interface';
import { STATTRAUMAReq } from '../../models/stattraumareq';
export declare class STATTRAUMAReportService implements STATTRAUMAReportService {
    private logger;
    private readonly TriagedetailsModel;
    constructor(logger: ConsoleLogger, TriagedetailsModel: Model<ITriagedetails>);
    findSTATTRAUMA(req: STATTRAUMAReq): Promise<any>;
}
