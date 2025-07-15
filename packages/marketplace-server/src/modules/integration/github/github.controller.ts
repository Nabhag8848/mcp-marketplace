import { Controller, Get } from '@nestjs/common';
import { GithubGraphqlService } from './github-graphql.service';
import { SearchResultItemConnection } from '@octokit/graphql-schema';

@Controller('github')
export class GithubController {
  constructor(private readonly githubGraphqlService: GithubGraphqlService) {}

  @Get('health')
  async health() {
    const gql = this.githubGraphqlService.getGithubGraphqlClient();
    const search = await gql<SearchResultItemConnection>(`
      query {
        search(query: "mcp server in:name,description", type: REPOSITORY, first: 10) {
          nodes {
            ... on Repository {
              name
              description
              url
              createdAt
              updatedAt
              pushedAt
              stargazerCount
              owner {
                login
              }
            }
          }
        }
      }
    `);

    return {
      github: {
        connected: true,
        search,
      },
    };
  }
}
