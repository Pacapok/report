import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCAIRTHReq } from '../../models/mcairthreq';
export declare class MCAIRTH2ReportService implements MCAIRTH2ReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCAIRTH2(req: MCAIRTHReq): Promise<any>;
}
