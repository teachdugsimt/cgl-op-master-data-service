import { Service, Initializer, Destructor } from 'fastify-decorators';
import ProvinceRepository from '../repositories/province.repository';

interface FindAllResponse {
  groupId: number
  id: number
  image?: string
  name: string
}

const provinceRepository = new ProvinceRepository();

@Service()
export default class ProvinceService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(descending: boolean, language: 'en' | 'th'): Promise<FindAllResponse[]> {
    const options = {
      order: {
        ...(language === 'th' ? { nameInThai: descending ? 'DESC' : 'ASC' } : { nameInEnglish: descending ? 'DESC' : 'ASC' })
      }
    }

    const provinces = await provinceRepository.find(options);

    return provinces.map(prov => ({
      id: prov.id,
      groupId: prov.zoneId,
      image: null,
      name: language === 'th' ? prov.nameInThai : prov.nameInEnglish
    }));
  }

  async findWithZonId(zoneId: number, descending: boolean, language: 'en' | 'th'): Promise<FindAllResponse[]> {
    const options = {
      where: {
        zoneId: zoneId
      },
      order: {
        ...(language === 'th' ? { nameInThai: descending ? 'DESC' : 'ASC' } : { nameInEnglish: descending ? 'DESC' : 'ASC' })
      }
    }
    console.log('options :>> ', options);

    const provinces = await provinceRepository.find(options);

    return provinces.map(prov => ({
      id: prov.id,
      groupId: zoneId,
      image: null,
      name: language === 'th' ? prov.nameInThai : prov.nameInEnglish
    }));
  }



  @Destructor()
  async destroy(): Promise<void> {
  }
}
