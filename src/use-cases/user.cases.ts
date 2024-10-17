import { CreateUserDto } from "../domain/dto/user/CreateUser.dto";
import { UpdateUserDto } from "../domain/dto/user/UpdateUser.dto";
import { User } from "../domain/entities/user.entity";
import {
  ConflictException,
  NotFoundException,
} from "../domain/exceptions/Entities";
import { UserInterface } from "../domain/interfaces/user.interface";

export class UserCases {
  constructor(private userRepository: UserInterface) {}

  async get(): Promise<User[]> {
    return await this.userRepository.get();
  }

  async save(data: CreateUserDto): Promise<User> {
    const found = await this.userRepository.findByDni(data.dni);
    if (found) throw new ConflictException("User", data.dni);
    return await this.userRepository.save(data);
  }

  async getById(id: string): Promise<User> {
    const found = await this.userRepository.getById(id);
    if (!found) throw new NotFoundException("user", id);
    return found;
  }

  async getPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }> {
    return await this.userRepository.getPages(page, limit);
  }

  async delete(id: string): Promise<void> {
    const found = await this.userRepository.getById(id);
    if (!found) throw new NotFoundException("user", id);
    await this.userRepository.delete(id);
  }

  async update(data: UpdateUserDto): Promise<User> {
    const found = await this.userRepository.getById(data.id.toString());
    if (!found) throw new NotFoundException("User", data.id.toString());
    return this.userRepository.update(found, data);
  }
}
