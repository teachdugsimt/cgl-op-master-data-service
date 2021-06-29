import { Service, Initializer, Destructor } from 'fastify-decorators';
import ZoneRepository from '../repositories/zone.repository';
import VwZoneProvinceEnRepository from '../repositories/vw-zone-province-en.repository';
import VwZoneProvinceThRepository from '../repositories/vw-zone-province-th.repository';

interface FindAllResponse {
  id: number
  image?: string
  name: string
}

const zoneRepository = new ZoneRepository();
const vwZoneProvinceEn = new VwZoneProvinceEnRepository();
const vwZoneProvinceTh = new VwZoneProvinceThRepository();

@Service()
export default class ZoneService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(language: 'th' | 'en'): Promise<FindAllResponse[]> {
    const zones = await zoneRepository.find();

    return zones.map(zone => ({
      id: zone.id,
      image: null,
      name: language === 'th' ? zone.nameTh : zone.nameEn,
    }));
  }

  async findAllWithProvince(language: 'th' | 'en'): Promise<any> {
    const options = {
      order: { id: 'ASC' }
    }

    return language === 'th' ? vwZoneProvinceTh.find(options) : vwZoneProvinceEn.find(options);
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
