import { Module } from '@nestjs/common';
import { ManualController } from './manual.controller';
import { RepositoryDiscoveryOrchestrator } from './discovery-orchestrator.service';
import { GithubModule } from '../../modules/sources/github/github.module';
import { QueueModule } from '../../modules/queue/queue.module';

@Module({
  imports: [GithubModule, QueueModule],
  providers: [RepositoryDiscoveryOrchestrator],
  controllers: [ManualController],
})
export class DiscoveryModule {}
