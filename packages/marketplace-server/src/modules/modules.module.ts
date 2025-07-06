import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { GraphQLModule } from './graphql/graphql.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [QueueModule, GraphQLModule, ExampleModule],
})
export class ModulesModule {}
