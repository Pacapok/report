"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class BaseReq {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'loginuid', required: true, example: "5b862a593238d86bf03a39a9" }),
    __metadata("design:type", String)
], BaseReq.prototype, "loginuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'searchcriteria', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "searchcriteria", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'organisationuid', required: true, example: "5b20f438d1202e29ce16f711" }),
    __metadata("design:type", String)
], BaseReq.prototype, "organisationuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'patientuid', required: true, example: "5d4029eff15e720cb27d4458" }),
    __metadata("design:type", String)
], BaseReq.prototype, "patientuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'patientvisituid', required: true, example: "5d71cb4f643ea979b4dcdaf5" }),
    __metadata("design:type", String)
], BaseReq.prototype, "patientvisituid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'fromdate', required: true, example: "2018-01-01T17:00:00.000Z" }),
    __metadata("design:type", String)
], BaseReq.prototype, "fromdate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'todate', required: true, example: "2018-11-31T16:59:59.999Z" }),
    __metadata("design:type", String)
], BaseReq.prototype, "todate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'incomesource', required: true, example: "5b20f40dd1202e29ce16f4eb" }),
    __metadata("design:type", String)
], BaseReq.prototype, "incomesource", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'storeuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "storeuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'itemuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "itemuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'itemmasteruid', required: true, example: "5bcfd73197c3717f427d719e" }),
    __metadata("design:type", String)
], BaseReq.prototype, "itemmasteruid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'ReceiptNumber', required: true, example: "18-DRF18XXXXXX" }),
    __metadata("design:type", String)
], BaseReq.prototype, "ReceiptNumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'reporttemplateuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "reporttemplateuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'usersuid', required: true, example: "5bcfcb3997c3717f427d4c6a" }),
    __metadata("design:type", String)
], BaseReq.prototype, "usersuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'keywordSearch', required: false, example: "-" }),
    __metadata("design:type", String)
], BaseReq.prototype, "keywordSearch", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'sequencenumber', required: true, example: "RF0082" }),
    __metadata("design:type", String)
], BaseReq.prototype, "sequencenumber", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'payoragreement', required: true, example: "5b7fd7153238d86bf0c4a945" }),
    __metadata("design:type", String)
], BaseReq.prototype, "payoragreement", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'isbill', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "isbill", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'careprovideruids', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "careprovideruids", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'departmentuids', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "departmentuids", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'orderset', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "orderset", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'tpauid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "tpauid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'comment', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "comment", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'fromamount', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "fromamount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'toamount', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "toamount", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'entypeuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "entypeuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'druggroupuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "druggroupuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'orderitemuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "orderitemuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'allocatebydate', required: true, example: true }),
    __metadata("design:type", Boolean)
], BaseReq.prototype, "allocatebydate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'frequencyuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "frequencyuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'wardid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "warduid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'printbydate', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "printbydate", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'ordercategoryuid', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "ordercategoryuid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'ordersubcategoryuids', required: true, example: "" }),
    __metadata("design:type", String)
], BaseReq.prototype, "ordersubcategoryuids", void 0);
exports.BaseReq = BaseReq;
//# sourceMappingURL=basereq.js.map