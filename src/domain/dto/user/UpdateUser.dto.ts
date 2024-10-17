import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Length,
  IsString,
} from "class-validator";

export class UpdateUserDto {
  @IsNotEmpty({ message: "El ID es obligatorio" })
  @IsNumber({}, { message: "El ID debe ser un número" })
  id!: number;

  @IsNotEmpty({ message: "El nombre es obligatorio" })
  @IsString({ message: "El nombre debe ser una cadena" })
  name!: string;

  @IsNotEmpty({ message: "El DNI es obligatorio" })
  @Length(8, 8, { message: "El DNI debe tener 8 caracteres" })
  dni!: string;

  @IsNotEmpty({ message: "El número de teléfono es obligatorio" })
  @IsNumber({}, { message: "El número de teléfono debe ser un número" })
  phone_number!: number;

  @IsNotEmpty({ message: "El correo electrónico es obligatorio" })
  @IsEmail({}, { message: "Formato de correo electrónico no válido" })
  email!: string;
}
