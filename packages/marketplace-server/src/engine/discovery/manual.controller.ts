import { Controller, Get } from '@nestjs/common';
import { RepositoryDiscoveryOrchestrator } from './discovery-orchestrator.service';

@Controller('trigger')
export class ManualController {
  constructor(
    private readonly repositoryOrchestrator: RepositoryDiscoveryOrchestrator
  ) {}

  @Get()
  async manualTrigger() {
    await this.repositoryOrchestrator.discoverRepositories({
      query: 'mcp server in:name,description,readme',
    });

    return 'started process';
  }
}
