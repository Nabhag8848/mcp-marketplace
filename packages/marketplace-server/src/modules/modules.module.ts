import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { GraphQLModule } from './graphql/graphql.module';
import { ExampleModule } from './example/example.module';
import { HealthModule } from './health/health.module';
import { IntegrationModule } from './integration/integration.module';

@Module({
  imports: [
    QueueModule,
    GraphQLModule,
    ExampleModule,
    HealthModule,
    IntegrationModule,
  ],
})
export class ModulesModule {}
