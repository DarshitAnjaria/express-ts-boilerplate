import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "../utils/http.status.codes";
import { failureResponse } from "../utils/api.response";

/**
 * Global error handling middleware
 * Must be added as the last middleware in app.ts
 */
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("❌ Unhandled Error:", err);

  const statusCode =
    err.statusCode && typeof err.statusCode === "number"
      ? err.statusCode
      : HttpStatusCodes.INTERNAL_SERVER_ERROR;

  const message = err.message || "Something went wrong on the server";

  return res.status(statusCode).json(failureResponse(message));
};
