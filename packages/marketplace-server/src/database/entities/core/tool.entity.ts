import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MCPServer } from './mcp-server.entity';

@Entity({ name: 'tool', schema: 'core' })
export class Tool extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  input_schema: JSON | null;

  @ManyToOne(() => MCPServer, (mcp_server) => mcp_server.tools)
  @JoinColumn({ name: 'mcp_server_id', referencedColumnName: 'id' })
  mcp_server: MCPServer;

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
