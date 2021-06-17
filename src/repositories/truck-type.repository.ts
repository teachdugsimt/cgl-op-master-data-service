import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { TruckType } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class TruckTypeRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const truckType: Repository<TruckType> = server?.db?.truckType;
    return truckType.find(options);
  }

}
