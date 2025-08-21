import { ConfigService } from '@nestjs/config';
import { RedisOptions } from 'ioredis';

export const createRedisConfig = (
  configService: ConfigService
): RedisOptions => {
  return {
    host: configService.get<string>('REDIS_HOST', '127.0.0.1'),
    port: configService.get<number>('REDIS_PORT', 6378),
    db: configService.get<number>('REDIS_DB', 0),
    username: configService.get<string>('REDIS_USERNAME', ''),
    password: configService.get<string>('REDIS_PASSWORD', ''),
    lazyConnect: true,
  };
};
