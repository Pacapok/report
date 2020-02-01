// import { Injectable, HttpService } from '@nestjs/common';
// import { AppConfig } from '../config/appconfig';
// import { ConsoleLogger } from './logger';
// import { RptParameter } from 'models/rptparam';

// @Injectable()
// export class JasperService {
//     private headers = { 'Content-Type': 'application/json' };
//     constructor(private http: HttpService, private logger: ConsoleLogger) { }

//     public async postReportByName(reportName: String, dataReq: any,logo?: String,params:RptParameter[]=[]): Promise<String> {
//         let request = require("request");
//         let parseString = require('xml2js').parseString;
//         let _logger = this.logger;
//         let _param = '';
//         if(logo){
//             logo = logo.replace("data:image/jpeg;base64,","");
//         }
//         _logger.debug('logo',logo);
//         if(params){
//             for(let p of params){
//                 _param +=`<reportParameter name="${p.key}">
//                             <value>${p.value}</value>
//                             </reportParameter>`;
//             }
//         }
//         return new Promise<String>((resolve, reject) => {
//             let jsonStirng = JSON.stringify(dataReq);
//             let reportUrl: string = '/reports/GLSICT/' + reportName;
//             const _body = `<reportExecutionRequest>
//           <reportUnitUri>${reportUrl}</reportUnitUri>
//           <async>false</async>
//           <freshData>false</freshData>
//           <saveDataSnapshot>false</saveDataSnapshot>
//           <outputFormat>pdf</outputFormat>
//           <interactive>true</interactive>
//           <parameters>
//             <reportParameter name="logo">
//               <value>${logo}</value>
//             </reportParameter>
//             ${_param}
//             <reportParameter name="datajson">
//               <value>${jsonStirng}</value>
//             </reportParameter>
//           </parameters>
//           </reportExecutionRequest>`;
//             _logger.debug('xml req:',_body);
//             let options1 = {
//                 method: 'POST',
//                 url: AppConfig.JASPER_URL + 'reportExecutions',
//                 qs: { '': '', j_username: AppConfig.JASPER_USER, j_password: AppConfig.JASPER_PASS },
//                 headers: {
//                     'Content-Type': 'application/xml',
//                 },
//                 followRedirect: false,
//                 jar: true,
//                 body: _body
//             };
//             let _request = request.defaults({ jar: true, encoding: null });
//             let requestId;
//             let Id;
//             let pdfBase64 = '';
//             request(options1, function (error, response, body) {
//                 if (error) {
//                     throw new Error(error);
//                 }
//                 _logger.debug('xml res:',body);
//                 parseString(body, function (err, result) {
//                     requestId = result.reportExecution.requestId[0];
//                     Id = result.reportExecution.exports[0].export[0].id[0];
//                     _logger.debug('{requestId:', requestId, 'id:', Id,'}');
//                     let options2 = {
//                         method: 'GET',
//                         url: AppConfig.JASPER_URL + 'reportExecutions/' + requestId + '/exports/' + Id + '/outputResource',
//                         qs: { '': '', j_username: AppConfig.JASPER_USER, j_password: AppConfig.JASPER_PASS },
//                         followRedirect: false,
//                         jar: true,
//                     };
//                     _request(options2, function (error, response, body) {
//                         if (error) {
//                             throw new Error(error);
//                         }
//                         pdfBase64 = Buffer.from(body, 'binary').toString('base64');
//                         resolve(pdfBase64);
//                     });
//                 });
//             });
//         });
//     }

//     public async getReportByName(reportName: String, dataReq: any) {
//         const encodeRequest = encodeURI(JSON.stringify(dataReq));
//         let reportUrl: string = 'reports/reports/GLSICT/' + reportName + '.pdf';
//         reportUrl = reportUrl + '?datajson=' + encodeRequest;
//         reportUrl = AppConfig.JASPER_URL + reportUrl + '&j_username=' + AppConfig.JASPER_USER + '&j_password=' + AppConfig.JASPER_PASS;
//         console.log(reportUrl);
//         let response = await this.http.get(reportUrl, {
//             responseType: 'arraybuffer'
//         }).toPromise();
//         let pdfBase64 = '';
//         if (response.status == 200) {
//             pdfBase64 = Buffer.from(response.data, 'binary').toString('base64');
//         } else {
//             this.logger.log('ResponseStatus=>', response.status);
//             this.logger.log('ResponseDesc=>', response.statusText)
//         }
//         return pdfBase64;
//     }

//     public async getReport() {
//         const dataReq = {
//             subscription: {
//                 job_id: "1",
//                 product_group: "2",
//                 product_code: "PD0001",
//                 product_desc: "aaaaa",
//                 account_name: "acountName",
//                 isSms: "Y"
//             }
//         };
//         console.log(dataReq);
//         const encodeRequest = encodeURI(JSON.stringify(dataReq));
//         let reportUrl: string = 'reports/reports/GLSICT/Test/testReport.pdf';
//         reportUrl = reportUrl + '?mobile_no=22232323&sub=' + encodeRequest;
//         reportUrl = AppConfig.JASPER_URL + reportUrl + '&j_username=' + AppConfig.JASPER_USER + '&j_password=' + AppConfig.JASPER_PASS;
//         console.log(reportUrl);
//         let response = await this.http.get(reportUrl, {
//             responseType: 'arraybuffer'
//         }).toPromise();
//         let pdfBase64 = '';
//         if (response.status == 200) {
//             pdfBase64 = Buffer.from(response.data, 'binary').toString('base64');
//         } else {
//             console.log(response.status);
//             console.log(response.statusText);
//         }
//         return pdfBase64;

//     }

//     public get(param: String): Promise<any> {
//         let url = AppConfig.JASPER_URL + 'reports/' + param + '&j_username=' + AppConfig.JASPER_USER + '&j_password=' + AppConfig.JASPER_PASS;
//         console.log(url);
//         return this.http
//             .get(url)
//             .toPromise()
//             .catch(this.handleError);
            
//     }

//     public post(reportName, json): Promise<any> {
//         let url = '' + reportName;
//         return this.http
//             .post(url, JSON.stringify(json), { headers: this.headers })
//             .toPromise()
//             .catch(this.handleError);
//     }

//     private handleError(error: any): Promise<any> {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }
// }
