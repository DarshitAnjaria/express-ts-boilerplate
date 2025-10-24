import User from "../models/user.model";
import { CreateUserDto } from "../dtos/user/create.user.dto";
import bcrypt from "bcrypt";

export class UserService {
  private readonly saltRounds = 10; // bcrypt salt rounds

  createUser = async (data: CreateUserDto) => {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(data.password, this.saltRounds);

    // Create user object with hashed password
    const user = new User({
      ...data,
      password: hashedPassword,
    });

    return await user.save();
  };

  getAllUsers = async () => {
    return await User.find().select("-password"); // exclude password when returning users
  };
}
