import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { REFERReq } from '../../models/referreq';
export declare class REFERTHReportService implements REFERTHReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findREFERTH(req: REFERReq): Promise<any>;
}
