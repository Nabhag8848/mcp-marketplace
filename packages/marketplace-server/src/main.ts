import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get(ConfigService);

  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);

  const port = config.get<number>('SERVER_PORT', 3000);

  await app.listen(port);
}

bootstrap();
