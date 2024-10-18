import { ConflictException, CreateProviderDto, Provider } from "../../domain";
import { ProviderInterface } from "../../infrastructure";

export class ProviderCases {
  constructor(private impInterface: ProviderInterface) {}

  async get(): Promise<Provider[]> {
    return await this.impInterface.get();
  }

  async save(data: CreateProviderDto): Promise<Provider> {
    const found = await this.impInterface.findByName(data.name);
    if (found) throw new ConflictException("Provider", data.name);
    return await this.impInterface.save(data);
  }
}
