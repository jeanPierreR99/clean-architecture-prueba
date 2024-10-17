import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";

export async function validationHandler(
  req: Request,
  res: Response,
  dto: any
): Promise<any> {
  const data = plainToInstance(dto, req.body);
  const errors = await validate(data);

  if (errors.length > 0) {
    res.status(400).json({
      message: "Validation errors",
      errors: errors.map((err) => ({
        property: err.property,
        constraints: err.constraints,
      })),
    });
    return null;
  }

  return data;
}
