import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCGENReq } from '../../models/mcgenreq';
export declare class MCGENTHReportService implements MCGENTHReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCGENTH(req: MCGENReq): Promise<any>;
}
