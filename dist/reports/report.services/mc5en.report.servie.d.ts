import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MC5ENReq } from '../../models/mc5enreq';
export declare class MC5ENReportService implements MC5ENReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMC5EN(req: MC5ENReq): Promise<any>;
}
