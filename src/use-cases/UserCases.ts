import { CreateUserDto } from "../domain/dto/user/CreateUser.dto";
import { User } from "../domain/entities/User";
import { ConflictException } from "../domain/exceptions/Entities";
import { UserRepository } from "../infrastructure/repository/UserRepository";

export class UserCases {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async get(): Promise<User[]> {
    return await this.userRepository.get();
  }
  async save(data: CreateUserDto): Promise<User> {
    const found = await this.userRepository.findByDni(data.dni);
    if (found) throw new ConflictException("User", data.dni);
    return await this.userRepository.save(data);
  }

  async getById(id: string): Promise<User> {
    return await this.userRepository.getById(id);
  }

  async getUsersPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }> {
    const { users, totalPages } = await this.userRepository.getUsersPages(
      page,
      limit
    );
    return { users, totalPages };
  }
}
