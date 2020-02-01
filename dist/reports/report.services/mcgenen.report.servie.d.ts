import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCGENReq } from '../../models/mcgenreq';
export declare class MCGENENReportService implements MCGENENReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCGENEN(req: MCGENReq): Promise<any>;
}
