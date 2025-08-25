import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManualController } from './manual.controller';
import { RepositoryDiscoveryOrchestrator } from './discovery-orchestrator.service';
import { GithubModule } from '../../modules/sources/github/github.module';
import { Repository as RepositoryEntity } from '../../database/entities';

@Module({
  imports: [GithubModule, TypeOrmModule.forFeature([RepositoryEntity])],
  providers: [RepositoryDiscoveryOrchestrator],
  controllers: [ManualController],
})
export class DiscoveryModule {}
