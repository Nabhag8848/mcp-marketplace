import { Module } from '@nestjs/common';
import { AuthorsResolver } from './resolvers/author.resolver';

@Module({
  providers: [AuthorsResolver],
})
export class ExampleModule {}
