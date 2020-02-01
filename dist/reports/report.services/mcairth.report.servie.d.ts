import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MCAIRTHReq } from '../../models/mcairthreq';
export declare class MCAIRTHReportService implements MCAIRTHReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMCAIRTH(req: MCAIRTHReq): Promise<any>;
}
