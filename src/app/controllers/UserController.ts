import { CreateUserDto } from "../../domain/dto/user/CreateUser.dto";
import { ControllerException } from "../../domain/exceptions/ControllerException";
import { UserCases } from "../../use-cases/UserCases";
import { Request, Response } from "express";
import {
  ConflictException,
  NotFoundException,
} from "../../domain/exceptions/Entities";
export class UserController {
  private userUseCases: UserCases;

  constructor() {
    this.userUseCases = new UserCases();
  }

  async save(req: Request, res: Response): Promise<void> {
    try {
      const [error, success] = CreateUserDto.create(req.body);
      if (error) {
        res.status(400).json({ error });
        return;
      }
      const data = success as CreateUserDto;
      await this.userUseCases.save(data);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ConflictException) {
        res.status(409).json({ message: error.message });
      } else {
        res.status(500).json({ msg: error });
      }
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.userUseCases.get();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.query.id as string;
      if (!id) throw new ControllerException("id");
      const data = await this.userUseCases.getById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerException) {
        res.status(404).json({ message: error.message });
      } else if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "OCURRIO UN ERROR INESPERADO" });
      }
    }
  }

  async getUsersPages(req: Request, res: Response): Promise<void> {
    try {
      const page: string = req.query.page as string;
      const limit: string = req.query.limit as string;

      if (!page || !limit) throw new ControllerException("page y limit");

      const data = await this.userUseCases.getUsersPages(page, limit);
      res.json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerException) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "OCURRIO UN ERROR INESPERADO" });
      }
    }
  }
}
