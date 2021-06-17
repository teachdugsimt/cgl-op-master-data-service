import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, GET, getInstanceByToken } from 'fastify-decorators';
import ProvinceService from '../services/province.service';
import ZoneService from '../services/zone.service';
import ProductTypeService from '../services/product-type.service';
import TruckTypeService from '../services/truck-type.service';
import TruckTypeGroupService from '../services/truck-type-group.service';
import { getProvinceSchema, getZoneSchema, getProductType, getTruckType, getTruckTypeGroup } from './master.schema';


@Controller({ route: '/api/v1/master-data' })
export default class MasterDataController {

  private provinceService = getInstanceByToken<ProvinceService>(ProvinceService);
  private zoneService = getInstanceByToken<ZoneService>(ZoneService);
  private productTypeService = getInstanceByToken<ProductTypeService>(ProductTypeService);
  private truckTypeGroupService = getInstanceByToken<TruckTypeGroupService>(TruckTypeGroupService);
  private truckTypeService = getInstanceByToken<TruckTypeService>(TruckTypeService);

  @GET({
    url: '/province',
    options: {
      schema: getProvinceSchema
    }
  })
  async getProvince(req: FastifyRequest<{
    Headers: { 'accept-language': 'TH' | 'EN' }
    Querystring: { regionId?: number, descending?: boolean }
  }>, reply: FastifyReply): Promise<object> {
    let result: any
    if (req.query.regionId) {
      result = await this.provinceService.findWithZonId(req.query.regionId, !!req.query.descending, req.headers['accept-language']);
    } else {
      result = await this.provinceService.findAll(!!req.query.descending, req.headers['accept-language']);
    }
    return result
  }

  @GET({
    url: '/zone',
    options: {
      schema: getZoneSchema
    }
  })
  async getZone(req: FastifyRequest<{ Headers: { 'accept-language': 'TH' | 'EN' } }>, reply: FastifyReply): Promise<object> {
    return this.zoneService.findAll(req.headers['accept-language']);
  }

  @GET({
    url: '/product-type',
    options: {
      schema: getProductType
    }
  })
  async getProductType(req: FastifyRequest<{ Headers: { 'accept-language': 'TH' | 'EN' } }>, reply: FastifyReply): Promise<object> {
    return this.productTypeService.findAll(req.headers['accept-language']);
  }

  @GET({
    url: '/truck-type',
    options: {
      schema: getTruckType
    }
  })
  async getTruckType(req: FastifyRequest<{ Headers: { 'accept-language': 'TH' | 'EN' } }>, reply: FastifyReply): Promise<object> {
    return this.truckTypeService.findAll(req.headers['accept-language']);
  }

  @GET({
    url: '/truck-type/group',
    options: {
      schema: getTruckTypeGroup
    }
  })
  async getTruckTypeGroup(req: FastifyRequest<{ Headers: { 'accept-language': 'TH' | 'EN' } }>, reply: FastifyReply): Promise<object> {
    return this.truckTypeGroupService.findAll(req.headers['accept-language']);
  }

}
