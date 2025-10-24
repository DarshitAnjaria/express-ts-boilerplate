import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/http.status.codes";
import { failureResponse } from "../utils/api.response";

export const validateRequest = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      // Get first error
      const error = errors[0];
      const errorMessage = error
        ? Object.values(error.constraints || {})[0]
        : "Invalid request data";

      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json(failureResponse(errorMessage));
    }

    next();
  };
};
