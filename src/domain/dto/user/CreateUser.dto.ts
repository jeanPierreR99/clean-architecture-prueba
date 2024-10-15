export class CreateUserDto {
  private constructor(
    public name: string,
    public dni: string,
    public phone_number: number,
    public email: string
  ) {}

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name, dni, phone_number, email } = object;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return ["missing name"];
    if (!dni) return ["missing dni"];
    if (dni.length !== 8) return ["dni must be 8 characters"];
    if (!phone_number) return ["missing phone_number"];
    if (!email) return ["missing email"];
    if (!emailRegex.test(email)) return ["invalid email format"];

    return [undefined, new CreateUserDto(name, dni, phone_number, email)];
  }
}
