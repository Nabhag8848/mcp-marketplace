import { Module } from '@nestjs/common';
import { DiscoveryModule } from './discovery/discovery.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [DiscoveryModule, ScheduleModule.forRoot()],
})
export class EngineModule {}
