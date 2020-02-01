import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { SUBDIAGReq } from '../../models/subdiagreq';
export declare class SUBDIAGReportService implements SUBDIAGReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findSUBDIAG(req: SUBDIAGReq): Promise<any>;
}
