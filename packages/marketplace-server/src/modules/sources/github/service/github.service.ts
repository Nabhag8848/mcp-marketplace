import { Injectable } from '@nestjs/common';
import { GithubGraphQLClient } from '../client/github-graphql-client.service';
import { graphql } from '@octokit/graphql';
import {
  QuerySearchArgs,
  SearchResultItemConnection,
} from '@octokit/graphql-schema';

@Injectable()
export class GithubService {
  constructor(private readonly githubClient: GithubGraphQLClient) {}

  private get gql(): typeof graphql {
    return this.githubClient.getGithubGraphqlClient();
  }

  public async searchRepositories({ after }: Pick<QuerySearchArgs, 'after'>) {
    return this.gql<SearchResultItemConnection>(
      `
        query searchRepositories($after: String) {
            search(query: "mcp server in:name,description", type: REPOSITORY, first: 100, after: $after ) {
                nodes {
                    ... on Repository {
                      id
                      name
                      owner {
                        id
                        login
                      }
                      description
                      readme: object(expression: "HEAD:README.md") {
                        ... on Blob {
                            md: text
                        }
                      }
                      createdAt
                      updatedAt
                      pushedAt
                    }
                }
                pageInfo {
                  hasNextPage
                  startCursor
                  endCursor
                }
            }
          rateLimit {
            resetAt
            remaining
            limit
          }
        }
    `,
      { after }
    );
  }
}
