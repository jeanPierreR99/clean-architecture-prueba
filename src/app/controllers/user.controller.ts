import { CreateUserDto } from "../../domain/dto/user/CreateUser.dto";
import { ControllerException } from "../../domain/exceptions/ControllerException";
import { UserCases } from "../../use-cases/user.cases";
import { Request, Response } from "express";
import {
  ConflictException,
  NotFoundException,
} from "../../domain/exceptions/Entities";
import { UpdateUserDto } from "../../domain/dto/user/UpdateUser.dto";
import { validationHandler } from "../../utils/ValidationHandler";

export class UserController {
  constructor(private userCases: UserCases) {}

  async save(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: CreateUserDto = await validationHandler(
        req,
        res,
        CreateUserDto
      );
      if (!dataDto) return;
      const data = await this.userCases.save(dataDto);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ConflictException) {
        res.status(409).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const page: string = req.query.page as string;
      const limit: string = req.query.limit as string;
      if (parseInt(page) && parseInt(limit)) {
        const data = await this.userCases.getPages(page, limit);
        res.status(200).json(data);
        return;
      }
      const data = await this.userCases.get();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id as string;
      if (!parseInt(id)) throw new ControllerException("id not number");
      const data = await this.userCases.getById(id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerException) {
        res.status(400).json({ message: error.message });
        return;
      }
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      if (!parseInt(id)) throw new ControllerException("id not number");
      await this.userCases.delete(id);
      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.log(error);
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      if (error instanceof ControllerException) {
        res.status(404).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const dataDto: UpdateUserDto = await validationHandler(
        req,
        res,
        UpdateUserDto
      );
      if (!dataDto) return;
      const data = await this.userCases.update(dataDto);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof NotFoundException) {
        res.status(404).json({ message: error.message });
        return;
      }
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
}
