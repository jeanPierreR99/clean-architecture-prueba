import { IsNotEmpty } from "class-validator";

export class CreateProviderDto {
  @IsNotEmpty({ message: "El nombre es obligatorio" })
  name!: string;
}
