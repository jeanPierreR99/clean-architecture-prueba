import {
  ConflictException,
  CreateUserDto,
  NotFoundException,
  UpdateUserDto,
  User,
} from "../../domain";
import { UserInterface } from "../../infrastructure";

export class UserCases {
  constructor(private impInterface: UserInterface) {}

  async get(): Promise<User[]> {
    return await this.impInterface.get();
  }

  async save(data: CreateUserDto): Promise<User> {
    const found = await this.impInterface.findByDni(data.dni);
    if (found) throw new ConflictException("User", data.dni);
    return await this.impInterface.save(data);
  }

  async getById(id: string): Promise<User> {
    const found = await this.impInterface.getById(id);
    if (!found) throw new NotFoundException("user", id);
    return found;
  }

  async getPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }> {
    return await this.impInterface.getPages(page, limit);
  }

  async delete(id: string): Promise<void> {
    const found = await this.impInterface.getById(id);
    if (!found) throw new NotFoundException("user", id);
    await this.impInterface.delete(id);
  }

  async update(data: UpdateUserDto): Promise<User> {
    const found = await this.impInterface.getById(data.id.toString());
    if (!found) throw new NotFoundException("User", data.id.toString());
    return this.impInterface.update(found, data);
  }
}
