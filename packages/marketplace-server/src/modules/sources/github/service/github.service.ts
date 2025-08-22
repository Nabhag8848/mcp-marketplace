import { Injectable } from '@nestjs/common';
import { GithubGraphQLClient } from '../client/github-graphql-client.service';
import { graphql } from '@octokit/graphql';
import { SearchResultItemConnection } from '@octokit/graphql-schema';

@Injectable()
export class GithubService {
  private gql: typeof graphql;

  constructor(private readonly githubClient: GithubGraphQLClient) {
    this.gql = this.githubClient.getGithubGraphqlClient();
  }

  public async searchRepositories() {
    return this.gql<SearchResultItemConnection>(`
        query {
            search(query: "mcp server in:name,description", type: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        owner
                        description
                        createdAt
                        updatedAt
                        pushedAt
                    }
                }
                rateLimit {
                    resetAt
                    used
                    remaining
                    cost
                    limit
                }
            }
        }
    `);
  }
}
