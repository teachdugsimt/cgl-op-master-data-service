import { Service, Initializer, Destructor } from 'fastify-decorators';
import TruckTypeGroupRepository from '../repositories/truck-type-group.repository';

interface FindAllResponse {
  id: number
  name: string
}

const truckTypeGroupRepository = new TruckTypeGroupRepository();

@Service()
export default class TruckTypeService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(language: 'th' | 'en'): Promise<FindAllResponse[]> {

    const groups = await truckTypeGroupRepository.find();

    return groups.map(group => ({
      id: group.id,
      name: language === 'th' ? group.nameTh : group.nameEn,
    }));
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
