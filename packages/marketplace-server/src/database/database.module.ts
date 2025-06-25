import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST', 'localhost'),
        port: config.get<number>('POSTGRES_PORT', 5432),
        username: config.get<string>('POSTGRES_USER', 'postgres'),
        password: config.get<string>('POSTGRES_PASSWORD', 'postgres'),
        database: config.get<string>('POSTGRES_NAME', 'postgres'),
        entities: [join(__dirname, 'entities', '**', '*.entity.{ts,js}')],

        // Use synchronize instead of migrations for development
        synchronize: config.get<string>('NODE_ENV') === 'development',

        // Keep migrations for production
        migrations: [join(__dirname, 'migrations', '**', '*.{ts,js}')],

        extra: {
          options: '-c search_path=core,discovery_source',
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
