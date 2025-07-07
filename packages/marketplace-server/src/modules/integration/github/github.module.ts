import { Module } from '@nestjs/common';
import { GithubGraphqlService } from './github-graphql.service';

@Module({
  providers: [GithubGraphqlService],
})
export class GithubModule {}
