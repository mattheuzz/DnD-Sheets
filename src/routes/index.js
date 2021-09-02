import { Router } from "express"
import cors from 'cors'
import UserRegister from '../controllers/Users/register.js'
import validateUser from "../middlewares/user-validate.js"
import UserSchema from "../validations/users.js"
import UserLogin from "../controllers/Users/login.js"
import LoginSchema from "../validations/login.js"
import verifyToken from "../middlewares/verify-token.js"
import CharacterSheetHistory from "../controllers/Character-sheet/history.js"
import MainAttributes from "../controllers/Character-sheet/main-attributes.js"

const routes = Router()

const corsOpition = {
  exposedHeaders: 'auth-token',
}

routes.use(cors(corsOpition))

routes.post('/register', validateUser(UserSchema), UserRegister.CreatUser)
routes.post('/login', validateUser(LoginSchema), UserLogin.LoginUser)

routes.post('/characters/historys', verifyToken, CharacterSheetHistory.Sheet)
routes.post('/characters/historys/:id/main/attributes', verifyToken, MainAttributes.AttributesMain)

export default routes