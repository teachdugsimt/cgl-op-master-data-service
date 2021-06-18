import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { VwZoneProvinceTh } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class VwZoneProvinceThRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const vwZoneProvinceRepository: Repository<VwZoneProvinceTh> = server?.db?.vwZoneProvinceTh;
    return vwZoneProvinceRepository.find(options);
  }

}
