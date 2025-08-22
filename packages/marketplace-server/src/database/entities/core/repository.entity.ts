import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { MCPServer } from './mcp-server.entity';
import { RepositoryType } from '../../enum';

@Entity({ name: 'repository', schema: 'discovery_source' })
export class Repository extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  source_id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  owner: string;

  @Column({ type: 'text', nullable: true })
  readme_md: string | null;

  @Column({ type: 'boolean', default: false })
  is_target: boolean;

  @Column({ type: 'varchar', length: 40, nullable: true })
  readme_sha: string | null;

  @Column({ type: 'varchar', length: 30 })
  discovery_source: string;

  @Column({ type: 'enum', enum: RepositoryType, default: null, nullable: true })
  type: RepositoryType | null;

  @OneToMany(() => MCPServer, (mcp_server) => mcp_server.repository)
  mcp_servers: MCPServer[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  discovered_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  last_updated_at: Date;

  @Column({ type: 'timestamptz' })
  source_created_at: Date;

  @Column({ type: 'timestamptz' })
  source_updated_at: Date;
}
