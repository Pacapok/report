import Utils from '../../utils/utils';
import DateUtils from '../../utils/dateutils';
import { Injectable, UploadedFile } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ConsoleLogger} from '../../service/logger'
import { IPatientformdetails } from '../document/patientformdetails.interface';
import { ObjectID } from 'bson';
import {MCGEReq} from '../../models/mcgereq';
import { from } from 'rxjs';


@Injectable()
export class MCGEReportService implements MCGEReportService {
    constructor(
        private logger: ConsoleLogger,
        @InjectModel('patientformdetails') private readonly PatientformdetailsModel: Model<IPatientformdetails>,        
    ) { }

//Medical Certificate for Government Enterprise
async findMCGE(req: MCGEReq): Promise<any> {
    let result = [];
    try {
        const resultfindMCGE = await this.PatientformdetailsModel.aggregate([
            {
                $match: {
                    statusflag: "A",
                    orguid: new Types.ObjectId(req.organisationuid),
                    patientformuid: new Types.ObjectId(req.searchcriteria),
                    patientuid: new Types.ObjectId(req.patientuid),
                }
            },
            {
                $lookup:{
                            from: "formtemplates",
                            localField: "templateuid",
                            foreignField: "_id",
                            as: "formtemplates"
                        }
            },
            {
                $unwind: { path: "$formtemplates", preserveNullAndEmptyArrays: true }
            },
            {
                $match:{
                            "formtemplates.code":"129"
                        }
            },
            {
                $lookup: {
                    from: "patientforms",
                    localField: "patientformuid",
                    foreignField: "_id",
                    as: "patientforms"
                }
            },
            {
                $unwind: { path: "$patientforms", preserveNullAndEmptyArrays: true }
            },
            {
                $match: {
                    "patientforms.statusflag": "A",
                    "patientforms.orguid": new Types.ObjectId(req.organisationuid),
                    "patientforms._id": new Types.ObjectId(req.searchcriteria),
                    "patientforms.patientuid": new Types.ObjectId(req.patientuid),
                }
            },
            //-----
            {
                $lookup: {
                    from: "departments",
                    localField: "patientforms.departmentuid",
                    foreignField: "_id",
                    as: "departments"
                }
            },
            {
                $unwind: { path: "$departments", preserveNullAndEmptyArrays: true }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "patientforms.careprovideruid",
                    foreignField: "_id",
                    as: "careproviders"
                }
            },
            {
                $unwind: { path: "$careproviders", preserveNullAndEmptyArrays: true }
            },
            {
                $lookup: {
                    from: "reportconfigurations",
                    localField: "orguid",
                    foreignField: "orguid",
                    as: "reportconfigurations"
                }
            },
            {
                $unwind: { path: "$reportconfigurations", preserveNullAndEmptyArrays: true }
            },
            {
                $match: {
                    "reportconfigurations.statusflag": "A",
                    "reportconfigurations.orguid": new Types.ObjectId(req.organisationuid),
                    "reportconfigurations.reporttemplateuid": new Types.ObjectId(req.reporttemplateuid)
                }
            },
//-----
            //AddFileds สร้างชื่อ field ใหม่
            {
            $addFields:{
                            MCforGEname:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEname"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEcaretitle:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEcaretitle"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
    {
            $addFields:{
                            MCforGEcarename:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEcarename"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
    {
            $addFields:{
                            MCforGElicenseno:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElicenseno"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
    {
            $addFields:{
                            MCforGEpatientname:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEpatientname"]}
                                                    }
                                                },-1]
                                            }
                        }
        },
    {
            $addFields:{
                            MCforGEpatientage:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEpatientage"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEhn:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEhn"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEhospitaladd:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEhospitaladd"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEstartdate:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEstartdate"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEenddate:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEenddate"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            MCforGEchiefcomplaint:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEchiefcomplaint"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGEtreatedpatient:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEtreatedpatient"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },       
    {
            $addFields:{
                            MCforGEdiagnosis:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEdiagnosis"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },         
    {
            $addFields:{
                            MCforGEtreatment:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEtreatment"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },          
    {
            $addFields:{
                            MCforGErecommendation:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGErecommendation"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },          
    {
            $addFields:{
                            MCforGElabel1:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel1"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },        
    {
            $addFields:{
                            MCforGErecCheckbox:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGErecCheckbox"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGElable2:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElable2"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },      
    {
            $addFields:{
                            MCforGEsign:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEsign"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },      
    {
            $addFields:{
                            MCforGElabel3:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel3"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },  
    {
            $addFields:{
                            MCforGEcaresign:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEcaresign"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },  
    {
            $addFields:{
                            MCforGEcarelicenseno:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEcarelicenseno"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGElabel4:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel4"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },     
    {
            $addFields:{
                            MCforGEdatesign:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEdatesign"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },
    {
            $addFields:{
                            emp112:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","emp112"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGEtitleconfirm:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEtitleconfirm"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGEusername:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEusername"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },       
    {
            $addFields:{
                            MCforGEtext1:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEtext1"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },      
    {
            $addFields:{
                            MCforGEpatientnameconfirm:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEpatientnameconfirm"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGEtext2:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEtext2"]}
                                                            }
                                                 },-1]
                                        }
                        }
    },   
    {
            $addFields:{
                            MCforGElabel5:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel5"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGEusersign:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEusersign"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGElabel6:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel6"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGEusersign2:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEusersign2"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGElabel7:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel7"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGEassignname:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEassignname"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGElabel8:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGElabel8"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    {
            $addFields:{
                            MCforGEdateusersign:{$arrayElemAt:
                                                [{ 
                                                    $filter:{
                                                        input:"$attributes",
                                                        as:"vs",
                                                        cond:{$eq:["$$vs.attributename","MCforGEdateusersign"]}
                                                            }
                                                 },-1]
                                        }
                        }
    }, 
    // //Group
    {
        $group:{
                    _id:{patientvisituid:"$patientvisituid"},
            HEADmcDEPTCODE: { "$push": "$departments.code" },
            HEADmcDEPTNAME: { "$push": "$departments.name" },
            HEADmcDRCODE: { "$push": "$careproviders.code" },
            HEADmcDRNAME: { "$push": "$careproviders.name" },
            HEADmcREPORTTYPE: { "$push": "$reportconfigurations.documenttype" },
            HEADmcREPORTFM: { "$push": "$reportconfigurations.documentno" },
                    MCforGEname:{"$push":"$MCforGEname.textvalue"},
                    MCforGEcaretitle:{"$push":"$MCforGEcaretitle.textvalue"},
                    MCforGEcarename:{"$push":"$MCforGEcarename.textvalue"},
                    MCforGElicenseno:{"$push":"$MCforGElicenseno.textvalue"},
                    MCforGEpatientname:{"$push":"$MCforGEpatientname.textvalue"},                   
                    MCforGEpatientage:{"$push":"$MCforGEpatientage.textvalue"},                        
                    MCforGEhn:{"$push":"$MCforGEhn.textvalue"},                          
                    MCforGEhospitaladd:{"$push":"$MCforGEhospitaladd.textvalue"},               
                    MCforGEstartdate:{"$push":"$MCforGEstartdate.textvalue"},               
                    MCforGEenddate:{"$push":"$MCforGEenddate.textvalue"},               
                    MCforGEchiefcomplaint:{"$push":"$MCforGEchiefcomplaint.textvalue"},       
                    MCforGEtreatedpatient:{"$push":"$MCforGEtreatedpatient.textvalue"},       
                    MCforGEdiagnosis:{"$push":"$MCforGEdiagnosis.textvalue"},    
                    MCforGEtreatment:{"$push":"$MCforGEtreatment.textvalue"},    
                    MCforGErecommendation:{"$push":"$MCforGErecommendation.textvalue"},    
                    MCforGElabel1:{"$push":"$MCforGElabel1.textvalue"},    
                    MCforGErecCheckbox:{"$push":"$MCforGErecCheckbox.textvalue"},    
                    MCforGElable2:{"$push":"$MCforGElable2.textvalue"},    
                    MCforGEsign:{"$push":"$MCforGEsign.textvalue"},    
                    MCforGElabel3:{"$push":"$MCforGElabel3.textvalue"},    
                    MCforGEcaresign:{"$push":"$MCforGEcaresign.textvalue"},                    
                    MCforGEcarelicenseno:{"$push":"$MCforGEcarelicenseno.textvalue"},                    
                    MCforGElabel4:{"$push":"$MCforGElabel4.textvalue"},                    
                    MCforGEdatesign:{"$push":"$MCforGEdatesign.textvalue"},                     
                    emp112:{"$push":"$emp112.textvalue"},                     
                    MCforGEtitleconfirm:{"$push":"$MCforGEtitleconfirm.textvalue"},                                
                    MCforGEusername:{"$push":"$MCforGEusername.textvalue"},                                
                    MCforGEtext1:{"$push":"$MCforGEtext1.textvalue"},                                 
                    MCforGEpatientnameconfirm:{"$push":"$MCforGEpatientnameconfirm.textvalue"},          
                    MCforGEtext2:{"$push":"$MCforGEtext2.textvalue"},                      
                    MCforGElabel5:{"$push":"$MCforGElabel5.textvalue"},                   
                    MCforGEusersign:{"$push":"$MCforGEusersign.textvalue"},  
                    MCforGElabel6:{"$push":"$MCforGElabel6.textvalue"},  
                    MCforGEusersign2:{"$push":"$MCforGEusersign2.textvalue"},  
                    MCforGElabel7:{"$push":"$MCforGElabel7.textvalue"},  
                    MCforGEassignname:{"$push":"$MCforGEassignname.textvalue"},  
                    MCforGElabel8:{"$push":"$MCforGElabel8.textvalue"}, 
                    MCforGEdateusersign:{"$push":"$MCforGEdateusersign.textvalue"}, 
      
        }          
                    
    },
    // //Project
    {
        $project:{
            HEADmcDEPTCODE: { $arrayElemAt: ["$HEADmcDEPTCODE", -1] },
            HEADmcDEPTNAME: { $arrayElemAt: ["$HEADmcDEPTNAME", -1] },
            HEADmcDRCODE: { $arrayElemAt: ["$HEADmcDRCODE", -1] },
            HEADmcDRNAME: { $arrayElemAt: ["$HEADmcDRNAME", -1] },
            HEADmcREPORTTYPE: { $arrayElemAt: ["$HEADmcREPORTTYPE", -1] },
            HEADmcREPORTFM: { $arrayElemAt: ["$HEADmcREPORTFM", -1] },
                    MCforGEname:{$arrayElemAt:["$MCforGEname",-1]},
                    MCforGEcaretitle:{$arrayElemAt:["$MCforGEcaretitle",-1]},
                    MCforGEcarename:{$arrayElemAt:["$MCforGEcarename",-1]},
                    MCforGElicenseno:{$arrayElemAt:["$MCforGElicenseno",-1]},
                    MCforGEpatientname:{$arrayElemAt:["$MCforGEpatientname",-1]},                     
                    MCforGEpatientage:{$arrayElemAt:["$MCforGEpatientage",-1]},                       
                    MCforGEhn:{$arrayElemAt:["$MCforGEhn",-1]},                        
                    MCforGEhospitaladd:{$arrayElemAt:["$MCforGEhospitaladd",-1]},                              
                    MCforGEstartdate:{$arrayElemAt:["$MCforGEstartdate",-1]},                              
                    MCforGEenddate:{$arrayElemAt:["$MCforGEenddate",-1]},                              
                    MCforGEchiefcomplaint:{$arrayElemAt:["$MCforGEchiefcomplaint",-1]},                              
                    MCforGEtreatedpatient:{$arrayElemAt:["$MCforGEtreatedpatient",-1]},                              
                    MCforGEdiagnosis:{$arrayElemAt:["$MCforGEdiagnosis",-1]},                    
                    MCforGEtreatment:{$arrayElemAt:["$MCforGEtreatment",-1]},                    
                    MCforGErecommendation:{$arrayElemAt:["$MCforGErecommendation",-1]},                    
                    MCforGElabel1:{$arrayElemAt:["$MCforGElabel1",-1]},                    
                    MCforGErecCheckbox:{$arrayElemAt:["$MCforGErecCheckbox",-1]},                    
                    MCforGElable2:{$arrayElemAt:["$MCforGElable2",-1]},                    
                    MCforGEsign:{$arrayElemAt:["$MCforGEsign",-1]},                    
                    MCforGElabel3:{$arrayElemAt:["$MCforGElabel3",-1]},                    
                    MCforGEcaresign:{$arrayElemAt:["$MCforGEcaresign",-1]},                    
                    MCforGEcarelicenseno:{$arrayElemAt:["$MCforGEcarelicenseno",-1]},                    
                    MCforGElabel4:{$arrayElemAt:["$MCforGElabel4",-1]},                    
                    MCforGEdatesign:{$arrayElemAt:["$MCforGEdatesign",-1]},                                                                              
                    emp112:{$arrayElemAt:["$emp112",-1]},                                   
                    MCforGEtitleconfirm:{$arrayElemAt:["$MCforGEtitleconfirm",-1]},       
                    MCforGEusername:{$arrayElemAt:["$MCforGEusername",-1]},       
                    MCforGEtext1:{$arrayElemAt:["$MCforGEtext1",-1]},                                         
                    MCforGEpatientnameconfirm:{$arrayElemAt:["$MCforGEpatientnameconfirm",-1]},                 
                    MCforGEtext2:{$arrayElemAt:["$MCforGEtext2",-1]},                     
                    MCforGElabel5:{$arrayElemAt:["$MCforGElabel5",-1]},                       
                    MCforGEusersign:{$arrayElemAt:["$MCforGEusersign",-1]},                       
                    MCforGElabel6:{$arrayElemAt:["$MCforGElabel6",-1]},        
                    MCforGEusersign2:{$arrayElemAt:["$MCforGEusersign2",-1]}, 
                    MCforGElabel7:{$arrayElemAt:["$MCforGElabel7",-1]}, 
                    MCforGEassignname:{$arrayElemAt:["$MCforGEassignname",-1]}, 
                    MCforGElabel8:{$arrayElemAt:["$MCforGElabel8",-1]},          
                    MCforGEdateusersign:{$arrayElemAt:["$MCforGEdateusersign",-1]},
         }   
    }
        ]).exec()
        result = resultfindMCGE
    } catch (error) {
        this.logger.error('findMCGE error:', error);
    }
    return result;
}

}
