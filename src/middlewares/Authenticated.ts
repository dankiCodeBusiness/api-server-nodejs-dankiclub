import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'

const { NODE_ENV_API_KEY } = process.env

export async function authenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearer = request.headers.authorization
  if (!bearer) {
    throw new AppError('User Token is missing', 401)
  }
  try {
    //..
    next()
  } catch {
    throw new AppError('Invalid token.', 401)
  }
}

export async function authorized(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authNodeToken = request.headers.authorization
  if (!authNodeToken) {
    throw new AppError('Authorized Token is missing', 401)
  }
  try {
    if (authNodeToken !== NODE_ENV_API_KEY) {
      throw new AppError('Authorized Token is invalid', 401)
    }

    next()
  } catch {
    throw new AppError('Invalid token.', 401)
  }
}
