import { Service, Initializer, Destructor } from 'fastify-decorators';
import ZoneRepository from '../repositories/zone.repository';

interface FindAllResponse {
  id: number
  image?: string
  name: string
}

const zoneRepository = new ZoneRepository();

@Service()
export default class ZoneService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(language: 'TH' | 'EN'): Promise<FindAllResponse[]> {

    const zones = await zoneRepository.find();

    return zones.map(zone => ({
      id: zone.id,
      image: null,
      name: language === 'TH' ? zone.nameTh : zone.nameEn,
    }));
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
