import { Injectable, Logger } from '@nestjs/common';
import {
  EndCursor,
  HasNextPage,
  SearchRepositoriesInput,
} from '../../modules/sources/github/@types';
import { GithubService } from '../../modules/sources/github/service/github.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class RepositoryDiscoveryOrchestrator {
  private readonly logger = new Logger(RepositoryDiscoveryOrchestrator.name);
  private readonly defaultQuery = `mcp in:name,description,readme created:>=${
    new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }`;

  constructor(
    private readonly githubService: GithubService,
    @InjectQueue('repository-processing')
    private repositoryQueue: Queue
  ) {}

  async discoverRepositories(params?: {
    query?: SearchRepositoriesInput['query'];
  }) {
    const query = params?.query || this.defaultQuery;
    let endCursor: EndCursor = undefined;
    let hasNextPage: HasNextPage = false;

    try {
      do {
        const repositories = await this.githubService.searchRepositories({
          query,
          endCursor,
        });
        const { nodes, pageInfo } = repositories.search;

        await this.repositoryQueue.add(
          'process-repositories',
          {
            repositoryData: nodes,
          },
          {
            removeOnComplete: true,
          }
        );

        this.logger.verbose(
          `queued ${nodes.length} repositories for processing`
        );

        hasNextPage = pageInfo.hasNextPage;
        endCursor = pageInfo.endCursor;
      } while (hasNextPage);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
