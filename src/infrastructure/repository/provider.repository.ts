import { Repository } from "typeorm";
import { ProviderInterface } from "../interfaces/provider.interface";
import { CreateProviderDto, Provider } from "../../domain";

export class ProviderRepository implements ProviderInterface {
  constructor(private repository: Repository<Provider>) {
    this.repository = repository;
  }

  async get(): Promise<Provider[]> {
    return await this.repository.find();
  }

  async save(data: CreateProviderDto): Promise<Provider> {
    return await this.repository.save(data);
  }

  async findByName(name: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { name: name } });
    return found > 0;
  }
}
