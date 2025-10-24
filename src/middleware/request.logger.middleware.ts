import { Request, Response, NextFunction } from "express";

/**
 * Logs basic info about every incoming request
 */
export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { method, url, body, params, query } = req;

  console.log(
    `[${new Date().toISOString()}] ${method} ${url} | params: ${JSON.stringify(
      params
    )} | query: ${JSON.stringify(query)} | body: ${JSON.stringify(body)}`
  );

  next();
};
