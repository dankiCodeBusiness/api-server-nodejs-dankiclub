import { Router } from 'express'
import { authorized } from '../middlewares/Authenticated'
import { UserController } from '../Controllers/UserController'

const router = Router()
const userController = new UserController()

router.get('/user', authorized, userController.user)

export { router }
