import { Document } from 'mongoose';
export interface ITriagedetails extends Document {
    _id: String;
    cchpiuid: String;
    patientuid: String;
    patientvisituid: String;
    departmentuid: String;
    triagedby: String;
    triagedate: String;
    statusflag: String;
    orguid: String;
    conciousnessuid: String;
    emergencyleveluid: String;
    gcseyemovementuid: String;
    gcsmotoruid: String;
    gcsverbaluid: String;
    traumatypeuid: String;
}
