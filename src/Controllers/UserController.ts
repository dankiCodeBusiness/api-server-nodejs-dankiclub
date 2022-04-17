import { Request, Response } from 'express'
import axios from 'axios'
import { AppError } from '../errors/AppError'
import { v4 as uuidV4 } from 'uuid'

// import { api } from '../services/api'

class UserController {
  async user(request: Request, response: Response): Promise<Response> {
    try {
      // const {data} = await api.get('/user-in-the-another-server', {
      //   headers: {
      //     Authorization: 'keyAuth'
      //   }
      // });
      const data = [
        { id: uuidV4(), name: 'Rafael Pacífico', date: new Date() },
        { id: uuidV4(), name: 'Caroline Pacífico', date: new Date() },
        { id: uuidV4(), name: 'Diana Pacífico', date: new Date() }
      ]
      return response.json(data)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        throw new AppError(e.response.data, e.response.status)
      }
    }
  }
}

export { UserController }
