import { Service, Initializer, Destructor } from 'fastify-decorators';
import ProductTypeRepository from '../repositories/product-type.repository';

interface FindAllResponse {
  id: number
  image?: string
  name: string
}

const productTypeRepository = new ProductTypeRepository();

@Service()
export default class ProductService {
  @Initializer()
  async init(): Promise<void> {
  }

  async findAll(language: 'TH' | 'EN'): Promise<FindAllResponse[]> {

    const productTypes = await productTypeRepository.find();

    return productTypes.map(product => ({
      id: product.id,
      image: product.image,
      name: language === 'TH' ? product.nameTh : product.nameEn,
    }));
  }

  @Destructor()
  async destroy(): Promise<void> {
  }
}
