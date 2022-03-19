import { HttpException } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { Types } from 'mongoose';

export interface ScoreInterface {
  getScore(_id: Types.ObjectId): Promise<Score | HttpException | GraphQLError>;
  createScore(score: Score): Promise<Score | HttpException | GraphQLError>;
  updateScore(score: Score): Promise<Score | HttpException | GraphQLError>;
  deleteScore(
    _id: Types.ObjectId
  ): Promise<Score | HttpException | GraphQLError>;
  getScores(): Promise<Score[] | HttpException | GraphQLError>;
}

export interface Score {
  _id: string;
  headend: Headend;
  tmcHostname: string;
  scoreGuid: string;
  batchID: string;
  status: 'Started' | 'Finished' | 'Pending';
  server: Server;
  startTime: Date;
  endTime: Date;
  seconds: Date;
  testType: 'CR_Smoke' | 'CR_Full';
  testCases?: {
    total: number;
    passed: number;
    failed: number;
    breakdown: any;
  };
  // nice to haves
  tmc?: TMC;
  stb?: STB;
}

interface TMC {
  id: string;
  slot: number;
}
interface Headend {
  id: string;
}
interface STB {
  id: string;
  headend: Headend;
  tmc: TMC;
}

interface Server {
  name: string;
  hostname: string;
  publicIp: string;
  localIp: string;
  sha: string;
  version: string;
  isDevBuild: boolean;
  biosSerialNumber: string;
  authSystem: string;
  status: string;
  statusMessage: string;
  statusDetail: string;
  score_guid: string;
}
