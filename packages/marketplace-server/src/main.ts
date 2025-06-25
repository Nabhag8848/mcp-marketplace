import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);

  const port = config.get<number>('SERVER_PORT', 3000);

  await app.listen(port);
}

bootstrap();
