import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const validatePassword = async (
  inputPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

export default mongoose.model("User", userSchema);
