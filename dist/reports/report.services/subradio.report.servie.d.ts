import { Model } from 'mongoose';
import { ConsoleLogger } from '../../service/logger';
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { SUBRADIOLOGYRESULTSReq } from '../../models/subradiologyresultsreq';
export declare class SUBRADIOLOGYRESULTSReportService implements SUBRADIOLOGYRESULTSReportService {
    private logger;
    private readonly PatientformdetailsModel;
    constructor(logger: ConsoleLogger, PatientformdetailsModel: Model<IPatientformdetails>);
    findSUBRADIOLOGYRESULTS(req: SUBRADIOLOGYRESULTSReq): Promise<any>;
}
