import { Router } from "express"
import cors from 'cors'
import UserRegister from '../controllers/Users/register.js'
import validateUser from "../middlewares/user-validate.js"
import UserSchema from "../validations/users.js"
import UserLogin from "../controllers/Users/login.js"
import LoginSchema from "../validations/login.js"
import verifyToken from "../middlewares/verify-token.js"
import CharacterSheet from "../controllers/Character-sheet/character.js"
import GenericRules from "../controllers/rules/generic-rules.js"
import EspecifyRules from "../controllers/rules/specify-rules.js"


const routes = Router()

const corsOpition = {
  exposedHeaders: 'auth-token',
}

routes.use(cors(corsOpition))

routes.post('/register', validateUser(UserSchema), UserRegister.CreatUser)
routes.post('/login', validateUser(LoginSchema), UserLogin.LoginUser)

routes.post('/generic', verifyToken, GenericRules.generic)


routes.post('/especify', verifyToken, EspecifyRules.especify)

routes.post('/character', verifyToken, CharacterSheet.Sheet)



export default routes