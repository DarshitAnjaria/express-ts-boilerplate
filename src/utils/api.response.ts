import { HttpStatusCodes } from "./http.status.codes";

export const successResponse = (
  data: any,
  statusCode: number = HttpStatusCodes.SUCCESS
) => {
  return { statusCode, data };
};

export const failureResponse = (
  error: any,
  statusCode: number = HttpStatusCodes.BAD_REQUEST
) => {
  return { statusCode, error };
};
