import { Injectable } from '@nestjs/common';
import {
  EndCursor,
  HasNextPage,
  SearchRepositoriesInput,
} from '../../modules/sources/github/@types';
import { GithubService } from '../../modules/sources/github/service/github.service';

@Injectable()
export class RepositoryDiscoveryOrchestrator {
  constructor(private readonly githubService: GithubService) {}

  async discoverRepositories({
    query,
  }: {
    query: SearchRepositoriesInput['query'];
  }) {
    let endCursor: EndCursor = undefined;
    let hasNextPage: HasNextPage = false;

    do {
      const repository = await this.githubService.searchRepositories({
        query,
        endCursor,
      });

      const { nodes, pageInfo } = repository.search;

      console.dir({ nodes });

      hasNextPage = pageInfo.hasNextPage;
      endCursor = pageInfo.endCursor;
    } while (hasNextPage);
  }
}
