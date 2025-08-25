import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createRedisConfig } from '../../database/redis/redis.config';
import { RepositoryProcessor } from './repository.processor';
import { Repository as RepositoryEntity } from '../../database/entities';

@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: createRedisConfig(configService),
      }),
    }),
    BullModule.registerQueue({
      name: 'repository-processing',
    }),
    TypeOrmModule.forFeature([RepositoryEntity]),
  ],
  providers: [RepositoryProcessor],
  exports: [BullModule],
})
export class QueueModule {}
