import { Repository } from "typeorm";
import { UserInterface, CreateUserDto, User } from "../../domain";

export class UserRepository implements UserInterface {
  constructor(private repository: Repository<User>) {
    this.repository = repository;
  }

  async get(): Promise<User[]> {
    return await this.repository.find();
  }

  async save(data: CreateUserDto): Promise<User> {
    return await this.repository.save(data);
  }

  async getById(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id: parseInt(id) });
  }

  async findByDni(dni: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { dni: dni } });
    return found > 0;
  }

  async getPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }> {
    const pageInt: number = parseInt(page);
    const limitInt: number = parseInt(limit);

    const [users, total] = await this.repository.findAndCount({
      skip: (pageInt - 1) * limitInt,
      take: limitInt,
    });

    const totalPages = Math.ceil(total / limitInt);
    return { users, totalPages };
  }
  async update(found: User, data: CreateUserDto): Promise<User> {
    this.repository.merge(found, data);
    return await this.repository.save(data);
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(parseInt(id));
  }

  async borrar() {
    return "borrar";
  }
}
