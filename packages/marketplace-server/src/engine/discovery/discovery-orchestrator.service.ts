import { Injectable, Logger } from '@nestjs/common';
import {
  EndCursor,
  HasNextPage,
  SearchRepositoriesInput,
} from '../../modules/sources/github/@types';
import { GithubService } from '../../modules/sources/github/service/github.service';

@Injectable()
export class RepositoryDiscoveryOrchestrator {
  private readonly logger = new Logger(RepositoryDiscoveryOrchestrator.name);

  constructor(private readonly githubService: GithubService) {}

  async discoverRepositories({
    query,
  }: {
    query: SearchRepositoriesInput['query'];
  }) {
    let endCursor: EndCursor = undefined;
    let hasNextPage: HasNextPage = false;

    try {
      do {
        const repository = await this.githubService.searchRepositories({
          query,
          endCursor,
        });

        const { nodes, pageInfo } = repository.search;

        this.logger.verbose({ nodes });

        hasNextPage = pageInfo.hasNextPage;
        endCursor = pageInfo.endCursor;
      } while (hasNextPage);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
