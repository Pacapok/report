import { Module, HttpModule } from '@nestjs/common';
import { ConsoleLogger } from '../service/logger';
// import { JasperService } from '../service/jasper.service';

const services = [
  ConsoleLogger,
  // JasperService
];

@Module({
  imports:[
    HttpModule
  ],
  providers: [
    ...services,
  ],
  exports: [
    ...services,
  ],
})
export class CommonModule {}
