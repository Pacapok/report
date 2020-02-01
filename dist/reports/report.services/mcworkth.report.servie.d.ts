import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCWORKTHReq } from '../../models/mcworkthreq';
export declare class MCWORKTHReportService implements MCWORKTHReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCWORKTH(req: MCWORKTHReq): Promise<any>;
}
