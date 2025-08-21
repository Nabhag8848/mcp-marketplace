import { ConfigService } from '@nestjs/config';
import { RedisOptions } from 'ioredis';

export const createRedisConfig = (
  configService: ConfigService
): RedisOptions => {
  return {
    host: configService.get<string>('REDISHOST', '127.0.0.1'),
    port: configService.get<number>('REDISPORT', 6378),
    db: configService.get<number>('REDIS_DB', 0),
    username: configService.get<string>('REDISUSER', 'postgres'),
    password: configService.get<string>('REDIS_PASSWORD', 'postgres'),
    lazyConnect: true,
  };
};
