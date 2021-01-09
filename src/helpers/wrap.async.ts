import { makeHttpError } from './http.response'
import { Request, Response } from 'express'


/**
 * 
 * @param fn
 * This takes in a controller function, which resolves or rejects the promise.
 * The rejected promise is passed onto the catch block which is responsible 
 * for returning the appropriate error details.
 */
export const wrapAsync = (fn: Function) => (req: Request, res: Response) =>
  fn(req, res).catch((error: Error) => {
    console.error('error', error)
    return makeHttpError({
      errorMessage: error.message,
      title: error.name,
      stack: error.stack,
      statusCode: error.statusCode,
    })
  })
