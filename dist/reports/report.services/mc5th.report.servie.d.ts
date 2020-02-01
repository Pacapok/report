import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { MC5THReq } from '../../models/mc5threq';
export declare class MC5THReportService implements MC5THReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findMC5TH(req: MC5THReq): Promise<any>;
}
