import { Module } from '@nestjs/common';
import { GithubGraphQLClient } from './client/github-graphql-client.service';
import { GithubService } from './service/github.service';

@Module({
  controllers: [],
  providers: [GithubGraphQLClient, GithubService],
  exports: [GithubService],
})
export class GithubModule {}
