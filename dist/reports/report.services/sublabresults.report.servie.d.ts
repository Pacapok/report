import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { SUBLABRESULTSReq } from '../../models/sublabresultsreq';
export declare class SUBLABRESULTSReportService implements SUBLABRESULTSReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findSUBLABRESULTS(req: SUBLABRESULTSReq): Promise<any>;
}
