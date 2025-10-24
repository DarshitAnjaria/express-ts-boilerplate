import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/user/create.user.dto";
import { UserService } from "../services/user.service";
import { HttpStatusCodes } from "../utils/http.status.codes";
import { failureResponse, successResponse } from "../utils/api.response";

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  try {
    const data: CreateUserDto = req.body;

    const user = await userService.createUser(data);

    return res
      .status(HttpStatusCodes.CREATED)
      .json(successResponse(user, HttpStatusCodes.CREATED));
  } catch (error) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json(failureResponse(error));
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(HttpStatusCodes.SUCCESS).json(successResponse(users));
  } catch (error) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json(failureResponse(error));
  }
};
