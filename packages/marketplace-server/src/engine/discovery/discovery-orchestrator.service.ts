import { Injectable, Logger } from '@nestjs/common';
import {
  EndCursor,
  HasNextPage,
  SearchRepositoriesInput,
} from '../../modules/sources/github/@types';
import { GithubService } from '../../modules/sources/github/service/github.service';
import { Repository as RepositoryEntity } from '../../database/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RepositoryDiscoveryOrchestrator {
  private readonly logger = new Logger(RepositoryDiscoveryOrchestrator.name);
  private readonly defaultQuery = 'mcp server in:name,description,readme';

  constructor(
    private readonly githubService: GithubService,
    @InjectRepository(RepositoryEntity)
    private repositoryService: Repository<RepositoryEntity>
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

        const result: Array<Partial<RepositoryEntity>> = nodes.map((node) => {
          return {
            source_id: node.id,
            name: node.name,
            description: node?.description,
            owner: node.owner.login,
            readme_md: node?.readme?.md,
            readme_sha: node?.readme?.oid,
            discovery_source: 'github',
            source_created_at: new Date(node.createdAt),
            source_updated_at: new Date(node.updatedAt),
          };
        });

        // Use upsert to handle existing repositories without errors
        await this.repositoryService.upsert(result, {
          conflictPaths: ['source_id'],
          skipUpdateIfNoValuesChanged: true,
        });

        this.logger.verbose(
          `processed ${result.length} repositories (inserted/updated based on source_id)`
        );

        hasNextPage = pageInfo.hasNextPage;
        endCursor = pageInfo.endCursor;
      } while (hasNextPage);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
