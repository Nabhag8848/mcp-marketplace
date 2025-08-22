import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ServerConfig } from './server-config.entity';

@Entity({ name: 'mcp_client', schema: 'core' })
export class MCPClient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 350, nullable: true })
  description: string | null;

  @Column({ type: 'text', nullable: true })
  about: string | null;

  @OneToMany(() => ServerConfig, (config) => config.mcp_client)
  server_configs: ServerConfig[];
}
