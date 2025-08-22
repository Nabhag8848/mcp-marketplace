import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { MCPClient } from './mcp-client.entity';
import { MCPServer } from './mcp-server.entity';

@Entity({ name: 'server_config', schema: 'core' })
@Unique(['mcp_client', 'mcp_server'])
export class ServerConfig extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  config: JSON | null;

  @ManyToOne(() => MCPClient, (mcp_client) => mcp_client.server_configs)
  @JoinColumn({ name: 'mcp_client_id', referencedColumnName: 'id' })
  mcp_client: MCPClient;

  @ManyToOne(() => MCPServer, (mcp_server) => mcp_server.server_configs)
  @JoinColumn({ name: 'mcp_server_id', referencedColumnName: 'id' })
  mcp_server: MCPServer;
}
