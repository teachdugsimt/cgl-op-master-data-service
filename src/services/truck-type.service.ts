import { Service, Initializer, Destructor } from 'fastify-decorators';
import TruckTypeRepository from '../repositories/truck-type.repository';

interface FindAllResponse {
  id: number
  groupId: number
  image?: string
  name: string
}

const truckTypeRepository = new TruckTypeRepository();

@Service()
export default class TruckTypeService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(language: 'th' | 'en'): Promise<FindAllResponse[]> {

    const truckTypes = await truckTypeRepository.find();

    return truckTypes.map(truck => ({
      id: truck.id,
      groupId: truck.groupId,
      image: truck.image,
      name: language === 'th' ? truck.nameTh : truck.nameEn,
    }));
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
