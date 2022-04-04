import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { ScoresService } from './service/scores.service';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class ScoresGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private scoresService: ScoresService) {}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('NestJSGateway');

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, payload: string): Promise<any> {
    const scores = await this.scoresService.getScores();
    this.server.emit('msgToClient', scores);
    // this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    const scores = await this.scoresService.getScores();
    this.server.emit('msgToClient', scores);
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
