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
class Rt433Req extends basereq_1.BaseReq {
}
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s age' }),
    __metadata("design:type", String)
], Rt433Req.prototype, "param1", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'The cat\'s breed' }),
    __metadata("design:type", String)
], Rt433Req.prototype, "param2", void 0);
__decorate([
    swagger_1.ApiModelProperty({ description: 'DocNo', required: true, example: "18-DO18000276" }),
    __metadata("design:type", String)
], Rt433Req.prototype, "DocNo", void 0);
exports.Rt433Req = Rt433Req;
//# sourceMappingURL=rt433req.js.map