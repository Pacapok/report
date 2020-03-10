import { from } from 'rxjs';
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';

import { ReportsService } from './reports.service';
import {OPDClaimFormReportService} from './report.services/opdclaimform.report.servie';
import {IPDClaimFormPart1ReportService} from './report.services/ipdclaimformpart1.report.servie';
import {IPDClaimFormPart2ReportService} from './../reports/report.services/ipdclaimformpart2.report.servie';
import {MC5ENReportService} from './../reports/report.services/mc5en.report.servie';
import {MC5THReportService} from './../reports/report.services/mc5th.report.servie';
import {MCAIRENReportService} from './../reports/report.services/mcairen.report.servie';
import {MCAIRTHReportService} from './../reports/report.services/mcairth.report.servie';
import { MCAIRTH2ReportService } from './../reports/report.services/mcairth2.report.service';
import { MCGENENReportService } from './../reports/report.services/mcgenen.report.servie';
import { MCGENTHReportService } from './../reports/report.services/mcgenth.report.servie';
import {MCEXTENENReportService} from './../reports/report.services/mcextenen.report.servie';
import {MCEXTENTHReportService} from './report.services/mcextenth.report.servie';
import {MCGEReportService} from './../reports/report.services/mcge.report.servie';
import {MCWORKENReportService} from './../reports/report.services/mcworken.report.servie';
import {MCWORKTHReportService} from './../reports/report.services/mcworkth.report.servie';
import {PrinterListReportService} from './../reports/report.services/printerlist.report.servie';
import {REFERENReportService} from './../reports/report.services/referen.report.servie';
import { REFERTHReportService } from './../reports/report.services/referth.report.servie';
import { SUBDIAGReportService } from './../reports/report.services/subdiagnosis.report.servie';
import { SUBLABRESULTSReportService } from './report.services/sublabresults.report.servie';
import { SUBRADIOLOGYRESULTSReportService } from './report.services/subradio.report.servie';
import { STATMRDFolderLastVisitReportService } from './report.services/statmrdfolderlastvisit.report.servie';
import {STATTRAUMAReportService} from './report.services/stattraume.report.servie';

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
  providers: [ReportsService, OPDClaimFormReportService, IPDClaimFormPart1ReportService, IPDClaimFormPart2ReportService, MC5ENReportService, MC5THReportService, MCAIRENReportService, MCAIRTHReportService, MCAIRTH2ReportService, MCGENENReportService, MCGENTHReportService, MCEXTENENReportService, MCEXTENTHReportService, MCGEReportService, MCWORKENReportService, MCWORKTHReportService, PrinterListReportService, REFERENReportService, REFERTHReportService, SUBDIAGReportService, SUBRADIOLOGYRESULTSReportService, SUBLABRESULTSReportService, STATMRDFolderLastVisitReportService, STATTRAUMAReportService]
})
export class ReportsModule { }
