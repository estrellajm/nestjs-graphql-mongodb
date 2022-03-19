import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoresModule } from './app/main/scores/scores.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true
      }
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false
    }),
    ScoresModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
