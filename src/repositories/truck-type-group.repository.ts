import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { TruckTypeGroup } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class TruckTypeGroupRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const truckTypeGroup: Repository<TruckTypeGroup> = server?.db?.truckTypeGroup;
    return truckTypeGroup.find(options);
  }

}
