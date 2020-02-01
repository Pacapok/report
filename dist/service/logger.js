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
const common_1 = require("@nestjs/common");
const chalk_1 = require("chalk");
const log4js_1 = require("log4js");
const path_1 = require("path");
let ConsoleLogger = class ConsoleLogger {
    constructor() {
        this.logger = log4js_1.getLogger('cheese');
        log4js_1.configure({
            appenders: { cheese: { type: 'file', filename: path_1.join(__dirname, '../../logs/aareports.log'), pattern: '.yyyy-MM-dd-hh', compress: true } },
            categories: { default: { appenders: ['cheese'], level: 'error' } }
        });
    }
    log(...messages) {
        this.logger.level = 'info';
        this.logger.info(messages);
        console.log(chalk_1.default.green(`log: [${this.getCurrentDate()}]`), ...messages);
    }
    error(...messages) {
        this.logger.level = 'error';
        this.logger.error(messages);
        console.error(chalk_1.default.red(`error: [${this.getCurrentDate()}]`), ...messages);
    }
    warn(...messages) {
        this.logger.level = 'warn';
        this.logger.warn(messages);
        console.warn(chalk_1.default.yellow(`warn: [${this.getCurrentDate()}]`), ...messages);
    }
    debug(...messages) {
        this.logger.level = 'debug';
        this.logger.debug(messages);
        console.log(chalk_1.default.green(`debug: [${this.getCurrentDate()}]`), ...messages);
    }
    getCurrentDate() {
        let dt = new Date();
        return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }
};
ConsoleLogger = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConsoleLogger);
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=logger.js.map