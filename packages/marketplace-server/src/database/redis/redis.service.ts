import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redis: Redis;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    await this.createConnection();
  }

  async onModuleDestroy() {
    await this.redis.quit();
  }

  private async createConnection(): Promise<void> {
    const redisConfig: RedisOptions = {
      host: this.configService.get<string>('REDIS_HOST', '127.0.0.1'),
      port: this.configService.get<number>('REDIS_PORT', 6378),
      db: this.configService.get<number>('REDIS_DB', 0),
      lazyConnect: true,
      tls: this.configService.get<boolean>('REDIS_TLS', false)
        ? {
            rejectUnauthorized: !this.configService.get<boolean>(
              'REDIS_TLS_INSECURE',
              true
            ),
          }
        : undefined,
    };

    this.redis = new Redis(redisConfig);
    await this.redis.connect();
  }

  getClient(): Redis {
    return this.redis;
  }

  async ping(): Promise<string> {
    return this.redis.ping();
  }
}
