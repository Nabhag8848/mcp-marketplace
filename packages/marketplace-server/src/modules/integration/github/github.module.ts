import { Module } from '@nestjs/common';
import { GithubGraphqlService } from './github-graphql.service';
import { GithubController } from './github.controller';

@Module({
  controllers: [GithubController],
  providers: [GithubGraphqlService],
})
export class GithubModule {}
