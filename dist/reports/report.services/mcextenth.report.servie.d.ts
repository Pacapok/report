import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCEXTENTHReq } from '../../models/mcextenthreq';
export declare class MCEXTENTHReportService implements MCEXTENTHReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCEXTENTH(req: MCEXTENTHReq): Promise<any>;
}
