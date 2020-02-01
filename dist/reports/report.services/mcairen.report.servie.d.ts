import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCAIRENReq } from '../../models/mcairenreq';
export declare class MCAIRENReportService implements MCAIRENReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCAIREN(req: MCAIRENReq): Promise<any>;
}
