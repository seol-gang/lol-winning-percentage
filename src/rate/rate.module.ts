import { HttpModule, Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';

@Module({
  imports: [HttpModule],
  providers: [RateService],
  controllers: [RateController],
})
export class RateModule {}
