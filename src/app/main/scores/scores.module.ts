import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './MongoDB/scores.schema';
import { ScoresResolver } from './GraphQL/scores.resolver';
import { ScoresService } from './service/scores.service';
import { ScoresController } from './scores.controller';
import { CoreModule } from 'src/app/core/core.module';
import { ScoresGateway } from './scores.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Score.name, schema: ScoreSchema }]),
    CoreModule
  ],
  controllers: [ScoresController],
  providers: [ScoresResolver, ScoresService, ScoresGateway]
})
export class ScoresModule {}
