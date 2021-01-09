import { IApiResponse, IErrorResponse } from '../typings/interfaces'

/**
 * This function is responsible for returning the appropriate error message
 * to the client.
 * @param {number} statusCode Represents the HTTP Status Code
 * @param {string} title Represents the Error Title
 * @param {string} errorMessage Represents the Error message
 * @param {string} stack Represents the Error stack
 */
export function makeHttpError({
  statusCode,
  title,
  errorMessage,
  stack,
}: IErrorResponse) {
  const toReturn = {
    errors: [
      {
        title,
        error: errorMessage,
        stack,
      },
    ],
  }

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    statusCode,
    data: JSON.stringify(toReturn),
  }
}

/**
 * This function is responsible for returning the appropriate API Response
 * to the client
 * @param {boolean} status Represents the Status of the API Response
 * @param {number} statusCode Represents the HTTP Status Code
 * @param {string} message Represents the return messsage from the API
 * @param {any} data Represents the returned data from the API Response
 */
const apiResponse = ({ status, statusCode, message, data }: IApiResponse) => {
  const toReturn = {
    status,
    message,
    data,
  }
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    statusCode,
    data: JSON.stringify(toReturn),
  }
}

export default apiResponse
