import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({message:"Name is required"})
  @Length(2, 50)
  name!: string;

  @IsNotEmpty({message:"Email is required"})
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;

  @IsNotEmpty({ message: "Password is required" })
  @Length(6, 30)
  password!: string;
}
