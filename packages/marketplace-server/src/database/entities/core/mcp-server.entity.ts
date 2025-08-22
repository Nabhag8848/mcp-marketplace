import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Repository } from '../discovery-source/repository.entity';
import { Tool } from './tool.entity';
import { ServerConfig } from './server-config.entity';

@Entity({ name: 'mcp_server', schema: 'core' })
export class MCPServer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  about: string | null;

  @ManyToOne(() => Repository, (repository) => repository.mcp_servers)
  @JoinColumn({ name: 'repo_source_id', referencedColumnName: 'source_id' })
  repository: Repository;

  @OneToMany(() => Tool, (tool) => tool.mcp_server)
  tools: Tool[];

  @OneToMany(() => ServerConfig, (config) => config.mcp_server)
  server_configs: ServerConfig[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
