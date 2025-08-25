import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { Repository as RepositoryEntity } from '../../database/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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
    const { repositoryData } = job.data;

    this.logger.log(
      `Processing ${repositoryData.length} repositories from queue job ${job.id}`
    );

    try {
      await this.repositoryService.upsert(repositoryData, {
        conflictPaths: ['source_id'],
        skipUpdateIfNoValuesChanged: true,
      });

      this.logger.verbose(
        `upsert ${repositoryData.length} repositories from queue`
      );
    } catch (error) {
      this.logger.error(
        `Failed to process repositories from queue: ${error.message}`
      );
    }
  }
}
