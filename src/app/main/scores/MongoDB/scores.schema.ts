import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType({ description: 'score' })
@Schema()
export class Score {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop()
  headend: string;

  @Field(() => String)
  @Prop()
  tmcHostname: string;

  @Field(() => String)
  @Prop({ unique: true })
  scoreGuid: string;

  @Field(() => String)
  @Prop({ unique: true })
  batchID: string;

  @Field(() => Boolean)
  @Prop()
  inProgress: boolean;

  @Field(() => String)
  @Prop()
  status: 'Started' | 'Finished' | 'Pending';

  @Field(() => String)
  @Prop()
  server: string;

  @Field(() => Date)
  @Prop()
  startTime: Date;

  @Field(() => Date)
  @Prop()
  endTime: Date;

  @Field(() => Number)
  @Prop()
  seconds: number;

  @Field(() => String)
  @Prop()
  testType: 'CCR_Smoke' | 'CCR_Full';

  @Field(() => String)
  @Prop()
  notes: string;

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => Date)
  @Prop()
  updatedAt: Date;

  constructor({ tmcHostname, scoreGuid, batchID }) {
    this.batchID = batchID;
    this.createdAt = new Date();
    this.endTime = null;
    this.inProgress = true;
    this.scoreGuid = scoreGuid;
    this.seconds = null;
    this.startTime = new Date();
    this.status = 'Started';
    this.testType = batchID.includes('CCR_Smoke') ? 'CCR_Smoke' : 'CCR_Full';
    this.tmcHostname = tmcHostname;
    this.updatedAt = new Date();
  }
}

export type ScoreDocument = Score & Document;
export const ScoreSchema = SchemaFactory.createForClass(Score);
