import { Module } from '@nestjs/common';
import { GithubGraphQLClient } from './client/github-graphql-client.service';

@Module({
  controllers: [],
  providers: [GithubGraphQLClient],
})
export class GithubModule {}
