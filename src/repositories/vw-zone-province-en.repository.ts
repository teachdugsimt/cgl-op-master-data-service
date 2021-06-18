import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { VwZoneProvinceEn } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class VwZoneProvinceEnRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const vwZoneProvinceRepository: Repository<VwZoneProvinceEn> = server?.db?.vwZoneProvinceEn;
    return vwZoneProvinceRepository.find(options);
  }

}
