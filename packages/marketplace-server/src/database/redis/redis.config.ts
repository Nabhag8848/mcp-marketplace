import { ConfigService } from '@nestjs/config';
import { RedisOptions } from 'ioredis';

export const createRedisConfig = (
  configService: ConfigService
): RedisOptions => {
  const isDevelopment = configService.get<string>('NODE_ENV') === 'development';

  const config: RedisOptions = {
    host: configService.get<string>('REDISHOST', '127.0.0.1'),
    port: configService.get<number>('REDISPORT', 6379),
    db: configService.get<number>('REDIS_DB', 0),
    lazyConnect: true,
    family: 0,
  };

  // Only add authentication in production/non-development environments
  if (!isDevelopment) {
    config.username = configService.get<string>('REDISUSER', '');
    config.password = configService.get<string>('REDIS_PASSWORD', '');
  }

  return config;
};
