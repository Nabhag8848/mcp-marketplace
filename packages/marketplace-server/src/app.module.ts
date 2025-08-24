import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ModulesModule } from './modules/modules.module';
import { EngineModule } from './engine/engine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ModulesModule,
    EngineModule,
  ],
})
export class AppModule {}
