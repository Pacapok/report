import { Injectable, LoggerService } from '@nestjs/common';
import chalk from 'chalk';
import { configure, getLogger } from 'log4js'
import { join } from 'path';

@Injectable()
export class ConsoleLogger implements LoggerService {

    private logger = getLogger('cheese');

    constructor() {
        configure({
            appenders: { cheese: { type: 'file', filename: join(__dirname, '../../logs/aareports.log'), pattern: '.yyyy-MM-dd-hh', compress: true } },
            categories: { default: { appenders: ['cheese'], level: 'error' } }
          });
    }

    log(...messages: any[]) {
        // tslint:disable-next-line:no-console
        this.logger.level = 'info';
        this.logger.info(messages);
        console.log(chalk.green(`log: [${this.getCurrentDate()}]`), ...messages);
    }
    error(...messages: any[]) {
        // tslint:disable-next-line:no-console
        this.logger.level = 'error';
        this.logger.error(messages);
        console.error(chalk.red(`error: [${this.getCurrentDate()}]`), ...messages);
    }
    warn(...messages: any[]) {
        // tslint:disable-next-line:no-console
        this.logger.level = 'warn';
        this.logger.warn(messages);
        console.warn(chalk.yellow(`warn: [${this.getCurrentDate()}]`), ...messages);
    }
    debug(...messages: any[]) {
        // tslint:disable-next-line:no-console
        this.logger.level = 'debug';
        this.logger.debug(messages);
        console.log(chalk.green(`debug: [${this.getCurrentDate()}]`), ...messages);
    }

    getCurrentDate(): String {
        let dt = new Date();
        return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
    }
}