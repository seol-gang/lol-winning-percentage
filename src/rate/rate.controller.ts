import { Controller, Get, Query } from '@nestjs/common';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get('search')
  searchWinningRate(
    @Query('nickname') nickname: string,
    @Query('date') date: number,
  ) {
    return this.rateService.getWinningRate(nickname);
  }
}
