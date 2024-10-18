import { CreateProviderDto, Provider } from "../../domain";

export interface ProviderInterface {
  get(): Promise<Provider[]>;

  save(data: CreateProviderDto): Promise<Provider>;

  findByName(name: string): Promise<Boolean>;
}
