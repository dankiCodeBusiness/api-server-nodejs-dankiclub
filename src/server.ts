import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

import { AppError } from './errors/AppError'
import { router } from './routes'

const { NODE_ENV_PORT, NODE_ENV } = process.env

const allowedOrigins =
  NODE_ENV === 'local'
    ? [
        'http://localhost:3002',
        'http://localhost:56402',
        'http://localhost:3000'
      ]
    : ['https://nodejs.webstylus.com.br']

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json(err.message)
    }

    return response.status(400).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })
  }
)

app.listen(NODE_ENV_PORT)
