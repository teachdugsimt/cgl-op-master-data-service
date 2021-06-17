import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { Zone } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class ZoneRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const zoneRepository: Repository<Zone> = server?.db?.zone;
    return zoneRepository.find(options);
  }

}
