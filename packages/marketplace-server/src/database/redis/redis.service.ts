import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { createRedisConfig } from './redis.config';

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
    const redisConfig = createRedisConfig(this.configService);
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
