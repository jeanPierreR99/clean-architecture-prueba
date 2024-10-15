import { CreateUserDto } from "../dto/user/CreateUser.dto";
import { User } from "../entities/User";

export interface IUserRepository {
  get(): Promise<User[]>;
  save(data: CreateUserDto): Promise<User>;
  getById(id: string): Promise<User>;
  findByDni(dni: string): Promise<Boolean>;
  getUsersPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }>;
}
