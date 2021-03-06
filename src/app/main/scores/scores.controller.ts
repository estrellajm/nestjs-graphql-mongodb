import { Controller, Get, Param, Post } from '@nestjs/common';
import { Score } from './MongoDB/scores.schema';
import { ScoresService } from './service/scores.service';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Get()
  getScores(): any {
    return this.scoresService.getLiveScores();
  }
  @Get('add/batchID/:batchID')
  getScore(@Param('batchID') batchID: string): any {
    return this.scoresService.addRandomStuff(batchID);
  }
  @Get('delete/batchID/:batchID')
  deleteScore(@Param('batchID') batchID: string): any {
    return this.scoresService.deleteRandomStuff(batchID);
  }
  // @Get('batchID/:batchID')
  // getScore(@Param('batchID') batchID: string): any {
  //   return this.scoresService.getScoreByBatchID(batchID);
  // }

  // @Get('active')
  // getActiveScores(): any {
  //   return this.scoresService.getActiveScores();
  // }
}
