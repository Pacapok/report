import { from } from 'rxjs';
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';

import { ReportsService } from './reports.service';
import {OPDClaimFormReportService} from './report.services/opdclaimform.report.service';
import {IPDClaimFormPart1ReportService} from './report.services/ipdclaimformpart1.report.service';
import {IPDClaimFormPart2ReportService} from './report.services/ipdclaimformpart2.report.service';
import {MC5ENReportService} from './report.services/mc5en.report.service';
import {MC5THReportService} from './report.services/mc5th.report.service';
import {MCAIRENReportService} from './report.services/mcairen.report.service';
import {MCAIRTHReportService} from './report.services/mcairth.report.service';
import { MCAIRTH2ReportService } from './../reports/report.services/mcairth2.report.service';
import { MCGENENReportService } from './report.services/mcgenen.report.service';
import { MCGENTHReportService } from './report.services/mcgenth.report.service';
import {MCEXTENENReportService} from './report.services/mcextenen.report.service';
import {MCEXTENTHReportService} from './report.services/mcextenth.report.service';
import {MCGEReportService} from './report.services/mcge.report.service';
import {MCWORKENReportService} from './report.services/mcworken.report.service';
import {MCWORKTHReportService} from './report.services/mcworkth.report.service';
import {PrinterListReportService} from './report.services/printerlist.report.service';
import {REFERENReportService} from './report.services/referen.report.service';
import { REFERTHReportService } from './report.services/referth.report.service';

import { SUBDIAGReportService } from './report.services/subdiagnosis.report.service';
import { SUBLABRESULTSReportService } from './report.services/sublabresults.report.service';
import { SUBRADIOLOGYRESULTSReportService } from './report.services/subradio.report.service';
import { SUBMEDORDERReportService} from './report.services/submedorders.report.service';

import { STATMRDFolderLastVisitReportService } from './report.services/statmrdfolderlastvisit.report.service';
import {STATTRAUMAReportService} from './report.services/stattraume.report.service';
import { STATCODERICD10ReportService } from './report.services/statcodericd10.report.service';
import { STATCODERICD10OPDReportService } from './report.services/statcodericd10opd.report.service';
import { STATCODERICD10IPDReportService } from './report.services/statcodericd10ipd.report.service';
import { STATCODERICD10DETAILReportService } from './report.services/statcodericd10detail.report.service';
import {STATCODERICD10TOPRECORDReportService} from './report.services/statcodericd10toprecord.report.service';
import { STATCODERICD10TOPRECORDOPDReportService } from './report.services/statcodericd10toprecordopd.report.service';
import { STATCODERICD10TOPRECORDIPDReportService } from './report.services/statcodericd10toprecordipd.report.service';
import { STATCODERICD9ReportService } from './report.services/statcodericd9.report.service';
import { STATCODERICD9OPDReportService } from './report.services/statcodericd9opd.report.service';
import { STATCODERICD9IPDReportService } from './report.services/statcodericd9ipd.report.service';
import { STATCODERICD9DETAILReportService } from './report.services/statcodericd9detail.report.service';
import { STATCODERICD9TOPRECORDReportService } from './report.services/statcodericd9toprecord.report.service';
import { STATCODERICD9TOPRECORDOPDReportService } from './report.services/statcodericd9toprecordopd.report.service';
import { STATCODERICD9TOPRECORDIPDReportService } from './report.services/statcodericd9toprecordipd.report.service';

import { CommonModule } from '../common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemmastersSchema } from './schemas/itemmasters.schema';
import { ReferencevaluesSchema } from './schemas/referencevalues.schema';
import { InventorystoresSchema } from './schemas/inventorystores.schema';
import { OrderitemsSchema } from './schemas/orderitems.schema';
import { DepartmentsSchema } from './schemas/departments.schema';
import { OrdercategoriesSchema } from './schemas/ordercategories.schema';
import { PatientbillsSchema } from './schemas/patientbills.schema';
import { PatientsSchema } from './schemas/patients.schema';
import { PatientvisitsSchema } from './schemas/patientvisits.schema';
import { ProblemsSchema } from './schemas/problems.schema';
import { ProceduresSchema } from './schemas/procedures.schema';
import { DiagnosesSchema } from './schemas/diagnoses.schema';
import { PatientproceduresSchema } from './schemas/patientprocedures.schema';
import { UsersSchema } from './schemas/users.schema';
import { OrganisationsSchema } from './schemas/organisations.schema';
import { OrganisationimagesSchema } from './schemas/organisationimages.schema';
import { IpfillordersSchema } from './schemas/ipfillorders.schema';
import { BedsSchema } from './schemas/beds.schema';
import { WardsSchema } from './schemas/wards.schema';
import { PatientordersSchema } from './schemas/patientorders.schema';
import { BillinggroupsSchema } from './schemas/billinggroups.schema';
import { TpasSchema } from './schemas/tpas.schema';
import { TariffsSchema } from './schemas/tariffs.schema';
import { PayorsSchema } from './schemas/payors.schema';

import { AllergiesSchema } from './schemas/allergies.schema';
import { StatesSchema } from './schemas/states.schema';
import { CountriesSchema } from './schemas/countries.schema';
import { CitiesSchema } from './schemas/cities.schema';
import { LabresultsSchema } from './schemas/labresults.schema';
import { AreasSchema } from './schemas/areas.schema';
import { DepositsSchema } from './schemas/deposits.schema';
import { GoodsreceivesSchema } from './schemas/goodsreceives.schema';
import { StockadjustsSchema } from './schemas/stockadjusts.schema';
import { StocktransfersSchema } from './schemas/stocktransfers.schema';
import { WelfaresSchema } from './schemas/welfares.schema';
import { WelfareadjustmentrequestsSchema } from './schemas/welfareadjustmentrequests.schema';
import { DispensereturnsSchema } from './schemas/dispensereturns.schema';
import { AppointmentschedulesSchema } from './schemas/appointmentschedules.schema';
import { DrugmastersSchema } from './schemas/drugmasters.schema';
import { DruggroupsSchema } from './schemas/druggroups.schema';
import { DruggenericSchema } from './schemas/druggeneric.schema';
import { TranslationsSchema } from './schemas/translations.schema';
import { StockdispensesSchema } from './schemas/stockdispenses.schema';
import { StockledgersSchema } from './schemas/stockledgers.schema';
import { StockrequestsSchema } from './schemas/stockrequests.schema';
import { ManufacturedetailsSchema } from './schemas/manufacturedetails.schema';
import { MrdcodingsSchema } from './schemas/mrdcodings.schema';
import { MrdfoldersSchema } from './schemas/mrdfolders.schema';
import { ReportconfigurationsSchema } from './schemas/reportconfigurations.schema';
import { ReporttemplatesSchema } from './schemas/reporttemplates.schema';
import { PatientchargecodesSchema } from './schemas/patientchargecodes.schema';
import { PatientformsSchema } from './schemas/patientforms.schema';
import { PatientformdetailsSchema } from './schemas/patientformdetails.schema';
import { OrdersetsSchema } from './schemas/ordersets.schema';
import { PrinterconfiguraitonsSchema } from './schemas/printerconfigurations.schema';
import { CreditnotesSchema } from './schemas/creditnotes.schema';
import { TriagedetailsSchema } from './schemas/triagedetails.schema';
import { DeathrecordsSchema } from './schemas/deathrecords.schema';
import { OrrecordsSchema } from './schemas/orrecords.schema';
import { ObservationsSchema } from './schemas/observations.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'alerts', schema: DepartmentsSchema },
      { name: 'departments', schema: DepartmentsSchema },
      { name: 'diagnoses', schema: DiagnosesSchema },
      { name: 'inventorystores', schema: InventorystoresSchema },
      { name: 'itemmasters', schema: ItemmastersSchema },
      { name: 'ordercategories', schema: OrdercategoriesSchema },
      { name: 'orderitems', schema: OrderitemsSchema },
      { name: 'organisationimages', schema: OrganisationimagesSchema },
      { name: 'organisations', schema: OrganisationsSchema },
      { name: 'patientbills', schema: PatientbillsSchema },
      { name: 'patientprocedures', schema: PatientproceduresSchema },
      { name: 'patients', schema: PatientsSchema },
      { name: 'patientvisits', schema: PatientvisitsSchema },
      { name: 'problems', schema: ProblemsSchema },
      { name: 'procedures', schema: ProceduresSchema },
      { name: 'referencevalues', schema: ReferencevaluesSchema },
      { name: 'users', schema: UsersSchema },
      { name: 'wards', schema: WardsSchema },
      { name: 'beds', schema: BedsSchema },
      { name: 'ipfillorders', schema: IpfillordersSchema },
      { name: 'patientorders', schema: PatientordersSchema },
      { name: 'billinggroups', schema: BillinggroupsSchema },
      { name: 'tpas', schema: TpasSchema },
      { name: 'tariffs', schema: TariffsSchema },
      { name: 'payors', schema: PayorsSchema },
      { name: 'allergies', schema: AllergiesSchema },
      { name: 'areas', schema: AreasSchema },
      { name: 'cities', schema: CitiesSchema },
      { name: 'labresults', schema: LabresultsSchema },
      { name: 'states', schema: StatesSchema },
      { name: 'countries', schema: CountriesSchema },
      { name: 'deposits', schema: DepositsSchema },
      { name: 'goodsreceives', schema: GoodsreceivesSchema },
      { name: 'stockadjusts', schema: StockadjustsSchema },
      { name: 'stocktransfers', schema: StocktransfersSchema },
      { name: 'welfares', schema: WelfaresSchema },
      { name: 'welfareadjustmentrequests', schema: WelfareadjustmentrequestsSchema },
      { name: 'dispensereturns', schema: DispensereturnsSchema },
      { name: 'appointmentschedules', schema: AppointmentschedulesSchema },
      { name: 'drugmasters', schema: DrugmastersSchema },
      { name: 'druggroups', schema: DruggroupsSchema },
      { name: 'druggeneric', schema: DruggenericSchema },
      { name: 'translations', schema: TranslationsSchema },
      { name: 'stockdispenses', schema: StockdispensesSchema },
      { name: 'stockledgers', schema: StockledgersSchema },
      { name: 'stockrequests', schema: StockrequestsSchema },
      { name: 'manufacturedetails', schema: ManufacturedetailsSchema },
      { name: 'mrdcodings', schema: MrdcodingsSchema },
      { name: 'mrdfolders', schema: MrdfoldersSchema },
      { name: 'reportconfigurations', schema: ReportconfigurationsSchema },
      { name: 'reporttemplates', schema: ReporttemplatesSchema },
      { name: 'patientchargecodes', schema: PatientchargecodesSchema },
      { name: 'patientforms', schema: PatientformsSchema },
      { name: 'patientformdetails', schema: PatientformdetailsSchema },
      { name: 'ordersets', schema: OrdersetsSchema },
      { name: 'printerconfigurations', schema: PrinterconfiguraitonsSchema },
      { name: 'creditnotes', schema: CreditnotesSchema },
      { name: 'triagedetails', schema: TriagedetailsSchema},
      { name: 'deathrecords', schema: DeathrecordsSchema },
      { name: 'orrecords', schema: OrrecordsSchema },
      { name: 'observations', schema: ObservationsSchema },
    ]),
    CommonModule
  ],
  controllers: [ReportsController],
  providers: [
                ReportsService, 
                OPDClaimFormReportService, IPDClaimFormPart1ReportService, IPDClaimFormPart2ReportService, 
                MC5ENReportService, MC5THReportService, MCAIRENReportService, MCAIRTHReportService, MCAIRTH2ReportService, MCGENENReportService, MCGENTHReportService, MCEXTENENReportService, MCEXTENTHReportService, MCGEReportService, MCWORKENReportService, MCWORKTHReportService, 
                PrinterListReportService, 
                REFERENReportService, REFERTHReportService, 
                SUBDIAGReportService, SUBRADIOLOGYRESULTSReportService, SUBLABRESULTSReportService, SUBMEDORDERReportService,
                STATMRDFolderLastVisitReportService, STATTRAUMAReportService, STATCODERICD10ReportService, STATCODERICD10DETAILReportService, STATCODERICD10OPDReportService, STATCODERICD10IPDReportService, STATCODERICD10TOPRECORDReportService, STATCODERICD10TOPRECORDOPDReportService, STATCODERICD10TOPRECORDIPDReportService, 
                STATCODERICD9ReportService, STATCODERICD9OPDReportService, STATCODERICD9IPDReportService, STATCODERICD9TOPRECORDReportService, STATCODERICD9TOPRECORDOPDReportService, STATCODERICD9TOPRECORDIPDReportService, STATCODERICD9DETAILReportService
              ]
})
export class ReportsModule { }
