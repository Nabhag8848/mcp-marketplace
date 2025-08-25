import { Controller, Get } from '@nestjs/common';
import { RepositoryDiscoveryOrchestrator } from './discovery-orchestrator.service';

@Controller('trigger')
export class ManualController {
  constructor(
    private readonly repositoryOrchestrator: RepositoryDiscoveryOrchestrator
  ) {}

  @Get()
  async manualTrigger() {
    setTimeout(async () => {
      await this.repositoryOrchestrator.discoverRepositories({});
    }, 3000);

    return 'started process';
  }
}
