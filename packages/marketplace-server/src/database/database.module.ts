import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTypeOrmOptions } from './datasource/app.datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => createTypeOrmOptions(),
    }),
  ],
})
export class DatabaseModule {}
