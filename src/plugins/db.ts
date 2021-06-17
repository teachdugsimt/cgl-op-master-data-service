import 'reflect-metadata';
import fp from 'fastify-plugin';
import { createConnection } from 'typeorm';
import { AddrDistrict, AddrProvince, AddrSubdistrict, Item, ProductType, TruckType, TruckTypeGroup, Zone } from '../models';

export default fp(async server => {
  try {
    const connection = await createConnection();
    console.log('database connected');

    server.decorate('db', {
      products: connection.getRepository(Item),
      district: connection.getRepository(AddrDistrict),
      province: connection.getRepository(AddrProvince),
      subDistrict: connection.getRepository(AddrSubdistrict),
      productType: connection.getRepository(ProductType),
      truckTypeGroup: connection.getRepository(TruckTypeGroup),
      truckType: connection.getRepository(TruckType),
      zone: connection.getRepository(Zone),
    });
  } catch (error) {
    console.log(error);
    console.log('make sure you have set .env variables - see .env.sample');
  }
});
