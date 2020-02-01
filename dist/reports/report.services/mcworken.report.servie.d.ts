import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCWORKENReq } from '../../models/mcworkenreq';
export declare class MCWORKENReportService implements MCWORKENReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCWORKEN(req: MCWORKENReq): Promise<any>;
}
