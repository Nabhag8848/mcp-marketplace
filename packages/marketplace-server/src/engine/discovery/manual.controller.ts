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
      await this.repositoryOrchestrator.discoverRepositories({
        query: '(mcp in:name) OR (mcp in:description) OR (mcp in:readme)',
      });
    }, 3000);

    return 'started process';
  }
}
