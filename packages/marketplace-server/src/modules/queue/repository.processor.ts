import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { Repository as RepositoryEntity } from '../../database/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositorySearchNode } from '../sources/github/@types';

@Processor('repository-processing')
export class RepositoryProcessor extends WorkerHost {
  private readonly logger = new Logger(RepositoryProcessor.name);

  constructor(
    @InjectRepository(RepositoryEntity)
    private repositoryService: Repository<RepositoryEntity>
  ) {
    super();
  }

  async process(job: Job): Promise<void> {
    const { repositoryData }: { repositoryData: Array<RepositorySearchNode> } =
      job.data;

    const result: Array<Partial<RepositoryEntity>> = repositoryData.map(
      (node) => {
        return {
          source_id: node.id,
          name: node.name,
          description: node?.description,
          owner: node.owner.login,
          readme_md: node?.readme?.md,
          readme_sha: node?.readme?.oid,
          discovery_source: 'github',
          source_created_at: new Date(node.createdAt),
          source_updated_at: new Date(node.updatedAt),
        };
      }
    );

    this.logger.log(
      `Processing ${result.length} repositories from queue job ${job.id}`
    );

    try {
      await this.repositoryService.upsert(result, {
        conflictPaths: ['source_id'],
        skipUpdateIfNoValuesChanged: true,
      });

      this.logger.verbose(`upsert ${result.length} repositories from queue`);
    } catch (error) {
      this.logger.error(
        `Failed to process repositories from queue: ${error.message}`
      );
    }
  }
}
