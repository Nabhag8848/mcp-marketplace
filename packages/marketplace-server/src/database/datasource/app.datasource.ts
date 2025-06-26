import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { config } from 'dotenv';

config();

export const createTypeOrmOptions = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_NAME || 'postgres',

  entities: [join(__dirname, '..', 'entities', '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'migrations', '**', '*.{ts,js}')],
  migrationsTableName: '__migrations__',
  migrationsRun: false,

  extra: {
    options: '-c search_path=public,core,discovery_source',
  },

  synchronize: false,
});

export const AppDataSource = new DataSource({
  ...createTypeOrmOptions(),
} as DataSourceOptions);
