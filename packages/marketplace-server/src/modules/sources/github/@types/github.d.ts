import {
  Repository as GitHubRepository,
  User,
  PageInfo,
  Blob,
  RateLimit,
  QuerySearchArgs,
} from '@octokit/graphql-schema';

export interface RepositorySearchNode {
  id: GitHubRepository['id'];
  name: GitHubRepository['name'];
  description: GitHubRepository['description'];
  createdAt: GitHubRepository['createdAt'];
  updatedAt: GitHubRepository['updatedAt'];
  pushedAt: GitHubRepository['pushedAt'];
  owner: {
    id: User['id'];
    login: User['login'];
  };
  readme?: {
    md?: Blob['text'];
  } | null;
}

export interface SearchRepositoriesResponse {
  search: {
    nodes: RepositorySearchNode[];
    pageInfo: {
      hasNextPage: PageInfo['hasNextPage'];
      startCursor: PageInfo['startCursor'];
      endCursor: PageInfo['endCursor'];
    };
  };
  rateLimit: {
    resetAt: RateLimit['resetAt'];
    remaining: RateLimit['remaining'];
    limit: RateLimit['limit'];
  };
}

// Input parameters for search
export interface SearchRepositoriesInput {
  query: QuerySearchArgs['query'];
  endCursor?: PageInfo['endCursor'];
  createdAfter?: string;
}

export type EndCursor = PageInfo['endCursor'];
export type HasNextPage = PageInfo['hasNextPage'];

export type ApiRateLimit = Pick<RateLimit, 'resetAt' | 'remaining' | 'limit'>;
