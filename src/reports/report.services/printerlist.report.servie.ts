import { IPrinterconfigurations } from './../document/printerconfigurations.interface';
import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientforms } from '../document/patientforms.interface';
import { ObjectID } from 'bson';
import {PrinterlistReq} from '../../models/printerlistreq';
import { ReportsService } from '../reports.service';
import { from } from 'rxjs';


@Injectable()
export class PrinterListReportService implements PrinterListReportService {
    constructor(
        private readonly reportsService: ReportsService,
        private logger: ConsoleLogger,
        @InjectModel('printerconfigurations') private readonly printerconfigurationsModel: Model<IPrinterconfigurations>,        
    ) { }

//List printer configuration
// Move to report.services/printerlist.report.service.ts
async findPrinterlist(req: PrinterlistReq): Promise<any> {
    let result = [];
    try {
        const _user = await this.reportsService.findOrgByLoginId(req.loginuid);
        const resultPrinterLists = await this.printerconfigurationsModel.aggregate([
            { $match:{
                // 'statusflag': "A",                            
                'orguid': new Types.ObjectId(req.organisationuid)
                } 
            }
            ,{
                $lookup:{
                    from: "departments",
                    localField: "departmentuid",
                    foreignField: "_id",
                    as: "deptname"
                }
            }
            ,{
                $unwind: { path: "$deptname", preserveNullAndEmptyArrays: true }
            }
            ,{
                $project:{
                    Computername:"$devicename"
                    ,Departmentuid:"$departmentuid"
                    ,Deptname:"$deptname.name"
                    ,STATUS:"$statusflag"
                    ,ActiveFrom:"$activefrom"
                    ,ActiveTo:"$activeto"
                    ,Reportdetails : "$reportdetails"
                }
            }
                ,{
                $unwind: { path: "$Reportdetails", preserveNullAndEmptyArrays: true }
            }
            ,{
                $project:{
                    Computername:1
                    ,Departmentuid:1
                    ,Deptname:1
                    ,STATUS:1
                    ,ActiveFrom:1
                    ,ActiveTo:1
                    ,Reportuid: "$Reportdetails.reporttemplateuid"
                    ,Reportpath: "$Reportdetails.printerpath"
                    
                }
            }
            ,{
                $unwind: { path: "$Result1", preserveNullAndEmptyArrays: true }
            }
                ,{
                $project:{
                    Computername:"$Computername"
                    ,Departmentuid:"$Departmentuid"
                    ,Deptname:"$Deptname"
                    ,STATUS:1
                    ,ActiveFrom:1
                    ,ActiveTo:1
                    ,Reportuid: "$Reportuid"
                    ,Reportpath: "$Reportpath"
                    
                }
            }
            ,{
                $lookup:{
                    from: "reporttemplates",
                    localField: "Reportuid",
                    foreignField: "_id",
                    as: "reportinfo"
                }
            }
            ,{
                $unwind: { path: "$reportinfo", preserveNullAndEmptyArrays: true }
            }
            ,{
                $project:{
                    Computername2:"$Computername"
                    ,Departmentuid2:"$Departmentuid"
                    ,Deptname2:"$Deptname"
                    ,STATUS2:"$STATUS"
                    ,ActiveFrom2:{ 
                                        "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$ActiveFrom",timezone: "+07:00" }
                    }
                    , ActiveFrom3:"$ActiveFrom"
                    ,ActiveTo2:{ 
                                        "$dateToString": { "format": "%Y-%m-%d %H:%M", "date": "$ActiveTo",timezone: "+07:00" }
                    }
                    , ActiveTo3: "$ActiveTo"
                    ,Reportuid2: "$Reportuid"
                    ,Reportpath2: "$Reportpath"
                    ,Reportname2:"$reportinfo.name"
                    ,ReportParamType2:"$reportinfo.paramtype"
                    
                }
            }
        ]).exec()
        result = resultPrinterLists
    } catch (error) {
        this.logger.error('findPrinterlist error:', error);
    }
    return result;
}

}
