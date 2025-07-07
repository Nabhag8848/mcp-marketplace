import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { graphql as gql } from '@octokit/graphql';

@Injectable()
export class GithubGraphqlService implements OnModuleInit, OnModuleDestroy {
  private githubClient: typeof gql | null = null;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    const token = this.configService.get<string>('GITHUB_PERSONAL_TOKEN', '');

    this.githubClient = gql.defaults({
      headers: {
        authorization: `token ${token}`,
      },
    });
  }

  getGithubGraphqlClient(): typeof gql {
    if (!this.githubClient) {
      throw new Error('github graphql client not initialized');
    }

    return this.githubClient;
  }

  async onModuleDestroy(): Promise<void> {
    this.githubClient = null;
  }
}
