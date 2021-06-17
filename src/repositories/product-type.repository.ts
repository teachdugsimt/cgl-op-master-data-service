import { FastifyInstance } from 'fastify';
import { FastifyInstanceToken, getInstanceByToken } from 'fastify-decorators';
import { ProductType } from '../models';
import { FindManyOptions, Repository } from 'typeorm';

export default class ProductTypeRepository {

  private instance: FastifyInstance = getInstanceByToken(FastifyInstanceToken);

  async find(options?: FindManyOptions | {}): Promise<any> {
    const server: any = this.instance;
    const productType: Repository<ProductType> = server?.db?.productType;
    return productType.find(options);
  }

}
