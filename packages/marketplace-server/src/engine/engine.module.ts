import { Module } from '@nestjs/common';
import { DiscoveryModule } from './discovery/discovery.module';

@Module({
  imports: [DiscoveryModule],
})
export class EngineModule {}
