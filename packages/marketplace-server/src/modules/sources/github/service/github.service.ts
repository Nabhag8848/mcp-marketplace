import { Injectable } from '@nestjs/common';
import { GithubGraphQLClient } from '../client/github-graphql-client.service';
import { graphql } from '@octokit/graphql';
import {
  SearchRepositoriesResponse,
  SearchRepositoriesInput,
} from '../@types/github';

@Injectable()
export class GithubService {
  constructor(private readonly githubClient: GithubGraphQLClient) {}

  private get gql(): typeof graphql {
    return this.githubClient.getGithubGraphqlClient();
  }

  // example query: "mcp server in:name,description,readme created:>2025-08-22(current_date - 1)"
  // https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories

  public async searchRepositories({
    query,
    endCursor,
    createdAfter,
  }: SearchRepositoriesInput): Promise<SearchRepositoriesResponse> {
    const queryString = createdAfter
      ? `${query} created:>${createdAfter}`
      : query;

    return this.gql<SearchRepositoriesResponse>(
      `query searchRepositories($after: String, $queryString: String!) {
            search(query: $queryString, type: REPOSITORY, first: 100, after: $after ) {
                repositoryCount
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
                            oid
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
      { after: endCursor, queryString }
    );
  }
}
