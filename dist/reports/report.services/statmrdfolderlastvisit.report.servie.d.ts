import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientvisits } from '../document/patientvisits.interface';
import { STATMRDFolderLastVisitReq } from '../../models/statmrdfolderlastvisits';
export declare class STATMRDFolderLastVisitReportService implements STATMRDFolderLastVisitReportService {
    private logger;
    private readonly PatientvisitsModel;
    constructor(logger: ConsoleLogger, PatientvisitsModel: Model<IPatientvisits>);
    findSTATMRDFolderLastVisit(req: STATMRDFolderLastVisitReq): Promise<any>;
}
