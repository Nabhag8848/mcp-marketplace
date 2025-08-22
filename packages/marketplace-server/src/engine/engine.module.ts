import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [DiscoveryModule],
})
export class EngineModule {}
