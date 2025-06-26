import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'core', name: 'mcp' })
export class Mcp extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
