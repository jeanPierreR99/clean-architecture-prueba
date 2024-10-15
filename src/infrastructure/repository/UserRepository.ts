import { User } from "../../domain/entities/User";
import { AppDataSource } from "../dataBase/db";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../domain/dto/user/CreateUser.dto";
import { NotFoundException } from "../../domain/exceptions/Entities";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async get(): Promise<User[]> {
    return this.repository.find();
  }
  async save(data: CreateUserDto): Promise<User> {
    return await this.repository.save(data);
  }
  async getById(id: string): Promise<User> {
    const found = await this.repository.findOneBy({ id: parseInt(id) });
    if (!found) throw new NotFoundException("User", id);

    return found;
  }

  async findByDni(dni: string): Promise<Boolean> {
    const found = await this.repository.count({ where: { dni: dni } });

    return found > 0;
  }

  async getUsersPages(
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
}
