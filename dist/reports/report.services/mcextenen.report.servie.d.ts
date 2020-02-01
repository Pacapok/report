import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCEXTENENReq } from '../../models/mcextenenreq';
export declare class MCEXTENENReportService implements MCEXTENENReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCEXTENEN(req: MCEXTENENReq): Promise<any>;
}
