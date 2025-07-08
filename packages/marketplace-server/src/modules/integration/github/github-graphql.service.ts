import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { graphql as gql } from '@octokit/graphql';
import { isNonEmpty, isNull } from '@mcp-marketplace/shared';

@Injectable()
export class GithubGraphqlService implements OnModuleInit, OnModuleDestroy {
  private githubClient: typeof gql | null = null;

  constructor(private readonly configService: ConfigService) {}

  public onModuleInit(): void {
    // empty string by default for gracefully starting application even if token is not set
    const token = this.configService.get<string>('GITHUB_PERSONAL_TOKEN', '');

    if (isNonEmpty(token)) {
      this.githubClient = gql.defaults({
        headers: {
          authorization: `token ${token}`,
        },
      });
    }
  }

  public getGithubGraphqlClient(): typeof gql {
    if (isNull(this.githubClient)) {
      throw new Error('github graphql client not initialized');
    }

    return this.githubClient;
  }

  public onModuleDestroy(): void {
    this.githubClient = null;
  }
}
