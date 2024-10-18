import { CreateUserDto, User } from "../../domain";

export interface UserInterface {
  get(): Promise<User[]>;

  save(data: CreateUserDto): Promise<User>;

  getById(id: string): Promise<User | null>;

  findByDni(dni: string): Promise<Boolean>;

  getPages(
    page: string,
    limit: string
  ): Promise<{ users: User[]; totalPages: number }>;

  update(found: User, data: CreateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}
