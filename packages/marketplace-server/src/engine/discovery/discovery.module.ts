import { Module } from '@nestjs/common';
import { ManualController } from './manual.controller';
import { RepositoryDiscoveryOrchestrator } from './discovery-orchestrator.service';
import { GithubModule } from '../../modules/sources/github/github.module';

@Module({
  imports: [GithubModule],
  providers: [RepositoryDiscoveryOrchestrator],
  controllers: [ManualController],
})
export class DiscoveryModule {}
