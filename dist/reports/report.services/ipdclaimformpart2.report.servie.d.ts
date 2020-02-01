import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from './../document/patientformdetails.interface';
import { IPDClaimFormReq } from '../../models/ipdclaimformreq';
export declare class IPDClaimFormPart2ReportService implements IPDClaimFormPart2ReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findIPDClaimFormP2(req: IPDClaimFormReq): Promise<any>;
}
