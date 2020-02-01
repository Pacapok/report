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
const basereq_1 = require("./basereq");
class Rt823billedReq extends basereq_1.BaseReq {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s age' }),
    __metadata("design:type", String)
], Rt823billedReq.prototype, "param1", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s breed' }),
    __metadata("design:type", String)
], Rt823billedReq.prototype, "param2", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'patientvisituid', required: true, example: "5b8a09cd3238d86bf08fb581" }),
    __metadata("design:type", String)
], Rt823billedReq.prototype, "patientvisituid", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'searchstring', required: true, example: "5b8a09cd3238d86bf08fb581" }),
    __metadata("design:type", String)
], Rt823billedReq.prototype, "searchstring", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'searchcriteria', required: true, example: "" }),
    __metadata("design:type", String)
], Rt823billedReq.prototype, "searchcriteria", void 0);
exports.Rt823billedReq = Rt823billedReq;
//# sourceMappingURL=rt823billedreq.js.map