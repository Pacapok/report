import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { IPDClaimFormReq } from '../../models/ipdclaimformreq';
export declare class IPDClaimFormPart1ReportService implements IPDClaimFormPart1ReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findIPDClaimFormP1(req: IPDClaimFormReq): Promise<any>;
}
