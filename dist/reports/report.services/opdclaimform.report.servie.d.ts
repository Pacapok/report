import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { OPDClaimFormReq } from '../../models/opdclaimformreq';
export declare class OPDClaimFormReportService implements OPDClaimFormReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findOPDClaimForm(req: OPDClaimFormReq): Promise<any>;
}
