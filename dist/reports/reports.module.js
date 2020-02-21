"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const reports_controller_1 = require("./reports.controller");
const reports_service_1 = require("./reports.service");
const opdclaimform_report_servie_1 = require("./report.services/opdclaimform.report.servie");
const ipdclaimformpart1_report_servie_1 = require("./report.services/ipdclaimformpart1.report.servie");
const ipdclaimformpart2_report_servie_1 = require("./../reports/report.services/ipdclaimformpart2.report.servie");
const mc5en_report_servie_1 = require("./../reports/report.services/mc5en.report.servie");
const mc5th_report_servie_1 = require("./../reports/report.services/mc5th.report.servie");
const mcairen_report_servie_1 = require("./../reports/report.services/mcairen.report.servie");
const mcairth_report_servie_1 = require("./../reports/report.services/mcairth.report.servie");
const mcairth2_report_service_1 = require("./../reports/report.services/mcairth2.report.service");
const mcgenen_report_servie_1 = require("./../reports/report.services/mcgenen.report.servie");
const mcgenth_report_servie_1 = require("./../reports/report.services/mcgenth.report.servie");
const mcextenen_report_servie_1 = require("./../reports/report.services/mcextenen.report.servie");
const mcextenth_report_servie_1 = require("./report.services/mcextenth.report.servie");
const mcge_report_servie_1 = require("./../reports/report.services/mcge.report.servie");
const mcworken_report_servie_1 = require("./../reports/report.services/mcworken.report.servie");
const mcworkth_report_servie_1 = require("./../reports/report.services/mcworkth.report.servie");
const printerlist_report_servie_1 = require("./../reports/report.services/printerlist.report.servie");
const referen_report_servie_1 = require("./../reports/report.services/referen.report.servie");
const referth_report_servie_1 = require("./../reports/report.services/referth.report.servie");
const subdiagnosis_report_servie_1 = require("./../reports/report.services/subdiagnosis.report.servie");
const sublabresults_report_servie_1 = require("./report.services/sublabresults.report.servie");
const subradio_report_servie_1 = require("./report.services/subradio.report.servie");
const statmrdfolderlastvisit_report_servie_1 = require("./report.services/statmrdfolderlastvisit.report.servie");
const stattraume_report_servie_1 = require("./report.services/stattraume.report.servie");
const common_module_1 = require("../common/common.module");
const mongoose_1 = require("@nestjs/mongoose");
const itemmasters_schema_1 = require("./schemas/itemmasters.schema");
const referencevalues_schema_1 = require("./schemas/referencevalues.schema");
const inventorystores_schema_1 = require("./schemas/inventorystores.schema");
const orderitems_schema_1 = require("./schemas/orderitems.schema");
const departments_schema_1 = require("./schemas/departments.schema");
const ordercategories_schema_1 = require("./schemas/ordercategories.schema");
const patientbills_schema_1 = require("./schemas/patientbills.schema");
const patients_schema_1 = require("./schemas/patients.schema");
const patientvisits_schema_1 = require("./schemas/patientvisits.schema");
const problems_schema_1 = require("./schemas/problems.schema");
const procedures_schema_1 = require("./schemas/procedures.schema");
const diagnoses_schema_1 = require("./schemas/diagnoses.schema");
const patientprocedures_schema_1 = require("./schemas/patientprocedures.schema");
const users_schema_1 = require("./schemas/users.schema");
const organisations_schema_1 = require("./schemas/organisations.schema");
const organisationimages_schema_1 = require("./schemas/organisationimages.schema");
const ipfillorders_schema_1 = require("./schemas/ipfillorders.schema");
const beds_schema_1 = require("./schemas/beds.schema");
const wards_schema_1 = require("./schemas/wards.schema");
const patientorders_schema_1 = require("./schemas/patientorders.schema");
const billinggroups_schema_1 = require("./schemas/billinggroups.schema");
const tpas_schema_1 = require("./schemas/tpas.schema");
const tariffs_schema_1 = require("./schemas/tariffs.schema");
const payors_schema_1 = require("./schemas/payors.schema");
const allergies_schema_1 = require("./schemas/allergies.schema");
const states_schema_1 = require("./schemas/states.schema");
const countries_schema_1 = require("./schemas/countries.schema");
const cities_schema_1 = require("./schemas/cities.schema");
const labresults_schema_1 = require("./schemas/labresults.schema");
const areas_schema_1 = require("./schemas/areas.schema");
const deposits_schema_1 = require("./schemas/deposits.schema");
const goodsreceives_schema_1 = require("./schemas/goodsreceives.schema");
const stockadjusts_schema_1 = require("./schemas/stockadjusts.schema");
const stocktransfers_schema_1 = require("./schemas/stocktransfers.schema");
const welfares_schema_1 = require("./schemas/welfares.schema");
const welfareadjustmentrequests_schema_1 = require("./schemas/welfareadjustmentrequests.schema");
const dispensereturns_schema_1 = require("./schemas/dispensereturns.schema");
const appointmentschedules_schema_1 = require("./schemas/appointmentschedules.schema");
const drugmasters_schema_1 = require("./schemas/drugmasters.schema");
const druggroups_schema_1 = require("./schemas/druggroups.schema");
const druggeneric_schema_1 = require("./schemas/druggeneric.schema");
const translations_schema_1 = require("./schemas/translations.schema");
const stockdispenses_schema_1 = require("./schemas/stockdispenses.schema");
const stockledgers_schema_1 = require("./schemas/stockledgers.schema");
const stockrequests_schema_1 = require("./schemas/stockrequests.schema");
const manufacturedetails_schema_1 = require("./schemas/manufacturedetails.schema");
const mrdcodings_schema_1 = require("./schemas/mrdcodings.schema");
const mrdfolders_schema_1 = require("./schemas/mrdfolders.schema");
const reportconfigurations_schema_1 = require("./schemas/reportconfigurations.schema");
const reporttemplates_schema_1 = require("./schemas/reporttemplates.schema");
const patientchargecodes_schema_1 = require("./schemas/patientchargecodes.schema");
const patientforms_schema_1 = require("./schemas/patientforms.schema");
const patientformdetails_schema_1 = require("./schemas/patientformdetails.schema");
const ordersets_schema_1 = require("./schemas/ordersets.schema");
const printerconfigurations_schema_1 = require("./schemas/printerconfigurations.schema");
const creditnotes_schema_1 = require("./schemas/creditnotes.schema");
const triagedetails_schema_1 = require("./schemas/triagedetails.schema");
let ReportsModule = class ReportsModule {
};
ReportsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'alerts', schema: departments_schema_1.DepartmentsSchema },
                { name: 'departments', schema: departments_schema_1.DepartmentsSchema },
                { name: 'diagnoses', schema: diagnoses_schema_1.DiagnosesSchema },
                { name: 'inventorystores', schema: inventorystores_schema_1.InventorystoresSchema },
                { name: 'itemmasters', schema: itemmasters_schema_1.ItemmastersSchema },
                { name: 'ordercategories', schema: ordercategories_schema_1.OrdercategoriesSchema },
                { name: 'orderitems', schema: orderitems_schema_1.OrderitemsSchema },
                { name: 'organisationimages', schema: organisationimages_schema_1.OrganisationimagesSchema },
                { name: 'organisations', schema: organisations_schema_1.OrganisationsSchema },
                { name: 'patientbills', schema: patientbills_schema_1.PatientbillsSchema },
                { name: 'patientprocedures', schema: patientprocedures_schema_1.PatientproceduresSchema },
                { name: 'patients', schema: patients_schema_1.PatientsSchema },
                { name: 'patientvisits', schema: patientvisits_schema_1.PatientvisitsSchema },
                { name: 'problems', schema: problems_schema_1.ProblemsSchema },
                { name: 'procedures', schema: procedures_schema_1.ProceduresSchema },
                { name: 'referencevalues', schema: referencevalues_schema_1.ReferencevaluesSchema },
                { name: 'users', schema: users_schema_1.UsersSchema },
                { name: 'wards', schema: wards_schema_1.WardsSchema },
                { name: 'beds', schema: beds_schema_1.BedsSchema },
                { name: 'ipfillorders', schema: ipfillorders_schema_1.IpfillordersSchema },
                { name: 'patientorders', schema: patientorders_schema_1.PatientordersSchema },
                { name: 'billinggroups', schema: billinggroups_schema_1.BillinggroupsSchema },
                { name: 'tpas', schema: tpas_schema_1.TpasSchema },
                { name: 'tariffs', schema: tariffs_schema_1.TariffsSchema },
                { name: 'payors', schema: payors_schema_1.PayorsSchema },
                { name: 'allergies', schema: allergies_schema_1.AllergiesSchema },
                { name: 'areas', schema: areas_schema_1.AreasSchema },
                { name: 'cities', schema: cities_schema_1.CitiesSchema },
                { name: 'labresults', schema: labresults_schema_1.LabresultsSchema },
                { name: 'states', schema: states_schema_1.StatesSchema },
                { name: 'countries', schema: countries_schema_1.CountriesSchema },
                { name: 'deposits', schema: deposits_schema_1.DepositsSchema },
                { name: 'goodsreceives', schema: goodsreceives_schema_1.GoodsreceivesSchema },
                { name: 'stockadjusts', schema: stockadjusts_schema_1.StockadjustsSchema },
                { name: 'stocktransfers', schema: stocktransfers_schema_1.StocktransfersSchema },
                { name: 'welfares', schema: welfares_schema_1.WelfaresSchema },
                { name: 'welfareadjustmentrequests', schema: welfareadjustmentrequests_schema_1.WelfareadjustmentrequestsSchema },
                { name: 'dispensereturns', schema: dispensereturns_schema_1.DispensereturnsSchema },
                { name: 'appointmentschedules', schema: appointmentschedules_schema_1.AppointmentschedulesSchema },
                { name: 'drugmasters', schema: drugmasters_schema_1.DrugmastersSchema },
                { name: 'druggroups', schema: druggroups_schema_1.DruggroupsSchema },
                { name: 'druggeneric', schema: druggeneric_schema_1.DruggenericSchema },
                { name: 'translations', schema: translations_schema_1.TranslationsSchema },
                { name: 'stockdispenses', schema: stockdispenses_schema_1.StockdispensesSchema },
                { name: 'stockledgers', schema: stockledgers_schema_1.StockledgersSchema },
                { name: 'stockrequests', schema: stockrequests_schema_1.StockrequestsSchema },
                { name: 'manufacturedetails', schema: manufacturedetails_schema_1.ManufacturedetailsSchema },
                { name: 'mrdcodings', schema: mrdcodings_schema_1.MrdcodingsSchema },
                { name: 'mrdfolders', schema: mrdfolders_schema_1.MrdfoldersSchema },
                { name: 'reportconfigurations', schema: reportconfigurations_schema_1.ReportconfigurationsSchema },
                { name: 'reporttemplates', schema: reporttemplates_schema_1.ReporttemplatesSchema },
                { name: 'patientchargecodes', schema: patientchargecodes_schema_1.PatientchargecodesSchema },
                { name: 'patientforms', schema: patientforms_schema_1.PatientformsSchema },
                { name: 'patientformdetails', schema: patientformdetails_schema_1.PatientformdetailsSchema },
                { name: 'ordersets', schema: ordersets_schema_1.OrdersetsSchema },
                { name: 'printerconfigurations', schema: printerconfigurations_schema_1.PrinterconfiguraitonsSchema },
                { name: 'creditnotes', schema: creditnotes_schema_1.CreditnotesSchema },
                { name: 'triagedetails', schema: triagedetails_schema_1.TriagedetailsSchema },
            ]),
            common_module_1.CommonModule
        ],
        controllers: [reports_controller_1.ReportsController],
        providers: [reports_service_1.ReportsService, opdclaimform_report_servie_1.OPDClaimFormReportService, ipdclaimformpart1_report_servie_1.IPDClaimFormPart1ReportService, ipdclaimformpart2_report_servie_1.IPDClaimFormPart2ReportService, mc5en_report_servie_1.MC5ENReportService, mc5th_report_servie_1.MC5THReportService, mcairen_report_servie_1.MCAIRENReportService, mcairth_report_servie_1.MCAIRTHReportService, mcairth2_report_service_1.MCAIRTH2ReportService, mcgenen_report_servie_1.MCGENENReportService, mcgenth_report_servie_1.MCGENTHReportService, mcextenen_report_servie_1.MCEXTENENReportService, mcextenth_report_servie_1.MCEXTENTHReportService, mcge_report_servie_1.MCGEReportService, mcworken_report_servie_1.MCWORKENReportService, mcworkth_report_servie_1.MCWORKTHReportService, printerlist_report_servie_1.PrinterListReportService, referen_report_servie_1.REFERENReportService, referth_report_servie_1.REFERTHReportService, subdiagnosis_report_servie_1.SUBDIAGReportService, subradio_report_servie_1.SUBRADIOLOGYRESULTSReportService, sublabresults_report_servie_1.SUBLABRESULTSReportService, statmrdfolderlastvisit_report_servie_1.STATMRDFolderLastVisitReportService, stattraume_report_servie_1.STATTRAUMAReportService]
    })
], ReportsModule);
exports.ReportsModule = ReportsModule;
//# sourceMappingURL=reports.module.js.map