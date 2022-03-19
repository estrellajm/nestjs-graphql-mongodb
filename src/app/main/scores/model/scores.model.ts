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

export interface Score {
  _id: string;
  headend: Headend;
  tmcHostname: string;
  scoreGuid: string;
  batchID: string;
  status: 'Started' | 'Stopped' | 'Pending';
  server: Server;
  startTime: Date;
  endTime: Date;
  seconds: Date;
  testType: 'CR_Smoke' | 'CR_Full';
  testCases?: {
    passed: number;
    failed: number;
    total: number;
  };
  // nice to haves
  tmc?: TMC;
  stb?: STB;
}

/*

{
  "_id": {
      "$oid": "62205d2edc0f2861373dc06d"
      
  },
  "headend": "HE12",
  "tmcHostname": "notSure",
  "scoreGuid": "bestGuess",
  "batchID": "CCR_Smoke_Non_DVR:he22:1593",
  "status": "Started",
  "server": "who knows?",
  "startTime": "1645558210594",
  "endTime": "1645558210598",
  "seconds": "4",
  "testType": "CR_Smoke"
}

*/
