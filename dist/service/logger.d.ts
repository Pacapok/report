import { LoggerService } from '@nestjs/common';
export declare class ConsoleLogger implements LoggerService {
    private logger;
    constructor();
    log(...messages: any[]): void;
    error(...messages: any[]): void;
    warn(...messages: any[]): void;
    debug(...messages: any[]): void;
    getCurrentDate(): String;
}
