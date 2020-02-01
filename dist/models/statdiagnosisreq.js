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
const basereq_1 = require("./basereq");
const swagger_1 = require("@nestjs/swagger");
class STATdiagnosisReq extends basereq_1.BaseReq {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s age' }),
    __metadata("design:type", String)
], STATdiagnosisReq.prototype, "param1", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s breed' }),
    __metadata("design:type", String)
], STATdiagnosisReq.prototype, "param2", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s name' }),
    __metadata("design:type", String)
], STATdiagnosisReq.prototype, "param3", void 0);
exports.STATdiagnosisReq = STATdiagnosisReq;
//# sourceMappingURL=statdiagnosisreq.js.map