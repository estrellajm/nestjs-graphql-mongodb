import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { readFileSync } from 'fs';

async function bootstrap() {
  // const keyFile = readFileSync(__dirname + '/../ssl/mydomain.com.key.pem');
  // const certFile = readFileSync(__dirname + '/../ssl/mydomain.com.crt.pem');

  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions: {
  //     key: keyFile,
  //     cert: certFile
  //   }
  // });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
