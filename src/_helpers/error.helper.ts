export interface ErrorModel {
  error: boolean;
  code: number;
  message: string;
}

/**
 * Create an error body
 * @param err boolean
 * @param code number
 * @param message string
 * @return ErrorModel
 */
export const createErrorBody = (err: boolean, code: number, message: string) => ({err, code, message});
